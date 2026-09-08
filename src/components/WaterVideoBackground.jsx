import React, { useState, useRef, useEffect } from 'react';

/**
 * WaterVideoBackground - Cinematic Royalty-Free Water Layer
 * Performance optimized:
 * - preload="none" on mobile, "metadata" on desktop (saves 3–6MB on page load)
 * - Pauses when tab hidden or scrolled offscreen (IntersectionObserver)
 * - Soft fade-in from poster so no blank frames on slow connections
 * - Graceful fallback if video fails to load
 */
export default function WaterVideoBackground({
  src = '/assets/videos/water-crystal-clear.mp4',
  poster = '/assets/images/unsplash_13.webp',
  className = '',
  overlayClassName = '',
  playbackRate = 0.7,
  children,
}) {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Detect mobile for lower-quality / reduced preload
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = playbackRate;

    // Pause/play based on visibility (tab switch)
    const handleVisibility = () => {
      if (document.hidden) {
        video.pause();
      } else {
        video.play().catch(() => {});
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    // Pause/play based on viewport intersection (saves GPU/battery when scrolled away)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(video);

    // Initial play attempt
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Auto-play blocked — poster shows, which is fine
      });
    }

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [src, playbackRate]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}>
      {/* Background Poster / Fallback Image */}
      <img
        src={poster}
        alt=""
        aria-hidden="true"
        width="1920"
        height="1080"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          videoLoaded && !hasError ? 'opacity-0' : 'opacity-60'
        }`}
        loading="eager"
        fetchpriority="low"
      />

      {/* Cinematic Looping HTML5 Video Layer */}
      {!hasError && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload={isMobile ? 'none' : 'metadata'}
          onCanPlay={() => setVideoLoaded(true)}
          onError={() => setHasError(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-70' : 'opacity-0'
          }`}
          style={{ filter: 'contrast(108%) brightness(105%)' }}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}

      {/* White Luxury Blending Mask */}
      <div
        className={`absolute inset-0 bg-gradient-to-b from-white/90 via-white/20 to-white pointer-events-none ${overlayClassName}`}
      />

      {/* Soft Cyan Water Tint */}
      <div
        className="absolute inset-0 bg-gradient-to-tr from-sky-100/30 via-transparent to-white/60 mix-blend-overlay pointer-events-none"
      />

      {/* Radial vignette */}
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

