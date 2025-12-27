import React from "react";
import { type ProfileData } from "../data";
import { motion } from "framer-motion";

const Highlights: React.FC<{ data: ProfileData }> = ({ data }) => {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {data.highlights.map((highlight, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? 2 : -2 }}
          className="bg-black text-white px-4 py-2 font-black text-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:bg-white hover:text-black transition-colors cursor-default"
        >
          {highlight}
        </motion.div>
      ))}
    </div>
  );
};

export default Highlights;
