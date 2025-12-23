import React, { useEffect, useState } from 'react';
import AnimatedLogo from './AnimatedLogo';

const ParallaxBackground: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
      <div 
        className="absolute w-full h-full flex items-center justify-center transition-transform duration-150 ease-out"
        style={{ transform: `translateY(${offsetY * 0.1}px)` }}
      >
        <div className="relative w-[150vh] h-[150vh] opacity-[0.1] scale-[2.2]">
          <AnimatedLogo className="w-full h-full" />
        </div>
      </div>
      
      {/* Ambient background layering */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000810]/30 to-[#000810]/60" />
      <div className="absolute inset-0 blueprint-bg opacity-5 pointer-events-none" />
    </div>
  );
};

export default ParallaxBackground;