import { useEffect } from "react";
import { AGENCY_PHONE, SITE_URL } from "@shared/const";
import { IMAGES } from "@shared/images";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  schemaType?: "RealEstateAgent" | "WebPage" | "AboutPage" | "ContactPage";
}

import { useLanguage } from "../contexts/LanguageContext";

export default function SEOHead({
  title,
  description,
  keywords,
  canonicalUrl,
  schemaType = "WebPage"
}: SEOHeadProps) {
  const { language } = useLanguage();

  useEffect(() => {
    const basePath = new URL(canonicalUrl, SITE_URL).pathname;
    const localizedPath = language === "fr" ? (basePath === "/" ? "/fr" : `/fr${basePath}`) : basePath;
    const pageUrl = `${SITE_URL}${localizedPath}`;
    // Dynamic Title & Meta Tags (Prevent duplicating the brand name)
    const suffix = " | Acropolis Real Estate";
    if (title.endsWith(suffix) || title.includes("Acropolis Real Estate")) {
      document.title = title;
    } else {
      document.title = `${title}${suffix}`;
    }

    const updateOrCreateMeta = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    updateOrCreateMeta("description", description);
    updateOrCreateMeta("keywords", keywords);
    
    // Open Graph
    const ogTitle = (title.endsWith(suffix) || title.includes("Acropolis Real Estate")) ? title : `${title}${suffix}`;
    updateOrCreateMeta("og:title", ogTitle, true);
    updateOrCreateMeta("og:description", description, true);
    updateOrCreateMeta("og:url", pageUrl, true);
    updateOrCreateMeta("og:type", "website", true);
    updateOrCreateMeta("og:image", SITE_URL + IMAGES.logo, true);

    // Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", pageUrl);

    // Multilingual hreflang alternates (Essential for Google SEO)
    const removeExistingHreflangs = () => {
      const existing = document.querySelectorAll('link[rel="alternate"][hreflang]');
      existing.forEach(el => el.remove());
    };
    removeExistingHreflangs();

    // Create hreflang alternate links
    // If the canonical URL has a query or is path-based, we generate both alternates
    const origin = SITE_URL;
    const pathname = window.location.pathname;

    const createHreflang = (lang: string, href: string) => {
      const link = document.createElement("link");
      link.setAttribute("rel", "alternate");
      link.setAttribute("hreflang", lang);
      link.setAttribute("href", href);
      document.head.appendChild(link);
    };

    // Clean path-based alternates corresponding to our real routing (/fr/ for French, root for English)
    let enPath = pathname;
    let frPath = pathname;

    if (pathname.startsWith("/fr")) {
      enPath = pathname.substring(3) || "/";
    } else {
      frPath = "/fr" + (pathname === "/" ? "" : pathname);
    }

    // Ensure enPath is never empty
    if (!enPath) enPath = "/";

    createHreflang("en", `${origin}${enPath}`);
    createHreflang("fr", `${origin}${frPath}`);
    createHreflang("x-default", `${origin}${enPath}`);

    // Schema.org Structured Data
    const existingSchema = document.getElementById("acropolis-schema-jsonld");
    if (existingSchema) {
      existingSchema.remove();
    }

    const schemaScript = document.createElement("script");
    schemaScript.id = "acropolis-schema-jsonld";
    schemaScript.type = "application/ld+json";

    let schemaData: any = {
      "@context": "https://schema.org",
      "@type": schemaType,
      "name": "Acropolis Real Estate",
      "url": pageUrl,
      "description": description,
      "logo": SITE_URL + IMAGES.logo,
      "image": SITE_URL + IMAGES.heroParisSkyline,
    };

    if (schemaType === "RealEstateAgent") {
      schemaData = {
        ...schemaData,
        "telephone": AGENCY_PHONE,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "231, Rue Saint Honoré",
          "addressLocality": "Paris",
          "postalCode": "75001",
          "addressCountry": "FR"
        },
        "priceRange": "$$$$",
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "Paris" },
          { "@type": "AdministrativeArea", "name": "French Riviera" },
          { "@type": "AdministrativeArea", "name": "Luxembourg" },
          { "@type": "AdministrativeArea", "name": "Greece" }
        ]
      };
    }

    schemaScript.text = JSON.stringify(schemaData);
    document.head.appendChild(schemaScript);

    return () => {
      // Clean up if component unmounts
      const schema = document.getElementById("acropolis-schema-jsonld");
      if (schema) {
        schema.remove();
      }
      removeExistingHreflangs();
    };
  }, [title, description, keywords, canonicalUrl, schemaType, language]);

  return null; // This component manages head tags side-effects, renders nothing to DOM
}
