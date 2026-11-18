import React, { useState } from 'react';
import { 
  Droplets, Gauge, Tag, Package, Binary, Wind, Cylinder, Sparkles,
  CheckCircle2, ArrowRight, MessageCircle, Phone, FileText, 
  ShieldCheck, Wrench, Factory, ExternalLink, HelpCircle, ChevronDown, Award, MapPin, UserCheck
} from 'lucide-react';
import PageSEO from '../components/PageSEO';
import { 
  MACHINERY_CATEGORIES, 
  MACHINERY_CATALOGUE, 
  VERIFIED_PLANT_INSTALLATIONS, 
  TURNKEY_SERVICES,
  buildMachineryWhatsAppUrl,
  buildGeneralMachineryWhatsAppUrl,
  WHATSAPP_PHONE
} from '../data/machineryData';

/**
 * Individual Machine Card Component with Dynamic Capacity/Configuration Dropdown
 */
function MachineCard({ machine }) {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(
    machine.defaultOptionIndex ?? 0
  );

  const hasOptions = machine.hasDropdown && machine.options && machine.options.length > 0;
  const currentOption = hasOptions ? machine.options[selectedOptionIndex] : null;

  // Dynamic price and capacity label
  const displayedPrice = hasOptions
    ? currentOption?.formattedPrice
    : machine.formattedPrice;

  const currentCapacityOrConfig = hasOptions
    ? (currentOption?.capacity || currentOption?.label)
    : (machine.capacity || machine.operation);

  const whatsappUrl = buildMachineryWhatsAppUrl(
    machine.name,
    hasOptions ? currentOption?.label : currentCapacityOrConfig,
    displayedPrice
  );

  return (
    <div 
      id={machine.id}
      className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
    >
      {/* Product Image Section */}
      <div className="relative bg-slate-50 border-b border-slate-100 p-6 flex items-center justify-center min-h-[260px] max-h-[300px] overflow-hidden">
        <img
          src={machine.image}
          alt={machine.name}
          className="max-h-[230px] w-auto max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          width="400"
          height="300"
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-navy-900 text-white tracking-wide shadow-sm">
            {machine.categoryName}
          </span>
          <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-azure-50 text-azure-700 border border-azure-200/60">
            {machine.operation}
          </span>
        </div>

        {machine.material && (
          <div className="absolute bottom-3 right-4">
            <span className="text-[11px] font-medium text-slate-500 bg-white/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-slate-200 shadow-xs">
              {machine.material}
            </span>
          </div>
        )}
      </div>

      {/* Product Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-navy-900 leading-snug group-hover:text-azure-600 transition-colors">
            {machine.name}
          </h3>
          <p className="text-xs text-azure-700 font-medium mt-1">
            {machine.subtitle}
          </p>

          <p className="text-sm text-slate-600 mt-3 leading-relaxed">
            {machine.description}
          </p>

          {/* Key Engineering Features */}
          {machine.features && (
            <ul className="mt-4 space-y-2 border-t border-slate-100 pt-3">
              {machine.features.slice(0, 3).map((feat, idx) => (
                <li key={idx} className="flex items-start text-xs text-slate-600 gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Static Specs list if applicable */}
          {machine.specs && (
            <div className="mt-4 bg-slate-50 rounded-xl p-3 border border-slate-100 space-y-1.5">
              {machine.specs.map((s, idx) => (
                <div key={idx} className="flex justify-between text-xs">
                  <span className="text-slate-500">{s.label}:</span>
                  <span className="font-semibold text-navy-900 text-right">{s.value}</span>
                </div>
              ))}
            </div>
          )}

          {/* Verification note if present */}
          {machine.verificationNote && (
            <p className="text-[11px] text-amber-700 bg-amber-50/70 border border-amber-200/60 rounded-lg p-2 mt-3">
              ℹ️ {machine.verificationNote}
            </p>
          )}
        </div>

        {/* Pricing & Interactive Selector */}
        <div className="mt-6 pt-4 border-t border-slate-100">
          {/* Dynamic Dropdown Selector */}
          {hasOptions && (
            <div className="mb-4">
              <label 
                htmlFor={`selector-${machine.id}`}
                className="block text-xs font-semibold text-navy-900 uppercase tracking-wider mb-1.5"
              >
                {machine.selectorLabel || 'Select Capacity / Option'}:
              </label>
              <div className="relative">
                <select
                  id={`selector-${machine.id}`}
                  value={selectedOptionIndex}
                  onChange={(e) => setSelectedOptionIndex(Number(e.target.value))}
                  className="w-full appearance-none bg-slate-50 hover:bg-slate-100/80 border border-slate-300 text-navy-900 text-sm font-medium rounded-xl py-2.5 pl-3.5 pr-10 transition-colors focus:ring-2 focus:ring-azure-500 focus:outline-none cursor-pointer"
                >
                  {machine.options.map((opt, idx) => (
                    <option key={idx} value={idx}>
                      {opt.label} — {opt.formattedPrice}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Sub-note for option */}
              {currentOption?.usedFor && (
                <p className="text-[11px] text-slate-500 mt-1 italic">
                  Matched for: {currentOption.usedFor}
                </p>
              )}
              {currentOption?.breakdown && (
                <p className="text-[11px] text-azure-700 mt-1 font-medium">
                  Includes: {currentOption.breakdown}
                </p>
              )}
            </div>
          )}

          {/* Price display row */}
          <div className="flex items-baseline justify-between mb-4">
            <div>
              <span className="text-xs uppercase font-medium text-slate-500 tracking-wider">
                Indicative Price:
              </span>
              <div className="text-2xl font-extrabold text-navy-900 tracking-tight flex items-baseline gap-1">
                <span>{displayedPrice}</span>
                <span className="text-[11px] font-normal text-slate-500">INR</span>
              </div>
            </div>
            <span className="text-[11px] text-slate-500 text-right">
              + GST & Freight as applicable
            </span>
          </div>

          {/* Action Button: WhatsApp Enquiry */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function WaterPlantMachinery() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredMachines = activeCategory === 'all'
    ? MACHINERY_CATALOGUE
    : MACHINERY_CATALOGUE.filter(m => m.category === activeCategory);

  return (
    <>
      <PageSEO
        title="Complete Water Bottling Plant & Packaging Machinery | SIPVODA Catalogue"
        description="Explore commercial RO water plants (500-6000 LPH), bottle filling machines (24-120 BPM), shrink group packing, labelling, date coders & PET blowing machines with updated INR pricing."
        canonicalUrl="https://sipvoda.com/water-plant-machinery"
      />

      <div className="bg-white min-h-screen">
        {/* ── HERO SECTION ─────────────────────────────────── */}
        <section className="relative bg-gradient-to-b from-navy-900 via-navy-900 to-slate-900 text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Subtle background ambient light */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,119,182,0.18),transparent_70%)] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            {/* Header pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-azure-500/10 border border-azure-400/20 text-azure-300 text-xs sm:text-sm font-medium mb-6">
              <Factory className="w-4 h-4 text-azure-400" />
              <span>Complete Bottling Plant Engineering & Machinery Catalogue</span>
            </div>

            {/* Main Page Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight">
              Complete Water Bottling Plant & Packaging Machinery
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Explore Complete Bottling Solutions, Machinery, Production Capacities, Technical Specifications &amp; Pricing.
            </p>

            {/* Quick Actions */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#catalogue-grid"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-azure-600 hover:bg-azure-500 text-white font-semibold text-sm shadow-lg hover:shadow-azure-500/25 transition-all duration-200"
              >
                <span>Browse Machinery Catalogue</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={buildGeneralMachineryWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm backdrop-blur-sm transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                <span>Turnkey Plant Enquiry</span>
              </a>
            </div>

            {/* Key Value Points */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-slate-800/80 text-left">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-azure-400 flex-shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-white">BIS IS 14543</div>
                  <div className="text-[11px] text-slate-400">Compliance Standard</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Droplets className="w-6 h-6 text-azure-400 flex-shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-white">500 – 6,000 LPH</div>
                  <div className="text-[11px] text-slate-400">RO Plant Capacities</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Gauge className="w-6 h-6 text-azure-400 flex-shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-white">24 – 120 BPM</div>
                  <div className="text-[11px] text-slate-400">Filling Line Speeds</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Wrench className="w-6 h-6 text-azure-400 flex-shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-white">Pan-India Support</div>
                  <div className="text-[11px] text-slate-400">Erection & Commissioning</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CATEGORY FILTER NAVIGATION ───────────────────── */}
        <section className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs py-3 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar py-1">
            {MACHINERY_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </section>

        {/* ── MACHINERY CATALOGUE GRID ─────────────────────── */}
        <section id="catalogue-grid" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="mb-10 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                {activeCategory === 'all' 
                  ? 'All Water Bottling & Packaging Machines' 
                  : MACHINERY_CATEGORIES.find(c => c.id === activeCategory)?.name}
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Showing {filteredMachines.length} machinery systems with selectable capacities and direct INR quotation options.
              </p>
            </div>
            <div className="text-xs text-slate-500 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg inline-block">
              Supplier Partner: <strong className="text-navy-900 font-semibold">Maa Brijeshwari Engineering (Bulandshahr)</strong>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMachines.map((machine) => (
              <MachineCard key={machine.id} machine={machine} />
            ))}
          </div>
        </section>

        {/* ── VERIFIED CUSTOMER FEEDBACK & LIVE PLANT INSTALLATIONS ──── */}
        <section className="py-16 bg-slate-50 border-t border-b border-slate-200 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
                <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Real Operating Facilities &amp; Owner Reviews</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-900">
                Verified Plant Installations &amp; Performance Feedback
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600">
                Authentic feedback from licensed packaged drinking water bottling plant operators across Uttar Pradesh, NCR, and Haryana.
              </p>
            </div>

            {/* Installations Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {VERIFIED_PLANT_INSTALLATIONS.map((plant) => (
                <div 
                  key={plant.id} 
                  className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    {/* Plant photo if available */}
                    {plant.images && plant.images.length > 0 && (
                      <div className="mb-4 rounded-xl overflow-hidden border border-slate-100 bg-slate-100">
                        <img 
                          src={plant.images[0]} 
                          alt={`${plant.plantName} Installation`}
                          className="w-full h-52 object-cover"
                          loading="lazy"
                        />
                      </div>
                    )}

                    {/* Verified badge */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        ✓ {plant.verifiedBadge}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        Operating since {plant.operatingSince}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-navy-900 leading-snug">
                      {plant.plantName}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-slate-500 mt-1 mb-3">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span>{plant.location}</span>
                    </div>

                    <div className="bg-slate-50 rounded-lg p-2.5 mb-3 border border-slate-100 text-xs">
                      <span className="text-slate-500">Machine Deployed: </span>
                      <strong className="text-navy-900">{plant.machineType}</strong>
                    </div>

                    {/* Actual review quote */}
                    <p className="text-xs text-slate-700 leading-relaxed italic border-l-2 border-azure-400 pl-3 my-3">
                      "{plant.review}"
                    </p>
                  </div>

                  {/* Owner info */}
                  <div className="pt-4 border-t border-slate-100 mt-2 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-navy-900">{plant.owner}</div>
                      <div className="text-[11px] text-slate-500">{plant.designation}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[11px] text-slate-400">Capacity</div>
                      <div className="text-xs font-semibold text-azure-700">{plant.capacityOutput}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TURNKEY SETUP SECTION ────────────────────────── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-r from-navy-900 via-navy-900 to-slate-900 text-white p-8 sm:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[radial-gradient(circle_at_70%_50%,rgba(0,119,182,0.25),transparent_70%)] pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-azure-500/20 text-azure-300 text-xs font-semibold mb-4 border border-azure-400/30">
                <Factory className="w-3.5 h-3.5" />
                <span>End-to-End Plant Setup</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Looking for a Complete Water Bottling Plant Setup?
              </h2>

              <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                Contact SIPVODA for turnkey machinery requirements, plant layout engineering, civil &amp; piping CAD schematics, and complete quotation assistance.
              </p>

              {/* Turnkey highlights */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {TURNKEY_SERVICES.map((srv, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-3.5 backdrop-blur-xs">
                    <h4 className="text-xs font-bold text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-azure-400" />
                      {srv.title}
                    </h4>
                    <p className="text-[11px] text-slate-300 mt-1 leading-normal">
                      {srv.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Direct Turnkey CTA */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={buildGeneralMachineryWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Consult Plant Engineers on WhatsApp</span>
                </a>

                <a
                  href={`tel:+${WHATSAPP_PHONE}`}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium text-sm transition-all"
                >
                  <Phone className="w-4 h-4 text-azure-300" />
                  <span>Direct Hotline: +91 9528021068</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── PRICING DISCLAIMER SECTION ───────────────────── */}
        <section className="bg-slate-100/80 border-t border-slate-200 py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 uppercase tracking-widest mb-2">
              <ShieldCheck className="w-4 h-4 text-slate-500" />
              <span>Official Commercial Terms &amp; Pricing Disclaimer</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
              "All displayed prices are indicative supplier-quoted prices and subject to confirmation. Final pricing, GST, transportation, installation and commissioning charges will be confirmed during quotation."
            </p>
            <p className="text-[11px] text-slate-500 mt-3">
              Standard commercial terms: 18% GST applicable on industrial machinery. Freight charged at actuals from Bulandshahr / NCR dispatch depot. Warranty and AMC terms provided in official proforma quotation.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
