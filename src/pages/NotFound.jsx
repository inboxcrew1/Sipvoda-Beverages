import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight, Droplets, Compass } from 'lucide-react';
import WaterCausticsCanvas from '../components/WaterCausticsCanvas';

export default function NotFound() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-white text-navy-900 relative overflow-hidden">
      {/* Dynamic Water Caustics Canvas Overlay */}
      <WaterCausticsCanvas theme="light" className="opacity-60 pointer-events-none" />

      <div className="max-w-xl mx-auto px-4 sm:px-6 py-24 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-azure-50 border border-azure-200 text-azure-700 text-xs font-semibold uppercase tracking-widest">
          <Compass className="w-3.5 h-3.5 text-azure-600 animate-spin" style={{ animationDuration: '8s' }} />
          <span>Page Not Found • 404</span>
        </div>

        <h1 className="text-6xl sm:text-8xl font-serif font-bold text-navy-900 tracking-tight">
          404
        </h1>

        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-900">
            Off The Current
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-md mx-auto font-light">
            The page you are looking for has moved, dissolved, or does not exist in the SIPVODA collection.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
          <Link
            to="/"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs uppercase tracking-widest font-semibold shadow-lux hover:shadow-lux-hover transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>

          <Link
            to="/products"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-navy-900 border border-slate-200 text-xs uppercase tracking-widest font-semibold shadow-sm hover:shadow-lux-sm transition-all flex items-center justify-center gap-2"
          >
            <span>Explore Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="pt-8 border-t border-slate-200/60 flex items-center justify-center gap-2 text-xs text-slate-400">
          <Droplets className="w-3.5 h-3.5 text-azure-500" />
          <span>SIPVODA Beverages • Bulandshahr UP</span>
        </div>
      </div>
    </div>
  );
}
