import React, { useEffect, useRef, useState } from 'react';
import AnimatedLogo from './AnimatedLogo';

const ParallaxBackground: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll, { passive: true });

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const drawLogoBackground = () => {
      time += 0.015;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Subtle Parallax Scroll Effect
      const ty = offsetY * 0.12;

      ctx.save();
      ctx.translate(centerX, centerY + ty);
      
      const scale = Math.min(canvas.width, canvas.height) * 0.006; 
      ctx.scale(scale, scale);

      // 1. Draw Energy Rays
      ctx.save();
      for (let i = 0; i < 12; i++) {
        const rayAngle = (i * 30 * Math.PI) / 180;
        const shimmer = (Math.sin(time * 2 + i) * 0.5 + 0.5) * 0.15 + 0.05;
        
        ctx.beginPath();
        ctx.setLineDash([2, 4]);
        ctx.moveTo(0, 0);
        ctx.lineTo(Math.cos(rayAngle) * 60, Math.sin(rayAngle) * 60);
        ctx.strokeStyle = `rgba(255, 255, 255, ${shimmer})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
      ctx.restore();

      // 2. Draw Lightbulb Frame
      ctx.beginPath();
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = 'rgba(96, 165, 250, 0.2)';
      
      ctx.moveTo(-40, 40);
      ctx.bezierCurveTo(-80, -20, -60, -80, 0, -80);
      ctx.bezierCurveTo(60, -80, 80, -20, 40, 40);
      ctx.lineTo(40, 60);
      ctx.lineTo(-40, 60);
      ctx.closePath();
      ctx.stroke();

      for(let i=0; i<3; i++) {
        ctx.beginPath();
        ctx.moveTo(-30, 70 + i * 10);
        ctx.lineTo(30, 70 + i * 10);
        ctx.stroke();
      }

      // 3. Draw 3D-feeling Atom Orbits
      const drawOrbit = (rx: number, ry: number, rotateAngle: number, speed: number, color: string) => {
        ctx.save();
        ctx.rotate(rotateAngle);
        
        ctx.beginPath();
        ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.lineWidth = 0.3;
        ctx.stroke();

        const pos = time * speed;
        const ex = rx * Math.cos(pos);
        const ey = ry * Math.sin(pos);

        ctx.beginPath();
        ctx.arc(ex, ey, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = color;
        ctx.fill();
        
        ctx.restore();
      };

      ctx.save();
      drawOrbit(45, 18, Math.PI / 4, 1.2, '#60a5fa');
      drawOrbit(45, 18, -Math.PI / 4, 1.5, '#c084fc');
      drawOrbit(45, 18, Math.PI / 2, 0.9, '#fff');

      const corePulse = Math.sin(time * 4) * 2 + 8;
      const coreGlow = ctx.createRadialGradient(0, 0, 0, 0, 0, corePulse * 2.5);
      coreGlow.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
      coreGlow.addColorStop(0.4, 'rgba(96, 165, 250, 0.3)');
      coreGlow.addColorStop(1, 'transparent');
      
      ctx.fillStyle = coreGlow;
      ctx.beginPath();
      ctx.arc(0, 0, corePulse * 2.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      ctx.restore();

      animationFrameId = requestAnimationFrame(drawLogoBackground);
    };

    drawLogoBackground();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [offsetY]);

  return (
    <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
      {/* Replicating the 'AnimatedLogo' background from the gratitude page for consistent branding */}
      <div 
        className="absolute inset-0 flex items-center justify-center opacity-[0.05] scale-[1.8] pointer-events-none blur-[2px]"
        style={{ transform: `translateY(${offsetY * 0.05}px) scale(1.8)` }}
      >
         <AnimatedLogo className="w-full h-full max-w-[90vh] max-h-[90vh]" />
      </div>

      <canvas 
        ref={canvasRef} 
        className="w-full h-full opacity-[0.18]"
      />
    </div>
  );
};

export default ParallaxBackground;