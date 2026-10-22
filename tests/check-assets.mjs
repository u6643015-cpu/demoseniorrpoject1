import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = ["index.html", "styles.css"]
  .map((file) => fs.readFileSync(path.join(root, "dist", file), "utf8"))
  .join("\n");
const preconnectOrigins = new Set(["https://fonts.googleapis.com", "https://fonts.gstatic.com"]);
const urls = [...new Set(
  [...source.matchAll(/https:\/\/[^"')\s]+/g)]
    .map((match) => match[0].replaceAll("&amp;", "&"))
    .filter((url) => !preconnectOrigins.has(url))
)];

const results = await Promise.all(urls.map(async (url) => {
  try {
    const response = await fetch(url, { method: "HEAD", redirect: "follow", signal: AbortSignal.timeout(15000) });
    return { url, status: response.status, ok: response.ok };
  } catch (error) {
    return { url, status: "ERROR", ok: false, error: error.message };
  }
}));

for (const result of results) console.log(`${result.ok ? "PASS" : "FAIL"}\t${result.status}\t${result.url}`);
if (results.some((result) => !result.ok)) process.exitCode = 1;
else console.log(`External asset check passed: ${results.length} resources.`);
