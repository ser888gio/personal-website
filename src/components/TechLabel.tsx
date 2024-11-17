import React from "react";

function TechLabel({ tech }: { tech: string }) {
  return (
    <span className="text-xs bg-slate-600 text-slate-200 px-2 py-1 rounded-full mr-2">
      {tech}
    </span>
  );
}

export default TechLabel;
