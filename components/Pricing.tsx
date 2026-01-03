
import React from 'react';

interface PricingProps {
  onContactClick: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onContactClick }) => {
  return (
    <section id="consultation" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-geist font-light tracking-tight mb-6 text-white">
            Engagement <span className="gradient-text font-medium">Models</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white">
            We offer flexible engagement structures designed to fit the pace and scale of your transformation needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          {/* Audit Plan */}
          <div className="glass-card rounded-3xl p-8 flex flex-col transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div>
                <h3 className="text-xl font-black text-white">Audit</h3>
                <p className="text-[10px] text-white uppercase tracking-widest font-black">Diagnostic</p>
              </div>
            </div>
            
            <div className="mb-8">
              <span className="text-4xl font-geist font-black text-white">Custom</span>
              <span className="text-white ml-2 font-medium">/ Assessment</span>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              {['Comprehensive Strategy Audit', 'Gap Analysis Report', 'Executive Presentation', 'Action Roadmap'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white font-bold">
                  <div className="w-1 h-1 rounded-full bg-white"></div>
                  {item}
                </li>
              ))}
            </ul>

            <button 
              onClick={onContactClick}
              className="w-full h-12 rounded-2xl bg-white text-black font-black hover:bg-white/90 transition-all text-xs uppercase tracking-widest"
            >
              Book Assessment
            </button>
          </div>

          {/* Scale Plan (Featured) */}
          <div className="relative group rounded-3xl p-px overflow-hidden shadow-2xl">
            <div className="absolute inset-[-500%] bg-[conic-gradient(from_0deg,transparent_20%,#60a5fa_40%,#60a5fa_60%,transparent_80%)] animate-rotate opacity-20"></div>
            
            <div className="relative h-full glass-card rounded-3xl p-8 border-none flex flex-col z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white">Unlimited</h3>
                    <p className="text-[10px] text-white uppercase tracking-widest font-black">Retainer</p>
                  </div>
                </div>
                <div className="px-3 py-1 bg-white text-black rounded-full text-[10px] font-black">POPULAR</div>
              </div>
              
              <div className="mb-8">
                <span className="text-4xl font-geist font-black text-white">$15k</span>
                <span className="text-white ml-2 font-medium">/ Month</span>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {['Unlimited Strategy Calls', 'Embedded Leadership Support', 'Systems Optimization', 'Crisis Management'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white font-black">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    {item}
                  </li>
                ))}
              </ul>

              <button 
                onClick={onContactClick}
                className="w-full h-12 rounded-2xl bg-white text-black font-black hover:shadow-xl transition-all shadow-2xl text-xs uppercase tracking-widest"
              >
                Book Strategy Call
              </button>
            </div>
          </div>

          {/* Project Plan */}
          <div className="glass-card rounded-3xl p-8 flex flex-col transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
              </div>
              <div>
                <h3 className="text-xl font-black text-white">Bespoke</h3>
                <p className="text-[10px] text-white uppercase tracking-widest font-black">Project-Based</p>
              </div>
            </div>
            
            <div className="mb-8">
              <span className="text-4xl font-geist font-black text-white">Custom</span>
              <span className="text-white ml-2 font-medium">/ Project</span>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              {['End-to-end Implementation', 'Departmental Restructuring', 'Mergers & Acquisitions', 'Exit Strategy Planning'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white font-bold">
                  <div className="w-1 h-1 rounded-full bg-white"></div>
                  {item}
                </li>
              ))}
            </ul>

            <button 
              onClick={onContactClick}
              className="w-full h-12 rounded-2xl bg-white text-black font-black hover:bg-white/90 transition-all text-xs uppercase tracking-widest"
            >
              Request Proposal
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
