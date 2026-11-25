import React from "react";
import { type ProfileData } from "../data";

const Summary: React.FC<{ data: ProfileData }> = ({ data }) => {
  return (
    <div className="panel">
      <div className="mono-label">
        <span>// EXEC_SUMMARY</span>
        <em>01</em>
      </div>
      <p className="body-text">{data.summary}</p>
    </div>
  );
};

export default Summary;
