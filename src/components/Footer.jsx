import React from 'react';
import { Cpu, MessageCircle, Heart, Globe, Mail, Sparkles } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-[#02050e] py-16 px-6 md:px-16 relative z-10 text-slate-400">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        
        {/* Brand Column */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
              <Cpu className="w-4 h-4 text-black stroke-[2.5]" />
            </div>
            <span className="font-extrabold text-lg text-white tracking-wider">
              BOOST<span className="text-cyan-400">ENGINE</span>
            </span>
          </div>
          <p className="text-sm max-w-sm leading-relaxed text-slate-400">
            Boost Engine is a universal technology solution provider. We diagnose complex business and operational hurdles and engineer high-performance mobile, web, and automated solutions.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>ALL SYSTEMS OPERATIONAL</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-xs font-mono uppercase tracking-widest mb-4">Navigation</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Home Engine</a></li>
            <li><a href="#how-it-works" className="hover:text-cyan-400 transition-colors">Scrollytelling Pipeline</a></li>
            <li><a href="#engine-terminal" className="hover:text-cyan-400 transition-colors">Problem Simulator</a></li>
            <li><a href="#solutions" className="hover:text-cyan-400 transition-colors">Thaaro Hisab & Apps</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Post Inquiries</a></li>
          </ul>
        </div>

        {/* Products & Flags */}
        <div>
          <h4 className="text-white text-xs font-mono uppercase tracking-widest mb-4">Ecosystem</h4>
          <ul className="space-y-2.5 text-sm">
            <li className="text-slate-200 font-semibold">Thaaro Hisab (App)</li>
            <li>Cloud Automation Bots</li>
            <li>Firebase & Cloud Architecture</li>
            <li>Custom Mobile Engines</li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <div>
          © {new Date().getFullYear()} Boost Engine Inc. Built with Passion & Ultimate Tech.
        </div>
        <div className="flex items-center gap-2">
          <span>Problem koi bhi ho — Tech se hum solve karenge.</span>
        </div>
      </div>
    </footer>
  );
};

