import React from "react";
import { type ProfileData } from "../data";

const Summary: React.FC<{ data: ProfileData }> = ({ data }) => {
  return (
    <div className="geek-card p-6 border-t-4 border-t-[var(--geek-cyan)]">
      <div className="text-[10px] font-mono text-gray-500 mb-2">// EXEC_SUMMARY</div>
      <p className="text-sm font-mono text-gray-200 leading-relaxed tracking-tight">
        {data.summary}
      </p>
    </div>
  );
};

export default Summary;