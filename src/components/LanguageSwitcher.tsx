import React from "react";

interface LanguageSwitcherProps {
  lang: "zh" | "en";
  setLang: (lang: "zh" | "en") => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ lang, setLang }) => {
  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2">
      <button
        onClick={() => setLang("zh")}
        className={`brutal-btn px-3 py-1 text-sm font-black transition-colors ${
          lang === "zh" ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        中
      </button>
      <button
        onClick={() => setLang("en")}
        className={`brutal-btn px-3 py-1 text-sm font-black transition-colors ${
          lang === "en" ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
