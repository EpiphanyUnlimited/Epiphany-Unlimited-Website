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
    <section className="py-24 border-y border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
            Intelligence Suite
          </div>
          <h2 className="text-4xl sm:text-5xl font-geist font-light mb-4 tracking-tighter text-white">
            Strategic <span className="gradient-text font-medium">Insight Engine</span>
          </h2>
          <p className="text-white/50 max-w-lg mx-auto leading-relaxed">Describe your unique friction points to generate a high-impact strategic hypothesis powered by Epiphany Intelligence.</p>
        </div>

        <div className="glass-card rounded-[3rem] p-8 sm:p-14 border-white/20 shadow-[0_0_80px_rgba(0,0,0,0.5)] relative overflow-hidden group">
          {/* Form Background Pattern */}
          <div className="absolute inset-0 blueprint-bg opacity-[0.05] pointer-events-none"></div>
          
          <form onSubmit={handleGenerate} className="space-y-8 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-blue-400/50 uppercase tracking-[0.4em] ml-1">Industry Sector</label>
                <input 
                  type="text" 
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  placeholder="e.g. Precision Robotics"
                  className="w-full h-16 bg-white/5 border border-white/10 rounded-[1.5rem] px-8 text-white placeholder:text-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all font-bold"
                  required
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-blue-400/50 uppercase tracking-[0.4em] ml-1">Primary Friction</label>
                <input 
                  type="text" 
                  value={hurdle}
                  onChange={(e) => setHurdle(e.target.value)}
                  placeholder="e.g. Scaling without entropy"
                  className="w-full h-16 bg-white/5 border border-white/10 rounded-[1.5rem] px-8 text-white placeholder:text-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all font-bold"
                  required
                />
              </div>
            </div>

            <button 
              disabled={loading}
              className={`w-full h-16 rounded-[1.5rem] font-black uppercase tracking-[0.3em] text-xs transition-all flex items-center justify-center gap-4 relative overflow-hidden group/btn shadow-2xl ${
                loading ? 'bg-white/10 text-white/40 cursor-not-allowed' : 'bg-white text-black hover:bg-white/95 active:scale-[0.98]'
              }`}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/10 border-t-white rounded-full animate-spin"></div>
                  Synthesizing...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 group-hover:scale-125 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  Generate Epiphany
                </>
              )}
            </button>
          </form>

          {error && <p className="mt-8 text-center text-red-400 text-sm font-black animate-pulse">{error}</p>}

          {result && (
            <div className="mt-16 pt-16 border-t border-white/10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <div className="mb-12 text-center">
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-px flex-grow bg-gradient-to-r from-blue-400/30 to-transparent"></span>
                  <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-[0.6em]">Hypothesis Generated</h4>
                  <span className="h-px flex-grow bg-gradient-to-l from-blue-400/30 to-transparent"></span>
                </div>
                <p className="text-2xl sm:text-3xl font-geist font-black leading-snug tracking-tight text-white italic">"{result.strategy}"</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10">
                  <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-[0.5em] mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                    Strategic Pillars
                  </h4>
                  <ul className="space-y-4">
                    {result.keyPillars.map((pillar, i) => (
                      <li key={i} className="flex gap-4 text-sm text-white/80 leading-relaxed font-geist font-bold">
                        <span className="text-blue-400 font-black">0{i+1}</span>
                        {pillar}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10">
                  <h4 className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.5em] mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Immediate Activation
                  </h4>
                  <ul className="space-y-4">
                    {result.immediateActions.map((action, i) => (
                      <li key={i} className="flex gap-4 text-sm text-white/80 leading-relaxed font-geist font-bold">
                        <span className="text-emerald-400 font-black">→</span>
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-12 text-center">
                 <p className="text-[10px] text-white/20 uppercase tracking-[0.4em] font-black">Confidence Rating: Highly Aligned</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EpiphanyAI;