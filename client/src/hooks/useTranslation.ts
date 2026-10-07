import { useLanguage } from "../contexts/LanguageContext";

// Les traductions sont chargées au build : le français est présent dès le premier rendu.
const translationModules = import.meta.glob<{ default: Record<string, any> }>(
  "../translations/*.json",
  { eager: true }
);

export function useTranslation(pageName: string) {
  const { language } = useLanguage();
  const translations = translationModules[`../translations/${pageName}.json`]?.default ?? null;
  const t = (path: string, fallback: string = ""): string => {
    if (language === "en" || !translations) return fallback;
    const entries = translations[language] ?? translations;
    if (Object.prototype.hasOwnProperty.call(entries, path)) return entries[path];
    const value = path.split(".").reduce<any>((item, key) => item?.[key], entries);
    return typeof value === "string" ? value : fallback;
  };
  return { t, loading: false, translations };
}
