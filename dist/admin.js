const STORAGE_KEY = "twar-mal-admin-v1";

const destinations = [
  "Chiang Mai", "Chiang Rai", "Pattaya", "Phuket", "Bangkok", "Krabi", "Rayong", "Hua Hin", "Cha-am", "Kanchanaburi", "Koh Samui", "Nakhon Nayok", "Khao Kho", "Khao Yai", "Koh Phi Phi", "Koh Tao", "Koh Phangan", "Koh Lipe", "Koh Chang", "Koh Samet", "Ayutthaya", "Sukhothai", "Koh Larn"
];

const seedState = {
  bookings: [
    { id: "TM-26018", guest: "Maya Thompson", email: "maya@example.com", destination: "Phuket", start: "2026-11-24", duration: 7, travelers: 2, total: 46800, status: "Confirmed", created: "2026-11-21", hotel: "The Memory at On On Hotel", transport: "Private van + driver", note: "Anniversary trip. Sunset dinner request; restaurant bill excluded." },
    { id: "TM-26017", guest: "Narin Srisuk", email: "narin@example.com", destination: "Chiang Mai", start: "2026-11-28", duration: 3, travelers: 4, total: 27400, status: "Pending", created: "2026-11-21", hotel: "POR Thapae Gate", transport: "Self-drive Honda City", note: "Two rooms. Waiting for final hotel confirmation." },
    { id: "TM-26016", guest: "Aisha Rahman", email: "aisha@example.com", destination: "Bangkok", start: "2026-12-02", duration: 3, travelers: 3, total: 32600, status: "Pending", created: "2026-11-20", hotel: "ibis Bangkok Siam", transport: "Private sedan + driver", note: "Halal-friendly restaurant planning. Meals paid directly." },
    { id: "TM-26015", guest: "Hiro Tanaka", email: "hiro@example.com", destination: "Krabi", start: "2026-11-22", duration: 7, travelers: 2, total: 58900, status: "In progress", created: "2026-11-19", hotel: "Sea Seeker Krabi Resort", transport: "Honda Click 160", note: "Motorcycle handover at hotel at 10:00." },
    { id: "TM-26014", guest: "Sofia Müller", email: "sofia@example.com", destination: "Koh Samui", start: "2026-12-18", duration: 14, travelers: 2, total: 118600, status: "Confirmed", created: "2026-11-18", hotel: "Peace Resort Samui", transport: "Private SUV + driver", note: "Reduced walking itinerary and sea-view room requested." },
    { id: "TM-26013", guest: "Pimchanok Wattan", email: "pim@example.com", destination: "Khao Yai", start: "2026-12-05", duration: 3, travelers: 6, total: 49500, status: "Confirmed", created: "2026-11-17", hotel: "Recall Isaan Isan Concept", transport: "Toyota Commuter + driver", note: "Family group with two children. Three rooms." },
    { id: "TM-26012", guest: "Daniel Cooper", email: "daniel@example.com", destination: "Pattaya", start: "2027-01-08", duration: 3, travelers: 2, total: 21900, status: "Pending", created: "2026-11-15", hotel: "Travelodge Pattaya", transport: "Self-drive Toyota Yaris", note: "Considering one day on Koh Larn." },
    { id: "TM-26011", guest: "Lalana Chai", email: "lalana@example.com", destination: "Ayutthaya", start: "2026-11-15", duration: 1, travelers: 2, total: 6900, status: "Completed", created: "2026-11-12", hotel: "Baan Luang Harn", transport: "Private sedan + driver", note: "Completed demonstration record." },
    { id: "TM-26010", guest: "Noah Williams", email: "noah@example.com", destination: "Koh Lipe", start: "2026-12-27", duration: 7, travelers: 1, total: 39200, status: "Cancelled", created: "2026-11-10", hotel: "Akira Lipe Resort", transport: "No Twar Mal transport", note: "Cancelled before confirmation. No real payment was processed." }
  ],
  hotels: [
    { id: "H-01", name: "ibis Bangkok Siam", city: "Bangkok", tier: "Budget friendly", rate: 1400, rooms: 18, available: true },
    { id: "H-02", name: "The Quarter Ari", city: "Bangkok", tier: "Mid-range", rate: 2500, rooms: 11, available: true },
    { id: "H-03", name: "POR Thapae Gate", city: "Chiang Mai", tier: "Budget friendly", rate: 1100, rooms: 8, available: true },
    { id: "H-04", name: "U Nimman Chiang Mai", city: "Chiang Mai", tier: "Premium", rate: 4200, rooms: 6, available: true },
    { id: "H-05", name: "Sea Seeker Krabi Resort", city: "Krabi", tier: "Mid-range", rate: 2400, rooms: 10, available: true },
    { id: "H-06", name: "The Memory at On On Hotel", city: "Phuket", tier: "Mid-range", rate: 2800, rooms: 7, available: true },
    { id: "H-07", name: "Peace Resort Samui", city: "Koh Samui", tier: "Premium", rate: 5600, rooms: 5, available: true },
    { id: "H-08", name: "Travelodge Pattaya", city: "Pattaya", tier: "Budget friendly", rate: 1500, rooms: 14, available: false },
    { id: "H-09", name: "Recall Isaan Isan Concept", city: "Khao Yai", tier: "Mid-range", rate: 2600, rooms: 9, available: true }
  ],
  vehicles: [
    { id: "V-01", brand: "Honda", model: "Click 160", year: 2025, type: "Motorcycle", mode: "Self-drive", rate: 250, seats: 2, available: true },
    { id: "V-02", brand: "Yamaha", model: "NMAX", year: 2025, type: "Motorcycle", mode: "Self-drive", rate: 350, seats: 2, available: true },
    { id: "V-03", brand: "Honda", model: "City", year: 2025, type: "Sedan", mode: "Self-drive", rate: 940, seats: 5, available: true },
    { id: "V-04", brand: "Toyota", model: "Yaris Ativ", year: 2024, type: "Sedan", mode: "Self-drive", rate: 850, seats: 5, available: true },
    { id: "V-05", brand: "Toyota", model: "Fortuner", year: 2025, type: "7-seater", mode: "Self-drive", rate: 1850, seats: 7, available: true },
    { id: "V-06", brand: "Toyota", model: "Commuter", year: 2024, type: "Van", mode: "With driver", rate: 2400, seats: 10, available: true },
    { id: "V-07", brand: "Toyota", model: "Camry", year: 2025, type: "Sedan", mode: "With driver", rate: 1900, seats: 4, available: false },
    { id: "V-08", brand: "Toyota", model: "Alphard", year: 2025, type: "Premium van", mode: "With driver", rate: 3800, seats: 7, available: true },
    { id: "V-09", brand: "BMW", model: "5 Series", year: 2025, type: "Premium sedan", mode: "With driver", rate: 4200, seats: 4, available: true }
  ],
  packages: [
    { id: "P-budget", label: "SMART & SIMPLE", name: "Budget Friendly", price: 900, copy: "Comfortable essentials with flexible planning.", active: true },
    { id: "P-mid", label: "BEST BALANCE", name: "Mid-range", price: 1450, copy: "Boutique stays, fuller days, and extra choice.", active: true, featured: true },
    { id: "P-premium", label: "ELEVATED ESCAPE", name: "Premium", price: 2650, copy: "Refined stays and signature experiences.", active: true }
  ],
  content: {
    eyebrow: "PRIVATE JOURNEYS · BEAUTIFULLY ARRANGED",
    headline: "Thailand, made entirely yours.",
    introduction: "Tell us how you want to feel. We shape the stay, the table, the ride, and every beautiful moment in between."
  },
  preferences: { compactRows: false, showRevenue: true, noticeDismissed: false }
};

const clone = (value) => JSON.parse(JSON.stringify(value));
const qs = (selector, scope = document) => scope.querySelector(selector);
const qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)];

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved && Array.isArray(saved.bookings) ? { ...clone(seedState), ...saved } : clone(seedState);
  } catch {
    return clone(seedState);
  }
}

let state = loadState();
let activeSection = "overview";
let activeBookingId = null;
let lastFocusedElement = null;
let toastTimer;

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]);
}

function formatTHB(value) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "THB", maximumFractionDigits: 0 }).format(Number(value || 0)).replace("THB", "฿");
}

function formatDate(value, options = {}) {
  if (!value) return "To be confirmed";
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric", ...options }).format(new Date(`${value}T00:00:00`));
}

function addDays(value, days) {
  const date = new Date(`${value}T00:00:00`);
  date.setDate(date.getDate() + Math.max(0, Number(days) - 1));
  return date.toISOString().slice(0, 10);
}

function initials(name) {
  return String(name).split(/\s+/).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
}

function statusClass(status) {
  return `status-${String(status).toLowerCase().replaceAll(" ", "-")}`;
}

function bookingStatusOptions(selected) {
  return ["Pending", "Confirmed", "In progress", "Completed", "Cancelled"].map((status) => `<option${status === selected ? " selected" : ""}>${status}</option>`).join("");
}

function showToast(message) {
  const toast = qs("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}

function sectionMeta(section) {
  return {
    overview: ["OPERATIONS OVERVIEW", "Good morning, Twar Mal."],
    bookings: ["BOOKING OPERATIONS", "Manage every journey."],
    hotels: ["ACCOMMODATION CATALOGUE", "Hotels & rooms."],
    vehicles: ["LOCAL TRANSPORT", "Vehicle availability."],
    packages: ["JOURNEY PRICING", "Travel packages."],
    content: ["CONTENT PREVIEW", "Website messaging."],
    settings: ["WORKSPACE SETTINGS", "Demonstration controls."]
  }[section];
}

function activateSection(section) {
  if (!qs(`#section-${section}`)) return;
  activeSection = section;
  qsa("[data-dashboard-section]").forEach((element) => {
    const isActive = element.dataset.dashboardSection === section;
    element.hidden = !isActive;
    element.classList.toggle("active", isActive);
  });
  qsa(".nav-item").forEach((button) => {
    const isActive = button.dataset.section === section;
    button.classList.toggle("active", isActive);
    if (isActive) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });
  const [eyebrow, heading] = sectionMeta(section);
  qs("#page-eyebrow").textContent = eyebrow;
  qs("#page-heading").textContent = heading;
  closeSidebar();
  if (section === "bookings") qs("#booking-search").focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openSidebar() {
  qs("#sidebar").classList.add("open");
  qs("#sidebar-backdrop").hidden = false;
  qs("#menu-button").setAttribute("aria-expanded", "true");
}

function closeSidebar() {
  qs("#sidebar").classList.remove("open");
  qs("#sidebar-backdrop").hidden = true;
  qs("#menu-button").setAttribute("aria-expanded", "false");
}

function periodBookings() {
  const period = Number(qs("#overview-period").value || 30);
  const reference = new Date("2026-11-22T12:00:00");
  const start = new Date(reference);
  start.setDate(start.getDate() - period);
  return state.bookings.filter((booking) => new Date(`${booking.created}T00:00:00`) >= start);
}

function renderMetrics() {
  const bookings = periodBookings();
  const active = bookings.filter((booking) => booking.status !== "Cancelled");
  const revenue = active.reduce((sum, booking) => sum + booking.total, 0);
  const guests = active.reduce((sum, booking) => sum + booking.travelers, 0);
  const pending = bookings.filter((booking) => booking.status === "Pending").length;
  const metrics = [
    { key: "revenue", label: "Estimated booking value", value: formatTHB(revenue), icon: "฿", foot: "Planning estimates only", change: "+12%" },
    { key: "bookings", label: "Bookings created", value: bookings.length, icon: "▤", foot: "Across the selected period", change: "+8%" },
    { key: "guests", label: "Travelers planned", value: guests, icon: "◎", foot: "Adults, children & seniors", change: "+5%" },
    { key: "pending", label: "Awaiting confirmation", value: pending, icon: "◷", foot: "Need an administrator review", change: pending ? "Action" : "Clear" }
  ];
  qs("#metric-grid").innerHTML = metrics.map((metric) => `<article class="metric-card" data-metric="${metric.key}"><div class="metric-top"><span>${metric.label}</span><i class="metric-icon">${metric.icon}</i></div><strong class="metric-value">${metric.value}</strong><div class="metric-foot"><b>${metric.change}</b><span>${metric.foot}</span></div></article>`).join("");
  document.body.classList.toggle("hidden-revenue", !state.preferences.showRevenue);
}

function renderRevenueChart() {
  const groups = [
    { label: "Jul", confirmed: 40, pending: 12 },
    { label: "Aug", confirmed: 55, pending: 18 },
    { label: "Sep", confirmed: 62, pending: 22 },
    { label: "Oct", confirmed: 74, pending: 27 },
    { label: "Nov", confirmed: 88, pending: 34 },
    { label: "Dec", confirmed: 67, pending: 45 }
  ];
  qs("#revenue-chart").innerHTML = groups.map((group) => `<div class="chart-group"><i class="chart-bar confirmed" style="height:${group.confirmed}%" title="${group.label} confirmed"></i><i class="chart-bar pending" style="height:${group.pending}%" title="${group.label} pending"></i><small>${group.label}</small></div>`).join("");
}

function renderPriorities() {
  const pending = state.bookings.filter((booking) => booking.status === "Pending").length;
  const unavailableVehicles = state.vehicles.filter((vehicle) => !vehicle.available).length;
  const unavailableHotels = state.hotels.filter((hotel) => !hotel.available).length;
  const items = [
    { type: "warning", icon: "!", title: `${pending} booking${pending === 1 ? "" : "s"} awaiting confirmation`, copy: "Review hotel availability and the final written quote." },
    { type: "info", icon: "◇", title: `${unavailableHotels} hotel listing${unavailableHotels === 1 ? " is" : "s are"} paused`, copy: "Confirm dates before making the sample property available." },
    { type: "success", icon: "✓", title: `${state.vehicles.length - unavailableVehicles} vehicles shown as available`, copy: "Vehicle rates remain demonstration estimates." }
  ];
  qs("#priority-list").innerHTML = items.map((item) => `<div class="priority-item ${item.type}"><span>${item.icon}</span><div><strong>${escapeHTML(item.title)}</strong><p>${escapeHTML(item.copy)}</p></div></div>`).join("");
}

function bookingRow(booking, recent = false) {
  if (recent) return `<tr><td><span class="booking-id">${escapeHTML(booking.id)}</span></td><td><div class="guest-cell"><span class="guest-avatar">${escapeHTML(initials(booking.guest))}</span><div><strong>${escapeHTML(booking.guest)}</strong><small>${escapeHTML(booking.email)}</small></div></div></td><td>${escapeHTML(booking.destination)} · ${booking.duration} day${booking.duration === 1 ? "" : "s"}</td><td>${formatDate(booking.start)}</td><td><strong>${formatTHB(booking.total)}</strong></td><td><span class="status-pill ${statusClass(booking.status)}">${escapeHTML(booking.status)}</span></td><td><button class="row-button" type="button" data-view-booking="${escapeHTML(booking.id)}">View</button></td></tr>`;
  return `<tr><td><span class="booking-id">${escapeHTML(booking.id)}</span></td><td><div class="guest-cell"><span class="guest-avatar">${escapeHTML(initials(booking.guest))}</span><div><strong>${escapeHTML(booking.guest)}</strong><small>${escapeHTML(booking.email)}</small></div></div></td><td>${escapeHTML(booking.destination)}</td><td>${formatDate(booking.start)}<br><small>${booking.duration} day${booking.duration === 1 ? "" : "s"}</small></td><td>${booking.travelers}</td><td><strong>${formatTHB(booking.total)}</strong></td><td><select class="booking-status-select" data-booking-status="${escapeHTML(booking.id)}" aria-label="Status for ${escapeHTML(booking.id)}">${bookingStatusOptions(booking.status)}</select></td><td><button class="row-button" type="button" data-view-booking="${escapeHTML(booking.id)}">Details</button></td></tr>`;
}

function renderRecentBookings() {
  const recent = [...state.bookings].sort((a, b) => b.created.localeCompare(a.created)).slice(0, 5);
  qs("#recent-bookings-body").innerHTML = recent.map((booking) => bookingRow(booking, true)).join("");
}

function filteredBookings() {
  const query = qs("#booking-search").value.trim().toLowerCase();
  const status = qs("#booking-status-filter").value;
  const destination = qs("#booking-destination-filter").value;
  return [...state.bookings].filter((booking) => {
    const matchesQuery = !query || [booking.id, booking.guest, booking.email, booking.destination].some((value) => value.toLowerCase().includes(query));
    return matchesQuery && (status === "all" || booking.status === status) && (destination === "all" || booking.destination === destination);
  }).sort((a, b) => b.created.localeCompare(a.created));
}

function renderBookings() {
  const bookings = filteredBookings();
  qs("#all-bookings-body").innerHTML = bookings.map((booking) => bookingRow(booking)).join("");
  qs("#booking-result-count").textContent = `${bookings.length} booking${bookings.length === 1 ? "" : "s"}`;
  qs("#booking-empty").hidden = bookings.length > 0;
  qs(".booking-table-panel .table-scroll").hidden = bookings.length === 0;
  qs("#booking-nav-count").textContent = state.bookings.filter((booking) => booking.status === "Pending").length;
  qs("#all-bookings-body").classList.toggle("compact-rows", state.preferences.compactRows);
}

function updateBookingStatus(id, status) {
  const booking = state.bookings.find((item) => item.id === id);
  if (!booking) return;
  booking.status = status;
  saveState();
  renderAll();
  if (activeBookingId === id && qs("#booking-drawer").classList.contains("open")) renderBookingDrawer(booking);
  showToast(`${id} updated to ${status}. Saved in this browser only.`);
}

function renderBookingDrawer(booking) {
  const end = addDays(booking.start, booking.duration);
  qs("#drawer-title").textContent = `${booking.id} · ${booking.destination}`;
  qs("#drawer-content").innerHTML = `<div class="drawer-status-row"><span class="status-pill ${statusClass(booking.status)}">${escapeHTML(booking.status)}</span><select class="booking-status-select" data-booking-status="${escapeHTML(booking.id)}" aria-label="Update booking status">${bookingStatusOptions(booking.status)}</select></div><section class="drawer-section"><h3>Traveler</h3><div class="detail-row"><span>Name</span><strong>${escapeHTML(booking.guest)}</strong></div><div class="detail-row"><span>Email</span><strong>${escapeHTML(booking.email)}</strong></div><div class="detail-row"><span>Travelers</span><strong>${booking.travelers}</strong></div></section><section class="drawer-section"><h3>Journey</h3><div class="detail-row"><span>Destination</span><strong>${escapeHTML(booking.destination)}</strong></div><div class="detail-row"><span>Dates</span><strong>${formatDate(booking.start)} – ${formatDate(end)}</strong></div><div class="detail-row"><span>Duration</span><strong>${booking.duration} day${booking.duration === 1 ? "" : "s"}</strong></div><div class="detail-row"><span>Hotel</span><strong>${escapeHTML(booking.hotel || "To be selected")}</strong></div><div class="detail-row"><span>Transport</span><strong>${escapeHTML(booking.transport || "To be selected")}</strong></div><div class="detail-row"><span>Website estimate</span><strong>${formatTHB(booking.total)}</strong></div></section><section class="drawer-section"><h3>Internal note</h3><p class="drawer-note">${escapeHTML(booking.note || "No internal note.")}</p></section><section class="drawer-section"><h3>Prototype notice</h3><p class="drawer-note">This record exists only in browser storage. No booking, inventory hold, message, or payment has been created.</p></section>`;
}

function openBookingDrawer(id, opener) {
  const booking = state.bookings.find((item) => item.id === id);
  if (!booking) return;
  activeBookingId = id;
  lastFocusedElement = opener || document.activeElement;
  renderBookingDrawer(booking);
  qs("#booking-drawer").classList.add("open");
  qs("#booking-drawer").setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  qs("#booking-drawer [data-close-drawer]").focus();
}

function closeBookingDrawer() {
  qs("#booking-drawer").classList.remove("open");
  qs("#booking-drawer").setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  activeBookingId = null;
  if (lastFocusedElement?.isConnected) lastFocusedElement.focus();
}

function renderHotels() {
  const query = qs("#hotel-search").value.trim().toLowerCase();
  const hotels = state.hotels.filter((hotel) => !query || `${hotel.name} ${hotel.city} ${hotel.tier}`.toLowerCase().includes(query));
  qs("#hotel-totals").textContent = `${hotels.length} shown · ${state.hotels.filter((hotel) => hotel.available).length} available`;
  qs("#hotel-grid").innerHTML = hotels.map((hotel) => `<article class="catalogue-card"><div class="catalogue-card-head"><div><span>${escapeHTML(hotel.city.toUpperCase())}</span><h3>${escapeHTML(hotel.name)}</h3></div><button type="button">${escapeHTML(hotel.id)}</button></div><div class="catalogue-card-body"><div class="catalogue-row"><span>Comfort level</span><strong>${escapeHTML(hotel.tier)}</strong></div><div class="catalogue-row"><span>Planning rate</span><strong>${formatTHB(hotel.rate)} / room</strong></div><div class="catalogue-row"><span>Sample rooms</span><strong>${hotel.rooms}</strong></div><label class="availability-toggle"><span>Available in planner</span><input class="switch" type="checkbox" data-hotel-availability="${escapeHTML(hotel.id)}"${hotel.available ? " checked" : ""}></label></div></article>`).join("");
}

function renderVehicles() {
  const available = state.vehicles.filter((vehicle) => vehicle.available).length;
  const selfDrive = state.vehicles.filter((vehicle) => vehicle.mode === "Self-drive").length;
  const driver = state.vehicles.filter((vehicle) => vehicle.mode === "With driver").length;
  const average = Math.round(state.vehicles.reduce((sum, vehicle) => sum + vehicle.rate, 0) / state.vehicles.length);
  qs("#fleet-summary").innerHTML = [{ label: "Fleet entries", value: state.vehicles.length }, { label: "Available", value: available }, { label: "Self-drive", value: selfDrive }, { label: "With driver", value: driver }].map((item) => `<article class="fleet-stat"><span>${item.label}</span><strong>${item.value}</strong></article>`).join("");
  qs("#vehicle-grid").innerHTML = state.vehicles.map((vehicle) => `<article class="catalogue-card"><div class="catalogue-card-head"><div><span>${escapeHTML(vehicle.mode.toUpperCase())}</span><h3>${escapeHTML(vehicle.brand)} ${escapeHTML(vehicle.model)}</h3></div><button type="button">${vehicle.year}</button></div><div class="catalogue-card-body"><div class="catalogue-row"><span>Type</span><strong>${escapeHTML(vehicle.type)}</strong></div><div class="catalogue-row"><span>Daily rate</span><strong>${formatTHB(vehicle.rate)}</strong></div><div class="catalogue-row"><span>Capacity</span><strong>${vehicle.seats} guests</strong></div><label class="availability-toggle"><span>Available in planner</span><input class="switch" type="checkbox" data-vehicle-availability="${escapeHTML(vehicle.id)}"${vehicle.available ? " checked" : ""}></label></div></article>`).join("");
  qs("#fleet-summary").setAttribute("data-average-rate", String(average));
}

function renderPackages() {
  qs("#package-grid").innerHTML = state.packages.map((item) => `<article class="package-admin-card${item.featured ? " featured" : ""}"><span class="package-label">${escapeHTML(item.label)}</span><h3>${escapeHTML(item.name)}</h3><p>${escapeHTML(item.copy)}</p><div class="package-price"><strong>${formatTHB(item.price)}</strong><span> / guest / day</span></div><div class="package-controls"><label>Visible <input class="switch" type="checkbox" data-package-active="${escapeHTML(item.id)}"${item.active ? " checked" : ""}></label><label><span class="sr-only">Price</span><input class="price-input" type="number" min="0" step="50" value="${item.price}" data-package-price="${escapeHTML(item.id)}" aria-label="Daily price for ${escapeHTML(item.name)}"></label></div></article>`).join("");
}

function renderContent() {
  qs("#content-eyebrow").value = state.content.eyebrow;
  qs("#content-headline").value = state.content.headline;
  qs("#content-introduction").value = state.content.introduction;
  updateContentPreview();
}

function updateContentPreview() {
  qs("#preview-eyebrow").textContent = qs("#content-eyebrow").value;
  qs("#preview-headline").textContent = qs("#content-headline").value;
  qs("#preview-introduction").textContent = qs("#content-introduction").value;
}

function renderPreferences() {
  qs("#compact-toggle").checked = state.preferences.compactRows;
  qs("#revenue-toggle").checked = state.preferences.showRevenue;
  const notice = qs(".notice-banner");
  if (notice) notice.hidden = state.preferences.noticeDismissed;
  document.body.classList.toggle("hidden-revenue", !state.preferences.showRevenue);
}

function renderAll() {
  renderMetrics();
  renderRevenueChart();
  renderPriorities();
  renderRecentBookings();
  renderBookings();
  renderHotels();
  renderVehicles();
  renderPackages();
  renderPreferences();
}

function populateSelects() {
  const options = destinations.map((destination) => `<option>${escapeHTML(destination)}</option>`).join("");
  qs("#booking-destination-filter").insertAdjacentHTML("beforeend", options);
  qs("#new-destination").innerHTML = options;
}

function openBookingModal(opener) {
  lastFocusedElement = opener || document.activeElement;
  const modal = qs("#booking-modal");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  qs("#new-start-date").min = new Date().toISOString().slice(0, 10);
  qs("#new-guest-name").focus();
}

function closeBookingModal() {
  const modal = qs("#booking-modal");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  qs("#new-booking-form").reset();
  qs("#new-travelers").value = "2";
  qs("#new-total").value = "12000";
  if (lastFocusedElement?.isConnected) lastFocusedElement.focus();
}

function nextBookingId() {
  const maximum = Math.max(...state.bookings.map((booking) => Number(booking.id.replace(/\D/g, "")) || 26000));
  return `TM-${String(maximum + 1).slice(-5)}`;
}

function createBooking(event) {
  event.preventDefault();
  const booking = {
    id: nextBookingId(),
    guest: qs("#new-guest-name").value.trim(),
    email: qs("#new-guest-email").value.trim(),
    destination: qs("#new-destination").value,
    start: qs("#new-start-date").value,
    duration: Number(qs("#new-duration").value),
    travelers: Number(qs("#new-travelers").value),
    total: Number(qs("#new-total").value),
    status: qs("#new-status").value,
    created: new Date().toISOString().slice(0, 10),
    hotel: "To be selected",
    transport: "To be selected",
    note: qs("#new-note").value.trim() || "Created in the frontend-only admin demonstration."
  };
  state.bookings.unshift(booking);
  saveState();
  renderAll();
  closeBookingModal();
  activateSection("bookings");
  showToast(`${booking.id} created in browser storage.`);
}

function csvCell(value) {
  let text = String(value ?? "");
  if (/^[=+\-@]/.test(text)) text = `'${text}`;
  return `"${text.replaceAll('"', '""')}"`;
}

function exportBookings() {
  const headings = ["Booking ID", "Guest", "Email", "Destination", "Start date", "Duration", "Travelers", "Estimate THB", "Status", "Internal note"];
  const rows = filteredBookings().map((booking) => [booking.id, booking.guest, booking.email, booking.destination, booking.start, booking.duration, booking.travelers, booking.total, booking.status, booking.note]);
  const csv = [headings, ...rows].map((row) => row.map(csvCell).join(",")).join("\r\n");
  const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = `twar-mal-bookings-${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(url);
  showToast(`${rows.length} booking${rows.length === 1 ? "" : "s"} exported.`);
}

function resetDemo() {
  localStorage.removeItem(STORAGE_KEY);
  state = clone(seedState);
  saveState();
  renderContent();
  renderAll();
  qs("#confirm-reset").classList.remove("open");
  qs("#confirm-reset").setAttribute("aria-hidden", "true");
  showToast("The original demonstration data has been restored.");
}

qsa(".nav-item").forEach((button) => button.addEventListener("click", () => activateSection(button.dataset.section)));
qsa("[data-section-jump]").forEach((button) => button.addEventListener("click", () => activateSection(button.dataset.sectionJump)));
qs("#menu-button").addEventListener("click", openSidebar);
qs("#sidebar-close").addEventListener("click", closeSidebar);
qs("#sidebar-backdrop").addEventListener("click", closeSidebar);

qs("#overview-period").addEventListener("input", () => { renderMetrics(); renderRevenueChart(); });
qsa("[data-dismiss-notice]").forEach((button) => button.addEventListener("click", () => { state.preferences.noticeDismissed = true; saveState(); renderPreferences(); }));

[qs("#booking-search"), qs("#booking-status-filter"), qs("#booking-destination-filter")].forEach((input) => input.addEventListener("input", renderBookings));
qs("#clear-booking-filters").addEventListener("click", () => { qs("#booking-search").value = ""; qs("#booking-status-filter").value = "all"; qs("#booking-destination-filter").value = "all"; renderBookings(); });
qs("#export-bookings").addEventListener("click", exportBookings);

qs("#global-search").addEventListener("input", (event) => {
  qs("#booking-search").value = event.currentTarget.value;
  if (event.currentTarget.value.trim()) activateSection("bookings");
  renderBookings();
});
qs("#notification-button").addEventListener("click", () => showToast("3 demonstration priorities are listed on the overview."));

document.addEventListener("click", (event) => {
  const viewButton = event.target.closest("[data-view-booking]");
  if (viewButton) openBookingDrawer(viewButton.dataset.viewBooking, viewButton);
  const openButton = event.target.closest("[data-open-booking]");
  if (openButton) openBookingModal(openButton);
});
document.addEventListener("change", (event) => {
  const status = event.target.closest("[data-booking-status]");
  if (status) updateBookingStatus(status.dataset.bookingStatus, status.value);
  const hotel = event.target.closest("[data-hotel-availability]");
  if (hotel) { const item = state.hotels.find((entry) => entry.id === hotel.dataset.hotelAvailability); if (item) { item.available = hotel.checked; saveState(); renderAll(); showToast(`${item.name} ${item.available ? "enabled" : "paused"}.`); } }
  const vehicle = event.target.closest("[data-vehicle-availability]");
  if (vehicle) { const item = state.vehicles.find((entry) => entry.id === vehicle.dataset.vehicleAvailability); if (item) { item.available = vehicle.checked; saveState(); renderAll(); showToast(`${item.brand} ${item.model} ${item.available ? "enabled" : "paused"}.`); } }
  const packageToggle = event.target.closest("[data-package-active]");
  if (packageToggle) { const item = state.packages.find((entry) => entry.id === packageToggle.dataset.packageActive); if (item) { item.active = packageToggle.checked; saveState(); showToast(`${item.name} visibility saved locally.`); } }
  const packagePrice = event.target.closest("[data-package-price]");
  if (packagePrice) { const item = state.packages.find((entry) => entry.id === packagePrice.dataset.packagePrice); if (item) { item.price = Math.max(0, Number(packagePrice.value || 0)); saveState(); renderPackages(); showToast(`${item.name} price updated locally.`); } }
});

qs("#new-booking-button").addEventListener("click", (event) => openBookingModal(event.currentTarget));
qsa("[data-close-booking-modal]").forEach((button) => button.addEventListener("click", closeBookingModal));
qsa("[data-close-drawer]").forEach((button) => button.addEventListener("click", closeBookingDrawer));
qs("#new-booking-form").addEventListener("submit", createBooking);

qs("#hotel-search").addEventListener("input", renderHotels);
qs("#add-hotel").addEventListener("click", () => {
  const number = state.hotels.length + 1;
  state.hotels.unshift({ id: `H-${String(number).padStart(2, "0")}`, name: `New partner hotel ${number}`, city: "Bangkok", tier: "Mid-range", rate: 2200, rooms: 6, available: false });
  saveState(); renderAll(); showToast("A paused hotel draft was added to browser storage.");
});
qs("#add-vehicle").addEventListener("click", () => {
  const number = state.vehicles.length + 1;
  state.vehicles.unshift({ id: `V-${String(number).padStart(2, "0")}`, brand: "New", model: `Vehicle draft ${number}`, year: 2026, type: "Sedan", mode: "Self-drive", rate: 900, seats: 5, available: false });
  saveState(); renderAll(); showToast("A paused vehicle draft was added to browser storage.");
});

[qs("#content-eyebrow"), qs("#content-headline"), qs("#content-introduction")].forEach((input) => input.addEventListener("input", updateContentPreview));
qs("#save-content").addEventListener("click", () => {
  state.content = { eyebrow: qs("#content-eyebrow").value.trim(), headline: qs("#content-headline").value.trim(), introduction: qs("#content-introduction").value.trim() };
  saveState(); showToast("Content draft saved in this browser. The live website is unchanged.");
});

qs("#compact-toggle").addEventListener("change", (event) => { state.preferences.compactRows = event.currentTarget.checked; saveState(); renderBookings(); });
qs("#revenue-toggle").addEventListener("change", (event) => { state.preferences.showRevenue = event.currentTarget.checked; saveState(); renderPreferences(); renderMetrics(); });
qs("#reset-demo").addEventListener("click", () => { qs("#confirm-reset").classList.add("open"); qs("#confirm-reset").setAttribute("aria-hidden", "false"); qs("#cancel-reset").focus(); });
qs("#cancel-reset").addEventListener("click", () => { qs("#confirm-reset").classList.remove("open"); qs("#confirm-reset").setAttribute("aria-hidden", "true"); qs("#reset-demo").focus(); });
qs("#confirm-reset-button").addEventListener("click", resetDemo);

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (qs("#confirm-reset").classList.contains("open")) qs("#cancel-reset").click();
  else if (qs("#booking-modal").classList.contains("open")) closeBookingModal();
  else if (qs("#booking-drawer").classList.contains("open")) closeBookingDrawer();
  else closeSidebar();
});

populateSelects();
renderContent();
renderAll();
activateSection("overview");
