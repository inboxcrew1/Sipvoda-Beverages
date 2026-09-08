import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, ShieldCheck, Package, Clock } from 'lucide-react';
import PageSEO from '../components/PageSEO';
import Breadcrumb from '../components/Breadcrumb';

function LocationPage({ city, slug, description, metaDesc, nearby = [] }) {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.sipvoda.com/' },
        { '@type': 'ListItem', position: 2, name: 'Custom Water Bottles', item: 'https://www.sipvoda.com/custom-water-bottles' },
        { '@type': 'ListItem', position: 3, name: city, item: `https://www.sipvoda.com/custom-water-bottles-${slug}` }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: `SIPVODA Beverages — ${city}`,
      description: `Custom branded packaged drinking water bottle supplier for ${city}. BIS IS 14543 certified, FSSAI licensed.`,
      url: `https://www.sipvoda.com/custom-water-bottles-${slug}`,
      telephone: '+91 9528021068',
      email: 'support@sipvoda.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bulandshahr',
        addressRegion: 'Uttar Pradesh',
        addressCountry: 'IN'
      },
      areaServed: [city, 'Delhi NCR', 'Uttar Pradesh'],
      priceRange: '$$'
    }
  ];

  return (
    <>
      <PageSEO
        title={`Custom Water Bottles ${city} | Branded Packaged Water — SIPVODA`}
        description={metaDesc}
        canonical={`https://www.sipvoda.com/custom-water-bottles-${slug}`}
        jsonLd={jsonLd}
      />

      <div className="min-h-screen pt-20 bg-white text-navy-900">
        <Breadcrumb items={[
          { label: 'Custom Water Bottles', href: '/custom-water-bottles' },
          { label: city }
        ]} />

        <section className="py-20 bg-gradient-to-b from-sky-50/40 to-white border-b border-slate-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-azure-50 border border-azure-200 text-azure-700 text-xs font-semibold tracking-widest uppercase mb-6">
              <MapPin className="w-4 h-4" />
              <span>{city}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-serif text-navy-900 tracking-tight mb-6">
              Custom Water Bottles in {city}
            </h1>
            <p className="text-slate-600 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed font-light mb-8">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="px-8 py-4 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs uppercase tracking-widest font-semibold shadow-lux transition-all flex items-center gap-2 group">
                <span>Get {city} Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/custom-water-bottles" className="px-8 py-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-navy-900 text-xs uppercase tracking-widest font-semibold">
                See All Bottles
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: MapPin, title: 'Source — Bulandshahr', desc: `Our certified plant in Bulandshahr ensures fast, reliable delivery to ${city} with minimal lead times.` },
                { icon: ShieldCheck, title: 'BIS IS 14543 Certified', desc: 'Every bottle meets India\'s packaged drinking water standard.' },
                { icon: Package, title: 'MOQ from 500 Units', desc: 'Accessible for restaurants, event planners, and SMEs in ' + city + '.' },
                { icon: Clock, title: '7–10 Day Production', desc: 'Fast turnaround from approved design to delivery in ' + city + '.' },
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

        {nearby.length > 0 && (
          <section className="py-12 bg-slate-50 border-t border-slate-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
              <h2 className="text-xl font-serif font-bold text-navy-900 mb-6">Also Serving</h2>
              <div className="flex flex-wrap justify-center gap-3">
                {nearby.map(link => (
                  <Link key={link.label} to={link.href} className="px-5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold hover:border-azure-400 hover:text-azure-700 transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-16 bg-navy-900 text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold">
              Order Custom Bottles in {city}
            </h2>
            <p className="text-sm text-slate-300 font-light">
              Contact SIPVODA for a production quote, 3D label preview, and fast delivery to {city}.
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

// --- NOIDA ---
export function LocationNoida() {
  return (
    <LocationPage
      city="Noida"
      slug="noida"
      metaDesc="SIPVODA supplies custom branded packaged drinking water bottles to hotels, restaurants, and corporates in Noida. BIS certified, FSSAI licensed. Fast delivery from Bulandshahr plant."
      description="SIPVODA is the trusted custom water bottle supplier for businesses in Noida and Greater Noida. We supply BIS IS 14543 certified, FSSAI licensed branded packaged drinking water to hotels, restaurants, corporate offices, hospitals, and events — with fast delivery from our Bulandshahr plant."
      nearby={[
        { label: 'Custom Bottles Bulandshahr', href: '/custom-water-bottles-bulandshahr' },
        { label: 'Custom Bottles Delhi', href: '/custom-water-bottles-delhi' },
        { label: 'Custom Bottles Gurugram', href: '/custom-water-bottles-gurugram' },
      ]}
    />
  );
}

// --- DELHI ---
export function LocationDelhi() {
  return (
    <LocationPage
      city="Delhi"
      slug="delhi"
      metaDesc="Order custom branded water bottles for your Delhi business. SIPVODA supplies hotels, restaurants, corporates, and events in Delhi with BIS certified packaged drinking water."
      description="SIPVODA delivers custom-labelled packaged drinking water to hotels, restaurants, corporate brands, hospitals, and event venues across Delhi. Our BIS IS 14543 certified bottling plant in Bulandshahr ensures consistent quality and reliable supply for the Delhi market."
      nearby={[
        { label: 'Custom Bottles Noida', href: '/custom-water-bottles-noida' },
        { label: 'Custom Bottles Bulandshahr', href: '/custom-water-bottles-bulandshahr' },
        { label: 'Custom Bottles Gurugram', href: '/custom-water-bottles-gurugram' },
      ]}
    />
  );
}

// --- GURUGRAM ---
export function LocationGurugram() {
  return (
    <LocationPage
      city="Gurugram"
      slug="gurugram"
      metaDesc="Custom branded water bottles for Gurugram hotels, corporates, and events. SIPVODA supplies BIS certified packaged drinking water from Bulandshahr. Fast delivery to Gurgaon."
      description="SIPVODA supplies custom-branded packaged drinking water bottles to luxury hotels, corporate offices, restaurants, and premium events in Gurugram (Gurgaon). BIS IS 14543 certified and FSSAI licensed — fast delivery from our Bulandshahr manufacturing facility."
      nearby={[
        { label: 'Custom Bottles Delhi', href: '/custom-water-bottles-delhi' },
        { label: 'Custom Bottles Noida', href: '/custom-water-bottles-noida' },
        { label: 'Custom Bottles Bulandshahr', href: '/custom-water-bottles-bulandshahr' },
      ]}
    />
  );
}
