import React, { useState } from 'react';
import { Terminal, Search, ArrowRight, CheckCircle2, Sparkles, Cpu, Layers, ShieldCheck } from 'lucide-react';

const PRESET_PROBLEMS = [
  {
    tag: 'Finances & Accounting',
    query: 'Bahi-Khata aur udhaar manage karna manually mushkil hai aur hisab bhool jaate hain.',
    solution: 'Thaaro Hisab — Custom Cloud Bookkeeping App with Offline Sync, Auto Reminders & Multi-User Ledgers.',
    time: 'Delivered in 2 Weeks',
    stack: ['Flutter', 'Firebase', 'Automated SMS/WhatsApp']
  },
  {
    tag: 'Slow Business Sales',
    query: 'Local customers aate hain par online koi digital reach aur automated orders nahi hain.',
    solution: 'High-Converting Digital Storefront with Instant Checkout & WhatsApp Direct Order Routing.',
    time: 'Delivered in 5 Days',
    stack: ['React', 'Tailwind', 'Payment Gateway', 'Cloudflare']
  },
  {
    tag: 'Manual Repetitive Work',
    query: 'Daily excel sheets, customer calls aur lead tracking me 4-5 ghante waste hote hain.',
    solution: 'Autonomous AI & Workflow Bot that captures leads, syncs sheets, and notifies your team in seconds.',
    time: 'Delivered in 7 Days',
    stack: ['Node.js', 'Google Sheets API', 'Telegram/Slack Webhooks']
  },
  {
    tag: 'Complex Hardware / IoT',
    query: 'Factory machines ya sensors ka live status mobile par realtime dekhna hai.',
    solution: 'Low-latency Realtime Telemetry Dashboard with Instant WhatsApp Alert triggers.',
    time: 'Delivered in 3 Weeks',
    stack: ['MQTT', 'WebSockets', 'React', 'TimescaleDB']
  }
];

export const ProblemSolverTerminal = () => {
  const [selectedPreset, setSelectedPreset] = useState(0);
  const [customInput, setCustomInput] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [customResult, setCustomResult] = useState(null);

  const handleCustomAnalyze = (e) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    setAnalyzing(true);
    setCustomResult(null);

    // Simulate instant AI engine diagnostic
    setTimeout(() => {
      setAnalyzing(false);
      setCustomResult({
        query: customInput,
        solution: `Boost Engine Custom Blueprint: Tailored cloud architecture with scalable microservices, mobile interface, and automated pipelines designed specifically for "${customInput.slice(0, 40)}...".`,
        time: 'Fast-Track Execution: 7-14 Days',
        stack: ['Modern Fullstack', 'Cloud Database', 'Automated Logic Engine']
      });
    }, 900);
  };

  const activeData = customResult || PRESET_PROBLEMS[selectedPreset];

  return (
    <section id="engine-terminal" className="py-14 px-6 md:px-16 max-w-7xl mx-auto relative z-10">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
          <Terminal className="w-4 h-4" />
          <span>INTERACTIVE SOLVER ENGINE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
          Problem Koi Bhi Ho. <span className="text-gradient-cyan">Solvers Hum Hain.</span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg">
          Click any common bottleneck below or type your exact business hurdle to see how Boost Engine deconstructs and resolves it with tech.
        </p>
      </div>

      {/* Preset Problem Tags */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
        {PRESET_PROBLEMS.map((item, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCustomResult(null);
              setSelectedPreset(idx);
            }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              !customResult && selectedPreset === idx
                ? 'bg-cyan-500 text-black font-semibold shadow-[0_0_20px_rgba(0,240,255,0.4)]'
                : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
            }`}
          >
            {item.tag}
          </button>
        ))}
      </div>

      {/* Custom Problem Input Box */}
      <form onSubmit={handleCustomAnalyze} className="max-w-3xl mx-auto mb-12">
        <div className="relative flex items-center">
          <Search className="absolute left-4 w-5 h-5 text-slate-400 pointer-events-none" />
          <input
            type="text"
            value={customInput}
            onChange={(e) => setCustomInput(e.target.value)}
            placeholder="Apni specific problem yahan type karein (e.g. Mere factory ka inventory track nahi hota)..."
            className="w-full pl-12 pr-32 py-4 rounded-2xl bg-slate-900/80 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 text-white placeholder-slate-500 text-sm sm:text-base shadow-xl backdrop-blur-md"
          />
          <button
            type="submit"
            disabled={analyzing}
            className="absolute right-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold text-xs sm:text-sm transition-all flex items-center gap-1.5 shadow-lg disabled:opacity-50"
          >
            {analyzing ? (
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 border-2 border-black border-t-transparent rounded-full animate-spin" />
                Analyzing
              </span>
            ) : (
              <>
                <span>Solve</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>

      {/* Interactive Terminal Output Card */}
      <div className="max-w-4xl mx-auto rounded-2xl glass-panel border border-white/10 overflow-hidden shadow-2xl relative">
        {/* Terminal Title Bar */}
        <div className="px-6 py-3.5 bg-black/40 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-xs text-slate-400">boost-engine-resolver://v2.4.core</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI ARCHITECT ONLINE</span>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 sm:p-10 space-y-8 font-mono">
          {/* Problem Block */}
          <div>
            <div className="text-xs uppercase tracking-wider text-rose-400 font-bold mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              [DETECTED BOTTLENECK]
            </div>
            <p className="text-base sm:text-lg text-slate-200 font-sans italic bg-rose-500/5 p-4 rounded-xl border border-rose-500/20">
              "{activeData.query}"
            </p>
          </div>

          {/* Solution Synthesis */}
          <div>
            <div className="text-xs uppercase tracking-wider text-cyan-400 font-bold mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              [SYNTHESIZED TECH RESOLUTION]
            </div>
            <p className="text-base sm:text-xl text-white font-sans font-medium bg-cyan-500/5 p-5 rounded-xl border border-cyan-500/30 shadow-[0_0_30px_rgba(0,240,255,0.05)]">
              {activeData.solution}
            </p>
          </div>

          {/* Metadata Footer */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs">
            <div>
              <span className="text-slate-400 block mb-1">EXECUTION TIME:</span>
              <span className="text-emerald-400 font-bold text-sm flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                {activeData.time}
              </span>
            </div>
            <div>
              <span className="text-slate-400 block mb-1">PROPOSED TECH MATRIX:</span>
              <div className="flex flex-wrap gap-1.5">
                {activeData.stack.map((st, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-white/10 text-cyan-300 font-mono text-[11px]">
                    {st}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

