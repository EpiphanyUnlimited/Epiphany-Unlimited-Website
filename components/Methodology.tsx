import React from 'react';

const Methodology: React.FC = () => {
  const steps = [
    { 
      title: 'Phase 1: Deep Discovery', 
      desc: 'We peel back the layers of your current operations to uncover the root friction points and untapped opportunities.',
      icon: '01'
    },
    { 
      title: 'Phase 2: Architectural Strategy', 
      desc: 'Our specialists craft a project-based roadmap that integrates AI power with rigorous Six Sigma efficiency.',
      icon: '02'
    },
    { 
      title: 'Phase 3: Execution Engine', 
      desc: 'We dont just hand over a plan; we implement the systems, SOPs, and tech stacks required for success.',
      icon: '03'
    },
    { 
      title: 'Phase 4: Optimization & Flow', 
      desc: 'Continuous refinement cycles ensure your business achieves the F.L.O.W. state: moving with purpose and ease.',
      icon: '04'
    },
  ];

  return (
    <section id="methodology" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 reveal">
          <h2 className="text-4xl sm:text-5xl font-geist font-light tracking-tight mb-6">
            The <span className="gradient-text font-medium">Epiphany Strategic Circuitry</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/60">
            A high-level methodology engineered for visionary leaders who demand clarity and exponential results.
          </p>
        </div>

        <div className="relative">
          {/* Background Connecting Line (SVG) */}
          <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent hidden lg:block opacity-30"></div>
          
          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24 reveal`}
              >
                {/* Visual Connector / Number */}
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-full bg-[#001a33] border-2 border-white/10 flex items-center justify-center text-2xl font-black text-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                    {step.icon}
                  </div>
                  {/* Energy Pulse Orbit */}
                  <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-ping opacity-20"></div>
                </div>

                {/* Content Card */}
                <div className={`flex-1 glass-card p-10 rounded-[2.5rem] border-white/5 hover:border-blue-500/20 transition-all group ${idx % 2 === 0 ? 'text-left' : 'text-left lg:text-right'}`}>
                  <h4 className="text-2xl font-geist font-bold mb-4 gradient-text">{step.title}</h4>
                  <p className="text-white font-medium leading-relaxed text-lg">{step.desc}</p>
                  
                  <div className={`mt-6 flex ${idx % 2 === 0 ? 'justify-start' : 'justify-start lg:justify-end'} gap-4 opacity-40 group-hover:opacity-80 transition-opacity`}>
                    <div className="h-1 w-12 bg-blue-500 rounded-full"></div>
                    <div className="h-1 w-6 bg-purple-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;