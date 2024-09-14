import React from "react";

interface EducationItemProps {
  schoolName: string;
  degree: string;
  year: string;
  bulletPoints: string[];
}

const EducationItem: React.FC<EducationItemProps> = ({
  schoolName,
  degree,
  year,
  bulletPoints,
}) => {
  return (
    <section className="flex mb-6">
      {/* Left column: Timeline */}
      <div className="w-1/4 pr-4 text-right">
        <p className="text-sm text-gray-600">{year}</p>
      </div>

      {/* Right column: Education details */}
      <div className="w-3/4">
        <h3 className="text-lg font-semibold">{schoolName}</h3>
        <p className="text-md italic">{degree}</p>
        <ul className="list-disc list-inside mt-2">
          {bulletPoints.map((point, index) => (
            <li key={index} className="text-sm">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default EducationItem;
