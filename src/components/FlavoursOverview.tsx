import React from 'react';
import { ArrowDown, Flame, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data/productData';

export const FlavoursOverview: React.FC = () => {
  return (
    <section id="flavours" className="py-20 md:py-28 bg-[#FAF8F5] border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header: Four Flavours */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-xs uppercase tracking-widest text-stone-600 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>La Collezione Firma Italia</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-semibold text-stone-950 tracking-tight">
            Four Flavours
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed">
            Four distinct gastronomic expressions crafted in Lombardy. 
            Select any flavour below to immediately explore its recipe profile, 
            tasting nuances, and preparation details.
          </p>
          <div className="w-16 h-0.5 bg-amber-800/40 mx-auto mt-4" />
        </div>

        {/* Four Flavours Grid Linking to Detail Sections Below */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {PRODUCTS.map((product, index) => (
            <a
              key={product.id}
              href={`#detail-${product.id}`}
              id={`flavour-card-${product.id}`}
              className="group relative bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top Accent Line */}
              <div
                className="absolute top-0 left-6 right-6 h-1 rounded-b-full transition-all duration-300 group-hover:left-3 group-hover:right-3"
                style={{ backgroundColor: product.accentColor }}
              />

              <div>
                {/* Number & Badge */}
                <div className="flex items-center justify-between pt-1 mb-4">
                  <span className="font-editorial text-xl font-medium text-stone-400 group-hover:text-stone-900 transition-colors">
                    0{index + 1}
                  </span>
                  {product.spiceLevel ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded-full">
                      <Flame className="w-3 h-3 fill-red-500 text-red-500" />
                      Spicy Kick
                    </span>
                  ) : (
                    <span className="text-[11px] font-medium text-stone-500 bg-stone-50 border border-stone-200 px-2 py-0.5 rounded-full">
                      Classic Craft
                    </span>
                  )}
                </div>

                {/* Product Image Stage */}
                <div className="relative py-4 flex items-center justify-center overflow-hidden">
                  <div className="absolute w-32 h-32 rounded-full bg-stone-100/80 group-hover:scale-110 transition-transform duration-500 -z-10" />
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-55 h-55 rounded-full object-cover drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Product Titles */}
                <div className="space-y-1.5 text-center mt-3">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-amber-800">
                    {product.descriptor}
                  </span>
                  <h3 className="font-editorial text-2xl font-bold text-stone-900 group-hover:text-amber-900 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-stone-500 italic font-serif">
                    {product.italianName}
                  </p>
                </div>

                {/* Tasting Notes Chips */}
                <div className="flex flex-wrap items-center justify-center gap-1.5 mt-4">
                  {product.tastingNotes.slice(0, 2).map((note) => (
                    <span
                      key={note}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-stone-50 text-stone-600 border border-stone-200/80"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link to Detail */}
              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-stone-800 group-hover:text-amber-800">
                <span className="tracking-wide uppercase text-[11px]">View Recipe Details</span>
                <div className="w-7 h-7 rounded-full bg-stone-100 group-hover:bg-amber-800 group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowDown className="w-3.5 h-3.5" />
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
