import React, { useState } from 'react';
import { Cpu, Zap, Menu, X, ArrowRight } from 'lucide-react';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-3 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-2.5 sm:p-3 rounded-2xl glass-panel border border-white/10 shadow-lg">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.4)] group-hover:scale-105 transition-transform">
            <Cpu className="w-5 h-5 text-black stroke-[2.5]" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-wider text-white flex items-center gap-1">
              BOOST<span className="text-cyan-400">ENGINE</span>
            </span>
            <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase">
              Tech Solutions Hub
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#how-it-works" className="hover:text-cyan-400 transition-colors">How It Works</a>
          <a href="#engine-terminal" className="hover:text-cyan-400 transition-colors">Solve Simulator</a>
          <a href="#solutions" className="hover:text-cyan-400 transition-colors">Thaaro Hisab & Apps</a>
          <a href="#metrics" className="hover:text-cyan-400 transition-colors">Impact</a>
        </div>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] flex items-center gap-1.5"
          >
            <span>Post Problem</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-white/5 text-slate-300"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-6 rounded-2xl glass-panel border border-white/10 flex flex-col gap-4 text-center">
          <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 py-2">How It Works</a>
          <a href="#engine-terminal" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 py-2">Solve Simulator</a>
          <a href="#solutions" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 py-2">Thaaro Hisab & Apps</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="w-full py-3 rounded-xl bg-cyan-400 text-black font-bold text-sm">
            Post Problem
          </a>
        </div>
      )}
    </nav>
  );
};

