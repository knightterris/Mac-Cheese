import React from 'react';
import { ShoppingBag, ArrowUpRight } from 'lucide-react';
import { PRODUCTS } from '../data/productData';

export const MarketplacesSection: React.FC = () => {
  return (
    <section
      id="coming-soon"
      className="py-20 md:py-28 bg-[#FAF8F5] border-t border-stone-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 border border-stone-300 text-xs uppercase tracking-widest text-stone-700 font-semibold">
            <ShoppingBag className="w-3.5 h-3.5 text-amber-700" />
            <span>Digital Flagship Stores</span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-semibold text-stone-950 tracking-tight">
            Coming Soon to Your Favourite Apps
          </h2>

          <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed">
            Products will be available on{' '}
            <strong className="text-stone-900 font-semibold">Lazada</strong>,{' '}
            <strong className="text-stone-900 font-semibold">Shopee</strong>,
            and{' '}
            <strong className="text-stone-900 font-semibold">
              TikTok Shop
            </strong>{' '}
            soon. Choose your flavour below and select your preferred platform.
          </p>

          <div className="w-16 h-0.5 bg-amber-800/40 mx-auto mt-4" />
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              id={`marketplace-card-${product.id}`}
              className="
                bg-white
                rounded-3xl
                p-6 sm:p-8
                border border-stone-200/90
                shadow-sm
                flex flex-col
                justify-between
                hover:shadow-md
                transition-shadow
                duration-300
              "
            >

              {/* Product Information */}
              <div className="flex items-center gap-5 mb-6">

                {/* Circular Product Image */}
                <div
                  className="
                    w-20 h-20
                    sm:w-24 sm:h-24
                    rounded-full
                    overflow-hidden
                    border-2 border-white
                    ring-1 ring-stone-200
                    shadow-sm
                    shrink-0
                  "
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="
                      w-full h-full
                      object-cover
                      transition-transform
                      duration-500
                      hover:scale-110
                    "
                  />
                </div>

                {/* Product Text */}
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800">
                    {product.descriptor}
                  </span>

                  <h3 className="font-editorial text-2xl font-bold text-stone-900">
                    {product.name}
                  </h3>

                  <p className="text-xs text-stone-500 italic font-serif">
                    {product.italianName}
                  </p>

                  <p className="text-xs text-stone-600 mt-1">
                    {product.weightGrams}g Pouch • {product.servings} Final
                    Servings • Made in Italy
                  </p>
                </div>
              </div>

              {/* Marketplace Area */}
              <div className="space-y-2.5 pt-4 border-t border-stone-100">

                <div className="flex items-center justify-between text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">
                  <span>Select E-Commerce Store</span>

                  <span className="text-amber-700 lowercase italic text-[11px]">
                    launching soon
                  </span>
                </div>

                {/* Marketplace Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">

                  {/* Lazada */}
                  {product.marketplaceLinks?.lazada ? (
                    <a
                      id={`btn-lazada-${product.id}`}
                      href={product.marketplaceLinks.lazada}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group
                        py-2.5 px-3
                        rounded-xl
                        border border-stone-200
                        bg-stone-50
                        hover:bg-[#0f146d]
                        hover:text-white
                        hover:border-[#0f146d]
                        text-stone-800
                        text-xs
                        font-semibold
                        flex items-center
                        justify-between
                        transition-all
                        duration-300
                      "
                    >
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#0f146d] group-hover:bg-white transition-colors" />
                        <span>Lazada</span>
                      </span>

                      <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100" />
                    </a>
                  ) : (
                    <button
                      disabled
                      className="
                        py-2.5 px-3
                        rounded-xl
                        border border-stone-200
                        bg-stone-100
                        text-stone-400
                        text-xs
                        font-semibold
                        flex items-center
                        justify-between
                        cursor-not-allowed
                      "
                    >
                      <span>Lazada</span>
                      <span className="text-[10px]">Soon</span>
                    </button>
                  )}

                  {/* Shopee */}
                  {product.marketplaceLinks?.shopee ? (
                    <a
                      id={`btn-shopee-${product.id}`}
                      href={product.marketplaceLinks.shopee}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group
                        py-2.5 px-3
                        rounded-xl
                        border border-stone-200
                        bg-stone-50
                        hover:bg-[#EE4D2D]
                        hover:text-white
                        hover:border-[#EE4D2D]
                        text-stone-800
                        text-xs
                        font-semibold
                        flex items-center
                        justify-between
                        transition-all
                        duration-300
                      "
                    >
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#EE4D2D] group-hover:bg-white transition-colors" />
                        <span>Shopee</span>
                      </span>

                      <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100" />
                    </a>
                  ) : (
                    <button
                      disabled
                      className="
                        py-2.5 px-3
                        rounded-xl
                        border border-stone-200
                        bg-stone-100
                        text-stone-400
                        text-xs
                        font-semibold
                        flex items-center
                        justify-between
                        cursor-not-allowed
                      "
                    >
                      <span>Shopee</span>
                      <span className="text-[10px]">Soon</span>
                    </button>
                  )}

                  {/* TikTok */}
                  {product.marketplaceLinks?.tiktok ? (
                    <a
                      id={`btn-tiktok-${product.id}`}
                      href={product.marketplaceLinks.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group
                        py-2.5 px-3
                        rounded-xl
                        border border-stone-200
                        bg-stone-50
                        hover:bg-black
                        hover:text-white
                        hover:border-black
                        text-stone-800
                        text-xs
                        font-semibold
                        flex items-center
                        justify-between
                        transition-all
                        duration-300
                      "
                    >
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-black group-hover:bg-white transition-colors" />
                        <span>TikTok</span>
                      </span>

                      <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100" />
                    </a>
                  ) : (
                    <button
                      disabled
                      className="
                        py-2.5 px-3
                        rounded-xl
                        border border-stone-200
                        bg-stone-100
                        text-stone-400
                        text-xs
                        font-semibold
                        flex items-center
                        justify-between
                        cursor-not-allowed
                      "
                    >
                      <span>TikTok</span>
                      <span className="text-[10px]">Soon</span>
                    </button>
                  )}

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-stone-500">
            Official online distribution channels operated by Chob Siam Co.,
            Ltd. • Guaranteed 100% genuine Italian imported stock.
          </p>
        </div>

      </div>
    </section>
  );
};