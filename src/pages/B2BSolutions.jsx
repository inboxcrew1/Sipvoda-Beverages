import React from 'react';
import { Link } from 'react-router-dom';
import { Hotel, UtensilsCrossed, Building2, Heart, ShieldCheck, Truck, Clock, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import WaterCausticsCanvas from '../components/WaterCausticsCanvas';

export default function B2BSolutions() {
  const sectors = [
    {
      icon: Hotel,
      title: 'Luxury Hotels & Resorts',
      lead: 'In-Room Amenities & Turndown Hospitality',
      desc: 'Elevate guest satisfaction from the moment they step into the lobby. Replace generic supermarket plastic with bespoke flint glass bottles bearing your hotel coat of arms.',
      image: '/assets/images/99fb22e5c6da0940d51d81ca5b20c346.png',
      idealSizes: '500ml Glass, 300ml Boutique Glass'
    },
    {
      icon: UtensilsCrossed,
      title: 'Fine Dining & Gourmet Cafés',
      lead: 'Tabletop Elegance & Culinary Pairing',
      desc: 'Water is the silent canvas for food and wine. Our balanced pH water cleanses the palate and complements gourmet dining presentations with sleek custom labels.',
      image: '/assets/images/20961136f46e6fe96804d03c3a02f259.jpg',
      idealSizes: '750ml Reserve Glass, 300ml Transparent Can'
    },
    {
      icon: Building2,
      title: 'Corporate Offices & Summits',
      lead: 'Executive Meetings & Investor Relations',
      desc: 'Project authority and prestige in boardrooms, AGMs, and client meetings. Water bottles customized with your enterprise logo deliver an unforgettable touchpoint.',
      image: '/assets/images/26d213b3262676b83436ae75a6bf8589.jpg',
      idealSizes: '500ml PET, 250ml Event PET'
    },
    {
      icon: Heart,
      title: 'Weddings & Royal Celebrations',
      lead: 'Monogrammed Keepsake Favors',
      desc: 'Celebrate your union with customized bottles featuring the bride and groom’s names, wedding hashtag, and floral motifs in opulent gold foil.',
      image: '/assets/images/37abdc24cd72b0b1f7e1f79d1df594de.png',
      idealSizes: '250ml PET, 500ml Luxury Glass'
    }
  ];

  const enterpriseFeatures = [
    {
      icon: Truck,
      title: 'Pan-India Palletized Supply',
      desc: 'Direct factory logistics from our Bulandshahr UP plant to major metropolises and destination resort hubs.'
    },
    {
      icon: Clock,
      title: 'Automated Recurring Delivery',
      desc: 'Never run out of branded inventory with scheduled weekly or monthly restock plans tailored to your consumption.'
    },
    {
      icon: Sparkles,
      title: 'In-House 3D Studio',
      desc: 'Our graphic designers transform your brand assets into print-ready artwork and photorealistic 3D proofs within 24 hours.'
    },
    {
      icon: ShieldCheck,
      title: 'Strict Quality Consistency',
      desc: 'Every batch conforms strictly to BIS IS 14543 certification standards with complete batch test certificates.'
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-white text-navy-900">
      {/* Hero Header */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden py-24 bg-gradient-to-b from-sky-50/40 via-white to-white border-b border-slate-100">
        <WaterCausticsCanvas theme="light" className="opacity-60 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-azure-50 border border-azure-200 text-azure-700 text-xs font-semibold tracking-widest uppercase mb-6">
            <Building2 className="w-4 h-4 text-azure-600" />
            <span>Enterprise Solutions</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold font-serif text-navy-900 tracking-tight mb-6">
            WATER THAT CARRIES YOUR BRAND
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Comprehensive private-label water solutions, contract bottling, and nationwide logistics engineered for premier hospitality and corporate leaders.
          </p>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {sectors.map((sector, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={sector.title}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center rounded-3xl bg-slate-50/70 border border-slate-200/80 p-8 sm:p-12 shadow-lux-sm ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-200/80 p-8 flex items-center justify-center shadow-sm">
                    <img
                      src={sector.image}
                      alt={sector.title}
                      className="h-64 sm:h-72 object-contain drop-shadow-md"
                    />
                  </div>
                </div>

                <div className={`lg:col-span-6 space-y-4 ${isEven ? 'lg:order-1' : ''}`}>
                  <div className="text-xs font-semibold uppercase tracking-widest text-azure-600">
                    {sector.lead}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-navy-900">
                    {sector.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-light">
                    {sector.desc}
                  </p>
                  <div className="pt-2 text-xs text-slate-500 font-semibold">
                    Recommended Formats: <span className="text-navy-900">{sector.idealSizes}</span>
                  </div>
                  <div className="pt-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs font-semibold uppercase tracking-wider shadow-lux transition-all"
                    >
                      <span>Request Industry Proposal</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Enterprise Capabilities */}
      <section className="py-24 bg-slate-50/70 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-900 tracking-tight">
              Enterprise Bottling Capabilities
            </h2>
            <p className="text-slate-600 text-sm font-light">
              Built to manage high-volume corporate accounts with seamless consistency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {enterpriseFeatures.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-lux-sm hover:shadow-lux transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-azure-50 text-azure-600 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-navy-900 mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
