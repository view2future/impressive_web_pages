import React from "react";
import { type ProfileData } from "../data";

const Education: React.FC<{ data: ProfileData }> = ({ data }) => {
  return (
    <div className="geek-card p-6">
      <h3 className="text-xs font-mono text-[var(--geek-cyan)] mb-6 border-b border-gray-800 pb-2 tracking-widest">
        // {data.labels.education}
      </h3>
      <div className="space-y-6">
        {data.education.map((edu, index) => (
          <div key={index} className="border-l-2 border-gray-800 pl-4 py-1">
            <h4 className="text-sm font-black text-white">{edu.school}</h4>
            <p className="font-mono text-xs text-gray-400 mt-1">{edu.degree}</p>
            <span className="text-[10px] font-mono text-[var(--geek-cyan)] opacity-70 mt-2 block">
              [{edu.period}]
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
