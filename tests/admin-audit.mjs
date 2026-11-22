import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const testDirectory = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(testDirectory, "..");
const html = fs.readFileSync(path.join(root, "dist", "admin.html"), "utf8");
const css = fs.readFileSync(path.join(root, "dist", "admin.css"), "utf8");
const app = fs.readFileSync(path.join(root, "dist", "admin.js"), "utf8");
const failures = [];
let checks = 0;

function check(condition, message) {
  checks += 1;
  if (!condition) failures.push(message);
}

const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
const idSet = new Set(ids);
check(ids.length === idSet.size, "Admin HTML IDs must be unique.");
check((css.match(/{/g) || []).length === (css.match(/}/g) || []).length, "Admin CSS braces are unbalanced.");
check(!/&(?!(?:amp|lt|gt|quot|apos|#\d+|#x[0-9A-Fa-f]+);)/.test(html), "Admin HTML contains an unescaped ampersand.");

for (const button of html.matchAll(/<button\b[^>]*>/g)) {
  check(/\btype="(?:button|submit)"/.test(button[0]), `Button is missing an explicit type: ${button[0]}`);
}

for (const image of html.matchAll(/<img\b[^>]*>/g)) {
  check(/\balt="[^"]*"/.test(image[0]), `Image is missing alt text: ${image[0]}`);
}

for (const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
  const reference = match[1];
  if (/^(?:https?:|#|mailto:|tel:)/.test(reference)) continue;
  check(fs.existsSync(path.join(root, "dist", reference)), `Missing admin asset: ${reference}`);
}

const requiredIds = [
  "admin-main", "sidebar", "metric-grid", "revenue-chart", "all-bookings-body", "booking-drawer",
  "booking-modal", "new-booking-form", "hotel-grid", "vehicle-grid", "package-grid", "content-headline",
  "compact-toggle", "reset-demo", "toast"
];
requiredIds.forEach((id) => check(idSet.has(id), `Missing required admin control: ${id}`));

const sections = [...html.matchAll(/data-dashboard-section="([^"]+)"/g)].map((match) => match[1]);
const navigation = [...html.matchAll(/data-section="([^"]+)"/g)].map((match) => match[1]);
check(sections.length === 7, `Expected 7 dashboard sections, found ${sections.length}.`);
check(sections.every((section) => navigation.includes(section)), "Every dashboard section needs a matching navigation control.");
check(/Frontend demonstration/.test(html) && /Browser-local sample data/.test(html), "The admin must clearly disclose its frontend-only data model.");
check(/localStorage\.setItem\(STORAGE_KEY/.test(app) && /localStorage\.getItem\(STORAGE_KEY/.test(app), "Admin changes must persist in browser-local storage.");
check(!/\b(?:fetch|XMLHttpRequest|WebSocket)\s*\(/.test(app), "Frontend-only admin must not call a backend.");
check(/function exportBookings\(/.test(app), "Booking CSV export is missing.");
check(/function updateBookingStatus\(/.test(app), "Booking status updates are missing.");
check(/function createBooking\(/.test(app), "Local booking creation is missing.");
check(/function escapeHTML\(/.test(app), "Rendered browser-local data must be escaped.");
check(/^[\s\S]*csvCell[\s\S]*\/\^\[=\+\\-@\]\//.test(app), "CSV export needs spreadsheet-formula protection.");
check(/@media \(max-width: 720px\)/.test(css), "Admin mobile breakpoint is missing.");
check(/prefers-reduced-motion/.test(css), "Reduced-motion support is missing.");

if (failures.length) {
  console.error(`Admin audit failed: ${failures.length} problem(s) across ${checks} checks.`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log(`Admin audit passed: ${checks} checks across 7 dashboard sections.`);
}
