import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Package, Clock, Award } from 'lucide-react';
import PageSEO from '../components/PageSEO';
import Breadcrumb from '../components/Breadcrumb';
import WaterCausticsCanvas from '../components/WaterCausticsCanvas';

const faqs = [
  {
    q: 'What are custom water bottles?',
    a: 'Custom water bottles are packaged drinking water bottles branded with your own logo, label design, and colour scheme. SIPVODA supplies fully customised glass and PET bottles for hotels, restaurants, corporate offices, hospitals, weddings, and events across India.'
  },
  {
    q: 'What is the minimum order quantity for custom water bottles?',
    a: 'SIPVODA\'s minimum order quantity (MOQ) starts at 500 units for premium flint glass bottles (500ml & 750ml), 1,000 units for standard glass and PET can formats, and 1,500 units for recyclable PET bottles. Trial batches are available for hospitality groups.'
  },
  {
    q: 'How long does it take to produce custom branded water bottles?',
    a: 'After your logo and brand guidelines are received, our in-house design team delivers a 3D digital proof within 24 hours. Once approved, production and dispatch takes 7–10 business days across North India and the Delhi NCR region.'
  },
  {
    q: 'What bottle formats does SIPVODA offer for custom branding?',
    a: 'SIPVODA offers 200ml–250ml event PET bottles, 300ml clear PET cans, 500ml luxury flint glass and recyclable PET bottles, 750ml reserve glass bottles, and 1-litre banqueting PET bottles — all available with full custom label printing.'
  },
  {
    q: 'Is SIPVODA BIS and FSSAI certified?',
    a: 'Yes. SIPVODA\'s bottling facility in Bulandshahr, Uttar Pradesh is certified under BIS IS 14543 (Packaged Drinking Water) and is fully FSSAI licensed, ensuring every custom bottle meets India\'s highest food safety standards.'
  },
  {
    q: 'Can SIPVODA supply custom bottled water for events across India?',
    a: 'Yes. SIPVODA delivers branded packaged drinking water to hotels, restaurants, corporate offices, and event venues across Delhi NCR, Noida, Gurugram, Ghaziabad, Meerut, Greater Noida, and Uttar Pradesh. Contact us for a logistics quote.'
  }
];

const products = [
  { label: '200ml–250ml Event PET', href: '/products', desc: 'Compact custom-label bottles for conferences, weddings, and gift boxes.' },
  { label: '300ml Clear PET Can', href: '/products', desc: 'Crystal-clear can format with full custom wrap for premium presentations.' },
  { label: '500ml Custom Glass', href: '/products', desc: 'Luxury flint glass branded for fine dining and hotel suites.' },
  { label: '1-Litre Banqueting PET', href: '/products', desc: 'Generous format for shared dining tables and executive boardrooms.' },
];

export default function CustomWaterBottles() {
  const [openFaq, setOpenFaq] = useState(null);

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sipvoda.com/' },
        { '@type': 'ListItem', position: 2, name: 'Custom Water Bottles', item: 'https://www.sipvoda.com/custom-water-bottles' }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a }
      }))
    }
  ];

  return (
    <>
      <PageSEO
        title="Custom Water Bottles India | Branded Packaged Drinking Water — SIPVODA"
        description="Order custom water bottles for your brand. SIPVODA supplies BIS-certified custom branded water bottles in glass and PET for hotels, corporates, weddings and events across India. MOQ from 500 units."
        canonical="https://www.sipvoda.com/custom-water-bottles"
        jsonLd={jsonLd}
      />

      <div className="min-h-screen pt-20 bg-white text-navy-900">
        <Breadcrumb items={[{ label: 'Custom Water Bottles' }]} />

        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden py-20 bg-gradient-to-b from-sky-50/50 via-white to-white border-b border-slate-100">
          <WaterCausticsCanvas theme="light" className="opacity-50 pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-azure-50 border border-azure-200 text-azure-700 text-xs font-semibold tracking-widest uppercase mb-6">
              <Sparkles className="w-4 h-4" />
              <span>BIS IS 14543 · FSSAI Certified</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold font-serif text-navy-900 tracking-tight mb-6">
              Custom Water Bottles<br className="hidden sm:block" /> for Your Brand
            </h1>

            <p className="text-slate-600 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed font-light mb-8">
              SIPVODA creates fully customised packaged drinking water bottles — printed with your logo, brand colours, and label design — for hotels, restaurants, corporate offices, hospitals, weddings, and events across India. Choose from premium glass or recyclable PET formats starting at 500 units MOQ.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs uppercase tracking-widest font-semibold shadow-lux transition-all duration-300 flex items-center gap-2 group"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/products"
                className="px-8 py-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-navy-900 text-xs uppercase tracking-widest font-semibold transition-colors"
              >
                View All Bottle Formats
              </Link>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="py-10 bg-slate-50 border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-wrap justify-center gap-6 sm:gap-10">
            {[
              { icon: ShieldCheck, text: 'BIS IS 14543 Certified' },
              { icon: CheckCircle2, text: 'FSSAI Licensed Plant' },
              { icon: Package, text: 'MOQ from 500 Units' },
              { icon: Clock, text: '7–10 Day Production' },
              { icon: Award, text: '100% Label Freedom' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <Icon className="w-4 h-4 text-azure-600" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-900 tracking-tight">
                Custom Bottle Formats
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-light">
                From compact event bottles to luxury banqueting glass — every format available with full custom label printing.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map(p => (
                <Link
                  key={p.label}
                  to={p.href}
                  className="group p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-azure-400 hover:shadow-lux transition-all duration-300"
                >
                  <h3 className="text-lg font-serif font-bold text-navy-900 group-hover:text-azure-700 mb-2 transition-colors">
                    {p.label}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{p.desc}</p>
                  <span className="text-xs font-bold text-azure-600 flex items-center gap-1">
                    View Details <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-slate-50/70 border-t border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-bold text-navy-900 text-center mb-12">
              How Custom Branding Works
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { num: '01', title: 'Send Your Logo', desc: 'Share brand guidelines, colours, and preferred bottle formats.' },
                { num: '02', title: '3D Digital Proof', desc: 'Receive a photorealistic label mockup within 24 hours.' },
                { num: '03', title: 'Approve & Produce', desc: 'We bottle, label, and quality-check every unit at our BIS-certified plant.' },
                { num: '04', title: 'Delivered to Venue', desc: 'Pallet-ready shipment to hotels, offices, or event venues across India.' },
              ].map(step => (
                <div key={step.num} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-lux-sm">
                  <div className="text-3xl font-serif font-bold text-azure-600 mb-3">{step.num}</div>
                  <h3 className="text-base font-serif font-bold text-navy-900 mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">Who Orders Custom Bottles?</h2>
            <p className="text-sm text-slate-600 mb-10 max-w-2xl mx-auto">
              Businesses and individuals across India trust SIPVODA for custom-label packaged drinking water.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Hotels & Resorts', 'Restaurants & Cafés', 'Corporate Offices', 'Weddings & Events',
                'Hospitals & Clinics', 'Gyms & Spas', 'Airlines & Travel', 'Conferences & Summits',
                'Educational Institutions', 'Pharma & Manufacturing'
              ].map(tag => (
                <span key={tag} className="px-4 py-2 rounded-full bg-azure-50 border border-azure-200 text-azure-700 text-xs font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-slate-50/70 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-serif font-bold text-navy-900 text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div key={idx} className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif text-base font-bold text-navy-900 hover:text-azure-700 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${openFaq === idx ? 'rotate-180 text-azure-600' : ''}`} />
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white border-t border-slate-100 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-900">
              Ready to Create Your Custom Water Bottle?
            </h2>
            <p className="text-sm text-slate-600 font-light">
              Contact our team for a free sample kit, price quote, and 3D label proof — delivered within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="px-8 py-4 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs uppercase tracking-widest font-semibold shadow-lux transition-all">
                Request Free Sample Kit
              </Link>
              <a href="tel:+919528021068" className="px-8 py-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-navy-900 text-xs uppercase tracking-widest font-semibold">
                Call +91 95280 21068
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
