import { useEffect } from "react";
import { useLocation } from "wouter";
import { buildHead } from "@/content/head";

/**
 * Keeps <head> in sync with the current route during client-side navigation.
 * Values come from the content registry, exactly like the prerendered HTML.
 */
export default function SEOHead() {
  const [location] = useLocation();

  useEffect(() => {
    const head = buildHead(location);
    document.head.querySelectorAll("[data-seo]").forEach((el) => el.remove());
    if (!head) {
      const robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      robots.setAttribute("content", "noindex, follow");
      robots.setAttribute("data-seo", "");
      document.head.appendChild(robots);
      return;
    }
    document.title = head.title;
    document.documentElement.lang = head.lang;

    const add = (tag: string, attrs: Record<string, string>, text?: string) => {
      const el = document.createElement(tag);
      for (const [key, value] of Object.entries(attrs)) el.setAttribute(key, value);
      el.setAttribute("data-seo", "");
      if (text) el.textContent = text;
      document.head.appendChild(el);
    };

    add("meta", { name: "description", content: head.description });
    add("meta", { name: "robots", content: head.robots });
    add("link", { rel: "canonical", href: head.canonical });
    for (const alt of head.alternates) add("link", { rel: "alternate", hreflang: alt.hreflang, href: alt.href });
    for (const [key, value] of Object.entries(head.og)) {
      add("meta", key.startsWith("twitter:") ? { name: key, content: value } : { property: key, content: value });
    }
    for (const json of head.jsonLd) add("script", { type: "application/ld+json" }, JSON.stringify(json));
  }, [location]);

  return null;
}
