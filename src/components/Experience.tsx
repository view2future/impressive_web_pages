import React from "react";
import { type ProfileData } from "../data";
import { motion } from "framer-motion";

const Experience: React.FC<{ data: ProfileData }> = ({ data }) => {
  const { experiences, labels } = data;
  
  return (
    <section className="mb-16">
      <div className="flex items-center gap-6 mb-12">
        <h2 className="text-5xl font-black inline-block text-[var(--geek-accent)] font-mono tracking-tighter uppercase">
          {">"} {labels.workHistory}
        </h2>
        <div className="h-[2px] flex-grow bg-gradient-to-r from-[var(--geek-accent-dim)] to-transparent hidden md:block"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
        {experiences.map((exp, index) => {
          const isBaiduGM = index === 0;
          const isBaiduArch = index === 1;
          const isCEO = exp.title.includes("CEO");
          const isProductDir = exp.title.includes("产品总监") || exp.title.includes("Product Director");
          const isMotorola = exp.company.includes("摩托罗拉") || exp.company.toLowerCase().includes("motorola");
          const isEarlyCareer = index === 5;
          
          let colSpan = "md:col-span-3"; 
          if (isBaiduGM) colSpan = "md:col-span-6"; 
          if (isBaiduArch || isCEO) colSpan = "md:col-span-3"; 
          if (isProductDir) colSpan = "md:col-span-3"; 
          if (isEarlyCareer) colSpan = "md:col-span-3"; 
          if (isMotorola) colSpan = "md:col-span-6"; 

          const accentColor = isBaiduGM || isBaiduArch ? "#00ff41" : 
                             isCEO ? "#faff00" :
                             isProductDir ? "#ff9d00" : // 极客橙 (Amber)
                             isMotorola ? "#00f3ff" :
                             "#9ca3af"; // 默认灰

          const isSpecial = isBaiduGM || isBaiduArch || isCEO || isMotorola || isProductDir;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`geek-card p-10 flex flex-col justify-between group ${colSpan} ${
                isSpecial ? "border-2" : "border-gray-800"
              }`}
              style={{ 
                borderColor: isSpecial ? accentColor : undefined,
                boxShadow: isSpecial ? `0 0 30px ${accentColor}15` : undefined 
              }}
            >
              <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-gray-700 font-black group-hover:text-white transition-colors">
                DATA_BLOCK_{index.toString().padStart(2, '0')}
              </div>

              <div>
                <div className="flex flex-col gap-2 mb-8">
                  <div className="flex gap-5 items-center">
                    {exp.logo && (
                      <div className="w-16 h-16 bg-white p-2 border-2 border-black flex-shrink-0 flex items-center justify-center grayscale brightness-110 group-hover:grayscale-0 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <img src={exp.logo} alt={exp.company} className="w-full h-auto" />
                      </div>
                    )}
                    <div>
                      <h3 className={`font-black tracking-tight leading-none mb-2 ${
                        isBaiduGM || isCEO || isMotorola ? 'text-4xl' : 'text-2xl'
                      }`} style={{ 
                        color: accentColor,
                        textShadow: isSpecial ? `0 0 10px ${accentColor}40` : 'none'
                      }}>
                        {exp.title}
                      </h3>
                      <p className="text-gray-400 font-mono text-base font-black uppercase tracking-[0.2em]">{exp.company}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-center gap-3 text-xs font-mono text-gray-500 mb-6 border-b border-gray-800/50 pb-3">
                    <span className="text-white bg-gray-800 px-2 py-0.5 font-bold">T_{exp.period}</span>
                    <span className="opacity-30">|</span>
                    <span className="text-white font-black uppercase tracking-wider bg-gray-700 px-2 py-0.5 border border-gray-600">
                      LOC::{exp.location}
                    </span>
                  </div>
                  <ul className="space-y-4">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-lg font-mono text-gray-200 leading-relaxed flex gap-4 items-start">
                        <span className="mt-1.5 w-1.5 h-1.5 flex-shrink-0" style={{ backgroundColor: accentColor, boxShadow: `0 0 8px ${accentColor}` }}></span> 
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-auto pt-8 flex flex-wrap gap-3">
                {exp.tags && exp.tags.map((tag, i) => (
                  <motion.span 
                    key={i} 
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="border-2 text-xs px-3 py-1.5 font-black uppercase tracking-widest transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                    style={{ 
                      backgroundColor: `${accentColor}20`,
                      borderColor: accentColor,
                      color: accentColor === "#9ca3af" ? "white" : accentColor,
                      textShadow: `0 0 5px ${accentColor}40`
                    }}
                  >
                    #{tag}
                  </motion.span>
                ))}
                
                {exp.company.includes("百度") && (
                  <div className="w-full mt-6 pt-6 border-t border-gray-800 flex gap-4">
                    <span className="text-xs font-black bg-[#00ff41] text-black px-3 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase">Core::Paddle</span>
                    <span className="text-xs font-black border-2 border-[#00ff41] text-[#00ff41] px-3 py-1 uppercase tracking-tighter">Model::ERNIE</span>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
