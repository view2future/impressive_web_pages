import React from "react";
import { type ProfileData } from "../data";

const Summary: React.FC<{ data: ProfileData }> = ({ data }) => {
  return (
    <div className="brutal-card bg-white p-8">
      <p className="text-xl font-bold leading-relaxed">
        {data.summary}
      </p>
    </div>
  );
};

export default Summary;
