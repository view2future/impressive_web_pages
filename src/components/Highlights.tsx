import React from "react";
import { type ProfileData } from "../data";

const Highlights: React.FC<{ data: ProfileData }> = ({ data }) => {
  return (
    <div className="chips">
      {data.highlights.map((highlight, index) => (
        <span className="chip" key={index}>
          {highlight}
        </span>
      ))}
    </div>
  );
};

export default Highlights;
