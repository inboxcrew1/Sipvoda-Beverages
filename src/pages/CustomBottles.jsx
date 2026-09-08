import React from 'react';
import CustomBottleStudio from '../components/CustomBottleStudio';
import WaterCausticsCanvas from '../components/WaterCausticsCanvas';
import { Sparkles, Layers, ShieldCheck, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CustomBottles() {
  const steps = [
    {
      num: '01',
      title: 'Select Bottle Model',
      desc: 'Choose between luxury flint glass (300ml, 500ml, 750ml), crystal PET cans (300ml), or premium recyclable PET (250ml, 500ml, 1L).'
    },
    {
      num: '02',
      title: 'Digital 3D Label Proof',
      desc: 'Send your logos, wedding themes, or corporate brand guidelines. Our in-house artists generate a 3D digital simulation within 24 hours.'
    },
    {
      num: '03',
      title: 'Water Bottling & Foiling',
      desc: 'We purify drinking water via multi-barrier RO+UV, apply high-adhesion waterproof labels, and seal with tamper-evident caps.'
    },
    {
      num: '04',
      title: 'Direct Pallet Delivery',
      desc: 'Securely packaged cartons or pallets are shipped with end-to-end tracking directly to your hotel, venue, or corporate facility.'
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-white text-navy-900">
      {/* Hero Header */}
      <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden py-20 bg-gradient-to-b from-sky-50/40 via-white to-white border-b border-slate-100">
        <WaterCausticsCanvas theme="light" className="opacity-60 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-azure-50 border border-azure-200 text-azure-700 text-xs font-semibold tracking-widest uppercase mb-6">
            <Sparkles className="w-4 h-4 text-azure-600" />
            <span>Private-Label & Co-Branding</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold font-serif text-navy-900 tracking-tight mb-6">
            CREATE YOUR CUSTOM BOTTLE
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Turn every sip into a lasting impression. Customize labels with company logos, couple monograms, and metallic foil finishes for weddings, luxury venues, and executive events.
          </p>
        </div>
      </section>

      {/* Interactive 3D Configurator Studio */}
      <section className="py-16 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CustomBottleStudio />
        </div>
      </section>

      {/* 4-Step Process Journey */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-900 tracking-tight">
              Our 4-Stage Co-Branding Process
            </h2>
            <p className="text-slate-600 text-sm font-light mt-2">
              From concept to venue doorstep with complete precision and speed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-lux-sm hover:shadow-lux transition-all"
              >
                <div className="text-3xl font-serif font-bold text-azure-600 mb-3">
                  {step.num}
                </div>
                <h3 className="text-lg font-serif font-bold text-navy-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
