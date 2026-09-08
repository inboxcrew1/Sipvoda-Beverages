import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, ShieldCheck, Package, Layers, Award } from 'lucide-react';
import PageSEO from '../components/PageSEO';
import Breadcrumb from '../components/Breadcrumb';
import WaterCausticsCanvas from '../components/WaterCausticsCanvas';

const faqs = [
  {
    q: 'What is private-label bottled water?',
    a: 'Private-label bottled water means your brand name, logo, and label appear on the bottle — not the manufacturer\'s. SIPVODA acts as your silent production partner: we purify, bottle, label, and deliver packaged drinking water under your own brand identity.'
  },
  {
    q: 'Who is private-label water suitable for?',
    a: 'Private-label water is ideal for hotels, restaurant chains, airlines, luxury resorts, hospitals, pharmaceutical companies, gyms, real-estate developers, and any brand that wants to enhance its image with own-brand water.'
  },
  {
    q: 'Does SIPVODA keep the branding confidential?',
    a: 'Yes. SIPVODA operates as a discreet white-label bottling partner. Your brand remains the face of the product; SIPVODA is not mentioned on your label unless you choose otherwise.'
  },
  {
    q: 'What customization options are available for private-label water?',
    a: 'You can fully customise the label design, bottle shape (glass or PET), bottle size (200ml to 1 litre), closure type, and packaging. Metallic foil, UV varnish, and embossed label finishes are available for premium presentations.'
  },
  {
    q: 'What are the certifications for SIPVODA private-label water?',
    a: 'All SIPVODA private-label bottles are produced at our BIS IS 14543-certified and FSSAI-licensed bottling facility in Bulandshahr, Uttar Pradesh. Full compliance documentation is provided with each order.'
  }
];

export default function PrivateLabelWater() {
  const [openFaq, setOpenFaq] = useState(null);

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sipvoda.com/' },
        { '@type': 'ListItem', position: 2, name: 'Private Label Water', item: 'https://www.sipvoda.com/private-label-water' }
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
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'SIPVODA Private Label Packaged Drinking Water',
      description: 'Fully customised own-brand packaged drinking water in glass and PET bottles. BIS IS 14543 certified, FSSAI licensed. MOQ from 500 units.',
      brand: { '@type': 'Brand', name: 'SIPVODA' },
      manufacturer: {
        '@type': 'Organization',
        name: 'SIPVODA Beverages',
        url: 'https://www.sipvoda.com'
      },
      offers: {
        '@type': 'Offer',
        url: 'https://www.sipvoda.com/private-label-water',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        seller: { '@type': 'Organization', name: 'SIPVODA Beverages' }
      }
    }
  ];

  return (
    <>
      <PageSEO
        title="Private Label Water Bottles India | Own-Brand Bottled Water — SIPVODA"
        description="Launch your own-brand bottled water with SIPVODA. Private-label packaged drinking water in glass and PET bottles, BIS certified, FSSAI licensed. Serving hotels, corporates, and events across India."
        canonical="https://www.sipvoda.com/private-label-water"
        jsonLd={jsonLd}
      />

      <div className="min-h-screen pt-20 bg-white text-navy-900">
        <Breadcrumb items={[{ label: 'Private Label Water' }]} />

        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden py-20 bg-gradient-to-b from-sky-50/40 via-white to-white border-b border-slate-100">
          <WaterCausticsCanvas theme="light" className="opacity-50 pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-azure-50 border border-azure-200 text-azure-700 text-xs font-semibold tracking-widest uppercase mb-6">
              <Layers className="w-4 h-4" />
              <span>Own-Brand Bottled Water</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold font-serif text-navy-900 tracking-tight mb-6">
              Private-Label Water.<br className="hidden sm:block" /> Your Brand. Our Expertise.
            </h1>

            <p className="text-slate-600 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed font-light mb-8">
              SIPVODA is India's trusted white-label packaged drinking water manufacturer. We bottle, brand, and deliver pure water under your own label — fully certified under BIS IS 14543 and FSSAI — so your guests, customers, and partners see only your brand.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="px-8 py-4 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs uppercase tracking-widest font-semibold shadow-lux transition-all flex items-center gap-2 group">
                <span>Start Your Private Label</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/custom-water-bottles" className="px-8 py-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-navy-900 text-xs uppercase tracking-widest font-semibold transition-colors">
                See Custom Bottle Options
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-bold text-navy-900 text-center mb-12">
              Why Choose Private-Label Water?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Award, title: 'Elevate Brand Perception', desc: 'Serve water bearing your brand name — a subtle yet powerful signal of quality that guests and clients notice.' },
                { icon: ShieldCheck, title: 'Fully Certified Production', desc: 'Every bottle is produced at our BIS IS 14543-certified, FSSAI-licensed plant in Bulandshahr, Uttar Pradesh.' },
                { icon: Package, title: 'Complete Label Freedom', desc: 'Custom label art, logo, metallic foil, UV finish, QR codes, and nutritional info — all designed in-house.' },
                { icon: Layers, title: 'Glass & PET Formats', desc: 'Choose luxury flint glass (500ml, 750ml) or recyclable PET (200ml, 250ml, 300ml, 500ml, 1L).' },
                { icon: ArrowRight, title: 'Fast 7–10 Day Turnaround', desc: 'From approved digital proof to pallet-ready delivery in 7 to 10 business days.' },
                { icon: ShieldCheck, title: 'Confidential Partnership', desc: 'Your label, your brand — SIPVODA operates discreetly as your silent manufacturing partner.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-lux-sm">
                  <div className="w-10 h-10 rounded-xl bg-azure-50 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-azure-600" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-navy-900 mb-2">{title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl font-serif font-bold text-navy-900 mb-8">Industries We Serve</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {['Luxury Hotels', 'Restaurant Groups', 'Airlines', 'Corporate Brands', 'Hospitals & Wellness',
                'Pharmaceutical Companies', 'Real Estate Developers', 'Gyms & Fitness Centres',
                'Wedding Planners', 'Sports & Events'].map(tag => (
                <Link key={tag} to="/b2b" className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold hover:border-azure-400 hover:text-azure-700 transition-colors">
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-serif font-bold text-navy-900 text-center mb-12">
              Private Label Water — FAQs
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
        <section className="py-20 bg-navy-900 text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold">Launch Your Own Water Brand Today</h2>
            <p className="text-sm text-slate-300 font-light max-w-xl mx-auto">
              Get a free 3D label mockup, production quote, and sample bottles delivered to your office.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="px-8 py-4 rounded-xl bg-white text-navy-900 hover:bg-sky-50 text-xs uppercase tracking-widest font-semibold transition-colors">
                Request Free Mockup
              </Link>
              <a href="tel:+919528021068" className="px-8 py-4 rounded-xl border border-white/30 text-white hover:bg-white/10 text-xs uppercase tracking-widest font-semibold transition-colors">
                Call +91 95280 21068
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
