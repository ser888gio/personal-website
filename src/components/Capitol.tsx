import React from "react";

interface CapitolItemProps {
  firm: string;
  title: string;
  year: string;
  bulletPoints: string[];
}

function CapitolItem({ firm, title, year, bulletPoints }: CapitolItemProps) {
  return (
    <section className="flex mb-6">
      <div className="w-1/4 pr-4 text-right">
        <p className="text-sm text-[#999999]">{year}</p>
      </div>
      <div className="w-3/4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-md italic">{firm}</p>
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
}

export default CapitolItem;
