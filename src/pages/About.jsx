import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Users, HeartHandshake, Sparkles, CheckCircle2, Factory, Droplets, MapPin, ArrowRight } from 'lucide-react';
import WaterCausticsCanvas from '../components/WaterCausticsCanvas';

export default function About() {
  const principles = [
    {
      icon: Award,
      title: 'Quality Excellence',
      desc: 'We maintain the highest standards in multi-stage purification and packaging to ensure clinical purity in every custom branded bottle.'
    },
    {
      icon: Users,
      title: 'Customer-First Craftsmanship',
      desc: 'Your brand image drives everything we do. We go above and beyond with bespoke digital proofing and rapid turnaround to exceed your expectations.'
    },
    {
      icon: HeartHandshake,
      title: 'Trust & Punctual Reliability',
      desc: 'Consistent taste, batch certification, and on-time nationwide delivery build lasting partnerships with hotel chains and event planners.'
    },
    {
      icon: Sparkles,
      title: 'Packaging Innovation',
      desc: 'We continually refine our bottling techniques to provide cutting-edge waterproof foiling, luxury flint glassware, and sustainable PET solutions.'
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
            <span>Heritage & Principles</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold font-serif text-navy-900 tracking-tight mb-6">
            THE SIPVODA STORY
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Founded with a conviction that bottled drinking water should not merely be a commodity, but an elevated expression of hospitality, elegance, and brand identity.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image / Plant Visual */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden bg-slate-50 p-8 border border-slate-200/90 relative shadow-lux">
                <img
                  src="/assets/images/8637b335145ecdbb0918b30067ecb9f3.png"
                  alt="SIPVODA Bottling Process & Production Facility"
                  className="w-full h-auto object-cover rounded-2xl drop-shadow-md"
                />
                <div className="absolute -bottom-3 -right-3 p-4 rounded-2xl bg-white border border-slate-200 text-navy-900 shadow-lux hidden sm:block">
                  <div className="flex items-center gap-2 text-xs font-bold font-serif text-azure-700 uppercase tracking-wider">
                    <MapPin className="w-4 h-4 text-azure-600" />
                    <span>Bulandshahr, UP</span>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">High-Precision Bottling Facility</div>
                </div>
              </div>
            </div>

            {/* Narrative Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs uppercase tracking-widest font-bold text-azure-600">
                Pioneering Luxury Hydration
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-900 leading-tight">
                Engineered for Discerning Establishments Across India
              </h2>

              <p className="text-slate-600 text-sm leading-relaxed font-light">
                At SIPVODA, our journey began at our state-of-the-art facility in Bulandshahr, Uttar Pradesh. Observing that premium hotels, fine-dining restaurants, and corporate headquarters often served generic mass-market water bottles, we recognized an unmet standard.
              </p>

              <p className="text-slate-600 text-sm leading-relaxed font-light">
                Every bottle produced in our Bulandshahr plant undergoes rigorous multi-barrier microfiltration, reverse osmosis, and remineralization in strict adherence to BIS IS 14543 and FSSAI standards. Today, we empower hundreds of brands to tell their story on the finest glassware and sustainable PET bottles.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-navy-900 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>BIS IS 14543 Certified</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-navy-900 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-azure-600" />
                  <span>FSSAI Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-24 bg-slate-50/70 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-900 tracking-tight">
              Our Guiding Principles
            </h2>
            <p className="text-slate-600 text-sm font-light">
              The foundational values that anchor our quality control and client relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-lux-sm hover:shadow-lux hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-azure-50 text-azure-600 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-navy-900 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Direct CTA */}
      <section className="py-20 bg-white border-t border-slate-100 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-900">
            Partner with SIPVODA
          </h2>
          <p className="text-sm text-slate-600 max-w-lg mx-auto font-light">
            Elevate your establishment's beverage standard with certified pure packaged drinking water in bespoke bottles.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs uppercase tracking-widest font-semibold shadow-lux transition-all"
            >
              Get In Touch With Concierge
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
