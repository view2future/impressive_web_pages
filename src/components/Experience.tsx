import React from "react";
import { type ProfileData } from "../data";
import { motion } from "framer-motion";

const Experience: React.FC<{ data: ProfileData }> = ({ data }) => {
  const { experiences, labels } = data;
  const colors = ["bg-white", "bg-[var(--brutal-cyan)]", "bg-[var(--brutal-pink)]", "bg-[var(--brutal-yellow)]"];

  return (
    <section className="mb-16">
      <h2 className="text-5xl font-black mb-8 inline-block bg-black text-white px-6 py-2 transform -rotate-1 uppercase">
        {labels.workHistory}
      </h2>
      <div className="grid grid-cols-1 gap-8">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className={`brutal-card p-8 ${exp.specialColor || colors[index % colors.length]} ${exp.isHighlight ? 'border-[6px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]' : ''}`}
          >
            <div className="flex flex-col md:flex-row justify-between mb-4 gap-4">
              <div className="flex gap-4 items-start">
                {exp.logo && (
                  <div className="w-16 h-16 bg-white p-2 border-4 border-black flex-shrink-0 flex items-center justify-center">
                    <img src={exp.logo} alt={exp.company} className="w-full h-auto" />
                  </div>
                )}
                <div>
                  <h3 className="text-3xl font-black flex items-center gap-2">
                    {exp.title}
                    {exp.isHighlight && <span className="text-sm bg-red-500 text-white px-2 py-1 rotate-3">TOP</span>}
                  </h3>
                  <p className="text-xl font-bold italic">{exp.company}</p>
                </div>
              </div>
              <div className="md:text-right">
                <span className="tag bg-black text-white">{exp.period}</span>
                <p className="font-bold">{exp.location}</p>
              </div>
            </div>

            {exp.tags && (
              <div className="flex flex-wrap gap-2 mb-6">
                {exp.tags.map((tag, i) => (
                  <span key={i} className="bg-white border-2 border-black px-2 py-0.5 font-black text-sm uppercase">
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            <ul className="space-y-3">
              {exp.description.map((desc, i) => (
                <li key={i} className="flex gap-3 font-bold text-lg leading-snug">
                  <span className="text-2xl mt-[-4px]">→</span>
                  {desc}
                </li>
              ))}
            </ul>

            {exp.company.includes("百度") && (
              <div className="mt-6 flex flex-wrap gap-4 border-t-4 border-black pt-4 overflow-hidden">
                <div className="bg-white border-2 border-black p-2 font-black text-xs flex items-center gap-2 rotate-1">
                  <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/baidu.svg" className="w-4 h-4" alt="Baidu" />
                  BAIDU AI & LLM
                </div>
                <div className="bg-[var(--brutal-yellow)] border-2 border-black p-2 font-black text-xs flex items-center gap-2 -rotate-1">
                  PADDLE PADDLE | ERNIE
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
