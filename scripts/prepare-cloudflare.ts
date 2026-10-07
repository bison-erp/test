// Copies local media/fonts into the build, self-hosts Google Fonts and writes
// robots.txt and _headers for Cloudflare.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.join(root, "media");
const out = path.join(root, "dist/public");

for (const section of ["manus-storage", "fonts", "blog-images"]) {
  if (!fs.existsSync(path.join(source, section))) continue;
  fs.cpSync(path.join(source, section), path.join(out, section), { recursive: true, force: true });
}
fs.rmSync(path.join(out, ".gitkeep"), { force: true });

let pages = 0;
function rewriteHtml(dir: string) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) rewriteHtml(file);
    else if (entry.name.endsWith(".html")) {
      const html = fs
        .readFileSync(file, "utf8")
        .replace(/\s*<link rel="preconnect" href="https:\/\/fonts\.(googleapis|gstatic)\.com"[^>]*>/g, "")
        .replace(/<link href="https:\/\/fonts\.googleapis\.com[^>]+rel="stylesheet"\s*\/>/, '<link href="/fonts/google-fonts.css" rel="stylesheet" />');
      if (html.includes("fonts.googleapis.com")) throw new Error(`Police distante encore présente dans ${file}`);
      fs.writeFileSync(file, html);
      pages++;
    }
  }
}
rewriteHtml(out);

fs.writeFileSync(
  path.join(out, "robots.txt"),
  "User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: https://acropolis-real-estate.com/sitemap.xml\n"
);
fs.writeFileSync(
  path.join(out, "_headers"),
  [
    "/*",
    "  X-Content-Type-Options: nosniff",
    "  Referrer-Policy: strict-origin-when-cross-origin",
    "  X-Frame-Options: SAMEORIGIN",
    "/assets/*",
    "  Cache-Control: public, max-age=31536000, immutable",
    "/fonts/*",
    "  Cache-Control: public, max-age=31536000, immutable",
    "/manus-storage/*",
    "  Cache-Control: public, max-age=2592000",
    "/blog-images/*",
    "  Cache-Control: public, max-age=2592000",
    "",
  ].join("\n")
);
console.log(`Cloudflare : ${pages} pages HTML, médias et polices copiés.`);
