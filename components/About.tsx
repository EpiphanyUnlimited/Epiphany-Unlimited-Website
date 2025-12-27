import React from 'react';

const About: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-transparent pt-32 pb-20 selection:bg-blue-500/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="mb-12 flex items-center gap-2 text-white/40 hover:text-white transition-colors group font-geist reveal"
        >
          <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          Back to Home
        </button>

        <article className="glass-card rounded-[3rem] p-8 md:p-16 border-white/10 shadow-2xl relative overflow-hidden reveal">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
             <svg width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.05"><path d="M12 2v20M2 12h20M5.6 5.6l12.8 12.8M5.6 18.4L18.4 5.6" /></svg>
          </div>

          <header className="mb-16 reveal reveal-delay-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-geist font-light mb-6 tracking-tighter leading-tight">
              About <span className="text-[#60a5fa] font-semibold">Epiphany Unlimited, Inc.</span>
            </h1>
            <p className="text-2xl md:text-4xl font-serif-brand italic text-white/90 leading-snug">
              “Everything we do is for ease and flow.”
            </p>
          </header>

          <div className="space-y-16 text-lg md:text-xl leading-relaxed text-white/80 font-geist font-light">
            
            {/* Philosophical Foundation */}
            <section className="space-y-8 reveal reveal-delay-2">
              <p>
                At <strong>Epiphany Unlimited, Inc.</strong>, that line is more than a clever phrase—it is the lens for every decision, design, and deliverable. 
              </p>
              <p>
                For us, “for ease and flow” has a specific meaning:
              </p>
              
              {/* Cards with 30% Increased Font Size */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-12 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/[0.08] transition-all hover:scale-[1.02] duration-300 shadow-xl group">
                  <h3 className="text-blue-400 font-bold uppercase tracking-[0.25em] text-sm md:text-lg mb-8 group-hover:tracking-[0.35em] transition-all">4E’s</h3>
                  <p className="text-xl md:text-3xl lg:text-4xl font-bold leading-[1.3] text-white/90">Everything is done <em className="text-blue-300 not-italic">empathetically</em>, to <em className="text-blue-300 not-italic">empower</em>, with <em className="text-blue-300 not-italic">enlightenment</em> and <em className="text-blue-300 not-italic">enlivenment</em>.</p>
                </div>
                <div className="p-12 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/[0.08] transition-all hover:scale-[1.02] duration-300 shadow-xl group">
                  <h3 className="text-purple-400 font-bold uppercase tracking-[0.25em] text-sm md:text-lg mb-8 group-hover:tracking-[0.35em] transition-all">F.L.O.W.</h3>
                  <p className="text-xl md:text-3xl lg:text-4xl font-bold leading-[1.3] text-white/90">We move <em className="text-purple-300 not-italic">For Love Of Whatever</em> drives you: your goals, your people, your why.</p>
                </div>
              </div>
              <p className="reveal text-white/60">This philosophy keeps your projects human, intuitive, and aligned with what matters most to you.</p>
            </section>

            {/* Quote Style Blurb - Large & Styled */}
            <section className="py-12 reveal">
              <div className="relative p-12 md:p-16 bg-white/[0.02] rounded-[3rem] border-y border-white/10 text-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 bg-[#001a33] border border-white/10 rounded-full text-blue-400 text-xs font-black uppercase tracking-[0.4em]">
                  The Standard
                </div>
                <blockquote className="text-2xl md:text-4xl lg:text-5xl font-serif-brand italic text-white/90 leading-tight">
                  "Whether it is SaaS, done-for-you services, consultations, or digital products, these are the standards you can feel in every interaction."
                </blockquote>
              </div>
            </section>

            {/* Energy Conductors */}
            <section className="space-y-10 reveal">
              <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight border-b border-white/10 pb-6">What You Can Expect With Us</h2>
              <p className="text-white/60">Epiphany Unlimited is built on five <strong>energy conductors</strong> that shape how we work with every client and collaborator. These are our internal “energy KPIs” that tell us if something is truly in alignment:</p>
              
              <div className="grid grid-cols-1 gap-6">
                {[
                  { t: 'Customer Passion', d: 'Your outcomes are our obsession.' },
                  { t: 'Integrity', d: 'Clear, honest, and values-driven from start to finish.' },
                  { t: 'Speed', d: 'We move quickly without sacrificing quality or thought.' },
                  { t: 'Synchronization', d: 'People, processes, and platforms pulled into the same rhythm.' },
                  { t: 'Communication', d: 'No jargon walls; just real, ongoing, two-way clarity.' }
                ].map((item, i) => (
                  <div key={i} className={`flex gap-8 p-8 rounded-[2rem] hover:bg-white/5 border border-transparent hover:border-white/10 transition-all group reveal reveal-delay-${i % 3}`}>
                    <span className="text-4xl font-black text-blue-500/20 group-hover:text-blue-500/50 transition-colors shrink-0">0{i+1}</span>
                    <div>
                      <h4 className="font-bold text-white uppercase tracking-widest text-base md:text-lg mb-2 group-hover:text-blue-400 transition-colors">{item.t}</h4>
                      <p className="text-white/50 text-base md:text-lg leading-snug">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Experience - Updated Text and Enlarged Icons */}
            <section className="space-y-8 reveal">
              <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight border-b border-white/10 pb-6">Experience You Can Lean On</h2>
              <p>
                After 30+ years in <strong>I.T. in corporate America</strong>, navigating restructures and layoff waves, Epiphany Unlimited was born from a decision: to create stability from the inside out.
              </p>
              <div className="bg-white/5 rounded-3xl p-12 md:p-20 border border-white/10 space-y-12">
                <p className="font-semibold text-blue-400 uppercase tracking-widest text-base md:text-xl text-center md:text-left">
                  As an experienced process improvement consultant and Lean Six Sigma Green Belt, I ensure that our work is grounded in rigor:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <li className="space-y-8 group text-center md:text-left">
                    <div className="w-24 h-24 rounded-[2.5rem] bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300 mx-auto md:mx-0 shadow-lg shadow-blue-500/5">
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M9 20l-5.447-2.724A2 2 0 013 15.487V5.41a2 2 0 011.106-1.789L9 1m12 19l-5.447-2.724A2 2 0 0015 15.487V5.41a2 2 0 00-1.106-1.789L9 1" /></svg>
                    </div>
                    <p className="text-xl text-white/70 leading-relaxed font-light">Mapping and improving processes, not just patching pain points.</p>
                  </li>
                  <li className="space-y-8 group text-center md:text-left">
                    <div className="w-24 h-24 rounded-[2.5rem] bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300 mx-auto md:mx-0 shadow-lg shadow-blue-500/5">
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <p className="text-xl text-white/70 leading-relaxed font-light">Reducing friction and waste so energy goes where it matters most.</p>
                  </li>
                  <li className="space-y-8 group text-center md:text-left">
                    <div className="w-24 h-24 rounded-[2.5rem] bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300 mx-auto md:mx-0 shadow-lg shadow-blue-500/5">
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <p className="text-xl text-white/70 leading-relaxed font-light">Turning complex systems into clean, repeatable, natural flows.</p>
                  </li>
                </ul>
              </div>
            </section>

            {/* Success Formula */}
            <section className="reveal">
              <div className="p-12 md:p-20 bg-gradient-to-br from-blue-500/20 via-black/40 to-purple-500/20 rounded-[3rem] border border-white/10 text-center shadow-[0_0_80px_rgba(59,130,246,0.1)] relative overflow-hidden group">
                <div className="absolute inset-0 blueprint-bg opacity-5 pointer-events-none"></div>
                <h2 className="text-xs font-bold text-blue-400 uppercase tracking-[0.5em] mb-8">Our Definition of Success</h2>
                <p className="text-4xl md:text-6xl font-geist font-black tracking-tighter text-white mb-8 group-hover:scale-[1.02] transition-transform duration-700">
                  Passion + Focus + Follow Through = Success
                </p>
                <p className="text-white/70 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
                  This is how priorities are set, progress is measured, and ideas are turned into real outcomes. It guides how Epiphany Unlimited designs systems, builds workflows, and supports you in moving from “idea” to “implemented.”
                </p>
              </div>
            </section>

            {/* Vision */}
            <section className="space-y-8 reveal">
              <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight border-b border-white/10 pb-6">The Vision Behind Epiphany Unlimited</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p>
                    Epiphany Unlimited exists for people and businesses who know they are capable of more—but feel blocked by tools, tech, or traditional systems.
                  </p>
                  <p>
                    The vision: to help people who have been displaced, redirected, or simply ready for a new chapter become <strong>empathetically empowered, enlightened, and enlivened</strong> through creative technology solutions.
                  </p>
                </div>
                <div className="glass-card p-10 rounded-[2.5rem] border-white/5 bg-blue-500/5">
                   <p className="text-xl italic text-blue-300">"The core belief: the tools to transform your situation already exist. The shift happens when someone shows you how to connect and use them in ways that fit you."</p>
                </div>
              </div>
            </section>

            {/* Founder Note */}
            <footer className="pt-20 reveal">
              <div className="flex flex-col md:flex-row gap-12 items-start p-10 md:p-16 glass-card rounded-[3rem] border-blue-500/20 bg-blue-500/5">
                <div className="shrink-0 w-32 h-32 rounded-full bg-white/10 border-2 border-blue-500/30 flex items-center justify-center overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                   <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                </div>
                <div className="flex-grow">
                  <h3 className="text-blue-400 font-bold uppercase tracking-[0.4em] text-xs mb-4">Founder’s Reflection</h3>
                  <p className="text-3xl font-semibold text-white mb-8">Brian Ballentine</p>
                  <div className="text-xl md:text-2xl italic text-white/60 leading-relaxed border-l-4 border-blue-500/30 pl-10 space-y-6">
                    <p>
                      "Hi, and welcome to EpiphanyUnltd.com.
                    </p>
                    <p>
                      Epiphany Unlimited started with a personal realization: waiting for corporate structures to protect my future was never going to be enough. I had to redesign the way I worked, thought, and used technology—so that my security and creativity came from within, not from a job title.
                    </p>
                    <p>
                      Now, my work is about shortening that journey for you. Whether you are rebuilding after a layoff, reimagining a business, or reinventing how you serve your customers, my role is to help you find your own “ease and flow”—your 4E’s and your F.L.O.W.—and to back it up with smart systems that actually work in real life."
                    </p>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </article>
      </div>
    </div>
  );
};

export default About;