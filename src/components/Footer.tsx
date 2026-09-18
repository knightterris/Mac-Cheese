import React from 'react';
import { MapPin, Building2, ShieldCheck, Mail, Globe, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#1C1917] text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-stone-800">
          
          {/* Brand & Italian Heritage */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-editorial text-3xl font-bold text-white tracking-tight">
                MC&CHEESE
              </span>
              <div className="flex items-center gap-1 px-2 py-0.5 rounded-sm bg-stone-800 text-[11px] font-semibold text-stone-200 border border-stone-700">
                <span className="w-1.5 h-2.5 bg-emerald-500 rounded-2xs" />
                <span className="w-1.5 h-2.5 bg-white rounded-2xs" />
                <span className="w-1.5 h-2.5 bg-rose-500 rounded-2xs" />
                <span className="ml-1 uppercase tracking-wider">Italy</span>
              </div>
            </div>

            <p className="text-sm text-stone-400 leading-relaxed font-light">
              Firma Italia S.p.A. has been perfecting the art of authentic Italian dehydrated meals and pastas since 1968 in Muggiò (Monza e Brianza), Italy.
            </p>

            <div className="pt-1 flex items-center gap-2 text-xs text-amber-300 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Certified Italian Gastronomic Import</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400">
              The Collection
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <a href="#detail-four-cheese" className="hover:text-white transition-colors">
                  Four Cheese (Quattro Formaggi)
                </a>
              </li>
              <li>
                <a href="#detail-jalapenos" className="hover:text-white transition-colors">
                  Exciting Jalapeños (Piccante)
                </a>
              </li>
              <li>
                <a href="#detail-tomato-mozzarella" className="hover:text-white transition-colors">
                  Tomato Mozzarella (Pomodoro)
                </a>
              </li>
              <li>
                <a href="#detail-truffle-mushroom" className="hover:text-white transition-colors">
                  Truffle & Mushrooms (Tartufo)
                </a>
              </li>
              <li>
                <a href="#how-to-cook" className="hover:text-white transition-colors">
                  Easy Stovetop Cooking Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Mandatory Company & Location: Chob Siam Co., Ltd. & Thailand */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400">
              Exclusive Distribution & Importer
            </h4>
            
            <div className="bg-stone-900/90 rounded-2xl p-4 border border-stone-800 space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <Building2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-white">Chob Siam Co., Ltd.</span>
                  <span className="text-xs text-stone-400">Exclusive Importer & Distributor for Thailand</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-white">Location: Thailand</span>
                  <span className="text-xs text-stone-400">Bangkok, Kingdom of Thailand</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Globe className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div className="text-xs text-stone-400">
                  <span>Producer: <strong>FIRMA ITALIA S.p.A.</strong></span>
                  <span className="block text-stone-500">via Pavia 38/40 - 20835 Muggiò (MB) - Italy</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright and Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div className="space-y-1 text-center sm:text-left">
            <p>© 2026 Chob Siam Co., Ltd. All rights reserved.</p>
            <p className="text-[11px] text-stone-600">
              Firma Italia and MC&CHEESE are registered trademarks. Product of Italy. Distributed in Thailand by Chob Siam Co., Ltd.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-800 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
