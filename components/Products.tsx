import React from 'react';

const products = [
  {
    title: "Colorable",
    desc: "The world's first AI coloring book engine that preserves exact facial likeness. Turning uploaded images into professional line-art for families and creators in seconds!",
    tag: "Creative Tech",
    status: "Available",
    link: "https://magiccolor.netlify.app"
  },
  {
    title: "FormWiz AI",
    desc: "FormWiz analyzes your PDF documents and interviews you to gather the answers. No more typing on tiny mobile screens or deciphering complex paperwork.",
    tag: "Strategic Ops",
    status: "Available",
    link: "https://formwiz.app"
  },
  {
    title: "Magic Mind Movie Maker",
    desc: "Bring your mental vision to life with AI-driven cinematic sequences and storytelling flow.",
    tag: "Future Vision",
    status: "Coming Soon"
  },
  {
    title: "Watch This!",
    desc: "The world's first cross-platform movie streaming recommendation engine. Find hidden gems, based on your previous searches and watch history.",
    tag: "Media Intelligence",
    status: "Coming Soon"
  }
];

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
                
                {/* Placeholder Image Box */}
                <div className="aspect-video w-full bg-white/5 border border-white/10 rounded-3xl mb-10 flex items-center justify-center group-hover:bg-white/[0.08] transition-colors overflow-hidden relative">
                   <div className="absolute inset-0 blueprint-bg opacity-5"></div>
                   <div className="w-16 h-16 text-white/10 group-hover:text-white/20 transition-all transform group-hover:scale-110">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2-2v12a2 2 0 002 2z"></path></svg>
                   </div>
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