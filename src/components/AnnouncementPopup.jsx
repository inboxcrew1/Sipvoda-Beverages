import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Droplets, Factory, AlertTriangle } from 'lucide-react';

/**
 * AnnouncementPopup - Mandatory Executive Notice for SIPVODA
 * 
 * Rules:
 * 1. Permanently active across the website (cannot be dismissed or hidden).
 * 2. Only action is the prominent CTA button routing to /water-plant-machinery.
 * 3. Never shows when the visitor is on the machinery page (/water-plant-machinery or /machinery).
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
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
    >
      {/* Dark Non-dismissible Transparent Backdrop with strong blur */}
      <div 
        className="absolute inset-0 bg-navy-950/80 backdrop-blur-md select-none"
        aria-hidden="true"
      />

      {/* Mandatory Modal Card - Cannot be closed or clicked away */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-7 sm:p-10 shadow-[0_25px_70px_-10px_rgba(10,30,63,0.5)] border border-slate-200/90 overflow-hidden transform transition-all duration-300 animate-in fade-in zoom-in-95">
        
        {/* Subtle Decorative Aqua Ambient Glow in Top Corner */}
        <div
          aria-hidden="true"
          className="absolute -top-20 -right-20 w-52 h-52 rounded-full bg-gradient-to-br from-azure-100/70 via-sky-100/40 to-transparent blur-3xl pointer-events-none"
        />

        {/* Content Container */}
        <div className="relative flex flex-col items-center text-center">
          
          {/* Subtle Water Drop & Concentric Ripple Visual */}
          <div className="relative mb-5 flex items-center justify-center">
            {/* Concentric Ambient Ripples */}
            <span
              aria-hidden="true"
              className="absolute w-16 h-16 rounded-full border border-azure-400/40 animate-ping opacity-40 pointer-events-none"
            />
            <span
              aria-hidden="true"
              className="absolute w-24 h-24 rounded-full border border-sky-300/30 pointer-events-none"
            />

            {/* Central Water Droplet & Plant Badge */}
            <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-azure-50 via-sky-100/80 to-azure-100/60 border border-azure-200 flex items-center justify-center shadow-md">
              <Droplets className="w-7 h-7 text-azure-600" />
            </div>
          </div>

          {/* Notice Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-50 text-amber-800 border border-amber-200/80 mb-4 shadow-2xs">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
            <span>Important Notice</span>
          </div>

          {/* Mandatory Headline */}
          <h2
            id="mandatory-announcement-title"
            className="text-lg sm:text-2xl font-extrabold text-navy-900 tracking-tight leading-snug uppercase mb-3 font-serif"
          >
            WATER BOTTLE MANUFACTURING AND SUPPLY IS CURRENTLY UNAVAILABLE
          </h2>

          {/* Clarification Message */}
          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed mb-6 max-w-md">
            However you can explore complete water plant and bottling machinery solutions, production capacities, technical specifications &amp; direct factory pricing.
          </p>

          {/* Single Mandatory Action Button - Only Option to Proceed */}
          <div className="w-full">
            <Link
              to={MACHINERY_PAGE_URL}
              className="w-full py-4 px-8 rounded-2xl bg-gradient-to-r from-navy-900 via-navy-800 to-azure-700 hover:from-azure-700 hover:to-azure-600 text-white font-sans font-bold text-sm tracking-wider uppercase shadow-lg shadow-navy-900/20 hover:shadow-azure-600/30 transition-all duration-300 flex items-center justify-center gap-3 group ring-2 ring-azure-400/30"
            >
              <Factory className="w-5 h-5 text-azure-300 group-hover:scale-110 transition-transform" />
              <span>EXPLORE MACHINERY</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>

            <p className="text-[11px] text-slate-400 font-normal mt-3">
              Click above to view industrial RO plants, filling lines, labelling, and packaging machinery.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
