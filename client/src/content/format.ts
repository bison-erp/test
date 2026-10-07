import type { Lang } from "./registry";

export function formatDate(date: string | undefined, lang: Lang): string {
  if (!date) return "";
  const [y, m, d] = date.split("-").map(Number);
  // Fixed UTC formatting so prerendered HTML and hydration always match.
  return new Intl.DateTimeFormat(lang === "fr" ? "fr-FR" : "en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(
    new Date(Date.UTC(y, m - 1, d))
  );
}
