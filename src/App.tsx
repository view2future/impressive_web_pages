<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from './data';
import portrait from './assets/images/portrait.jpg';
import { 
  ArrowRight,
  Zap,
  ShieldCheck,
  Compass,
  ChevronDown
} from 'lucide-react';

type ThemeMode = 'SAGE' | 'ARCH' | 'NOVA';

interface ThemeConfig {
  bg: string;
  accent: string;
  accentBg: string;
  border: string;
  label: string;
  tag: string;
  portraitFilter: string;
  overlay: string;
  textColor: string;
  subTextColor: string;
  cardBg: string;
}

const themeConfigs: Record<ThemeMode, ThemeConfig> = {
  SAGE: {
    bg: 'bg-[#fdfcf8]',
    accent: 'text-[#af3a3a]',
    accentBg: 'bg-[#af3a3a]',
    border: 'border-[#af3a3a]/20',
    label: 'SAGE PHILOSOPHY | 商业哲学',
    tag: '博古通今',
    portraitFilter: 'contrast(1.05) saturate(0.9) brightness(1.05)',
    overlay: 'from-[#fdfcf8]/90',
    textColor: 'text-stone-900',
    subTextColor: 'text-stone-600',
    cardBg: 'bg-white border-stone-100 shadow-sm hover:shadow-2xl'
  },
  ARCH: {
    bg: 'bg-[#0f1115]',
    accent: 'text-[#4176ff]',
    accentBg: 'bg-[#4176ff]',
    border: 'border-[#4176ff]/20',
    label: 'STRATEGIC ARCHITECT | 产业架构',
    tag: '战略布局',
    portraitFilter: 'contrast(1.1) saturate(1.2) brightness(1.0)',
    overlay: 'from-[#0f1115]/90',
    textColor: 'text-white',
    subTextColor: 'text-stone-400',
    cardBg: 'bg-white/5 border-white/5 hover:border-white/20 hover:bg-white/[0.08]'
  },
  NOVA: {
    bg: 'bg-[#050a14]',
    accent: 'text-[#2dd4bf]',
    accentBg: 'bg-[#2dd4bf]',
    border: 'border-[#2dd4bf]/20',
    label: 'EVOLUTIONARY VISION | 生态演化',
    tag: '未来视野',
    portraitFilter: 'hue-rotate(-15deg) contrast(1.1) saturate(1.3)',
    overlay: 'from-[#050a14]/90',
    textColor: 'text-white',
    subTextColor: 'text-stone-400',
    cardBg: 'bg-white/5 border-white/5 hover:border-white/20 hover:bg-white/[0.08]'
  }
};

const Section: React.FC<{ mode: ThemeMode; id: string }> = ({ mode, id }) => {
  const current = themeConfigs[mode];
  
  return (
    <section id={id} className={`min-h-screen ${current.bg} transition-colors duration-1000 overflow-hidden relative noise-overlay font-sans flex flex-col items-center justify-center py-20 px-6`}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* 文字区 - 手机优先：在手机上排在图片下面或上面？通常图片在上面更有视觉冲击力 */}
          <div className="lg:col-span-7 z-10 order-2 lg:order-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className={`inline-flex items-center gap-3 px-4 py-1.5 rounded-full border ${current.border} ${current.accent} text-[10px] font-bold tracking-[0.2em] mb-6 bg-white/5`}>
                <Compass size={14} />
                {current.label}
              </div>
              
              <h2 className={`text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.9] ${current.textColor}`}>
                {resumeData.name} <br />
                <span className={`${current.accent} opacity-90 italic text-3xl md:text-5xl lg:text-6xl font-serif mt-4 block`}>
                  {current.tag} <span className="text-xl font-light not-italic opacity-40 ml-2">/ GLOBAL STRATEGY</span>
                </span>
              </h2>

              <p className={`text-base md:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-12 font-light ${current.subTextColor}`}>
                {resumeData.title}。拥有超过 <span className={`font-bold ${current.accent}`}>20年</span> 的投融资经验，深耕车联网与地产转型领域，致力于物种文明与商业生态的协同进化。
              </p>

              {/* 核心指标 - 手机上单列，平板/电脑多列 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-10 text-center lg:text-left">
                {[
                  { label: 'EXPERIENCE | 资历', val: '20Y+', sub: 'Industry Expertise' },
                  { label: 'TRACK RECORD | 战绩', val: 'IPO / M&A', sub: 'Capital Markets' },
                  { label: 'NETWORK | 生态', val: 'ECOSYSTEM', sub: 'Strategic Layout' }
                ].map((stat, i) => (
                  <div key={i} className="group cursor-default">
                    <div className={`text-[10px] ${current.accent} tracking-widest mb-2 font-bold uppercase`}>{stat.label}</div>
                    <div className={`text-2xl lg:text-3xl font-black mb-1 ${current.textColor}`}>{stat.val}</div>
                    <div className="text-[10px] text-stone-500 uppercase tracking-tight font-medium">{stat.sub}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* 肖像区 - 手机优先：放在顶部或中间 */}
          <div className="lg:col-span-5 relative order-1 lg:order-2 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative z-10 w-full max-w-[320px] lg:max-w-none"
            >
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src={portrait} 
                  alt={resumeData.name}
                  style={{ filter: current.portraitFilter }}
                  className="w-full h-full object-cover transition-all duration-1000 scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${current.overlay} via-transparent to-transparent`} />
              </div>

              {/* 头衔浮窗 - 手机上缩小或重排 */}
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className={`absolute -bottom-6 -left-6 md:-left-10 p-5 md:p-8 backdrop-blur-3xl border ${current.border} rounded-3xl bg-white/5 z-20 shadow-2xl max-w-[220px] md:max-w-[280px] text-left`}
              >
                <div className="space-y-3 md:space-y-4">
                  {[
                    { cn: '战略规划专家', en: 'Strategic Planning' },
                    { cn: '投融资专家', en: 'Investment & Finance' },
                    { cn: '创业导师', en: 'Venture Mentor' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 md:gap-4">
                      <div className={`w-1.5 h-1.5 rounded-full ${current.accentBg}`} />
                      <div>
                        <div className={`text-xs md:text-sm font-bold ${current.textColor}`}>{item.cn}</div>
                        <div className="text-[8px] md:text-[9px] text-stone-500 uppercase tracking-widest font-mono">{item.en}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <ShieldCheck className={`absolute top-4 right-4 md:top-6 md:right-6 opacity-20 ${current.accent}`} size={20} />
              </motion.div>
            </motion.div>

            {/* 环境装饰光晕 */}
            <div className={`absolute -inset-10 lg:-inset-20 ${current.accent} opacity-[0.08] blur-[80px] lg:blur-[120px] rounded-full pointer-events-none`} />
          </div>
        </div>

        {/* 经历亮点 - 手机上横向滚动或堆叠 */}
        <div className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {resumeData.highlights.slice(0, 3).map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border transition-all duration-500 ${current.cardBg}`}
            >
              <div className={`${current.accent} mb-5 flex justify-between items-center`}>
                <div className="flex flex-col">
                  <span className="font-mono text-xs tracking-[0.2em] font-bold">{item.year}</span>
                </div>
                <div className={`p-2 rounded-full ${current.accentBg} bg-opacity-10 group-hover:bg-opacity-100 transition-all duration-500`}>
                  <ArrowRight size={14} className="group-hover:text-white transition-colors" />
                </div>
              </div>
              <h3 className={`text-lg md:text-xl font-black mb-3 tracking-tight ${current.textColor}`}>{item.event}</h3>
              <p className={`text-xs md:text-sm leading-relaxed font-light ${current.subTextColor}`}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 滚动提示 */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <ChevronDown className={current.textColor} />
      </div>
    </section>
  );
};

const App: React.FC = () => {
  return (
    <div className="bg-black">
      {/* 全局固定导航 */}
      <header className="fixed top-0 left-0 w-full p-6 md:p-10 z-50 flex justify-between items-start mix-blend-difference pointer-events-none">
        <div className="flex flex-col">
          <span className="text-white text-[9px] md:text-[10px] tracking-[0.4em] font-light mb-1 uppercase opacity-70">STRATEGIC PERSPECTIVE 2025</span>
          <div className="flex items-baseline gap-2">
            <span className="text-white font-black text-xl md:text-2xl tracking-tighter uppercase">{resumeData.englishName}</span>
          </div>
        </div>
        <div className="text-right flex flex-col items-end">
          <span className="text-white/40 text-[8px] md:text-[9px] tracking-[0.3em] uppercase mb-1">Status</span>
          <span className="text-white text-[10px] md:text-[11px] font-bold tracking-widest border-b border-white/20 pb-1 uppercase">Executive</span>
        </div>
      </header>

      {/* 三种风格顺序排列 */}
      <Section mode="ARCH" id="arch" />
      <Section mode="SAGE" id="sage" />
      <Section mode="NOVA" id="nova" />

      {/* 页脚联系信息 */}
      <footer className="bg-stone-950 text-white py-20 px-6 border-t border-white/5">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block p-4 rounded-full bg-white/5 mb-8">
            <Zap className="text-blue-500" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter">LET'S CO-EVOLVE.</h2>
          <p className="text-stone-500 mb-12 max-w-xl mx-auto font-light">致力于物种文明与商业生态的协同进化，期待与具有未来视野的伙伴共同构建新商业文明。</p>
          <div className="flex flex-wrap justify-center gap-6 text-[10px] font-bold tracking-[0.3em] text-stone-400">
            <span className="hover:text-white cursor-pointer transition-colors">STRATEGY</span>
            <span className="hover:text-white cursor-pointer transition-colors">INVESTMENT</span>
            <span className="hover:text-white cursor-pointer transition-colors">MENTORSHIP</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

=======
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

>>>>>>> b91310a8e4c32f9bac7cdb03a61469a4f9947eb1
export default App;