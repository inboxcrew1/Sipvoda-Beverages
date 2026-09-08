import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Droplets, CheckCircle2, ShieldCheck } from 'lucide-react';
import WaterCausticsCanvas from '../components/WaterCausticsCanvas';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');

  const products = [
    {
      id: 'glass-500',
      name: '500ml Luxury Glass',
      category: 'Glass',
      volume: '500ml',
      material: '100% Recyclable Luxury Flint Glass',
      closure: 'Aluminum Threaded Cap',
      moq: '1,000 units',
      ideal: 'Luxury Hotels & Fine Dining',
      image: '/assets/images/99fb22e5c6da0940d51d81ca5b20c346.png',
      desc: 'Substantial hand-feel and crystal clarity engineered for fine dining tables, executive suites, and luxury lounges.'
    },
    {
      id: 'glass-750',
      name: '750ml Reserve Glass',
      category: 'Glass',
      volume: '750ml',
      material: 'Ultra-Clear Heavy Flint Glass',
      closure: 'Crown / Metal Threaded',
      moq: '500 units',
      ideal: 'Grand Banquets & Gala Tables',
      image: '/assets/images/432bc749f59061c644ceb361f27397f8.png',
      desc: 'The pinnacle of tabletop presentation. Heavy, regal base designed for grand weddings and gala dinners.'
    },
    {
      id: 'glass-300',
      name: '300ml Boutique Glass',
      category: 'Glass',
      volume: '300ml',
      material: 'High-Clarity Flint Glass',
      closure: 'Tamper-Evident Metal Cap',
      moq: '1,000 units',
      ideal: 'Boutique Cafés & VIP Lounges',
      image: '/assets/images/962caad941cd28e34e7ce1eec821d3bc.png',
      desc: 'Compact luxury bottle designed for cocktail bars, airport lounges, and boutique hotel guest kits.'
    },
    {
      id: 'pet-500',
      name: '500ml Recyclable PET',
      category: 'PET',
      volume: '500ml',
      material: 'BPA-Free Food-Grade Recyclable PET',
      closure: 'Hermetic Safety Cap',
      moq: '1,500 units',
      ideal: 'Corporate Summits & Travel',
      image: '/assets/images/e4f24746f42bfa09a9d54cdbb3b80a0a.jpg',
      desc: 'The executive classic. Lightweight and ergonomic with maximal label surface area for brand positioning.'
    },
    {
      id: 'pet-250',
      name: '250ml Event PET',
      category: 'PET',
      volume: '250ml',
      material: 'Recyclable Food-Grade PET',
      closure: 'Tamper-Evident Cap',
      moq: '2,000 units',
      ideal: 'High-Volume Events & Weddings',
      image: '/assets/images/20961136f46e6fe96804d03c3a02f259.jpg',
      desc: 'Pocket-sized convenience for conferences, wedding gift hampers, marathons, and high-frequency seminars.'
    },
    {
      id: 'pet-1000',
      name: '1 Liter Banqueting PET',
      category: 'PET',
      volume: '1000ml (1L)',
      material: 'Durable Recyclable PET',
      closure: 'Airtight Seal Cap',
      moq: '1,000 units',
      ideal: 'Shared Dining Tables & Boardrooms',
      image: '/assets/images/7169a775a3f7d71f6bebefc7726d2f06.jpg',
      desc: 'Generous volume engineered for banquet rounds, hotel conference rooms, and corporate cafeterias.'
    },
    {
      id: 'can-300',
      name: '300ml Clear PET Can',
      category: 'Specialty',
      volume: '300ml',
      material: 'Crystal Clear Body + Aluminum End',
      closure: 'Easy-Open Pull Tab',
      moq: '1,000 units',
      ideal: 'Modern Bistros & Music Festivals',
      image: '/assets/images/93f3f50dab8faf2d622940667734c325.png',
      desc: 'Innovative hybrid package pairing beverage can aesthetics with water clarity and full recyclable appeal.'
    }
  ];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen pt-20 bg-white text-navy-900">
      {/* Hero Header */}
      <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden py-24 bg-gradient-to-b from-sky-50/40 via-white to-white border-b border-slate-100">
        <WaterCausticsCanvas theme="light" className="opacity-60 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-azure-50 border border-azure-200 text-azure-700 text-xs font-semibold tracking-widest uppercase mb-6">
            <Droplets className="w-4 h-4 text-azure-600" />
            <span>The Collection</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold font-serif text-navy-900 tracking-tight mb-6">
            BOTTLE CATALOG
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Every SIPVODA format is certified under BIS IS 14543 and designed with distinct ergonomic aesthetics to elevate your brand presence.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 pt-8 flex-wrap">
            {['All', 'Glass', 'PET', 'Specialty'].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? 'bg-navy-900 text-white shadow-lux'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {filteredProducts.map((bottle) => (
              <div
                key={bottle.id}
                className="group relative rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 flex flex-col justify-between shadow-lux hover:shadow-lux-hover hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                <div className="relative w-full h-64 sm:h-72 flex flex-col items-center justify-center my-4">
                  <img
                    src={bottle.image}
                    alt={bottle.name}
                    className="h-52 sm:h-60 object-contain drop-shadow-[0_15px_25px_rgba(10,30,63,0.12)] group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle Natural Water Reflection */}
                  <div className="relative w-32 -mt-4 pointer-events-none">
                    <img
                      src={bottle.image}
                      alt="Reflection"
                      className="w-full h-16 object-contain bottle-water-reflection group-hover:opacity-40 transition-opacity duration-500"
                    />
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest font-bold text-azure-600">
                      {bottle.volume}
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">
                      MOQ: {bottle.moq}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-navy-900 group-hover:text-azure-700 transition-colors">
                    {bottle.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 font-normal">
                    {bottle.desc}
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-500 pt-2">
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="block font-semibold text-navy-900">Material</span>
                      <span className="truncate">{bottle.material}</span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="block font-semibold text-navy-900">Ideal Application</span>
                      <span className="truncate">{bottle.ideal}</span>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="w-full mt-4 py-3 rounded-xl bg-slate-50 group-hover:bg-navy-900 group-hover:text-white text-navy-900 border border-slate-200 group-hover:border-navy-900 text-xs font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-all duration-300"
                  >
                    <span>Request Quotation</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
