import React from 'react';

/**
 * WaterDropRipple - Elegant Physics-Inspired Water Droplet Micro-Animation
 * 
 * Demonstrates:
 * 1. A crystal water droplet descending slowly from above.
 * 2. Subtle splash impact at the water surface boundary.
 * 3. Expanding concentric circular ripples that visually flow into the white transition zone.
 */
export default function WaterDropRipple({ className = '' }) {
  return (
    <div className={`relative flex flex-col items-center justify-center pointer-events-none select-none ${className}`}>
      {/* Falling Crystal Water Droplet */}
      <div className="relative w-8 h-12 flex items-center justify-center">
        <div
          className="w-2.5 h-3.5 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] bg-gradient-to-b from-sky-300 via-azure-500 to-azure-700 shadow-[0_2px_8px_rgba(2,132,199,0.35)] animate-drop"
          style={{
            clipPath: 'polygon(50% 0%, 100% 70%, 75% 100%, 25% 100%, 0% 70%)',
          }}
        />
      </div>

      {/* Surface Impact & Concentric Ripples */}
      <div className="relative w-48 h-12 flex items-center justify-center -mt-3">
        {/* Ripple 1 */}
        <span
          className="absolute rounded-full border border-azure-500/40 animate-ripple-expand"
          style={{
            width: '32px',
            height: '14px',
            animationDelay: '1.4s',
          }}
        />
        {/* Ripple 2 */}
        <span
          className="absolute rounded-full border border-sky-400/30 animate-ripple-expand"
          style={{
            width: '48px',
            height: '20px',
            animationDelay: '1.8s',
          }}
        />
        {/* Ripple 3 */}
        <span
          className="absolute rounded-full border border-azure-400/20 animate-ripple-expand"
          style={{
            width: '64px',
            height: '26px',
            animationDelay: '2.2s',
          }}
        />
        
        {/* Subtle Liquid Glow Point */}
        <div className="w-2 h-1 bg-azure-400/60 rounded-full blur-[1px] animate-pulse" />
      </div>
    </div>
  );
}
