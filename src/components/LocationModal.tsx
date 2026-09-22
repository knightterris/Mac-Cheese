import React, { useState } from 'react';
import { X, Save, RotateCcw, Plus, Trash2, Edit3, Check } from 'lucide-react';
import { StoreLocation } from '../types';
import { INITIAL_LOCATIONS } from '../data/productData';

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
  locations: StoreLocation[];
  onSave: (updated: StoreLocation[]) => void;
  onReset: () => void;
}

export const LocationModal: React.FC<LocationModalProps> = ({
  isOpen,
  onClose,
  locations,
  onSave,
  onReset,
}) => {
  const [formData, setFormData] = useState<StoreLocation[]>(locations);
  const [activeEditIndex, setActiveEditIndex] = useState<number>(0);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleFieldChange = (field: keyof StoreLocation, value: string) => {
    const updated = [...formData];
    updated[activeEditIndex] = {
      ...updated[activeEditIndex],
      [field]: value,
    };
    setFormData(updated);
  };

  const handleSave = () => {
    onSave(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 900);
  };

  const activeLoc = formData[activeEditIndex] || formData[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-stone-200 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-stone-900 text-white flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-2.5">
            <Edit3 className="w-4 h-4 text-amber-400" />
            <div>
              <h3 className="font-editorial text-lg font-bold">
                Developer & Client Location Editor
              </h3>
              <p className="text-[11px] text-stone-300">
                Customize Gourmet Market launch branches, operating hours, and floor zones.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Location Selector Tabs */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
              Select Location to Edit ({formData.length} Places)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {formData.map((loc, idx) => (
                <button
                  key={loc.id || idx}
                  onClick={() => setActiveEditIndex(idx)}
                  className={`px-3 py-2 rounded-xl text-left text-xs font-semibold border transition-all truncate ${
                    activeEditIndex === idx
                      ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                      : 'bg-stone-50 text-stone-700 hover:bg-stone-100 border-stone-200'
                  }`}
                >
                  <span className="block text-[10px] opacity-70">Place 0{idx + 1}</span>
                  <span className="truncate">{loc.name.replace('Gourmet Market — ', '')}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Edit Form for Active Location */}
          <div className="bg-stone-50 p-5 rounded-xl border border-stone-200 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Location Display Title
                </label>
                <input
                  type="text"
                  value={activeLoc.name}
                  onChange={(e) => handleFieldChange('name', e.target.value)}
                  className="w-full text-xs px-3 py-2 bg-white border border-stone-300 rounded-lg focus:outline-hidden focus:border-stone-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Mall / Complex Name
                </label>
                <input
                  type="text"
                  value={activeLoc.mall}
                  onChange={(e) => handleFieldChange('mall', e.target.value)}
                  className="w-full text-xs px-3 py-2 bg-white border border-stone-300 rounded-lg focus:outline-hidden focus:border-stone-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Floor & Zone Details
                </label>
                <input
                  type="text"
                  value={activeLoc.floorZone}
                  onChange={(e) => handleFieldChange('floorZone', e.target.value)}
                  className="w-full text-xs px-3 py-2 bg-white border border-stone-300 rounded-lg focus:outline-hidden focus:border-stone-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Launch Date
                </label>
                <input
                  type="text"
                  value={activeLoc.launchDate}
                  onChange={(e) => handleFieldChange('launchDate', e.target.value)}
                  className="w-full text-xs px-3 py-2 bg-white border border-stone-300 rounded-lg focus:outline-hidden focus:border-stone-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Operating Hours
                </label>
                <input
                  type="text"
                  value={activeLoc.hours}
                  onChange={(e) => handleFieldChange('hours', e.target.value)}
                  className="w-full text-xs px-3 py-2 bg-white border border-stone-300 rounded-lg focus:outline-hidden focus:border-stone-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Transit Tip / Public Transport
                </label>
                <input
                  type="text"
                  value={activeLoc.transitTip}
                  onChange={(e) => handleFieldChange('transitTip', e.target.value)}
                  className="w-full text-xs px-3 py-2 bg-white border border-stone-300 rounded-lg focus:outline-hidden focus:border-stone-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Full Street Address
              </label>
              <input
                type="text"
                value={activeLoc.address}
                onChange={(e) => handleFieldChange('address', e.target.value)}
                className="w-full text-xs px-3 py-2 bg-white border border-stone-300 rounded-lg focus:outline-hidden focus:border-stone-900"
              />
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-stone-100 border-t border-stone-200 flex items-center justify-between">
          <button
            onClick={onReset}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-200 rounded-lg transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Initial 4 Places</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-stone-700 hover:bg-stone-200 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold bg-stone-900 hover:bg-amber-800 text-white rounded-lg transition-all shadow-xs"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Saved!</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Apply Changes</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
