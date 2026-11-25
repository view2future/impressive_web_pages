import React from "react";

interface LanguageSwitcherProps {
  lang: "zh" | "en";
  setLang: (lang: "zh" | "en") => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  lang,
  setLang,
}) => {
  return (
    <div className="lang-switch" role="group" aria-label="Language">
      <button
        type="button"
        className={lang === "zh" ? "is-active" : ""}
        aria-pressed={lang === "zh"}
        onClick={() => setLang("zh")}
      >
        ZH
      </button>
      <button
        type="button"
        className={lang === "en" ? "is-active" : ""}
        aria-pressed={lang === "en"}
        onClick={() => setLang("en")}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
