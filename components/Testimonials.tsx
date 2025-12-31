import React from 'react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: "Epiphany Unlimited provided the clarity we were missing. Their strategic audit revealed inefficiencies that doubled our profit margins in Q4.",
    author: "James Sterling",
    role: "CEO, TechFlow Inc.",
    avatar: "https://i.pravatar.cc/150?u=james"
  },
  {
    id: '2',
    quote: "Working with Epiphany wasn't just about strategy; it was about shifting our mindset. We went from stalling to scaling in under six months.",
    author: "Elena Vasquez",
    role: "Founder, Aura Design",
    avatar: "https://i.pravatar.cc/150?u=elena"
  },
  {
    id: '3',
    quote: "The most valuable consulting investment we've made. Their 'unlimited' approach means they are there whenever a new challenge arises.",
    author: "Sarah Chen",
    role: "COO, FutureFin",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-geist font-light tracking-tight mb-6">
            Trusted by<br />
            <span className="gradient-text font-medium">Visionary Leaders</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/60">
            Hear from the founders and executives who have experienced the Epiphany difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="group relative glass-card rounded-[2rem] p-10 transition-all duration-500">
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#000810] fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              
              <blockquote className="text-xl text-[#000810] font-geist font-bold leading-relaxed mb-10 italic">
                "{t.quote}"
              </blockquote>

              <div className="flex items-center gap-4 border-t border-[#000810]/10 pt-8">
                <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full grayscale group-hover:grayscale-0 transition-all ring-2 ring-[#000810]/10" />
                <div>
                  <div className="font-black text-[#000810]">{t.author}</div>
                  <div className="text-[10px] text-[#000810]/60 uppercase tracking-widest font-black">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;