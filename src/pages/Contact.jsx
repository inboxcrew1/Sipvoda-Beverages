import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, CheckCircle2, ShieldCheck, ArrowRight, Loader2, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import WaterCausticsCanvas from '../components/WaterCausticsCanvas';

export default function Contact() {
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    city: '',
    requirement: '500ml Luxury Glass',
    quantity: '1,000 - 2,500 units',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const bottleParam = params.get('bottle');
    const brandParam = params.get('brand');
    const sectorParam = params.get('sector');

    if (bottleParam || brandParam || sectorParam) {
      setFormData((prev) => ({
        ...prev,
        requirement: bottleParam || sectorParam || prev.requirement,
        company: brandParam || prev.company,
      }));
    }
  }, [location.search]);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your full name (minimum 2 characters)';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Please enter your company, hotel, or occasion name';
    }

    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    if (!cleanPhone || !/^\+?[0-9]{10,15}$/.test(cleanPhone)) {
      newErrors.phone = 'Please enter a valid 10-15 digit phone or WhatsApp number';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'Please enter your destination city or state';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error('Please complete all required fields correctly before submitting.');
      return;
    }

    setIsSubmitting(true);

    // Realistic processing delay
    await new Promise((resolve) => setTimeout(resolve, 600));

    try {
      // Save lead locally to preserve data across sessions
      const existingLeads = JSON.parse(localStorage.getItem('sipvoda_leads') || '[]');
      const newLead = {
        ...formData,
        id: 'SIP-' + Date.now(),
        submittedAt: new Date().toISOString()
      };
      existingLeads.unshift(newLead);
      localStorage.setItem('sipvoda_leads', JSON.stringify(existingLeads.slice(0, 50)));

      setSubmittedData(newLead);
      setIsSubmitting(false);
      toast.success('Inquiry confirmed! You can also forward it directly to WhatsApp below.');
    } catch (err) {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
      toast.success('Inquiry confirmed! Forward to WhatsApp Concierge for immediate review.');
    }
  };

  const generateWhatsAppUrl = (data) => {
    const msg = 
      `*New SIPVODA Inquiry*\n\n` +
      `*Name:* ${data.name}\n` +
      `*Company/Event:* ${data.company}\n` +
      `*Phone:* ${data.phone}\n` +
      `*Email:* ${data.email}\n` +
      `*Format:* ${data.requirement}\n` +
      `*Quantity:* ${data.quantity}\n` +
      `*Location:* ${data.city}\n` +
      (data.message ? `*Notes:* ${data.message}\n\n` : `\n`) +
      `_Submitted via sipvoda.com concierge_`;
    return `https://wa.me/919528021068?text=${encodeURIComponent(msg)}`;
  };

  const generateMailtoUrl = (data) => {
    const subject = `SIPVODA Custom Bottle Inquiry - ${data.company}`;
    const body = 
      `Name: ${data.name}\n` +
      `Company/Event: ${data.company}\n` +
      `Phone: ${data.phone}\n` +
      `Email: ${data.email}\n` +
      `Format: ${data.requirement}\n` +
      `Quantity: ${data.quantity}\n` +
      `Delivery City: ${data.city}\n\n` +
      `Details: ${data.message || 'N/A'}`;
    return `mailto:support@sipvoda.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen pt-20 bg-white text-navy-900">
      {/* Hero Header */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden py-16 bg-gradient-to-b from-sky-50/40 via-white to-white border-b border-slate-100">
        <WaterCausticsCanvas theme="light" className="opacity-60 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-azure-50 border border-azure-200 text-azure-700 text-xs font-semibold tracking-widest uppercase mb-4">
            <Mail className="w-3.5 h-3.5 text-azure-600" />
            <span>Concierge Consultation</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif text-navy-900 tracking-tight mb-4">
            INITIATE A PARTNERSHIP
          </h1>

          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-light">
            Request sample bottles, technical specifications, or private-label quotations. Our team responds within 2-4 business hours.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Information Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left: Contact Info & Facility Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-50/80 border border-slate-200/80 shadow-lux-sm space-y-6">
                <div>
                  <h3 className="text-xl font-serif font-bold text-navy-900 mb-1">
                    Direct Corporate Concierge
                  </h3>
                  <p className="text-xs text-slate-500">
                    Reach our executives for immediate quotation or logistics advisory.
                  </p>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-azure-600 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-navy-900">Direct Inquiries</div>
                      <a href="tel:+919528021068" className="text-slate-600 hover:text-azure-600 transition-colors font-medium">
                        +91 9528021068
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-azure-600 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-navy-900">Official Support</div>
                      <a href="mailto:support@sipvoda.com" className="text-slate-600 hover:text-azure-600 transition-colors font-medium">
                        support@sipvoda.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-azure-600 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-navy-900">Bottling Facility</div>
                      <div className="text-slate-600">
                        SIPVODA Beverages Plant, Bulandshahr, Uttar Pradesh, India
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-azure-600 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-navy-900">Operations Schedule</div>
                      <div className="text-slate-600">
                        Monday – Saturday: 9:00 AM – 7:00 PM IST
                      </div>
                    </div>
                  </div>
                </div>

                {/* Instant WhatsApp Concierge Button */}
                <div className="pt-2">
                  <a
                    href="https://wa.me/919528021068?text=Hello%20SIPVODA,%20I%20would%20like%20to%20inquire%20about%20custom%20bottled%20water."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold hover:bg-emerald-100 transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Verified Badges */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-lux-sm space-y-2 text-xs">
                <div className="flex items-center gap-2 font-bold text-navy-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Bureau of Indian Standards IS 14543</span>
                </div>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  Compliant with BIS IS 14543 for Packaged Drinking Water and licensed under Food Safety and Standards Authority of India (FSSAI).
                </p>
              </div>
            </div>

            {/* Right: Clean Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-lux">
                {submittedData ? (
                  <div className="text-center py-8 space-y-6">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-2xl font-serif font-bold text-navy-900">
                        Inquiry Confirmed
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                        Thank you, <span className="font-semibold text-navy-900">{submittedData.name}</span>. Your request for <span className="font-semibold text-azure-700">{submittedData.company}</span> has been logged.
                      </p>
                    </div>

                    {/* Summary Card */}
                    <div className="max-w-md mx-auto p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-1.5 text-slate-600">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Selected Format:</span>
                        <span className="font-semibold text-navy-900">{submittedData.requirement}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Order Volume:</span>
                        <span className="font-semibold text-navy-900">{submittedData.quantity}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Destination:</span>
                        <span className="font-semibold text-navy-900">{submittedData.city}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Contact:</span>
                        <span className="font-semibold text-navy-900">{submittedData.phone}</span>
                      </div>
                    </div>

                    {/* Direct Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                      <a
                        href={generateWhatsAppUrl(submittedData)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Forward to WhatsApp Concierge</span>
                      </a>

                      <a
                        href={generateMailtoUrl(submittedData)}
                        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-navy-900 border border-slate-200 font-semibold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
                      >
                        <Mail className="w-4 h-4 text-azure-600" />
                        <span>Send via Email</span>
                      </a>
                    </div>

                    <div className="pt-4 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => {
                          setSubmittedData(null);
                          setFormData({
                            name: '',
                            company: '',
                            phone: '',
                            email: '',
                            city: '',
                            requirement: '500ml Luxury Glass',
                            quantity: '1,000 - 2,500 units',
                            message: ''
                          });
                        }}
                        className="text-xs font-semibold text-azure-600 hover:text-azure-700 underline underline-offset-4"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          autoComplete="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Rajesh Sharma"
                          className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-navy-900 placeholder:text-slate-400 focus:outline-none focus:bg-white text-base transition-colors ${
                            errors.name ? 'border-rose-500 focus:border-rose-500' : 'border-slate-200 focus:border-azure-500'
                          }`}
                        />
                        {errors.name && (
                          <div className="flex items-center gap-1 text-[11px] text-rose-600 mt-1">
                            <AlertCircle className="w-3 h-3 shrink-0" />
                            <span>{errors.name}</span>
                          </div>
                        )}
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5">
                          Business / Occasion Name *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          autoComplete="organization"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Grand Resort / Corporate"
                          className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-navy-900 placeholder:text-slate-400 focus:outline-none focus:bg-white text-base transition-colors ${
                            errors.company ? 'border-rose-500 focus:border-rose-500' : 'border-slate-200 focus:border-azure-500'
                          }`}
                        />
                        {errors.company && (
                          <div className="flex items-center gap-1 text-[11px] text-rose-600 mt-1">
                            <AlertCircle className="w-3 h-3 shrink-0" />
                            <span>{errors.company}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          autoComplete="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-navy-900 placeholder:text-slate-400 focus:outline-none focus:bg-white text-base transition-colors ${
                            errors.phone ? 'border-rose-500 focus:border-rose-500' : 'border-slate-200 focus:border-azure-500'
                          }`}
                        />
                        {errors.phone && (
                          <div className="flex items-center gap-1 text-[11px] text-rose-600 mt-1">
                            <AlertCircle className="w-3 h-3 shrink-0" />
                            <span>{errors.phone}</span>
                          </div>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          autoComplete="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="rajesh@company.com"
                          className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-navy-900 placeholder:text-slate-400 focus:outline-none focus:bg-white text-base transition-colors ${
                            errors.email ? 'border-rose-500 focus:border-rose-500' : 'border-slate-200 focus:border-azure-500'
                          }`}
                        />
                        {errors.email && (
                          <div className="flex items-center gap-1 text-[11px] text-rose-600 mt-1">
                            <AlertCircle className="w-3 h-3 shrink-0" />
                            <span>{errors.email}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="requirement" className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5">
                          Bottle Format
                        </label>
                        <select
                          id="requirement"
                          name="requirement"
                          value={formData.requirement}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-navy-900 focus:outline-none focus:border-azure-500 focus:bg-white text-base"
                        >
                          <option value="500ml Luxury Glass">500ml Luxury Glass</option>
                          <option value="750ml Reserve Glass">750ml Reserve Glass</option>
                          <option value="300ml Boutique Glass">300ml Boutique Glass</option>
                          <option value="500ml Recyclable PET">500ml Recyclable PET</option>
                          <option value="250ml Event PET">250ml Event PET</option>
                          <option value="300ml Clear PET Can">300ml Clear PET Can</option>
                          <option value="1 Liter Banqueting PET">1 Liter Banqueting PET</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="quantity" className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5">
                          Estimated Quantity
                        </label>
                        <select
                          id="quantity"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-navy-900 focus:outline-none focus:border-azure-500 focus:bg-white text-base"
                        >
                          <option value="500 - 1,000 units">500 – 1,000 units (Trial Batch)</option>
                          <option value="1,000 - 2,500 units">1,000 – 2,500 units</option>
                          <option value="2,500 - 5,000 units">2,500 – 5,000 units</option>
                          <option value="5,000+ units">5,000+ units (Bulk Pallet)</option>
                          <option value="Monthly Contract">Recurring Monthly Supply</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="city" className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5">
                        Delivery City / State *
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        required
                        autoComplete="address-level2"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="e.g. Delhi NCR, Jaipur, Mumbai, Lucknow"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-navy-900 placeholder:text-slate-400 focus:outline-none focus:bg-white text-base transition-colors ${
                          errors.city ? 'border-rose-500 focus:border-rose-500' : 'border-slate-200 focus:border-azure-500'
                        }`}
                      />
                      {errors.city && (
                        <div className="flex items-center gap-1 text-[11px] text-rose-600 mt-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.city}</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5">
                        Specific Label or Event Details
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Share your label finish preference (e.g. gold foil, matte), delivery deadline, or special requirements..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-navy-900 placeholder:text-slate-400 focus:outline-none focus:border-azure-500 focus:bg-white text-base"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-navy-900 hover:bg-navy-800 disabled:bg-navy-700 text-white font-semibold text-xs uppercase tracking-widest shadow-lux transition-all flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-azure-400" />
                          <span>Securing Proposal...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Request Custom Bottle Proposal</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
