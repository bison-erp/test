import Layout from "@/components/Layout";
import { getPage } from "@/content/registry";
import { SITE_URL } from "@shared/const";
import React from "react";
import SEOHead from "@/components/SEOHead";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PrivacyPolicy() {
  const { t } = useTranslation("PrivacyPolicy");
  const { language } = useLanguage();
  return (
    <Layout>
    <div className="bg-[#F4F6F8] pt-12 pb-24">
      <SEOHead />
      
      <div className="max-w-4xl mx-auto px-6">
        <span className="text-[#005CB8] font-semibold tracking-widest text-xs uppercase block mb-3">
          {t("content.subtitle", "Regulatory Compliance")}
        </span>
        <h1 className="font-serif text-4xl md:text-5xl text-[#0A1118] mb-8 leading-tight">
              {getPage("privacy", language).data.h1}
            </h1>
        
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-[#E5E7EB] prose prose-slate max-w-none text-[#374151]">
          <p className="text-sm text-[#6B7280] mb-8">
            {t("content.lastUpdated", "Last updated: May 30, 2026")}
          </p>

          <section className="mb-8">
            <h2 className="font-serif text-2xl text-[#0A1118] mb-4">{t("sections.intro.title", "1. Introduction")}</h2>
            <p className="leading-relaxed mb-4">
              {t("sections.intro.p1", "At Acropolis Real Estate, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.")}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl text-[#0A1118] mb-4">{t("sections.data.title", "2. Data We Collect About You")}</h2>
            <p className="leading-relaxed mb-4">
              {t("sections.data.p1", "Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:")}
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>{t("sections.data.item1", "Identity Data: includes first name, last name, username or similar identifier.")}</li>
              <li>{t("sections.data.item2", "Contact Data: includes email address and telephone numbers.")}</li>
              <li>{t("sections.data.item3", "Technical Data: includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.")}</li>
              <li>{t("sections.data.item4", "Usage Data: includes information about how you use our website and services.")}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl text-[#0A1118] mb-4">{t("sections.use.title", "3. How We Use Your Personal Data")}</h2>
            <p className="leading-relaxed mb-4">
              {t("sections.use.p1", "We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:")}
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>{t("sections.use.item1", "Where we need to perform the contract we are about to enter into or have entered into with you.")}</li>
              <li>{t("sections.use.item2", "Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.")}</li>
              <li>{t("sections.use.item3", "Where we need to comply with a legal obligation.")}</li>
              <li>{t("sections.use.item4", "Where you have given us explicit consent to process your data (e.g., when signing up for our newsletter).")}</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl text-[#0A1118] mb-4">4. Data Security</h2>
            <p className="leading-relaxed mb-4">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl text-[#0A1118] mb-4">5. Your Legal Rights</h2>
            <p className="leading-relaxed mb-4">
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Request access to your personal data.</li>
              <li>Request correction of your personal data.</li>
              <li>Request erasure of your personal data.</li>
              <li>Object to processing of your personal data.</li>
              <li>Request restriction of processing your personal data.</li>
              <li>Request transfer of your personal data.</li>
              <li>Withdraw consent at any time.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-2xl text-[#0A1118] mb-4">{t("sections.contact.title", "6. Contact Us")}</h2>
            <p className="leading-relaxed mb-4">
              {t("sections.contact.p1", "If you have any questions about this privacy policy or our privacy practices, please contact us at:")}
            </p>
            <p className="leading-relaxed font-semibold">
	            Email: <img src="/manus-storage/pasted_file_Hs1mMd_image_2cd2c6f6.png" alt={language === "fr" ? "Adresse e-mail de contact confidentiel" : "Confidential contact email address"} className="inline-block h-6 sm:h-7 align-middle" /><br />
            Paris Address: 231, Rue Saint Honoré, 75001 – Paris (By Appointment Only)<br />
            Luxembourg Address: 54, rue Charles Darwin, L-1433 – Luxembourg (By Appointment Only)
            </p>
          </section>
        </div>
      </div>
    </div>
    </Layout>
  );
}
