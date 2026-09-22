import React from 'react';
import {
  Building2,
  ArrowUpRight,
  Mail,
  PackageCheck,
  Store,
  Handshake,
} from 'lucide-react';

export const WholesaleSection: React.FC = () => {
  return (
    <section
      id="wholesale"
      className="relative overflow-hidden bg-stone-900 py-20 md:py-28"
    >
      {/* Decorative background */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-amber-700/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-32 w-96 h-96 rounded-full bg-amber-100/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">

          {/* LEFT */}
          <div>
            <div className="
              inline-flex
              items-center
              gap-2
              px-3.5 py-1.5
              rounded-full
              border border-amber-700/40
              bg-amber-900/20
              text-amber-300
              text-xs
              font-semibold
              uppercase
              tracking-[0.16em]
              mb-6
            ">
              <Building2 className="w-3.5 h-3.5" />
              Wholesale & Business
            </div>

            <h2 className="
              font-editorial
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-semibold
              text-white
              tracking-tight
              leading-[1.05]
            ">
              Bring a Taste of Italy
              <span className="block text-amber-400 mt-1">
                to Your Business.
              </span>
            </h2>

            <p className="
              mt-6
              max-w-2xl
              text-base
              sm:text-lg
              text-stone-300
              leading-relaxed
            ">
              Interested in stocking MAC&CHEESE? We welcome wholesale
              enquiries from retailers, supermarkets, distributors,
              hospitality businesses, and other business partners
              across Thailand.
            </p>

            {/* Benefits */}
            <div className="grid sm:grid-cols-3 gap-5 mt-10">

              <div className="flex sm:block items-center gap-4">
                <div className="
                  w-10 h-10
                  rounded-xl
                  bg-white/5
                  border border-white/10
                  flex items-center
                  justify-center
                  mb-0 sm:mb-3
                ">
                  <PackageCheck className="w-5 h-5 text-amber-400" />
                </div>

                <div>
                  <p className="text-white text-sm font-semibold">
                    Wholesale Supply
                  </p>

                  <p className="text-stone-500 text-xs mt-1">
                    Business quantities
                  </p>
                </div>
              </div>

              <div className="flex sm:block items-center gap-4">
                <div className="
                  w-10 h-10
                  rounded-xl
                  bg-white/5
                  border border-white/10
                  flex items-center
                  justify-center
                  mb-0 sm:mb-3
                ">
                  <Store className="w-5 h-5 text-amber-400" />
                </div>

                <div>
                  <p className="text-white text-sm font-semibold">
                    Retail Partners
                  </p>

                  <p className="text-stone-500 text-xs mt-1">
                    Stores & hospitality
                  </p>
                </div>
              </div>

              <div className="flex sm:block items-center gap-4">
                <div className="
                  w-10 h-10
                  rounded-xl
                  bg-white/5
                  border border-white/10
                  flex items-center
                  justify-center
                  mb-0 sm:mb-3
                ">
                  <Handshake className="w-5 h-5 text-amber-400" />
                </div>

                <div>
                  <p className="text-white text-sm font-semibold">
                    Partnership
                  </p>

                  <p className="text-stone-500 text-xs mt-1">
                    Let's grow together
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT CONTACT CARD */}
          <div className="
            bg-[#FAF8F5]
            rounded-[2rem]
            p-7
            sm:p-9
            lg:p-10
            shadow-2xl
          ">

            <div className="
              w-12 h-12
              rounded-2xl
              bg-amber-100
              flex items-center
              justify-center
              mb-6
            ">
              <Mail className="w-5 h-5 text-amber-800" />
            </div>

            <p className="
              text-xs
              uppercase
              tracking-[0.16em]
              text-amber-800
              font-bold
              mb-3
            ">
              Business Enquiries
            </p>

            <h3 className="
              font-editorial
              text-3xl
              sm:text-4xl
              font-semibold
              text-stone-950
              leading-tight
            ">
              Let's Talk Wholesale.
            </h3>

            <p className="
              mt-4
              text-sm
              sm:text-base
              text-stone-600
              leading-relaxed
            ">
              Tell us a little about your business and our team will
              be happy to discuss wholesale opportunities, product
              availability, and partnership enquiries.
            </p>

            <div className="h-px bg-stone-200 my-7" />

            <p className="
              text-xs
              uppercase
              tracking-wider
              font-semibold
              text-stone-500
              mb-2
            ">
              Official Thailand Distributor
            </p>

            <p className="
              font-editorial
              text-xl
              font-semibold
              text-stone-900
            ">
              Chob Siam Co., Ltd.
            </p>

            {/* CONTACT BUTTON */}
            <a
              href="mailto:info@chobsiamltd.com?subject=MAC%26CHEESE%20Wholesale%20Enquiry"
              className="
                group
                mt-7
                w-full
                px-6 py-4
                rounded-xl
                bg-amber-800
                hover:bg-amber-900
                text-white
                font-semibold
                flex
                items-center
                justify-between
                transition-all
                duration-300
                shadow-sm
                hover:shadow-md
              "
            >
              <span>Contact Us</span>

              <ArrowUpRight className="
                w-4 h-4
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              " />
            </a>

            <p className="
              mt-4
              text-center
              text-[11px]
              text-stone-400
            ">
              Wholesale and business enquiries only
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};