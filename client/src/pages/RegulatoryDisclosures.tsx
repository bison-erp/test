import { SITE_URL } from "@shared/const";
import React from "react";
import SEOHead from "@/components/SEOHead";
import Layout from "@/components/Layout";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";

export default function RegulatoryDisclosures() {
  const { t } = useTranslation("RegulatoryDisclosures");
  const { language } = useLanguage();

  return (
    <Layout>
      <div className="min-h-screen bg-[#F4F6F8] pt-32 pb-24">
        <SEOHead
          title={t("seo.title", "Regulatory Disclosures")}
          description={t("seo.description", "Official regulatory disclosures, anti-money laundering (AML) compliance, and consumer protection information for Acropolis Real Estate.")}
          keywords={t("seo.keywords", "regulatory disclosures, AML compliance, real estate regulation Europe, consumer protection, real estate broker card")}
          canonicalUrl={SITE_URL + "/regulatory-disclosures"}
        />
        
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-[#005CB8] font-semibold tracking-widest text-xs uppercase block mb-3">
            {t("content.subtitle", "Regulatory Compliance")}
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-[#0A1118] mb-8 leading-tight">
            {t("content.title", "Regulatory Disclosures")}
          </h1>
          
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-[#E5E7EB] prose prose-slate max-w-none text-[#374151]">
            <p className="text-sm text-[#6B7280] mb-8">
              {t("content.lastUpdated", "Last updated: June 6, 2026")}
            </p>

            <section className="mb-8">
              <h2 className="font-serif text-2xl text-[#0A1118] mb-4">{t("sections.aml.title", "1. Anti-Money Laundering (AML) & Counter-Terrorist Financing (CTF)")}</h2>
              <p className="leading-relaxed mb-4">
                {t("sections.aml.p1", "In compliance with European Union directives (including the 5th and 6th Anti-Money Laundering Directives) and national legislations in France and Luxembourg, Acropolis Real Estate enforces rigorous Know-Your-Customer (KYC) and AML procedures.")}
              </p>
              <p className="leading-relaxed mb-4">
                {t("sections.aml.p2", "Before initiating any transaction or formal buyer-broker engagement, we are legally required to verify the identity of our clients, including individual buyers, corporate entities, and their ultimate beneficial owners (UBOs). This verification process involves:")}
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>{t("sections.aml.item1", "Verification of government-issued photographic identification (passports, national ID cards).")}</li>
                <li>{t("sections.aml.item2", "Verification of residential address (utility bills, bank statements issued within the last 3 months).")}</li>
                <li>{t("sections.aml.item3", "Corporate registry documentation (e.g., Kbis in France, R.C.S. extract in Luxembourg) and articles of association.")}</li>
                <li>{t("sections.aml.item4", "Clear identification of ultimate beneficial owners holding more than 25% of the shares or voting rights.")}</li>
                <li>{t("sections.aml.item5", "Documentation verifying the legitimate source of funds and wealth involved in the acquisition.")}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl text-[#0A1118] mb-4">{t("sections.credentials.title", "2. Professional Credentials & Licensing")}</h2>
              <p className="leading-relaxed mb-4">
                {t("sections.credentials.p1", "Acropolis Real Estate operates as a fully licensed and regulated real estate agency under European jurisdictions:")}
              </p>
              <p className="leading-relaxed mb-4">
                {t("sections.credentials.france", "France: Licensed under CPI No. 7501 2026 000 000 123 issued by the Chamber of Commerce and Industry (CCI Paris Île-de-France). Subject to the Hoguet Law (Loi n° 70-9 du 2 janvier 1970) regulating real estate transactions.")}
              </p>
              <p className="leading-relaxed mb-4">
                {t("sections.credentials.insurance", "Professional Indemnity Insurance: Covered by a comprehensive professional liability insurance policy with Allianz IARD, protecting our clients against professional errors, omissions, and negligence up to €1,500,000 per claim.")}
              </p>
              <p className="leading-relaxed mb-4">
                {t("sections.credentials.guarantee", "Financial Guarantee: We do not hold any client funds, deposits, or escrow payments. All financial transactions, reservation deposits, and final balances are securely processed directly through registered public notaries (notaires) in France or designated bank escrows in Luxembourg and Greece.")}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl text-[#0A1118] mb-4">{t("sections.fiduciary.title", "3. Fiduciary Duty & Buyer-Agent Status")}</h2>
              <p className="leading-relaxed mb-4">
                {t("sections.fiduciary.p1", "Unlike traditional listing brokers who represent the seller's interests, Acropolis Real Estate operates primarily as a buy-side advisor. This status implies a strict fiduciary duty to the buyer:")}
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>{t("sections.fiduciary.item1", "We represent your interests exclusively throughout the entire acquisition lifecycle.")}</li>
                <li>{t("sections.fiduciary.item2", "We perform independent property evaluations, structural due diligence coordination, and aggressive price negotiations.")}</li>
                <li>{t("sections.fiduciary.item3", "We maintain complete transparency regarding our fee structures, ensuring no double-commissioning or undisclosed conflicts of interest.")}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl text-[#0A1118] mb-4">{t("sections.mediation.title", "4. Consumer Protection & Dispute Resolution")}</h2>
              <p className="leading-relaxed mb-4">
                {t("sections.mediation.p1", "We are committed to delivering the highest standard of professional conduct. In the event of a dispute that cannot be resolved directly with our client relations team, consumers have the right to access an independent mediator:")}
              </p>
              <p className="leading-relaxed mb-4">
                <strong>{t("sections.mediation.service", "Mediation Service")}:</strong> Association des Médiateurs Européens (AME), located at 11 Place Dauphine, 75001 Paris, France. Website: <a href="https://www.mediationconso-ame.com" target="_blank" rel="noopener noreferrer" className="text-[#005CB8] hover:underline">www.mediationconso-ame.com</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl text-[#0A1118] mb-4">{t("sections.contact.title", "5. Contact Information")}</h2>
              <p className="leading-relaxed mb-4">
                {t("sections.contact.p1", "For regulatory inquiries, compliance audits, or data verification requests, please contact our compliance department:")}
              </p>
              <p className="leading-relaxed font-semibold">
                Email: <img src="/manus-storage/pasted_file_Hs1mMd_image_2cd2c6f6.png" alt={language === "fr" ? "Adresse e-mail de contact confidentiel" : "Confidential contact email address"} className="inline-block h-6 sm:h-7 align-middle" /><br />
                Paris Compliance Office: 231, Rue Saint Honoré, 75001 – Paris (By Appointment Only)<br />
                Luxembourg Compliance Office: 54, rue Charles Darwin, L-1433 – Luxembourg (By Appointment Only)
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
