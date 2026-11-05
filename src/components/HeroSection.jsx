import React from 'react';
import { ArrowRight, Terminal, Zap, Shield, Sparkles } from 'lucide-react';
import { HeroParticleCanvas } from './HeroParticleCanvas';

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] pt-28 pb-12 flex flex-col justify-center items-center text-center px-6 md:px-16 overflow-hidden">
      
      {/* 60 FPS Particle Canvas Background */}
      <HeroParticleCanvas />

      {/* Hero Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-cyan-500/15 to-purple-600/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Pill Badge */}
      <div className="relative z-10 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(0,240,255,0.15)] animate-float">
        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
        <span>UNIVERSAL TECH PROBLEM SOLVERS</span>
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
      </div>

      {/* Main Headline */}
      <h1 className="relative z-10 max-w-5xl text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.08] mb-8">
        Problem Koi Bhi Ho. <br />
        <span className="text-gradient-cyan">Tech Se Hum Solve Karenge.</span>
      </h1>

      {/* Subheadline */}
      <p className="relative z-10 max-w-2xl text-slate-400 text-base sm:text-xl leading-relaxed mb-10 font-normal">
        From custom mobile apps like <strong className="text-white">Thaaro Hisab</strong> to automated business bots, cloud microservices, and AI workflows — Boost Engine turns impossible hurdles into high-speed digital reality.
      </p>

      {/* Action Buttons */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
        <a
          href="#contact"
          className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-black font-extrabold text-base tracking-wide transition-all shadow-[0_0_35px_rgba(0,240,255,0.4)] flex items-center justify-center gap-2"
        >
          <span>Get Your Solution Built</span>
          <ArrowRight className="w-5 h-5" />
        </a>

        <a
          href="#engine-terminal"
          className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 font-semibold text-base transition-all backdrop-blur-sm flex items-center justify-center gap-2"
        >
          <Terminal className="w-5 h-5 text-cyan-400" />
          <span>Try Problem Simulator</span>
        </a>
      </div>

      {/* Live Metric Pills */}
      <div className="relative z-10 mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl w-full">
        {[
          { label: 'Problem Resolution Rate', value: '100%' },
          { label: 'Fastest MVP Turnaround', value: '72 Hours' },
          { label: 'Active Flagship Apps', value: 'Thaaro Hisab' },
          { label: 'Cloud Architecture', value: 'Serverless / Firebase' }
        ].map((m, idx) => (
          <div key={idx} className="p-4 rounded-2xl glass-card text-center">
            <div className="text-xl sm:text-2xl font-black text-cyan-400 font-mono mb-1">{m.value}</div>
            <div className="text-xs text-slate-400">{m.label}</div>
          </div>
        ))}
      </div>

    </section>
  );
};

