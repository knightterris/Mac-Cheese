import React from 'react';
import { ArrowDown, Flame, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data/productData';

export const FlavoursOverview: React.FC = () => {
  return (
    <section
      id="flavours"
      className="py-20 md:py-28 bg-[#FAF8F5] border-t border-stone-200/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header: Four Flavours */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-xs uppercase tracking-widest text-stone-600 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>La Collezione Mac&Cheese</span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-semibold text-stone-950 tracking-tight">
            Four Flavours
          </h2>

          <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed">
            Four distinct gastronomic expressions crafted in Italy.
            Select any flavour below to immediately explore its recipe profile,
            tasting nuances, and preparation details.
          </p>

          <div className="w-16 h-0.5 bg-amber-800/40 mx-auto mt-4" />
        </div>

        {/* Four Flavours Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {PRODUCTS.map((product, index) => (
            <a
              key={product.id}
              href={`#detail-${product.id}`}
              id={`flavour-card-${product.id}`}
              className="
                group
                relative
                bg-white
                rounded-2xl
                p-6
                border
                border-stone-200/90
                shadow-xs
                hover:shadow-xl
                hover:-translate-y-1.5
                transition-all
                duration-300
                flex
                flex-col
                justify-between
              "
            >
              {/* Top Accent Line */}
              <div
                className="
                  absolute
                  top-0
                  left-6
                  right-6
                  h-1
                  rounded-b-full
                  transition-all
                  duration-300
                  group-hover:left-3
                  group-hover:right-3
                "
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

                {/* Product Image */}
                <div className="relative py-4 flex items-center justify-center overflow-hidden">
                  <div className="absolute w-32 h-32 rounded-full bg-stone-100/80 group-hover:scale-110 transition-transform duration-500 -z-10" />

                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="
                      w-55
                      h-55
                      rounded-full
                      object-cover
                      drop-shadow-md
                      group-hover:scale-105
                      transition-transform
                      duration-500
                    "
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

                {/* Tasting Notes */}
                {/* Tasting Notes */}
                <div className="mt-5">
                  <p className="
                    text-[9px]
                    uppercase
                    tracking-[0.18em]
                    font-bold
                    text-stone-400
                    text-center
                    mb-3
                  ">
                    Tasting Notes
                  </p>

                  {/* Four Cheese & Truffle: 2 columns × 2 rows */}
                  {(product.id === 'four-cheese' || product.id === 'truffle-mushroom') && (
                    <div className="grid grid-cols-2 gap-2">
                      {product.tastingNotes.slice(0, 4).map((note) => (
                        <div
                          key={note}
                          className="
                            min-h-[25px]
                            px-2.5
                            py-2
                            rounded-lg
                            bg-stone-50/80
                            border
                            border-stone-200/80
                            flex
                            items-center
                            justify-center
                            text-center
                            transition-all
                            duration-300
                            group-hover:border-stone-300
                            group-hover:bg-stone-50
                          "
                        >
                          <span className="
                            text-[10px]
                            leading-[1.25]
                            font-medium
                            text-stone-600
                          ">
                            {note}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Jalapeños: exactly 2 rows */}
                  {product.id === 'jalapenos' && (
                    <div className="grid grid-cols-1 gap-2">
                      {[
                        product.tastingNotes[0], // Zesty Jalapeño Kick
                        product.tastingNotes[1], // Warm Chili Aroma
                      ].map((note) => (
                        <div
                          key={note}
                          className="
                            min-h-[25px]
                            px-4
                            py-2
                            rounded-lg
                            bg-stone-50/80
                            border
                            border-stone-200/80
                            flex
                            items-center
                            justify-center
                            text-center
                            transition-all
                            duration-300
                            group-hover:border-stone-300
                            group-hover:bg-stone-50
                          "
                        >
                          <span className="
                            text-[10px]
                            leading-[1.25]
                            font-medium
                            text-stone-600
                          ">
                            {note}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tomato Mozzarella: exactly 2 rows */}
                  {product.id === 'tomato-mozzarella' && (
                    <div className="grid grid-cols-1 gap-2">
                      {[
                        product.tastingNotes[0], // Tomato
                        product.tastingNotes[1], // Mozzarella
                      ].map((note) => (
                        <div
                          key={note}
                          className="
                            min-h-[25px]
                            px-4
                            py-2
                            rounded-lg
                            bg-stone-50/80
                            border
                            border-stone-200/80
                            flex
                            items-center
                            justify-center
                            text-center
                            transition-all
                            duration-300
                            group-hover:border-stone-300
                            group-hover:bg-stone-50
                          "
                        >
                          <span className="
                            text-[10px]
                            leading-[1.25]
                            font-medium
                            text-stone-600
                          ">
                            {note}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Retail Price */}
                <div className="mt-5 pt-4 border-t border-stone-100">
                  <div className="flex items-end justify-between gap-4">

                    {/* Price Label */}
                    <div>
                      <span className="block text-[10px] uppercase tracking-[0.16em] font-bold text-stone-400 mb-1">
                        Retail Price
                      </span>

                      <span className="block text-[11px] text-stone-500">
                        184g pack
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-start text-amber-900">
                      <span className="text-sm font-bold mt-1 mr-0.5">
                        ฿
                      </span>

                      <span className="font-editorial text-3xl font-bold leading-none tracking-tight">
                        {product.price.toLocaleString()}
                      </span>
                    </div>

                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-stone-800 group-hover:text-amber-800">
                <span className="tracking-wide uppercase text-[11px]">
                  View Recipe Details
                </span>

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