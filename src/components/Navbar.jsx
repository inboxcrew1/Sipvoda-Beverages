import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall, Droplets, ArrowRight, MessageCircle, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    const nextState = !mobileMenuOpen;
    setMobileMenuOpen(nextState);
    document.body.style.overflow = nextState ? 'hidden' : '';
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Custom Bottles', path: '/custom-bottles' },
    { name: 'B2B Solutions', path: '/b2b' },
    { name: 'The Water', path: '/water' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/92 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_4px_25px_rgba(10,30,63,0.04)] py-3'
            : 'bg-white/80 backdrop-blur-md py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo - Official SIPVODA Logo for Phone & Desktop */}
            <Link to="/" className="flex items-center group shrink-0" aria-label="SIPVODA Home">
              <img
                src="/assets/images/a1fafd0a4ad93bfb960a148fbc21db07.png"
                alt="SIPVODA - Pure Water. Elevated."
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs uppercase tracking-widest transition-all duration-200 relative py-1 font-semibold ${
                    isActive(link.path)
                      ? 'text-azure-600 font-bold'
                      : 'text-slate-600 hover:text-navy-900'
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-azure-600 rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Right Action Buttons - Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://wa.me/919528021068?text=Hello%20SIPVODA,%20I%20would%20like%20to%20discuss%20custom%20bottled%20water"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl text-slate-600 hover:text-azure-600 hover:bg-slate-100 border border-slate-200 transition-colors"
                title="WhatsApp Concierge"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href="tel:+919528021068"
                className="hidden xl:flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-navy-900 px-3 py-2 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200"
              >
                <PhoneCall className="w-3.5 h-3.5 text-azure-600" />
                <span>+91 9528021068</span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider font-semibold text-white bg-navy-900 hover:bg-navy-800 shadow-lux hover:shadow-lux-hover transition-all duration-300"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Actions & Hamburger */}
            <div className="flex items-center gap-2 xl:hidden">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-navy-900 sm:hidden"
              >
                <span>Inquire</span>
              </Link>

              <button
                type="button"
                onClick={toggleMobileMenu}
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                className="p-2.5 rounded-xl text-navy-900 hover:bg-slate-100 border border-slate-200 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Editorial Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 xl:hidden pt-20 pb-6 bg-white/98 backdrop-blur-2xl flex flex-col justify-between overflow-y-auto border-b border-slate-200 animate-fadeIn">
          <div className="px-6 py-4 space-y-2">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <img
                src="/assets/images/a1fafd0a4ad93bfb960a148fbc21db07.png"
                alt="SIPVODA Logo"
                className="h-8 sm:h-9 w-auto object-contain"
              />
              <div className="flex items-center gap-1.5 text-[10px] font-semibold text-azure-700 uppercase tracking-wider bg-azure-50 px-2.5 py-1 rounded-full border border-azure-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>BIS IS 14543</span>
              </div>
            </div>

            <nav className="divide-y divide-slate-100 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => toggleMobileMenu()}
                  className={`flex items-center justify-between py-3.5 text-base font-serif tracking-wide transition-colors ${
                    isActive(link.path)
                      ? 'text-azure-600 font-bold pl-2 border-l-2 border-azure-600'
                      : 'text-navy-900 hover:text-azure-600'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Bottom Action Tray */}
          <div className="px-6 pt-4 border-t border-slate-200 bg-slate-50/80 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <a
                href="tel:+919528021068"
                className="flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-navy-900 shadow-sm"
              >
                <PhoneCall className="w-4 h-4 text-azure-600" />
                <span>Call Concierge</span>
              </a>
              <a
                href="https://wa.me/919528021068?text=Hello%20SIPVODA,%20I%20would%20like%20to%20discuss%20custom%20water%20bottles"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl border border-emerald-200 bg-emerald-50 text-xs font-semibold text-emerald-800 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>

            <Link
              to="/contact"
              onClick={() => toggleMobileMenu()}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-navy-900 text-white text-sm font-semibold tracking-wider uppercase shadow-lux"
            >
              <span>Get a Business Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <p className="text-[11px] text-center text-slate-500 pt-1">
              Bulandshahr UP • support@sipvoda.com • IS 14543
            </p>
          </div>
        </div>
      )}
    </>
  );
}
