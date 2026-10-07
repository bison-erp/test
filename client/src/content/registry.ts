// Single source of truth for every indexable route: path, language pair,
// title/description/H1 and body. Used by the app, the <head> manager and
// the prerender script, so the HTML Google reads and the hydrated page match.

import { PAGE_PATHS, parseFrontmatter, type Frontmatter } from "./paths";
export { PAGE_PATHS, parseFrontmatter };
export type { Frontmatter };

export type Lang = "en" | "fr";

export interface ContentDoc {
  id: string;
  lang: Lang;
  data: Frontmatter;
  body: string;
}

export type RouteKind = "page" | "post" | "blog";

export interface RouteEntry {
  path: string;
  lang: Lang;
  kind: RouteKind;
  /** Page key (pages) or article id (posts). */
  key: string;
  /** Path of the same content in each language. */
  alternates: Record<Lang, string>;
  doc: ContentDoc;
}

export type PageKey = keyof typeof PAGE_PATHS;

function loadDocs(modules: Record<string, string>): ContentDoc[] {
  return Object.entries(modules).map(([file, raw]) => {
    const name = file.split("/").pop()!.replace(/\.md$/, "");
    const dot = name.lastIndexOf(".");
    const id = name.slice(0, dot);
    const lang = name.slice(dot + 1) as Lang;
    if (lang !== "en" && lang !== "fr") throw new Error(`Langue manquante dans ${file}`);
    const { data, body } = parseFrontmatter(raw);
    return { id, lang, data, body };
  });
}

const pageDocs = loadDocs(
  import.meta.glob<string>("./pages/*.md", { query: "?raw", import: "default", eager: true })
);
const postDocs = loadDocs(
  import.meta.glob<string>("./blog/*.md", { query: "?raw", import: "default", eager: true })
);

export const localizePath = (enPath: string, lang: Lang) =>
  lang === "en" ? enPath : enPath === "/" ? "/fr" : `/fr${enPath}`;

function buildRoutes(): RouteEntry[] {
  const routes: RouteEntry[] = [];
  for (const [key, enPath] of Object.entries(PAGE_PATHS)) {
    const alternates = { en: enPath, fr: localizePath(enPath, "fr") };
    for (const lang of ["en", "fr"] as const) {
      const doc = pageDocs.find((d) => d.id === key && d.lang === lang);
      if (!doc) throw new Error(`Contenu manquant : content/pages/${key}.${lang}.md`);
      routes.push({ path: alternates[lang], lang, kind: key === "blog" ? "blog" : "page", key, alternates, doc });
    }
  }
  const postIds = Array.from(new Set(postDocs.map((d) => d.id)));
  for (const id of postIds) {
    const en = postDocs.find((d) => d.id === id && d.lang === "en");
    const fr = postDocs.find((d) => d.id === id && d.lang === "fr");
    if (!en || !fr) throw new Error(`Article ${id} : il faut une version .en.md et .fr.md`);
    if (!en.data.slug || !fr.data.slug) throw new Error(`Article ${id} : slug manquant`);
    const alternates = { en: `/blog/${en.data.slug}`, fr: `/fr/blog/${fr.data.slug}` };
    routes.push({ path: alternates.en, lang: "en", kind: "post", key: id, alternates, doc: en });
    routes.push({ path: alternates.fr, lang: "fr", kind: "post", key: id, alternates, doc: fr });
  }
  const seen = new Set<string>();
  for (const r of routes) {
    if (seen.has(r.path)) throw new Error(`Route en double : ${r.path}`);
    seen.add(r.path);
  }
  return routes;
}

export const ROUTES: RouteEntry[] = buildRoutes();

const byPath = new Map(ROUTES.map((r) => [r.path, r]));

export const normalizePath = (path: string) => {
  const clean = path.split(/[?#]/)[0] || "/";
  return clean.length > 1 ? clean.replace(/\/+$/, "") : clean;
};

export function getRoute(path: string): RouteEntry | undefined {
  return byPath.get(normalizePath(path));
}

export function langOfPath(path: string): Lang {
  const p = normalizePath(path);
  return p === "/fr" || p.startsWith("/fr/") ? "fr" : "en";
}

/** Same content in the other language (falls back to the localized home). */
export function alternatePath(path: string, lang: Lang): string {
  const route = getRoute(path);
  if (route) return route.alternates[lang];
  return localizePath("/", lang);
}

export function getPage(key: PageKey, lang: Lang): ContentDoc {
  return byPath.get(localizePath(PAGE_PATHS[key], lang))!.doc;
}

export interface PostSummary {
  id: string;
  path: string;
  lang: Lang;
  data: Frontmatter;
}

/** Articles of one language, newest first. */
export function getPosts(lang: Lang): PostSummary[] {
  return ROUTES.filter((r) => r.kind === "post" && r.lang === lang)
    .map((r) => ({ id: r.key, path: r.path, lang, data: r.doc.data }))
    .sort((a, b) => (b.data.date ?? "").localeCompare(a.data.date ?? ""));
}

/** Title shown on hover for internal links pointing to `path`. */
export function linkTitleFor(path: string): string | undefined {
  const route = getRoute(path);
  if (!route) return undefined;
  return route.doc.data.linkTitle || route.doc.data.h1 || route.doc.data.title;
}

/** Short visible label for a page (breadcrumb label, else H1). */
export function shortLabelFor(path: string): string {
  const route = getRoute(path);
  return route ? route.doc.data.breadcrumb || route.doc.data.h1 || route.path : path;
}
