import { useState, useEffect } from "react";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Experience from "./components/Experience";
import Education from "./components/Education";
import PersonalSummary from "./components/PersonalSummary";
import Highlights from "./components/Highlights";
import ThemeSwitcher from "./components/ThemeSwitcher";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { translations } from "./data";
import profileImage from "./assets/profile.jpg";
import { motion } from "framer-motion";

function App() {
  const [theme, setTheme] = useState("newbrutalism");
  const [lang, setLang] = useState<"zh" | "en">("zh");
  const data = translations[lang];

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="min-h-screen p-4 md:p-12 max-w-7xl mx-auto relative">
      <div className="flex justify-between items-start mb-8">
        <ThemeSwitcher theme={theme} setTheme={setTheme} />
        <LanguageSwitcher lang={lang} setLang={setLang} />
      </div>
      
      {/* 顶部 Bento 区域 */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
        {/* 头像卡片 */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="brutal-card overflow-hidden h-[400px] lg:h-auto relative bg-white"
        >
          <img
            src={profileImage}
            alt={data.name}
            className="w-full h-full object-cover contrast-110 hover:contrast-125 transition-all duration-500"
          />
          <div className="absolute bottom-4 left-4 bg-black text-white p-2 font-black uppercase text-xl">
            {data.labels.proFile}
          </div>
        </motion.div>

        {/* 名字与标题 */}
        <div className="lg:col-span-3">
          <Header data={data} />
          
          <Highlights data={data} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Summary data={data} />
            <PersonalSummary data={data} />
          </div>
        </div>
      </div>

      {/* 核心内容 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <Experience data={data} />
        </div>
        <div className="space-y-12">
          <Education data={data} />
          
          {/* 装饰性卡片 */}
          <div className="brutal-card bg-[var(--brutal-pink)] p-8 text-center rotate-3 hover:rotate-0">
            <h2 className="text-4xl font-black uppercase">{data.labels.years}</h2>
            <p className="text-xl font-bold uppercase">{data.labels.industryExp}</p>
          </div>
        </div>
      </div>

      <footer className="mt-24 pb-12 text-center border-t-4 border-black pt-8">
        <p className="text-2xl font-black uppercase flex items-center justify-center gap-2">
          {lang === "zh" ? "用爱构建" : "Built with Love"} <span className="text-red-600">❤️</span>
        </p>
      </footer>
    </div>
  );
}

export default App;