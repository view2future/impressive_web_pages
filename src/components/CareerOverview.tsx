import React from "react";
import { type ProfileData } from "../data";

const CareerOverview: React.FC<{ data: ProfileData }> = ({ data }) => {
  const { careerProfile, labels } = data;

  return (
    <section className="section" aria-labelledby="career-title">
      <div className="section-head">
        <div>
          <div className="section-index">01 / CAREER MAP</div>
          <h2 className="section-title" id="career-title">
            {labels.careerProfile}
          </h2>
        </div>
        <p className="section-note">
          行业跨度、职能演进与一条贯穿二十年的主线：把技术能力转化为客户可用的产品与业务结果。
        </p>
      </div>

      <div className="career-grid">
        <div className="panel">
          <div className="mono-label">
            <span>// INDUSTRY_DOMAINS</span>
            <em>MAP</em>
          </div>
          <div className="industry-wrap">
            {careerProfile.industries.map((item, idx) => (
              <span className="industry-item" key={idx}>
                <b>{idx.toString().padStart(2, "0")}</b>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="panel">
          <div className="mono-label">
            <span>// CAREER_TRAJECTORY</span>
            <em>PATH</em>
          </div>
          <div className="trajectory">
            {careerProfile.trajectory.map((step, idx) => (
              <React.Fragment key={idx}>
                <span
                  className={
                    idx === careerProfile.trajectory.length - 1 ? "is-last" : ""
                  }
                >
                  {step}
                </span>
                {idx < careerProfile.trajectory.length - 1 && <i>→</i>}
              </React.Fragment>
            ))}
          </div>
          <p className="quote">{careerProfile.summary}</p>
        </div>
      </div>
    </section>
  );
};

export default CareerOverview;
