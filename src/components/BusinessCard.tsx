"use client";

import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function BusinessCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const { t } = useTranslation();
  return (
    <div className="w-96 h-56 perspective-1000 shaso" onClick={handleClick}>
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front side */}
        <div className="absolute w-full h-full backface-hidden bg-[#E9F1FA] shadow-lg rounded-lg p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl text-[#2F3C7E] font-bold mb-2">
              Sergiu Nica
            </h1>
            <p className="text-gray-600">{t("programmer")} | Web Developer</p>
          </div>
          <div className="flex justify-between items-center text-sm text-gray-800">
            <div className="flex space-x-2">
              <a
                href="https://www.linkedin.com/in/sergiu-nica-a9b3b220b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={20} color="#0077B5" />
                <span
                  className="fas fa-home"
                  aria-hidden="true"
                  title="LinkedIn"
                ></span>
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://github.com/ser888gio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={20} color="#333" />
                <span
                  className="fas fa-home"
                  aria-hidden="true"
                  title="GitHub"
                ></span>
                <span className="sr-only">GitHub</span>
              </a>
            </div>
            <span>{t("city")}</span>
          </div>
        </div>
        {/* Back side */}
        <div className="absolute w-full h-full backface-hidden bg-gray-800 text-white shadow-lg rounded-lg p-6 rotate-y-180 flex flex-col justify-center items-center">
          <p className="text-center">{t("cardText")}</p>
        </div>
      </div>
    </div>
  );
}

export default BusinessCard;
