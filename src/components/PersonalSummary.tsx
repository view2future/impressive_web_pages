import React from "react";
import { type ProfileData } from "../data";

const PersonalSummary: React.FC<{ data: ProfileData }> = ({ data }) => {
  return (
    <div className="panel">
      <div className="mono-label">
        <span>// CORE_VALUES</span>
        <em>02</em>
      </div>
      <ul className="value-list">
        {data.personalSummary.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default PersonalSummary;
