import fs from "node:fs";
import path from "node:path";
import React from "react";
import { renderToString } from "react-dom/server";
import { createServer } from "vite";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(root, "dist/public");
const site = "https://acropolis-real-estate.com";
const logo = `${site}/manus-storage/acropolis-logo-gold_47dc0308.webp`;
// 14 pages anglaises et 14 pages françaises, sans doublon.
const pages = [
  ["/", "Acropolis Real Estate | European Property Buyer Agency", "Exclusive off-market real estate acquisitions in Paris, French Riviera, Luxembourg and Greece. Private buyer advisory for international investors.", "Acropolis Real Estate | Agence immobilière européenne", "Acquisitions immobilières confidentielles à Paris, sur la Côte d’Azur, au Luxembourg et en Grèce. Conseil privé aux acheteurs internationaux."],
  ["/residential-offices", "Residential & Offices | Acropolis Real Estate", "Discover exceptional residences and contemporary offices in Paris and Luxembourg, with tailored acquisition support.", "Résidentiel & Bureaux | Acropolis Real Estate", "Appartements et bureaux d’exception à Paris et au Luxembourg : un accompagnement personnalisé pour vos acquisitions."],
  ["/hotels-resorts", "Hotels & Resorts | Acropolis Real Estate", "Acquire boutique hotels, resorts and hospitality assets across Europe and the Greek islands.", "Hôtels & Resorts | Acropolis Real Estate", "Acquérez des hôtels, resorts et actifs hôteliers confidentiels en Europe et dans les îles grecques."],
  ["/residency-visas", "Residency & Visas | Acropolis Real Estate", "Explore European residency strategies through real estate investment and the Greek Golden Visa program.", "Résidence & Visas | Acropolis Real Estate", "Découvrez les possibilités de résidence en Europe par l’investissement immobilier et le Golden Visa grec."],
  ["/about", "About Us | Acropolis Real Estate", "Meet our independent buyer advisory team and learn about our confidential European real estate approach.", "À propos | Acropolis Real Estate", "Découvrez notre équipe et notre approche confidentielle du conseil immobilier en Europe."],
  ["/contact-newsletter", "Contact | Acropolis Real Estate", "Contact our private real estate advisory team about your property acquisition plans in Europe.", "Contact | Acropolis Real Estate", "Contactez notre équipe pour votre projet d’acquisition immobilière en Europe."],
  ["/real-estate-paris", "Paris Real Estate | Acropolis Real Estate", "Acquire exceptional Paris apartments and private mansions through confidential, off-market buyer representation.", "Immobilier à Paris | Acropolis Real Estate", "Acquérez des appartements et hôtels particuliers d’exception à Paris grâce à un accompagnement confidentiel."],
  ["/real-estate-french-riviera", "French Riviera Real Estate | Acropolis Real Estate", "Discover exclusive villas and waterfront estates in Cannes, Nice, Saint-Jean-Cap-Ferrat and Saint-Tropez.", "Immobilier Côte d’Azur | Acropolis Real Estate", "Villas et propriétés d’exception sur la Côte d’Azur, à Cannes, Nice, Saint-Jean-Cap-Ferrat et Saint-Tropez."],
  ["/real-estate-luxembourg", "Luxembourg Real Estate | Acropolis Real Estate", "Discover off-market residences, penthouses and exceptional properties in Luxembourg.", "Immobilier au Luxembourg | Acropolis Real Estate", "Découvrez des résidences, penthouses et propriétés d’exception proposés en toute confidentialité au Luxembourg."],
  ["/golden-visa-greece", "Golden Visa Greece | Acropolis Real Estate", "Explore Greek Golden Visa requirements and carefully selected properties for European residency investment.", "Golden Visa Grèce | Acropolis Real Estate", "Découvrez le programme Golden Visa grec et une sélection de biens pour votre projet de résidence européenne."],
  ["/hotel-investment-greece", "Hotel Investment Greece | Acropolis Real Estate", "Discover off-market boutique hotels, resorts and hospitality investment opportunities in Greece.", "Investissement hôtelier Grèce | Acropolis Real Estate", "Découvrez des hôtels, resorts et opportunités d’investissement hôtelier confidentielles en Grèce."],
  ["/privacy-policy", "Privacy Policy | Acropolis Real Estate", "How Acropolis Real Estate processes your personal data and protects your privacy.", "Politique de confidentialité | Acropolis Real Estate", "Comment Acropolis Real Estate traite vos données personnelles et protège votre vie privée."],
  ["/legal-notice", "Legal Notice | Acropolis Real Estate", "Legal information, registration and professional credentials of Acropolis Real Estate.", "Mentions légales | Acropolis Real Estate", "Informations légales, immatriculation et habilitations professionnelles d’Acropolis Real Estate."],
  ["/regulatory-disclosures", "Regulatory Disclosures | Acropolis Real Estate", "Licensing, compliance and regulatory disclosures for Acropolis Real Estate.", "Informations réglementaires | Acropolis Real Estate", "Habilitations, conformité et informations réglementaires d’Acropolis Real Estate."],
] as const;
function esc(value: string) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
async function main() {
  const baseHtml = fs.readFileSync(path.join(output, "index.html"), "utf8");
  const server = await createServer({ server: { middlewareMode: true }, appType: "custom", logLevel: "error" });
  try {
    const { default: App } = await server.ssrLoadModule("/src/App.tsx");
    const routes = pages.flatMap(([slug, enTitle, enDesc, frTitle, frDesc]) => [
      { url: slug, lang: "en", title: enTitle, desc: enDesc, en: slug, fr: slug === "/" ? "/fr" : `/fr${slug}` },
      { url: slug === "/" ? "/fr" : `/fr${slug}`, lang: "fr", title: frTitle, desc: frDesc, en: slug, fr: slug === "/" ? "/fr" : `/fr${slug}` }
    ]);
    for (const route of routes) {
      const body = renderToString(React.createElement(App, { ssrPath: route.url }));
      if (!/<h1[\s>]/i.test(body) || !/<h2[\s>]/i.test(body)) throw new Error(`H1/H2 absents pour ${route.url}`);
      const canonical = `${site}${route.url}`;
      const meta = [
        `<title>${esc(route.title)}</title>`,
        `<meta name="description" content="${esc(route.desc)}" />`,
        `<meta property="og:title" content="${esc(route.title)}" />`,
        `<meta property="og:description" content="${esc(route.desc)}" />`,
        `<meta property="og:type" content="website" />`,
        `<meta property="og:url" content="${canonical}" />`,
        `<meta property="og:image" content="${logo}" />`,
        `<link rel="canonical" href="${canonical}" />`,
        `<link rel="alternate" hreflang="en" href="${site}${route.en}" />`,
        `<link rel="alternate" hreflang="fr" href="${site}${route.fr}" />`,
        `<link rel="alternate" hreflang="x-default" href="${site}${route.en}" />`,
      ].join("\n    ");
      const html = baseHtml.replace(/<html lang="[^"]+">/, `<html lang="${route.lang}">`)
        .replace(/<title>[^<]*<\/title>/, "")
        .replace("</head>", `    ${meta}\n  </head>`)
        .replace('<div id="root"></div>', `<div id="root">${body}</div>`);
      const dest = route.url === "/" ? path.join(output, "index.html") : path.join(output, route.url.slice(1), "index.html");
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.writeFileSync(dest, html);
      console.log(`${route.lang}: ${route.url} (${body.length} caractères de contenu HTML)`);
    }
    fs.writeFileSync(path.join(output, "404.html"), '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex"><title>Page not found | Acropolis Real Estate</title></head><body><main><h1>404 — Page not found</h1><a href="/">Home</a></main></body></html>');
    console.log(`Prérendu complet : ${routes.length} routes.`);
  } finally { await server.close(); }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
