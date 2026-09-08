import React from 'react';
import { Link } from 'react-router-dom';
import { Droplets, Mail, Phone, MapPin, Clock, Instagram, Linkedin, Facebook, ArrowUpRight, ShieldCheck, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const brandNav = [
    { name: 'Home', path: '/' },
    { name: 'About SIPVODA', path: '/about' },
    { name: 'Bottle Collection', path: '/products' },
    { name: 'Custom Water Bottles', path: '/custom-water-bottles' },
    { name: 'Private Label Water', path: '/private-label-water' },
    { name: 'B2B Solutions', path: '/b2b' },
    { name: 'B2B Water Supply', path: '/b2b-water-supply' },
    { name: 'Industries', path: '/industries' },
    { name: 'The Water & Purity', path: '/water' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Contact Concierge', path: '/contact' },
  ];

  const locationNav = [
    { name: 'Custom Bottles — Bulandshahr', path: '/custom-water-bottles-bulandshahr' },
    { name: 'Custom Bottles — Noida', path: '/custom-water-bottles-noida' },
    { name: 'Custom Bottles — Delhi', path: '/custom-water-bottles-delhi' },
    { name: 'Custom Bottles — Gurugram', path: '/custom-water-bottles-gurugram' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/sipvoda' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/company/sipvoda-beverages' },
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/sipvodabeverages' },
  ];

  return (
    <footer className="relative bg-slate-50 text-slate-600 pt-16 sm:pt-24 pb-12 border-t border-slate-200/80 overflow-hidden">
      {/* Ocean Wave Accent Line */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-azure-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-200">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col items-start gap-4">
            <Link to="/" className="flex items-center group" aria-label="SIPVODA Home">
              <img
                src="/assets/images/a1fafd0a4ad93bfb960a148fbc21db07.png"
                alt="SIPVODA - Pure Water. Elevated."
                className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-azure-600">
              PURE WATER. BETTER EXPERIENCES.
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm">
              India's premier high-end packaged drinking water manufacturer. Bespoke glass and recyclable PET water bottles crafted for luxury hospitality, prestigious celebrations, and corporate leadership.
            </p>

            {/* Direct Quick Contact Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1 w-full sm:w-auto">
              <a
                href="https://wa.me/919528021068"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[40px] px-3.5 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-1.5 shadow-sm hover:bg-emerald-100 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Concierge</span>
              </a>
              <a
                href="tel:+919528021068"
                className="min-h-[40px] px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-navy-900 text-xs font-semibold flex items-center gap-1.5 shadow-sm hover:bg-slate-50 transition-colors"
              >
                <Phone className="w-4 h-4 text-azure-600" />
                <span>+91 9528021068</span>
              </a>
            </div>

            <div className="flex items-center gap-2.5 pt-2">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white hover:bg-azure-50 hover:text-azure-600 border border-slate-200 text-slate-600 flex items-center justify-center transition-colors shadow-sm"
                    aria-label={`SIPVODA on ${s.name}`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-navy-900 mb-4">
              Explore
            </h3>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {brandNav.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="py-1 text-slate-600 hover:text-azure-600 transition-colors inline-flex items-center gap-1"
                >
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>

            {/* Location SEO Links */}
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-navy-900 mt-6 mb-3">
              Locations We Serve
            </h3>
            <div className="space-y-1.5 text-xs">
              {locationNav.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-slate-600 hover:text-azure-600 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Certified Standard</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-tight">
                BIS IS 14543 Packaged Drinking Water & FSSAI License Compliant.
              </p>
            </div>
          </div>

          {/* Plant & Production Facility Details */}
          <div className="lg:col-span-4">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-navy-900 mb-4">
              Production Plant & HQ
            </h3>

            <div className="space-y-3.5 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-azure-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-navy-900">Bottling Facility</div>
                  <div className="text-slate-600">
                    SIPVODA Beverages Plant, Bulandshahr, Uttar Pradesh, India
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-azure-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-navy-900">Direct Inquiries</div>
                  <a href="tel:+919528021068" className="text-slate-600 hover:text-azure-600 transition-colors">
                    +91 9528021068
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-azure-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-navy-900">Official Support</div>
                  <a href="mailto:support@sipvoda.com" className="text-slate-600 hover:text-azure-600 transition-colors">
                    support@sipvoda.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-azure-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-navy-900">Operations</div>
                  <div className="text-slate-600">Mon - Sat: 9:00 AM - 7:00 PM IST</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal, Credits & Copyright Bar */}
        <div className="pt-8 mt-2 border-t border-slate-200/60 grid grid-cols-1 lg:grid-cols-3 items-center gap-4 text-xs text-slate-500">
          {/* Left: Copyright */}
          <div className="text-center lg:text-left">
            © {currentYear} SIPVODA Beverages. All rights reserved.
          </div>

          {/* Middle: Designed & Developed by inboxcrew (Highlighted for Desktop and Mobile) */}
          <div className="flex items-center justify-center">
            <a
              href="https://www.inboxcrew.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-sky-50 via-azure-50/90 to-blue-50 hover:from-sky-100 hover:to-azure-100 border border-azure-200 shadow-sm hover:shadow transition-all duration-300 text-xs text-slate-700 group"
              title="Designed & Developed by inboxcrew"
            >
              <span className="text-slate-600 font-medium">Designed &amp; Developed by</span>
              <span className="font-bold text-azure-700 group-hover:text-azure-900 tracking-wide underline decoration-azure-400 decoration-1.5 underline-offset-2">
                inboxcrew
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-azure-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Right: Legal Links */}
          <div className="flex items-center justify-center lg:justify-end gap-6">
            <Link to="/contact" className="hover:text-azure-600 transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-azure-600 transition-colors">Terms of Supply</Link>
            <Link to="/contact" className="hover:text-azure-600 transition-colors">Bulk Logistics</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
