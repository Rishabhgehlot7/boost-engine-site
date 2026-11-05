import React, { useEffect, useRef, useState } from 'react';
import { BrainCircuit, Code2, Rocket, Search } from 'lucide-react';
import { Scrolly3DCanvas } from './Scrolly3DCanvas';

const STAGES = [
  {
    icon: Search,
    n: '01',
    title: 'Diagnose the real problem',
    desc: 'We map the workflow, constraints, users and business outcome before choosing technology.'
  },
  {
    icon: Code2,
    n: '02',
    title: 'Design the smallest right system',
    desc: 'Architecture, data boundaries, integrations and delivery milestones are defined before the build gets expensive.'
  },
  {
    icon: BrainCircuit,
    n: '03',
    title: 'Build with automation in mind',
    desc: 'Product engineering, AI, cloud and integrations come together as one maintainable system.'
  },
  {
    icon: Rocket,
    n: '04',
    title: 'Release, measure, improve',
    desc: 'Production is the beginning: observability, performance and iterative improvements keep the system healthy.'
  }
];

export const ScrollyCanvasSection = () => {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const travel = Math.max(el.offsetHeight - window.innerHeight, 1);
      setProgress(Math.min(1, Math.max(0, -rect.top / travel)));
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, []);

  const index = Math.min(STAGES.length - 1, Math.floor(progress * STAGES.length));
  const stage = STAGES[index];
  const Icon = stage.icon;

  return (
    <section id="how-it-works" ref={ref} className="relative h-[260vh] bg-[#030712] border-t border-b border-white/5">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_65%_50%,rgba(34,211,238,.08),transparent_35%)]" />

        <div className="max-w-7xl mx-auto px-6 md:px-16 w-full relative grid gap-10 lg:grid-cols-2 lg:items-center">
          
          {/* Left Column: Stage Details */}
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
              INTERACTIVE 3D SCROLLYTELLING
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.08]">
              A clear path from <br />
              <span className="text-gradient-cyan">problem to production.</span>
            </h2>
            <p className="mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-slate-400">
              Scroll down to watch the 3D Boost Engine transform in realtime from chaotic logic to fully assembled production apps.
            </p>

            {/* Scroll Progress Bar */}
            <div className="mt-8 h-2 max-w-md overflow-hidden rounded-full bg-white/10 p-0.5 border border-white/5">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-[width] duration-75"
                style={{ width: `${Math.round(progress * 100)}%` }}
              />
            </div>
            <p className="mt-2 text-xs font-mono font-bold tracking-widest text-cyan-400">
              {Math.round(progress * 100)}% TRANSFORMATION COMPLETE
            </p>

            {/* Active Stage Details Card */}
            <div className="mt-8 glass-panel p-6 rounded-2xl border border-white/10">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <span className="text-xs font-mono font-bold tracking-widest text-cyan-400">
                  STAGE {stage.n} OF 04
                </span>
                <span className="text-xs font-mono text-slate-500">BOOST / DELIVERY</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {stage.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {stage.desc}
              </p>
            </div>
          </div>

          {/* Right Column: 3D Morphing Model (Reactor -> Thaaro Hisab 3D Phone) */}
          <div className="relative flex items-center justify-center">
            {/* Background Radial Glow */}
            <div className="absolute inset-4 rounded-full bg-cyan-400/15 blur-[100px] pointer-events-none" />

            {/* 3D Canvas Viewport */}
            <div className="relative w-full rounded-3xl glass-card border border-white/10 p-4 shadow-2xl backdrop-blur-xl overflow-hidden">
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span className="font-mono text-[10px] text-cyan-300 font-bold uppercase tracking-widest">
                  LIVE WEBGL 3D VIEWPORT // DRAG TO ROTATE
                </span>
              </div>

              {/* R3F 3D Canvas */}
              <Scrolly3DCanvas progress={progress} />

              {/* Stage Step Indicators */}
              <div className="mt-4 grid grid-cols-4 gap-2">
                {STAGES.map((s, i) => (
                  <div
                    key={s.n}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i <= index ? 'bg-cyan-400 shadow-[0_0_10px_#00f0ff]' : 'bg-white/10'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
