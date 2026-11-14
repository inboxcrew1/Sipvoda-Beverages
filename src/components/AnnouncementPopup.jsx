import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowRight, Droplets } from 'lucide-react';

/**
 * AnnouncementPopup - Executive Business Notice for SIPVODA
 * 
 * Announcement:
 * - Water bottle manufacturing and supply is currently unavailable
 * - Directs visitors to water plant & bottling machinery solutions
 * 
 * Easily update the destination URL below when the dedicated machinery page is launched.
 */
export const MACHINERY_PAGE_URL = '/water-plant-machinery';
const SESSION_STORAGE_KEY = 'sipvoda_machinery_notice_seen';

export default function AnnouncementPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    // Only display if visitor has not dismissed it in this browser session
    const hasBeenDismissed = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (hasBeenDismissed) return;

    // Elegant entrance delay so hero section paints smoothly first
    const timer = setTimeout(() => {
      setIsRendered(true);
      // Small tick to trigger CSS transition
      requestAnimationFrame(() => {
        setIsOpen(true);
      });
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  // Keyboard accessibility: ESC key to close
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleDismiss();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleDismiss = () => {
    setIsOpen(false);
    sessionStorage.setItem(SESSION_STORAGE_KEY, 'true');
    // Allow smooth fade-out animation before unmounting
    setTimeout(() => {
      setIsRendered(false);
    }, 300);
  };

  if (!isRendered) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="announcement-title"
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Dark Transparent Backdrop with soft blur */}
      <div
        onClick={handleDismiss}
        className="absolute inset-0 bg-navy-950/65 backdrop-blur-sm transition-opacity duration-300"
      />

      {/* Popup Modal Card */}
      <div
        className={`relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(10,30,63,0.35)] border border-slate-100/80 overflow-hidden transform transition-all duration-300 ease-out ${
          isOpen ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-2 opacity-0'
        }`}
      >
        {/* Subtle Decorative Aqua Ambient Radial Glow in Top Corner */}
        <div
          aria-hidden="true"
          className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-gradient-to-br from-azure-100/60 via-sky-100/30 to-transparent blur-2xl pointer-events-none"
        />

        {/* Close Button */}
        <button
          type="button"
          onClick={handleDismiss}
          aria-label="Close announcement"
          className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-navy-900 hover:bg-slate-100/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-azure-500/40 z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content Container */}
        <div className="relative flex flex-col items-center text-center">
          
          {/* Subtle Water Drop & Concentric Ripple Visual */}
          <div className="relative mb-4 flex items-center justify-center">
            {/* Concentric Ambient Ripples */}
            <span
              aria-hidden="true"
              className="absolute w-14 h-14 rounded-full border border-azure-300/40 animate-ping opacity-40 pointer-events-none"
            />
            <span
              aria-hidden="true"
              className="absolute w-20 h-20 rounded-full border border-sky-200/30 pointer-events-none"
            />

            {/* Central Water Droplet Badge */}
            <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-azure-50 via-sky-100/70 to-azure-100/50 border border-azure-200/80 flex items-center justify-center shadow-sm">
              <Droplets className="w-6 h-6 text-azure-600" />
            </div>
          </div>

          {/* Micro Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase bg-azure-50/80 text-azure-700 border border-azure-200/60 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-azure-500 animate-pulse" />
            <span>Important Notice</span>
          </div>

          {/* Headline */}
          <h2
            id="announcement-title"
            className="text-base sm:text-lg font-bold text-navy-900 tracking-tight leading-snug uppercase mb-2.5 font-serif"
          >
            WATER BOTTLE MANUFACTURING AND SUPPLY IS CURRENTLY UNAVAILABLE
          </h2>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-6 max-w-xs sm:max-w-sm">
            However you can explore water plant and bottling machinery solutions
          </p>

          {/* Action Area */}
          <div className="w-full space-y-2.5">
            <Link
              to={MACHINERY_PAGE_URL}
              onClick={handleDismiss}
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-navy-900 via-navy-800 to-azure-700 hover:from-azure-700 hover:to-azure-600 text-white font-sans font-semibold text-xs tracking-widest uppercase shadow-md shadow-navy-900/15 hover:shadow-azure-600/25 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>EXPLORE MACHINERY</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <button
              type="button"
              onClick={handleDismiss}
              className="w-full py-2 text-[11px] text-slate-400 hover:text-slate-600 transition-colors duration-200 font-medium"
            >
              Dismiss and continue browsing
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
