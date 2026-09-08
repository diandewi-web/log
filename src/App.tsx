/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import ProductsPage from './components/ProductsPage';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuotationModal from './components/QuotationModal';

export default function App() {
  const [activeView, setActiveView] = useState('beranda');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const renderView = () => {
    switch(activeView) {
      case 'beranda': return <Home />;
      case 'produk': return <ProductsPage onOpenQuote={() => setIsQuoteOpen(true)} />;
      case 'tentang': return <About />;
      case 'layanan': return <Services />;
      case 'kontak': return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-[#fafaf9] text-gray-900 font-sans selection:bg-emerald-200 selection:text-emerald-900 flex flex-col relative">
      <Navbar activeView={activeView} onViewChange={setActiveView} onOpenQuote={() => setIsQuoteOpen(true)} />
      
      <div className="flex-1">
        {renderView()}
      </div>

      <Footer />

      <QuotationModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}
