import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="hairline-border-t bg-[#02050e] py-16 px-6 md:px-16 text-slate-500 text-xs font-mono">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        
        {/* Brand */}
        <div className="md:col-span-2 space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-white flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-slate-950" />
            </div>
            <span className="font-semibold text-white tracking-tight text-sm font-sans">
              Boost Engine Studio
            </span>
          </div>
          <p className="max-w-sm text-slate-400 font-sans text-xs leading-relaxed">
            Product engineering studio building scalable digital systems, high-concurrency mobile suites, and autonomous workflows.
          </p>
          <div className="flex items-center gap-2 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>GLOBAL INFRASTRUCTURE ONLINE</span>
          </div>
        </div>

        {/* Index */}
        <div className="space-y-2">
          <div className="text-slate-400 uppercase tracking-widest text-[10px]">Architecture</div>
          <ul className="space-y-1.5 text-slate-400 font-sans text-xs">
            <li><a href="#how-it-works" className="hover:text-white transition-colors">Engineering Model</a></li>
            <li><a href="#engine-terminal" className="hover:text-white transition-colors">Diagnostic Solver</a></li>
            <li><a href="#solutions" className="hover:text-white transition-colors">Thaaro Hisab Suite</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Studio Intake</a></li>
          </ul>
        </div>

        {/* Ecosystem */}
        <div className="space-y-2">
          <div className="text-slate-400 uppercase tracking-widest text-[10px]">Ecosystem</div>
          <ul className="space-y-1.5 text-slate-400 font-sans text-xs">
            <li className="text-slate-200">Thaaro Hisab (Production)</li>
            <li>Autonomous Workers</li>
            <li>Real-time Telemetry</li>
            <li>Firebase & Cloud Architecture</li>
          </ul>
        </div>

      </div>

      <div className="max-w-6xl mx-auto pt-8 hairline-border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-600">
        <div>
          © {new Date().getFullYear()} Boost Engine Inc. Precision engineering.
        </div>
        <div>
          Problem koi bhi ho — Tech se hum solve karenge.
        </div>
      </div>
    </footer>
  );
};
