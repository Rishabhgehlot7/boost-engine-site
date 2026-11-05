import React, { useState } from 'react';
import { Terminal, Search, ArrowRight, CheckCircle2, Cpu, ShieldCheck } from 'lucide-react';

const PRESET_PROBLEMS = [
  {
    tag: 'Bookkeeping Bottleneck',
    query: 'Bahi-Khata aur udhaar manage karna manually mushkil hai aur hisab bhool jaate hain.',
    solution: 'Thaaro Hisab — Custom Cloud Bookkeeping App with Offline Sync, Auto Reminders & Multi-User Ledgers.',
    time: '2 Weeks Sprint',
    stack: ['Flutter', 'Firebase Realtime', 'Offline SQLite']
  },
  {
    tag: 'Distribution & Digital Reach',
    query: 'Local customers aate hain par online koi digital reach aur automated orders nahi hain.',
    solution: 'High-Converting Digital Storefront with Instant Checkout & WhatsApp Direct Order Routing.',
    time: '5 Days Sprint',
    stack: ['React', 'Tailwind', 'Payment Gateway', 'Edge CDN']
  },
  {
    tag: 'Operational Repetition',
    query: 'Daily excel sheets, customer calls aur lead tracking me 4-5 ghante waste hote hain.',
    solution: 'Autonomous AI & Workflow Engine that captures leads, syncs sheets, and notifies your team in seconds.',
    time: '7 Days Sprint',
    stack: ['Node.js Worker', 'Google Sheets API', 'Webhooks']
  },
  {
    tag: 'Telemetry & IoT',
    query: 'Factory machines ya sensors ka live status mobile par realtime dekhna hai.',
    solution: 'Low-latency Realtime Telemetry Dashboard with Instant Alert triggers & Hardware bridging.',
    time: '3 Weeks Sprint',
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

    setTimeout(() => {
      setAnalyzing(false);
      setCustomResult({
        query: customInput,
        solution: `Bespoke Architecture Synthesis: Multi-tenant cloud engine with real-time sync, automated pipeline processing, and intuitive UI designed specifically for "${customInput.slice(0, 45)}...".`,
        time: '7-14 Days Turnaround',
        stack: ['Modern Fullstack', 'Realtime Firestore', 'Serverless Logic Engine']
      });
    }, 700);
  };

  const activeData = customResult || PRESET_PROBLEMS[selectedPreset];

  return (
    <section id="engine-terminal" className="py-20 px-6 md:px-16 max-w-6xl mx-auto relative z-10">
      
      {/* Section Header */}
      <div className="max-w-2xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-slate-400 text-xs font-mono mb-4">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span>DIAGNOSTIC ARCHITECT</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-3 text-linear-headline">
          Instant Solution Blueprint.
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Select any real-world operational bottleneck or feed your custom constraints. Watch our engineering matrix map the path forward.
        </p>
      </div>

      {/* Preset Problem Tags */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        {PRESET_PROBLEMS.map((item, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCustomResult(null);
              setSelectedPreset(idx);
            }}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
              !customResult && selectedPreset === idx
                ? 'bg-white text-slate-950 font-semibold shadow-sm'
                : 'bg-white/[0.03] hover:bg-white/[0.06] text-slate-400 border border-white/5'
            }`}
          >
            {item.tag}
          </button>
        ))}
      </div>

      {/* Input Box */}
      <form onSubmit={handleCustomAnalyze} className="mb-8">
        <div className="relative flex items-center">
          <Search className="absolute left-4 w-4 h-4 text-slate-500 pointer-events-none" />
          <input
            type="text"
            value={customInput}
            onChange={(e) => setCustomInput(e.target.value)}
            placeholder="Type your exact business constraint (e.g. Need offline synchronization for billing in remote areas)..."
            className="w-full pl-11 pr-32 py-3.5 rounded-xl bg-[#0B0F19]/80 border border-white/10 focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/20 text-white placeholder-slate-500 text-sm shadow-xl"
          />
          <button
            type="submit"
            disabled={analyzing}
            className="absolute right-2 px-4 py-2 rounded-lg bg-white hover:bg-slate-200 text-slate-950 font-semibold text-xs transition-all flex items-center gap-1.5 disabled:opacity-50"
          >
            {analyzing ? (
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                Synthesizing
              </span>
            ) : (
              <>
                <span>Diagnose</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </div>
      </form>

      {/* Terminal Precision Box */}
      <div className="rounded-2xl linear-surface border border-white/10 overflow-hidden shadow-2xl">
        <div className="px-5 py-3 bg-[#030712]/60 hairline-border-b flex items-center justify-between text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <span>architecture_intake.ts</span>
          </div>
          <span className="text-cyan-400">ENGINE / ONLINE</span>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-2">
              INPUT BOTTLENECK
            </div>
            <p className="text-sm sm:text-base text-slate-200 bg-white/[0.02] p-4 rounded-xl border border-white/5 font-mono">
              "{activeData.query}"
            </p>
          </div>

          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 mb-2">
              RECOMMENDED PRODUCTION RESOLUTION
            </div>
            <p className="text-sm sm:text-base text-white bg-cyan-500/[0.03] p-4 rounded-xl border border-cyan-400/20 font-sans font-medium">
              {activeData.solution}
            </p>
          </div>

          <div className="pt-4 hairline-border-t grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            <div>
              <span className="text-slate-500 block mb-1">EXECUTION VELOCITY:</span>
              <span className="text-slate-200 font-semibold">{activeData.time}</span>
            </div>
            <div>
              <span className="text-slate-500 block mb-1">SYSTEM ARCHITECTURE:</span>
              <div className="flex flex-wrap gap-1.5">
                {activeData.stack.map((st, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-white/5 text-slate-300 text-[11px] border border-white/5">
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
