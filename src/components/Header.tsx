import React from "react";
import { type ProfileData } from "../data";
import { motion } from "framer-motion";
import { Linkedin, Mail, Phone, Cpu } from "lucide-react";

const Header: React.FC<{ data: ProfileData }> = ({ data }) => {
  const { name, title, contact, labels } = data;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
      {/* 名字卡片 */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="geek-card p-10 md:col-span-2 flex flex-col justify-center border-l-8 border-l-[var(--geek-accent)] bg-black/40"
      >
        <div className="flex items-center gap-3 text-[var(--geek-accent)] text-xs mb-4 font-mono font-bold tracking-[0.3em]">
          <Cpu size={18} className="animate-pulse" /> USER_SYSTEM_CORE
        </div>
        <h1 className="text-6xl md:text-8xl font-black mb-6 text-white glow-text tracking-tight leading-none">{name}</h1>
        <div className="bg-[var(--geek-accent-dim)] text-[var(--geek-accent)] px-4 py-2 text-base font-mono inline-block self-start border border-[var(--geek-accent)]/30 font-bold">
          {">"} {title}
        </div>
      </motion.div>

      {/* 联系方式 */}
      <div className="geek-card p-8 space-y-6 bg-black/20">
        <h3 className="text-xs font-mono border-b border-gray-800 pb-3 mb-6 text-[var(--geek-accent)] opacity-70 font-black tracking-widest uppercase">
          // {labels.contact}
        </h3>
        <a href={`mailto:${contact.email}`} className="flex items-center gap-4 text-sm font-mono hover:text-[var(--geek-accent)] transition-all hover:translate-x-1 group">
          <Mail size={20} className="text-gray-600 group-hover:text-[var(--geek-accent)]" /> {contact.email}
        </a>
        <a href={`tel:${contact.phone}`} className="flex items-center gap-4 text-sm font-mono hover:text-[var(--geek-accent)] transition-all hover:translate-x-1 group">
          <Phone size={20} className="text-gray-600 group-hover:text-[var(--geek-accent)]" /> {contact.phone}
        </a>
        <a href={contact.linkedin} target="_blank" className="flex items-center gap-4 text-sm font-mono hover:text-[var(--geek-accent)] transition-all hover:translate-x-1 group">
          <Linkedin size={20} className="text-gray-600 group-hover:text-[var(--geek-accent)]" /> LINKEDIN
        </a>
      </div>
    </div>
  );
};

export default Header;
