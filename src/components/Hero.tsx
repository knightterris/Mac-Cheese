import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Sparkles, Clock, Flame, Award, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/productData';

export const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const activeProduct = PRODUCTS[currentIndex];

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PRODUCTS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [autoplay]);

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => (prev + 1) % PRODUCTS.length);
  };

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => (prev - 1 + PRODUCTS.length) % PRODUCTS.length);
  };

  const handleSelect = (idx: number) => {
    setAutoplay(false);
    setCurrentIndex(idx);
  };

  return (
    <section
      id="hero"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-[#F5EFE6]/60 via-[#FAF8F5] to-[#FAF8F5]"
    >
      {/* Delicate background decorative Italian watermarks */}
      {/* <div className="absolute top-12 left-1/2 -translate-x-1/2 text-[120px] md:text-[200px] font-italiana text-stone-900/[0.02] select-none pointer-events-none whitespace-nowrap">
        FIRMA ITALIA
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Big Advertisement Text with Mandatory "Made in Italy" */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Mandatory "Made in Italy" Official Badge */}
            <div
              id="made-in-italy-badge"
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-stone-300/80 shadow-xs backdrop-blur-xs"
            >
              <div className="flex items-center space-x-1">
                <span className="w-2.5 h-3.5 bg-[#1F5F3E] rounded-2xs" />
                <span className="w-2.5 h-3.5 bg-white border border-stone-200 rounded-2xs" />
                <span className="w-2.5 h-3.5 bg-[#C82D2D] rounded-2xs" />
              </div>
              <span className="text-xs font-bold tracking-widest text-stone-900 uppercase">
                Made in Italy
              </span>
              <span className="w-1 h-1 rounded-full bg-stone-300" />
              {/* <span className="text-xs font-medium text-stone-600">
                Firma Italia S.p.A. • Muggiò (MB)
              </span> */}
            </div>

            {/* Big Headline Advert */}
            <div className="space-y-3">
              <span className="block text-xs uppercase tracking-[0.25em] text-amber-800 font-semibold">
                Authentic Gastronomic Pasta
              </span>
              <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-semibold text-stone-950 leading-[1.08] tracking-tight">
                The Artisanal Soul of <br />
                <span className="italic font-normal font-serif text-amber-900">Italian</span> Mac & Cheese.
              </h1>
            </div>

            {/* Elegant, stylish, minimal texts */}
            <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed max-w-2xl">
              Straight from Italy to your dining table. Crafted using pure Italian durum wheat ribbed shells 
              and authentic dehydrated cheese sauces. Perfectly balanced, intensely savoury, and effortlessly ready 
              in just 9-11 minutes of gentle simmering.
            </p>

            {/* Value Highlights Pill Grid */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-lg pt-2 border-y border-stone-200/80 py-4">
              <div>
                <span className="block text-xs uppercase tracking-wider text-stone-400 font-medium">Portions</span>
                <span className="text-base font-semibold text-stone-900">Around 3 Servings / Box</span>
                <span className="block text-[11px] text-stone-500">184g net weight</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-stone-400 font-medium">Preparation</span>
                <span className="text-base font-semibold text-stone-900">9–11 Minutes</span>
                <span className="block text-[11px] text-stone-500">One-pot stovetop</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-stone-400 font-medium">Formula</span>
                <span className="text-base font-semibold text-stone-900">All In! Ready</span>
                <span className="block text-[11px] text-stone-500">Top It Your Way</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#flavours"
                id="hero-explore-cta"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold tracking-wide text-white bg-stone-900 hover:bg-amber-900 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
              >
                <span>Discover 4 Flavours</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#locations"
                id="hero-locations-cta"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium tracking-wide text-stone-800 bg-white hover:bg-stone-100 border border-stone-300 rounded-full transition-all duration-300"
              >
                <span>Gourmet Market Locations</span>
              </a>
            </div>

            {/* Current Selected Flavor Preview Tag */}
            <div className="flex items-center gap-3 pt-2 text-xs text-stone-500">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>Now viewing flavour {currentIndex + 1} of {PRODUCTS.length}:</span>
              <span className="font-semibold text-stone-900">{activeProduct.name} ({activeProduct.descriptor})</span>
            </div>

          </div>

          {/* Right Side: Elegant Circular Carousel with Buttons for the Attached Images */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* Circular Carousel Presentation Stage */}
            <div
              id="circular-carousel-stage"
              className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] flex items-center justify-center"
            >
              {/* Decorative Circular concentric rings representing Italian porcelain plate & artisan wheel */}
              <div className="absolute inset-0 rounded-full border border-dashed border-stone-300/80 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-stone-200/90" />
              <div className="absolute inset-10 rounded-full bg-gradient-to-tr from-stone-100 via-white to-stone-50 shadow-inner" />

              {/* Product floating pedestal glow */}
              <div 
                className="absolute w-44 h-44 rounded-full blur-2xl opacity-40 transition-colors duration-700 pointer-events-none"
                style={{ backgroundColor: activeProduct.accentColor }}
              />

              {/* Main Animated Product Image Box */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProduct.id}
                  initial={{ opacity: 0, scale: 0.88, rotate: -3 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.92, rotate: 3 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-20 flex flex-col items-center justify-center p-2"
                >
                  <a
                    href={`#detail-${activeProduct.id}`}
                    className="group block relative cursor-pointer"
                    title={`View ${activeProduct.name} Details`}
                  >
                    <img
                      src={activeProduct.image}
                      alt={`Firma Italia ${activeProduct.descriptor}`}
                      referrerPolicy="no-referrer"
                      className="
                        w-[220px] h-[220px]
                        sm:w-[270px] sm:h-[270px]
                        rounded-full
                        object-cover
                        border-[5px] border-white
                        shadow-[0_20px_40px_rgba(0,0,0,0.16)]
                        group-hover:scale-105
                        transition-transform duration-500
                      "
                    />
                    {/* Hover hint */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-stone-900/80 text-white text-[11px] px-3 py-1 rounded-full whitespace-nowrap backdrop-blur-xs">
                      Click to view recipe details ↓
                    </div>
                  </a>
                </motion.div>
              </AnimatePresence>

              {/* Radial Navigation Carousel Buttons: Left & Right */}
              <button
                id="carousel-prev-btn"
                onClick={handlePrev}
                aria-label="Previous product image"
                className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-stone-900 text-stone-800 hover:text-white border border-stone-300/80 shadow-md flex items-center justify-center transition-all duration-200 focus:outline-hidden"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                id="carousel-next-btn"
                onClick={handleNext}
                aria-label="Next product image"
                className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-stone-900 text-stone-800 hover:text-white border border-stone-300/80 shadow-md flex items-center justify-center transition-all duration-200 focus:outline-hidden"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Top Italian Tricolore Floating Chip */}
              <div className="absolute -top-3 z-30 bg-white/95 border border-stone-200 shadow-xs px-3.5 py-1 rounded-full text-[11px] font-medium tracking-wider uppercase text-stone-800 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-amber-600" />
                <span>Original Mac&Cheese Pack</span>
              </div>
            </div>

            {/* Circular Carousel Selection Buttons (Thumbnails & Direct Triggers) */}
            <div className="mt-8 flex items-center justify-center gap-3" id="carousel-direct-buttons">
              {PRODUCTS.map((prod, idx) => {
                const isCurrent = idx === currentIndex;
                return (
                  <button
                    key={prod.id}
                    id={`carousel-button-${prod.id}`}
                    onClick={() => handleSelect(idx)}
                    className={`group relative flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium transition-all duration-200 ${
                      isCurrent
                        ? 'bg-stone-900 text-white border-stone-900 shadow-xs scale-105'
                        : 'bg-white/80 hover:bg-stone-100 text-stone-700 border-stone-300'
                    }`}
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: prod.accentColor }}
                    />
                    <span className="hidden sm:inline whitespace-nowrap">{prod.name}</span>
                    <span className="sm:hidden">{idx + 1}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Product Mini Descriptor Card */}
            <div className="mt-4 text-center">
              <span className="text-xs uppercase tracking-widest text-stone-400 font-semibold">
                {activeProduct.descriptor}
              </span>
              <p className="text-xs text-stone-600 italic font-editorial text-sm mt-0.5 max-w-xs">
                "{activeProduct.shortDesc}"
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
