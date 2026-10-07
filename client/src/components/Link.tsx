import React from "react";
import { Link as WouterLink } from "wouter";
import { useLanguage } from "../contexts/LanguageContext";
import { linkTitleFor } from "@/content/registry";

interface LinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  children: React.ReactNode;
}

const isExternal = (href: string) => /^(https?:|mailto:|tel:)/.test(href);

/**
 * Internal links: adds the /fr prefix on French pages and a descriptive
 * title attribute (the target page's title) unless one is given.
 */
export function Link({ href, children, title, ...props }: LinkProps) {
  const { language } = useLanguage();

  if (isExternal(href)) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        title={title}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...props}
      >
        {children}
      </a>
    );
  }

  let targetHref = href;
  if (language === "fr" && !targetHref.startsWith("/fr") && !targetHref.startsWith("#")) {
    targetHref = targetHref === "/" ? "/fr" : `/fr${targetHref}`;
  }

  return (
    <WouterLink href={targetHref} title={title ?? linkTitleFor(targetHref)} {...props}>
      {children}
    </WouterLink>
  );
}
