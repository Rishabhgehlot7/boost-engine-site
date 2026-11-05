import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { HeroParticleCanvas } from './HeroParticleCanvas';
import { Hero3DCanvas } from './Hero3DCanvas';

export const HeroSection = () => {
  return (
    <section className="relative min-h-[94vh] pt-36 pb-20 flex flex-col justify-center items-center text-center px-6 md:px-16 overflow-hidden linear-grid">
      
      {/* Restrained 2D Atmospheric Canvas */}
      <HeroParticleCanvas />

      {/* Elegant 3D Ambient Core */}
      <Hero3DCanvas />

      {/* Precision Radial Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#030712_85%)]" />

      {/* Studio Eyebrow Badge */}
      <div className="relative z-10 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-slate-300 mb-8 backdrop-blur-md">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
        <span className="text-slate-400">PRODUCT ENGINEERING STUDIO</span>
        <span className="text-slate-600">/</span>
        <span className="text-cyan-300">EST. 2026</span>
      </div>

      {/* Confident Headline */}
      <h1 className="relative z-10 max-w-4xl text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-tight text-white leading-[1.02] mb-7 text-linear-headline">
        Problem koi bhi ho. <br />
        <span className="text-linear-accent font-bold">Reliable software banta hai.</span>
      </h1>

      {/* Subheadline with Precise Information Hierarchy */}
      <p className="relative z-10 max-w-2xl text-slate-400 text-base sm:text-lg leading-relaxed mb-10 font-normal">
        Boost Engine engineers mission-critical software for ambitious companies. 
        From bespoke mobile engines like <span className="text-slate-200 font-medium">Thaaro Hisab</span> to automated workflows and high-concurrency cloud systems.
      </p>

      {/* Premium Linear-Grade Action Buttons */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
        <a
          href="#contact"
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-xl shadow-white/5 flex items-center justify-center gap-2"
        >
          <span>Submit Architecture Request</span>
          <ArrowRight className="w-4 h-4 text-slate-950" />
        </a>

        <a
          href="#engine-terminal"
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 border border-white/10 font-medium text-sm transition-all duration-200 backdrop-blur-sm flex items-center justify-center gap-2"
        >
          <span>Explore Diagnostic Simulator</span>
          <ChevronRight className="w-4 h-4 text-slate-500" />
        </a>
      </div>

      {/* Social Proof & System Capabilities Row */}
      <div className="relative z-10 mt-20 pt-8 hairline-border-t max-w-4xl w-full flex flex-wrap items-center justify-between gap-6 text-xs text-slate-500 font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-slate-300">CORE ARCHITECTURE OPERATIONAL</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-slate-400">FLUTTER & MOBILE</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-400">FIREBASE & CLOUD</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-400">AUTONOMOUS WORKFLOWS</span>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
