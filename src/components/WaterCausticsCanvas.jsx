import React, { useEffect, useRef } from 'react';

/**
 * World-class 60fps Water Caustics Canvas — Light Theme & Mobile Optimized
 * Renders gentle refractive caustic light patterns, sunlight beams,
 * floating micro-droplets, and touch/mouse ripples with adaptive DPR.
 */
export default function WaterCausticsCanvas({ className = '', theme = 'light' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Support transparent alpha for seamless layering with white backgrounds & video
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId;
    let isVisible = true;
    let isTabActive = !document.hidden;
    let width = 0;
    let height = 0;
    let time = 0;

    const isMobile = window.innerWidth < 768;
    const ripples = [];
    const particleCount = isMobile ? 12 : 30;
    const particles = [];

    const initParticles = (w, h) => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          radius: Math.random() * (isMobile ? 1.5 : 2.0) + 0.5,
          speedY: Math.random() * 0.35 + 0.12,
          opacity: Math.random() * 0.25 + 0.1,
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    const handleResize = () => {
      const isNowMobile = window.innerWidth < 768;
      const dpr = isNowMobile ? Math.min(window.devicePixelRatio || 1, 1.25) : Math.min(window.devicePixelRatio || 1, 1.75);
      
      width = canvas.parentElement ? canvas.parentElement.clientWidth : window.innerWidth;
      height = canvas.parentElement ? canvas.parentElement.clientHeight : window.innerHeight;
      
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.scale(dpr, dpr);
      initParticles(width, height);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const triggerRipple = (x, y) => {
      if (ripples.length < 6) {
        ripples.push({
          x,
          y,
          radius: 2,
          maxRadius: Math.random() * 50 + 35,
          opacity: 0.35,
          speed: Math.random() * 1.0 + 0.8,
        });
      }
    };

    const handleMouseMove = (e) => {
      if (isMobile) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (Math.random() > 0.8) {
        triggerRipple(x, y);
      }
    };

    const handleTouchStart = (e) => {
      if (e.touches && e.touches[0]) {
        const rect = canvas.getBoundingClientRect();
        const x = e.touches[0].clientX - rect.left;
        const y = e.touches[0].clientY - rect.top;
        triggerRipple(x, y);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    canvas.addEventListener('touchstart', handleTouchStart, { passive: true });

    const handleVisibilityChange = () => {
      isTabActive = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    const render = () => {
      // ── CRITICAL PERFORMANCE GUARD ──────────────────────────────
      // Only schedule next frame — don't draw — when hidden or offscreen
      if (!isVisible || !isTabActive || prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      time += 0.012;

      ctx.clearRect(0, 0, width, height);

      if (theme === 'dark') {
        const baseGrad = ctx.createLinearGradient(0, 0, 0, height);
        baseGrad.addColorStop(0, '#040d1a');
        baseGrad.addColorStop(0.5, '#061324');
        baseGrad.addColorStop(1, '#02060d');
        ctx.fillStyle = baseGrad;
        ctx.fillRect(0, 0, width, height);
      }

      // 1. Downward Volumetric Sun Rays
      ctx.save();
      ctx.globalCompositeOperation = theme === 'dark' ? 'screen' : 'multiply';
      const rayCount = isMobile ? 3 : 5;
      for (let r = 0; r < rayCount; r++) {
        const rayAngle = 0.12 + (r - (rayCount / 2)) * 0.07;
        const originX = width * 0.5 + (r - (rayCount / 2)) * (width * 0.22) + Math.sin(time * 0.35 + r) * 20;
        const rayGrad = ctx.createLinearGradient(originX, 0, originX + Math.tan(rayAngle) * height, height);
        
        const pulse = Math.sin(time * 0.7 + r * 1.5) * 0.02 + 0.035;
        if (theme === 'dark') {
          rayGrad.addColorStop(0, `rgba(56, 189, 248, ${pulse * 1.5})`);
          rayGrad.addColorStop(0.6, `rgba(0, 210, 255, ${pulse * 0.7})`);
          rayGrad.addColorStop(1, 'rgba(0, 210, 255, 0)');
        } else {
          rayGrad.addColorStop(0, `rgba(2, 132, 199, ${pulse * 0.6})`);
          rayGrad.addColorStop(0.6, `rgba(56, 189, 248, ${pulse * 0.3})`);
          rayGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
        }

        ctx.fillStyle = rayGrad;
        ctx.beginPath();
        ctx.moveTo(originX - 30, 0);
        ctx.lineTo(originX + 30, 0);
        ctx.lineTo(originX + Math.tan(rayAngle) * height + 160, height);
        ctx.lineTo(originX + Math.tan(rayAngle) * height - 160, height);
        ctx.closePath();
        ctx.fill();
      }
      ctx.restore();

      // 2. Caustic Refraction Mesh
      if (!prefersReducedMotion) {
        ctx.save();
        ctx.globalCompositeOperation = theme === 'dark' ? 'screen' : 'source-over';

        const gridSize = isMobile ? 65 : 45;
        const cols = Math.ceil(width / gridSize) + 1;
        const rows = Math.ceil((height * 0.75) / gridSize) + 1;

        for (let y = 0; y < rows; y++) {
          ctx.beginPath();
          for (let x = 0; x < cols; x++) {
            const posX = x * gridSize;
            const posY = y * gridSize;

            const wave = Math.sin(x * 0.28 + time * 1.0) * Math.cos(y * 0.28 + time * 0.8) * (isMobile ? 6 : 8);
            const depthFade = Math.max(0, 1 - (posY / (height * 0.75)));
            
            const strokeAlpha = theme === 'dark' ? 0.045 * depthFade : 0.065 * depthFade;
            ctx.strokeStyle = theme === 'dark' 
              ? `rgba(0, 210, 255, ${strokeAlpha})` 
              : `rgba(2, 132, 199, ${strokeAlpha})`;
            ctx.lineWidth = 1.0;

            const drawX = posX + wave;
            const drawY = posY + wave * 0.5;

            if (x === 0) {
              ctx.moveTo(drawX, drawY);
            } else {
              ctx.lineTo(drawX, drawY);
            }
          }
          ctx.stroke();
        }
        ctx.restore();
      }

      // 3. Subtle Interactive Ripples
      if (ripples.length > 0) {
        ctx.save();
        for (let i = ripples.length - 1; i >= 0; i--) {
          const rp = ripples[i];
          rp.radius += rp.speed;
          rp.opacity *= 0.95;

          ctx.strokeStyle = theme === 'dark'
            ? `rgba(56, 189, 248, ${rp.opacity * 0.4})`
            : `rgba(2, 132, 199, ${rp.opacity * 0.35})`;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.ellipse(rp.x, rp.y, rp.radius * 1.3, rp.radius * 0.65, 0, 0, Math.PI * 2);
          ctx.stroke();

          if (rp.opacity < 0.01 || rp.radius > rp.maxRadius) {
            ripples.splice(i, 1);
          }
        }
        ctx.restore();
      }

      // 4. Floating Micro-Bubbles
      if (!prefersReducedMotion) {
        ctx.save();
        particles.forEach((p) => {
          p.y -= p.speedY;
          p.x += Math.sin(time + p.phase) * 0.25;

          if (p.y < -10) {
            p.y = height + 10;
            p.x = Math.random() * width;
          }

          ctx.fillStyle = theme === 'dark'
            ? `rgba(186, 230, 253, ${p.opacity})`
            : `rgba(2, 132, 199, ${p.opacity * 0.45})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        });
        ctx.restore();
      }

      // Always schedule next frame (guard at top handles the no-draw case)
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-auto ${className}`}
      style={{ zIndex: 0 }}
    />
  );
}
