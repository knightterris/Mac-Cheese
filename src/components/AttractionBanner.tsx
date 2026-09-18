import React from 'react';
import { ambianceImg } from '../data/productData';
import { Sparkles, HeartHandshake, Compass } from 'lucide-react';

export const AttractionBanner: React.FC = () => {
  return (
    <section
      id="attraction-section"
      className="relative py-28 sm:py-36 md:py-44 overflow-hidden flex items-center justify-center text-center"
    >
      {/* Background Image with Elegant Darkening Vignette */}
      <div className="absolute inset-0 -z-10">
        <img
          src={ambianceImg}
          alt="Authentic Italian Culinary Kitchen Atmosphere"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center brightness-[0.42] contrast-[1.12]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/40 to-stone-950/70" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white space-y-8">
        
        {/* Subtle Crest Tag */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-[0.25em] text-amber-200">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Firma Italia • Muggiò, Lombardia</span>
        </div>

        {/* Big Text with Authentic Italian Artistic Vibe */}
        <div className="space-y-4">
          <span className="block font-italiana text-xl sm:text-2xl md:text-3xl text-amber-500 tracking-wide italic">
            L'Arte Della Semplicità
          </span>
          <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05] drop-shadow-lg">
            Where Italian Heritage <br />
            Meets Pure Indulgence.
          </h2>
        </div>

        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-stone-600 font-light leading-relaxed drop-shadow-sm">
          Every pasta shell is cast in Italy from premium durum wheat semolina, 
          ribbed to embrace genuine melted cheese in each fold. 
          No shortcuts. No compromises. Just pure Italian culinary passion.
        </p>

        {/* Three Aesthetic Heritage Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto pt-6 border-t border-white/15">
          <div className="space-y-1">
            <span className="block text-2xl font-editorial font-bold text-amber-200">1968</span>
            <span className="text-xs uppercase tracking-widest text-stone-300">Monza e Brianza Roots</span>
          </div>
          <div className="space-y-1">
            <span className="block text-2xl font-editorial font-bold text-amber-200">100%</span>
            <span className="text-xs uppercase tracking-widest text-stone-300">Durum Wheat Semolina</span>
          </div>
          <div className="space-y-1">
            <span className="block text-2xl font-editorial font-bold text-amber-200">7 Min</span>
            <span className="text-xs uppercase tracking-widest text-stone-300">Effortless Perfection</span>
          </div>
        </div>

      </div>
    </section>
  );
};
