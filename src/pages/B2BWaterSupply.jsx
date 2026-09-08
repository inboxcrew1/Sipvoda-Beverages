import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Hotel, UtensilsCrossed, Building2, Heart, Activity, Factory } from 'lucide-react';
import PageSEO from '../components/PageSEO';
import Breadcrumb from '../components/Breadcrumb';
import WaterCausticsCanvas from '../components/WaterCausticsCanvas';

const industries = [
  {
    icon: Hotel,
    title: 'Hotels & Resorts',
    href: '/b2b',
    desc: 'Deliver a premium in-room water experience with custom-branded glass bottles in suites, minibars, and restaurant tables.',
    features: ['Custom label design', 'Glass & PET options', 'Weekly delivery contracts', 'Pan-India logistics'],
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurants & Cafés',
    href: '/b2b',
    desc: 'Serve your own brand of water on dining tables to increase perceived value and beverage revenue.',
    features: ['MOQ from 1,000 units', 'Custom closure options', 'Fast 7-day turnaround', 'Credit-based ordering'],
  },
  {
    icon: Building2,
    title: 'Corporate Offices',
    href: '/b2b',
    desc: 'Impress investors, clients, and guests with branded water in boardrooms, reception areas, and corporate events.',
    features: ['Recurring monthly supply', 'BIS certified', 'Corporate pricing', 'Dedicated account manager'],
  },
  {
    icon: Activity,
    title: 'Hospitals & Healthcare',
    href: '/b2b',
    desc: 'Tamper-proof, hygienically sealed, certified packaged drinking water for VIP wards and wellness centres.',
    features: ['FSSAI licensed', 'Hermetic seals', 'Tamper-evident caps', 'Bulk pallet supply'],
  },
  {
    icon: Heart,
    title: 'Weddings & Events',
    href: '/b2b',
    desc: 'Create a memorable impression with monogrammed, foil-embossed bottles personalised to your wedding theme.',
    features: ['Metallic foil labels', 'Custom monograms', 'Express production', 'Pan-India delivery'],
  },
  {
    icon: Factory,
    title: 'Manufacturing & Plants',
    href: '/b2b',
    desc: 'Reliable bulk supply of BIS-certified packaged drinking water for industrial campuses and employee welfare.',
    features: ['Pallet-scale orders', 'Scheduled delivery', 'ISI marked', 'Competitive bulk pricing'],
  },
];

export default function B2BWaterSupply() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sipvoda.com/' },
        { '@type': 'ListItem', position: 2, name: 'B2B Water Supply', item: 'https://www.sipvoda.com/b2b-water-supply' }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'B2B Custom Branded Water Bottle Supply',
      description: 'SIPVODA provides bulk B2B supply of custom-branded packaged drinking water bottles for hotels, restaurants, corporate offices, hospitals, and events across India.',
      provider: {
        '@type': 'Organization',
        name: 'SIPVODA Beverages',
        url: 'https://www.sipvoda.com'
      },
      areaServed: ['Delhi NCR', 'Noida', 'Gurgaon', 'Bulandshahr', 'Uttar Pradesh', 'India'],
      serviceType: 'B2B Bottled Water Supply'
    }
  ];

  return (
    <>
      <PageSEO
        title="B2B Water Bottle Supply for Hotels, Restaurants & Corporates | SIPVODA"
        description="SIPVODA is India's B2B custom branded water bottle supplier for hotels, restaurants, corporate offices, hospitals, and events. BIS certified, FSSAI licensed. Pan-India delivery."
        canonical="https://www.sipvoda.com/b2b-water-supply"
        jsonLd={jsonLd}
      />

      <div className="min-h-screen pt-20 bg-white text-navy-900">
        <Breadcrumb items={[{ label: 'B2B Water Supply' }]} />

        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden py-20 bg-gradient-to-b from-sky-50/40 via-white to-white border-b border-slate-100">
          <WaterCausticsCanvas theme="light" className="opacity-50 pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-azure-50 border border-azure-200 text-azure-700 text-xs font-semibold tracking-widest uppercase mb-6">
              <Building2 className="w-4 h-4" />
              <span>Enterprise Water Solutions</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold font-serif text-navy-900 tracking-tight mb-6">
              B2B Custom Water Bottle<br className="hidden sm:block" /> Supply Across India
            </h1>

            <p className="text-slate-600 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed font-light mb-8">
              SIPVODA delivers bulk, custom-branded packaged drinking water to hotels, restaurants, corporate offices, hospitals, and event venues across India. BIS IS 14543 certified. FSSAI licensed. Pan-India logistics.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="px-8 py-4 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs uppercase tracking-widest font-semibold shadow-lux transition-all flex items-center gap-2 group">
                <span>Get Enterprise Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/b2b" className="px-8 py-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-navy-900 text-xs uppercase tracking-widest font-semibold transition-colors">
                View Full B2B Solutions
              </Link>
            </div>
          </div>
        </section>

        {/* Industry Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-900 mb-3">
                Tailored Water Solutions by Industry
              </h2>
              <p className="text-sm text-slate-600 font-light">
                SIPVODA serves every sector with dedicated water branding solutions designed for specific operational needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map(({ icon: Icon, title, href, desc, features }) => (
                <div key={title} className="rounded-2xl bg-white border border-slate-200 p-6 shadow-lux-sm hover:shadow-lux hover:border-azure-400 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-azure-50 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-azure-600" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-navy-900 mb-2">{title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{desc}</p>
                  <ul className="space-y-1.5 mb-5">
                    {features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-xs text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-azure-500 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="text-xs font-bold text-azure-600 hover:text-navy-900 flex items-center gap-1.5 transition-colors">
                    Request Quote <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl font-serif font-bold text-navy-900 mb-4">Delivery Coverage</h2>
            <p className="text-sm text-slate-600 mb-8 max-w-2xl mx-auto">
              We supply custom branded packaged drinking water to businesses across the Delhi NCR and North India region.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Bulandshahr', 'Noida', 'Greater Noida', 'Delhi', 'Gurugram', 'Ghaziabad',
                'Meerut', 'Agra', 'Lucknow', 'Uttar Pradesh', 'Pan-India (bulk orders)'].map(city => (
                <span key={city} className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white border-t border-slate-100 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
            <h2 className="text-3xl font-serif font-bold text-navy-900">
              Ready to Partner with SIPVODA?
            </h2>
            <p className="text-sm text-slate-600 font-light">
              Get a custom quotation, production timeline, and sample delivery — within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="px-8 py-4 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs uppercase tracking-widest font-semibold shadow-lux transition-all">
                Start Enterprise Partnership
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
