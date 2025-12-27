import React, { useEffect, useRef } from "react";

const GeekBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    // 增加粒子密度
    const particleCount = 100;
    const connectionDistance = 180;
    const mouse = { x: -1000, y: -1000 };

    class Particle {
      x: number; y: number; vx: number; vy: number; size: number;
      pulse: number; pulseSpeed: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.size = Math.random() * 2.5;
        this.pulse = 0;
        this.pulseSpeed = 0.02 + Math.random() * 0.05;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulse += this.pulseSpeed;

        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;

        // 强力躲避效果
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const force = (150 - dist) / 150;
          this.x -= dx * force * 0.05;
          this.y -= dy * force * 0.05;
        }
      }

      draw() {
        const alpha = 0.3 + Math.abs(Math.sin(this.pulse)) * 0.5;
        ctx!.fillStyle = `rgba(0, 255, 65, ${alpha})`;
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fill();
        
        if (this.size > 2) {
          ctx!.shadowBlur = 10;
          ctx!.shadowColor = "#00ff41";
        } else {
          ctx!.shadowBlur = 0;
        }
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array.from({ length: particleCount }, () => new Particle());
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p, i) => {
        p.update();
        p.draw();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance) * 0.4;
            ctx.strokeStyle = `rgba(0, 255, 65, ${opacity})`;
            ctx.lineWidth = dist < 50 ? 1.5 : 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("resize", init);
    window.addEventListener("mousemove", handleMouseMove);
    init(); animate();

    return () => {
      window.removeEventListener("resize", init);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#050608]">
      {/* 强化背景网格 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff410a_1px,transparent_1px),linear-gradient(to_bottom,#00ff410a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff4115_2px,transparent_2px),linear-gradient(to_bottom,#00ff4115_2px,transparent_2px)] bg-[size:200px_200px]"></div>
      
      <canvas ref={canvasRef} className="absolute inset-0 opacity-60" />

      {/* 方案2: 强化版矩阵流 */}
      <MatrixRain side="left" />
      <MatrixRain side="right" />

      {/* 氛围暗角 */}
      <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]"></div>
    </div>
  );
};

const MatrixRain: React.FC<{ side: "left" | "right" }> = ({ side }) => {
  const chars = "01010101ABCDEFUXWANGYUERNIEPADDLE".split("");
  const columnCount = 3;
  
  return (
    <div className={`absolute ${side}-0 top-0 bottom-0 w-12 flex justify-around opacity-20 overflow-hidden`}>
      {Array.from({ length: columnCount }).map((_, i) => (
        <div 
          key={i} 
          className="flex flex-col font-mono text-[10px] text-[var(--geek-accent)] whitespace-nowrap"
          style={{ 
            animation: `code-fall ${10 + Math.random() * 15}s linear infinite`,
            animationDelay: `-${Math.random() * 20}s`
          }}
        >
          {Array.from({ length: 50 }).map((_, j) => (
            <span key={j} className={j % 7 === 0 ? "text-white font-black" : ""}>
              {chars[Math.floor(Math.random() * chars.length)]}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GeekBackground;
