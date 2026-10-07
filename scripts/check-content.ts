// Validates content/pages and content/blog Markdown before building:
// required fields, title/description lengths, internal links (right language,
// existing target), FAQ and word counts. Usage: pnpm check:content
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PAGE_PATHS, parseFrontmatter } from "../client/src/content/paths";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const contentDir = path.join(root, "client/src/content");
const loc = (p: string, lang: string) => (lang === "en" ? p : p === "/" ? "/fr" : `/fr${p}`);

type Doc = { file: string; id: string; lang: string; kind: "page" | "post"; data: Record<string, string | undefined>; body: string };
const docs: Doc[] = [];
for (const kind of ["page", "post"] as const) {
  const dir = path.join(contentDir, kind === "page" ? "pages" : "blog");
  for (const name of fs.readdirSync(dir).filter((f) => f.endsWith(".md"))) {
    const [id, lang] = name.replace(/\.md$/, "").split(/\.(?=[a-z]{2}$)/);
    const { data, body } = parseFrontmatter(fs.readFileSync(path.join(dir, name), "utf8"));
    docs.push({ file: `${kind === "page" ? "pages" : "blog"}/${name}`, id, lang, kind, data, body });
  }
}

const valid = new Set<string>();
for (const p of Object.values(PAGE_PATHS)) for (const lang of ["en", "fr"]) valid.add(loc(p, lang));
for (const d of docs.filter((d) => d.kind === "post")) valid.add(d.lang === "en" ? `/blog/${d.data.slug}` : `/fr/blog/${d.data.slug}`);

const errors: string[] = [];
const warnings: string[] = [];
const rows: string[] = [];
for (const d of docs) {
  const e = (msg: string) => errors.push(`${d.file} : ${msg}`);
  const w = (msg: string) => warnings.push(`${d.file} : ${msg}`);
  const { data, body } = d;
  for (const key of ["title", "description", "h1"]) if (!data[key]) e(`champ « ${key} » manquant`);
  if (d.kind === "post") for (const key of ["slug", "date", "cover", "coverAlt", "category", "excerpt", "pillar"]) if (!data[key]) e(`champ « ${key} » manquant`);
  if (data.title && data.title.length > 65) e(`title trop long (${data.title.length} > 65)`);
  if (data.description && (data.description.length < 110 || data.description.length > 165)) w(`description de ${data.description.length} caractères (viser 130-160)`);
  if (/^#\s/m.test(body)) e("le corps ne doit pas contenir de H1 (# …) : le H1 vient du champ h1");
  if (data.cover && !fs.existsSync(path.join(root, "media", data.cover.replace(/^\//, "")))) e(`image de couverture introuvable : media${data.cover}`);
  if (data.image && !fs.existsSync(path.join(root, "media", data.image.replace(/^\//, "")))) e(`image introuvable : media${data.image}`);
  if (data.pillar && !(data.pillar in PAGE_PATHS)) e(`pillar inconnu : ${data.pillar}`);
  for (const rel of (data.related ?? "").split(",").map((s) => s.trim()).filter(Boolean)) {
    if (!valid.has(loc(rel, d.lang))) e(`related : page inconnue ${rel}`);
  }
  for (const m of body.matchAll(/\[([^\]]+)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)/g)) {
    const href = m[2];
    if (/^https?:/.test(href)) continue;
    if (d.lang === "en" && href.startsWith("/fr")) e(`lien vers une page française depuis l'anglais : ${href}`);
    const target = href.startsWith("/fr") ? href : loc(href, d.lang);
    if (!valid.has(target.split("#")[0])) e(`lien interne cassé : ${href} (→ ${target})`);
    if (!m[3]) w(`lien sans title explicite (title automatique utilisé) : ${href}`);
  }
  const words = body.replace(/[#*|>\-[\]()]/g, " ").split(/\s+/).filter(Boolean).length;
  const faq = (body.match(/:::faq[\s\S]*?:::/g) ?? []).join("").match(/^###\s/gm)?.length ?? 0;
  const links = (body.match(/\]\(\//g) ?? []).length;
  if (body) rows.push(`${d.file.padEnd(48)} ${String(words).padStart(5)} mots  ${String(faq).padStart(2)} FAQ  ${String(links).padStart(2)} liens  title ${data.title?.length ?? 0}  desc ${data.description?.length ?? 0}`);
}
// FR/EN pairs and unique slugs
const posts = docs.filter((d) => d.kind === "post");
for (const id of new Set(posts.map((p) => p.id))) {
  const langs = posts.filter((p) => p.id === id).map((p) => p.lang).sort().join(",");
  if (langs !== "en,fr") errors.push(`blog/${id} : il faut exactement une version en et une version fr (trouvé : ${langs})`);
}
const titles = new Map<string, string>();
for (const d of docs) {
  const t = d.data.title ?? "";
  if (titles.has(t)) errors.push(`${d.file} : même title que ${titles.get(t)}`);
  titles.set(t, d.file);
}

console.log(rows.sort().join("\n"));
if (warnings.length) console.log(`\nAvertissements (${warnings.length}) :\n- ${warnings.join("\n- ")}`);
if (errors.length) {
  console.error(`\nErreurs (${errors.length}) :\n- ${errors.join("\n- ")}`);
  process.exit(1);
}
console.log(`\nContenu OK : ${docs.length} fichiers.`);
