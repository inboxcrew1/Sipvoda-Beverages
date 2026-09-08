import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Core Pages
import Home from './pages/Home';
import TheWater from './pages/TheWater';
import Products from './pages/Products';
import B2BSolutions from './pages/B2BSolutions';
import CustomBottles from './pages/CustomBottles';
import Sustainability from './pages/Sustainability';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// SEO Landing Pages
import CustomWaterBottles from './pages/CustomWaterBottles';
import PrivateLabelWater from './pages/PrivateLabelWater';
import B2BWaterSupply from './pages/B2BWaterSupply';
import Industries from './pages/Industries';
import LocationBulandshahr from './pages/LocationBulandshahr';
import { LocationNoida, LocationDelhi, LocationGurugram } from './pages/LocationPages';

import { Toaster } from 'sonner';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-navy-900 selection:bg-azure-600 selection:text-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          {/* ── Core pages ────────────────────────────────── */}
          <Route path="/" element={<Home />} />
          <Route path="/water" element={<TheWater />} />
          <Route path="/products" element={<Products />} />
          <Route path="/b2b" element={<B2BSolutions />} />
          <Route path="/custom-bottles" element={<CustomBottles />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* ── SEO Commercial Landing Pages ──────────────── */}
          <Route path="/custom-water-bottles" element={<CustomWaterBottles />} />
          <Route path="/private-label-water" element={<PrivateLabelWater />} />
          <Route path="/b2b-water-supply" element={<B2BWaterSupply />} />
          <Route path="/industries" element={<Industries />} />

          {/* ── Location Landing Pages ────────────────────── */}
          <Route path="/custom-water-bottles-bulandshahr" element={<LocationBulandshahr />} />
          <Route path="/custom-water-bottles-noida" element={<LocationNoida />} />
          <Route path="/custom-water-bottles-delhi" element={<LocationDelhi />} />
          <Route path="/custom-water-bottles-gurugram" element={<LocationGurugram />} />

          {/* ── Convenience aliases / redirects ───────────── */}
          <Route path="/custom-branded-water-bottles" element={<Navigate to="/custom-water-bottles" replace />} />
          <Route path="/own-brand-water" element={<Navigate to="/private-label-water" replace />} />
          <Route path="/hotels" element={<Navigate to="/industries" replace />} />
          <Route path="/restaurants" element={<Navigate to="/industries" replace />} />
          <Route path="/hospitals" element={<Navigate to="/industries" replace />} />
          <Route path="/corporate" element={<Navigate to="/industries" replace />} />
          <Route path="/events" element={<Navigate to="/industries" replace />} />

          {/* ── 404 ───────────────────────────────────────── */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <Toaster position="top-center" theme="light" richColors />
    </div>
  );
}
