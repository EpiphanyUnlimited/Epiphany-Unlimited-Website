import React from 'react';
import HeroVisual from './HeroVisual';

interface HeroProps {
  onAboutClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onAboutClick }) => {
  const slogans = [
    "Proven Strategies",
    "Intelligent Processes",
    "Limitless Creativity",
    "Powerful Results"
  ];

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-container {
          display: flex;
          width: fit-content;
          animation: ticker 30s linear infinite;
        }
        .ticker-container:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Content Column */}
          <div className="lg:col-span-6 z-10 reveal">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 mb-6 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
              Strategic Clarity • Accepting New Clients
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-[3.2rem] font-geist font-light leading-[1.1] tracking-tighter mb-8">
              <span className="text-[#000810] font-black whitespace-nowrap drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]">Epiphany Unlimited</span> <br />
              <span className="text-gray-400">Turning Insight into</span> <br />
              <span className="gradient-text font-medium">Infinite Growth</span>
            </h1>
            
            <p className="max-w-xl text-lg sm:text-xl text-white/70 leading-relaxed mb-10">
              We partner with visionary leaders to transform complex challenges into aha moments that are supported by clear, actionable strategies. Experience the epiphany that changes everything for your business or passion project.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="h-12 px-8 rounded-2xl bg-white text-black font-semibold hover:bg-white/90 transition-all flex items-center gap-2 shadow-lg shadow-white/5">
                Discover Process
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
              <button 
                onClick={onAboutClick}
                className="h-12 px-8 rounded-2xl bg-white/5 border border-white/15 text-white font-medium hover:bg-white/10 transition-all backdrop-blur-md"
              >
                About Us
              </button>
            </div>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-6 relative aspect-[4/3] reveal reveal-delay-2">
             <HeroVisual />
          </div>
        </div>
      </div>

      {/* Vibrant Ticker Tape Section */}
      <div className="mt-24 relative py-8 border-y border-white/5 bg-white/[0.02] backdrop-blur-sm overflow-hidden group cursor-default reveal reveal-delay-3">
        <div className="ticker-container">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              {slogans.map((slogan, idx) => (
                <div key={idx} className="flex items-center px-12">
                  <span className="text-2xl md:text-4xl font-geist font-bold tracking-tighter gradient-text whitespace-nowrap drop-shadow-[0_0_15px_rgba(96,165,250,0.3)]">
                    {slogan}
                  </span>
                  <span className="ml-12 text-3xl opacity-20 text-white italic select-none">*</span>
                </div>
              ))}
            </div>
          ))}
        </div>
        
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#000810] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#000810] to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Hero;