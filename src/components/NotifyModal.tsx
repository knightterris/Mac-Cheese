import React, { useState } from 'react';
import { X, BellRing, Check, ShoppingBag, Sparkles } from 'lucide-react';
import { Product } from '../types';

interface NotifyModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  platform: 'Lazada' | 'Shopee' | 'TikTok Shop' | '';
}

export const NotifyModal: React.FC<NotifyModalProps> = ({
  isOpen,
  onClose,
  product,
  platform,
}) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen || !product) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1 rounded-full text-stone-400 hover:text-stone-900 hover:bg-stone-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <Check className="w-7 h-7" />
            </div>
            <h3 className="font-editorial text-2xl font-bold text-stone-900">
              You're on the VIP Launch List!
            </h3>
            <p className="text-sm text-stone-600">
              We will notify you the moment <strong>{product.name}</strong> goes live on <strong>{platform}</strong>.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800">
                <BellRing className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800">
                  {platform} • Coming Soon
                </span>
                <h3 className="font-editorial text-xl font-bold text-stone-900">
                  Be Notified on Launch
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3.5 bg-stone-50 rounded-2xl border border-stone-200">
              <img
                src={product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-14 h-14 object-contain shrink-0"
              />
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
                  {product.descriptor}
                </span>
                <h4 className="text-sm font-semibold text-stone-900">{product.name}</h4>
                <p className="text-[11px] text-stone-500">Official Firma Italia Thailand Stock</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-sm px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl focus:bg-white focus:outline-hidden focus:border-stone-900"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-stone-900 hover:bg-amber-800 text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-colors shadow-xs"
              >
                Notify Me When Live on {platform}
              </button>

              <p className="text-[11px] text-center text-stone-400">
                No spam. Exclusively managed by distributor Chob Siam Co., Ltd.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
