"use client";

import React from "react";
import CapitolItem from "./Capitol";
import EducationItem from "./Education";
import { useTranslation } from "react-i18next";

function AboutMe() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="mb-5 scroll-mt-16 md:mb-10 lg:mb-10 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          {t("about")}
        </h2>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-slate-200 mb-4">
          {t("workExperience")}
        </h3>
        <div>
          <CapitolItem
            firm={t("freelance")}
            title={t("titleFE")}
            year="2024"
            bulletPoints={[t("descFE")]}
          />
        </div>
        <div>
          <CapitolItem
            firm={t("firmGenerali")}
            title={t("titleGenerali")}
            year="2023 - 2024"
            bulletPoints={[t("descGenerali")]}
          />
        </div>
        <div>
          <CapitolItem
            firm="Global Payments"
            title={t("titleGP")}
            year="2022 - 2023"
            bulletPoints={[t("descGP")]}
          />
        </div>
        <h3 className="text-xl font-semibold text-slate-200 mt-8 mb-4">
          {t("education")}
        </h3>
        <div>
          <EducationItem
            schoolName={t("schoolName")}
            degree={t("schoolTitle")}
            year="2022 - 2025"
            bulletPoints={[
              t("bulletPoint1Education"),
              t("bulletPoint2Education"),
              t("bulletPoint3Education"),
              t("bulletPoint4Education"),
              t("bulletPoint5Education"),
              t("bulletPoint6Education"),
            ]}
          />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
