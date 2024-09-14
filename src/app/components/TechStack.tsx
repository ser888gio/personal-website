import React from "react";
import { useTranslation } from "react-i18next";

const TechStack: React.FC = () => {
  const { t } = useTranslation();
  const dailyTech = [
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Figma",
    "Git",
    "GitHub",
  ];
  const experiencedTech = [
    "Python",
    "C#",
    "SQL",
    "Postgres",
    "MongoDB",
    "Node.js",
    "Postman",
    "Puppeteer",
    "Rest API",
    "XML",
    "JSON",
    "XAMPP",
    "Elasticsearch",
    "Jira",
    "Confluence",
    "Archimate",
    "Wordpress",
    "ETL",
  ];

  return (
    <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6 mt-8 self-center">
      <h2 className="text-2xl font-bold text-[#A0006D] mb-4">Tech Stack</h2>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2 text-[#2F3C7E]">
          {t("techDaily")}
        </h3>
        <div className="flex flex-wrap gap-2">
          {dailyTech.map((tech, index) => (
            <span
              key={index}
              className="bg-[#A0006D] text-white px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2 text-[#2F3C7E]">
          {t("techExp")}
        </h3>
        <div className="flex flex-wrap gap-2">
          {experiencedTech.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
