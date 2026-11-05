import React, { useEffect, useRef, useState } from 'react';
import { BrainCircuit, Code2, Rocket, Search } from 'lucide-react';

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
    <section id="how-it-works" ref={ref} className="relative h-[240vh] bg-[#030712] border-t border-b border-white/5">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_65%_50%,rgba(34,211,238,.08),transparent_30%)]" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-16 w-full relative grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
              HOW IT WORKS
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
              A clear path from <br />
              <span className="text-gradient-cyan">problem to production.</span>
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-6 text-slate-400">
              Scroll through the delivery model. Every stage exists to reduce risk, rework and time-to-value.
            </p>
            <div className="mt-8 h-1.5 max-w-sm overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-cyan-400 transition-[width] duration-100"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
            <p className="mt-2 text-[10px] font-bold tracking-[.2em] text-slate-500">
              {Math.round(progress * 100)}% DELIVERY JOURNEY
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-10 rounded-full bg-cyan-400/10 blur-[90px]" />
            <div className="glass-panel relative rounded-[32px] p-7 sm:p-10 border border-white/10 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <span className="text-[10px] font-bold tracking-[.2em] text-cyan-400 font-mono">
                  STAGE {stage.n}
                </span>
                <span className="text-[10px] text-slate-500 font-mono">BOOST / DELIVERY</span>
              </div>
              <div className="mt-8 grid h-32 w-32 place-items-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.04] shadow-[0_0_60px_rgba(34,211,238,.12)]">
                <Icon size={44} className="text-cyan-400" />
              </div>
              <h3 className="mt-6 text-2xl sm:text-3xl font-extrabold text-white">
                {stage.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {stage.desc}
              </p>
              <div className="mt-8 grid grid-cols-4 gap-2">
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
