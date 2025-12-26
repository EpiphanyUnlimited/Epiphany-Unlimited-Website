import React from 'react';

const About: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-transparent pt-32 pb-20 selection:bg-blue-500/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="mb-12 flex items-center gap-2 text-white/40 hover:text-white transition-colors group font-geist"
        >
          <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          Back to Home
        </button>

        <article className="glass-card rounded-[3rem] p-8 md:p-16 border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
             <svg width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.05"><path d="M12 2v20M2 12h20M5.6 5.6l12.8 12.8M5.6 18.4L18.4 5.6" /></svg>
          </div>

          <header className="mb-16">
            <h1 className="text-4xl md:text-5xl font-geist font-light mb-6 tracking-tighter leading-tight">
              About <span className="text-[#60a5fa] font-semibold">Epiphany Unlimited, Inc.</span>
            </h1>
            <p className="text-2xl font-serif-brand italic text-white/90 leading-snug">
              “Everything I do is for ease and flow.”
            </p>
          </header>

          <div className="space-y-12 text-lg leading-relaxed text-white/80 font-geist font-light">
            <section className="space-y-6">
              <p>
                At <strong>Epiphany Unlimited, Inc.</strong>, that line is more than a clever phrase—it is the lens for every decision, design, and deliverable. 
              </p>
              <p>
                For us, “for ease and flow” has a specific meaning:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/[0.08] transition-colors">
                  <h3 className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-4">4E’s</h3>
                  <p className="text-sm leading-relaxed">Everything is done <em>empathetically</em>, to <em>empower</em>, with <em>enlightenment</em> and <em>enlivenment</em>.</p>
                </div>
                <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/[0.08] transition-colors">
                  <h3 className="text-purple-400 font-bold uppercase tracking-widest text-xs mb-4">F.L.O.W.</h3>
                  <p className="text-sm leading-relaxed">We move <em>For Love Of Whatever</em> drives you: your goals, your people, your why.</p>
                </div>
              </div>
              <p>This philosophy keeps your projects human, intuitive, and aligned with what matters most to you.</p>
            </section>

            <section className="space-y-8">
              <h2 className="text-3xl font-semibold text-white tracking-tight border-b border-white/10 pb-4">What You Can Expect With Us</h2>
              <p>Epiphany Unlimited is built on five <strong>energy conductors</strong> that shape how we work with every client and collaborator. These are our internal “energy KPIs” that tell us if something is truly in alignment:</p>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { t: 'Customer Passion', d: 'Your outcomes are our obsession.' },
                  { t: 'Integrity', d: 'Clear, honest, and values-driven from start to finish.' },
                  { t: 'Speed', d: 'We move quickly without sacrificing quality or thought.' },
                  { t: 'Synchronization', d: 'People, processes, and platforms pulled into the same rhythm.' },
                  { t: 'Communication', d: 'No jargon walls; just real, ongoing, two-way clarity.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all">
                    <span className="text-blue-500 font-black text-xl opacity-50">0{i+1}</span>
                    <div>
                      <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-1">{item.t}</h4>
                      <p className="text-white/60 text-sm">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-white/50 italic">Whether it is SaaS, done-for-you services, consultations, or digital products, these are the standards you can feel in every interaction.</p>
            </section>

            <section className="space-y-8">
              <h2 className="text-3xl font-semibold text-white tracking-tight border-b border-white/10 pb-4">How We Define Success</h2>
              <div className="p-10 bg-gradient-to-br from-blue-500/10 via-black/20 to-purple-500/10 rounded-3xl border border-white/10 text-center shadow-inner">
                <p className="text-4xl md:text-5xl font-geist font-black tracking-tighter text-white mb-6">
                  Passion + Focus + Follow Through = Success
                </p>
                <p className="text-white/70 max-w-2xl mx-auto">
                  This is how priorities are set, progress is measured, and ideas are turned into real outcomes. It guides how Epiphany Unlimited designs systems, builds workflows, and supports you in moving from “idea” to “implemented.”
                </p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-semibold text-white tracking-tight border-b border-white/10 pb-4">The Vision Behind Epiphany Unlimited</h2>
              <p>
                Epiphany Unlimited exists for people and businesses who know they are capable of more—but feel blocked by tools, tech, or traditional systems.
              </p>
              <p>
                The vision: to help people who have been displaced, redirected, or simply ready for a new chapter become <strong>empathetically empowered, enlightened, and enlivened</strong> through creative technology solutions. That might look like clearer automations, smarter SaaS stacks, unique tool mashups, or digital resources that finally “click” for how your brain and business work.
              </p>
              <p>
                The core belief: the tools to transform your situation already exist. The shift happens when someone shows you how to connect and use them in ways that fit <em>you</em>.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-semibold text-white tracking-tight border-b border-white/10 pb-4">Experience You Can Lean On</h2>
              <p>
                After 30+ years in <strong>I.T. in corporate America</strong>, navigating a minefield of restructures, shifting priorities, and layoff waves, Epiphany Unlimited was born from a decision: to create stability from the inside out, not wait for it from the outside in.
              </p>
              <p>
                As a <strong>process improvement consultant and Six Sigma Green Belt</strong>, this work is grounded in both creativity and rigor:
              </p>
              <ul className="list-disc list-inside space-y-3 pl-4 text-white/70">
                <li>Mapping and improving processes, not just patching pain points.</li>
                <li>Reducing friction and waste so your time and energy go where they matter most.</li>
                <li>Turning complex systems into clean, repeatable flows that feel natural to use.</li>
              </ul>
              <p>
                This is also why Epiphany Unlimited is committed to offering <strong>free digital products</strong> and openly sharing “recipes” and mashups for tools that other providers might treat like secrets. The philosophy here: the pie is getting bigger—there is room for all of us to win.
              </p>
            </section>

            <footer className="pt-12 border-t border-white/10">
              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="shrink-0 w-24 h-24 rounded-full bg-white/10 border border-white/20 flex items-center justify-center overflow-hidden">
                   <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                </div>
                <div className="flex-grow">
                  <h3 className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-2">Founder’s Note</h3>
                  <p className="text-2xl font-semibold text-white mb-6">Brian Ballentine, Founder & CEO</p>
                  <p className="text-lg italic text-white/60 leading-relaxed border-l-2 border-blue-500/30 pl-8">
                    "Hi, and welcome to <strong>EpiphanyUnltd.com</strong>. <br /><br />
                    Epiphany Unlimited started with a personal realization: waiting for corporate structures to protect my future was never going to be enough. I had to redesign the way I worked, thought, and used technology—so that my security and creativity came from within, not from a job title. <br /><br />
                    Now, my work is about shortening that journey for you. Whether you are rebuilding after a layoff, reimagining a business, or reinventing how you serve your customers, my role is to help you find your own “ease and flow”—your 4E’s and your F.L.O.W.—and to back it up with smart systems that actually work in real life."
                  </p>
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