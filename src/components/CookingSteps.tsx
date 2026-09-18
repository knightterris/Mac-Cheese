import React, { useState } from 'react';
import { ChefHat, Flame, Utensils, Sparkles, CheckCircle2, Clock, Droplets } from 'lucide-react';

export const CookingSteps: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      stepNumber: '01',
      title: 'Choose',
      italianTitle: 'Scegli il tuo gusto',
      subtitle: 'Select your preferred gourmet recipe',
      description:
        'Select from Four Cheese, Exciting Jalapeños, Tomato Mozzarella, or Truffle & Mushrooms to match your craving or dining occasion.',
      tip: 'Each box contains 184g net weight, perfectly yielding 2 generous restaurant portions.',
      icon: ChefHat,
      badge: 'Step 1: Selection',
    },
    {
      stepNumber: '02',
      title: 'Get Ready & Cook',
      italianTitle: 'Pronto e Cuoci in 9-11 Minuti',
      subtitle: 'Simmer effortlessly with only water',
      description:
        'Pour 500ml (approx. 2 cups) of cold water into a medium saucepan or skillet. Empty the complete pouch contents, bring to a gentle boil, and stir occasionally for 9 to 11 minutes on medium heat until the sauce becomes luxuriously thick and the shell pasta is al dente.',
      tip: 'Zero butter or milk needed. The "All In!" blend naturally emulsifies with water into an unctuous cheese sauce.',
      icon: Flame,
      badge: 'Step 2: Stovetop Simmer',
    },
    {
      stepNumber: '03',
      title: 'Serve',
      italianTitle: 'Impiatta e Gusta Caldo',
      subtitle: 'Plate immediately and savour',
      description:
        'Remove from heat and let rest for 1 minute so the pasta shells cradle the velvety cheese sauce. Spoon hot into warm shallow bowls, top with freshly ground pepper or your favourite herbs, and serve.',
      tip: 'Best enjoyed immediately while piping hot to experience the full aroma of Italian cheeses.',
      icon: Utensils,
      badge: 'Step 3: Authentic Indulgence',
    },
  ];

  return (
    <section
      id="how-to-cook"
      className="py-20 md:py-28 bg-[#F5EFE6]/50 border-t border-b border-stone-200/70 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-300/80 text-xs uppercase tracking-widest text-stone-700 font-semibold shadow-2xs">
            <Clock className="w-3.5 h-3.5 text-amber-700" />
            <span>Ready in 9-11 Minutes</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-semibold text-stone-950 tracking-tight">
            Everyone Can Cook at Ease with Simple Steps and Serve
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed">
            No complicated culinary techniques or shopping lists required. 
            Firma Italia brings centuries of Lombardian pasta mastery straight to your kitchen pan.
          </p>
          <div className="w-16 h-0.5 bg-amber-800/40 mx-auto mt-4" />
        </div>

        {/* 3 Step Interactive Workflow Card Grid: Choose -> Get Ready or Cook -> Serve */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Subtle horizontal connecting line on desktop */}
          <div className="hidden md:block absolute top-28 left-[18%] right-[18%] h-0.5 border-t border-dashed border-stone-300 -z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === idx + 1;

            return (
              <div
                key={step.stepNumber}
                id={`cooking-step-${step.stepNumber}`}
                onClick={() => setActiveStep(idx + 1)}
                className={`relative cursor-pointer rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-white shadow-xl border-amber-800/30 scale-[1.02]'
                    : 'bg-white/70 hover:bg-white hover:shadow-md border-stone-200'
                }`}
              >
                <div>
                  {/* Step Header & Big Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-stone-900 text-white shadow-md'
                          : 'bg-stone-100 text-stone-700'
                      }`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="font-editorial text-3xl font-bold text-stone-300">
                      {step.stepNumber}
                    </span>
                  </div>

                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-amber-800 mb-1">
                    {step.badge}
                  </span>
                  
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-stone-900 mb-1">
                    {step.title}
                  </h3>
                  
                  <p className="text-xs font-serif italic text-stone-500 mb-4">
                    {step.italianTitle}
                  </p>

                  <p className="text-sm text-stone-600 leading-relaxed font-normal mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Practical Tip Callout */}
                <div className="pt-4 border-t border-stone-100 flex items-start gap-2.5 text-xs text-stone-700 bg-stone-50/90 p-3.5 rounded-xl">
                  <Sparkles className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-900">Pro Tip: </span>
                    <span>{step.tip}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Cooking Formula Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
              <Droplets className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-editorial text-xl font-bold text-stone-900">
                The Golden Formula: 1 Pouch + 500ml Water
              </h4>
              <p className="text-xs sm:text-sm text-stone-500">
                No colander needed. The pasta cooks directly in the sauce, absorbing every ounce of flavour.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-stone-100 text-stone-800 border border-stone-200">
              Zero Colander
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-stone-100 text-stone-800 border border-stone-200">
              One Pot Only
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
