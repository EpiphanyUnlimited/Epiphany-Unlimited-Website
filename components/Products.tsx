import React, { useState, useEffect } from 'react';

const products = [
  {
    id: "colorable",
    title: "Colorable AI",
    desc: "The world's first AI coloring book engine that preserves exact facial likeness. Turning uploaded images into professional line-art for families and creators in seconds!",
    tag: "Creative Tech",
    status: "Available",
    link: "https://colorableai.netlify.app",
    // Verified Teddy Bear Image
    imageUrl: "https://images.unsplash.com/photo-1591160690555-5debfba289f0?auto=format&fit=crop&q=80&w=1000",
    showStamp: false
  },
  {
    id: "formwiz",
    title: "FormWiz AI",
    desc: "FormWiz analyzes your PDF documents and interviews you to gather the answers. No more typing on tiny mobile screens or deciphering complex paperwork.",
    tag: "Strategic Ops",
    status: "Available",
    link: "https://formwiz.app",
    showStamp: false
  },
  {
    id: "movie-maker",
    title: "Magic Mind Movie Maker",
    desc: "Bring your mental vision to life with AI-driven cinematic sequences and storytelling flow.",
    tag: "Future Vision",
    status: "Coming Soon",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
    showStamp: true
  },
  {
    id: "watch-this",
    title: "Watch This!",
    desc: "The world's first cross-platform movie streaming recommendation engine. Find hidden gems, based on your previous searches and watch history.",
    tag: "Media Intelligence",
    status: "Coming Soon",
    imageUrl: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80&w=800",
    showStamp: true
  }
];

const FormWizVisual = () => (
  <div className="flex items-center justify-center gap-4 md:gap-8 text-white/90 p-4">
    <div className="flex flex-col items-center gap-3">
      <div className="w-16 h-16 bg-red-500/10 border border-red-500/20 rounded-2xl shadow-lg flex items-center justify-center transition-transform hover:scale-110">
        <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
      </div>
      <span className="text-[9px] font-black uppercase tracking-[0.3em] opacity-40">PDF Icon</span>
    </div>
    
    <div className="text-3xl font-light text-white/10 select-none">+</div>
    
    <div className="flex flex-col items-center gap-3">
      <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/20 rounded-2xl shadow-lg flex items-center justify-center transition-transform hover:scale-110">
        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>
      </div>
      <span className="text-[9px] font-black uppercase tracking-[0.3em] opacity-40">Audio Icon</span>
    </div>

    <div className="text-3xl font-light text-white/10 select-none">=</div>

    <div className="flex flex-col items-center gap-3">
      <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl shadow-lg flex items-center justify-center transition-transform hover:scale-110 relative">
        <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>
        <div className="absolute inset-0 bg-emerald-400/10 blur-xl rounded-full"></div>
      </div>
      <span className="text-[9px] font-black uppercase tracking-[0.3em] opacity-40 text-emerald-400/60">Form Icon</span>
    </div>
  </div>
);

const ColorableVisual = ({ imageUrl }: { imageUrl: string }) => {
  const [scanPos, setScanPos] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setScanPos((prev) => (prev <= 0 ? 100 : prev - 0.5));
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full group overflow-hidden bg-black flex items-center justify-center">
      {/* Photo Side (Static background) */}
      <img 
        src={imageUrl} 
        alt="Original Teddy Bear" 
        className="absolute inset-0 w-full h-full object-cover grayscale-[0.1] brightness-90"
      />

      {/* Reveal Side: Procedural Ink Drawing on Paper */}
      <div 
        className="absolute inset-0 z-10 bg-white"
        style={{ clipPath: `inset(0 0 0 ${scanPos}%)` }}
      >
        {/* Clean Paper Base */}
        <div className="absolute inset-0 bg-[#f4f4f4] z-0"></div>
        
        {/* Drawing Image - Applying strong contrast filter to simulate line art */}
        <img 
          src={imageUrl} 
          alt="Line Art Teddy Bear" 
          className="absolute inset-0 w-full h-full object-cover z-10"
          style={{ 
            filter: 'grayscale(100%) contrast(15) brightness(1.3) invert(0)',
            mixBlendMode: 'multiply'
          }}
        />
        
        {/* Paper Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay z-20 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")' }}></div>
      </div>

      {/* Scanning Laser Beam */}
      <div 
        className="absolute inset-y-0 w-1 bg-gradient-to-b from-blue-400 via-white to-blue-400 shadow-[0_0_20px_#60a5fa,0_0_40px_rgba(255,255,255,0.5)] z-30 pointer-events-none"
        style={{ left: `${scanPos}%` }}
      >
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full blur-[4px] animate-pulse"></div>
        <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full blur-[4px] animate-pulse delay-100"></div>
      </div>

      {/* UI Badge */}
      <div className="absolute bottom-6 right-8 z-40 px-5 py-2 rounded-full bg-black/80 backdrop-blur-xl border border-white/20 flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></div>
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400">AI Rendering: Ink Variant (Teddy)</p>
      </div>
    </div>
  );
};

const Products: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-transparent pt-32 pb-20 selection:bg-blue-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="mb-12 flex items-center gap-2 text-white/40 hover:text-white transition-colors group font-geist reveal"
        >
          <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          Back to Home
        </button>

        <div className="mb-20 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
            Product Portfolio
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-geist font-light tracking-tighter text-white mb-6">
            Strategic Digital <br />
            <span className="gradient-text font-medium">Products</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-white/70 leading-relaxed">
            Tools engineered to bridge the gap between imagination and execution. Each product is a direct expression of our commitment to ease and flow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal reveal-delay-2">
          {products.map((product, idx) => (
            <div key={idx} className="group glass-card rounded-[3rem] p-10 flex flex-col justify-between border-white/10 hover:border-white/20 transition-all hover:scale-[1.01] duration-500 min-h-[400px]">
              <div>
                <div className="flex justify-between items-start mb-8">
                  <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em]">{product.tag}</span>
                  <div className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border ${
                    product.status === 'Available' ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-white/5 border-white/10 text-white/40'
                  }`}>
                    {product.status}
                  </div>
                </div>
                
                {/* Product Image/Visual Box */}
                <div className="aspect-video w-full bg-white/5 border border-white/10 rounded-3xl mb-10 flex items-center justify-center group-hover:bg-white/[0.08] transition-all overflow-hidden relative">
                   <div className="absolute inset-0 blueprint-bg opacity-5 z-0"></div>
                   
                   {/* Custom Visual for specific products */}
                   {product.id === 'formwiz' ? (
                     <div className="relative z-10 w-full">
                       <FormWizVisual />
                     </div>
                   ) : product.id === 'colorable' ? (
                     <ColorableVisual imageUrl={product.imageUrl!} />
                   ) : (
                     <img 
                       src={product.imageUrl} 
                       alt={product.title} 
                       className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${product.showStamp ? 'brightness-[0.4]' : 'brightness-90 group-hover:brightness-100'}`}
                     />
                   )}

                   {/* Epiphany Loading Stamp Overlay */}
                   {product.showStamp && (
                     <div className="relative z-10 flex flex-col items-center justify-center">
                        <div className="px-6 py-3 border-4 border-blue-400/60 rounded-xl transform -rotate-12 bg-black/40 backdrop-blur-sm">
                           <span className="text-2xl md:text-3xl font-geist font-black text-blue-400/80 uppercase tracking-[0.2em] whitespace-nowrap">
                             Epiphany Loading
                           </span>
                        </div>
                        <div className="mt-4 flex gap-1 animate-pulse">
                           <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                           <div className="w-2 h-2 rounded-full bg-blue-400/60"></div>
                           <div className="w-2 h-2 rounded-full bg-blue-400/30"></div>
                        </div>
                     </div>
                   )}
                </div>

                <h3 className="text-3xl font-geist font-black text-white mb-4 tracking-tight">{product.title}</h3>
                <p className="text-white/60 text-lg font-light leading-relaxed max-w-sm">{product.desc}</p>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between">
                {product.status === 'Available' ? (
                  <a 
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-14 px-8 rounded-2xl bg-white text-black font-black uppercase tracking-widest text-[10px] hover:bg-white/90 transition-all flex items-center gap-3 no-underline inline-flex"
                  >
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </a>
                ) : (
                  <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">Waitlist Open</span>
                )}
                
                <div className="flex gap-1">
                   <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                   <div className="w-1 h-1 rounded-full bg-purple-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;