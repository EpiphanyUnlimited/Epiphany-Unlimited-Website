import React from 'react';
import HeroVisual from './HeroVisual';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Content Column */}
          <div className="lg:col-span-6 z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 mb-6 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
              Strategic Clarity • Accepting New Clients
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-geist font-light leading-[1.1] tracking-tighter mb-8">
              <span className="text-[#60a5fa] font-semibold block">Epiphany Unlimited</span>
              <span className="text-gray-400">Turning Insight into</span> <br />
              <span className="gradient-text font-medium">Infinite Growth</span>
            </h1>
            
            <p className="max-w-xl text-lg sm:text-xl text-white/70 leading-relaxed mb-10">
              We partner with visionary leaders to transform complex challenges into clear, actionable strategies. Experience the epiphany that changes everything for your business.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="h-12 px-8 rounded-2xl bg-white text-black font-semibold hover:bg-white/90 transition-all flex items-center gap-2">
                Discover Process
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
              <button className="h-12 px-8 rounded-2xl bg-white/5 border border-white/15 text-white font-medium hover:bg-white/10 transition-all">
                View Case Studies
              </button>
            </div>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-6 relative aspect-[4/3]">
             <HeroVisual />
          </div>
        </div>

        {/* Central Slogan Group - Enlarged and Center Aligned */}
        <div className="mt-24 text-center">
          <div className="inline-block py-10 px-8 border-t border-b border-white/5 bg-white/[0.01] backdrop-blur-sm rounded-[3rem]">
            <p className="text-2xl md:text-3xl lg:text-4xl font-geist font-light tracking-tight text-white/90 leading-tight">
              <span className="whitespace-nowrap"><span className="opacity-40 italic">*</span>Proven Strategies</span> &nbsp; 
              <span className="whitespace-nowrap"><span className="opacity-40 italic">*</span>Intelligent Processes</span> &nbsp; 
              <span className="whitespace-nowrap"><span className="opacity-40 italic">*</span>Limitless Creativity</span> &nbsp; 
              <span className="whitespace-nowrap"><span className="opacity-40 italic">*</span>Powerful Results</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;