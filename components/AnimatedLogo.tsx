import React from 'react';

const AnimatedLogo: React.FC<{ className?: string }> = ({ className = "h-12 w-12" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className} group`}>
      <style>{`
        @keyframes orbit-vibrant-1 {
          0% { transform: rotateX(65deg) rotateY(0deg) rotateZ(0deg); }
          100% { transform: rotateX(65deg) rotateY(0deg) rotateZ(360deg); }
        }
        @keyframes orbit-vibrant-2 {
          0% { transform: rotateX(-65deg) rotateY(30deg) rotateZ(0deg); }
          100% { transform: rotateX(-65deg) rotateY(30deg) rotateZ(360deg); }
        }
        @keyframes orbit-vibrant-3 {
          0% { transform: rotateX(0deg) rotateY(75deg) rotateZ(0deg); }
          100% { transform: rotateX(0deg) rotateY(75deg) rotateZ(360deg); }
        }
        @keyframes nucleus-energy {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 10px #00f0ff) brightness(1); }
          50% { transform: scale(1.3); filter: drop-shadow(0 0 25px #bf00ff) brightness(1.5); }
        }
        @keyframes ray-shimmer {
          0%, 100% { opacity: 0.1; stroke-width: 0.5; }
          50% { opacity: 0.5; stroke-width: 1; }
        }
        .atom-core {
          perspective: 1000px;
          transform-style: preserve-3d;
        }
        .electron-orbit {
          position: absolute;
          border: 2px solid rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          width: 28px;
          height: 28px;
          box-shadow: 0 0 12px #00f0ff, inset 0 0 6px #bf00ff;
        }
      `}</style>
      
      {/* Radiating Energy Rays */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        <g>
          {[...Array(12)].map((_, i) => (
            <line 
              key={i}
              x1="50" y1="50" 
              x2={50 + 40 * Math.cos((i * 30 * Math.PI) / 180)} 
              y2={50 + 40 * Math.sin((i * 30 * Math.PI) / 180)}
              stroke="white" 
              style={{ 
                animation: `ray-shimmer ${1.5 + i * 0.1}s infinite ease-in-out`,
                opacity: 0.2
              }}
              strokeDasharray="1,3"
            />
          ))}
        </g>
      </svg>

      {/* Replicated Bulb Shape Frame */}
      <svg viewBox="0 0 24 24" fill="none" className="absolute inset-0 w-full h-full drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
        <path 
          d="M9 18h6m-3-15a7 7 0 0 0-7 7c0 2.5 2 4.5 2 7h10c0-2.5 2-4.5 2-7a7 7 0 0 0-7-7Z" 
          stroke="white" 
          strokeWidth="1.8" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="group-hover:stroke-blue-300 transition-colors"
        />
        <path d="M10 22h4" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>

      {/* Vibrant 3D Atom Core */}
      <div className="atom-core relative w-8 h-8 flex items-center justify-center -translate-y-1">
        <div className="electron-orbit" style={{ animation: 'orbit-vibrant-1 2.5s infinite linear' }}></div>
        <div className="electron-orbit" style={{ animation: 'orbit-vibrant-2 3.5s infinite linear' }}></div>
        <div className="electron-orbit" style={{ animation: 'orbit-vibrant-3 4.5s infinite linear' }}></div>
        <div 
          className="w-2.5 h-2.5 bg-white rounded-full relative z-10 shadow-[0_0_15px_#fff]" 
          style={{ animation: 'nucleus-energy 1.5s infinite ease-in-out' }}
        ></div>
      </div>
    </div>
  );
};

export default AnimatedLogo;