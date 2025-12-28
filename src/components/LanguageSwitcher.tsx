import React from "react";

interface LanguageSwitcherProps {
  lang: "zh" | "en";
  setLang: (lang: "zh" | "en") => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ lang, setLang }) => {
  return (
    <div className="flex gap-2 font-mono">
      <button
        onClick={() => setLang("zh")}
        className={`px-3 py-1 text-[10px] border transition-all ${
          lang === "zh" 
            ? "bg-[var(--geek-accent)] text-black border-[var(--geek-accent)]" 
            : "bg-transparent text-gray-500 border-gray-800 hover:border-gray-600"
        }`}
      >
        [ZH]
      </button>
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1 text-[10px] border transition-all ${
          lang === "en" 
            ? "bg-[var(--geek-accent)] text-black border-[var(--geek-accent)]" 
            : "bg-transparent text-gray-500 border-gray-800 hover:border-gray-600"
        }`}
      >
        [EN]
      </button>
    </div>
  );
};

export default LanguageSwitcher;