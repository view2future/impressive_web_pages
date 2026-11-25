import { useEffect, useState } from "react";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Experience from "./components/Experience";
import Education from "./components/Education";
import PersonalSummary from "./components/PersonalSummary";
import Highlights from "./components/Highlights";
import CareerOverview from "./components/CareerOverview";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { translations } from "./data";
import profileImage from "./assets/profile.jpg";

const Clock = () => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="status">
      <span className="status-dot" />
      {now.toLocaleTimeString("zh-CN", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      })}{" "}
      CST
    </span>
  );
};

function App() {
  const [lang, setLang] = useState<"zh" | "en">("zh");
  const data = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.title =
      lang === "zh"
        ? "王宇 | 个人主页 & 职业简历"
        : "Wang Yu | Professional Profile";
  }, [lang]);

  return (
    <div className="page">
      <div className="stage" aria-hidden="true" />

      <header className="topbar shell">
        <div className="brand-line">
          <strong>王宇 · WANG YU</strong>
          <span>// PERSONAL PROFILE</span>
        </div>
        <div className="topbar-right">
          <Clock />
          <LanguageSwitcher lang={lang} setLang={setLang} />
        </div>
      </header>

      <main className="shell">
        <section className="hero-grid" aria-labelledby="hero-name">
          <div className="monolith">
            <div className="mono-top">
              <span>PROFILE // 001</span>
              <span>20+ YEARS · AI / CLOUD / MOBILITY</span>
            </div>
            <div className="hero-body">
              <p className="kicker">BAIDU BMO · SOUTHWEST CHINA</p>
              <h1 className="hero-name" id="hero-name">
                {data.name}
              </h1>
              <p className="hero-title">{data.title}</p>
              <p className="hero-summary">{data.careerProfile.summary}</p>
              <Highlights data={data} />
            </div>
          </div>

          <aside className="side-stack">
            <figure className="portrait-frame">
              <img
                className="portrait-img"
                src={profileImage}
                alt={data.name}
                width="640"
                height="736"
                fetchPriority="high"
                decoding="async"
              />
              <figcaption className="portrait-caption">
                <span>PORTRAIT / 2025</span>
                <span>CHENGDU · CN</span>
              </figcaption>
            </figure>
            <Header data={data} />
          </aside>
        </section>

        <section className="brief-grid" aria-label="Profile summary">
          <Summary data={data} />
          <PersonalSummary data={data} />
        </section>

        <CareerOverview data={data} />

        <section className="section" aria-labelledby="experience-title">
          <div className="section-head">
            <div>
              <div className="section-index">02 / CAREER LOG</div>
              <h2 className="section-title" id="experience-title">
                {data.labels.workHistory}
              </h2>
            </div>
            <p className="section-note">
              从嵌入式与移动终端，到产品、创业与大模型生态；一条持续向业务前端移动的职业路径。
            </p>
          </div>

          <div className="exp-layout">
            <Experience data={data} />
            <aside className="side-col">
              <Education data={data} />
              <div className="panel stat-panel">
                <strong>{data.labels.years}</strong>
                <span>{data.labels.industryExp}</span>
              </div>
            </aside>
          </div>
        </section>

        <footer className="footer">
          <span>
            <strong>WANG YU</strong> // PERSONAL PROFILE
          </span>
          <span>MOTUS AI · CHENGDU · {new Date().getFullYear()}</span>
        </footer>
      </main>
    </div>
  );
}

export default App;
