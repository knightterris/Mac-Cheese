import React, { useEffect, useState } from 'react';
import {
  Flame,
  Clock,
  Play,
  X,
  ChefHat,
} from 'lucide-react';

import { PRODUCTS } from '../data/productData';

export const FlavoursDetail: React.FC = () => {
  const fourCheese = PRODUCTS.find((p) => p.id === 'four-cheese')!;
  const jalapenos = PRODUCTS.find((p) => p.id === 'jalapenos')!;
  const tomatoMozz = PRODUCTS.find((p) => p.id === 'tomato-mozzarella')!;
  const truffle = PRODUCTS.find((p) => p.id === 'truffle-mushroom')!;

  /* =========================================================
     VIDEO MODAL STATE
     ========================================================= */

  const [activeVideo, setActiveVideo] = useState<{
    name: string;
    italianName: string;
    video: string;
    image: string;
  } | null>(null);

  const openVideo = (product: typeof fourCheese) => {
    if (!product.video) return;

    setActiveVideo({
      name: product.name,
      italianName: product.italianName,
      video: product.video,
      image: product.image,
    });
  };

  const closeVideo = () => {
    setActiveVideo(null);
  };

  /* Close video with ESC key */
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeVideo();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  /* Stop page scrolling while modal is open */
  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [activeVideo]);

  return (
    <>
      <section
        id="flavours-detail-container"
        className="py-20 md:py-28 bg-[#FAF8F5] space-y-24"
      >

        {/* =====================================================
            1. FOUR CHEESE
            ===================================================== */}

        <div
          id="detail-four-cheese"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28"
        >
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/90 shadow-sm">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

              {/* LEFT TEXT */}
              <div className="lg:col-span-7 space-y-6">

                <div className="flex items-center gap-2">
                  <span className="
                    text-xs
                    uppercase
                    tracking-widest
                    px-3 py-1
                    rounded-full
                    bg-amber-50
                    text-amber-900
                    border border-amber-200
                    font-bold
                  ">
                    {fourCheese.descriptor}
                  </span>
                </div>

                <div>
                  <h3 className="
                    font-editorial
                    text-3xl
                    sm:text-4xl
                    lg:text-5xl
                    font-bold
                    text-stone-900
                    leading-tight
                  ">
                    {fourCheese.name}
                  </h3>

                  <p className="text-sm font-serif italic text-amber-900 mt-1">
                    {fourCheese.italianName}
                  </p>

                  <p className="text-base text-stone-600 mt-3 leading-relaxed">
                    {fourCheese.shortDesc}
                  </p>
                </div>

                {/* BULLETS */}
                <div className="space-y-4 pt-2">

                  <h4 className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-widest
                    text-stone-400
                  ">
                    Signature Craft Notes
                  </h4>

                  <ul className="space-y-3.5">
                    {fourCheese.bullets.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-stone-700"
                      >
                        <div className="
                          w-6 h-6
                          rounded-full
                          bg-amber-50
                          border border-amber-300
                          text-amber-800
                          flex
                          items-center
                          justify-center
                          shrink-0
                          mt-0.5
                        ">
                          <span className="text-xs font-bold font-editorial">
                            0{idx + 1}
                          </span>
                        </div>

                        <span className="text-sm sm:text-base leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* SPECS */}
                <div className="
                  pt-4
                  border-t border-stone-100
                  flex
                  flex-wrap
                  items-center
                  gap-4
                  text-xs
                  text-stone-600
                ">
                  <span className="
                    inline-flex
                    items-center
                    gap-1
                    font-semibold
                    text-stone-900
                  ">
                    <Clock className="w-3.5 h-3.5 text-amber-700" />
                    9-11 min stovetop
                  </span>

                  <span>•</span>

                  <span>
                    184g net weight (around 3 portions)
                  </span>
                </div>

              </div>

              {/* RIGHT IMAGE */}
              <div className="
                lg:col-span-5
                flex
                flex-col
                items-center
                justify-center
                relative
              ">

                <div className="
                  relative
                  w-full
                  max-w-[340px]
                  aspect-square
                  flex
                  items-center
                  justify-center
                  bg-radial
                  from-amber-100/60
                  via-stone-50
                  to-white
                  rounded-full
                  p-6
                  border border-stone-200/80
                  shadow-inner
                ">
                  <img
                    src={fourCheese.image}
                    alt="Firma Italia Four Cheese Mac & Cheese"
                    referrerPolicy="no-referrer"
                    className="
                      w-[260px]
                      h-[260px]
                      sm:w-[290px]
                      sm:h-[290px]
                      rounded-full
                      object-cover
                      drop-shadow-xl
                      hover:scale-105
                      transition-transform
                      duration-500
                    "
                  />
                </div>

                <span className="
                  text-xs
                  text-stone-500
                  italic
                  mt-4
                  font-serif
                  text-center
                ">
                  Serving suggestion: garnish with fresh cracked peppercorn
                </span>

                {/* FOUR CHEESE VIDEO BUTTON */}
                {fourCheese.video && (
                  <button
                    type="button"
                    onClick={() => openVideo(fourCheese)}
                    className="
                      group
                      mt-5
                      inline-flex
                      items-center
                      gap-3
                      px-5 py-3
                      rounded-full
                      border border-amber-300
                      bg-amber-50
                      text-amber-900
                      text-sm
                      font-semibold
                      hover:bg-amber-800
                      hover:border-amber-800
                      hover:text-white
                      transition-all
                      duration-300
                    "
                  >
                    <span className="
                      w-8 h-8
                      rounded-full
                      bg-amber-800
                      text-white
                      group-hover:bg-white
                      group-hover:text-amber-900
                      flex
                      items-center
                      justify-center
                      transition-colors
                    ">
                      <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                    </span>

                    Watch How It’s Made
                  </button>
                )}

              </div>

            </div>
          </div>
        </div>


        {/* =====================================================
            2. JALAPEÑOS
            ===================================================== */}

        <div
          id="detail-jalapenos"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28"
        >
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/90 shadow-sm">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

              {/* LEFT IMAGE */}
              <div className="
                lg:col-span-5
                order-2
                lg:order-1
                flex
                flex-col
                items-center
                justify-center
                relative
              ">

                <div className="
                  relative
                  w-full
                  max-w-[340px]
                  aspect-square
                  flex
                  items-center
                  justify-center
                  bg-radial
                  from-red-100/60
                  via-stone-50
                  to-white
                  rounded-full
                  p-6
                  border border-stone-200/80
                  shadow-inner
                ">
                  <img
                    src={jalapenos.image}
                    alt="Firma Italia Jalapeños Mac & Cheese"
                    referrerPolicy="no-referrer"
                    className="
                      w-[260px]
                      h-[260px]
                      sm:w-[290px]
                      sm:h-[290px]
                      rounded-full
                      object-cover
                      drop-shadow-xl
                      hover:scale-105
                      transition-transform
                      duration-500
                    "
                  />
                </div>

                <span className="
                  text-xs
                  text-stone-500
                  italic
                  mt-4
                  font-serif
                  text-center
                ">
                  Serving suggestion: pair with sliced fresh green chilies
                </span>

                {/* JALAPEÑOS VIDEO BUTTON */}
                {jalapenos.video && (
                  <button
                    type="button"
                    onClick={() => openVideo(jalapenos)}
                    className="
                      group
                      mt-5
                      inline-flex
                      items-center
                      gap-3
                      px-5 py-3
                      rounded-full
                      border border-red-300
                      bg-red-50
                      text-red-900
                      text-sm
                      font-semibold
                      hover:bg-red-800
                      hover:border-red-800
                      hover:text-white
                      transition-all
                      duration-300
                    "
                  >
                    <span className="
                      w-8 h-8
                      rounded-full
                      bg-red-700
                      text-white
                      group-hover:bg-white
                      group-hover:text-red-800
                      flex
                      items-center
                      justify-center
                      transition-colors
                    ">
                      <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                    </span>

                    Watch How It’s Made
                  </button>
                )}

              </div>

              {/* RIGHT TEXT */}
              <div className="
                lg:col-span-7
                order-1
                lg:order-2
                space-y-6
              ">

                <div className="flex items-center gap-2">

                  <span className="
                    text-xs
                    uppercase
                    tracking-widest
                    px-3 py-1
                    rounded-full
                    bg-red-50
                    text-red-900
                    border border-red-200
                    font-bold
                    flex
                    items-center
                    gap-1
                  ">
                    <Flame className="w-3 h-3 text-red-600 fill-red-600" />

                    {jalapenos.descriptor}
                  </span>

                </div>

                <div>
                  <h3 className="
                    font-editorial
                    text-3xl
                    sm:text-4xl
                    lg:text-5xl
                    font-bold
                    text-stone-900
                    leading-tight
                  ">
                    {jalapenos.name}
                  </h3>

                  <p className="text-sm font-serif italic text-red-900 mt-1">
                    {jalapenos.italianName}
                  </p>

                  <p className="text-base text-stone-600 mt-3 leading-relaxed">
                    {jalapenos.shortDesc}
                  </p>
                </div>

                {/* BULLETS */}
                <div className="space-y-4 pt-2">

                  <h4 className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-widest
                    text-stone-400
                  ">
                    Signature Craft Notes
                  </h4>

                  <ul className="space-y-3.5">
                    {jalapenos.bullets.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-stone-700"
                      >
                        <div className="
                          w-6 h-6
                          rounded-full
                          bg-red-50
                          border border-red-300
                          text-red-800
                          flex
                          items-center
                          justify-center
                          shrink-0
                          mt-0.5
                        ">
                          <span className="text-xs font-bold font-editorial">
                            0{idx + 1}
                          </span>
                        </div>

                        <span className="text-sm sm:text-base leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* SPECS */}
                <div className="
                  pt-4
                  border-t border-stone-100
                  flex
                  flex-wrap
                  items-center
                  gap-4
                  text-xs
                  text-stone-600
                ">
                  <span className="
                    inline-flex
                    items-center
                    gap-1
                    font-semibold
                    text-stone-900
                  ">
                    <Clock className="w-3.5 h-3.5 text-red-700" />
                    9-11 min stovetop
                  </span>

                  {/* <span>•</span>

                  <span>Zesty medium heat</span> */}

                  <span>•</span>

                  <span>184g net weight (around 3 portions)</span>
                </div>

              </div>

            </div>
          </div>
        </div>


        {/* =====================================================
            3. TOMATO MOZZARELLA
            ===================================================== */}

        <div
          id="detail-tomato-mozzarella"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28"
        >
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/90 shadow-sm">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

              {/* LEFT TEXT */}
              <div className="lg:col-span-7 space-y-6">

                <div className="flex items-center gap-2">
                  <span className="
                    text-xs
                    uppercase
                    tracking-widest
                    px-3 py-1
                    rounded-full
                    bg-emerald-50
                    text-emerald-900
                    border border-emerald-200
                    font-bold
                  ">
                    {tomatoMozz.descriptor}
                  </span>
                </div>

                <div>
                  <h3 className="
                    font-editorial
                    text-3xl
                    sm:text-4xl
                    lg:text-5xl
                    font-bold
                    text-stone-900
                    leading-tight
                  ">
                    {tomatoMozz.name}
                  </h3>

                  <p className="
                    text-sm
                    font-serif
                    italic
                    text-emerald-900
                    mt-1
                  ">
                    {tomatoMozz.italianName}
                  </p>

                  <p className="text-base text-stone-600 mt-3 leading-relaxed">
                    {tomatoMozz.shortDesc}
                  </p>
                </div>

                {/* BULLETS */}
                <div className="space-y-4 pt-2">

                  <h4 className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-widest
                    text-stone-400
                  ">
                    Signature Craft Notes
                  </h4>

                  <ul className="space-y-3.5">
                    {tomatoMozz.bullets.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-stone-700"
                      >
                        <div className="
                          w-6 h-6
                          rounded-full
                          bg-emerald-50
                          border border-emerald-300
                          text-emerald-800
                          flex
                          items-center
                          justify-center
                          shrink-0
                          mt-0.5
                        ">
                          <span className="text-xs font-bold font-editorial">
                            0{idx + 1}
                          </span>
                        </div>

                        <span className="text-sm sm:text-base leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* SPECS */}
                <div className="
                  pt-4
                  border-t border-stone-100
                  flex
                  flex-wrap
                  items-center
                  gap-4
                  text-xs
                  text-stone-600
                ">
                  <span className="
                    inline-flex
                    items-center
                    gap-1
                    font-semibold
                    text-stone-900
                  ">
                    <Clock className="w-3.5 h-3.5 text-emerald-700" />
                    9-11 min stovetop
                  </span>

                  {/* <span>•</span>

                  <span>Sun-ripened Mediterranean tomato</span> */}

                  <span>•</span>

                  <span>184g net weight (around 3 portions)</span>
                </div>

              </div>

              {/* RIGHT IMAGE */}
              <div className="
                lg:col-span-5
                flex
                flex-col
                items-center
                justify-center
                relative
              ">

                <div className="
                  relative
                  w-full
                  max-w-[340px]
                  aspect-square
                  flex
                  items-center
                  justify-center
                  bg-radial
                  from-emerald-100/60
                  via-stone-50
                  to-white
                  rounded-full
                  p-6
                  border border-stone-200/80
                  shadow-inner
                ">
                  <img
                    src={tomatoMozz.image}
                    alt="Firma Italia Tomato Mozzarella Mac & Cheese"
                    referrerPolicy="no-referrer"
                    className="
                      w-[260px]
                      h-[260px]
                      sm:w-[290px]
                      sm:h-[290px]
                      rounded-full
                      object-cover
                      drop-shadow-xl
                      hover:scale-105
                      transition-transform
                      duration-500
                    "
                  />
                </div>

                <span className="
                  text-xs
                  text-stone-500
                  italic
                  mt-4
                  font-serif
                  text-center
                ">
                  Serving suggestion: pair with torn basil leaves & olive oil drizzle
                </span>

                {/* TOMATO VIDEO BUTTON */}
                {tomatoMozz.video && (
                  <button
                    type="button"
                    onClick={() => openVideo(tomatoMozz)}
                    className="
                      group
                      mt-5
                      inline-flex
                      items-center
                      gap-3
                      px-5 py-3
                      rounded-full
                      border border-emerald-300
                      bg-emerald-50
                      text-emerald-900
                      text-sm
                      font-semibold
                      hover:bg-emerald-800
                      hover:border-emerald-800
                      hover:text-white
                      transition-all
                      duration-300
                    "
                  >
                    <span className="
                      w-8 h-8
                      rounded-full
                      bg-emerald-700
                      text-white
                      group-hover:bg-white
                      group-hover:text-emerald-800
                      flex
                      items-center
                      justify-center
                      transition-colors
                    ">
                      <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                    </span>

                    Watch How It’s Made
                  </button>
                )}

              </div>

            </div>
          </div>
        </div>


        {/* =====================================================
            4. TRUFFLE & MUSHROOMS
            ===================================================== */}

        <div
          id="detail-truffle-mushroom"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28"
        >
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/90 shadow-sm">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

              {/* LEFT IMAGE */}
              <div className="
                lg:col-span-5
                order-2
                lg:order-1
                flex
                flex-col
                items-center
                justify-center
                relative
              ">

                <div className="
                  relative
                  w-full
                  max-w-[340px]
                  aspect-square
                  flex
                  items-center
                  justify-center
                  bg-radial
                  from-stone-200/60
                  via-stone-50
                  to-white
                  rounded-full
                  p-6
                  border border-stone-200/80
                  shadow-inner
                ">
                  <img
                    src={truffle.image}
                    alt="Firma Italia Truffle & Mushrooms Mac & Cheese"
                    referrerPolicy="no-referrer"
                    className="
                      w-[260px]
                      h-[260px]
                      sm:w-[290px]
                      sm:h-[290px]
                      rounded-full
                      object-cover
                      drop-shadow-xl
                      hover:scale-105
                      transition-transform
                      duration-500
                    "
                  />
                </div>

                <span className="
                  text-xs
                  text-stone-500
                  italic
                  mt-4
                  font-serif
                  text-center
                ">
                  Serving suggestion: top with fresh truffle carpaccio & chives
                </span>

                {/* TRUFFLE VIDEO BUTTON */}
                {truffle.video && (
                  <button
                    type="button"
                    onClick={() => openVideo(truffle)}
                    className="
                      group
                      mt-5
                      inline-flex
                      items-center
                      gap-3
                      px-5 py-3
                      rounded-full
                      border border-stone-300
                      bg-stone-100
                      text-stone-900
                      text-sm
                      font-semibold
                      hover:bg-stone-900
                      hover:border-stone-900
                      hover:text-white
                      transition-all
                      duration-300
                    "
                  >
                    <span className="
                      w-8 h-8
                      rounded-full
                      bg-stone-800
                      text-white
                      group-hover:bg-white
                      group-hover:text-stone-900
                      flex
                      items-center
                      justify-center
                      transition-colors
                    ">
                      <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                    </span>

                    Watch How It’s Made
                  </button>
                )}

              </div>

              {/* RIGHT TEXT */}
              <div className="
                lg:col-span-7
                order-1
                lg:order-2
                space-y-6
              ">

                <div className="flex items-center gap-2">

                  <span className="
                    text-xs
                    uppercase
                    tracking-widest
                    px-3 py-1
                    rounded-full
                    bg-stone-200
                    text-stone-900
                    border border-stone-300
                    font-bold
                  ">
                    {truffle.descriptor}
                  </span>

                </div>

                <div>
                  <h3 className="
                    font-editorial
                    text-3xl
                    sm:text-4xl
                    lg:text-5xl
                    font-bold
                    text-stone-900
                    leading-tight
                  ">
                    {truffle.name}
                  </h3>

                  <p className="
                    text-sm
                    font-serif
                    italic
                    text-stone-700
                    mt-1
                  ">
                    {truffle.italianName}
                  </p>

                  <p className="text-base text-stone-600 mt-3 leading-relaxed">
                    {truffle.shortDesc}
                  </p>
                </div>

                {/* BULLETS */}
                <div className="space-y-4 pt-2">

                  <h4 className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-widest
                    text-stone-400
                  ">
                    Signature Craft Notes
                  </h4>

                  <ul className="space-y-3.5">
                    {truffle.bullets.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-stone-700"
                      >
                        <div className="
                          w-6 h-6
                          rounded-full
                          bg-stone-100
                          border border-stone-300
                          text-stone-800
                          flex
                          items-center
                          justify-center
                          shrink-0
                          mt-0.5
                        ">
                          <span className="text-xs font-bold font-editorial">
                            0{idx + 1}
                          </span>
                        </div>

                        <span className="text-sm sm:text-base leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* SPECS */}
                <div className="
                  pt-4
                  border-t border-stone-100
                  flex
                  flex-wrap
                  items-center
                  gap-4
                  text-xs
                  text-stone-600
                ">
                  <span className="
                    inline-flex
                    items-center
                    gap-1
                    font-semibold
                    text-stone-900
                  ">
                    <Clock className="w-3.5 h-3.5 text-stone-800" />
                    9-11 min stovetop
                  </span>
{/* 
                  <span>•</span>

                  <span>Umbrian black truffle shavings</span> */}

                  <span>•</span>

                  <span>184g net weight (around 3 portions)</span>
                </div>

              </div>

            </div>
          </div>
        </div>

      </section>


      {/* =======================================================
          SHARED COOKING VIDEO MODAL
          ======================================================= */}

      {activeVideo && (
        <div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-stone-950/85
            backdrop-blur-sm
            p-4
            sm:p-6
          "
          onClick={closeVideo}
          role="dialog"
          aria-modal="true"
          aria-label={`${activeVideo.name} preparation video`}
        >

          {/* MODAL CONTAINER */}
          <div
            className="
              relative
              w-full
              max-w-4xl
              max-h-[90vh]
              overflow-y-auto
              bg-[#FAF8F5]
              rounded-2xl
              sm:rounded-3xl
              shadow-2xl
              border
              border-white/10
            "
            onClick={(event) => event.stopPropagation()}
          >

            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={closeVideo}
              aria-label="Close cooking video"
              className="
                absolute
                top-3
                right-3
                sm:top-4
                sm:right-4
                z-50
                w-10
                h-10
                rounded-full
                bg-black/70
                hover:bg-black
                text-white
                flex
                items-center
                justify-center
                shadow-lg
                transition-all
                duration-300
                hover:scale-105
              "
            >
              <X className="w-5 h-5" />
            </button>


            {/* VIDEO */}
            <div className="
              relative
              w-full
              aspect-video
              bg-black
              overflow-hidden
              rounded-t-2xl
              sm:rounded-t-3xl
            ">
              <video
                key={activeVideo.video}
                controls
                playsInline
                preload="metadata"
                poster={activeVideo.image}
                className="
                  block
                  w-full
                  h-full
                  object-contain
                  bg-black
                "
              >
                <source
                  src={activeVideo.video}
                  type="video/mp4"
                />

                Your browser does not support the video element.
              </video>
            </div>


            {/* VIDEO INFORMATION */}
            <div className="
              px-6
              py-6
              sm:px-8
              sm:py-7
            ">

              {/* LABEL */}
              <div className="
                flex
                items-center
                gap-2
                mb-2
              ">
                <ChefHat className="w-4 h-4 text-amber-800" />

                <p className="
                  text-[10px]
                  sm:text-[11px]
                  uppercase
                  tracking-[0.16em]
                  font-bold
                  text-amber-800
                ">
                  Preparation Guide
                </p>
              </div>


              {/* PRODUCT */}
              <h3 className="
                font-editorial
                text-2xl
                sm:text-3xl
                font-bold
                text-stone-950
              ">
                {activeVideo.name}
              </h3>

              <p className="
                mt-1
                text-sm
                italic
                font-serif
                text-stone-500
              ">
                {activeVideo.italianName}
              </p>


              {/* DIVIDER */}
              <div className="h-px bg-stone-200 my-5" />


              {/* BOTTOM INFO */}
              <div className="
                flex
                flex-col
                sm:flex-row
                sm:items-center
                sm:justify-between
                gap-4
              ">

                <p className="
                  text-sm
                  text-stone-600
                  leading-relaxed
                ">
                  Follow the preparation guide and enjoy authentic
                  Italian comfort at home.
                </p>

                <div className="
                  inline-flex
                  items-center
                  gap-2
                  self-start
                  sm:self-auto
                  shrink-0
                  px-3.5
                  py-2
                  rounded-full
                  bg-white
                  border
                  border-stone-200
                  text-xs
                  font-semibold
                  text-stone-700
                ">
                  <Clock className="w-3.5 h-3.5 text-amber-700" />

                  9–11 min
                </div>

              </div>

            </div>

          </div>
        </div>
      )}

    </>
  );
};