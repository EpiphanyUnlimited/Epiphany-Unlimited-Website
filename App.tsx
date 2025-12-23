import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Methodology from './components/Methodology';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import ThankYou from './components/ThankYou';
import ParallaxBackground from './components/ParallaxBackground';
import LegalOverlay from './components/LegalOverlay';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showThankYou, setShowThankYou] = useState(false);
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'methodology', 'impact', 'consultation'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          if (scrollPos >= element.offsetTop && scrollPos < element.offsetTop + element.offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen text-white selection:bg-blue-500/30">
      {showThankYou && <ThankYou onClose={() => setShowThankYou(false)} />}
      {legalType && <LegalOverlay type={legalType} onClose={() => setLegalType(null)} />}
      
      <ParallaxBackground />

      {/* Dynamic Aura Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse-slow"></div>
        <div className="absolute top-[30%] -right-[5%] w-[40%] h-[40%] bg-indigo-700/10 blur-[120px] rounded-full animate-pulse-slow delay-1000"></div>
        <div className="absolute -bottom-[15%] left-[15%] w-[50%] h-[50%] bg-blue-900/15 blur-[120px] rounded-full animate-pulse-slow delay-2000"></div>
      </div>

      <Header activeSection={activeSection} onThankYouClick={() => setShowThankYou(true)} />
      
      <main>
        <div id="home">
          <Hero />
        </div>
        
        <div id="services">
          <Services />
        </div>

        <div id="methodology">
          <Methodology />
        </div>

        <div id="impact">
          <Testimonials />
        </div>

        <div id="consultation">
          <Pricing />
        </div>
      </main>

      <Footer onLegalClick={(type) => setLegalType(type)} />
    </div>
  );
};

export default App;