import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Methodology from './components/Methodology';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import ThankYou from './components/ThankYou';
import About from './components/About';
import Products from './components/Products';
import ContactForm from './components/ContactForm';
import AdminDashboard from './components/AdminDashboard';
import ParallaxBackground from './components/ParallaxBackground';
import LegalOverlay from './components/LegalOverlay';
import ProcessCarousel from './components/ProcessCarousel';

import IntroScrollSequence from './components/IntroScrollSequence';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'products'>('home');
  const [showThankYou, setShowThankYou] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [showProcess, setShowProcess] = useState(false);
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | null>(null);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    if (currentPage === 'home') {
      const handleScroll = () => {
        const sections = ['home', 'services', 'methodology', 'consultation'];
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

        // Header visibility logic: Show after 400vh (IntroScrollSequence is 500vh)
        if (window.scrollY > window.innerHeight * 4) {
          setShowHeader(true);
        } else {
          setShowHeader(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [currentPage]);

  // Enhanced Scroll Reveal Observer
  useEffect(() => {
    const timer = setTimeout(() => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach(el => observer.observe(el));

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
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

    if (currentPage === 'products') {
      return <Products onBack={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} />;
    }

    return (
      <main>
        {/* Intro Scroll Sequence - Only for Home Page */}
        <IntroScrollSequence />

        <div id="home">
          <Hero
            onAboutClick={() => { setCurrentPage('about'); window.scrollTo(0, 0); }}
            onDiscoverClick={() => setShowProcess(true)}
          />
        </div>

        <div id="services">
          <Services onContactClick={() => setShowContact(true)} />
        </div>

        <div id="methodology">
          <Methodology />
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
      {showProcess && <ProcessCarousel onClose={() => setShowProcess(false)} />}
      {legalType && <LegalOverlay type={legalType} onClose={() => setLegalType(null)} />}

      <ParallaxBackground />

      {/* Dynamic Aura Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse-slow"></div>
        <div className="absolute top-[30%] -right-[5%] w-[40%] h-[40%] bg-indigo-700/10 blur-[120px] rounded-full animate-pulse-slow delay-1000"></div>
        <div className="absolute -bottom-[15%] left-[15%] w-[50%] h-[50%] bg-blue-900/15 blur-[120px] rounded-full animate-pulse-slow delay-2000"></div>
      </div>

      <div className={`transition-all duration-700 fixed top-0 left-0 right-0 z-50 ${showHeader || currentPage !== 'home' ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <Header
          activeSection={activeSection}
          onThankYouClick={() => setShowThankYou(true)}
          onContactClick={() => setShowContact(true)}
          onProductsClick={() => { setCurrentPage('products'); window.scrollTo(0, 0); }}
          isHome={currentPage === 'home'}
          onGoHome={() => setCurrentPage('home')}
        />
      </div>

      {renderContent()}

      <Footer onLegalClick={(type) => setLegalType(type)} />
    </div>
  );
};

export default App;