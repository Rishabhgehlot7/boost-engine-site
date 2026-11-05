import React from 'react';
import { Smartphone, Cloud, Bot, Gauge, ArrowUpRight } from 'lucide-react';

const SOLUTIONS = [
  {
    badge: 'FLAGSHIP MOBILE SUITE',
    title: 'Thaaro Hisab — Intelligent Ledger & Credit OS',
    category: 'Mobile Systems',
    desc: 'High-performance mobile application engineered for commercial accounting, real-time multi-ledger synchronization, credit reminder automation, and offline-first database architectures.',
    icon: Smartphone,
    tags: ['Flutter Engine', 'Firebase Realtime', 'SQLite Offline', 'Low Latency'],
    status: 'In Production'
  },
  {
    badge: 'AUTONOMOUS WORKFLOWS',
    title: 'Bespoke Automation & Intelligence Engines',
    category: 'Process Automation',
    desc: 'Replacing tedious manual operations with fault-tolerant workers. Multi-channel CRM orchestration, intelligent webhook handlers, and background processing systems that operate 24/7.',
    icon: Bot,
    tags: ['Autonomous Workers', 'Custom Webhooks', 'LLM Agent APIs', 'High Concurrency'],
    status: 'Enterprise Ready'
  },
  {
    badge: 'INFRASTRUCTURE & SCALING',
    title: 'High-Availability Cloud & Data Pipelines',
    category: 'Backend Architecture',
    desc: 'Architected for zero downtime and instant read/write operations. Firestore, PostgreSQL, and serverless compute pipelines designed to withstand millions of monthly events.',
    icon: Cloud,
    tags: ['Firebase', 'Dockerized Microservices', 'Serverless Compute', 'PostgreSQL'],
    status: '99.99% Reliability'
  },
  {
    badge: 'DIGITAL SURFACES',
    title: 'Precision Web Apps & Operational Portals',
    category: 'Fullstack Web',
    desc: 'Ultra-fast interfaces with sub-second initial loads, sub-millisecond interaction feedback, and real-time monitoring charts designed for rapid user adoption and conversion.',
    icon: Gauge,
    tags: ['React 19', 'Tailwind', 'Realtime Telemetry', 'Precision UX'],
    status: '<0.8s First Load'
  }
];

export const SolutionsShowcase = () => {
  return (
    <section id="solutions" className="py-20 px-6 md:px-16 max-w-6xl mx-auto relative z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-slate-400 text-xs font-mono mb-4">
            <span>ENGINEERING SPECTRUM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white text-linear-headline">
            Engineered For Scale. <br />
            Built To Outlast.
          </h2>
        </div>
        <p className="text-slate-400 max-w-sm text-sm leading-relaxed">
          From commercial mobile solutions like <strong className="text-slate-200">Thaaro Hisab</strong> to bespoke enterprise backends, our work is defined by precision and speed.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SOLUTIONS.map((sol, idx) => {
          const Icon = sol.icon;
          return (
            <div
              key={idx}
              className="p-8 rounded-2xl linear-card flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-cyan-400 group-hover:border-cyan-400/30 transition-all duration-200">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest px-2.5 py-1 rounded-full bg-white/[0.03] text-slate-400 border border-white/5">
                    {sol.badge}
                  </span>
                </div>

                <div className="text-xs font-mono text-cyan-400 mb-1.5">{sol.category}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-200">
                  {sol.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-normal">
                  {sol.desc}
                </p>
              </div>

              <div className="pt-6 hairline-border-t">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {sol.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-white/[0.03] text-slate-400 font-mono text-[11px] border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {sol.status}
                  </span>
                  <a href="#contact" className="text-slate-400 hover:text-white flex items-center gap-1 transition-colors duration-200 font-sans">
                    Request Architecture <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
