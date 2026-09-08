import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Check, ArrowRight, Droplets, ShieldCheck, Download } from 'lucide-react';

export default function CustomBottleStudio() {
  const [brandName, setBrandName] = useState('THE OBEROI GRAND');
  const [tagline, setTagline] = useState('LUXURY SUITES & PRIVATE DINING');
  const [selectedBottle, setSelectedBottle] = useState('glass-500');
  const [selectedFinish, setSelectedFinish] = useState('gold-foil');

  const bottleModels = [
    {
      id: 'glass-500',
      name: '500ml Luxury Glass',
      type: 'Flint Glass',
      image: '/assets/images/99fb22e5c6da0940d51d81ca5b20c346.png',
      moq: '1,000 units',
      closure: 'Aluminum Cap',
      ideal: 'Luxury Hotels & Fine Dining'
    },
    {
      id: 'glass-750',
      name: '750ml Reserve Glass',
      type: 'Ultra Flint Glass',
      image: '/assets/images/432bc749f59061c644ceb361f27397f8.png',
      moq: '500 units',
      closure: 'Crown / Screw',
      ideal: 'Royal Banquets & Gala Tables'
    },
    {
      id: 'glass-300',
      name: '300ml Dining Glass',
      type: 'Boutique Glass',
      image: '/assets/images/962caad941cd28e34e7ce1eec821d3bc.png',
      moq: '1,000 units',
      closure: 'Metal Cap',
      ideal: 'Boutique Cafés & Lounges'
    },
    {
      id: 'pet-500',
      name: '500ml Recyclable PET',
      type: 'BPA-Free PET',
      image: '/assets/images/e4f24746f42bfa09a9d54cdbb3b80a0a.jpg',
      moq: '1,500 units',
      closure: 'Safety Cap',
      ideal: 'Corporate Summits & Travel'
    },
    {
      id: 'pet-250',
      name: '250ml Event PET',
      type: 'Recyclable PET',
      image: '/assets/images/20961136f46e6fe96804d03c3a02f259.jpg',
      moq: '2,000 units',
      closure: 'Safety Cap',
      ideal: 'Weddings & Seminars'
    },
    {
      id: 'can-300',
      name: '300ml Clear Can',
      type: 'PET Can Body',
      image: '/assets/images/93f3f50dab8faf2d622940667734c325.png',
      moq: '1,000 units',
      closure: 'Aluminum Ring',
      ideal: 'Modern Cafés & Festivals'
    }
  ];

  const labelFinishes = [
    {
      id: 'gold-foil',
      name: 'Imperial Gold Foil',
      desc: 'Embossed metallic gold foil with light-reflective luster',
      bgClass: 'bg-gradient-to-r from-amber-50 via-amber-100 to-amber-50 border-amber-300',
      textClass: 'text-amber-900',
      borderClass: 'border-amber-400',
    },
    {
      id: 'pure-white',
      name: 'Minimalist White Matte',
      desc: 'Ultra-pure white textured paper with deep navy lettering',
      bgClass: 'bg-white border-slate-300',
      textClass: 'text-navy-900',
      borderClass: 'border-navy-900',
    },
    {
      id: 'crystal-minimal',
      name: 'Crystal Transparent',
      desc: 'Transparent clear substrate displaying pure water depth',
      bgClass: 'bg-sky-50/70 backdrop-blur-md border-sky-200',
      textClass: 'text-navy-900',
      borderClass: 'border-azure-500',
    },
    {
      id: 'azure-luxe',
      name: 'Royal Ocean Azure',
      desc: 'Deep azure blue background with silver metallic accenting',
      bgClass: 'bg-gradient-to-r from-sky-900 to-navy-900 border-sky-500',
      textClass: 'text-white',
      borderClass: 'border-azure-400',
    }
  ];

  const activeBottle = bottleModels.find((b) => b.id === selectedBottle) || bottleModels[0];
  const activeFinish = labelFinishes.find((f) => f.id === selectedFinish) || labelFinishes[0];

  return (
    <div className="w-full max-w-7xl mx-auto rounded-3xl bg-white border border-slate-200/90 shadow-lux p-6 sm:p-10 lg:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Live Bottle Preview Canvas */}
        <div className="lg:col-span-6 flex flex-col items-center">
          <div className="relative w-full max-w-md h-[400px] sm:h-[480px] rounded-2xl bg-gradient-to-b from-sky-50/50 via-white to-sky-50/40 border border-slate-100 flex flex-col items-center justify-center p-6 overflow-hidden shadow-inner">
            
            {/* Subtle Caustic Background Circle */}
            <div className="absolute w-72 h-72 rounded-full bg-azure-100/40 blur-3xl -top-10 -right-10 pointer-events-none" />
            <div className="absolute w-64 h-64 rounded-full bg-sky-100/50 blur-3xl -bottom-10 -left-10 pointer-events-none" />

            {/* Bottle Image with Floating Motion */}
            <div className="relative z-10 flex flex-col items-center animate-float-slow">
              <div className="relative">
                <img
                  src={activeBottle.image}
                  alt={activeBottle.name}
                  className="h-64 sm:h-80 object-contain drop-shadow-[0_20px_35px_rgba(10,30,63,0.18)]"
                />

                {/* Simulated Custom Label Badge Overlay on Bottle */}
                <div
                  className={`absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 sm:w-36 py-2 px-2.5 rounded shadow-md border text-center transition-all duration-300 ${activeFinish.bgClass}`}
                >
                  <div className="text-[6px] sm:text-[7px] uppercase tracking-[0.25em] text-slate-500 font-semibold mb-0.5">
                    PACKAGED FOR
                  </div>
                  <div
                    className={`text-[9px] sm:text-[11px] font-bold tracking-wider uppercase font-serif truncate ${activeFinish.textClass}`}
                  >
                    {brandName || 'YOUR BRAND'}
                  </div>
                  <div className="text-[6px] sm:text-[7px] tracking-widest text-slate-500 uppercase truncate mt-0.5">
                    {tagline || 'PURE MOUNTAIN WATER'}
                  </div>
                  <div className="text-[5px] text-azure-600 tracking-wider uppercase font-bold mt-1 pt-0.5 border-t border-slate-200/50">
                    BOTTLED BY SIPVODA
                  </div>
                </div>
              </div>

              {/* Realistic Natural Water Reflection */}
              <div className="relative w-36 sm:w-44 -mt-4 pointer-events-none">
                <img
                  src={activeBottle.image}
                  alt="Reflection"
                  className="w-full h-20 object-contain bottle-water-reflection"
                />
              </div>
            </div>

            {/* Stage Footer Status */}
            <div className="absolute bottom-3 inset-x-6 flex items-center justify-between text-[11px] text-slate-500 z-20">
              <span className="font-semibold text-navy-900">{activeBottle.name}</span>
              <span className="text-emerald-600 font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> BIS IS 14543
              </span>
            </div>
          </div>

          {/* Quick Stats below preview */}
          <div className="grid grid-cols-3 gap-3 w-full max-w-md mt-4 text-center">
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70">
              <span className="block text-[10px] uppercase tracking-wider text-slate-500">Min. Order</span>
              <span className="text-xs font-bold text-navy-900">{activeBottle.moq}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70">
              <span className="block text-[10px] uppercase tracking-wider text-slate-500">Material</span>
              <span className="text-xs font-bold text-navy-900">{activeBottle.type}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70">
              <span className="block text-[10px] uppercase tracking-wider text-slate-500">Lead Time</span>
              <span className="text-xs font-bold text-navy-900">7 - 10 Days</span>
            </div>
          </div>
        </div>

        {/* Right Column: Customization Controls */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-azure-50 border border-azure-200 text-azure-700 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Customizer</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-navy-900 tracking-tight">
              Design Your Private Label
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Select your preferred silhouette, enter your brand identity, and customize finishes to fit your hospitality standard.
            </p>
          </div>

          {/* 1. Enter Brand Identity */}
          <div className="space-y-3">
            <label className="block text-xs uppercase tracking-widest font-bold text-navy-900">
              1. Brand Name & Tagline
            </label>
            <div className="space-y-2">
              <input
                type="text"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                placeholder="Enter Company / Hotel / Event Name"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-navy-900 placeholder:text-slate-400 focus:outline-none focus:border-azure-500 focus:bg-white transition-colors text-base font-semibold"
                maxLength={32}
              />
              <input
                type="text"
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
                placeholder="Tagline or Occasion (e.g. Fine Dining & Banquets)"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-navy-900 placeholder:text-slate-400 focus:outline-none focus:border-azure-500 focus:bg-white transition-colors text-base"
                maxLength={40}
              />
            </div>
          </div>

          {/* 2. Select Bottle Format */}
          <div className="space-y-3">
            <label className="block text-xs uppercase tracking-widest font-bold text-navy-900">
              2. Select Bottle Format
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {bottleModels.map((b) => (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => setSelectedBottle(b.id)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedBottle === b.id
                      ? 'bg-azure-50/70 border-azure-500 shadow-sm ring-1 ring-azure-500'
                      : 'bg-white hover:bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="text-xs font-bold text-navy-900 truncate">{b.name}</div>
                  <div className="text-[11px] text-slate-500 truncate">{b.type}</div>
                </button>
              ))}
            </div>
          </div>

          {/* 3. Label Material & Finish */}
          <div className="space-y-3">
            <label className="block text-xs uppercase tracking-widest font-bold text-navy-900">
              3. Label Finish & Embellishment
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {labelFinishes.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setSelectedFinish(f.id)}
                  className={`p-3 rounded-xl border text-left flex items-start justify-between transition-all ${
                    selectedFinish === f.id
                      ? 'bg-azure-50/70 border-azure-500 ring-1 ring-azure-500 shadow-sm'
                      : 'bg-white hover:bg-slate-50 border-slate-200'
                  }`}
                >
                  <div>
                    <div className="text-xs font-bold text-navy-900">{f.name}</div>
                    <div className="text-[11px] text-slate-500 leading-tight mt-0.5">{f.desc}</div>
                  </div>
                  {selectedFinish === f.id && (
                    <span className="w-5 h-5 rounded-full bg-azure-600 text-white flex items-center justify-center shrink-0 ml-2">
                      <Check className="w-3 h-3" />
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Direct CTA Tray */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <Link
              to="/contact"
              className="flex-1 py-3.5 px-6 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-semibold text-xs uppercase tracking-wider text-center shadow-lux flex items-center justify-center gap-2 transition-all duration-300"
            >
              <span>Request Custom Samples</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/919528021068?text=Hello%20SIPVODA,%20I%20designed%20a%20custom%20bottle%20and%20would%20like%20a%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-6 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-navy-900 font-semibold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-colors"
            >
              <span>Instant WhatsApp Quote</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
