import React, { createContext, useContext, useEffect, useState } from "react";
import { alternatePath } from "@/content/registry";

export type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: React.ReactNode;
  initialPath?: string;
}

export function LanguageProvider({ children, initialPath }: LanguageProviderProps) {
  // Détecter la langue initiale à partir du chemin d'URL (ex: /fr/about -> fr)
  const getInitialLanguage = (): Language => {
    if (initialPath) return initialPath === "/fr" || initialPath.startsWith("/fr/") ? "fr" : "en";
    if (typeof window !== "undefined") {
      const pathname = window.location.pathname;
      if (pathname === "/fr" || pathname.startsWith("/fr/")) {
        return "fr";
      }
      
      // Détection secondaire par paramètre d'URL (?lang=fr)
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get("lang");
      if (urlLang === "en" || urlLang === "fr") {
        return urlLang as Language;
      }
    }

    // Détection tertiaire par localStorage
    const stored = typeof window !== "undefined" ? localStorage.getItem("language") : null;
    if (stored === "en" || stored === "fr") {
      return stored as Language;
    }
    
    // Détection par langue du navigateur
    if (typeof navigator !== "undefined") {
      const browserLang = navigator.language.split("-")[0];
      if (browserLang === "fr") {
        return "fr";
      }
    }
    return "en";
  };

  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (lang: Language) => {
    if (typeof window === "undefined") return;

    setLanguageState(lang);
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang;

    // Aller vers la même page dans l'autre langue (les slugs du blog diffèrent entre FR et EN)
    const pathname = window.location.pathname;
    const newPathname = alternatePath(pathname, lang);

    if (newPathname !== pathname) {
      window.history.pushState({}, "", window.location.origin + newPathname + window.location.search);
      // Déclencher un événement popstate pour forcer Wouter et les autres composants à se mettre à jour
      const popStateEvent = new PopStateEvent("popstate");
      window.dispatchEvent(popStateEvent);
    }
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  // Écouter les changements d'URL pour synchroniser l'état de la langue si l'utilisateur navigue manuellement ou clique sur Précédent/Suivant
  useEffect(() => {
    const handleUrlChange = () => {
      const pathname = window.location.pathname;
      const currentLang = (pathname.startsWith("/fr") || pathname === "/fr") ? "fr" : "en";
      if (currentLang !== language) {
        setLanguageState(currentLang);
      }
    };

    window.addEventListener("popstate", handleUrlChange);
    // Intercepter également les pushState
    const originalPushState = window.history.pushState;
    window.history.pushState = function(...args) {
      originalPushState.apply(this, args);
      handleUrlChange();
    };

    return () => {
      window.removeEventListener("popstate", handleUrlChange);
      window.history.pushState = originalPushState;
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
