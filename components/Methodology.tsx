import React from 'react';

const Methodology: React.FC = () => {
  const steps = [
    { title: 'Discovery Phase', desc: 'Uncovering root causes', size: 'small', img: 'https://picsum.photos/seed/discover/800/600' },
    { title: 'Strategic Planning', desc: 'Building the roadmap', size: 'small', img: 'https://picsum.photos/seed/plan/800/600' },
    { title: 'Implementation', desc: 'Executing with precision', size: 'small', img: 'https://picsum.photos/seed/exec/800/600' },
    { title: 'Executive Alignment', desc: 'Our workshops bring diverse leadership perspectives into a single, unified vision for the future.', size: 'large', img: 'https://picsum.photos/seed/align/1600/900' },
    { title: 'Continuous Growth', desc: 'Iterative improvement cycles', size: 'small', img: 'https://picsum.photos/seed/growth/800/600' },
  ];

  return (
    <section id="methodology" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-geist font-light tracking-tight mb-6">
            The <span className="gradient-text font-medium">Epiphany Unlimited Methodology</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/60">
            Our proven framework relies on data, intuition, and rigorous execution to unlock exponential business value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className={`group relative rounded-[2rem] overflow-hidden border border-white/10 ring-1 ring-white/5 transition-all duration-700 ${
                step.size === 'large' ? 'lg:col-span-2' : ''
              }`}
            >
              <img src={step.img} alt={step.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="text-xl font-geist font-semibold mb-2">{step.title}</h4>
                <p className="text-sm text-white/60 max-w-sm line-clamp-2">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="h-14 px-10 rounded-2xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all backdrop-blur-xl">
            Download Process Whitepaper
          </button>
        </div>
      </div>
    </section>
  );
};

export default Methodology;