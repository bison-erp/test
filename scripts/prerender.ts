// Prerenders every route of the content registry to static HTML with its full
// <head> (title, description, canonical, hreflang, Open Graph, JSON-LD), then
// writes sitemap.xml with language alternates.
import fs from "node:fs";
import path from "node:path";
import React from "react";
import { renderToString } from "react-dom/server";
import { createServer } from "vite";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(root, "dist/public");
const SITE = "https://acropolis-real-estate.com";

/** "/" → index.html, "/fr" → fr.html, "/fr/blog/x" → fr/blog/x.html (served without .html). */
const fileFor = (urlPath: string) => (urlPath === "/" ? "index.html" : `${urlPath.slice(1)}.html`);

function inject(baseHtml: string, lang: string, head: string, body: string) {
  return baseHtml
    .replace(/<html lang="[^"]+">/, `<html lang="${lang}">`)
    .replace(/<title>[^<]*<\/title>\s*/, "")
    .replace("</head>", `    ${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);
}

async function main() {
  const baseHtml = fs.readFileSync(path.join(output, "index.html"), "utf8");
  const server = await createServer({ root: path.join(root, "client"), configFile: path.join(root, "vite.config.ts"), server: { middlewareMode: true }, appType: "custom", logLevel: "error" });
  try {
    const { default: App } = await server.ssrLoadModule("/src/App.tsx");
    const { ROUTES } = await server.ssrLoadModule("/src/content/registry.ts");
    const { buildHead, renderHeadHtml } = await server.ssrLoadModule("/src/content/head.ts");

    for (const route of ROUTES) {
      const body = renderToString(React.createElement(App, { ssrPath: route.path }));
      const h1Count = (body.match(/<h1[\s>]/g) ?? []).length;
      if (h1Count !== 1) throw new Error(`${route.path} : ${h1Count} balises H1 (il en faut exactement une)`);
      const head = buildHead(route.path);
      const dest = path.join(output, fileFor(route.path));
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.writeFileSync(dest, inject(baseHtml, route.lang, renderHeadHtml(head), body));
      console.log(`${route.lang}: ${route.path}`);
    }

    const notFound = renderToString(React.createElement(App, { ssrPath: "/404" }));
    fs.writeFileSync(
      path.join(output, "404.html"),
      inject(baseHtml, "en", '<title>Page not found | Acropolis Real Estate</title>\n    <meta name="robots" content="noindex, follow" />', notFound)
    );

    const urls = ROUTES.filter((r: any) => r.doc.data.noindex !== "true" && r.lang === "en").flatMap((r: any) => {
      const pair = ROUTES.filter((x: any) => x.alternates.en === r.alternates.en);
      return pair.map((x: any) => {
        const lastmod = x.doc.data.updated || x.doc.data.date;
        return [
          "  <url>",
          `    <loc>${SITE}${x.path}</loc>`,
          ...(lastmod ? [`    <lastmod>${lastmod}</lastmod>`] : []),
          `    <xhtml:link rel="alternate" hreflang="en" href="${SITE}${r.alternates.en}" />`,
          `    <xhtml:link rel="alternate" hreflang="fr" href="${SITE}${r.alternates.fr}" />`,
          `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${r.alternates.en}" />`,
          "  </url>",
        ].join("\n");
      });
    });
    fs.writeFileSync(
      path.join(output, "sitemap.xml"),
      `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join("\n")}\n</urlset>\n`
    );
    console.log(`Prérendu complet : ${ROUTES.length} routes, sitemap de ${urls.length} URL.`);
  } finally {
    await server.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
