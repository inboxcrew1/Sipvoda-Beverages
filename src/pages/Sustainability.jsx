import React from 'react';
import { Link } from 'react-router-dom';
import { Droplets, Recycle, RefreshCw, Leaf, CheckCircle2, ArrowRight } from 'lucide-react';
import WaterCausticsCanvas from '../components/WaterCausticsCanvas';

export default function Sustainability() {
  const pillars = [
    {
      icon: RefreshCw,
      title: 'Infinitely Recyclable Flint Glass',
      desc: 'Our luxury glass bottles are 100% recyclable without quality degradation. For hotel and restaurant partners, glass provides a timeless, plastic-free alternative that can be sanitized and repurposed.'
    },
    {
      icon: Recycle,
      title: '100% Recyclable Virgin PET',
      desc: 'Where glass is impractical due to pool deck safety or travel constraints, we utilize high-grade, 100% recyclable, BPA-free PET that can enter standard municipal recycling streams.'
    },
    {
      icon: Droplets,
      title: 'Responsible Water Recovery',
      desc: 'Our reverse osmosis and filtration systems at Bulandshahr UP are engineered for optimal recovery efficiency, redirecting reject water to facility utilities rather than wasting it.'
    },
    {
      icon: Leaf,
      title: 'Local Production & Optimized Logistics',
      desc: 'By manufacturing and bottling in Bulandshahr, Uttar Pradesh, we optimize nationwide transport routes, reducing carbon emissions associated with imported luxury bottled waters.'
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-white text-navy-900">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden py-24 bg-gradient-to-b from-sky-50/40 via-white to-white border-b border-slate-100">
        <WaterCausticsCanvas theme="light" className="opacity-60 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold tracking-widest uppercase mb-6">
            <Leaf className="w-4 h-4 text-emerald-600" />
            <span>Environmental Stewardship</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold font-serif text-navy-900 tracking-tight mb-6">
            PURITY WITH INTEGRITY
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
            We believe true luxury is responsible. We prioritize high-clarity recyclable glass, BPA-free recyclable PET, and conscious water processing without greenwashing.
          </p>
        </div>
      </section>

      {/* Pillars of Responsibility */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-lux-sm hover:shadow-lux transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-navy-900 mb-3">
                      {p.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-light">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
