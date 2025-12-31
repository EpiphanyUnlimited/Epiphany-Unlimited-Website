import React, { useEffect, useRef, useState } from 'react';

const packages = [
  "Custom SAAS + AI Marketing Plan + AI Ad Spec Video",
  "AI Audit + Custom AI Automation + Website Redesign",
  "AI Story Telling Coaching + AI Tools Consultation",
  "Custom AI Avatar + AI Voice Agent + Landing Page",
  "Business Plan + Brand Book + Project Requirements + Road Map",
  "Process Map and SOP Inventory + Knowledge Base"
];

const HeroVisual: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentPkg, setCurrentPkg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPkg(prev => (prev + 1) % packages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    const particles: Particle[] = [];
    const particleCount = 60;
    const connectionDistance = 150;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(96, 165, 250, 0.8)';
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw grid background
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update and Draw Connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update();
        p1.draw();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const opacity = 1 - (dist / connectionDistance);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(147, 197, 253, ${opacity * 0.4})`;
            ctx.lineWidth = opacity * 1.5;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full h-full glass-card rounded-3xl overflow-hidden border-white/20 shadow-2xl bg-black/60">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      
      {/* Dynamic Package Overlay */}
      <div className="absolute inset-0 flex items-center justify-center p-8 text-center pointer-events-none">
        <div key={currentPkg} className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[9px] font-black uppercase tracking-[0.4em] mb-4">
            System Configuration
          </div>
          <h3 className="text-xl md:text-3xl font-geist font-black text-white leading-tight max-w-lg drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            {packages[currentPkg]}
          </h3>
          <div className="flex justify-center gap-1 mt-6">
            {packages.map((_, i) => (
              <div key={i} className={`h-1 transition-all duration-500 rounded-full ${i === currentPkg ? 'w-8 bg-blue-400' : 'w-2 bg-white/10'}`} />
            ))}
          </div>
        </div>
      </div>
      
      {/* Overlay Blueprint aesthetics */}
      <div className="absolute top-6 left-6 text-[10px] font-mono text-blue-400 opacity-60 flex flex-col gap-1">
        <span>ARCH: SCALE_V4</span>
        <span>MODALITY: AI_HYBRID</span>
        <span>STATUS: ACTIVE_SYNC</span>
      </div>
      
      <div className="absolute bottom-6 right-6">
        <div className="p-3 bg-blue-500/10 backdrop-blur-md rounded-xl border border-blue-500/30">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-[10px] font-bold text-blue-400 tracking-widest uppercase">Epiphany Visualizer</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;