"use client";

import { useTranslation } from "react-i18next";

const LanguageButton: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <button
      onClick={() => changeLanguage(i18n.language === "en" ? "cz" : "en")}
    >
      {i18n.language === "en" ? "CZ" : "EN"}
    </button>
  );
};

export default LanguageButton;
