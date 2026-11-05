import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-3 transition-all duration-300">
      <div 
        className={`max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 ${
          scrolled 
            ? 'bg-[#030712]/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)]' 
            : 'bg-transparent border border-transparent'
        }`}
      >
        {/* Architectural Quiet Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-white to-slate-400 p-[1px] flex items-center justify-center">
            <div className="w-full h-full bg-[#030712] rounded-[7px] flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_8px_#00f0ff]" />
            </div>
          </div>
          <span className="font-semibold text-sm tracking-tight text-white flex items-center gap-1.5">
            Boost Engine <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">/ Studio</span>
          </span>
        </a>

        {/* Quiet Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-400">
          <a href="#how-it-works" className="hover:text-white transition-colors duration-200">Engineering Process</a>
          <a href="#engine-terminal" className="hover:text-white transition-colors duration-200">Problem Solver</a>
          <a href="#solutions" className="hover:text-white transition-colors duration-200">Flagship Products</a>
          <a href="#contact" className="hover:text-white transition-colors duration-200">Start Intake</a>
        </nav>

        {/* Linear-grade Quiet CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-400/30 transition-all duration-200 shadow-sm"
          >
            <span>Consult Studio</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-1.5 rounded-lg text-slate-400 hover:text-white bg-white/5 border border-white/10"
        >
          {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden mt-2 p-5 rounded-2xl bg-[#0B0F19]/95 backdrop-blur-2xl border border-white/10 flex flex-col gap-3 text-sm">
          <a href="#how-it-works" onClick={() => setMobileOpen(false)} className="text-slate-300 py-1.5">Engineering Process</a>
          <a href="#engine-terminal" onClick={() => setMobileOpen(false)} className="text-slate-300 py-1.5">Problem Solver</a>
          <a href="#solutions" onClick={() => setMobileOpen(false)} className="text-slate-300 py-1.5">Flagship Products</a>
          <a 
            href="#contact" 
            onClick={() => setMobileOpen(false)} 
            className="mt-2 w-full py-2.5 rounded-xl bg-white text-slate-950 font-semibold text-center text-xs"
          >
            Consult Studio
          </a>
        </div>
      )}
    </header>
  );
};
