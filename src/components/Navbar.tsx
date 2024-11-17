import React from "react";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        <li>
          <a className="group flex items-center py-3 active" href="#about-me">
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-[#999999] group-hover:text-slate-200 group-focus-visible:text-slate-200">
              {t("navExperience")}
            </span>
          </a>
        </li>

        <li>
          <a className="group flex items-center py-3" href="#contact-me">
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-[#999999] group-hover:text-slate-200 group-focus-visible:text-slate-200">
              {t("navContact")}
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
