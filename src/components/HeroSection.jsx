import React from 'react';
import { ArrowRight, CheckCircle2, Play, Sparkles } from 'lucide-react';
import { HeroParticleCanvas } from './HeroParticleCanvas';
import { Hero3DCanvas } from './Hero3DCanvas';

export const HeroSection = () => {
  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-36 pb-16">
      {/* 2D Ambient Particle System */}
      <HeroParticleCanvas />

      {/* Realtime 3D WebGL Reactor Engine (Three.js Canvas) */}
      <Hero3DCanvas />

      <div className="grid-bg pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute left-1/2 top-20 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-400/[0.07] blur-[130px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-7 backdrop-blur-md">
            <Sparkles size={13} className="text-cyan-400" />
            <span>Problem Koi Bhi Ho — Tech Se Hum Solve Karenge</span>
          </div>

          <h1 className="text-5xl font-black leading-[1.05] text-white sm:text-7xl lg:text-8xl tracking-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]">
            Turn hard problems into <br />
            <span className="text-gradient-cyan">working software.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Boost Engine builds cutting-edge digital products — from mobile apps like <strong className="text-white">Thaaro Hisab</strong> to automated business workflows, cloud architectures & AI solutions.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-4 text-sm font-bold text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:brightness-110"
            >
              <span>Tell us what’s broken</span>
              <ArrowRight size={17} />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-slate-200 transition hover:border-white/20 hover:bg-white/[0.07]"
            >
              <Play size={16} fill="currentColor" />
              <span>Explore 3D Pipeline</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
            {['Product Engineering', 'Mobile (Thaaro Hisab)', 'AI & Automation', 'Firebase & Cloud'].map((x) => (
              <span key={x} className="flex items-center gap-1.5 font-mono">
                <CheckCircle2 size={13} className="text-cyan-400" />
                {x}
              </span>
            ))}
          </div>
        </div>

        {/* Floating Delivery Metrics Grid */}
        <div className="mx-auto mt-16 max-w-5xl rounded-3xl border border-white/10 bg-[#0a0f1a]/80 p-2 shadow-2xl backdrop-blur-xl">
          <div className="rounded-[22px] border border-white/[0.07] bg-gradient-to-br from-white/[0.055] to-transparent p-5 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[.2em] text-cyan-300 font-mono">
                  Boost Engine // Universal Tech Core
                </p>
                <p className="mt-1 text-sm text-slate-400">From bottleneck definition to high-velocity live release.</p>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] px-3.5 py-1.5 text-[10px] font-semibold text-emerald-300 font-mono">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                ALL SYSTEMS OPERATIONAL
              </div>
            </div>

            <div className="grid gap-3 pt-5 sm:grid-cols-4">
              {[
                ['01', 'Diagnose', 'Understand the real bottleneck & workflow'],
                ['02', 'Architect', '3D design, DB schema & logic synthesis'],
                ['03', 'Build', 'Ship fast: Mobile, Web, Cloud & AI'],
                ['04', 'Scale', 'Automated revenue, speed & zero downtime']
              ].map(([n, t, d]) => (
                <div key={n} className="rounded-2xl border border-white/[0.07] bg-black/30 p-4">
                  <span className="text-[10px] font-bold text-cyan-400 font-mono">{n}</span>
                  <p className="mt-2 font-bold text-white">{t}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
