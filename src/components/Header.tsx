import React from "react";
import { type ProfileData } from "../data";
import { motion } from "framer-motion";
import { Linkedin, Mail, Phone } from "lucide-react";

const Header: React.FC<{ data: ProfileData }> = ({ data }) => {
  const { name, title, contact, labels } = data;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {/* 名字卡片 */}
      <motion.div 
        initial={{ rotate: -2 }}
        whileHover={{ rotate: 0 }}
        className="brutal-card bg-[var(--brutal-yellow)] p-8 md:col-span-2 flex flex-col justify-center"
      >
        <h1 className="text-6xl md:text-8xl font-black mb-2">{name}</h1>
        <p className="text-xl md:text-2xl font-bold bg-black text-white inline-block px-4 py-1 self-start">
          {title}
        </p>
      </motion.div>

      {/* 联系方式 */}
      <div className="brutal-card bg-[var(--brutal-cyan)] p-6 space-y-4">
        <h3 className="text-2xl font-black border-b-4 border-black pb-2 mb-4 uppercase">{labels.contact}</h3>
        <a href={`mailto:${contact.email}`} className="flex items-center gap-3 font-bold hover:underline truncate">
          <Mail size={24} strokeWidth={3} /> {contact.email}
        </a>
        <a href={`tel:${contact.phone}`} className="flex items-center gap-3 font-bold hover:underline">
          <Phone size={24} strokeWidth={3} /> {contact.phone}
        </a>
        <a href={contact.linkedin} target="_blank" className="flex items-center gap-3 font-bold hover:underline">
          <Linkedin size={24} strokeWidth={3} /> LINKEDIN
        </a>
      </div>
    </div>
  );
};

export default Header;
