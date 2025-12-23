import React, { useEffect, useRef, useState } from 'react';
import AnimatedLogo from './AnimatedLogo';

const names = [
  "Michael", "Rachel", "Patricia", "Jayne", "Willard", "Lisa", "Lisa", "Mary", "Kevin", "Johnny", 
  "Steven", "Deanne", "Robert", "Barbara", "Alexis", "Tom", "Marsha", "Stephanie", "Stephanie", 
  "Curtis", "Genna", "Niko", "Neli", "Aliyah", "Aasir", "Aurea", "Gage", "Sage", "Marc", "Mike", 
  "Dennis", "Melissa", "Melissa", "Scott", "Spirit", "Destiny", "Faith", "Charlee", "Denise", 
  "Malcolm", "Micah", "Henny", "Ray", "Chris", "Kwon", "Tiff", "Karen", "Mary", "Joe", "Tim", 
  "Tim", "Tricky", "Ernie", "Stacy", "Wuan", "Emily", "Crissie", "Jason", "Jacob", "Carter", 
  "Dave", "Pat", "Lisa", "Guy", "Lysette", "Drew", "Juan", "Mateo", "Leelee", "Isa", "Angie", 
  "Matthew", "Joseph", "Isabel", "Isabella", "William", "Will", "Larry", "Van", "Toshmeeka", 
  "Eugene", "Geno", "Bridget", "Bridget", "Mike", "Amber", "Angel", "Jackie", "Jessica", 
  "Landon", "Logan", "Danny", "Kristie", "Vanessa", "Janet", "Poe", "Martine", "Phanna", 
  "Mouks", "Darrell", "Theresa", "Meagan", "Austin", "Nathan", "Amelia", "Roman", "Dawson", 
  "Bryan", "Bryan", "Greg", "Lenys", "Barb", "John", "Aaron", "Aaron", "Jake", "Behatilife", 
  "Roseology", "Jhadina", "Draconic", "Di", "Sandra", "Frank", "Troy", "Matt", "Lizza", 
  "Alicia", "Ryan", "Stacy", "Charles", "Geneva", "Jason"
];

interface Particle {
  name: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  targetVx: number;
  targetVy: number;
  size: number;
  colorIndex: number;
}

const gradients = [
  "from-blue-400 to-gray-300",
  "from-purple-500 to-gray-400",
  "from-cyan-400 to-gray-300",
  "from-blue-600 to-purple-400",
  "from-gray-200 to-blue-400"
];

const ThankYou: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const requestRef = useRef<number>(0);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const initialParticles: Particle[] = names.map((name) => ({
      name,
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      targetVx: (Math.random() - 0.5) * 1.5,
      targetVy: (Math.random() - 0.5) * 1.5,
      size: 1.0 + Math.random() * 0.5,
      colorIndex: Math.floor(Math.random() * gradients.length)
    }));

    setParticles(initialParticles);

    const animate = () => {
      setParticles((prev) => 
        prev.map((p) => {
          let newVx = p.vx + (p.targetVx - p.vx) * 0.05;
          let newVy = p.vy + (p.targetVy - p.vy) * 0.05;

          const centerX = window.innerWidth / 2;
          const centerY = window.innerHeight / 2;
          const dx = p.x - centerX;
          const dy = p.y - centerY;
          const distSq = dx * dx + dy * dy;
          
          const repulsionRadius = 500; 
          if (distSq < repulsionRadius * repulsionRadius) {
            const dist = Math.sqrt(distSq);
            const force = (repulsionRadius - dist) / repulsionRadius;
            newVx += (dx / dist) * force * 1.5;
            newVy += (dy / dist) * force * 1.5;
          }

          if (Math.random() < 0.01) {
            p.targetVx = (Math.random() - 0.5) * 4;
            p.targetVy = (Math.random() - 0.5) * 4;
          }

          let nextX = p.x + newVx;
          let nextY = p.y + newVy;

          if (nextX < 0 || nextX > window.innerWidth) newVx *= -1.1;
          if (nextY < 0 || nextY > window.innerHeight) newVy *= -1.1;

          return {
            ...p,
            x: nextX,
            y: nextY,
            vx: newVx,
            vy: newVy,
          };
        })
      );
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current!);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[200] bg-black overflow-hidden flex items-center justify-center cursor-default select-none"
      style={{
        background: 'radial-gradient(circle at 50% 50%, #001a33 0%, #000810 100%)'
      }}
    >
      {/* Background Logo: Scale reduced by 65% (from 3.0 to 1.05) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.15] scale-[1.05] pointer-events-none">
         <AnimatedLogo className="w-full h-full max-w-[80vh] max-h-[80vh]" />
      </div>

      <div className="text-center z-10 px-4 relative max-w-[95vw]">
        <div className="flex justify-center mb-8 animate-pulse-slow">
           <AnimatedLogo className="h-16 w-16" />
        </div>
        
        {/* Title reduced by 50% from previous version */}
        <h1 className="text-[3.5rem] md:text-[6.5rem] lg:text-[9rem] font-geist font-bold tracking-[-0.08em] leading-[0.75] text-white mb-12 drop-shadow-[0_0_100px_rgba(255,255,255,0.15)]">
          Heartfelt <br />
          <span className="gradient-text">Gratitude</span>
        </h1>

        {/* Description reduced by 50% */}
        <p className="text-white/50 max-w-4xl mx-auto text-base md:text-2xl uppercase tracking-[0.4em] font-light leading-tight">
          To the individuals and organizations that influenced our journey of growth and success.
        </p>
      </div>

      {/* Return button reduced by 50% */}
      <button 
        onClick={onClose}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 px-8 h-10 bg-white text-black font-black rounded-xl hover:bg-white/90 transition-all z-20 shadow-[0_0_40px_rgba(255,255,255,0.2)] text-sm uppercase tracking-[0.2em]"
      >
        Return to Site
      </button>

      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p, i) => (
          <div
            key={`${p.name}-${i}`}
            className={`absolute font-geist whitespace-nowrap bg-gradient-to-br ${gradients[p.colorIndex]} bg-clip-text text-transparent`}
            style={{
              left: p.x,
              top: p.y,
              transform: `translate(-50%, -50%) scale(${p.size})`,
              fontSize: '1.25rem',
              fontWeight: 800,
              opacity: 0.7,
            }}
          >
            {p.name}
          </div>
        ))}
      </div>

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full blueprint-bg opacity-15"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-blue-500/10 blur-[250px] rounded-full animate-pulse-slow"></div>
      </div>
    </div>
  );
};

export default ThankYou;