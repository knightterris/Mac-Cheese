import React from 'react';
import { Sparkles, CheckCircle, Flame, Clock, Heart, Award } from 'lucide-react';
import { PRODUCTS } from '../data/productData';

export const FlavoursDetail: React.FC = () => {
  const fourCheese = PRODUCTS.find((p) => p.id === 'four-cheese')!;
  const jalapenos = PRODUCTS.find((p) => p.id === 'jalapenos')!;
  const tomatoMozz = PRODUCTS.find((p) => p.id === 'tomato-mozzarella')!;
  const truffle = PRODUCTS.find((p) => p.id === 'truffle-mushroom')!;

  return (
    <section id="flavours-detail-container" className="py-20 md:py-28 bg-[#FAF8F5] space-y-24">
      
      {/* ---------------- 1. Four Cheese Detail ---------------- */}
      {/* User prompt: left side text with 3 elegant bullets for 4 cheese product and right side 4 cheese product picture */}
      <div
        id="detail-four-cheese"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28"
      >
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/90 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Side Text with 3 Elegant Bullets */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 font-bold">
                  {fourCheese.descriptor}
                </span>
                <span className="text-xs text-stone-400 font-medium tracking-wider">
                  Origin: Muggiò, Italy
                </span>
              </div>

              <div>
                <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
                  {fourCheese.name}
                </h3>
                <p className="text-sm font-serif italic text-amber-900 mt-1">
                  {fourCheese.italianName}
                </p>
                <p className="text-base text-stone-600 mt-3 leading-relaxed">
                  {fourCheese.shortDesc}
                </p>
              </div>

              {/* 3 Elegant Bullets */}
              <div className="space-y-4 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400">
                  Signature Craft Notes
                </h4>
                <ul className="space-y-3.5">
                  {fourCheese.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-stone-700">
                      <div className="w-6 h-6 rounded-full bg-amber-50 border border-amber-300 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs font-bold font-editorial">0{idx + 1}</span>
                      </div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tasting Badges & Specifications */}
              <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center gap-4 text-xs text-stone-600">
                <span className="inline-flex items-center gap-1 font-semibold text-stone-900">
                  <Clock className="w-3.5 h-3.5 text-amber-700" />
                  7 min stovetop
                </span>
                <span>•</span>
                <span>184g net weight</span>
                <span>•</span>
                <span>2 generous portions (225g prepared)</span>
                <span>•</span>
                <span className="text-amber-800 font-medium">All-in-one pouch formula</span>
              </div>
            </div>

            {/* Right Side 4 Cheese Product Picture */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
              <div className="relative w-full max-w-[340px] aspect-square flex items-center justify-center bg-radial from-amber-100/60 via-stone-50 to-white rounded-full p-6 border border-stone-200/80 shadow-inner">
                <img
                  src={fourCheese.image}
                  alt="Firma Italia Four Cheese Mac & Cheese"
                  referrerPolicy="no-referrer"
                  className="w-[260px] h-[260px] sm:w-[290px] sm:h-[290px] object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="text-xs text-stone-500 italic mt-4 font-serif">
                Serving suggestion: garnish with fresh cracked peppercorn
              </span>
            </div>

          </div>
        </div>
      </div>


      {/* ---------------- 2. Jalapeños Detail ---------------- */}
      {/* User prompt: left side jalapenos product image and right side 3 elegant bullet text */}
      <div
        id="detail-jalapenos"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28"
      >
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/90 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Side Jalapenos Product Image */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col items-center justify-center relative">
              <div className="relative w-full max-w-[340px] aspect-square flex items-center justify-center bg-radial from-red-100/60 via-stone-50 to-white rounded-full p-6 border border-stone-200/80 shadow-inner">
                <img
                  src={jalapenos.image}
                  alt="Firma Italia Jalapeños Mac & Cheese"
                  referrerPolicy="no-referrer"
                  className="w-[260px] h-[260px] sm:w-[290px] sm:h-[290px] object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="text-xs text-stone-500 italic mt-4 font-serif">
                Serving suggestion: pair with sliced fresh green chilies
              </span>
            </div>

            {/* Right Side 3 Elegant Bullet Text */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-red-50 text-red-900 border border-red-200 font-bold flex items-center gap-1">
                  <Flame className="w-3 h-3 text-red-600 fill-red-600" />
                  {jalapenos.descriptor}
                </span>
                <span className="text-xs text-stone-400 font-medium tracking-wider">
                  Origin: Muggiò, Italy
                </span>
              </div>

              <div>
                <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
                  {jalapenos.name}
                </h3>
                <p className="text-sm font-serif italic text-red-900 mt-1">
                  {jalapenos.italianName}
                </p>
                <p className="text-base text-stone-600 mt-3 leading-relaxed">
                  {jalapenos.shortDesc}
                </p>
              </div>

              {/* 3 Elegant Bullets */}
              <div className="space-y-4 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400">
                  Signature Craft Notes
                </h4>
                <ul className="space-y-3.5">
                  {jalapenos.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-stone-700">
                      <div className="w-6 h-6 rounded-full bg-red-50 border border-red-300 text-red-800 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs font-bold font-editorial">0{idx + 1}</span>
                      </div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tasting Badges & Specifications */}
              <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center gap-4 text-xs text-stone-600">
                <span className="inline-flex items-center gap-1 font-semibold text-stone-900">
                  <Clock className="w-3.5 h-3.5 text-red-700" />
                  7 min stovetop
                </span>
                <span>•</span>
                <span>Zesty medium heat</span>
                <span>•</span>
                <span>184g net weight (2 portions)</span>
                <span>•</span>
                <span className="text-red-800 font-medium">Real sun-dried chili flakes</span>
              </div>
            </div>

          </div>
        </div>
      </div>


      {/* ---------------- 3. Tomato Mozzarella Detail ---------------- */}
      {/* User prompt: left side 3 elegant bullet text and right side product image for tomato mozzarella */}
      <div
        id="detail-tomato-mozzarella"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28"
      >
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/90 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Side 3 Elegant Bullet Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 font-bold">
                  {tomatoMozz.descriptor}
                </span>
                <span className="text-xs text-stone-400 font-medium tracking-wider">
                  Origin: Muggiò, Italy
                </span>
              </div>

              <div>
                <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
                  {tomatoMozz.name}
                </h3>
                <p className="text-sm font-serif italic text-emerald-900 mt-1">
                  {tomatoMozz.italianName}
                </p>
                <p className="text-base text-stone-600 mt-3 leading-relaxed">
                  {tomatoMozz.shortDesc}
                </p>
              </div>

              {/* 3 Elegant Bullets */}
              <div className="space-y-4 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400">
                  Signature Craft Notes
                </h4>
                <ul className="space-y-3.5">
                  {tomatoMozz.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-stone-700">
                      <div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs font-bold font-editorial">0{idx + 1}</span>
                      </div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tasting Badges & Specifications */}
              <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center gap-4 text-xs text-stone-600">
                <span className="inline-flex items-center gap-1 font-semibold text-stone-900">
                  <Clock className="w-3.5 h-3.5 text-emerald-700" />
                  7 min stovetop
                </span>
                <span>•</span>
                <span>Sun-ripened Mediterranean tomato</span>
                <span>•</span>
                <span>184g net weight (2 servings)</span>
                <span>•</span>
                <span className="text-emerald-800 font-medium">Sweet fior di latte mozzarella</span>
              </div>
            </div>

            {/* Right Side Product Image for Tomato Mozzarella */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
              <div className="relative w-full max-w-[340px] aspect-square flex items-center justify-center bg-radial from-emerald-100/60 via-stone-50 to-white rounded-full p-6 border border-stone-200/80 shadow-inner">
                <img
                  src={tomatoMozz.image}
                  alt="Firma Italia Tomato Mozzarella Mac & Cheese"
                  referrerPolicy="no-referrer"
                  className="w-[260px] h-[260px] sm:w-[290px] sm:h-[290px] object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="text-xs text-stone-500 italic mt-4 font-serif">
                Serving suggestion: pair with torn basil leaves & olive oil drizzle
              </span>
            </div>

          </div>
        </div>
      </div>


      {/* ---------------- 4. Truffle & Mushrooms Detail ---------------- */}
      {/* User prompt: left side truffle and mushroom product image and right side 3 elegant bullet text */}
      <div
        id="detail-truffle-mushroom"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28"
      >
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/90 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Side Truffle and Mushroom Product Image */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col items-center justify-center relative">
              <div className="relative w-full max-w-[340px] aspect-square flex items-center justify-center bg-radial from-stone-200/60 via-stone-50 to-white rounded-full p-6 border border-stone-200/80 shadow-inner">
                <img
                  src={truffle.image}
                  alt="Firma Italia Truffle & Mushrooms Mac & Cheese"
                  referrerPolicy="no-referrer"
                  className="w-[260px] h-[260px] sm:w-[290px] sm:h-[290px] object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="text-xs text-stone-500 italic mt-4 font-serif">
                Serving suggestion: top with fresh truffle carpaccio & chives
              </span>
            </div>

            {/* Right Side 3 Elegant Bullet Text */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-stone-200 text-stone-900 border border-stone-300 font-bold">
                  {truffle.descriptor}
                </span>
                <span className="text-xs text-stone-400 font-medium tracking-wider">
                  Origin: Muggiò, Italy
                </span>
              </div>

              <div>
                <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
                  {truffle.name}
                </h3>
                <p className="text-sm font-serif italic text-stone-700 mt-1">
                  {truffle.italianName}
                </p>
                <p className="text-base text-stone-600 mt-3 leading-relaxed">
                  {truffle.shortDesc}
                </p>
              </div>

              {/* 3 Elegant Bullets */}
              <div className="space-y-4 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400">
                  Signature Craft Notes
                </h4>
                <ul className="space-y-3.5">
                  {truffle.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-stone-700">
                      <div className="w-6 h-6 rounded-full bg-stone-100 border border-stone-300 text-stone-800 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs font-bold font-editorial">0{idx + 1}</span>
                      </div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tasting Badges & Specifications */}
              <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center gap-4 text-xs text-stone-600">
                <span className="inline-flex items-center gap-1 font-semibold text-stone-900">
                  <Clock className="w-3.5 h-3.5 text-stone-800" />
                  7 min stovetop
                </span>
                <span>•</span>
                <span>Umbrian black truffle shavings</span>
                <span>•</span>
                <span>184g net weight (2 portions)</span>
                <span>•</span>
                <span className="text-stone-800 font-medium">Fine dining restaurant aroma</span>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};
