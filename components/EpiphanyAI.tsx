
import React, { useState } from 'react';
import { generateStrategicInsight } from '../services/geminiService';
import { InsightResult } from '../types';

const EpiphanyAI: React.FC = () => {
  const [industry, setIndustry] = useState('');
  const [hurdle, setHurdle] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<InsightResult | null>(null);
  const [error, setError] = useState('');

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!industry || !hurdle) return;

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const data = await generateStrategicInsight(industry, hurdle);
      setResult(data);
    } catch (err) {
      setError('The AI is currently processing other visionaries. Please try again in a moment.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 border-y border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-geist font-light mb-4 tracking-tight">
            Strategic <span className="gradient-text font-medium">Insight Engine</span>
          </h2>
          <p className="text-white/60">Describe your challenge and get an AI-generated strategic hypothesis.</p>
        </div>

        <div className="glass-card rounded-[2.5rem] p-8 sm:p-12 border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-20">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5"><path d="M12 2v20M2 12h20M5.6 5.6l12.8 12.8M5.6 18.4L18.4 5.6" /></svg>
          </div>

          <form onSubmit={handleGenerate} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-white/40 uppercase tracking-widest ml-1">Industry</label>
                <input 
                  type="text" 
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  placeholder="e.g. Fintech, SaaS"
                  className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-transparent transition-all"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-white/40 uppercase tracking-widest ml-1">Biggest Hurdle</label>
                <input 
                  type="text" 
                  value={hurdle}
                  onChange={(e) => setHurdle(e.target.value)}
                  placeholder="e.g. Scaling operations"
                  className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            <button 
              disabled={loading}
              className={`w-full h-14 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 ${
                loading ? 'bg-white/10 text-white/40 cursor-not-allowed' : 'bg-white text-black hover:bg-white/90'
              }`}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-black/10 border-t-black rounded-full animate-spin"></div>
                  Synthesizing Strategy...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  Generate Epiphany
                </>
              )}
            </button>
          </form>

          {error && <p className="mt-6 text-center text-red-400 text-sm">{error}</p>}

          {result && (
            <div className="mt-12 pt-12 border-t border-white/10 animate-in fade-in slide-in-from-top-4 duration-700">
              <div className="mb-8">
                <h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">Strategic Hypothesis</h4>
                <p className="text-xl sm:text-2xl font-light leading-relaxed">{result.strategy}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-4">Core Pillars</h4>
                  <ul className="space-y-3">
                    {result.keyPillars.map((pillar, i) => (
                      <li key={i} className="flex gap-3 text-sm text-white/70">
                        <span className="text-purple-400 font-bold">{i+1}.</span>
                        {pillar}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-4">Next 30 Days</h4>
                  <ul className="space-y-3">
                    {result.immediateActions.map((action, i) => (
                      <li key={i} className="flex gap-3 text-sm text-white/70">
                        <span className="text-emerald-400 font-bold">→</span>
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EpiphanyAI;
