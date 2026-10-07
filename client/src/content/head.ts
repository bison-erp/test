import { SITE_URL, AGENCY_PHONE } from "@shared/const";
import { IMAGES } from "@shared/images";
import { getRoute, localizePath, type Lang, type RouteEntry } from "./registry";
import { extractFaq } from "./markdown";

export const SITE_NAME = "Acropolis Real Estate";
export const LINKEDIN_NICOLAS = "https://www.linkedin.com/in/milonasnicolas/";

export interface HeadData {
  lang: Lang;
  title: string;
  description: string;
  canonical: string;
  robots: string;
  alternates: { hreflang: string; href: string }[];
  og: Record<string, string>;
  jsonLd: object[];
}

const abs = (path: string) => (path.startsWith("http") ? path : `${SITE_URL}${path}`);

const UI = {
  en: { home: "Home", blog: "Blog" },
  fr: { home: "Accueil", blog: "Blog" },
};

function organization(lang: Lang) {
  return {
    "@type": "RealEstateAgent",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: abs(localizePath("/", lang)),
    logo: abs(IMAGES.logo),
    image: abs(IMAGES.heroParisSkyline),
    telephone: AGENCY_PHONE,
    priceRange: "€€€€",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "231 rue Saint-Honoré",
        addressLocality: "Paris",
        postalCode: "75001",
        addressCountry: "FR",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "54 rue Charles Darwin",
        addressLocality: "Luxembourg",
        postalCode: "L-1433",
        addressCountry: "LU",
      },
    ],
    areaServed: ["Paris", "Côte d'Azur", "Luxembourg", "Greece"].map((name) => ({ "@type": "Place", name })),
    founder: { "@id": `${SITE_URL}/#nicolas-milonas` },
    knowsLanguage: ["fr", "en"],
  };
}

function person() {
  return {
    "@type": "Person",
    "@id": `${SITE_URL}/#nicolas-milonas`,
    name: "Nicolas Milonas",
    jobTitle: "President, Acropolis Group",
    url: abs("/about"),
    image: abs(IMAGES.avatarNicolas),
    sameAs: [LINKEDIN_NICOLAS],
    alumniOf: "Université Paris Dauphine",
    worksFor: { "@id": `${SITE_URL}/#organization` },
  };
}

function breadcrumb(route: RouteEntry) {
  const items: { name: string; path: string }[] = [{ name: UI[route.lang].home, path: localizePath("/", route.lang) }];
  if (route.kind === "post") items.push({ name: UI[route.lang].blog, path: localizePath("/blog", route.lang) });
  if (route.path !== localizePath("/", route.lang)) {
    items.push({ name: route.doc.data.breadcrumb || route.doc.data.h1 || route.doc.data.title || "", path: route.path });
  }
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({ "@type": "ListItem", position: i + 1, name: item.name, item: abs(item.path) })),
  };
}

export function buildHead(path: string): HeadData | null {
  const route = getRoute(path);
  if (!route) return null;
  const { data, body } = route.doc;
  const lang = route.lang;
  const canonical = abs(route.path);
  const image = abs(data.cover || data.image || IMAGES.logo);
  const title = data.title || SITE_NAME;
  const description = data.description || "";

  const graph: object[] = [];
  const page: Record<string, unknown> = {
    "@type": route.kind === "post" ? "BlogPosting" : route.key === "about" ? "AboutPage" : route.key === "contact" ? "ContactPage" : route.kind === "blog" ? "CollectionPage" : "WebPage",
    "@id": `${canonical}#page`,
    url: canonical,
    name: title,
    description,
    inLanguage: lang,
    isPartOf: { "@type": "WebSite", "@id": `${SITE_URL}/#website`, name: SITE_NAME, url: SITE_URL },
    primaryImageOfPage: image,
  };
  if (route.kind === "post") {
    Object.assign(page, {
      headline: data.h1 || title,
      image,
      datePublished: data.date,
      dateModified: data.updated || data.date,
      author: { "@id": `${SITE_URL}/#nicolas-milonas` },
      publisher: { "@id": `${SITE_URL}/#organization` },
      mainEntityOfPage: canonical,
    });
  }
  graph.push(page, breadcrumb(route), organization(lang), person());

  const faq = extractFaq(body);
  if (faq.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    });
  }

  const og: Record<string, string> = {
    "og:type": route.kind === "post" ? "article" : "website",
    "og:site_name": SITE_NAME,
    "og:title": title,
    "og:description": description,
    "og:url": canonical,
    "og:image": image,
    "og:locale": lang === "fr" ? "fr_FR" : "en_GB",
    "og:locale:alternate": lang === "fr" ? "en_GB" : "fr_FR",
    "twitter:card": "summary_large_image",
  };
  if (route.kind === "post" && data.date) og["article:published_time"] = data.date;

  return {
    lang,
    title,
    description,
    canonical,
    robots: data.noindex === "true" ? "noindex, follow" : "index, follow, max-image-preview:large",
    alternates: [
      { hreflang: "en", href: abs(route.alternates.en) },
      { hreflang: "fr", href: abs(route.alternates.fr) },
      { hreflang: "x-default", href: abs(route.alternates.en) },
    ],
    og,
    jsonLd: [{ "@context": "https://schema.org", "@graph": graph }],
  };
}

const esc = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Static <head> tags for the prerendered HTML (SEOHead updates the same tags client-side). */
export function renderHeadHtml(head: HeadData): string {
  const tags = [
    `<title>${esc(head.title)}</title>`,
    `<meta name="description" content="${esc(head.description)}" data-seo />`,
    `<meta name="robots" content="${head.robots}" data-seo />`,
    `<link rel="canonical" href="${esc(head.canonical)}" data-seo />`,
    ...head.alternates.map((a) => `<link rel="alternate" hreflang="${a.hreflang}" href="${esc(a.href)}" data-seo />`),
    ...Object.entries(head.og).map(([key, value]) =>
      key.startsWith("twitter:")
        ? `<meta name="${key}" content="${esc(value)}" data-seo />`
        : `<meta property="${key}" content="${esc(value)}" data-seo />`
    ),
    ...head.jsonLd.map((json) => `<script type="application/ld+json" data-seo>${JSON.stringify(json).replace(/</g, "\\u003c")}</script>`),
  ];
  return tags.join("\n    ");
}
