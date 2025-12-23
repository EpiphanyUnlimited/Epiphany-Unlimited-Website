import React from 'react';
import AnimatedLogo from './AnimatedLogo';

interface HeaderProps {
  activeSection: string;
  onThankYouClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onThankYouClick }) => {
  const navItems = [
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Methodology', href: '#methodology', id: 'methodology' },
    { name: 'Impact', href: '#impact', id: 'impact' },
    { name: 'Consultation', href: '#consultation', id: 'consultation' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <a href="#" className="flex items-center gap-3 group transition-opacity hover:opacity-90">
            <AnimatedLogo className="h-10 w-10" />
            <div className="flex flex-col -space-y-1">
              <span className="text-xl font-serif-brand text-gray-400">Epiphany</span>
              <span className="text-sm font-geist font-bold text-blue-400 tracking-tighter uppercase">Unlimited</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'text-white bg-white/10' 
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={onThankYouClick}
              className="px-4 py-2 rounded-full text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 transition-all duration-300"
            >
              Gratitude
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <a 
              href="https://formwiz2.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:inline-flex h-9 items-center justify-center rounded-xl bg-white/5 border border-white/10 px-4 text-sm font-medium hover:bg-white/10 transition-colors"
            >
              FormWiz
            </a>
            <button className="h-9 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-black hover:bg-white/90 transition-all duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;