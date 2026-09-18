import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles, MessageCircleQuestion } from 'lucide-react';
import { FAQ_ITEMS } from '../data/productData';

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);

  const toggleDropdown = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: "Before Your Experience" */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-xs uppercase tracking-widest text-stone-700 font-semibold">
              <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
              <span>Gastronomic Guidance</span>
            </div>

            <div className="space-y-3">
              <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-semibold text-stone-950 tracking-tight leading-[1.08]">
                Before Your Experience
              </h2>
              <p className="font-serif italic text-lg text-amber-900">
                Prima Della Tua Esperienza
              </p>
            </div>

            <p className="text-stone-600 text-base leading-relaxed">
              Everything you need to know about our authentic Italian craftsmanship, 
              ingredients, storage, and cooking perfection before savoring your first forkful.
            </p>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-2xs space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">Authentic Guarantee</h4>
                  <p className="text-xs text-stone-500">100% produced in Muggiò, Italy by Firma Italia S.p.A.</p>
                </div>
              </div>
              <p className="text-xs text-stone-600 pt-2 border-t border-stone-100 leading-relaxed">
                Distributed exclusively in Thailand by <strong className="text-stone-900">Chob Siam Co., Ltd.</strong>
              </p>
            </div>
          </div>

          {/* Right Side: Multiple Question and Answer Attached Dropdowns (Up to 6 Dropdowns) */}
          <div className="lg:col-span-7 space-y-3.5" id="faq-accordion-group">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIds.includes(item.id);
              return (
                <div
                  key={item.id}
                  id={`faq-item-${index + 1}`}
                  className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-2xs transition-all duration-200 hover:border-stone-300"
                >
                  <button
                    onClick={() => toggleDropdown(item.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="font-editorial text-sm font-bold text-stone-400">
                        0{index + 1}
                      </span>
                      <span className="text-sm sm:text-base font-semibold text-stone-900 hover:text-amber-800 transition-colors">
                        {item.question}
                      </span>
                    </div>
                    <div
                      className={`w-7 h-7 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-stone-900 text-white' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-stone-600 leading-relaxed border-t border-stone-100 bg-stone-50/40 animate-in fade-in duration-200">
                      <p>{item.answer}</p>
                      <div className="mt-3 flex items-center gap-2">
                        <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-sm bg-white border border-stone-200 text-stone-500">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
