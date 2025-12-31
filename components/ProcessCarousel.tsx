import React, { useState, useEffect } from 'react';

const steps = [
  {
    title: "Strategic Inquiry",
    desc: "Your journey begins by completing our strategic consultation form, sharing your vision and the specific friction points you want to eliminate.",
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
    )
  },
  {
    title: "Synchronization Call",
    desc: "Expect a 15-minute alignment call within 24 hours. We ensure our frequencies are synced before diving deep into your business architecture.",
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
    )
  },
  {
    title: "Formal Consultation",
    desc: "A dedicated 30 or 50-minute strategic deep dive via Zoom or Google Meets to map out your custom path to growth.",
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
    )
  },
  {
    title: "Blueprint Proposal",
    desc: "We prepare a detailed proposal. You decide to accept as-is or reject. We move forward only when the vision is crystal clear.",
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
    )
  },
  {
    title: "Contract & Activation",
    desc: "Terms agreed, contract signed. A 30% to 50% deposit activation initiates the work cycle and secures your spot in our workflow.",
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
    )
  },
  {
    title: "MVP Show & Tell",
    desc: "A Minimum Viable Product is delivered within the contract timeline, allowing you to see and feel the progress early on.",
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"/></svg>
    )
  },
  {
    title: "Refinement Passes",
    desc: "Up to three major adjustment passes included. We aggregate minor tweaks into efficient refinement packages.",
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z"/></svg>
    )
  },
  {
    title: "Beyond Refinement",
    desc: "Need more? Post-pass refinements are available at a pre-negotiated rate, ensuring project momentum never stalls.",
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 4v16m8-8H4"/></svg>
    )
  },
  {
    title: "Final Completion",
    desc: "Project finalized. Client pleased. We transition to a maintenance phase focused on long-term sustainability.",
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
    )
  },
  {
    title: "Wellness & Checks",
    desc: "Periodic gap analyses and wellness checks. Variable term and frequency maintenance packages available.",
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
    )
  }
];

const ProcessCarousel: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const next = () => {
    if (isAnimating) return;
    setDirection('next');
    setIsAnimating(true);
    setCurrent((prev) => (prev + 1) % steps.length);
  };

  const prev = () => {
    if (isAnimating) return;
    setDirection('prev');
    setIsAnimating(true);
    setCurrent((prev) => (prev - 1 + steps.length) % steps.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 800);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <div className="fixed inset-0 z-[400] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity duration-500">
      <style>{`
        @keyframes cinematic-in {
          0% { 
            opacity: 0; 
            transform: translate3d(${direction === 'next' ? '120px' : '-120px'}, 0, 0) scale(0.85) rotateY(${direction === 'next' ? '35deg' : '-35deg'});
            filter: blur(10px);
          }
          100% { 
            opacity: 1; 
            transform: translate3d(0, 0, 0) scale(1) rotateY(0);
            filter: blur(0);
          }
        }
        .cinematic-transition {
          animation: cinematic-in 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards;
          perspective: 1200px;
        }
        .brand-gradient-card {
          /* Exact brand gradient at 60% opacity */
          background: linear-gradient(135deg, rgba(96, 165, 250, 0.6), rgba(192, 132, 252, 0.6), rgba(209, 213, 219, 0.6));
        }
      `}</style>
      
      <div className="relative w-full max-w-2xl brand-gradient-card backdrop-blur-3xl rounded-[4rem] p-12 border border-white/40 shadow-[0_0_150px_rgba(255,255,255,0.1)] overflow-hidden ring-1 ring-white/30">
        {/* Animated Background Shimmer */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-white/50 opacity-80"></div>
        <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)] pointer-events-none"></div>

        <button 
          onClick={onClose} 
          className="absolute top-8 right-8 text-[#000810]/40 hover:text-[#000810] transition-all z-20 p-2 bg-white/10 hover:bg-white/20 rounded-full active:scale-90"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <div key={current} className="flex flex-col items-center text-center cinematic-transition">
          {/* Icon Wrapper with contrast bg */}
          <div className="mb-12 p-8 rounded-[3rem] bg-[#000810]/10 text-[#000810] shadow-xl ring-1 ring-[#000810]/5 transform group-hover:scale-110 transition-transform duration-700">
            {steps[current].icon}
          </div>
          
          <div className="mb-6">
            {/* High contrast step label */}
            <span className="text-xs font-black uppercase tracking-[0.6em] text-[#000810]/50">Phase {current + 1}</span>
            {/* High contrast title in deep navy */}
            <h2 className="text-4xl md:text-5xl font-geist font-black tracking-tighter mt-3 text-[#000810] drop-shadow-sm">
              {steps[current].title}
            </h2>
          </div>

          {/* Description with high readability contrast */}
          <p className="text-lg md:text-xl font-medium leading-relaxed max-w-md text-[#000810]/80 mb-16 px-4">
            {steps[current].desc}
          </p>

          <div className="flex gap-8 w-full justify-between items-center px-4">
            <button 
              onClick={prev}
              className="w-16 h-16 rounded-full border-2 border-[#000810]/10 flex items-center justify-center text-[#000810] hover:bg-[#000810]/5 transition-all active:scale-90 group"
            >
              <svg className="w-8 h-8 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            
            <div className="flex gap-3">
              {steps.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-2.5 transition-all duration-700 rounded-full ${i === current ? 'w-12 bg-[#000810] shadow-[0_0_20px_rgba(0,0,0,0.2)]' : 'w-2.5 bg-[#000810]/10 hover:bg-[#000810]/20 cursor-pointer'}`}
                  onClick={() => {
                    if (!isAnimating) {
                      setDirection(i > current ? 'next' : 'prev');
                      setCurrent(i);
                    }
                  }}
                />
              ))}
            </div>

            <button 
              onClick={next}
              className="w-16 h-16 rounded-full bg-[#000810] text-white flex items-center justify-center hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-all active:scale-90 shadow-2xl group"
            >
              <svg className="w-8 h-8 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessCarousel;