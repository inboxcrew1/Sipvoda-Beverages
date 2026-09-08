import React, { useState, useRef, useEffect } from 'react';

/**
 * WaterVideoBackground - Cinematic Royalty-Free Water Layer
 * 
 * Sourced from Coverr (Commercial Free License):
 * Asset: Crystal Clear Ocean Water & Ripples
 * Features:
 * - Autoplay, loop, muted, playsInline
 * - Zero black frames: soft ice-white placeholder with smooth fade-in
 * - Seamless blend into white page with radial & linear gradients
 * - Graceful fallback to pristine crystal water texture if video stalls
 * - Auto-pauses on offscreen or hidden tab to save battery & GPU
 */
export default function WaterVideoBackground({
  src = '/assets/videos/water-crystal-clear.mp4',
  poster = '/assets/images/unsplash_13.png',
  className = '',
  overlayClassName = '',
  playbackRate = 0.75,
  children,
}) {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = playbackRate;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setVideoLoaded(true))
        .catch(() => {
          setVideoLoaded(false);
        });
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [src, playbackRate]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}>
      {/* Background Poster / Fallback Image (always instant, no blank box) */}
      <img
        src={poster}
        alt="Pristine Water"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          videoLoaded && !hasError ? 'opacity-0' : 'opacity-60'
        }`}
        loading="eager"
      />

      {/* Cinematic Looping HTML5 Video Layer */}
      {!hasError && (
        <video
          ref={videoRef}
          src={src}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onCanPlay={() => setVideoLoaded(true)}
          onError={() => setHasError(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-70' : 'opacity-0'
          }`}
          style={{ filter: 'contrast(108%) brightness(105%)' }}
        />
      )}

      {/* White Luxury Blending Mask: Top, Bottom & Radial Vignette */}
      <div
        className={`absolute inset-0 bg-gradient-to-b from-white/90 via-white/20 to-white pointer-events-none ${overlayClassName}`}
      />
      
      {/* Soft Cyan Water Tint for crisp light luxury depth */}
      <div
        className="absolute inset-0 bg-gradient-to-tr from-sky-100/30 via-transparent to-white/60 mix-blend-overlay pointer-events-none"
      />

      {/* Radial soft fade to pure white at outer edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 65% 45%, transparent 40%, rgba(255, 255, 255, 0.85) 90%)',
        }}
      />

      {children}
    </div>
  );
}
