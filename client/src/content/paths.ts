// Pure helpers shared by the app and the Node scripts (no Vite APIs here).

export interface Frontmatter {
  [key: string]: string | undefined;
}

/** English path of each page; French = "/fr" + English path. */
export const PAGE_PATHS = {
  home: "/",
  residentialOffices: "/residential-offices",
  hotelsResorts: "/hotels-resorts",
  residencyVisas: "/residency-visas",
  about: "/about",
  contact: "/contact-newsletter",
  paris: "/real-estate-paris",
  offMarketParis: "/off-market-paris",
  riviera: "/real-estate-french-riviera",
  luxembourg: "/real-estate-luxembourg",
  goldenVisa: "/golden-visa-greece",
  hotelInvestment: "/hotel-investment-greece",
  blog: "/blog",
  privacy: "/privacy-policy",
  legal: "/legal-notice",
  regulatory: "/regulatory-disclosures",
} as const;

export function parseFrontmatter(raw: string): { data: Frontmatter; body: string } {
  const text = raw.replace(/\r\n/g, "\n");
  const match = text.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) return { data: {}, body: text.trim() };
  const data: Frontmatter = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx <= 0) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if (/^".*"$/.test(value)) value = value.slice(1, -1);
    data[key] = value;
  }
  return { data, body: text.slice(match[0].length).trim() };
}
