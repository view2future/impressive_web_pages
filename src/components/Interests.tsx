import React from "react";
import { type ProfileData } from "../data";

const Interests: React.FC<{ data: ProfileData }> = ({ data }) => {
  return (
    <div className="brutal-card bg-[var(--brutal-cyan)] p-8">
      <h3 className="text-3xl font-black mb-6 border-b-4 border-black pb-2 uppercase">{data.labels.interests}</h3>
      <div className="flex flex-wrap gap-3">
        {data.interests.map((interest, index) => (
          <span key={index} className="bg-white border-4 border-black p-2 font-black text-xl rotate-2 hover:rotate-0 transition-transform">
            {interest}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Interests;
