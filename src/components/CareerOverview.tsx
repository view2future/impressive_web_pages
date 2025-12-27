import React from "react";
import { type ProfileData } from "../data";
import { motion } from "framer-motion";
import { Globe, Briefcase, TrendingUp } from "lucide-react";

const CareerOverview: React.FC<{ data: ProfileData }> = ({ data }) => {
  const { careerProfile, labels } = data;

  return (
    <section className="mb-16">
      <div className="flex items-center gap-6 mb-8">
        <h2 className="text-4xl font-black inline-block text-white font-mono tracking-tighter uppercase">
          {">"} {labels.careerProfile}
        </h2>
        <div className="h-[1px] flex-grow bg-gray-800 hidden md:block opacity-50"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* A. 行业版图 */}
        <div className="geek-card p-8 lg:col-span-1 border-t-4 border-t-[var(--geek-cyan)] bg-black/40">
          <div className="flex items-center gap-3 text-[var(--geek-cyan)] mb-6 font-mono font-black text-sm tracking-widest">
            <Globe size={18} /> INDUSTRY_DOMAINS
          </div>
          <div className="flex flex-wrap gap-3">
            {careerProfile.industries.map((item, idx) => (
              <span key={idx} className="bg-gray-900 border border-gray-700 px-3 py-1.5 text-sm font-bold text-gray-300 hover:border-[var(--geek-cyan)] hover:text-white transition-colors cursor-default">
                [{idx.toString().padStart(2, '0')}] {item}
              </span>
            ))}
          </div>
        </div>

        {/* B. 职务演进 & 深度总结 */}
        <div className="geek-card p-8 lg:col-span-2 border-t-4 border-t-[var(--geek-accent)] bg-black/40">
          <div className="flex items-center gap-3 text-[var(--geek-accent)] mb-6 font-mono font-black text-sm tracking-widest">
            <TrendingUp size={18} /> CAREER_TRAJECTORY
          </div>
          
          {/* 演进链路 */}
          <div className="flex flex-wrap items-center gap-y-4 gap-x-2 mb-8 font-mono text-sm">
            {careerProfile.trajectory.map((step, idx) => (
              <React.Fragment key={idx}>
                <span className={`px-2 py-1 ${idx === careerProfile.trajectory.length - 1 ? 'bg-[var(--geek-accent)] text-black font-black' : 'text-gray-400'}`}>
                  {step.toUpperCase()}
                </span>
                {idx < careerProfile.trajectory.length - 1 && (
                  <span className="text-gray-700">{" >> "}</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="border-l-4 border-gray-800 pl-6 py-2">
            <p className="text-lg font-mono text-gray-300 leading-relaxed italic opacity-90">
              "{careerProfile.summary}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerOverview;
