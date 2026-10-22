import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const testDirectory = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(testDirectory, "..");
const appPath = path.join(root, "dist", "app.js");
const htmlPath = path.join(root, "dist", "index.html");
const cssPath = path.join(root, "dist", "styles.css");
const app = fs.readFileSync(appPath, "utf8");
const html = fs.readFileSync(htmlPath, "utf8");
const css = fs.readFileSync(cssPath, "utf8");
const failures = [];
let checks = 0;

function check(condition, message) {
  checks += 1;
  if (!condition) failures.push(message);
}

const dataBoundary = app.indexOf("const qs =");
check(dataBoundary > 0, "Could not locate the application data boundary.");
const context = {};
vm.createContext(context);
vm.runInContext(`${app.slice(0, dataBoundary)}\nglobalThis.__audit = { destinations, translations, hotelProfiles, hotelCatalog, vehicleCatalog, pricing, budgetProfiles, chargedHotelNights, roundedHundred, roomCapacity, requiredRoomCount, requiredVehicleCount, allowedBudgetOverage };`, context);
const { destinations, translations, hotelProfiles, hotelCatalog, vehicleCatalog, pricing, budgetProfiles, chargedHotelNights, roundedHundred, roomCapacity, requiredRoomCount, requiredVehicleCount, allowedBudgetOverage } = context.__audit;

check(destinations.length === 23, `Expected 23 destinations, found ${destinations.length}.`);
check(new Set(destinations).size === destinations.length, "Destination names must be unique.");
check(Object.keys(hotelCatalog).length === destinations.length, "Every destination must have exactly one hotel catalogue entry.");

for (const destination of destinations) {
  const catalogue = hotelCatalog[destination];
  check(Boolean(catalogue), `${destination} is missing a hotel catalogue.`);
  if (!catalogue) continue;
  const profile = hotelProfiles[catalogue.profile];
  check(Boolean(profile), `${destination} uses an unknown hotel profile: ${catalogue.profile}.`);
  if (!profile) continue;
  for (const tier of ["budget", "mid", "premium"]) {
    const hotels = catalogue[tier];
    const tierProfile = profile[tier];
    check(Array.isArray(hotels) && hotels.length >= 3, `${destination} ${tier} needs at least three hotel choices.`);
    check(new Set(hotels).size === hotels.length, `${destination} ${tier} contains duplicate hotel names.`);
    check(tierProfile.rates.length >= hotels.length, `${destination} ${tier} does not have a rate for every hotel.`);
    const numbers = tierProfile.range.match(/[\d,]+/g)?.map((value) => Number(value.replaceAll(",", ""))) || [];
    for (const rate of tierProfile.rates.slice(0, hotels.length)) {
      check(Number.isFinite(rate) && rate > 0, `${destination} ${tier} has an invalid hotel rate.`);
      if (tierProfile.range.startsWith("From")) check(rate >= numbers[0], `${destination} ${tier} rate ${rate} is below its advertised minimum.`);
      else check(rate >= numbers[0] && rate <= numbers[1], `${destination} ${tier} rate ${rate} is outside ${tierProfile.range}.`);
    }
  }
}

const fleetRequirements = {
  moto: ["Scooter", "Sport scooter", "Touring scooter", "Touring"],
  car: ["Sedan", "7-seater", "Van", "Pickup", "Premium"],
  driver: ["Sedan", "7-seater", "Van", "Premium"]
};
const promisedStartingRates = { moto: 200, car: 800, driver: 1700 };
for (const [mode, requiredTypes] of Object.entries(fleetRequirements)) {
  const vehicles = vehicleCatalog[mode];
  const identities = vehicles.map((vehicle) => `${vehicle.brand}|${vehicle.model}|${vehicle.year}`);
  check(new Set(identities).size === identities.length, `${mode} fleet contains duplicate vehicles.`);
  check(Math.min(...vehicles.map((vehicle) => vehicle.rate)) === promisedStartingRates[mode], `${mode} starting rate changed from the promised amount.`);
  for (const vehicle of vehicles) {
    check(Number.isInteger(vehicle.year) && vehicle.year >= 2020, `${vehicle.brand} ${vehicle.model} has an invalid year.`);
    check(Number.isFinite(vehicle.rate) && vehicle.rate > 0, `${vehicle.brand} ${vehicle.model} has an invalid rate.`);
    check(Number.isInteger(vehicle.capacity) && vehicle.capacity >= 2 && vehicle.capacity <= 10, `${vehicle.brand} ${vehicle.model} has an invalid passenger capacity.`);
  }
  for (const type of requiredTypes) {
    check(vehicles.filter((vehicle) => vehicle.type === type).length >= 2, `${mode} ${type} needs at least two model choices.`);
  }
}

for (const tier of Object.values(pricing.tiers)) {
  check(Number.isFinite(tier.activityPerGuestDay) && tier.activityPerGuestDay > 0, `${tier.label} is missing an activity allowance.`);
  check(tier.activityPerGuestDay < tier.perGuestDay, `${tier.label} activity allowance must remain inside the package price.`);
}
check(roomCapacity("normal") === 2 && roomCapacity("family") === 4 && roomCapacity("presidential") === 4, "Room capacities are incorrect.");
check(requiredRoomCount("normal", 12) === 6, "Twelve travelers must require six normal rooms.");
check(requiredRoomCount("family", 12) === 3, "Twelve travelers must require three family rooms.");
check(requiredVehicleCount(vehicleCatalog.moto[0], 12) === 6, "Twelve travelers must require six motorcycles.");
check(requiredVehicleCount(vehicleCatalog.car.find((vehicle) => vehicle.model === "5 Series"), 12) === 3, "Premium sedan capacity is incorrect.");
check(requiredVehicleCount(vehicleCatalog.driver.find((vehicle) => vehicle.model.startsWith("Alphard")), 12) === 2, "Alphard capacity is incorrect.");
for (const maximum of [2000, 5000, 15000, 50000]) {
  const overage = allowedBudgetOverage(maximum);
  check(overage <= 2500, `Budget overage cap exceeded for ${maximum}.`);
  check(overage <= roundedHundred(maximum * 0.06) || overage === 100, `Budget overage is not approximately six percent for ${maximum}.`);
}

const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
const idSet = new Set(ids);
check(idSet.size === ids.length, "HTML IDs must be unique.");
check(!/&(?!(?:amp|lt|gt|quot|apos|#\d+|#x[0-9A-Fa-f]+);)/.test(html), "HTML contains an unescaped ampersand.");
check((css.match(/{/g) || []).length === (css.match(/}/g) || []).length, "CSS braces are unbalanced.");
for (const match of html.matchAll(/(?:href="#|\bfor="|aria-controls=")([^"]+)"/g)) {
  check(idSet.has(match[1]), `HTML reference points to missing ID: ${match[1]}.`);
}
for (const match of app.matchAll(/qs?a?\(["']#([A-Za-z][\w-]*)/g)) {
  check(idSet.has(match[1]), `JavaScript selector points to missing ID: ${match[1]}.`);
}
for (const image of html.matchAll(/<img\b[^>]*>/g)) {
  check(/\balt="[^"]*"/.test(image[0]), `Image is missing alt text: ${image[0]}`);
}
for (const button of html.matchAll(/<button\b[^>]*>/g)) {
  check(/\btype="(?:button|submit)"/.test(button[0]), `Button is missing an explicit type: ${button[0]}`);
}
for (const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
  const reference = match[1];
  if (/^(?:https?:|#|mailto:|tel:)/.test(reference)) continue;
  check(fs.existsSync(path.join(root, "dist", reference)), `Missing local asset: ${reference}.`);
}

const translationKeys = [...html.matchAll(/data-i18n="([^"]+)"/g)].map((match) => match[1]);
for (const language of ["en", "th"]) {
  for (const key of translationKeys) check(Boolean(translations[language][key]), `${language} translation is missing: ${key}.`);
}

check(/quickDestinationSelect\.innerHTML\s*=\s*destinations/.test(app), "Quick destination finder is not synchronized with all destinations.");
check(/const nights = hotelSelect\.value === "own" \? 0 : chargedHotelNights\(days\)/.test(app), "Own-hotel nights are not excluded correctly.");
check(/return Math\.max\(1, days - 1\)/.test(app), "One-day journeys must charge one hotel night.");
check(/if \(!validatePreviewCard\(\)\) return;/.test(app), "Preview checkout is missing card validation.");
check(/vehicleTypeSelect\.value = "";\s*\n\s*syncTransportFields\(true\)/.test(app), "Changing transport modes must reset to that mode's starting vehicle category.");
check(/modal === plannerModal[\s\S]*?checkout-card input[\s\S]*?input\.value = ""/.test(app), "Card details must be cleared when the planner closes.");
check(/returnFocus\?\.isConnected[\s\S]*?returnFocus\.focus\(\)/.test(app), "Closing a modal must restore keyboard focus to its opener.");
check(/rows\.push\(\["Special requests", specialRequest\]\)/.test(app), "Special requests are missing from the booking review.");
check(/const hasBudget = range\.hasMinimum && range\.hasMaximum;/.test(app), "Meal allowance must require an explicit minimum and maximum.");
check(/const suggested = hasBudget \? roundedHundred\(base \+ fineDiningSupplement\) : 0;/.test(app), "Blank meal budgets must produce a zero allowance.");
check(/No meal budget added · ฿0/.test(app), "Blank meal-budget guidance must clearly show ฿0.");
check(/optionSet\.map\(\(candidate\) => candidate\.hotelName\)/.test(app), "Hotel budget matches must list only hotels that actually fit.");
check(/requiredVehicleCount\(vehicle, travelers\)/.test(app), "Vehicle quantities must use declared passenger capacity.");
check(/requiredRoomCount\(roomCategorySelect\.value, travelers\)/.test(app), "Room quantities must use room-category capacity.");
check(/Nothing is submitted or stored/.test(html), "The prototype checkout must warn users that card details are not submitted.");
check(idSet.has("must-see") && idSet.has("pickup-point") && idSet.has("fill-test-card"), "Customer customization or safe test-payment controls are missing.");
check(idSet.has("estimate-label") && /meals\.hasBudget \? "Estimated total trip spend" : "Website estimate · meals excluded"/.test(app), "The estimate label must say when meals are excluded.");
check(/modal === accountModal[\s\S]*?input\[type="password"\][\s\S]*?input\.value = ""/.test(app), "Account passwords must be cleared when the modal closes.");

let calculationScenarios = 0;
const roomMultipliers = Object.values(pricing.roomCategoryMultipliers);
const viewMultipliers = Object.values(pricing.roomViewMultipliers);
for (const destination of destinations) {
  const catalogue = hotelCatalog[destination];
  for (const tier of ["budget", "mid", "premium"]) {
    const tierProfile = hotelProfiles[catalogue.profile][tier];
    for (const days of [1, 3, 7, 14, 30]) {
      const nights = chargedHotelNights(days);
      check(days !== 1 || nights === 1, "A one-day journey must include one hotel night.");
      for (const travelers of [1, 2, 5, 12]) {
        const rooms = Math.max(1, Math.ceil(travelers / 2));
        const plan = pricing.tiers[tier].perGuestDay * travelers * days;
        for (const rate of tierProfile.rates.slice(0, catalogue[tier].length)) {
          for (const roomMultiplier of roomMultipliers) {
            for (const viewMultiplier of viewMultipliers) {
              const hotel = Math.round(rate * roomMultiplier * viewMultiplier * rooms * nights);
              for (const vehicle of [null, ...vehicleCatalog.moto, ...vehicleCatalog.car, ...vehicleCatalog.driver]) {
                const vehicleCount = requiredVehicleCount(vehicle, travelers);
                const transport = vehicle ? vehicle.rate * days * vehicleCount : 0;
                const cardPayment = plan + hotel + transport;
                const activityAllowance = pricing.tiers[tier].activityPerGuestDay * travelers * days;
                check(activityAllowance < plan, `Activity allowance must stay inside the package in ${destination} ${tier}.`);
                for (const mealAllowance of [0, budgetProfiles[tier].mealPerGuestDay * travelers * days, 5000]) {
                  const totalSpend = cardPayment + mealAllowance;
                  calculationScenarios += 1;
                  check(Number.isInteger(totalSpend) && totalSpend - mealAllowance === cardPayment && cardPayment >= hotel, `Invalid total in ${destination} ${tier}.`);
                  if (mealAllowance === 0) check(totalSpend === cardPayment, `Blank meal budget changed the card payment in ${destination} ${tier}.`);
                }
              }
            }
          }
        }
      }
    }
  }
}

const exactPlan = pricing.tiers.mid.perGuestDay;
const exactHotel = Math.round(3400 * pricing.roomViewMultipliers.landscape);
const exactTransport = vehicleCatalog.car.find((vehicle) => vehicle.brand === "Honda" && vehicle.model === "City").rate;
check(exactPlan + exactHotel + exactTransport === 6190, "A blank meal budget must keep the reported one-day Bangkok total at ฿6,190.");
check(exactPlan + exactHotel + exactTransport === 6190, "The reported one-day Bangkok card payment must be ฿6,190.");
check(pricing.tiers.mid.activityPerGuestDay === 450 && exactPlan - pricing.tiers.mid.activityPerGuestDay === 1000, "Mid-range package split must remain ฿1,000 support + ฿450 activities.");

if (failures.length) {
  console.error(`Audit failed: ${failures.length} problem(s) across ${checks.toLocaleString()} checks.`);
  failures.slice(0, 50).forEach((failure) => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log(`Audit passed: ${checks.toLocaleString()} checks and ${calculationScenarios.toLocaleString()} price scenarios.`);
  console.log(`Coverage: ${destinations.length} destinations, ${destinations.length * 9} hotels, ${Object.values(vehicleCatalog).flat().length} vehicles.`);
}
