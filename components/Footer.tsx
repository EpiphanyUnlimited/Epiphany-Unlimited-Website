import React from 'react';
import AnimatedLogo from './AnimatedLogo';

interface FooterProps {
  onLegalClick: (type: 'privacy' | 'terms') => void;
}

const Footer: React.FC<FooterProps> = ({ onLegalClick }) => {
  return (
    <footer className="py-20 border-t border-white/5 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="col-span-1">
            <a href="#" className="flex items-center gap-3 mb-6 transition-opacity hover:opacity-90">
              <AnimatedLogo className="h-10 w-10" />
              <div className="flex flex-col -space-y-1">
                <span className="text-xl font-serif-brand text-gray-400">Epiphany</span>
                <span className="text-sm font-geist font-bold text-blue-400 tracking-tighter uppercase">Unlimited</span>
              </div>
            </a>
            <p className="text-white/40 text-sm leading-relaxed max-w-md">
              We turn insights into infinite growth for the world's most ambitious leaders through strategic architecture and creative intelligence.
            </p>
          </div>
          
          <div className="flex justify-start md:justify-end">
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Legal Governance</h4>
              <ul className="space-y-4 text-sm text-white/40">
                <li><button onClick={() => onLegalClick('privacy')} className="hover:text-white transition-colors text-left uppercase tracking-tighter font-medium">Privacy Governance</button></li>
                <li><button onClick={() => onLegalClick('terms')} className="hover:text-white transition-colors text-left uppercase tracking-tighter font-medium">Terms of Engagement</button></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5">
          <p className="text-[10px] text-white/20 uppercase tracking-widest font-bold">
            © 2024 Epiphany Unlimited. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/20 hover:text-white transition-colors text-[10px] uppercase tracking-widest font-bold flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;