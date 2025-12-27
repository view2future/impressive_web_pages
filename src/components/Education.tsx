import React from "react";
import { type ProfileData } from "../data";

const Education: React.FC<{ data: ProfileData }> = ({ data }) => {
  return (
    <div className="brutal-card bg-[var(--brutal-cyan)] p-8">
      <h3 className="text-3xl font-black mb-6 border-b-4 border-black pb-2 uppercase">{data.labels.education}</h3>
      <div className="space-y-6">
        {data.education.map((edu, index) => (
          <div key={index}>
            <h4 className="text-xl font-black">{edu.school}</h4>
            <p className="font-bold text-lg">{edu.degree}</p>
            <span className="bg-black text-white px-2 py-0.5 text-sm font-black mt-2 inline-block">
              {edu.period}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;