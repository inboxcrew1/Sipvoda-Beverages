import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, ArrowRight, ShieldCheck, Sparkles, 
  Hotel, Heart, UtensilsCrossed, 
  Building2, ChevronDown, ChevronLeft, ChevronRight, Star, Droplets,
  Activity, Factory, GraduationCap, Plane, Award
} from 'lucide-react';
import WaterVideoBackground from '../components/WaterVideoBackground';
import WaterCausticsCanvas from '../components/WaterCausticsCanvas';
import WaterDropRipple from '../components/WaterDropRipple';

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const stats = [
    { number: '100K+', label: 'Bottles Delivered Across India' },
    { number: '500+', label: 'Hospitality & Corporate Partners' },
    { number: '100%', label: 'Bespoke Label Freedom' },
    { number: 'IS 14543', label: 'BIS Certified Bottling Standard' },
  ];

  // Authentic SIPVODA Product Catalog
  const collection = [
    {
      id: 'glass-500',
      name: '500ml Luxury Flint Glass',
      volume: '500ml',
      material: 'Ultra-Clear Flint Glass',
      closure: 'Aluminum Threaded Cap',
      image: '/assets/images/99fb22e5c6da0940d51d81ca5b20c346.png',
      desc: 'Sophisticated heavy-base glass silhouette tailored for fine dining tables, executive suites, and luxury lounges.',
      moq: '1,000 units'
    },
    {
      id: 'glass-750',
      name: '750ml Reserve Glass',
      volume: '750ml',
      material: 'Recyclable Premium Flint Glass',
      closure: 'Crown / Metal Threaded',
      image: '/assets/images/432bc749f59061c644ceb361f27397f8.png',
      desc: 'The pinnacle of tabletop presentation for gala banquets, high-profile corporate dinners, and regal weddings.',
      moq: '500 units'
    },
    {
      id: 'pet-500',
      name: '500ml Recyclable PET',
      volume: '500ml',
      material: 'BPA-Free Food-Grade PET',
      closure: 'Hermetic Safety Cap',
      image: '/assets/images/e4f24746f42bfa09a9d54cdbb3b80a0a.jpg',
      desc: 'Ergonomic, featherlight bottle offering maximum label canvas for corporate summits and luxury travel fleets.',
      moq: '1,500 units'
    },
    {
      id: 'pet-250',
      name: '250ml Event PET',
      volume: '250ml',
      material: 'BPA-Free Recyclable PET',
      closure: 'Tamper-Evident Cap',
      image: '/assets/images/20961136f46e6fe96804d03c3a02f259.jpg',
      desc: 'Compact, grab-and-go silhouette engineered for high-volume conferences, weddings, seminars, and VIP gift boxes.',
      moq: '2,000 units'
    },
    {
      id: 'can-300',
      name: '300ml Clear PET Can',
      volume: '300ml',
      material: 'Clear Body + Aluminum End',
      closure: 'Easy-Open Pull Tab',
      image: '/assets/images/93f3f50dab8faf2d622940667734c325.png',
      desc: 'A modern beverage format blending crystal clarity with the iconic tactile appeal of a pull-tab can.',
      moq: '1,000 units'
    },
    {
      id: 'pet-1000',
      name: '1 Liter Banqueting PET',
      volume: '1L',
      material: 'Food-Grade Recyclable PET',
      closure: 'Airtight Seal Cap',
      image: '/assets/images/7169a775a3f7d71f6bebefc7726d2f06.jpg',
      desc: 'Generous format for shared dining tables, executive boardrooms, and all-day hospitality hydration.',
      moq: '1,000 units'
    }
  ];

  // B2B Industry Sectors
  const industries = [
    {
      icon: Hotel,
      title: 'Hotels & Resorts',
      desc: 'Provide discerning guests with custom-branded glass water bottles in suites, lounges, and bedside presentations.',
      image: '/assets/images/37abdc24cd72b0b1f7e1f79d1df594de.png',
      tag: 'Luxury Hospitality'
    },
    {
      icon: UtensilsCrossed,
      title: 'Restaurants & Cafés',
      desc: 'Elevate tabletop aesthetics and beverage margins with branded water that mirrors your culinary excellence.',
      image: '/assets/images/99fb22e5c6da0940d51d81ca5b20c346.png',
      tag: 'Fine Dining'
    },
    {
      icon: Building2,
      title: 'Corporate Offices',
      desc: 'Project authority and premium brand standard in executive boardrooms, investor meets, and client lobbies.',
      image: '/assets/images/26d213b3262676b83436ae75a6bf8589.jpg',
      tag: 'Enterprise'
    },
    {
      icon: Heart,
      title: 'Weddings & Celebrations',
      desc: 'Delight wedding guests with monogrammed, foil-embossed bottles tailored to the wedding theme.',
      image: '/assets/images/37abdc24cd72b0b1f7e1f79d1df594de.png',
      tag: 'Private Events'
    },
    {
      icon: Activity,
      title: 'Hospitals & Healthcare',
      desc: 'Hygienic, hermetically sealed, tamper-proof hydration bottles for private VIP wards and wellness centers.',
      image: '/assets/images/20961136f46e6fe96804d03c3a02f259.jpg',
      tag: 'Medical & Wellness'
    },
    {
      icon: Factory,
      title: 'Manufacturing & Plants',
      desc: 'Reliable bulk pallet shipments of certified pure packaged drinking water for industrial campuses.',
      image: '/assets/images/f6fb4863029c8cbe9913e6482ac3beb2.png',
      tag: 'Industrial'
    },
    {
      icon: GraduationCap,
      title: 'Institutions & Universities',
      desc: 'Clean, safe hydration for academic convocations, sports tournaments, and large-scale summits.',
      image: '/assets/images/7169a775a3f7d71f6bebefc7726d2f06.jpg',
      tag: 'Academia'
    }
  ];

  const testimonials = [
    {
      quote: "SIPVODA's custom glass bottles transformed our fine-dining water presentation. Guests consistently notice and compliment the pristine design and crisp water taste.",
      author: 'Rajiv Malhotra',
      role: 'Director of Food & Beverage',
      org: 'Heritage Luxury Hotels & Resorts',
      stars: 5,
    },
    {
      quote: "For our multi-day global leadership conference in Delhi NCR, SIPVODA delivered 15,000 custom-branded bottles flawlessly on schedule. Their reliability is unmatched.",
      author: 'Ayesha Kapoor',
      role: 'Head of Corporate Affairs',
      org: 'Apex Global Financial Technologies',
      stars: 5,
    },
    {
      quote: "The personalized gold foil bottles created for our destination wedding in Udaipur were a massive talking point. Truly luxurious presentation down to every detail.",
      author: 'Vikram & Shalini Singhal',
      role: 'Private Wedding Clients',
      org: 'The Oberoi Celebration',
      stars: 5,
    },
  ];

  const faqs = [
    {
      q: 'What is the Minimum Order Quantity (MOQ) for custom-branded water bottles?',
      a: 'Our MOQ starts at 500 units for luxury glass reserve bottles, 1,000 units for standard glass and PET cans, and 1,500 units for recyclable PET bottles. We support trial test batches for hospitality groups.',
    },
    {
      q: 'What certifications does SIPVODA hold?',
      a: 'SIPVODA operates a certified bottling facility in Bulandshahr, Uttar Pradesh. Our water strictly complies with Bureau of Indian Standards (BIS) IS 14543 for Packaged Drinking Water and is fully licensed under FSSAI.',
    },
    {
      q: 'How long does custom label design and production take?',
      a: 'Digital proofs are delivered within 24 hours of receiving your logo and brand guidelines. Once approved, production typically takes 7 to 10 business days before dispatch across North and Central India.',
    },
    {
      q: 'Can SIPVODA handle recurring monthly deliveries for hotels and corporate offices?',
      a: 'Yes. We offer recurring scheduled supply contracts with automated weekly or monthly deliveries, pallet storage, and dedicated account manager support.',
    },
  ];

  return (
    <div className="w-full bg-white text-navy-900 selection:bg-azure-600 selection:text-white">
      
      {/* =========================================================================
          1. HERO SECTION: CINEMATIC WATER + WHITE SPACE + SIPVODA BOTTLE
          ========================================================================= */}
      <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-12 overflow-hidden bg-white">
        
        {/* Royalty-Free Looping Water Video Layer */}
        <WaterVideoBackground
          src="/assets/videos/water-crystal-clear.mp4"
          poster="/assets/images/unsplash_13.png"
          playbackRate={0.7}
        />

        {/* Dynamic Light Water Caustics Overlay */}
        <WaterCausticsCanvas theme="light" className="opacity-70 pointer-events-none" />

        {/* Main Hero Visual Composition */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Clean, Confident Luxury Typography */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-6 pt-6 sm:pt-0">
              
              {/* Minimal Luxury Headline */}
              <div className="space-y-1">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-navy-900 tracking-tight leading-[1.05]">
                  SIPVODA
                </h1>
                <div className="text-2xl sm:text-4xl lg:text-5xl font-serif font-light text-slate-700 tracking-wide">
                  PURE WATER. ELEVATED.
                </div>
              </div>

              {/* Subheading with luxury restraint */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-normal max-w-xl leading-relaxed">
                Premium packaged drinking water crafted for world-class hospitality, prestigious corporate leadership, and bespoke celebrations.
              </p>

              {/* Action Buttons: Thumb-friendly, tactile */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-2">
                <Link
                  to="/products"
                  className="px-8 py-4 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs uppercase tracking-widest font-semibold shadow-lux hover:shadow-lux-hover text-center transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/contact"
                  className="px-8 py-4 rounded-xl bg-white/95 hover:bg-slate-50 text-navy-900 border border-slate-200 text-xs uppercase tracking-widest font-semibold shadow-sm hover:shadow-lux-sm text-center transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Partner With Us</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-4 text-xs text-slate-500 font-medium border-t border-slate-200/60 w-full max-w-lg">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>FSSAI Compliant</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-azure-600" />
                  <span>Zero Heavy Metals</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>Custom Glass & PET</span>
                </div>
              </div>

            </div>

            {/* Right Column: SIPVODA Complete Custom Bottle Fleet in Soft Blurry Frame */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative w-full mt-8 lg:mt-0">
              
              {/* Luminous Ambient Water Glows (Behind the frame) */}
              <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-gradient-to-tr from-sky-300/40 via-azure-400/25 to-teal-300/30 blur-3xl pointer-events-none -top-10 -right-10" />
              <div className="absolute w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-gradient-to-bl from-blue-400/30 via-cyan-300/25 to-white/40 blur-3xl pointer-events-none -bottom-10 -left-10" />

              {/* Showcase Container with Gentle Floating Motion */}
              <div className="relative z-10 w-full max-w-[360px] sm:max-w-[440px] lg:max-w-[480px] animate-float-slow">
                
                {/* Blurry, Feathered Luxury Frame (No sharp rectangular edges) */}
                <div className="blurry-hero-frame-outer relative p-2 sm:p-3">
                  
                  {/* Outer feathered glow border */}
                  <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-sky-100/40 via-white/20 to-sky-200/30 shadow-[0_15px_40px_-10px_rgba(2,132,199,0.25)]">
                    
                    {/* The Full Bottle Collection Photo with feathered soft radial mask */}
                    <img
                      src="/assets/images/hero-bottles-showcase.jpg"
                      alt="SIPVODA Custom Branded Fleet - Your Brand Our Water"
                      className="w-full h-auto object-cover blurry-feathered-image transform hover:scale-[1.02] transition-transform duration-700 ease-out"
                    />

                    {/* Soft Blurred Edge Vignette / Inner Feathering Overlay */}
                    <div className="blurry-edge-vignette" />

                    {/* Subtle Liquid Shine Across Top Rim */}
                    <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/30 via-white/10 to-transparent pointer-events-none rounded-t-[2rem]" />
                  </div>

                  {/* Floating Luxury Glass Pill Badge */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-lux text-[11px] font-semibold tracking-wider uppercase text-navy-900 flex items-center gap-2 whitespace-nowrap z-20">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Your Brand • Our Water</span>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>

        {/* Section 6: Water Drop Micro-Animation & Scroll Indicator */}
        <div className="relative z-20 flex flex-col items-center justify-center mt-6">
          <WaterDropRipple />
          <span className="text-[10px] uppercase tracking-[0.25em] text-slate-400 font-semibold mt-1">
            Scroll To Explore
          </span>
        </div>

      </section>


      {/* =========================================================================
          2. SCROLL TRANSITION: "PURE BY NATURE."
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-white via-sky-50/20 to-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-azure-50 border border-azure-200 text-azure-700 text-xs font-semibold uppercase tracking-widest">
            <Droplets className="w-3.5 h-3.5" />
            <span>The Origin</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-navy-900 tracking-tight">
            PURE BY NATURE.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
            Every drop begins deep within protected underground aquifers. Purified through rigorous multi-barrier microfiltration, reverse osmosis, and ultraviolet sterilization, then naturally re-mineralized to deliver a velvety, crisp, refreshing finish.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 text-left">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-lux-sm"
              >
                <div className="text-2xl sm:text-3xl font-serif font-bold text-navy-900">
                  {stat.number}
                </div>
                <div className="text-xs text-slate-500 mt-1 font-medium leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* =========================================================================
          8. THE SIPVODA COLLECTION (PURE WHITE LUXURY SHOWCASE)
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-navy-900 tracking-tight">
              THE SIPVODA COLLECTION
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-light">
              Pure water. Beautifully presented.
            </p>
          </div>

          {/* Product Grid with Subtle Reflections & Fluid Hover Lift */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {collection.map((bottle) => (
              <div
                key={bottle.id}
                className="group relative rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 flex flex-col justify-between shadow-lux hover:shadow-lux-hover hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                {/* Ambient Highlight */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-azure-50/50 rounded-bl-full pointer-events-none" />

                {/* Bottle Photography with Liquid Reflection */}
                <div className="relative w-full h-64 sm:h-72 flex flex-col items-center justify-center my-4">
                  <img
                    src={bottle.image}
                    alt={bottle.name}
                    className="h-52 sm:h-60 object-contain drop-shadow-[0_15px_25px_rgba(10,30,63,0.12)] group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Water Reflection */}
                  <div className="relative w-32 -mt-4 pointer-events-none">
                    <img
                      src={bottle.image}
                      alt="Reflection"
                      className="w-full h-16 object-contain bottle-water-reflection group-hover:opacity-40 transition-opacity duration-500"
                    />
                  </div>
                </div>

                {/* Specs & Description */}
                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest font-bold text-azure-600">
                      {bottle.volume}
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">
                      MOQ: {bottle.moq}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-navy-900 group-hover:text-azure-700 transition-colors">
                    {bottle.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 font-normal">
                    {bottle.desc}
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-500 pt-2">
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="block font-semibold text-navy-900">Material</span>
                      <span className="truncate">{bottle.material}</span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="block font-semibold text-navy-900">Closure</span>
                      <span className="truncate">{bottle.closure}</span>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="w-full mt-4 py-3 rounded-xl bg-slate-50 group-hover:bg-navy-900 group-hover:text-white text-navy-900 border border-slate-200 group-hover:border-navy-900 text-xs font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-all duration-300"
                  >
                    <span>Request Samples</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================================
          9. "WATER IN MOTION" SECTION (PANORAMIC CINEMATIC WATER INTERLUDE)
          ========================================================================= */}
      <section className="relative py-28 sm:py-36 bg-navy-900 text-white overflow-hidden">
        
        {/* Royalty-Free Looping Ocean & Sunlight Water Video */}
        <div className="absolute inset-0 z-0">
          <video
            src="/assets/videos/water-in-motion.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover opacity-35"
            style={{ filter: 'brightness(110%) contrast(110%)' }}
          />
          {/* Subtle Dark Overlay Vignette for Pristine Typography Legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/60 to-navy-950" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sky-200 text-xs uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-azure-400" />
            <span>Living Hydration</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-tight">
            WATER SHOULD FEEL ALIVE.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
            Untouched purity. Balanced natural minerals. Bottled at source in Bulandshahr, Uttar Pradesh under strict BIS IS 14543 standards. We treat water not as a commodity, but as the essence of hospitality.
          </p>

          <div className="pt-4">
            <Link
              to="/water"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-navy-900 hover:bg-sky-50 text-xs font-semibold uppercase tracking-widest shadow-xl transition-colors"
            >
              <span>Explore The 7-Stage Purification Process</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </section>


      {/* =========================================================================
          11. B2B SECTION: "WATER THAT CARRIES YOUR BRAND."
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-azure-50 border border-azure-200 text-azure-700 text-xs font-semibold uppercase tracking-widest">
              <Award className="w-3.5 h-3.5" />
              <span>Enterprise & Hospitality</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-navy-900 tracking-tight">
              WATER THAT CARRIES YOUR BRAND.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-light">
              Tailored private-label water solutions crafted for prestigious institutions across India.
            </p>
          </div>

          {/* Industry Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.title}
                  className="rounded-2xl bg-white border border-slate-200/80 p-6 flex flex-col justify-between shadow-lux-sm hover:shadow-lux hover:border-azure-400 transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-azure-50 text-azure-600 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-full">
                        {ind.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-navy-900">
                      {ind.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to="/contact"
                      className="text-xs font-bold text-azure-600 hover:text-navy-900 flex items-center gap-1.5 transition-colors"
                    >
                      <span>Request Industry Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Centered Big CTA */}
          <div className="text-center mt-12">
            <Link
              to="/b2b"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs font-semibold uppercase tracking-widest shadow-lux transition-all duration-300"
            >
              <span>Explore Complete B2B Enterprise Solutions →</span>
            </Link>
          </div>

        </div>
      </section>




      {/* =========================================================================
          13. TESTIMONIALS & TRUST PROOF
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-900 tracking-tight">
              Trusted by Premier Establishments
            </h2>
            <p className="text-sm text-slate-600">
              Hear how leaders in hospitality and enterprise rate their SIPVODA partnership.
            </p>
          </div>

          <div className="relative rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-12 shadow-lux-sm">
            <div className="flex items-center gap-1 text-amber-500 mb-6">
              {[...Array(testimonials[currentTestimonial].stars)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>

            <blockquote className="text-lg sm:text-2xl font-serif text-navy-900 leading-relaxed mb-8 italic">
              "{testimonials[currentTestimonial].quote}"
            </blockquote>

            <div className="flex items-center justify-between border-t border-slate-200 pt-6">
              <div>
                <div className="text-sm font-bold text-navy-900">
                  {testimonials[currentTestimonial].author}
                </div>
                <div className="text-xs text-slate-500">
                  {testimonials[currentTestimonial].role} • <span className="text-azure-600 font-medium">{testimonials[currentTestimonial].org}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                  className="p-2.5 rounded-full border border-slate-200 bg-white hover:bg-slate-100 text-navy-900 transition-colors shadow-sm"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                  className="p-2.5 rounded-full border border-slate-200 bg-white hover:bg-slate-100 text-navy-900 transition-colors shadow-sm"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          14. FREQUENTLY ASKED QUESTIONS
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-slate-50/70 border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-900 tracking-tight">
              Frequently Answered Inquiries
            </h2>
            <p className="text-sm text-slate-600">
              Clear information regarding minimum order quantities, certifications, and logistics.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={faq.q}
                className="rounded-2xl bg-white border border-slate-200/80 overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-bold text-navy-900 hover:text-azure-700 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? 'rotate-180 text-azure-600' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================================
          15. FINAL PRE-FOOTER CONCIERGE BANNER
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white border-t border-slate-100 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-navy-900 tracking-tight">
            Ready to Elevate Your Brand Water?
          </h2>
          <p className="text-base text-slate-600 font-light max-w-xl mx-auto">
            Contact our concierge team for custom sample kits, quotation sheets, and plant production schedules.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs uppercase tracking-widest font-semibold shadow-lux transition-all duration-300"
            >
              Request Custom Bottle Samples
            </Link>
            <a
              href="tel:+919528021068"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-navy-900 text-xs uppercase tracking-widest font-semibold transition-colors"
            >
              Call +91 9528021068
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
