import React from "react";
import { type ProfileData } from "../data";

const PersonalSummary: React.FC<{ data: ProfileData }> = ({ data }) => {
  return (
    <div className="brutal-card bg-[var(--brutal-cyan)] p-8">
      <ul className="space-y-4">
        {data.personalSummary.map((item, index) => (
          <li key={index} className="font-bold text-lg leading-tight">
            ★ {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonalSummary;
