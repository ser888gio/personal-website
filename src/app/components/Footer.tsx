import React from "react";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="py-4 text-center border-[#A9A9A9] border-2 border-solid rounded-lg mt-10">
      <p className="text-sm text-white">{t("footerText")}</p>
    </footer>
  );
};

export default Footer;
