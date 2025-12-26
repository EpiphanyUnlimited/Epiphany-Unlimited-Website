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
  z: number;
  vx: number;
  vy: number;
  vz: number;
  targetVx: number;
  targetVy: number;
  targetVz: number;
  size: number;
  colorIndex: number;
}

const gradients = [
  "from-blue-400 to-indigo-500",
  "from-purple-500 to-pink-400",
  "from-cyan-400 to-blue-600",
  "from-indigo-600 to-purple-400",
  "from-blue-500 to-teal-300"
];

const ThankYou: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [scrollOffset, setScrollOffset] = useState(0);
  const mousePos = useRef({ x: -1000, y: -1000 });
  const requestRef = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => setScrollOffset(window.pageYOffset);
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);

    const width = window.innerWidth;
    const height = window.innerHeight;

    // 30% Speed Multiplier applied to initial velocities
    const speedMult = 1.3;

    const initialParticles: Particle[] = names.map((name) => ({
      name,
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * 200 - 100,
      vx: (Math.random() - 0.5) * 0.8 * speedMult,
      vy: (Math.random() - 0.5) * 0.8 * speedMult,
      vz: (Math.random() - 0.5) * 0.5 * speedMult,
      targetVx: (Math.random() - 0.5) * 1.0 * speedMult,
      targetVy: (Math.random() - 0.5) * 1.0 * speedMult,
      targetVz: (Math.random() - 0.5) * 0.5 * speedMult,
      size: 0.8 + Math.random() * 1.2,
      colorIndex: Math.floor(Math.random() * gradients.length)
    }));

    setParticles(initialParticles);

    const animate = () => {
      setParticles((prev) => 
        prev.map((p) => {
          let newVx = p.vx + (p.targetVx - p.vx) * 0.026; 
          let newVy = p.vy + (p.targetVy - p.vy) * 0.026;
          let newVz = p.vz + (p.targetVz - p.vz) * 0.026;

          const mdx = p.x - mousePos.current.x;
          const mdy = p.y - mousePos.current.y;
          const mDistSq = mdx * mdx + mdy * mdy;
          const magneticRadius = 200;
          if (mDistSq < magneticRadius * magneticRadius) {
            const mDist = Math.sqrt(mDistSq);
            const mForce = ((magneticRadius - mDist) / magneticRadius) * 0.4;
            newVx += (mdx / mDist) * mForce;
            newVy += (mdy / mDist) * mForce;
          }

          const centerX = window.innerWidth / 2;
          const centerY = window.innerHeight / 2;
          const dx = p.x - centerX;
          const dy = p.y - centerY;
          const distSq = dx * dx + dy * dy;
          const repulsionRadius = 400; 

          if (distSq < repulsionRadius * repulsionRadius) {
            const dist = Math.sqrt(distSq);
            const force = (repulsionRadius - dist) / repulsionRadius;
            newVx += (dx / dist) * force * 0.5;
            newVy += (dy / dist) * force * 0.5;
          }

          if (Math.random() < 0.005) {
            p.targetVx = (Math.random() - 0.5) * 3.25; 
            p.targetVy = (Math.random() - 0.5) * 3.25; 
            p.targetVz = (Math.random() - 0.5) * 1.3;  
          }

          let nextX = p.x + newVx;
          let nextY = p.y + newVy;
          let nextZ = p.z + newVz;

          if (nextX < -150) nextX = window.innerWidth + 150;
          if (nextX > window.innerWidth + 150) nextX = -150;
          if (nextY < -150) nextY = window.innerHeight + 150;
          if (nextY > window.innerHeight + 150) nextY = -150;
          if (nextZ < -200) nextZ = 200;
          if (nextZ > 200) nextZ = -200;

          return {
            ...p,
            x: nextX,
            y: nextY,
            z: nextZ,
            vx: newVx,
            vy: newVy,
            vz: newVz
          };
        })
      );
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(requestRef.current!);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-[200] bg-black overflow-hidden flex items-center justify-center cursor-default select-none"
      style={{
        background: 'radial-gradient(circle at 50% 50%, #001a33 0%, #000810 100%)'
      }}
    >
      <div 
        className="absolute inset-0 flex items-center justify-center opacity-[0.12] scale-[2.18] pointer-events-none transition-transform duration-200 ease-out blur-[2px]"
        style={{ transform: `translateY(${scrollOffset * -0.05}px) scale(2.18)` }}
      >
         <AnimatedLogo className="w-full h-full max-w-[80vh] max-h-[80vh]" />
      </div>

      <div className="text-center z-10 px-4 relative max-w-[95vw] pointer-events-none">
        <div className="flex justify-center mb-8 animate-pulse-slow">
           <AnimatedLogo className="h-16 w-16" />
        </div>
        
        <h1 className="text-[3.5rem] md:text-[6.5rem] lg:text-[9rem] font-geist font-bold tracking-[-0.08em] leading-[0.75] text-white mb-12 drop-shadow-[0_0_100px_rgba(255,255,255,0.15)]">
          Heartfelt <br />
          <span className="gradient-text">Gratitude</span>
        </h1>

        <p className="text-white/50 max-w-4xl mx-auto text-sm md:text-xl uppercase tracking-[0.4em] font-light leading-tight">
          To the individuals and organizations that influenced our journey of growth and success.
        </p>
      </div>

      <button 
        onClick={onClose}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 px-8 h-10 bg-white text-black font-black rounded-xl hover:bg-white/90 transition-all z-[300] shadow-[0_0_40px_rgba(255,255,255,0.3)] text-sm uppercase tracking-[0.2em] active:scale-95"
      >
        Return to Site
      </button>

      <div className="absolute inset-0 pointer-events-none perspective-[1000px]">
        {particles.map((p, i) => {
          const depthScale = Math.max(0.4, 1 + p.z / 200);
          // Logo moves at -0.05, names move at -0.1 (twice the speed)
          const logoSpeed = -0.05;
          const nameSpeed = logoSpeed * 2;
          const parallaxY = scrollOffset * nameSpeed * depthScale;
          
          return (
            <div
              key={`${p.name}-${i}`}
              className={`absolute font-geist whitespace-nowrap bg-gradient-to-br ${gradients[p.colorIndex]} bg-clip-text text-transparent transition-opacity duration-1000`}
              style={{
                left: p.x,
                top: p.y + parallaxY,
                transform: `translate(-50%, -50%) scale(${p.size * depthScale})`,
                fontSize: '1rem',
                fontWeight: 900,
                opacity: 0.65 * depthScale,
                zIndex: Math.round(p.z + 100),
                filter: `blur(${Math.abs(p.z) / 45}px)`
              }}
            >
              {p.name}
            </div>
          );
        })}
      </div>

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full blueprint-bg opacity-15"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-blue-500/10 blur-[250px] rounded-full animate-pulse-slow"></div>
      </div>
    </div>
  );
};

export default ThankYou;