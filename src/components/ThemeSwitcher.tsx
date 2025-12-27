
import React from "react";

interface ThemeSwitcherProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ theme, setTheme }) => {
  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
      <button
        onClick={() => setTheme("newbrutalism")}
        className={`brutal-btn ${theme === "newbrutalism" ? "bg-[var(--brutal-yellow)] scale-110" : "bg-white"} hover:bg-[var(--brutal-yellow)]`}
      >
        BRUTALIST
      </button>
      <button
        onClick={() => setTheme("tech")}
        className={`brutal-btn ${theme === "tech" ? "bg-green-500 scale-110 text-black" : "bg-white"} hover:bg-green-400`}
      >
        CYBER TECH
      </button>
      <button
        onClick={() => setTheme("business")}
        className={`brutal-btn ${theme === "business" ? "bg-black text-white scale-110" : "bg-white"} hover:bg-gray-100`}
      >
        MINIMAL BIZ
      </button>
    </div>
  );
};

export default ThemeSwitcher;
