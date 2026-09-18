import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Clock, Navigation, Compass, Settings, Check, ExternalLink, Sparkles } from 'lucide-react';
import { StoreLocation } from '../types';
import { INITIAL_LOCATIONS } from '../data/productData';
import { LocationModal } from './LocationModal';

export const RetailAnnouncement: React.FC = () => {
  const [locations, setLocations] = useState<StoreLocation[]>(() => {
    const saved = localStorage.getItem('firma_italia_locations');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return INITIAL_LOCATIONS;
      }
    }
    return INITIAL_LOCATIONS;
  });

  const [selectedLocationId, setSelectedLocationId] = useState<string>(locations[0]?.id || 'gourmet-siam-paragon');
  const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('firma_italia_locations', JSON.stringify(locations));
  }, [locations]);

  const activeLocation = locations.find((l) => l.id === selectedLocationId) || locations[0];

  const handleSaveLocations = (updated: StoreLocation[]) => {
    setLocations(updated);
  };

  const handleResetLocations = () => {
    setLocations(INITIAL_LOCATIONS);
    localStorage.removeItem('firma_italia_locations');
  };

  return (
    <section id="locations" className="py-20 md:py-28 bg-[#F5EFE6]/40 border-t border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Retail Announcement Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-300 text-xs uppercase tracking-widest text-stone-800 font-semibold shadow-2xs">
            <Calendar className="w-3.5 h-3.5 text-rose-600" />
            <span>Official Thailand Launch</span>
          </div>

          {/* User Prompt Exact Headline */}
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-stone-950 tracking-tight leading-[1.12]">
            Your new favourite. Coming to your neighbourhood.
          </h2>

          <p className="font-editorial text-xl sm:text-2xl md:text-3xl text-amber-900 font-medium italic">
            Discover MC&CHEESE at selected Gourmet Market locations from 24 September 2026.
          </p>

          <p className="text-stone-600 text-sm sm:text-base max-w-2xl mx-auto">
            Experience the authentic taste of Italy. Pick up all four signature flavours at 
            Thailand's most renowned world-class gourmet grocery destinations.
          </p>

          {/* Developer Edit Mode Trigger */}
          <div className="pt-2 flex items-center justify-center gap-3">
            <button
              id="dev-edit-locations-btn"
              onClick={() => setIsEditorOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-stone-600 hover:text-stone-900 bg-white hover:bg-stone-100 border border-stone-300 shadow-2xs transition-colors cursor-pointer"
              title="Click to edit location data (Developer & Client Mode)"
            >
              <Settings className="w-3.5 h-3.5 text-amber-700" />
              <span>Edit Locations (Developer Mode)</span>
            </button>
            <span className="text-xs text-stone-500 font-medium">
              • 4 Verified Gourmet Market Locations
            </span>
          </div>
        </div>

        {/* 4 Places Client-Clickable Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {locations.map((loc, idx) => {
            const isSelected = loc.id === selectedLocationId;
            return (
              <button
                key={loc.id}
                id={`location-card-${loc.id}`}
                onClick={() => setSelectedLocationId(loc.id)}
                className={`p-5 rounded-2xl text-left transition-all duration-200 border cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-stone-900 text-white border-stone-900 shadow-lg scale-[1.02]'
                    : 'bg-white text-stone-800 hover:bg-stone-50 border-stone-200 shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[11px] font-bold uppercase tracking-widest ${
                      isSelected ? 'text-amber-400' : 'text-stone-400'
                    }`}>
                      Branch 0{idx + 1}
                    </span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-stone-100 text-stone-600'
                    }`}>
                      Gourmet Market
                    </span>
                  </div>

                  <h3 className={`font-editorial text-lg sm:text-xl font-bold leading-snug mb-1 ${
                    isSelected ? 'text-white' : 'text-stone-900'
                  }`}>
                    {loc.name.replace('Gourmet Market — ', '')}
                  </h3>

                  <p className={`text-xs mb-3 ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                    {loc.mall}
                  </p>
                </div>

                <div className={`pt-3 border-t text-xs flex items-center justify-between ${
                  isSelected ? 'border-stone-800 text-stone-300' : 'border-stone-100 text-stone-600'
                }`}>
                  <span className="truncate">{loc.floorZone.split('(')[0]}</span>
                  <MapPin className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-rose-400' : 'text-rose-600'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Selected Location Detailed Display Card with Map Preview */}
        {activeLocation && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-rose-50 text-rose-800 border border-rose-200 rounded-full flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-rose-600" />
                    <span>Launch Date: {activeLocation.launchDate}</span>
                  </span>
                  <span className="px-3 py-1 text-xs font-medium text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-full">
                    Official Launch Retailer
                  </span>
                </div>

                <div>
                  <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-950">
                    {activeLocation.name}
                  </h3>
                  <p className="text-sm font-medium text-stone-500 mt-1">
                    {activeLocation.floorZone} • {activeLocation.city}
                  </p>
                </div>

                {/* Practical Information */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 text-sm text-stone-700">
                    <MapPin className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-stone-900">Address: </span>
                      <span>{activeLocation.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm text-stone-700">
                    <Clock className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-stone-900">Store Hours: </span>
                      <span>{activeLocation.hours}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm text-stone-700">
                    <Navigation className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-stone-900">Transit & Access: </span>
                      <span>{activeLocation.transitTip}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      activeLocation.name + ' ' + activeLocation.address
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-amber-800 transition-colors shadow-xs"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => setIsEditorOpen(true)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-stone-700 bg-stone-100 hover:bg-stone-200 transition-colors"
                  >
                    <span>Edit Location Data</span>
                  </button>
                </div>
              </div>

              {/* Right Stylized Interactive Showcase / Map Graphic */}
              <div className="lg:col-span-5 bg-gradient-to-tr from-stone-100 via-amber-50/40 to-stone-50 rounded-2xl p-6 border border-stone-200 text-center flex flex-col items-center justify-center relative overflow-hidden min-h-[260px]">
                <div className="w-16 h-16 rounded-full bg-white shadow-md border border-stone-200 flex items-center justify-center text-rose-600 mb-3">
                  <MapPin className="w-8 h-8 fill-rose-100" />
                </div>
                <span className="text-xs uppercase tracking-widest text-amber-800 font-bold mb-1">
                  Gourmet Market Showcase
                </span>
                <h4 className="font-editorial text-xl font-bold text-stone-900">
                  {activeLocation.mall}
                </h4>
                <p className="text-xs text-stone-500 max-w-xs mt-1">
                  Look for the special MC&CHEESE Italian imported specialty aisle at Gourmet Market.
                </p>

                <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-stone-300 text-[11px] font-semibold text-stone-800 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Stocking 4 Signature Flavours</span>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>

      {/* Developer Edit Modal */}
      <LocationModal
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        locations={locations}
        onSave={handleSaveLocations}
        onReset={handleResetLocations}
      />
    </section>
  );
};
