import React from "react";
import { type ProfileData } from "../data";
import { motion } from "framer-motion";

const Highlights: React.FC<{ data: ProfileData }> = ({ data }) => {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {data.highlights.map((highlight, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          className="bg-[var(--geek-accent-dim)] text-[var(--geek-accent)] px-3 py-1 font-mono text-[10px] border border-[var(--geek-accent-dim)] rounded-sm flex items-center gap-2 group cursor-default"
        >
          <span className="w-1.5 h-1.5 bg-[var(--geek-accent)] rounded-full group-hover:animate-ping"></span>
          {highlight}
        </motion.div>
      ))}
    </div>
  );
};

export default Highlights;