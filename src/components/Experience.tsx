import React from "react";
import { type ProfileData } from "../data";

const Experience: React.FC<{ data: ProfileData }> = ({ data }) => {
  const { experiences } = data;

  return (
    <div className="exp-list">
      {experiences.map((exp, index) => (
        <article
          className={`exp-row${index === 0 ? " is-lead" : ""}`}
          key={index}
        >
          <div className="exp-period">
            <b>{exp.period}</b>
            {exp.location}
          </div>

          <div>
            <h3 className="exp-role">{exp.title}</h3>
            <p className="exp-company">{exp.company}</p>

            <ul className="exp-desc">
              {exp.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>

            {exp.tags && (
              <div className="tags">
                {exp.tags.map((tag, i) => (
                  <span className="tag" key={i}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
};

export default Experience;
