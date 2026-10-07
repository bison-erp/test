import { ChevronRight } from "lucide-react";
import { Link } from "./Link";
import { useLanguage } from "../contexts/LanguageContext";

interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const { language } = useLanguage();
  const all: Crumb[] = [{ label: language === "fr" ? "Accueil" : "Home", href: language === "fr" ? "/fr" : "/" }, ...items];
  return (
    <nav aria-label={language === "fr" ? "Fil d'Ariane" : "Breadcrumb"} className="font-sans-modern text-xs text-muted-foreground">
      <ol className="flex flex-wrap items-center justify-center gap-1.5">
        {all.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight className="h-3 w-3 text-accent" aria-hidden />}
            {item.href && i < all.length - 1 ? (
              <Link href={item.href} className="hover:text-primary">{item.label}</Link>
            ) : (
              <span aria-current="page" className="text-foreground/80">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
