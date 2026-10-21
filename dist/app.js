const destinations = [
  "Chiang Mai", "Chiang Rai", "Pattaya", "Phuket", "Bangkok", "Krabi", "Rayong", "Hua Hin", "Cha-am", "Kanchanaburi", "Koh Samui", "Nakhon Nayok", "Khao Kho", "Khao Yai", "Koh Phi Phi", "Koh Tao", "Koh Phangan", "Koh Lipe", "Koh Chang", "Koh Samet", "Ayutthaya", "Sukhothai", "Koh Larn"
];

const translations = {
  en: {
    "nav.destinations": "Destinations", "nav.packages": "Journeys", "nav.rentals": "Self-drive", "nav.why": "Why us", "nav.signin": "Sign in", "nav.plan": "Plan my trip",
    "hero.eyebrow": "PRIVATE JOURNEYS · BEAUTIFULLY ARRANGED", "hero.title": "Thailand,<br><em>tailored to you.</em>", "hero.copy": "Arrive with a dream. We shape the stay, the table, the road, and every remarkable moment in between.", "hero.cta": "Create my journey", "hero.explore": "Explore signature journeys",
    "finder.where": "Where would you like to go?", "finder.duration": "Journey length", "finder.style": "Travel style",
    "intro.eyebrow": "YOUR THAILAND, YOUR RHYTHM", "intro.title": "Not a fixed tour.<br>A journey that fits.", "intro.copy": "We begin when you arrive. Choose the places, pace, hotel, restaurants, and how you move—we arrange the details around you.", "intro.link": "See how it works <span>→</span>",
    "benefit.one.title": "Made around you", "benefit.one.copy": "Adjust your days, destinations, dining, and stays before you confirm.", "benefit.two.title": "One seamless arrival", "benefit.two.copy": "From airport welcome to every local transfer, your route is handled.", "benefit.three.title": "Travel your way", "benefit.three.copy": "Choose a private driver or take the wheel with a car or motorcycle.", "benefit.four.title": "Book with confidence", "benefit.four.copy": "Free cancellation, less only any hotel fee that cannot be refunded.",
    "dest.eyebrow": "23 PLACES TO BEGIN", "dest.title": "Find your kind of Thailand.", "dest.all": "All", "dest.city": "Cities", "dest.nature": "Nature", "dest.island": "Islands", "dest.viewall": "View all destinations",
    "journeys.eyebrow": "SIGNATURE STARTING POINTS", "journeys.title": "Stay for a day.<br>Remember it for years.", "journeys.copy": "Every journey is editable. Swap a place, extend a stay, choose a different table—nothing is fixed until you confirm.",
    "style.eyebrow": "TRAVEL THAT FEELS LIKE YOU", "style.title": "Different ages.<br>Different energies.<br><em>Your kind of wonderful.</em>", "style.slow.title": "Slow & serene", "style.slow.copy": "Temples, gardens, rivers, gentle days", "style.social.title": "Social & vibrant", "style.social.copy": "Cozy cafés, beaches, nightlife, city energy", "style.family.title": "Family explorer", "style.family.copy": "Easy logistics, shared discovery, flexible pace", "style.island.title": "Island reset", "style.island.copy": "Turquoise water, soft sand, nothing rushed",
    "rental.eyebrow": "TAKE YOUR OWN ROAD", "rental.title": "Prefer the wheel?", "rental.copy": "Choose the vehicle type, brand, model, and year that suits you. Self-drive cars start from ฿800 per day; a private car with driver starts from ฿1,700 per day.", "rental.one": "Motorcycles priced by brand and model", "rental.two": "Hotel or airport handover options", "rental.three": "Sedan, 7-seater, van, premium, or pickup", "rental.cta": "Explore self-drive",
    "promise.eyebrow": "A CLEAR CANCELLATION PROMISE", "promise.title": "Plans can change.<br>Peace of mind shouldn’t.", "promise.copy": "Cancel without a Twar Mal cancellation fee and receive a full refund. If your chosen hotel has a non-refundable policy, only that hotel charge is deducted.", "promise.note": "Your exact hotel conditions are shown before card payment.",
    "final.eyebrow": "YOUR JOURNEY STARTS HERE", "final.title": "Where will Thailand<br><em>take you?</em>", "final.cta": "Start planning"
  },
  th: {
    "nav.destinations": "จุดหมาย", "nav.packages": "แพ็กเกจ", "nav.rentals": "เช่ารถขับเอง", "nav.why": "ทำไมต้องเรา", "nav.signin": "เข้าสู่ระบบ", "nav.plan": "วางแผนทริป",
    "hero.eyebrow": "ทริปส่วนตัว · ออกแบบอย่างพิถีพิถัน", "hero.title": "เที่ยวเมืองไทย<br><em>ในแบบของคุณ</em>", "hero.copy": "แค่บอกความฝัน เราจะจัดที่พัก ร้านอาหาร การเดินทาง และทุกช่วงเวลาพิเศษให้ลงตัว", "hero.cta": "สร้างทริปของฉัน", "hero.explore": "ดูทริปแนะนำ",
    "finder.where": "อยากไปที่ไหน?", "finder.duration": "ระยะเวลา", "finder.style": "สไตล์การเที่ยว",
    "intro.eyebrow": "เมืองไทยของคุณ จังหวะของคุณ", "intro.title": "ไม่ใช่ทัวร์สำเร็จรูป<br>แต่เป็นทริปที่พอดี", "intro.copy": "เราเริ่มดูแลตั้งแต่คุณมาถึง เลือกสถานที่ จังหวะ ที่พัก ร้านอาหาร และการเดินทาง แล้วเราจัดรายละเอียดทั้งหมดให้", "intro.link": "ดูขั้นตอน <span>→</span>",
    "benefit.one.title": "ออกแบบรอบตัวคุณ", "benefit.one.copy": "ปรับวัน สถานที่ ร้านอาหาร และที่พักได้ก่อนยืนยัน", "benefit.two.title": "เดินทางราบรื่น", "benefit.two.copy": "ตั้งแต่รับที่สนามบินจนถึงทุกการเดินทางในพื้นที่", "benefit.three.title": "เที่ยวในแบบคุณ", "benefit.three.copy": "เลือกรถพร้อมคนขับ หรือขับรถยนต์และมอเตอร์ไซค์เอง", "benefit.four.title": "จองอย่างสบายใจ", "benefit.four.copy": "ยกเลิกฟรี หักเฉพาะค่าโรงแรมที่ไม่สามารถคืนได้",
    "dest.eyebrow": "23 จุดหมายให้เริ่มต้น", "dest.title": "พบเมืองไทยในแบบที่คุณชอบ", "dest.all": "ทั้งหมด", "dest.city": "เมือง", "dest.nature": "ธรรมชาติ", "dest.island": "เกาะ", "dest.viewall": "ดูจุดหมายทั้งหมด",
    "journeys.eyebrow": "ทริปแนะนำสำหรับเริ่มต้น", "journeys.title": "อยู่เพียงหนึ่งวัน<br>จดจำไปอีกหลายปี", "journeys.copy": "ทุกทริปแก้ไขได้ เปลี่ยนสถานที่ เพิ่มวัน หรือเลือกร้านใหม่ ทุกอย่างยืดหยุ่นจนกว่าคุณจะยืนยัน",
    "style.eyebrow": "การเดินทางที่เป็นตัวคุณ", "style.title": "ต่างวัย ต่างพลัง<br><em>แต่พิเศษในแบบของคุณ</em>", "style.slow.title": "สบายและสงบ", "style.slow.copy": "วัด สวน แม่น้ำ และวันสบาย ๆ", "style.social.title": "สนุกและมีสีสัน", "style.social.copy": "คาเฟ่ ชายหาด ชีวิตกลางคืน และเมือง", "style.family.title": "ครอบครัวนักสำรวจ", "style.family.copy": "เดินทางง่าย ค้นพบร่วมกัน จังหวะยืดหยุ่น", "style.island.title": "พักใจบนเกาะ", "style.island.copy": "ทะเลสีฟ้า หาดนุ่ม และไม่ต้องเร่งรีบ",
    "rental.eyebrow": "เลือกเส้นทางด้วยตัวเอง", "rental.title": "อยากขับเองไหม?", "rental.copy": "เลือกประเภทรถ ยี่ห้อ รุ่น และปี รถเช่าขับเองเริ่มต้น ฿800 ต่อวัน และรถพร้อมคนขับเริ่มต้น ฿1,700 ต่อวัน", "rental.one": "มอเตอร์ไซค์คิดราคาตามยี่ห้อและรุ่น", "rental.two": "รับรถที่โรงแรมหรือสนามบิน", "rental.three": "รถเก๋ง 7 ที่นั่ง รถตู้ รถพรีเมียม หรือกระบะ", "rental.cta": "ดูรถเช่าขับเอง",
    "promise.eyebrow": "คำสัญญาเรื่องการยกเลิก", "promise.title": "แผนเปลี่ยนได้<br>ความสบายใจไม่ควรเปลี่ยน", "promise.copy": "ยกเลิกได้โดยไม่มีค่าธรรมเนียมจาก Twar Mal และรับเงินคืนเต็มจำนวน หากโรงแรมที่เลือกไม่คืนเงิน จะหักเฉพาะค่าโรงแรมนั้น", "promise.note": "เงื่อนไขโรงแรมจะแสดงชัดเจนก่อนชำระด้วยบัตร",
    "final.eyebrow": "การเดินทางเริ่มที่นี่", "final.title": "เมืองไทยจะพาคุณ<br><em>ไปที่ไหน?</em>", "final.cta": "เริ่มวางแผน"
  }
};

const hotelProfiles = {
  chiangMai: { budget: { range: "฿700–฿1,200", rates: [850, 1100] }, mid: { range: "฿1,300–฿2,500", rates: [1600, 2300] }, premium: { range: "From ฿2,500", rates: [3500, 6500] } },
  northern: { budget: { range: "฿700–฿1,300", rates: [800, 1150] }, mid: { range: "฿1,400–฿2,800", rates: [1700, 2400] }, premium: { range: "From ฿3,000", rates: [3800, 6000] } },
  bangkok: { budget: { range: "฿1,200–฿2,500", rates: [1400, 2100] }, mid: { range: "฿3,000–฿7,000", rates: [3400, 5200] }, premium: { range: "From ฿8,000", rates: [8500, 12000] } },
  pattaya: { budget: { range: "฿900–฿1,800", rates: [1000, 1500] }, mid: { range: "฿1,800–฿3,500", rates: [2100, 3000] }, premium: { range: "From ฿4,000", rates: [4800, 7500] } },
  phuket: { budget: { range: "฿1,200–฿2,500", rates: [1500, 2200] }, mid: { range: "฿2,800–฿6,000", rates: [3400, 5200] }, premium: { range: "From ฿6,500", rates: [7500, 12000] } },
  krabi: { budget: { range: "฿900–฿1,900", rates: [1100, 1650] }, mid: { range: "฿2,000–฿4,500", rates: [2400, 3800] }, premium: { range: "From ฿5,000", rates: [5800, 9000] } },
  coast: { budget: { range: "฿800–฿1,700", rates: [950, 1450] }, mid: { range: "฿1,800–฿3,800", rates: [2200, 3300] }, premium: { range: "From ฿4,500", rates: [5200, 8500] } },
  island: { budget: { range: "฿1,000–฿2,600", rates: [1300, 2200] }, mid: { range: "฿2,800–฿6,000", rates: [3300, 5200] }, premium: { range: "From ฿6,500", rates: [7200, 11000] } },
  nature: { budget: { range: "฿700–฿1,400", rates: [850, 1200] }, mid: { range: "฿1,400–฿3,000", rates: [1700, 2600] }, premium: { range: "From ฿3,200", rates: [3800, 6500] } },
  heritage: { budget: { range: "฿700–฿1,300", rates: [800, 1150] }, mid: { range: "฿1,400–฿2,800", rates: [1650, 2400] }, premium: { range: "From ฿3,000", rates: [3400, 5200] } },
  kohLarn: { budget: { range: "฿900–฿1,500", rates: [1000, 1350] }, mid: { range: "฿1,600–฿2,800", rates: [1900, 2500] }, premium: { range: "From ฿3,200", rates: [3800, 5200] } }
};

const hotelCatalog = {
  "Chiang Mai": { profile: "chiangMai", budget: ["Hop Inn Chiang Mai Airport", "B2 Chiang Mai Boutique"], mid: ["Sabai Sabai Chiang Mai Hotel", "De Lanna Hotel"], premium: ["Raya Heritage", "Anantara Chiang Mai Resort"] },
  "Chiang Rai": { profile: "northern", budget: ["Hop Inn Chiang Rai", "B2 Chiang Rai Boutique & Budget"], mid: ["The Heritage Chiang Rai Hotel", "Laluna Hotel & Resort"], premium: ["Le Méridien Chiang Rai Resort", "The Riverie by Katathani"] },
  Pattaya: { profile: "pattaya", budget: ["Red Planet Pattaya", "ibis Pattaya"], mid: ["Hotel Amber Pattaya", "Centara Life Avenue Hotel Pattaya"], premium: ["Andaz Pattaya Jomtien Beach", "MASON Pattaya"] },
  Phuket: { profile: "phuket", budget: ["Lub d Phuket Patong", "The Crib Patong"], mid: ["Deevana Plaza Phuket Patong", "Sugar Marina Resort"], premium: ["The Nai Harn Phuket", "The Slate"] },
  Bangkok: { profile: "bangkok", budget: ["ibis Bangkok Siam", "Rambuttri Village Inn & Plaza"], mid: ["The Quarter Ari by UHG", "Centara Watergate Pavilion Hotel"], premium: ["The Okura Prestige Bangkok", "Mandarin Oriental Bangkok"] },
  Krabi: { profile: "krabi", budget: ["ibis Styles Krabi Ao Nang", "Wake Up Aonang Hotel"], mid: ["Holiday Inn Resort Krabi Ao Nang Beach", "Aonang Villa Resort"], premium: ["Rayavadee", "Banyan Tree Krabi"] },
  Rayong: { profile: "coast", budget: ["Hop Inn Rayong", "PLAAI Plus Hotel Rayong"], mid: ["Holiday Inn & Suites Rayong City Centre", "Novotel Rayong Star Convention Centre"], premium: ["Rayong Marriott Resort & Spa", "Le Vimarn Cottages & Spa"] },
  "Hua Hin": { profile: "coast", budget: ["ibis Hua Hin", "Hua Hin Terminal"], mid: ["Amari Hua Hin", "G Hua Hin Resort & Mall"], premium: ["Anantara Hua Hin Resort", "Chiva-Som Hua Hin"] },
  "Cha-am": { profile: "coast", budget: ["Cha Am My House", "The Beach Cha Am Guest House"], mid: ["Centara Life Cha-Am Beach Resort", "FuramaXclusive Sandara Hua Hin"], premium: ["SO/ Sofitel Hua Hin", "Dusit Thani Hua Hin"] },
  Kanchanaburi: { profile: "nature", budget: ["Hop Inn Kanchanaburi", "Pongphen Guesthouse"], mid: ["Natee The Riverfront Hotel", "U Inchantree Kanchanaburi"], premium: ["The FloatHouse River Kwai", "Dheva Mantra Resort"] },
  "Koh Samui": { profile: "island", budget: ["Lub d Koh Samui Chaweng Beach", "Samui Verticolor"], mid: ["Outrigger Koh Samui Beach Resort", "Chaweng Regent Beach Resort"], premium: ["SALA Samui Choengmon Beach Resort", "Cape Fahn Hotel"] },
  "Nakhon Nayok": { profile: "nature", budget: ["Field Town Apartment", "Baan Suan Khun Yaiy"], mid: ["At Rice Resort", "Villa Panalai"], premium: ["The Forest Home Resort", "Royal Hills Golf Resort & Spa"] },
  "Khao Kho": { profile: "nature", budget: ["Khao Kho Overview Resort", "Phukaew Resort"], mid: ["Pino Latte Resort & Hotel", "Krin Resort"], premium: ["The Blue Sky Resort Khao Kho", "Sirinati Khao Kho"] },
  "Khao Yai": { profile: "nature", budget: ["Pakchong Phubade Hotel", "Khao Yai Garden Lodge"], mid: ["dusitD2 Khao Yai", "Botanica Khao Yai"], premium: ["InterContinental Khao Yai Resort", "Mövenpick Resort Khao Yai"] },
  "Koh Phi Phi": { profile: "island", budget: ["Ibiza House Phi Phi", "Coco's Guesthouse"], mid: ["Phi Phi CoCo Beach Resort", "Phi Phi Cliff Beach Resort"], premium: ["SAii Phi Phi Island Village", "Zeavola Resort"] },
  "Koh Tao": { profile: "island", budget: ["Sairee Cottage Resort", "Good Dream Hotel"], mid: ["Ban's Diving Resort", "Koh Tao Cabana"], premium: ["Cape Shark Villas", "Jamahkiri Dive Resort & Spa"] },
  "Koh Phangan": { profile: "island", budget: ["Shiralea Backpackers Resort", "Phanganist Hostel"], mid: ["Phangan Bayshore Resort", "Summer Luxury Beach Resort"], premium: ["Anantara Rasananda Koh Phangan Villas", "Santhiya Koh Phangan Resort & Spa"] },
  "Koh Lipe": { profile: "island", budget: ["The Reef Hotel", "Bloom Cafe & Hostel"], mid: ["Akira Lipe Resort", "Idyllic Concept Resort"], premium: ["Irene Pool Villa Resort", "Serendipity Beach Resort"] },
  "Koh Chang": { profile: "island", budget: ["Pajamas Koh Chang", "Nature Beach Resort"], mid: ["KC Grande Resort Koh Chang", "Awa Resort Koh Chang"], premium: ["The Retreat Koh Chang", "GajaPuri Resort Koh Chang"] },
  "Koh Samet": { profile: "island", budget: ["Samed Green Inn", "Runa Runa Best Guesthouse"], mid: ["Sai Kaew Beach Resort", "Ao Prao Resort"], premium: ["Paradee", "Le Vimarn Cottages & Spa"] },
  Ayutthaya: { profile: "heritage", budget: ["Hop Inn Ayutthaya", "Baan Luang Harn"], mid: ["Sala Ayutthaya", "Centara Ayutthaya"], premium: ["Baan Pomphet", "Kantary Hotel Ayutthaya"] },
  Sukhothai: { profile: "heritage", budget: ["TR Guesthouse", "OldTown Boutique House"], mid: ["Legendha Sukhothai", "Thai Thai Sukhothai Resort"], premium: ["Sriwilai Sukhothai", "Sukhothai Treasure Resort & Spa"] },
  "Koh Larn": { profile: "kohLarn", budget: ["Lareena Resort Koh Larn Pattaya", "Chill Days @ Koh Larn"], mid: ["Suntosa Resort", "Samanta by the Sea"], premium: ["Myth Koh Larn Resort", "Rocco Villa Koh Larn"] }
};

const vehicleCatalog = {
  moto: [
    { type: "Scooter", brand: "Honda", model: "Scoopy", year: 2023, rate: 200 },
    { type: "Scooter", brand: "Yamaha", model: "Fazzio", year: 2024, rate: 250 },
    { type: "Sport scooter", brand: "Honda", model: "Click 160", year: 2024, rate: 300 },
    { type: "Touring scooter", brand: "Yamaha", model: "NMAX 155", year: 2024, rate: 450 },
    { type: "Touring", brand: "Honda", model: "Forza 350", year: 2024, rate: 800 }
  ],
  car: [
    { type: "Sedan", brand: "Toyota", model: "Yaris Ativ", year: 2022, rate: 800 },
    { type: "Sedan", brand: "Honda", model: "City", year: 2023, rate: 1000 },
    { type: "7-seater", brand: "Toyota", model: "Fortuner", year: 2022, rate: 1600 },
    { type: "Van", brand: "Toyota", model: "Commuter", year: 2023, rate: 2200 },
    { type: "Pickup", brand: "Isuzu", model: "D-Max", year: 2023, rate: 1300 },
    { type: "Premium", brand: "BMW", model: "5 Series", year: 2023, rate: 3500 }
  ],
  driver: [
    { type: "Sedan", brand: "Toyota", model: "Yaris Ativ + driver", year: 2022, rate: 1700 },
    { type: "Sedan", brand: "Toyota", model: "Camry + driver", year: 2023, rate: 2200 },
    { type: "7-seater", brand: "Toyota", model: "Fortuner + driver", year: 2022, rate: 2500 },
    { type: "Van", brand: "Toyota", model: "Commuter + driver", year: 2023, rate: 2800 },
    { type: "Premium", brand: "Mercedes-Benz", model: "E-Class + driver", year: 2023, rate: 4500 }
  ]
};

const pricing = {
  tiers: {
    budget: { label: "Budget Friendly", perGuestDay: 900 },
    mid: { label: "Mid-range", perGuestDay: 1450 },
    premium: { label: "Premium", perGuestDay: 2650 }
  },
  roomCategoryMultipliers: { normal: 1, family: 1.6, presidential: 4 },
  roomViewMultipliers: { standard: 1, landscape: 1.1, mountain: 1.15, sea: 1.25 }
};

const qs = (selector, scope = document) => scope.querySelector(selector);
const qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const plannerModal = qs("#planner-modal");
const accountModal = qs("#account-modal");
const plannerForm = qs("#planner-form");
const bookingReview = qs(".booking-review");
const destinationSelect = qs("#planner-destination");
const durationSelect = qs("#planner-duration");
const travelerInput = qs("#traveler-count");
const hotelSelect = qs("#hotel-choice");
const roomCategorySelect = qs("#room-category");
const roomViewSelect = qs("#room-view");
const bedTypeSelect = qs("#bed-type");
const roomCountInput = qs("#room-count");
const transportSelect = qs("#transport-choice");
const vehicleTypeSelect = qs("#vehicle-type");
const vehicleModelSelect = qs("#vehicle-model");
const vehicleCountInput = qs("#vehicle-count");
const tierInputs = qsa('[name="plan-tier"]');
let currentLanguage = "en";
let toastTimer;
let mealPlans = [];

destinations.forEach((name) => {
  const option = document.createElement("option");
  option.value = option.textContent = name;
  destinationSelect.append(option);
});
destinationSelect.value = "Bangkok";

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
qs("#start-date").min = tomorrow.toISOString().split("T")[0];
qs("#start-date").value = new Date(tomorrow.setDate(tomorrow.getDate() + 20)).toISOString().split("T")[0];

function formatTHB(amount) {
  return new Intl.NumberFormat("th-TH", { style: "currency", currency: "THB", maximumFractionDigits: 0 }).format(amount);
}

function durationDays() {
  return durationSelect.value === "custom" ? Number(qs("#custom-days").value || 1) : Number(durationSelect.value);
}

function selectedTier() {
  return qs('[name="plan-tier"]:checked').value;
}

function chooseTier(tier) {
  const input = qs(`[name="plan-tier"][value="${tier}"]`);
  if (input) input.checked = true;
}

function syncHotels(preserveSelection = false) {
  const catalog = hotelCatalog[destinationSelect.value];
  const tier = selectedTier();
  const profile = hotelProfiles[catalog.profile][tier];
  const previous = preserveSelection ? hotelSelect.value : "";
  hotelSelect.innerHTML = "";
  catalog[tier].forEach((name, index) => {
    const option = document.createElement("option");
    option.value = `${tier}-${index}`;
    option.dataset.rate = String(profile.rates[index] || profile.rates[0]);
    option.textContent = `${name} · est. ${formatTHB(Number(option.dataset.rate))} / room / night`;
    hotelSelect.append(option);
  });
  const recommend = document.createElement("option");
  recommend.value = "recommend";
  recommend.dataset.rate = String(profile.rates[0]);
  recommend.textContent = `Let Twar Mal recommend another ${pricing.tiers[tier].label.toLowerCase()} hotel`;
  hotelSelect.append(recommend);
  const own = document.createElement("option");
  own.value = "own";
  own.dataset.rate = "0";
  own.textContent = "I’ll book my own hotel · ฿0";
  hotelSelect.append(own);
  if (previous && qsa("option", hotelSelect).some((option) => option.value === previous)) hotelSelect.value = previous;
  qs("#hotel-range-note").textContent = `${destinationSelect.value} · ${pricing.tiers[tier].label} range ${profile.range} per room/night. Examples are researched planning estimates; live dates are confirmed before payment.`;
}

function selectedHotelRate() {
  return Number(hotelSelect.selectedOptions[0]?.dataset.rate || 0);
}

function selectedVehicle() {
  if (transportSelect.value === "none") return null;
  return vehicleCatalog[transportSelect.value].find((vehicle) => vehicleModelSelect.value === `${vehicle.brand}-${vehicle.model}-${vehicle.year}`) || null;
}

function syncVehicleModels() {
  const mode = transportSelect.value;
  if (mode === "none") return;
  const previous = vehicleModelSelect.value;
  vehicleModelSelect.innerHTML = "";
  vehicleCatalog[mode].filter((vehicle) => vehicle.type === vehicleTypeSelect.value).forEach((vehicle) => {
    const option = document.createElement("option");
    option.value = `${vehicle.brand}-${vehicle.model}-${vehicle.year}`;
    option.textContent = `${vehicle.brand} ${vehicle.model} · ${vehicle.year} · ${formatTHB(vehicle.rate)} / day`;
    vehicleModelSelect.append(option);
  });
  if (qsa("option", vehicleModelSelect).some((option) => option.value === previous)) vehicleModelSelect.value = previous;
}

function syncTransportFields(showNotice = false) {
  const isKohLarn = destinationSelect.value === "Koh Larn";
  const carOption = qs('#transport-choice option[value="car"]');
  const driverOption = qs('#transport-choice option[value="driver"]');
  carOption.disabled = isKohLarn;
  driverOption.disabled = isKohLarn;
  carOption.textContent = isKohLarn ? "Self-drive car · unavailable on Koh Larn" : "Self-drive car · from ฿800 / day";
  driverOption.textContent = isKohLarn ? "Private car + driver · unavailable on Koh Larn" : "Private car + driver · from ฿1,700 / day";

  if (isKohLarn && ["car", "driver"].includes(transportSelect.value)) {
    transportSelect.value = "moto";
    if (showNotice) showToast("Koh Larn allows motorcycle rental only — your transport was changed.");
  }

  const hasVehicle = transportSelect.value !== "none";
  qsa(".vehicle-detail-field").forEach((field) => { field.hidden = !hasVehicle; });
  qs(".vehicle-count-field").hidden = !hasVehicle;
  if (!hasVehicle) {
    qs("#transport-policy").textContent = isKohLarn ? "Koh Larn: only motorcycle rental is available." : "Choose a vehicle type and model to see its daily rate.";
    return;
  }

  const mode = transportSelect.value;
  const previousType = vehicleTypeSelect.value;
  const types = [...new Set(vehicleCatalog[mode].map((vehicle) => vehicle.type))];
  vehicleTypeSelect.innerHTML = types.map((type) => `<option>${type}</option>`).join("");
  if (types.includes(previousType)) vehicleTypeSelect.value = previousType;
  syncVehicleModels();
  qs("#vehicle-count-label").textContent = mode === "moto" ? "Motorcycles" : mode === "driver" ? "Driver vehicles" : "Cars";
  const vehicle = selectedVehicle();
  qs("#transport-policy").textContent = isKohLarn
    ? `Koh Larn motorcycle rate: ${formatTHB(vehicle?.rate || 200)} per vehicle/day.`
    : `${vehicle ? `${vehicle.brand} ${vehicle.model}: ${formatTHB(vehicle.rate)} per vehicle/day.` : "Choose a model."} Fuel, tolls, parking, ferry charges, overtime, and deposits are confirmed separately.`;
}

function syncMealDayOptions() {
  const days = Math.max(1, durationDays());
  const previous = Number(qs("#meal-day").value || 1);
  qs("#meal-day").innerHTML = Array.from({ length: days }, (_, index) => `<option value="${index + 1}">Day ${index + 1}</option>`).join("");
  qs("#meal-day").value = String(Math.min(previous, days));
  mealPlans = mealPlans.filter((meal) => meal.day <= days);
  renderMealPlans();
}

function renderMealPlans() {
  const list = qs("#meal-plan-list");
  list.innerHTML = "";
  if (!mealPlans.length) {
    const empty = document.createElement("span");
    empty.className = "meal-empty";
    empty.textContent = "No meals planned yet. Restaurant costs stay outside this total.";
    list.append(empty);
    return;
  }
  mealPlans.sort((a, b) => a.day - b.day || ["Breakfast", "Lunch", "Dinner"].indexOf(a.meal) - ["Breakfast", "Lunch", "Dinner"].indexOf(b.meal));
  mealPlans.forEach((item) => {
    const row = document.createElement("div");
    row.className = "meal-plan-item";
    const copy = document.createElement("span");
    const strong = document.createElement("strong");
    strong.textContent = `Day ${item.day} · ${item.meal}`;
    const small = document.createElement("small");
    small.textContent = `${item.restaurant} · ${item.preference} · pay directly at venue`;
    copy.append(strong, small);
    const remove = document.createElement("button");
    remove.type = "button";
    remove.dataset.removeMeal = item.id;
    remove.setAttribute("aria-label", `Remove Day ${item.day} ${item.meal}`);
    remove.textContent = "×";
    row.append(copy, remove);
    list.append(row);
  });
}

function calculateEstimate() {
  const days = Math.max(1, durationDays());
  const travelers = Math.max(1, Number(travelerInput.value || 1));
  const nights = Math.max(0, days - 1);
  const rooms = Math.max(1, Number(roomCountInput.value || 1));
  const tier = selectedTier();
  const planSubtotal = pricing.tiers[tier].perGuestDay * travelers * days;
  const roomCategoryMultiplier = pricing.roomCategoryMultipliers[roomCategorySelect.value];
  const roomViewMultiplier = pricing.roomViewMultipliers[roomViewSelect.value];
  const hotelRate = selectedHotelRate();
  const hotelSubtotal = Math.round((hotelRate * roomCategoryMultiplier * roomViewMultiplier * rooms * nights) / 50) * 50;
  const vehicle = selectedVehicle();
  const vehicleCount = Math.max(1, Number(vehicleCountInput.value || 1));
  const transportSubtotal = vehicle ? vehicle.rate * days * vehicleCount : 0;
  const total = planSubtotal + hotelSubtotal + transportSubtotal;
  qs("#estimate-total").textContent = formatTHB(total);
  const roomNote = hotelSelect.value === "own" ? "hotel not included" : `${rooms} room${rooms > 1 ? "s" : ""}`;
  qs("#estimate-note").textContent = `for ${travelers} guest${travelers > 1 ? "s" : ""} · ${days} day${days > 1 ? "s" : ""} · ${roomNote}`;
  qs("#estimate-breakdown").textContent = `Plan ${formatTHB(planSubtotal)} + hotel ${formatTHB(hotelSubtotal)} + transport ${formatTHB(transportSubtotal)} · meals paid direct`;
  return { days, travelers, rooms, tier, vehicle, planSubtotal, hotelSubtotal, transportSubtotal, total };
}

function openPlanner(options = {}) {
  if (options.destination && destinations.includes(options.destination)) destinationSelect.value = options.destination;
  if (options.duration) durationSelect.value = String(options.duration);
  if (options.style) qs("#planner-style").value = options.style;
  if (options.tier) chooseTier(options.tier);
  if (options.transport === "Self-drive rental") transportSelect.value = "car";
  syncHotels();
  syncTransportFields();
  syncMealDayOptions();
  qs(".custom-days-field").hidden = durationSelect.value !== "custom";
  plannerForm.hidden = false;
  bookingReview.hidden = true;
  qsa(".step-indicator span").forEach((el, index) => el.classList.toggle("active", index === 0));
  calculateEstimate();
  plannerModal.classList.add("open");
  plannerModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  requestAnimationFrame(() => {
    if (options.duration) durationSelect.value = String(options.duration);
    syncMealDayOptions();
    calculateEstimate();
  });
  setTimeout(() => destinationSelect.focus(), 100);
}

function closeModal(modal) {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  if (!qsa(".modal-shell.open").length) document.body.classList.remove("modal-open");
}

function showToast(message) {
  const toast = qs("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3800);
}

qsa(".open-planner").forEach((button) => button.addEventListener("click", () => openPlanner({ transport: button.dataset.transport })));
qsa("[data-close-modal]").forEach((button) => button.addEventListener("click", () => closeModal(plannerModal)));
qsa("[data-close-account]").forEach((button) => button.addEventListener("click", () => closeModal(accountModal)));

qs("#trip-finder").addEventListener("submit", (event) => {
  event.preventDefault();
  openPlanner({ destination: qs("#quick-destination").value, duration: qs("#quick-duration").value, style: qs("#quick-style").value });
});

qsa(".destination-card").forEach((card) => {
  const open = () => openPlanner({ destination: card.dataset.destination });
  card.addEventListener("click", open);
  card.addEventListener("keydown", (event) => { if (event.key === "Enter") open(); });
});

qsa(".destination-list button").forEach((button) => button.addEventListener("click", () => openPlanner({ destination: button.textContent })));
qsa(".package-card button").forEach((button) => button.addEventListener("click", () => openPlanner({ duration: button.closest(".package-card").dataset.duration })));
qsa(".tier-card").forEach((button) => button.addEventListener("click", () => openPlanner({ tier: button.dataset.tier })));
qsa(".style-options button").forEach((button) => button.addEventListener("click", () => {
  qsa(".style-options button").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  openPlanner({ style: button.dataset.style });
}));

qsa(".filter-tabs button").forEach((button) => button.addEventListener("click", () => {
  qsa(".filter-tabs button").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  qsa(".destination-card").forEach((card) => {
    card.hidden = button.dataset.filter !== "all" && !card.dataset.category.includes(button.dataset.filter);
  });
}));

qs(".all-destinations-toggle").addEventListener("click", (event) => {
  const list = qs(".destination-list");
  list.hidden = !list.hidden;
  event.currentTarget.setAttribute("aria-expanded", String(!list.hidden));
  event.currentTarget.lastElementChild.textContent = list.hidden ? "＋" : "−";
});

[durationSelect, qs("#custom-days")].forEach((input) => input.addEventListener("input", () => {
  qs(".custom-days-field").hidden = durationSelect.value !== "custom";
  syncMealDayOptions();
  calculateEstimate();
}));

travelerInput.addEventListener("input", () => {
  roomCountInput.value = String(Math.max(1, Math.ceil(Number(travelerInput.value || 1) / 2)));
  calculateEstimate();
});

[hotelSelect, roomCategorySelect, roomViewSelect, bedTypeSelect, roomCountInput, vehicleCountInput].forEach((input) => input.addEventListener("input", calculateEstimate));

transportSelect.addEventListener("input", () => {
  syncTransportFields(true);
  calculateEstimate();
});

vehicleTypeSelect.addEventListener("input", () => {
  syncVehicleModels();
  syncTransportFields();
  calculateEstimate();
});

vehicleModelSelect.addEventListener("input", () => {
  const vehicle = selectedVehicle();
  if (vehicle) qs("#transport-policy").textContent = `${vehicle.brand} ${vehicle.model}: ${formatTHB(vehicle.rate)} per vehicle/day. Fuel, tolls, parking, ferry charges, overtime, and deposits are confirmed separately.`;
  calculateEstimate();
});

destinationSelect.addEventListener("change", () => {
  if (mealPlans.length) showToast("Meal plans cleared because the destination changed.");
  mealPlans = [];
  renderMealPlans();
  syncHotels();
  syncTransportFields(true);
  calculateEstimate();
});

tierInputs.forEach((input) => input.addEventListener("change", () => {
  syncHotels();
  calculateEstimate();
}));

qs("#meal-type").addEventListener("input", () => {
  if (qs("#meal-type").value !== "Breakfast" && qs("#meal-preference").value === "Breakfast at hotel") {
    qs("#meal-preference").value = "Local favorites & hidden gems";
  }
});

qs("#meal-preference").addEventListener("input", () => {
  if (qs("#meal-preference").value === "Breakfast at hotel") qs("#meal-type").value = "Breakfast";
});

qs("#add-meal").addEventListener("click", () => {
  const preference = qs("#meal-preference").value;
  const hotelName = hotelSelect.value === "own" ? "Customer's hotel" : hotelSelect.options[hotelSelect.selectedIndex].text.split(" · ")[0];
  const typedRestaurant = qs("#restaurant-name").value.trim();
  const restaurant = typedRestaurant || (preference === "Breakfast at hotel" ? hotelName : "Twar Mal to recommend");
  mealPlans.push({ id: String(Date.now()), day: Number(qs("#meal-day").value), meal: qs("#meal-type").value, preference, restaurant });
  qs("#restaurant-name").value = "";
  renderMealPlans();
  showToast("Meal added. Its restaurant bill is not included in the total.");
});

qs("#meal-plan-list").addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove-meal]");
  if (!button) return;
  mealPlans = mealPlans.filter((meal) => meal.id !== button.dataset.removeMeal);
  renderMealPlans();
});

plannerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const estimate = calculateEstimate();
  const vehicleCount = Math.max(1, Number(vehicleCountInput.value || 1));
  const roomCategory = roomCategorySelect.options[roomCategorySelect.selectedIndex].text;
  const roomView = roomViewSelect.options[roomViewSelect.selectedIndex].text;
  const bedType = bedTypeSelect.options[bedTypeSelect.selectedIndex].text;
  const vehicleDescription = estimate.vehicle
    ? `${estimate.vehicle.type} · ${estimate.vehicle.brand} ${estimate.vehicle.model} ${estimate.vehicle.year} × ${vehicleCount}`
    : "No Twar Mal transportation";
  const rows = [
    ["Destination", destinationSelect.value],
    ["Travelers", String(estimate.travelers)],
    ["Comfort level", pricing.tiers[estimate.tier].label],
    ["Travel style", qs("#planner-style").value],
    ["Journey plan", formatTHB(estimate.planSubtotal)],
    ["Hotel", `${hotelSelect.options[hotelSelect.selectedIndex].text} · ${formatTHB(estimate.hotelSubtotal)}`],
    ["Rooms", `${estimate.rooms} × ${roomCategory}`],
    ["View", roomView],
    ["Bed", `${bedType} · no price change`],
    ["Transport", `${vehicleDescription} · ${formatTHB(estimate.transportSubtotal)}`]
  ];
  if (!mealPlans.length) rows.push(["Meals", "Not planned · restaurant bills excluded"]);
  mealPlans.forEach((meal) => rows.push([`Day ${meal.day} · ${meal.meal}`, `${meal.restaurant} · ${meal.preference} · pay directly`]));
  qs("#review-title").textContent = `${estimate.days} day${estimate.days > 1 ? "s" : ""} in ${destinationSelect.value}`;
  const reviewLines = qs("#review-lines");
  reviewLines.innerHTML = "";
  rows.forEach(([key, value]) => {
    const row = document.createElement("div");
    const label = document.createElement("span");
    const detail = document.createElement("strong");
    label.textContent = key;
    detail.textContent = value;
    row.append(label, detail);
    reviewLines.append(row);
  });
  qs("#review-total").textContent = formatTHB(estimate.total);
  plannerForm.hidden = true;
  bookingReview.hidden = false;
  qsa(".step-indicator span").forEach((el, index) => el.classList.toggle("active", index === 1));
  qs(".planner-modal").scrollTop = 0;
});

qs(".back-to-plan").addEventListener("click", () => {
  plannerForm.hidden = false;
  bookingReview.hidden = true;
  qsa(".step-indicator span").forEach((el, index) => el.classList.toggle("active", index === 0));
});

qs("#demo-payment").addEventListener("click", () => {
  closeModal(plannerModal);
  showToast("Preview booking saved — no card has been charged.");
});

qsa(".account-trigger").forEach((button) => button.addEventListener("click", () => {
  accountModal.classList.add("open");
  accountModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}));

qsa("[data-account-tab]").forEach((button) => button.addEventListener("click", () => {
  qsa("[data-account-tab]").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  qs("#signin-form").hidden = button.dataset.accountTab !== "signin";
  qs("#signup-form").hidden = button.dataset.accountTab !== "signup";
}));

function setAccountName(name) {
  qsa(".account-trigger").forEach((button) => { button.textContent = `Hi, ${name.split(" ")[0]}`; });
  localStorage.setItem("twarMalGuest", name);
}

qs("#signin-form").addEventListener("submit", (event) => {
  event.preventDefault();
  setAccountName("Traveler");
  closeModal(accountModal);
  showToast("Welcome back. Your preview account is ready.");
});

qs("#signup-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = qs("#signup-name").value.trim();
  setAccountName(name || "Traveler");
  closeModal(accountModal);
  showToast("Preview account created on this device.");
});

const savedGuest = localStorage.getItem("twarMalGuest");
if (savedGuest) setAccountName(savedGuest);

qs(".lang-toggle").addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "th" : "en";
  document.documentElement.lang = currentLanguage;
  qsa(".lang-toggle span").forEach((span, index) => span.classList.toggle("active", (currentLanguage === "en" && index === 0) || (currentLanguage === "th" && index === 1)));
  qsa("[data-i18n]").forEach((element) => {
    const value = translations[currentLanguage][element.dataset.i18n];
    if (value) element.innerHTML = value;
  });
});

qs(".menu-toggle").addEventListener("click", (event) => {
  const menu = qs("#nav-links");
  menu.classList.toggle("open");
  event.currentTarget.setAttribute("aria-expanded", String(menu.classList.contains("open")));
});
qsa("#nav-links a").forEach((link) => link.addEventListener("click", () => qs("#nav-links").classList.remove("open")));

window.addEventListener("scroll", () => qs(".site-header").classList.toggle("scrolled", window.scrollY > 70), { passive: true });
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") qsa(".modal-shell.open").forEach(closeModal);
});

syncHotels();
syncTransportFields();
syncMealDayOptions();
calculateEstimate();
