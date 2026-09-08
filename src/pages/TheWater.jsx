import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Droplets, Sparkles, CheckCircle2, ArrowRight, Activity, Microscope, Award } from 'lucide-react';
import WaterCausticsCanvas from '../components/WaterCausticsCanvas';

export default function TheWater() {
  const purificationStages = [
    {
      step: '01',
      name: 'Micron Sediment Filtration',
      desc: 'High-density multi-gradient filters eliminate suspended microscopic particles, silt, and natural sediment, ensuring flawless optical clarity.',
      metric: '< 1 Micron Retention'
    },
    {
      step: '02',
      name: 'Dual Activated Carbon Absorption',
      desc: 'Coconut-shell activated carbon blocks remove organic compounds, trace odors, and chlorine, delivering a neutral, refreshing baseline.',
      metric: '100% Odor & Taste Purity'
    },
    {
      step: '03',
      name: 'High-Pressure Reverse Osmosis (RO)',
      desc: 'Advanced semi-permeable membranes strip out heavy metals, excess dissolved salts, and unwanted chemical contaminants at the molecular level.',
      metric: 'Molecular Purity'
    },
    {
      step: '04',
      name: 'Ultraviolet Disinfection',
      desc: 'High-output germicidal UV radiation neutralizes 99.99% of bacteria, viruses, and microbial organisms without introducing chemical additives.',
      metric: '99.99% Microbial Neutralization'
    },
    {
      step: '05',
      name: 'Controlled Ozonation & Mineral Balance',
      desc: 'Final micro-ozonation locks in oxygenation and microbiological stability inside the sealed bottle, harmonized with balanced minerals.',
      metric: 'Optimal pH (6.8 – 7.4)'
    }
  ];

  const standards = [
    {
      title: 'BIS IS 14543 Certified',
      desc: 'Fully compliant with national Bureau of Indian Standards specifications for packaged drinking water.'
    },
    {
      title: 'FSSAI Licensed Facility',
      desc: 'Manufactured and bottled under strict food safety and hygiene protocols mandated by FSSAI.'
    },
    {
      title: 'Batch Laboratory Testing',
      desc: 'Every single bottling run is tested for microbiological stability, mineral consistency, and absolute clarity.'
    },
    {
      title: 'Zero Chemical Residuals',
      desc: 'Pure hydration free from synthetic preservatives, chlorine aftertaste, or heavy metals.'
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-white text-navy-900">
      {/* Hero Header */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden py-24 bg-gradient-to-b from-sky-50/40 via-white to-white border-b border-slate-100">
        <WaterCausticsCanvas theme="light" className="opacity-60 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-azure-50 border border-azure-200 text-azure-700 text-xs font-semibold tracking-widest uppercase mb-6">
            <Droplets className="w-4 h-4 text-azure-600" />
            <span>Water Engineering & Science</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold font-serif text-navy-900 tracking-tight mb-6">
            THE PURITY STANDARD
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Crafted through a multi-barrier purification process that removes all contaminants while calibrating essential mineral harmony for an impeccably clean, crisp taste.
          </p>
        </div>
      </section>

      {/* 5-Stage Purification Journey */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-900 tracking-tight">
              Multi-Barrier Purification Architecture
            </h2>
            <p className="text-slate-600 text-sm font-light">
              Every drop is filtered to clinical perfection before being sealed in sterile packaging.
            </p>
          </div>

          <div className="space-y-6">
            {purificationStages.map((stage) => (
              <div
                key={stage.step}
                className="rounded-2xl bg-white border border-slate-200/80 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-lux-sm hover:shadow-lux hover:border-azure-400 transition-all duration-300"
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  <span className="text-3xl sm:text-4xl font-serif font-bold text-azure-600 shrink-0">
                    {stage.step}
                  </span>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-navy-900 mb-1.5">
                      {stage.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light max-w-2xl">
                      {stage.desc}
                    </p>
                  </div>
                </div>
                <div className="shrink-0 px-4 py-2 rounded-xl bg-azure-50 border border-azure-100 text-azure-700 text-xs font-semibold">
                  {stage.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification & Laboratory Standards */}
      <section className="py-24 bg-slate-50/70 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-900 tracking-tight">
              Clinical Quality & Compliance
            </h2>
            <p className="text-slate-600 text-sm font-light">
              Bottled in our Bulandshahr, Uttar Pradesh plant with zero compromise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {standards.map((s) => (
              <div
                key={s.title}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-lux-sm hover:shadow-lux transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-serif font-bold text-navy-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct CTA */}
      <section className="py-20 bg-white border-t border-slate-100 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-900">
            Taste The Purity Difference
          </h2>
          <p className="text-sm text-slate-600 max-w-lg mx-auto font-light">
            Request sample bottles delivered directly to your executive desk or hospitality tasting panel.
          </p>
          <div className="flex justify-center">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs uppercase tracking-widest font-semibold shadow-lux transition-all"
            >
              Order Tasting Samples
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
