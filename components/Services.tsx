import React from 'react';

interface ServiceGroup {
  id: string;
  pillar: string;
  title: string;
  items: { label: string; sub: string }[];
  image: string;
  icon: React.ReactNode;
}

interface ServicesProps {
  onContactClick: () => void;
}

const services: ServiceGroup[] = [
  {
    id: 'consulting',
    pillar: 'Executive Strategy',
    title: 'Strategic Consulting',
    items: [
      { label: 'Crafting project-based roadmaps', sub: 'Custom roadmap generation.' },
      { label: 'AI/Performance Audits', sub: 'Identifying operational friction and AI gaps.' },
      { label: 'Strategic Moat', sub: 'AI Expertise + Process Improvement Certification + Fortune 100 Software Development Process Experience.' }
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
  },
  {
    id: 'ops',
    pillar: 'Strategy & Operations',
    title: 'Business Architecture',
    items: [
      { label: 'SOPs & Process Maps', sub: 'Providing Transparency, Clarity, and Standardization.' },
      { label: 'Scaling Plans', sub: 'The roadmap to AI enhanced scaling.' },
      { label: 'Knowledge Bases', sub: 'Turning internal data into an asset.' }
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path></svg>
  },
  {
    id: 'tech',
    pillar: 'Tech & AI Integration',
    title: 'Future-Proof Systems',
    items: [
      { label: 'Custom AI Chatbots', sub: 'Connecting knowledge to your site.' },
      { label: 'Video AI Avatars', sub: 'Digital personas for branding and customer engagement.' },
      { label: 'Web Redesign', sub: 'Modernizing UI/UX for conversion.' }
    ],
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
  },
  {
    id: 'commerce',
    pillar: 'Commerce & Growth',
    title: 'Revenue Acceleration',
    items: [
      { label: 'Custom Websites', sub: 'Galleries, Communities, E-commerce Stores' },
      { label: 'Passive Income', sub: 'Automated passive income systems.' },
      { label: 'Next Level Landing Pages', sub: 'High-converting "Hero" pages.' }
    ],
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800',
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  }
];

const Services: React.FC<ServicesProps> = ({ onContactClick }) => {
  return (
    <section id="services" className="py-20 bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-geist font-light tracking-tight mb-4">
            Services Designed for<br />
            <span className="gradient-text font-medium">Maximum Impact</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/60">
            We don't just advise; we transform. Our consulting services unlock the hidden power within your ideas. Our suite of products are designed to increase your productivity and enhance your quality of life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <article 
              key={service.id} 
              className={`group relative glass-card rounded-[2.5rem] p-6 hover:bg-white/[0.05] transition-all duration-500 border-white/5 overflow-hidden flex flex-col lg:flex-row gap-6 reveal reveal-delay-${(index % 3) + 1}`}
            >
              <div className="w-full lg:w-1/3 shrink-0">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg ring-1 ring-white/10">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute top-3 right-3 p-2 bg-black/40 backdrop-blur-md rounded-xl text-white/80 border border-white/10">
                    {service.icon}
                  </div>
                </div>
              </div>

              <div className="flex-grow flex flex-col justify-between py-1">
                <div>
                  <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-1">Pillar: {service.pillar}</div>
                  <h3 className="text-xl font-geist font-semibold mb-3 leading-tight">{service.title}</h3>
                  <ul className="space-y-1.5">
                    {service.items.map((item, i) => (
                      <li key={i} className="group/item">
                        <div className="text-xs font-bold text-white/90">{item.label}</div>
                        <div className="text-[10px] text-white/50">{item.sub}</div>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-4 pt-3 border-t border-white/5">
                  <button 
                    onClick={onContactClick}
                    className="flex items-center gap-2 text-[10px] font-bold text-blue-400 group-hover:gap-3 transition-all uppercase tracking-widest"
                  >
                    Inquire Now
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;