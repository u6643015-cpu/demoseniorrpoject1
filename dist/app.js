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
    "rental.eyebrow": "TAKE YOUR OWN ROAD", "rental.title": "Prefer the wheel?", "rental.copy": "Add a self-drive rental without changing the rest of your journey. Motorcycles are ฿200 per day and cars are ฿1,500 per day.", "rental.one": "Motorcycle · ฿200 per day", "rental.two": "Hotel or airport handover options", "rental.three": "Car · ฿1,500 per day", "rental.cta": "Explore self-drive",
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
    "rental.eyebrow": "เลือกเส้นทางด้วยตัวเอง", "rental.title": "อยากขับเองไหม?", "rental.copy": "เพิ่มรถเช่าขับเองได้โดยไม่ต้องเปลี่ยนส่วนอื่นของทริป มอเตอร์ไซค์วันละ ฿200 และรถยนต์วันละ ฿1,500", "rental.one": "มอเตอร์ไซค์ · ฿200 ต่อวัน", "rental.two": "รับรถที่โรงแรมหรือสนามบิน", "rental.three": "รถยนต์ · ฿1,500 ต่อวัน", "rental.cta": "ดูรถเช่าขับเอง",
    "promise.eyebrow": "คำสัญญาเรื่องการยกเลิก", "promise.title": "แผนเปลี่ยนได้<br>ความสบายใจไม่ควรเปลี่ยน", "promise.copy": "ยกเลิกได้โดยไม่มีค่าธรรมเนียมจาก Twar Mal และรับเงินคืนเต็มจำนวน หากโรงแรมที่เลือกไม่คืนเงิน จะหักเฉพาะค่าโรงแรมนั้น", "promise.note": "เงื่อนไขโรงแรมจะแสดงชัดเจนก่อนชำระด้วยบัตร",
    "final.eyebrow": "การเดินทางเริ่มที่นี่", "final.title": "เมืองไทยจะพาคุณ<br><em>ไปที่ไหน?</em>", "final.cta": "เริ่มวางแผน"
  }
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
const transportSelect = qs("#transport-choice");
const vehicleCountInput = qs("#vehicle-count");
const tierInputs = qsa('[name="plan-tier"]');

const pricing = {
  tiers: {
    budget: { label: "Budget Friendly", perGuestDay: 900 },
    mid: { label: "Mid-range", perGuestDay: 1450 },
    premium: { label: "Premium", perGuestDay: 2650 }
  },
  hotels: { budget: 1200, mid: 2500, premium: 5500, own: 0 },
  transport: { none: 0, moto: 200, car: 1500, driver: 2500 }
};
let currentLanguage = "en";
let toastTimer;

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
  if (!input) return;
  input.checked = true;
  hotelSelect.value = tier;
}

function syncTransportFields(showNotice = false) {
  const isKohLarn = destinationSelect.value === "Koh Larn";
  const carOption = qs('#transport-choice option[value="car"]');
  carOption.disabled = isKohLarn;
  carOption.textContent = isKohLarn ? "Car rental · unavailable on Koh Larn" : "Car rental · ฿1,500 / day";

  if (isKohLarn && transportSelect.value === "car") {
    transportSelect.value = "moto";
    if (showNotice) showToast("Koh Larn offers motorcycle rental only — changed to ฿200/day.");
  }

  const isRental = transportSelect.value === "moto" || transportSelect.value === "car";
  qs(".vehicle-count-field").hidden = !isRental;
  qs("#vehicle-count-label").textContent = transportSelect.value === "moto" ? "Motorcycles" : "Cars";
  qs("#transport-policy").textContent = isKohLarn
    ? "Koh Larn: car rental is unavailable. Motorcycles are ฿200 per day."
    : "Rental price is per vehicle. Private driver price is per vehicle for up to 4 guests.";
}

function calculateEstimate() {
  const days = Math.max(1, durationDays());
  const travelers = Math.max(1, Number(travelerInput.value || 1));
  const nights = Math.max(0, days - 1);
  const rooms = Math.ceil(travelers / 2);
  const tier = selectedTier();
  const planSubtotal = pricing.tiers[tier].perGuestDay * travelers * days;
  const hotelSubtotal = pricing.hotels[hotelSelect.value] * rooms * nights;
  const transportRate = pricing.transport[transportSelect.value];
  const vehicleCount = transportSelect.value === "driver"
    ? Math.ceil(travelers / 4)
    : Math.max(1, Number(vehicleCountInput.value || 1));
  const transportSubtotal = transportSelect.value === "none" ? 0 : transportRate * days * vehicleCount;
  const total = planSubtotal + hotelSubtotal + transportSubtotal;
  qs("#estimate-total").textContent = formatTHB(total);
  const roomNote = hotelSelect.value === "own" ? "hotel not included" : `${rooms} room${rooms > 1 ? "s" : ""}`;
  qs("#estimate-note").textContent = `for ${travelers} guest${travelers > 1 ? "s" : ""} · ${days} day${days > 1 ? "s" : ""} · ${roomNote}`;
  qs("#estimate-breakdown").textContent = `Plan ${formatTHB(planSubtotal)} + hotel ${formatTHB(hotelSubtotal)} + transport ${formatTHB(transportSubtotal)}`;
  return { days, travelers, rooms, tier, planSubtotal, hotelSubtotal, transportSubtotal, total };
}

function openPlanner(options = {}) {
  if (options.destination && destinations.includes(options.destination)) destinationSelect.value = options.destination;
  if (options.duration) durationSelect.value = String(options.duration);
  if (options.style) qs("#planner-style").value = options.style;
  if (options.tier) chooseTier(options.tier);
  if (options.transport === "Self-drive rental") transportSelect.value = "car";
  syncTransportFields();
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

[durationSelect, qs("#custom-days"), travelerInput, hotelSelect, transportSelect, vehicleCountInput].forEach((input) => input.addEventListener("input", () => {
  qs(".custom-days-field").hidden = durationSelect.value !== "custom";
  syncTransportFields(true);
  calculateEstimate();
}));

destinationSelect.addEventListener("change", () => {
  syncTransportFields(true);
  calculateEstimate();
});

tierInputs.forEach((input) => input.addEventListener("change", () => {
  hotelSelect.value = input.value;
  calculateEstimate();
}));

plannerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const estimate = calculateEstimate();
  const rows = [
    ["Destination", destinationSelect.value],
    ["Travelers", String(estimate.travelers)],
    ["Comfort level", pricing.tiers[estimate.tier].label],
    ["Travel style", qs("#planner-style").value],
    ["Journey plan", formatTHB(estimate.planSubtotal)],
    ["Stay", `${hotelSelect.options[hotelSelect.selectedIndex].text} · ${formatTHB(estimate.hotelSubtotal)}`],
    ["Transport", `${transportSelect.options[transportSelect.selectedIndex].text} · ${formatTHB(estimate.transportSubtotal)}`],
    ["Dining", qs("#dining-choice").value]
  ];
  qs("#review-title").textContent = `${estimate.days} day${estimate.days > 1 ? "s" : ""} in ${destinationSelect.value}`;
  qs("#review-lines").innerHTML = rows.map(([key, value]) => `<div><span>${key}</span><strong>${value}</strong></div>`).join("");
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

calculateEstimate();
