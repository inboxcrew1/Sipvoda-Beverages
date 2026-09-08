import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Hotel, UtensilsCrossed, Building2, Heart, Activity, GraduationCap, Plane, Factory } from 'lucide-react';
import PageSEO from '../components/PageSEO';
import Breadcrumb from '../components/Breadcrumb';
import WaterCausticsCanvas from '../components/WaterCausticsCanvas';

const industries = [
  {
    icon: Hotel,
    title: 'Hotels & Resorts',
    slug: 'hotels',
    desc: 'Elevate the in-room and dining experience with custom-branded glass water bottles. Impress discerning guests with every sip.',
    tags: ['Luxury glass bottles', 'Suite water programs', 'F&B branding', 'Recurring supply'],
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurants & Cafés',
    slug: 'restaurants',
    desc: 'Serve your own brand of water on tables to differentiate your dining experience and increase beverage revenue.',
    tags: ['Table water branding', 'MOQ from 1,000 units', 'Glass & PET options', 'Fast reorder'],
  },
  {
    icon: Activity,
    title: 'Hospitals & Healthcare',
    slug: 'hospitals',
    desc: 'Tamper-proof, hermetically sealed, FSSAI-compliant water for VIP wards, wellness centres, and corporate health campuses.',
    tags: ['FSSAI compliant', 'Tamper-evident seals', 'BIS IS 14543', 'Bulk pallet supply'],
  },
  {
    icon: Building2,
    title: 'Corporate Offices',
    slug: 'corporate',
    desc: 'Project authority and brand excellence in boardrooms, investor meetings, and client reception areas.',
    tags: ['Monthly supply contracts', 'Branded boardroom water', 'MOQ flexible', 'Account manager'],
  },
  {
    icon: Heart,
    title: 'Weddings & Events',
    slug: 'events',
    desc: 'Create lasting impressions with foil-embossed, custom-monogrammed bottles tailored to your event theme.',
    tags: ['Metallic foil labels', 'Wedding monograms', 'Express production', 'Pan-India delivery'],
  },
  {
    icon: Factory,
    title: 'Manufacturing & Plants',
    slug: null,
    desc: 'Certified, reliable bulk supply for industrial campuses, employee welfare, and plant operations.',
    tags: ['Pallet orders', 'Scheduled delivery', 'ISI marked', 'Competitive pricing'],
  },
  {
    icon: GraduationCap,
    title: 'Institutions & Universities',
    slug: null,
    desc: 'Clean, safe hydration for convocations, sports days, and large academic events.',
    tags: ['High-volume supply', 'Custom labels', 'Safe seals', 'Budget-friendly'],
  },
  {
    icon: Plane,
    title: 'Travel & Airlines',
    slug: null,
    desc: 'Lightweight, custom-labelled PET bottles for in-flight service, coach travel, and VIP transit.',
    tags: ['Lightweight PET', '200ml–500ml formats', 'Custom wrap labels', 'Fast production'],
  },
];

export default function Industries() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sipvoda.com/' },
      { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://www.sipvoda.com/industries' }
    ]
  };

  return (
    <>
      <PageSEO
        title="Custom Branded Water Bottles by Industry | Hotels, Restaurants, Corporates — SIPVODA"
        description="SIPVODA supplies custom branded packaged drinking water to hotels, restaurants, corporate offices, hospitals, weddings, and events across India. BIS certified, FSSAI licensed."
        canonical="https://www.sipvoda.com/industries"
        jsonLd={jsonLd}
      />

      <div className="min-h-screen pt-20 bg-white text-navy-900">
        <Breadcrumb items={[{ label: 'Industries' }]} />

        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden py-20 bg-gradient-to-b from-sky-50/40 via-white to-white border-b border-slate-100">
          <WaterCausticsCanvas theme="light" className="opacity-50 pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl font-extrabold font-serif text-navy-900 tracking-tight mb-6">
              Custom Water Bottles for Every Industry
            </h1>
            <p className="text-slate-600 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed font-light">
              SIPVODA creates bespoke, BIS-certified packaged drinking water for businesses across India — from luxury hotel chains and fine-dining restaurants to corporate offices, hospitals, weddings, and events.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map(({ icon: Icon, title, slug, desc, tags }) => (
                <div key={title} className="rounded-2xl bg-white border border-slate-200 p-6 shadow-lux-sm hover:shadow-lux hover:border-azure-400 transition-all duration-300 flex flex-col">
                  <div className="w-10 h-10 rounded-xl bg-azure-50 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-azure-600" />
                  </div>
                  <h2 className="text-xl font-serif font-bold text-navy-900 mb-2">{title}</h2>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-grow">{desc}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200 text-[11px] font-semibold text-slate-600">{tag}</span>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="text-xs font-bold text-azure-600 hover:text-navy-900 flex items-center gap-1.5 transition-colors mt-auto"
                  >
                    Request Industry Quote <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-navy-900 text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold">
              Not Sure Which Solution Fits Your Industry?
            </h2>
            <p className="text-sm text-slate-300 font-light">
              Contact our team — we'll recommend the right bottle format, label design, and supply plan for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="px-8 py-4 rounded-xl bg-white text-navy-900 hover:bg-sky-50 text-xs uppercase tracking-widest font-semibold">
                Contact Our Team
              </Link>
              <Link to="/b2b" className="px-8 py-4 rounded-xl border border-white/30 text-white hover:bg-white/10 text-xs uppercase tracking-widest font-semibold">
                View B2B Solutions
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
