import React from "react";
import { Link as WouterLink } from "wouter";
import { useLanguage } from "../contexts/LanguageContext";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  [key: string]: any; // Permettre d'autres props
}

export function Link({ href, children, ...props }: LinkProps) {
  const { language } = useLanguage();

  let targetHref = href;

  if (language === "fr" && typeof targetHref === "string") {
    // Éviter de doubler le préfixe /fr ou d'ajouter /fr aux liens externes ou aux ancres
    if (
      !targetHref.startsWith("/fr") &&
      !targetHref.startsWith("http") &&
      !targetHref.startsWith("mailto:") &&
      !targetHref.startsWith("tel:") &&
      !targetHref.startsWith("#")
    ) {
      targetHref = targetHref === "/" ? "/fr" : `/fr${targetHref}`;
    }
  }

  return (
    <WouterLink href={targetHref} {...props}>
      {children}
    </WouterLink>
  );
}
