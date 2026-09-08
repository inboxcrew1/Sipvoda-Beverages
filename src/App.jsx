import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import TheWater from './pages/TheWater';
import Products from './pages/Products';
import B2BSolutions from './pages/B2BSolutions';
import CustomBottles from './pages/CustomBottles';
import Sustainability from './pages/Sustainability';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-navy-900 selection:bg-azure-600 selection:text-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/water" element={<TheWater />} />
          <Route path="/products" element={<Products />} />
          <Route path="/b2b" element={<B2BSolutions />} />
          <Route path="/custom-bottles" element={<CustomBottles />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <Toaster position="top-center" theme="light" richColors />
    </div>
  );
}
