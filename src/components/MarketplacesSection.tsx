import React, { useState } from 'react';
import {
  ShoppingBag,
  ArrowUpRight,
  ShieldCheck,
  Check,
  MapPin,
} from 'lucide-react';

import { PRODUCTS } from '../data/productData';

export const MarketplacesSection: React.FC = () => {
  const [selectedProductId, setSelectedProductId] = useState(
    PRODUCTS[0]?.id || ''
  );

  const selectedProduct =
    PRODUCTS.find((product) => product.id === selectedProductId) ||
    PRODUCTS[0];

  const marketplaces = [
    {
      name: 'Lazada',
      url: selectedProduct?.marketplaceLinks?.lazada,
      hoverClass: 'hover:bg-[#0f146d] hover:border-[#0f146d]',
      dotClass: 'bg-[#0f146d]',
    },
    {
      name: 'Shopee',
      url: selectedProduct?.marketplaceLinks?.shopee,
      hoverClass: 'hover:bg-[#EE4D2D] hover:border-[#EE4D2D]',
      dotClass: 'bg-[#EE4D2D]',
    },
    {
      name: 'TikTok Shop',
      url: selectedProduct?.marketplaceLinks?.tiktok,
      hoverClass: 'hover:bg-black hover:border-black',
      dotClass: 'bg-black',
    },
  ];

  return (
    <section
      id="coming-soon"
      className="
        py-20 md:py-28
        bg-[#FAF8F5]
        border-t border-stone-200/80
      "
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADER
            ===================================================== */}

        <div className="text-center max-w-3xl mx-auto mb-12">

          <div
            className="
              inline-flex
              items-center
              gap-2
              px-3.5 py-1.5
              rounded-full
              bg-amber-50
              border border-amber-200
              text-xs
              uppercase
              tracking-[0.16em]
              text-amber-900
              font-semibold
              mb-5
            "
          >
            <ShoppingBag className="w-3.5 h-3.5" />

            Official Online Stores
          </div>

          <h2
            className="
              font-editorial
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-semibold
              text-stone-950
              tracking-tight
            "
          >
            Find Your Favourite Online
          </h2>

          <p
            className="
              mt-4
              text-base
              sm:text-lg
              text-stone-600
              leading-relaxed
            "
          >
            Choose your flavour, then shop through your preferred
            official online store or find us at Gourmet Market.
          </p>

        </div>


        {/* =====================================================
            MAIN SHOP BANNER
            ===================================================== */}

        <div
          className="
            bg-white
            rounded-[2rem]
            border border-stone-200
            shadow-sm
            overflow-hidden
          "
        >

          {/* ===================================================
              STEP 1 — CHOOSE PRODUCT
              =================================================== */}

          <div className="p-6 sm:p-8 lg:p-10">

            <div className="flex items-center gap-3 mb-6">

              <span
                className="
                  w-7 h-7
                  rounded-full
                  bg-amber-800
                  text-white
                  flex
                  items-center
                  justify-center
                  text-xs
                  font-bold
                "
              >
                1
              </span>

              <div>
                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.15em]
                    text-stone-500
                    font-semibold
                  "
                >
                  Choose Your Flavour
                </p>
              </div>

            </div>


            {/* =================================================
                PRODUCT SELECTOR
                ================================================= */}

            <div
              className="
                grid
                grid-cols-2
                lg:grid-cols-4
                gap-3
              "
            >
              {PRODUCTS.map((product) => {
                const isSelected =
                  product.id === selectedProduct?.id;

                return (
                  <button
                    key={product.id}
                    type="button"
                    onClick={() =>
                      setSelectedProductId(product.id)
                    }
                    className={`
                      relative
                      p-4
                      sm:p-5
                      rounded-2xl
                      border
                      text-left
                      transition-all
                      duration-300
                      ${
                        isSelected
                          ? 'border-amber-700 bg-amber-50 shadow-sm'
                          : 'border-stone-200 bg-stone-50 hover:bg-white hover:border-stone-300'
                      }
                    `}
                  >

                    {/* Selected Check */}
                    {isSelected && (
                      <div
                        className="
                          absolute
                          top-3 right-3
                          w-5 h-5
                          rounded-full
                          bg-amber-800
                          text-white
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <Check className="w-3 h-3" />
                      </div>
                    )}


                    {/* Product Image */}
                    <div
                      className="
                        w-16 h-16
                        sm:w-20 sm:h-20
                        rounded-full
                        overflow-hidden
                        border-2 border-white
                        shadow-sm
                        mb-4
                      "
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="
                          w-full h-full
                          object-cover
                        "
                      />
                    </div>


                    {/* Product Descriptor */}
                    <span
                      className="
                        block
                        text-[10px]
                        uppercase
                        tracking-wider
                        font-bold
                        text-amber-800
                        mb-1
                      "
                    >
                      {product.descriptor}
                    </span>


                    {/* Product Name */}
                    <h3
                      className="
                        font-editorial
                        text-base
                        sm:text-lg
                        font-bold
                        text-stone-900
                        leading-tight
                      "
                    >
                      {product.name}
                    </h3>


                    {/* Product Price */}
                    <div
                      className="
                        mt-4
                        pt-3
                        border-t
                        border-stone-200/80
                        flex
                        items-end
                        justify-between
                        gap-2
                      "
                    >

                      <div>
                        <span
                          className="
                            block
                            text-[9px]
                            uppercase
                            tracking-[0.14em]
                            font-bold
                            text-stone-400
                            mb-0.5
                          "
                        >
                          Retail Price
                        </span>

                        <span
                          className="
                            block
                            text-[10px]
                            text-stone-500
                          "
                        >
                          184g pack
                        </span>
                      </div>


                      <div
                        className={`
                          flex
                          items-start
                          transition-colors
                          duration-300
                          ${
                            isSelected
                              ? 'text-amber-900'
                              : 'text-stone-800'
                          }
                        `}
                      >
                        <span
                          className="
                            text-xs
                            font-bold
                            mt-0.5
                            mr-0.5
                          "
                        >
                          ฿
                        </span>

                        <span
                          className="
                            font-editorial
                            text-2xl
                            font-bold
                            leading-none
                            tracking-tight
                          "
                        >
                          {product.price.toLocaleString()}
                        </span>
                      </div>

                    </div>

                  </button>
                );
              })}
            </div>

          </div>


          {/* ===================================================
              DIVIDER
              =================================================== */}

          <div className="h-px bg-stone-200" />


          {/* ===================================================
              STEP 2 — CHOOSE STORE
              =================================================== */}

          <div
            className="
              p-6
              sm:p-8
              lg:p-10
              bg-stone-50/60
            "
          >

            <div
              className="
                flex
                flex-col
                gap-7
              "
            >

              {/* ===============================================
                  SELECTED PRODUCT
                  =============================================== */}

              <div>

                <div className="flex items-center gap-3 mb-2">

                  <span
                    className="
                      w-7 h-7
                      rounded-full
                      bg-amber-800
                      text-white
                      flex
                      items-center
                      justify-center
                      text-xs
                      font-bold
                    "
                  >
                    2
                  </span>

                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-[0.15em]
                      text-stone-500
                      font-semibold
                    "
                  >
                    Choose Your Store
                  </p>

                </div>


                {/* Selected Product + Price */}
                <div className="ml-10">

                  <p className="text-sm text-stone-600">
                    Shopping for{' '}

                    <strong className="text-stone-900">
                      {selectedProduct?.name}
                    </strong>
                  </p>

                  {selectedProduct && (
                    <div
                      className="
                        inline-flex
                        items-baseline
                        gap-2
                        mt-1.5
                      "
                    >
                      <span
                        className="
                          text-[10px]
                          uppercase
                          tracking-[0.12em]
                          font-semibold
                          text-stone-400
                        "
                      >
                        Retail Price
                      </span>

                      <span
                        className="
                          font-editorial
                          text-xl
                          font-bold
                          text-amber-900
                        "
                      >
                        ฿{selectedProduct.price.toLocaleString()}
                      </span>
                    </div>
                  )}

                </div>

              </div>


              {/* ===============================================
                  STORE BUTTONS
                  =============================================== */}

              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-1
                  lg:grid-cols-3
                  gap-3
                  w-full
                "
              >

                {/* Lazada / Shopee / TikTok Shop */}
                {marketplaces.map((marketplace) =>
                  marketplace.url ? (

                    <a
                      key={marketplace.name}
                      href={marketplace.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        group
                        w-full
                        px-5 py-4
                        rounded-xl
                        border border-stone-200
                        bg-white
                        text-stone-900
                        ${marketplace.hoverClass}
                        hover:text-white
                        hover:shadow-md
                        hover:-translate-y-0.5
                        font-semibold
                        flex
                        items-center
                        justify-between
                        gap-4
                        transition-all
                        duration-300
                      `}
                    >

                      <span className="flex items-center gap-2.5">

                        <span
                          className={`
                            w-2.5 h-2.5
                            rounded-full
                            shrink-0
                            ${marketplace.dotClass}
                            group-hover:bg-white
                            transition-colors
                          `}
                        />

                        {marketplace.name}

                      </span>

                      <ArrowUpRight
                        className="
                          w-4 h-4
                          shrink-0
                          opacity-50
                          group-hover:opacity-100
                          transition-opacity
                        "
                      />

                    </a>

                  ) : (

                    <div
                      key={marketplace.name}
                      className="
                        w-full
                        px-5 py-4
                        rounded-xl
                        border border-stone-200
                        bg-stone-100
                        flex
                        items-center
                        justify-between
                        gap-4
                      "
                    >

                      <span
                        className="
                          flex
                          items-center
                          gap-2.5
                          text-stone-500
                          font-semibold
                        "
                      >

                        <span
                          className={`
                            w-2.5 h-2.5
                            rounded-full
                            shrink-0
                            opacity-40
                            ${marketplace.dotClass}
                          `}
                        />

                        {marketplace.name}

                      </span>

                      <span
                        className="
                          text-[9px]
                          uppercase
                          tracking-wider
                          font-bold
                          text-stone-400
                        "
                      >
                        Soon
                      </span>

                    </div>

                  )
                )}


                {/* =============================================
                    GOURMET MARKET
                    ============================================= */}

                {/* <a
                  href="#retail-locations"
                  className="
                    group
                    w-full
                    px-5 py-4
                    rounded-xl
                    border border-stone-200
                    bg-white
                    text-stone-900
                    hover:bg-amber-800
                    hover:border-amber-800
                    hover:text-white
                    hover:shadow-md
                    hover:-translate-y-0.5
                    font-semibold
                    flex
                    items-center
                    justify-between
                    gap-4
                    transition-all
                    duration-300
                  "
                >

                  <span className="flex items-center gap-2.5">

                    <span
                      className="
                        w-8 h-8
                        rounded-full
                        bg-amber-50
                        text-amber-800
                        group-hover:bg-white/15
                        group-hover:text-white
                        flex
                        items-center
                        justify-center
                        shrink-0
                        transition-colors
                      "
                    >
                      <MapPin className="w-4 h-4" />
                    </span>

                    <span>
                      <span className="block">
                        Gourmet Market
                      </span>

                      <span
                        className="
                          block
                          text-[9px]
                          uppercase
                          tracking-[0.1em]
                          font-semibold
                          text-stone-400
                          group-hover:text-white/70
                          mt-0.5
                          transition-colors
                        "
                      >
                        Store Locations
                      </span>
                    </span>

                  </span>

                  <ArrowUpRight
                    className="
                      w-4 h-4
                      shrink-0
                      opacity-50
                      group-hover:opacity-100
                      transition-opacity
                    "
                  />

                </a> */}

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            TRUST NOTE
            ===================================================== */}

        <div
          className="
            mt-6
            flex
            items-center
            justify-center
            gap-2
            text-xs
            text-stone-500
          "
        >
          <ShieldCheck className="w-4 h-4 text-amber-700" />

          <span>
            Official online distribution by Chob Siam Co., Ltd.
          </span>
        </div>

      </div>
    </section>
  );
};