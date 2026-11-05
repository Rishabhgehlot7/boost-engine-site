import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Check, Sparkles, Send } from 'lucide-react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import confetti from 'canvas-confetti';

export const ProblemSubmissionPortal = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    company: '',
    domain: 'Mobile Application (Flutter/Native)',
    problem: '',
    budget: '$1k - $5k / Fast-track sprint'
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleNext = (e) => {
    e.preventDefault();
    if (step === 1 && (!formData.name || !formData.contact)) return;
    if (step === 2 && !formData.problem) return;
    setStep((prev) => prev + 1);
  };

  const handleBack = () => setStep((prev) => prev - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, 'inquiries'), {
        ...formData,
        createdAt: serverTimestamp(),
        source: 'BoostEngine Studio Portal v2',
        status: 'STUDIO_INTAKE'
      });

      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });

      setSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-16 max-w-4xl mx-auto relative z-10">
      <div className="rounded-2xl linear-surface p-8 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
        
        {/* Step Progress Tracker */}
        {!submitted && (
          <div className="flex items-center justify-between mb-8 pb-6 hairline-border-b">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-cyan-400 block mb-1">
                STEP {step} OF 3
              </span>
              <h3 className="text-xl font-bold text-white">
                {step === 1 && 'Initiator Information'}
                {step === 2 && 'Problem & Constraint Scope'}
                {step === 3 && 'Execution & Review'}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`w-7 h-1.5 rounded-full transition-all duration-300 ${
                    s <= step ? 'bg-cyan-400' : 'bg-white/10'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {submitted ? (
          <div className="text-center py-12 space-y-4">
            <div className="w-12 h-12 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Intake Received.</h3>
            <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
              Our lead systems architect will review your technical constraints and contact you directly within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setStep(1);
                setFormData({
                  name: '',
                  contact: '',
                  company: '',
                  domain: 'Mobile Application (Flutter/Native)',
                  problem: '',
                  budget: '$1k - $5k / Fast-track sprint'
                });
              }}
              className="mt-4 px-5 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-300 border border-white/10 transition-colors"
            >
              Submit Another Case
            </button>
          </div>
        ) : (
          <form onSubmit={step === 3 ? handleSubmit : handleNext} className="space-y-6">
            
            {/* STEP 1: Contacts */}
            {step === 1 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-[#030712] border border-white/10 focus:border-cyan-400/50 focus:outline-none text-white text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                      WhatsApp / Phone / Email *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      placeholder="+91 98765 43210 or email"
                      className="w-full px-4 py-3 rounded-xl bg-[#030712] border border-white/10 focus:border-cyan-400/50 focus:outline-none text-white text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Company / Organization (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Retail Distribution LLP"
                    className="w-full px-4 py-3 rounded-xl bg-[#030712] border border-white/10 focus:border-cyan-400/50 focus:outline-none text-white text-sm"
                  />
                </div>
              </div>
            )}

            {/* STEP 2: Problem Scope */}
            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Primary Domain
                  </label>
                  <select
                    value={formData.domain}
                    onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#030712] border border-white/10 focus:border-cyan-400/50 focus:outline-none text-white text-sm"
                  >
                    <option value="Mobile Application (Flutter/Native)">Mobile Application (Flutter/Native)</option>
                    <option value="Thaaro Hisab / Ledger Integration">Thaaro Hisab / Accounting Tech</option>
                    <option value="Autonomous Bot / Workflow Automation">Autonomous Bot / Workflow Automation</option>
                    <option value="Cloud Architecture / Web Platform">Cloud Architecture / Web Platform</option>
                    <option value="Hardware / Telemetry / IoT">Hardware / Telemetry / IoT</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Describe the Bottleneck *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.problem}
                    onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                    placeholder="What is failing, slow, or currently impossible? Give us the honest reality..."
                    className="w-full px-4 py-3 rounded-xl bg-[#030712] border border-white/10 focus:border-cyan-400/50 focus:outline-none text-white text-sm resize-none"
                  />
                </div>
              </div>
            )}

            {/* STEP 3: Timeline & Final Review */}
            {step === 3 && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2 text-xs font-mono text-slate-400">
                  <div><strong className="text-white">Initiator:</strong> {formData.name} ({formData.contact})</div>
                  <div><strong className="text-white">Domain:</strong> {formData.domain}</div>
                  <div><strong className="text-white">Problem:</strong> {formData.problem}</div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Sprint Expectation
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#030712] border border-white/10 focus:border-cyan-400/50 focus:outline-none text-white text-sm"
                  >
                    <option value="Rapid Prototype (< 2 Weeks)">Rapid Prototype (Fast-Track 7-14 Days)</option>
                    <option value="Production System (1 Month)">Production-Grade Scalable Build (3-4 Weeks)</option>
                    <option value="Consulting / Architecture Review">Consulting & Architecture Audit</option>
                  </select>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-4 hairline-border-t">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-4 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back
                </button>
              ) : <div />}

              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-semibold text-xs transition-all flex items-center gap-1.5 shadow-sm disabled:opacity-50"
              >
                {step < 3 ? (
                  <>
                    <span>Next Step</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                ) : (
                  <>
                    <span>{loading ? 'Submitting...' : 'Dispatch Architecture Intake'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>

          </form>
        )}

      </div>
    </section>
  );
};
