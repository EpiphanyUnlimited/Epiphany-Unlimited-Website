import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Methodology from './components/Methodology';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import ThankYou from './components/ThankYou';
import About from './components/About';
import ContactForm from './components/ContactForm';
import AdminDashboard from './components/AdminDashboard';
import ParallaxBackground from './components/ParallaxBackground';
import LegalOverlay from './components/LegalOverlay';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home');
  const [showThankYou, setShowThankYou] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | null>(null);

  useEffect(() => {
    if (currentPage === 'home') {
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
    }
  }, [currentPage]);

  // Handle hidden admin key trigger (Shift+A)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.shiftKey && e.key === 'A') {
        setShowAdmin(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const renderContent = () => {
    if (currentPage === 'about') {
      return <About onBack={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} />;
    }

    return (
      <main>
        <div id="home">
          <Hero onAboutClick={() => { setCurrentPage('about'); window.scrollTo(0, 0); }} />
        </div>
        
        <div id="services">
          <Services onContactClick={() => setShowContact(true)} />
        </div>

        <div id="methodology">
          <Methodology />
        </div>

        <div id="impact">
          <Testimonials />
        </div>

        <div id="consultation">
          <Pricing onContactClick={() => setShowContact(true)} />
        </div>
      </main>
    );
  };

  return (
    <div className="relative min-h-screen text-white selection:bg-blue-500/30">
      {showThankYou && <ThankYou onClose={() => setShowThankYou(false)} />}
      {showContact && <ContactForm onClose={() => setShowContact(false)} />}
      {showAdmin && <AdminDashboard onClose={() => setShowAdmin(false)} />}
      {legalType && <LegalOverlay type={legalType} onClose={() => setLegalType(null)} />}
      
      <ParallaxBackground />

      {/* Dynamic Aura Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse-slow"></div>
        <div className="absolute top-[30%] -right-[5%] w-[40%] h-[40%] bg-indigo-700/10 blur-[120px] rounded-full animate-pulse-slow delay-1000"></div>
        <div className="absolute -bottom-[15%] left-[15%] w-[50%] h-[50%] bg-blue-900/15 blur-[120px] rounded-full animate-pulse-slow delay-2000"></div>
      </div>

      <Header 
        activeSection={activeSection} 
        onThankYouClick={() => setShowThankYou(true)}
        onContactClick={() => setShowContact(true)}
        isHome={currentPage === 'home'}
        onGoHome={() => setCurrentPage('home')}
      />
      
      {renderContent()}

      <Footer onLegalClick={(type) => setLegalType(type)} />
    </div>
  );
};

export default App;