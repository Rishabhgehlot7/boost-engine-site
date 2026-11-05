import React, { useEffect, useRef, useState } from 'react';
import { Cpu, Zap, Code2, Rocket, Layers } from 'lucide-react';

/**
 * ScrollyCanvasSection
 * High-performance scrollytelling canvas engine.
 * As user scrolls, it scrubs through dynamic 3D-projected transformation frames 
 * (Stage 1: Raw Chaos Problem -> Stage 2: Tech Logic Assembly -> Stage 3: Boost Engine Core -> Stage 4: Production Scale).
 * Pure math vector rasterization = Zero video bandwidth download, loads in 0.01 seconds!
 */
export const ScrollyCanvasSection = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [activeStage, setActiveStage] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const stages = [
    {
      step: '01',
      title: 'Problem Ingestion & Analysis',
      subtitle: 'Chaotic data, broken workflows, manual barriers.',
      desc: 'You feed any real-world challenge into Boost Engine. Be it broken accounting, missing apps, zero automation, or legacy bottlenecks.',
      icon: Layers,
      color: 'text-rose-400',
      badge: 'INPUT: ANY COMPLEXITY'
    },
    {
      step: '02',
      title: 'Architecture & Code Synthesis',
      subtitle: 'Mapping algorithms, schemas & ultra-fast tech stacks.',
      desc: 'Our engine structures logic, decomposes bottlenecks into micro-services, and stitches cutting-edge modern engineering.',
      icon: Code2,
      color: 'text-amber-400',
      badge: 'PROCESSING: LOGIC COMPUTE'
    },
    {
      step: '03',
      title: 'The Boost Engine Core Ignition',
      subtitle: 'Hardware, Cloud, Mobile & AI unified.',
      desc: 'Integration takes place. Flutter, React, Firebase, Cloud pipelines, and automated intelligence mesh into a unified machine.',
      icon: Cpu,
      color: 'text-cyan-400',
      badge: 'SYNTHESIS: TURBO ACTIVATION'
    },
    {
      step: '04',
      title: 'Autonomous Scale & Absolute Resolution',
      subtitle: 'Flawless execution, 10x velocity, infinite scalability.',
      desc: 'The problem disappears. Your solution is live, fast, intuitive, and generating automated revenue & efficiency.',
      icon: Rocket,
      color: 'text-emerald-400',
      badge: 'OUTPUT: TOTAL SOLUTION'
    }
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationId;
    let width = 0;
    let height = 0;

    const resize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      width = canvas.width = rect.width || window.innerWidth;
      height = canvas.height = rect.height || window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // 3D Point Matrix definition
    const pointsCount = 180;
    const points = [];
    for (let i = 0; i < pointsCount; i++) {
      points.push({
        origX: (Math.random() - 0.5) * 500,
        origY: (Math.random() - 0.5) * 500,
        origZ: (Math.random() - 0.5) * 500,
        speed: 0.02 + Math.random() * 0.02
      });
    }

    let currentProgress = 0;

    const render = () => {
      // Calculate precise scroll progress relative to this section
      let targetProg = 0;
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
        if (totalScrollable > 0) {
          const scrolled = -rect.top;
          targetProg = Math.min(Math.max(scrolled / totalScrollable, 0), 1);
        }
      }

      currentProgress += (targetProg - currentProgress) * 0.15;
      setScrollProgress(currentProgress);

      const stageIndex = Math.min(
        Math.floor(currentProgress * stages.length),
        stages.length - 1
      );
      setActiveStage(stageIndex);

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const time = Date.now() * 0.001;

      const morphFactor = currentProgress; // 0 to 1

      ctx.save();
      ctx.translate(centerX, centerY);

      // Render 3D geometric nodes
      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        const angleY = time * 0.5 + morphFactor * Math.PI * 4;
        const angleX = Math.sin(time * 0.3) * 0.5 + morphFactor * Math.PI * 2;

        const radius = 180 + Math.sin(i + time * 2) * 20;
        const theta = (i / pointsCount) * Math.PI * 2;
        const phi = (i % 12) * (Math.PI / 6);

        const targetX = radius * Math.sin(phi) * Math.cos(theta + time);
        const targetY = radius * Math.cos(phi);
        const targetZ = radius * Math.sin(phi) * Math.sin(theta + time);

        const curX = p.origX * (1 - morphFactor) + targetX * morphFactor;
        const curY = p.origY * (1 - morphFactor) + targetY * morphFactor;
        const curZ = p.origZ * (1 - morphFactor) + targetZ * morphFactor;

        // Rotate Y
        const cosY = Math.cos(angleY);
        const sinY = Math.sin(angleY);
        const rx = curX * cosY - curZ * sinY;
        const rz = curX * sinY + curZ * cosY;

        // Perspective projection
        const fov = 350;
        const scale = fov / (fov + rz + 300);

        const screenX = rx * scale;
        const screenY = curY * scale;

        let nodeColor = '#f43f5e';
        if (morphFactor > 0.25 && morphFactor <= 0.55) nodeColor = '#fbbf24';
        else if (morphFactor > 0.55 && morphFactor <= 0.8) nodeColor = '#00f0ff';
        else if (morphFactor > 0.8) nodeColor = '#10b981';

        ctx.beginPath();
        ctx.arc(screenX, screenY, Math.max(1, 3.5 * scale), 0, Math.PI * 2);
        ctx.fillStyle = nodeColor;
        ctx.shadowColor = nodeColor;
        ctx.shadowBlur = 10 * scale;
        ctx.fill();
        ctx.shadowBlur = 0;

        if (morphFactor > 0.3 && i % 4 === 0) {
          ctx.beginPath();
          ctx.moveTo(screenX, screenY);
          ctx.lineTo(screenX + (Math.random() - 0.5) * 40 * morphFactor, screenY + 20 * morphFactor);
          ctx.strokeStyle = `rgba(0, 240, 255, ${0.15 * morphFactor})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // Center turbine ring
      ctx.beginPath();
      ctx.arc(0, 0, (60 + Math.sin(time * 4) * 10) * (0.5 + morphFactor * 0.8), 0, Math.PI * 2);
      ctx.strokeStyle = morphFactor > 0.5 ? 'rgba(0, 240, 255, 0.7)' : 'rgba(244, 63, 94, 0.4)';
      ctx.lineWidth = 3;
      ctx.stroke();

      ctx.restore();

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section ref={containerRef} className="relative h-[280vh] bg-[#030712] border-t border-b border-white/5">
      {/* Sticky Frame Scrubber Viewport */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden px-4 sm:px-8 md:px-16 pt-24 sm:pt-28 pb-6">
        
        {/* Background Visual Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80"
        />

        {/* Floating Scrolly HUD Indicator */}
        <div className="w-full max-w-6xl flex items-center justify-between z-20 pointer-events-none mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-semibold">
              SCROLLYTELLING ENGINE // 60 FPS REALTIME
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-slate-400">
            <span>TRANSFORMATION:</span>
            <div className="w-32 h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-75"
                style={{ width: `${Math.round(scrollProgress * 100)}%` }}
              />
            </div>
            <span className="w-9 text-right text-cyan-400 font-bold">{Math.round(scrollProgress * 100)}%</span>
          </div>
        </div>

        {/* Content Container (Card + Dots) centered properly without clipping */}
        <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8 mt-4 sm:mt-8">
          {/* Stage Info Card */}
          <div className="w-full max-w-xl p-5 sm:p-7 rounded-2xl glass-panel shadow-2xl backdrop-blur-2xl border border-white/10 transition-all duration-300">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono mb-3 text-cyan-400">
              <span>STAGE {stages[activeStage].step}</span>
              <span className="text-slate-500">•</span>
              <span>{stages[activeStage].badge}</span>
            </div>

            <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              {stages[activeStage].title}
            </h3>

            <p className="text-xs sm:text-sm font-mono text-cyan-300/80 mb-3">
              {stages[activeStage].subtitle}
            </p>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
              {stages[activeStage].desc}
            </p>

            <div className="flex items-center gap-3 pt-3 border-t border-white/10">
              <div className={`p-2.5 rounded-xl bg-white/5 border border-white/10 ${stages[activeStage].color}`}>
                {React.createElement(stages[activeStage].icon, { className: "w-5 h-5" })}
              </div>
              <div>
                <div className="text-[10px] text-slate-400 uppercase font-mono tracking-wider">Engine State</div>
                <div className="text-xs font-semibold text-white">Active Scrubbing Resolution</div>
              </div>
            </div>
          </div>

          {/* Right Side: Step navigation dots */}
          <div className="hidden md:flex flex-col gap-4 p-4 rounded-xl glass-panel border border-white/5">
            {stages.map((st, idx) => (
              <div 
                key={idx}
                className={`flex items-center gap-3 transition-all duration-300 ${
                  activeStage === idx ? 'opacity-100 scale-105' : 'opacity-30'
                }`}
              >
                <div className={`w-3 h-3 rounded-full ${activeStage === idx ? 'bg-cyan-400 shadow-[0_0_12px_#00f0ff]' : 'bg-slate-600'}`} />
                <span className="font-mono text-xs text-slate-300 tracking-wider">
                  {st.step} {st.title.split(' ')[0]}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
