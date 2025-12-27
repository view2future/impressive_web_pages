import { useState, useEffect } from "react";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Experience from "./components/Experience";
import Education from "./components/Education";
import PersonalSummary from "./components/PersonalSummary";
import Highlights from "./components/Highlights";
import CareerOverview from "./components/CareerOverview";
import LanguageSwitcher from "./components/LanguageSwitcher";
import CustomCursor from "./components/CustomCursor";
import GeekBackground from "./components/GeekBackground";
import { translations } from "./data";
import profileImage from "./assets/profile.jpg";
import { motion } from "framer-motion";

const RealTimeClock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  return <span>{time.toLocaleTimeString()}</span>;
};

// 底部水平流动的系统状态条
const SystemStatusGutter = ({ lang }: { lang: string }) => {
  const messages = lang === "zh" 
    ? ["初始化神经链路...", "载入核心成就数据...", "正在同步百度 BMO 协议...", "飞桨引擎就绪", "文心大模型接口已连接", "检测到 20+ 年行业经验"]
    : ["Initializing neural link...", "Loading core achievements...", "Syncing Baidu BMO protocols...", "Paddle engine ready", "ERNIE LLM connected", "20+ years exp detected"];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black/80 backdrop-blur-md border-t border-gray-800 py-1 z-[100] overflow-hidden whitespace-nowrap font-mono text-[9px] text-[var(--geek-accent)] opacity-60">
      <div className="flex animate-scroll-fast gap-12">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex gap-12">
            {messages.map((m, j) => (
              <span key={j} className="flex items-center gap-2">
                <span className="w-1 h-1 bg-[var(--geek-accent)] rounded-full"></span>
                {m.toUpperCase()}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const TerminalHeader = ({ lang }: { lang: string }) => (
  <div className="flex items-center gap-2 mb-6 font-mono text-sm text-[var(--geek-accent)] relative z-10">
    <span className="animate-pulse">●</span>
    <span className="hidden sm:inline">SYSTEM STATUS: OPERATIONAL</span>
    <span className="opacity-50 ml-4 hidden sm:inline">|</span>
    <span className="ml-4 uppercase font-black tracking-widest">WANG_YU_OS_v4.0</span>
    <div className="flex-grow"></div>
    <div className="bg-[var(--geek-accent)] text-black px-2 py-0.5 font-black flex items-center gap-2">
      <RealTimeClock />
    </div>
  </div>
);

function App() {
  const [lang, setLang] = useState<"zh" | "en">("zh");
  const data = translations[lang];

  useEffect(() => {
    document.title = lang === "zh" ? "王宇 | 个人主页 & 职业简历" : "Wang Yu | Professional Profile";
  }, [lang]);

  useEffect(() => {
    document.title = lang === "zh" ? "王宇 | 个人主页 & 职业简历" : "Wang Yu | Professional Profile";
  }, [lang]);

  return (
    <div className="min-h-screen p-4 md:p-10 max-w-7xl mx-auto relative bg-[#08090d]">
      <CustomCursor />
      <GeekBackground />
      <SystemStatusGutter lang={lang} />
      
      <div className="relative z-10 pb-20">
        <TerminalHeader lang={lang} />
        
        <div className="flex justify-end mb-8">
          <LanguageSwitcher lang={lang} setLang={setLang} />
        </div>
        
        {/* 顶部 Geek Bento 区域 */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="geek-card overflow-hidden h-[400px] lg:h-auto group bg-black border-2 border-gray-800"
          >
            <img
              src={profileImage}
              alt={data.name}
              className="w-full h-full object-cover opacity-90 contrast-110 saturate-[0.8] group-hover:opacity-100 group-hover:saturate-100 transition-all duration-700"
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 bg-[var(--geek-accent)] text-black px-3 py-1 font-mono font-black text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              {data.labels.proFile}_
            </div>
          </motion.div>

          <div className="lg:col-span-3">
            <Header data={data} />
            <Highlights data={data} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <Summary data={data} />
              <PersonalSummary data={data} />
            </div>
          </div>
        </div>

        {/* 职业画像全景 */}
        <CareerOverview data={data} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* 工作经历扩容 */}
          <div className="lg:col-span-10">
            <Experience data={data} />
          </div>

          {/* 极简侧边栏 */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="sticky top-8 space-y-8">
              <Education data={data} />
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="geek-card p-6 border border-[var(--geek-accent)] bg-black/60 backdrop-blur-md text-[var(--geek-accent)] text-center"
              >
                <h2 className="text-4xl font-black mb-1 glow-text leading-none">{data.labels.years}</h2>
                <p className="text-[10px] font-black uppercase tracking-widest text-white">{data.labels.industryExp}</p>
              </motion.div>
            </div>
          </div>
        </div>

        <footer className="mt-24 pb-12 text-center border-t border-gray-800 pt-12 font-mono text-sm tracking-[0.2em]">
          <p className="text-gray-600 hover:text-[var(--geek-accent)] transition-colors">
            TERMINAL_SESSION_END // USER::{data.name.toUpperCase()} // 2025
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;