import React, { useEffect, useRef, useState } from 'react';

const IntroScrollSequence: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [isVisible, setIsVisible] = useState(true);

  const frameCount = 151; // Total number of frames

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const imgArray: HTMLImageElement[] = [];

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      // Pad with zeros: 1 -> 001.jpg
      const paddedIndex = i.toString().padStart(3, '0');

      // Asset Switch Logic:
      // Frame 1 and 151 are transparent PNGs (based on user request)
      // All others are JPGs
      if (i === 1 || i === 151) {
        img.src = `/logo_sequence/${paddedIndex}.png`;
      } else {
        img.src = `/logo_sequence/${paddedIndex}.jpg`;
      }

      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          setIsLoaded(true);
        }
      };
      // Handle error just in case, fallback to jpg if png missing?
      img.onerror = () => {
        // Fallback or just log
        console.error(`Failed to load frame ${i}`);
      };

      imgArray.push(img);
    }
    setImages(imgArray);
  }, []);

  // Update canvas on scroll
  // Update canvas on scroll
  useEffect(() => {
    if (!canvasRef.current || images.length === 0 || !isLoaded) return;

    const context = canvasRef.current.getContext('2d');
    if (!context) return;

    // Render frame with 100% -> 50% scaling logic
    const renderFrameWithProgress = (index: number, prog: number) => {
      // Ensure we have a valid image and canvas
      if (!images[index] || !canvasRef.current) return;

      const img = images[index];
      const canvas = canvasRef.current;

      // Clear before drawing and fill with black (for transparency composition)
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = 'black';
      context.fillRect(0, 0, canvas.width, canvas.height);

      // Scale Logic: 
      // User request: "Increase the size... to fit the screen"
      const sizeFactor = 1.0;

      // Base scale: "contain" (Math.min) ensures full visibility without cropping (responsive)
      // "cover" (Math.max) clips edges.
      const baseScale = Math.min(canvas.width / img.width, canvas.height / img.height);
      const finalScale = baseScale * sizeFactor;

      // Center the image
      const x = (canvas.width / 2) - (img.width / 2) * finalScale;
      const y = (canvas.height / 2) - (img.height / 2) * finalScale;

      context.drawImage(img, x, y, img.width * finalScale, img.height * finalScale);
    };

    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();

      // Calculate progress relative to the container scrolling into view
      let progress = -rect.top / (rect.height - window.innerHeight);
      progress = Math.max(0, Math.min(progress, 1));

      // 1. Determine Frame Index
      // Logic Update: Finish animation by 85% scroll so we can see the last frame
      const animationProgress = Math.min(1, progress / 0.85); // 0 -> 0.85 maps to 0 -> 1.0

      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(animationProgress * frameCount)
      );

      // Render with current progress for scaling (passing raw progress)
      requestAnimationFrame(() => renderFrameWithProgress(frameIndex, progress));

      // 2. Opacity / Reveal Logic
      // Removing fade. Element stays visible and naturally scrolls up with the page.
      setOpacity(1);
      setIsVisible(true);
    };

    // Resize handler
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Trigger a re-render if possible, or wait for next scroll
        // For now, we can just call it with 0 progress to reset or keep it simple
        // Ideally we'd need the current progress, but scroll event fires continuously usually
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    // Initial setup
    handleResize();
    renderFrameWithProgress(0, 0);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isLoaded, images]);

  return (
    <div
      ref={containerRef}
      className="relative z-50 bg-black"
      style={{ height: '500vh' }} // Defines how long the scroll is
    >
      <div
        className="sticky top-0 h-screen w-full overflow-hidden"
        style={{ opacity: opacity, display: isVisible ? 'block' : 'none' }}
      >
        <canvas
          ref={canvasRef}
          className="w-full h-full"
        />

        {/* Loading Indicator */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black text-white">
            <p className="animate-pulse">Loading Experience...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default IntroScrollSequence;
