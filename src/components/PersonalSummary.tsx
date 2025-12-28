import React from "react";
import { type ProfileData } from "../data";

const PersonalSummary: React.FC<{ data: ProfileData }> = ({ data }) => {
  return (
    <div className="geek-card p-6 border-t-4 border-t-[var(--geek-accent)]">
      <div className="text-[10px] font-mono text-gray-500 mb-2">// CORE_VALUES</div>
      <ul className="space-y-3">
        {data.personalSummary.map((item, index) => (
          <li key={index} className="font-mono text-xs text-gray-300 flex gap-2">
            <span className="text-[var(--geek-accent)]">▶</span> {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonalSummary;