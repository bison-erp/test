import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.resolve(process.env.ACROPOLIS_MEDIA_DIR || path.join(root, "media"));
const out = path.join(root, "dist/public");
if (!fs.existsSync(path.join(source, "manus-storage")) || !fs.existsSync(path.join(source, "fonts/google-fonts.css"))) {
  throw new Error(`Médias locaux introuvables dans ${source} : décompresser l'archive source avec son dossier media/.`);
}
for (const section of ["manus-storage", "fonts"]) {
  fs.cpSync(path.join(source, section), path.join(out, section), { recursive: true, force: true });
}
fs.rmSync(path.join(out, "__manus__"), { recursive: true, force: true });
const urls: string[] = [];
function rewriteHtml(dir: string) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const name = path.join(dir, entry.name);
    if (entry.isDirectory()) rewriteHtml(name);
    else if (entry.name === "index.html") {
      let html = fs.readFileSync(name, "utf8");
      const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
      if (!canonical) throw new Error(`Canonical manquant dans ${name}`);
      urls.push(canonical[1]);
      html = html.replace(/\s*<link rel="preconnect" href="https:\/\/fonts\.googleapis\.com"\s*\/?>/g, "")
        .replace(/\s*<link rel="preconnect" href="https:\/\/fonts\.gstatic\.com"[^>]*>/g, "")
        .replace(/<link href="https:\/\/fonts\.googleapis\.com[^>]+rel="stylesheet"\s*\/>/, '<link href="/fonts/google-fonts.css" rel="stylesheet" />');
      if (html.includes("fonts.googleapis.com")) throw new Error(`Police distante encore présente dans ${name}`);
      fs.writeFileSync(name, html);
    }
  }
}
rewriteHtml(out);
// Cloudflare Pages sert /paris depuis /paris.html ; un dossier paris/index.html
// conduirait à /paris/ et contredirait nos URL canoniques sans barre finale.
for (const url of urls.filter(url => url !== "https://acropolis-real-estate.com/").sort((a, b) => b.length - a.length)) {
  const slug = new URL(url).pathname.slice(1);
  const oldFile = path.join(out, slug, "index.html");
  const newFile = path.join(out, `${slug}.html`);
  fs.renameSync(oldFile, newFile);
  const folder = path.dirname(oldFile);
  if (fs.readdirSync(folder).length === 0) fs.rmdirSync(folder);
}
fs.writeFileSync(path.join(out, "robots.txt"), 'User-agent: *\nAllow: /\nSitemap: https://acropolis-real-estate.com/sitemap.xml\n');
fs.writeFileSync(path.join(out, "sitemap.xml"), '<?xml version="1.0" encoding="utf-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + urls.sort().map(url => `  <url><loc>${url.replaceAll('&', '&amp;')}</loc></url>`).join('\n') + '\n</urlset>\n');
fs.writeFileSync(path.join(out, "_headers"), '/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n');
console.log(`Cloudflare Pages : ${urls.length} routes, ${fs.readdirSync(path.join(out, "manus-storage")).length} médias et polices locales.`);
