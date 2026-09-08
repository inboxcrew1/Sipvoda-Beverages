import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, ShieldCheck, Package, Clock } from 'lucide-react';
import PageSEO from '../components/PageSEO';
import Breadcrumb from '../components/Breadcrumb';

export default function LocationBulandshahr() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sipvoda.com/' },
        { '@type': 'ListItem', position: 2, name: 'Custom Water Bottles', item: 'https://www.sipvoda.com/custom-water-bottles' },
        { '@type': 'ListItem', position: 3, name: 'Bulandshahr', item: 'https://www.sipvoda.com/custom-water-bottles-bulandshahr' }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://www.sipvoda.com/#localbusiness',
      name: 'SIPVODA Beverages — Bulandshahr',
      description: 'Custom branded packaged drinking water bottles produced and supplied from Bulandshahr, Uttar Pradesh. BIS IS 14543 certified. Serving hotels, corporates, and events.',
      url: 'https://www.sipvoda.com/custom-water-bottles-bulandshahr',
      telephone: '+91 9528021068',
      email: 'support@sipvoda.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bulandshahr',
        addressRegion: 'Uttar Pradesh',
        addressCountry: 'IN'
      },
      areaServed: ['Bulandshahr', 'Noida', 'Greater Noida', 'Delhi NCR', 'Uttar Pradesh'],
      priceRange: '$$'
    }
  ];

  return (
    <>
      <PageSEO
        title="Custom Water Bottles Bulandshahr | Branded Packaged Drinking Water — SIPVODA"
        description="SIPVODA supplies custom branded packaged drinking water bottles from Bulandshahr, UP. BIS certified, FSSAI licensed. Hotels, corporates, weddings. Fast local delivery."
        canonical="https://www.sipvoda.com/custom-water-bottles-bulandshahr"
        jsonLd={jsonLd}
      />

      <div className="min-h-screen pt-20 bg-white text-navy-900">
        <Breadcrumb items={[
          { label: 'Custom Water Bottles', href: '/custom-water-bottles' },
          { label: 'Bulandshahr' }
        ]} />

        <section className="py-20 bg-gradient-to-b from-sky-50/40 to-white border-b border-slate-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-azure-50 border border-azure-200 text-azure-700 text-xs font-semibold tracking-widest uppercase mb-6">
              <MapPin className="w-4 h-4" />
              <span>Bulandshahr, Uttar Pradesh</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-serif text-navy-900 tracking-tight mb-6">
              Custom Water Bottles in Bulandshahr
            </h1>
            <p className="text-slate-600 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed font-light mb-8">
              SIPVODA's bottling plant is located in Bulandshahr, Uttar Pradesh — making us the fastest and most cost-effective supplier of custom branded packaged drinking water bottles for businesses in Bulandshahr and the surrounding NCR region. BIS IS 14543 certified. FSSAI licensed.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="px-8 py-4 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs uppercase tracking-widest font-semibold shadow-lux transition-all flex items-center gap-2 group">
                <span>Get Local Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/custom-water-bottles" className="px-8 py-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-navy-900 text-xs uppercase tracking-widest font-semibold">
                See All Bottle Options
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-serif font-bold text-navy-900 text-center mb-10">
              Why SIPVODA is Bulandshahr's #1 Custom Water Bottle Supplier
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: MapPin, title: 'Local Production', desc: 'Our certified plant is in Bulandshahr — shortest supply chain, freshest water, fastest delivery.' },
                { icon: ShieldCheck, title: 'BIS IS 14543 Certified', desc: 'Every batch is tested and certified to India\'s packaged drinking water standard.' },
                { icon: Package, title: 'MOQ from 500 Units', desc: 'Accessible minimums for small businesses, hotels, and event planners in the region.' },
                { icon: Clock, title: '7–10 Day Turnaround', desc: 'From approved design to delivery — one of the fastest in Uttar Pradesh.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-lux-sm text-center">
                  <div className="w-10 h-10 rounded-xl bg-azure-50 flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-5 h-5 text-azure-600" />
                  </div>
                  <h3 className="font-serif font-bold text-navy-900 mb-2">{title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl font-serif font-bold text-navy-900 mb-4">Who We Supply in Bulandshahr</h2>
            <p className="text-sm text-slate-600 mb-8">
              SIPVODA provides custom-labelled packaged drinking water to a wide range of businesses across Bulandshahr and its surrounding areas.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Hotels', 'Restaurants', 'Corporate Offices', 'Schools & Colleges', 'Hospitals & Clinics',
                'Weddings & Events', 'Gyms', 'Factories & Plants', 'Retail Chains'].map(tag => (
                <span key={tag} className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl font-serif font-bold text-navy-900 mb-4">Also Serving Nearby Cities</h2>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {[
                { label: 'Custom Bottles Noida', href: '/custom-water-bottles-noida' },
                { label: 'Custom Bottles Delhi', href: '/custom-water-bottles-delhi' },
                { label: 'Custom Bottles Gurugram', href: '/custom-water-bottles-gurugram' },
              ].map(link => (
                <Link key={link.label} to={link.href} className="px-5 py-2.5 rounded-full bg-azure-50 border border-azure-200 text-azure-700 text-xs font-semibold hover:bg-azure-100 transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-navy-900 text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold">
              Get a Free Quote for Custom Bottles in Bulandshahr
            </h2>
            <p className="text-sm text-slate-300 font-light">
              Call us or fill in our enquiry form — we respond within 24 hours with a production quote and 3D label preview.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="px-8 py-4 rounded-xl bg-white text-navy-900 hover:bg-sky-50 text-xs uppercase tracking-widest font-semibold">
                Request Quote
              </Link>
              <a href="tel:+919528021068" className="px-8 py-4 rounded-xl border border-white/30 text-white hover:bg-white/10 text-xs uppercase tracking-widest font-semibold">
                Call Now
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
