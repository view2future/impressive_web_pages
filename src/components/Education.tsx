import React from "react";
import { type ProfileData } from "../data";

const Education: React.FC<{ data: ProfileData }> = ({ data }) => {
  return (
    <div className="panel">
      <div className="mono-label">
        <span>// {data.labels.education}</span>
        <em>EDU</em>
      </div>
      <div>
        {data.education.map((edu, index) => (
          <div className="edu-item" key={index}>
            <h3>{edu.school}</h3>
            <p>{edu.degree}</p>
            <span>{edu.period}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
