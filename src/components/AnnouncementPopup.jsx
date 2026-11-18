import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Droplets, Factory, AlertTriangle } from 'lucide-react';

/**
 * AnnouncementPopup - Mandatory Executive Notice for SIPVODA
 * 
 * Requirements:
 * 1. Background website is VISIBLE and fully SCROLLABLE in all uncovered remaining areas.
 *    (Implemented via pointer-events-none on the container & backdrop, pointer-events-auto on modal card).
 * 2. Popup CANNOT be closed, dismissed, or hidden — permanently floats in view.
 * 3. The ONLY action is the prominent CTA button routing to /water-plant-machinery.
 * 4. NEVER shows when visitor is on the machinery page (/water-plant-machinery or /machinery).
 */
export const MACHINERY_PAGE_URL = '/water-plant-machinery';

export default function AnnouncementPopup() {
  const location = useLocation();

  // DO NOT show popup on the machinery page or its aliases
  const isMachineryPage = 
    location.pathname === '/water-plant-machinery' ||
    location.pathname === '/machinery' ||
    location.pathname === '/water-plant';

  if (isMachineryPage) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="mandatory-announcement-title"
      className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center p-4 sm:p-6"
    >
      {/* Light, transparent non-blocking backdrop: Background remains fully visible & scrollable */}
      <div 
        className="absolute inset-0 bg-navy-950/20 pointer-events-none select-none transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Mandatory Modal Card: Only this card captures pointer events, cannot be dismissed */}
      <div className="pointer-events-auto relative w-full max-w-lg bg-white/98 backdrop-blur-xl rounded-3xl p-6 sm:p-9 shadow-[0_25px_80px_rgba(10,30,63,0.35)] border-2 border-azure-500/90 overflow-hidden transform transition-all duration-300 animate-in fade-in zoom-in-95">
        
        {/* Decorative Top Ambient Light */}
        <div
          aria-hidden="true"
          className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-br from-azure-100/60 via-sky-100/30 to-transparent blur-2xl pointer-events-none"
        />

        {/* Content Container */}
        <div className="relative flex flex-col items-center text-center">
          
          {/* Subtle Water Droplet Icon with Ripple */}
          <div className="relative mb-4 flex items-center justify-center">
            <span
              aria-hidden="true"
              className="absolute w-14 h-14 rounded-full border border-azure-400/30 animate-ping opacity-30 pointer-events-none"
            />
            <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-azure-50 via-sky-100/80 to-azure-100/60 border border-azure-200 flex items-center justify-center shadow-xs">
              <Droplets className="w-6 h-6 text-azure-600" />
            </div>
          </div>

          {/* Micro Notice Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-amber-50 text-amber-800 border border-amber-200/80 mb-3 shadow-2xs">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
            <span>Important Business Notice</span>
          </div>

          {/* Headline */}
          <h2
            id="mandatory-announcement-title"
            className="text-base sm:text-xl font-extrabold text-navy-900 tracking-tight leading-snug uppercase mb-2.5 font-serif"
          >
            WATER BOTTLE MANUFACTURING AND SUPPLY IS CURRENTLY UNAVAILABLE
          </h2>

          {/* Clarification Message */}
          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-6 max-w-sm">
            However you can explore complete water plant and bottling machinery solutions, production capacities, technical specifications &amp; direct factory pricing.
          </p>

          {/* Single Mandatory Action Button - Only Option to Proceed */}
          <div className="w-full">
            <Link
              to={MACHINERY_PAGE_URL}
              className="w-full py-3.5 sm:py-4 px-6 rounded-2xl bg-gradient-to-r from-navy-900 via-navy-800 to-azure-700 hover:from-azure-700 hover:to-azure-600 text-white font-sans font-bold text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-navy-900/20 hover:shadow-azure-600/30 transition-all duration-300 flex items-center justify-center gap-2.5 group ring-2 ring-azure-400/40"
            >
              <Factory className="w-4 h-4 text-azure-300 group-hover:scale-110 transition-transform" />
              <span>EXPLORE MACHINERY</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>

            <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-slate-400 font-medium">
              <span>Scroll down to preview page behind • Click button to view machinery</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
