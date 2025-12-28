import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

const CustomCursor: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 20, stiffness: 250 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  // 旋转动画
  const rotate = useTransform(springX, [0, 2000], [0, 360]);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* 外部旋转 HUD 刻度盘 */}
      <motion.div
        style={{ x: springX, y: springY, rotate }}
        className="absolute w-20 h-20 -ml-10 -mt-10 border border-dashed border-[var(--geek-accent)] rounded-full opacity-30 flex items-center justify-center"
      >
        <div className="absolute top-0 w-1 h-2 bg-[var(--geek-accent)]"></div>
        <div className="absolute bottom-0 w-1 h-2 bg-[var(--geek-accent)]"></div>
      </motion.div>

      {/* 核心十字准星 */}
      <motion.div
        style={{ x: cursorX, y: cursorY }}
        className="absolute w-8 h-8 -ml-4 -mt-4 flex items-center justify-center"
      >
        <div className="w-full h-[1.5px] bg-[var(--geek-accent)] absolute shadow-[0_0_10px_#00ff41]"></div>
        <div className="h-full w-[1.5px] bg-[var(--geek-accent)] absolute shadow-[0_0_10px_#00ff41]"></div>
        <div className="w-2 h-2 bg-white rounded-sm shadow-[0_0_15px_#fff]"></div>
      </motion.div>

      {/* 动态扫描线 */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute w-32 h-[1px] -ml-16 bg-gradient-to-r from-transparent via-[var(--geek-accent)] to-transparent opacity-20"
      />

      {/* 实时坐标与系统状态 - 增加细节 */}
      <motion.div
        style={{ x: cursorX, y: cursorY }}
        className="absolute ml-8 mt-8 font-mono text-[9px] text-[var(--geek-accent)] bg-black/90 p-2 border-l-2 border-[var(--geek-accent)] shadow-[5px_5px_15px_rgba(0,0,0,0.5)]"
      >
        <div className="flex justify-between gap-4 mb-1">
          <span className="opacity-50">COORD_X:</span>
          <span className="font-black">{mousePos.x.toString().padStart(4, '0')}</span>
        </div>
        <div className="flex justify-between gap-4 mb-1">
          <span className="opacity-50">COORD_Y:</span>
          <span className="font-black">{mousePos.y.toString().padStart(4, '0')}</span>
        </div>
        <div className="border-t border-gray-800 mt-1 pt-1 flex items-center gap-2">
          <div className="w-1 h-1 bg-[var(--geek-accent)] animate-ping"></div>
          <span>NEURAL_LINK_ESTABLISHED</span>
        </div>
      </motion.div>
    </div>
  );
};

export default CustomCursor;