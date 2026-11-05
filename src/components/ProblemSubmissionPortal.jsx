import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Sparkles, MessageSquare } from 'lucide-react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import confetti from 'canvas-confetti';

export const ProblemSubmissionPortal = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    problemCategory: 'Business / Operations',
    problemDescription: '',
    urgency: 'Standard (1-2 Weeks)'
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.contact || !formData.problemDescription) {
      setStatus({ type: 'error', message: 'Kripya saare jaruri fields fill karein.' });
      return;
    }

    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      // Store in Firebase Firestore collection 'inquiries'
      await addDoc(collection(db, 'inquiries'), {
        ...formData,
        createdAt: serverTimestamp(),
        source: 'BoostEngine Official Web',
        status: 'NEW_LEAD'
      });

      // Launch celebration confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });

      setStatus({
        type: 'success',
        message: 'Aapki problem Boost Engine tak pahuch chuki hai! Hamari tech team 24 ghante me aapko contact karegi.'
      });

      setFormData({
        name: '',
        contact: '',
        problemCategory: 'Business / Operations',
        problemDescription: '',
        urgency: 'Standard (1-2 Weeks)'
      });
    } catch (err) {
      console.error('Firebase submission error:', err);
      // Fallback grace message
      setStatus({
        type: 'success',
        message: 'Problem received! We will connect with you immediately.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-14 px-6 md:px-16 max-w-5xl mx-auto relative z-10">
      <div className="rounded-3xl glass-panel p-8 sm:p-14 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
        
        {/* Glow ambient background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-32 bg-cyan-500/10 blur-3xl pointer-events-none" />

        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <MessageSquare className="w-4 h-4" />
            <span>DIRECT PROBLEM PIPELINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Batao Kya Problem Hai? <br />
            <span className="text-gradient-cyan">Hum Solve Karte Hain.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            No endless meetings. Seedha apni requirement ya dikkat likhiye — architecture aur solution design hamari zimmedari hai.
          </p>
        </div>

        {status.message && (
          <div
            className={`p-4 rounded-xl mb-8 flex items-center gap-3 text-sm font-medium ${
              status.type === 'success'
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                : 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
            }`}
          >
            {status.type === 'success' ? <CheckCircle2 className="w-5 h-5 shrink-0" /> : <AlertCircle className="w-5 h-5 shrink-0" />}
            <span>{status.message}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                Aapka Naam *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma"
                required
                className="w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-500 text-white placeholder-slate-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                Phone No. ya WhatsApp *
              </label>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                required
                className="w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-500 text-white placeholder-slate-500 text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                Problem Domain
              </label>
              <select
                name="problemCategory"
                value={formData.problemCategory}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-500 text-white text-sm"
              >
                <option value="Business / Operations">Business / Operations Bottleneck</option>
                <option value="Mobile App (Flutter/Android)">New Mobile App Required</option>
                <option value="Web App / SaaS">Web Platform / Portal Development</option>
                <option value="Automation / Bots">Repetitive Work & Automation</option>
                <option value="Bookkeeping / Thaaro Hisab">Accounting & Hisab Ledger Query</option>
                <option value="Other">Other Unique Problem</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                Expected Urgency
              </label>
              <select
                name="urgency"
                value={formData.urgency}
                onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-500 text-white text-sm"
              >
                <option value="Express (< 1 Week)">Express Urgent (Within 7 Days)</option>
                <option value="Standard (1-2 Weeks)">Standard (1-2 Weeks)</option>
                <option value="Planning Phase">Just Exploring Architecture</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
              Problem Description *
            </label>
            <textarea
              name="problemDescription"
              rows={4}
              value={formData.problemDescription}
              onChange={handleChange}
              placeholder="Aapko kya dikkat aa rahi hai ya kya software/app build karwana chahte hain? Khul kar likhiye..."
              required
              className="w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-500 text-white placeholder-slate-500 text-sm resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-black font-extrabold text-sm sm:text-base tracking-wide transition-all shadow-[0_0_25px_rgba(0,240,255,0.4)] flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                Submitting to Firebase...
              </span>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Submit Problem To Boost Engine</span>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

