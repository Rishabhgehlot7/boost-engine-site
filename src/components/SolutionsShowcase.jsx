import React from 'react';
import { Smartphone, Cloud, Bot, Gauge, ArrowUpRight, CheckCircle, ShieldCheck } from 'lucide-react';

const SOLUTIONS = [
  {
    badge: 'FLAGSHIP MOBILE APP',
    title: 'Thaaro Hisab — Smart Digital Bahi-Khata',
    category: 'Mobile & Cloud Ledger',
    desc: 'High-performance mobile application designed for shopkeepers and businesses to record daily transactions, credit tracking, automated reminders, and multi-ledger balances with offline support.',
    icon: Smartphone,
    color: 'from-blue-500 to-cyan-400',
    tags: ['Flutter', 'Firebase Realtime', 'Offline SQLite', 'Multi-Language'],
    metrics: 'Active Production App'
  },
  {
    badge: 'INTELLIGENT SYSTEMS',
    title: 'Custom AI & Workflow Automation',
    category: 'Process Engineering',
    desc: 'Automating repetitive data entry, customer communication, multi-platform inventory syncing, and automated alert engines that run 24/7 without manual supervision.',
    icon: Bot,
    color: 'from-purple-500 to-indigo-500',
    tags: ['Autonomous Bots', 'Webhooks', 'LLM Agents', 'CRMs'],
    metrics: '90% Hours Saved'
  },
  {
    badge: 'ENTERPRISE ARCHITECTURE',
    title: 'Scalable Cloud Platforms & APIs',
    category: 'Backend & Infrastructure',
    desc: 'High-availability microservices, military-grade Firestore/Postgres data pipelines, and lightning-fast REST/GraphQL backends engineered to handle millions of requests without hiccups.',
    icon: Cloud,
    color: 'from-cyan-400 to-emerald-400',
    tags: ['Firebase', 'Docker', 'Serverless', 'PostgreSQL'],
    metrics: '99.99% Uptime'
  },
  {
    badge: 'VELOCITY OPTIMIZATION',
    title: 'Modern Web Frontends & Dashboards',
    category: 'UI/UX & Analytics',
    desc: 'Pixel-perfect, responsive web portals with sub-second page loads, real-time analytics graphs, and intuitive design that converts curious visitors into long-term clients.',
    icon: Gauge,
    color: 'from-amber-400 to-rose-400',
    tags: ['React 19', 'Tailwind', 'Realtime Charts', 'SEO Turbo'],
    metrics: '<0.8s First Load'
  }
];

export const SolutionsShowcase = () => {
  return (
    <section id="solutions" className="py-14 px-6 md:px-16 max-w-7xl mx-auto relative z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>SOLUTIONS SPECTRUM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Engineered For Impact. <br />
            <span className="text-gradient-purple">Ready To Deploy.</span>
          </h2>
        </div>
        <p className="text-slate-400 max-w-md text-sm sm:text-base">
          From consumer mobile apps like <strong className="text-white">Thaaro Hisab</strong> to heavy-duty custom industrial software, we build end-to-end solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SOLUTIONS.map((sol, idx) => {
          const Icon = sol.icon;
          return (
            <div
              key={idx}
              className="p-8 rounded-3xl glass-card flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top ambient glow */}
              <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${sol.color} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`} />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3.5 rounded-2xl bg-white/5 border border-white/10 text-cyan-400 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono tracking-wider px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                    {sol.badge}
                  </span>
                </div>

                <div className="text-xs font-mono text-cyan-400 mb-1">{sol.category}</div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {sol.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {sol.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-white/5">
                <div className="flex flex-wrap gap-2 mb-4">
                  {sol.tags.map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-black/40 text-slate-300 font-mono text-xs border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    {sol.metrics}
                  </span>
                  <a href="#contact" className="text-cyan-400 hover:text-white flex items-center gap-1 transition-colors font-sans font-semibold">
                    Request Build <ArrowUpRight className="w-4 h-4" />
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

