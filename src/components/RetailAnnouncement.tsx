import React, { useState } from 'react';

import {
  MapPin,
  Calendar,
  Clock,
  Navigation,
  ExternalLink,
  Sparkles,
  ChevronDown,
  Store,
} from 'lucide-react';

import { INITIAL_LOCATIONS } from '../data/productData';


export const RetailAnnouncement: React.FC = () => {

  // ============================================================
  // SELECTED MAIN LOCATION
  // ============================================================

  const [selectedLocationId, setSelectedLocationId] =
    useState<string>(
      INITIAL_LOCATIONS[0]?.id || 'gourmet-siam-paragon'
    );


  // ============================================================
  // SELECTED THE MALL SUB-BRANCH
  // ============================================================

  const [selectedBranchId, setSelectedBranchId] =
    useState<string | null>(null);


  // ============================================================
  // ACTIVE MAIN LOCATION
  // ============================================================

  const activeLocation =
    INITIAL_LOCATIONS.find(
      (location) => location.id === selectedLocationId
    ) || INITIAL_LOCATIONS[0];


  // ============================================================
  // CHECK IF LOCATION HAS MULTIPLE BRANCHES
  // ============================================================

  const hasBranches =
    activeLocation?.branches &&
    activeLocation.branches.length > 0;


  // ============================================================
  // ACTIVE SUB-BRANCH
  // ============================================================

  const activeBranch =
    activeLocation?.branches?.find(
      (branch) => branch.id === selectedBranchId
    ) || null;


  // ============================================================
  // MAIN LOCATION CLICK
  // ============================================================

  const handleLocationClick = (locationId: string) => {
    setSelectedLocationId(locationId);

    // Reset The Mall sub-branch whenever switching cards
    setSelectedBranchId(null);
  };


  // ============================================================
  // GOOGLE MAPS URL
  // ============================================================

  const createGoogleMapsUrl = (
    name: string,
    address: string
  ) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${name} ${address}`
    )}`;
  };


  return (
    <section
      id="locations"
      className="
        py-20
        md:py-28
        bg-[#F5EFE6]/40
        border-t
        border-b
        border-stone-200/80
      "
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        {/* ======================================================
            HEADER
            ====================================================== */}

        <div className="text-center max-w-4xl mx-auto space-y-4 mb-14">

          <div
            className="
              inline-flex
              items-center
              gap-2
              px-3.5
              py-1.5
              rounded-full
              bg-white
              border
              border-stone-300
              text-xs
              uppercase
              tracking-widest
              text-stone-800
              font-semibold
              shadow-2xs
            "
          >
            <Calendar className="w-3.5 h-3.5 text-rose-600" />

            <span>
              Official Thailand Launch
            </span>
          </div>


          <h2
            className="
              font-editorial
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-semibold
              text-stone-950
              tracking-tight
              leading-[1.12]
            "
          >
            Your new favourite. Coming to your neighbourhood.
          </h2>


          <p
            className="
              font-editorial
              text-xl
              sm:text-2xl
              md:text-3xl
              text-amber-900
              font-medium
              italic
            "
          >
            Discover MAC&CHEESE at selected Gourmet Market
            locations from 24 September 2026.
          </p>


          <p
            className="
              text-stone-600
              text-sm
              sm:text-base
              max-w-2xl
              mx-auto
            "
          >
            Experience the authentic taste of Italy.
            Pick up all four signature flavours at selected
            Gourmet Market locations across Bangkok and
            Nonthaburi.
          </p>


          {/* Availability */}

          <div className="pt-2 flex items-center justify-center">

            <span
              className="
                text-xs
                text-stone-500
                font-medium
              "
            >
              Available at 3 Main Gourmet Market locations
              and selected The Mall branches.
            </span>

          </div>

        </div>


        {/* ======================================================
            MAIN LOCATION CARDS
            ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-4
            mb-10
          "
        >

          {INITIAL_LOCATIONS.map((loc, idx) => {

            const isSelected =
              loc.id === selectedLocationId;

            const isGroup =
              loc.branches &&
              loc.branches.length > 0;


            return (

              <button
                key={loc.id}
                id={`location-card-${loc.id}`}
                type="button"
                onClick={() =>
                  handleLocationClick(loc.id)
                }
                className={`
                  p-5
                  rounded-2xl
                  text-left
                  transition-all
                  duration-300
                  border
                  cursor-pointer
                  flex
                  flex-col
                  justify-between
                  ${
                    isSelected
                      ? `
                        bg-stone-900
                        text-white
                        border-stone-900
                        shadow-lg
                        scale-[1.02]
                      `
                      : `
                        bg-white
                        text-stone-800
                        hover:bg-stone-50
                        hover:-translate-y-0.5
                        border-stone-200
                        shadow-xs
                      `
                  }
                `}
              >

                <div>

                  {/* Top */}

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-3
                      mb-3
                    "
                  >

                    <span
                      className={`
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-widest
                        ${
                          isSelected
                            ? 'text-amber-400'
                            : 'text-stone-400'
                        }
                      `}
                    >
                      {isGroup
                        ? 'Multiple Locations'
                        : `Branch ${String(
                            idx + 1
                          ).padStart(2, '0')}`}
                    </span>


                    <span
                      className={`
                        text-[10px]
                        px-2
                        py-0.5
                        rounded-full
                        font-medium
                        ${
                          isSelected
                            ? 'bg-white/20 text-white'
                            : 'bg-stone-100 text-stone-600'
                        }
                      `}
                    >
                      Gourmet Market
                    </span>

                  </div>


                  {/* Name */}

                  <h3
                    className={`
                      font-editorial
                      text-lg
                      sm:text-xl
                      font-bold
                      leading-snug
                      mb-1
                      ${
                        isSelected
                          ? 'text-white'
                          : 'text-stone-900'
                      }
                    `}
                  >
                    {loc.name.replace(
                      'Gourmet Market — ',
                      ''
                    )}
                  </h3>


                  {/* Mall */}

                  <p
                    className={`
                      text-xs
                      mb-3
                      ${
                        isSelected
                          ? 'text-stone-300'
                          : 'text-stone-500'
                      }
                    `}
                  >
                    {loc.mall}
                  </p>

                </div>


                {/* Bottom */}

                <div
                  className={`
                    pt-3
                    border-t
                    text-xs
                    flex
                    items-center
                    justify-between
                    gap-3
                    ${
                      isSelected
                        ? 'border-stone-800 text-stone-300'
                        : 'border-stone-100 text-stone-600'
                    }
                  `}
                >

                  <span className="truncate">
                    {loc.floorZone}
                  </span>


                  {isGroup ? (

                    <Store
                      className={`
                        w-3.5
                        h-3.5
                        shrink-0
                        ${
                          isSelected
                            ? 'text-amber-400'
                            : 'text-amber-700'
                        }
                      `}
                    />

                  ) : (

                    <MapPin
                      className={`
                        w-3.5
                        h-3.5
                        shrink-0
                        ${
                          isSelected
                            ? 'text-rose-400'
                            : 'text-rose-600'
                        }
                      `}
                    />

                  )}

                </div>

              </button>
            );
          })}

        </div>


        {/* ======================================================
            SELECTED LOCATION DETAILS
            ====================================================== */}

        {activeLocation && (

          <div
            className="
              bg-white
              rounded-3xl
              p-6
              sm:p-10
              border
              border-stone-200/90
              shadow-md
            "
          >

            {/* ==================================================
                NORMAL LOCATION
                ================================================== */}

            {!hasBranches && (

              <div
                className="
                  grid
                  grid-cols-1
                  lg:grid-cols-12
                  gap-8
                  items-center
                "
              >

                {/* LEFT DETAILS */}

                <div className="lg:col-span-7 space-y-5">


                  {/* Badges */}

                  <div
                    className="
                      flex
                      flex-wrap
                      items-center
                      gap-2
                    "
                  >

                    <span
                      className="
                        px-3
                        py-1
                        text-xs
                        font-bold
                        uppercase
                        tracking-wider
                        bg-rose-50
                        text-rose-800
                        border
                        border-rose-200
                        rounded-full
                        flex
                        items-center
                        gap-1.5
                      "
                    >

                      <Sparkles className="w-3.5 h-3.5 text-rose-600" />

                      <span>
                        Launch Date:{' '}
                        {activeLocation.launchDate}
                      </span>

                    </span>


                    <span
                      className="
                        px-3
                        py-1
                        text-xs
                        font-medium
                        text-emerald-800
                        bg-emerald-50
                        border
                        border-emerald-200
                        rounded-full
                      "
                    >
                      Official Launch Retailer
                    </span>

                  </div>


                  {/* Name */}

                  <div>

                    <h3
                      className="
                        font-editorial
                        text-2xl
                        sm:text-3xl
                        lg:text-4xl
                        font-bold
                        text-stone-950
                      "
                    >
                      {activeLocation.name}
                    </h3>


                    <p
                      className="
                        text-sm
                        font-medium
                        text-stone-500
                        mt-1
                      "
                    >
                      {activeLocation.floorZone}
                      {' • '}
                      {activeLocation.city}
                    </p>

                  </div>


                  {/* Information */}

                  <div className="space-y-3 pt-2">


                    {/* Address */}

                    <div
                      className="
                        flex
                        items-start
                        gap-3
                        text-sm
                        text-stone-700
                      "
                    >

                      <MapPin
                        className="
                          w-4
                          h-4
                          text-rose-600
                          shrink-0
                          mt-0.5
                        "
                      />

                      <div>

                        <span
                          className="
                            font-semibold
                            text-stone-900
                          "
                        >
                          Address:{' '}
                        </span>

                        <span>
                          {activeLocation.address}
                        </span>

                      </div>

                    </div>


                    {/* Hours */}

                    <div
                      className="
                        flex
                        items-start
                        gap-3
                        text-sm
                        text-stone-700
                      "
                    >

                      <Clock
                        className="
                          w-4
                          h-4
                          text-amber-700
                          shrink-0
                          mt-0.5
                        "
                      />

                      <div>

                        <span
                          className="
                            font-semibold
                            text-stone-900
                          "
                        >
                          Store Hours:{' '}
                        </span>

                        <span>
                          {activeLocation.hours}
                        </span>

                      </div>

                    </div>


                    {/* Transit */}

                    <div
                      className="
                        flex
                        items-start
                        gap-3
                        text-sm
                        text-stone-700
                      "
                    >

                      <Navigation
                        className="
                          w-4
                          h-4
                          text-blue-600
                          shrink-0
                          mt-0.5
                        "
                      />

                      <div>

                        <span
                          className="
                            font-semibold
                            text-stone-900
                          "
                        >
                          Transit & Access:{' '}
                        </span>

                        <span>
                          {activeLocation.transitTip}
                        </span>

                      </div>

                    </div>

                  </div>


                  {/* Google Maps */}

                  <div className="pt-3">

                    <a
                      href={createGoogleMapsUrl(
                        activeLocation.name,
                        activeLocation.address
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        px-5
                        py-2.5
                        rounded-full
                        text-xs
                        font-semibold
                        uppercase
                        tracking-wider
                        text-white
                        bg-stone-900
                        hover:bg-amber-800
                        transition-colors
                        shadow-xs
                      "
                    >

                      <span>
                        Open in Google Maps
                      </span>

                      <ExternalLink className="w-3.5 h-3.5" />

                    </a>

                  </div>

                </div>


                {/* RIGHT SHOWCASE */}

                <div
                  className="
                    lg:col-span-5
                    bg-gradient-to-tr
                    from-stone-100
                    via-amber-50/40
                    to-stone-50
                    rounded-2xl
                    p-6
                    border
                    border-stone-200
                    text-center
                    flex
                    flex-col
                    items-center
                    justify-center
                    relative
                    overflow-hidden
                    min-h-[260px]
                  "
                >

                  <div
                    className="
                      w-16
                      h-16
                      rounded-full
                      bg-white
                      shadow-md
                      border
                      border-stone-200
                      flex
                      items-center
                      justify-center
                      text-rose-600
                      mb-3
                    "
                  >

                    <MapPin
                      className="
                        w-8
                        h-8
                        fill-rose-100
                      "
                    />

                  </div>


                  <span
                    className="
                      text-xs
                      uppercase
                      tracking-widest
                      text-amber-800
                      font-bold
                      mb-1
                    "
                  >
                    Gourmet Market Showcase
                  </span>


                  <h4
                    className="
                      font-editorial
                      text-xl
                      font-bold
                      text-stone-900
                    "
                  >
                    {activeLocation.mall}
                  </h4>


                  <p
                    className="
                      text-xs
                      text-stone-500
                      max-w-xs
                      mt-1
                    "
                  >
                    Look for MAC&CHEESE at the
                    Gourmet Market imported food
                    section.
                  </p>


                  <div
                    className="
                      mt-4
                      inline-flex
                      items-center
                      gap-1.5
                      px-3
                      py-1
                      rounded-full
                      bg-white
                      border
                      border-stone-300
                      text-[11px]
                      font-semibold
                      text-stone-800
                      shadow-2xs
                    "
                  >

                    <span
                      className="
                        w-2
                        h-2
                        rounded-full
                        bg-emerald-500
                      "
                    />

                    <span>
                      Stocking 4 Signature Flavours
                    </span>

                  </div>

                </div>

              </div>

            )}


            {/* ==================================================
                THE MALL GROUP
                ================================================== */}

            {hasBranches && (

              <div>

                {/* Group Header */}

                <div
                  className="
                    flex
                    flex-col
                    lg:flex-row
                    lg:items-end
                    lg:justify-between
                    gap-5
                    mb-8
                  "
                >

                  <div>

                    <div
                      className="
                        inline-flex
                        items-center
                        gap-2
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        font-bold
                        uppercase
                        tracking-wider
                        bg-amber-50
                        text-amber-900
                        border
                        border-amber-200
                        mb-4
                      "
                    >

                      <Store className="w-3.5 h-3.5" />

                      Multiple Locations

                    </div>


                    <h3
                      className="
                        font-editorial
                        text-3xl
                        sm:text-4xl
                        font-bold
                        text-stone-950
                      "
                    >
                      Gourmet Market — The Mall
                    </h3>


                    <p
                      className="
                        mt-2
                        text-sm
                        sm:text-base
                        text-stone-600
                        max-w-2xl
                      "
                    >
                      Explore participating Gourmet Market
                      locations across Bangkok and Nonthaburi.
                      Select a branch below for floor,
                      opening hours, address and transit
                      information.
                    </p>

                  </div>


                  <div
                    className="
                      shrink-0
                      px-4
                      py-3
                      rounded-xl
                      bg-stone-50
                      border
                      border-stone-200
                    "
                  >

                    <p
                      className="
                        text-[10px]
                        uppercase
                        tracking-widest
                        text-stone-500
                        font-semibold
                      "
                    >
                      Participating Locations
                    </p>

                    <p
                      className="
                        font-editorial
                        text-2xl
                        font-bold
                        text-stone-900
                      "
                    >
                      {activeLocation.branches?.length || 0}
                    </p>

                  </div>

                </div>


                {/* Branch List */}

                <div
                  className="
                    grid
                    grid-cols-1
                    lg:grid-cols-2
                    gap-4
                  "
                >

                  {activeLocation.branches?.map(
                    (branch) => {

                      const isBranchOpen =
                        branch.id === selectedBranchId;


                      return (

                        <div
                          key={branch.id}
                          className={`
                            rounded-2xl
                            border
                            overflow-hidden
                            transition-all
                            duration-300
                            ${
                              isBranchOpen
                                ? `
                                  border-amber-300
                                  shadow-md
                                  bg-amber-50/20
                                `
                                : `
                                  border-stone-200
                                  bg-white
                                  hover:border-stone-300
                                `
                            }
                          `}
                        >

                          {/* Branch Header Button */}

                          <button
                            type="button"
                            onClick={() =>
                              setSelectedBranchId(
                                isBranchOpen
                                  ? null
                                  : branch.id
                              )
                            }
                            className="
                              w-full
                              p-5
                              text-left
                              flex
                              items-center
                              justify-between
                              gap-5
                              cursor-pointer
                            "
                          >

                            <div
                              className="
                                flex
                                items-start
                                gap-3
                              "
                            >

                              <div
                                className="
                                  w-10
                                  h-10
                                  rounded-xl
                                  bg-stone-100
                                  flex
                                  items-center
                                  justify-center
                                  shrink-0
                                "
                              >

                                <MapPin
                                  className="
                                    w-4
                                    h-4
                                    text-rose-600
                                  "
                                />

                              </div>


                              <div>

                                <h4
                                  className="
                                    font-editorial
                                    text-lg
                                    font-bold
                                    text-stone-900
                                  "
                                >
                                  {branch.name}
                                </h4>


                                <p
                                  className="
                                    text-xs
                                    text-amber-800
                                    font-semibold
                                    mt-1
                                  "
                                >
                                  {branch.floorZone}
                                </p>

                              </div>

                            </div>


                            <div
                              className={`
                                w-8
                                h-8
                                rounded-full
                                bg-stone-100
                                flex
                                items-center
                                justify-center
                                text-stone-600
                                shrink-0
                                transition-transform
                                duration-300
                                ${
                                  isBranchOpen
                                    ? 'rotate-180 bg-stone-900 text-white'
                                    : ''
                                }
                              `}
                            >

                              <ChevronDown
                                className="
                                  w-4
                                  h-4
                                "
                              />

                            </div>

                          </button>


                          {/* Branch Details */}

                          <div
                            className={`
                              grid
                              transition-[grid-template-rows,opacity]
                              duration-500
                              ease-in-out
                              ${
                                isBranchOpen
                                  ? `
                                    grid-rows-[1fr]
                                    opacity-100
                                  `
                                  : `
                                    grid-rows-[0fr]
                                    opacity-0
                                  `
                              }
                            `}
                          >

                            <div className="overflow-hidden">

                              <div
                                className="
                                  px-5
                                  pb-5
                                  pt-4
                                  border-t
                                  border-stone-100
                                  space-y-4
                                "
                              >


                                {/* Address */}

                                <div
                                  className="
                                    flex
                                    items-start
                                    gap-3
                                    text-sm
                                    text-stone-600
                                  "
                                >

                                  <MapPin
                                    className="
                                      w-4
                                      h-4
                                      text-rose-600
                                      shrink-0
                                      mt-0.5
                                    "
                                  />

                                  <div>

                                    <p
                                      className="
                                        text-[10px]
                                        uppercase
                                        tracking-wider
                                        font-bold
                                        text-stone-400
                                        mb-0.5
                                      "
                                    >
                                      Address
                                    </p>

                                    <p>
                                      {branch.address}
                                    </p>

                                  </div>

                                </div>


                                {/* Opening Hours */}

                                <div
                                  className="
                                    flex
                                    items-start
                                    gap-3
                                    text-sm
                                    text-stone-600
                                  "
                                >

                                  <Clock
                                    className="
                                      w-4
                                      h-4
                                      text-amber-700
                                      shrink-0
                                      mt-0.5
                                    "
                                  />

                                  <div>

                                    <p
                                      className="
                                        text-[10px]
                                        uppercase
                                        tracking-wider
                                        font-bold
                                        text-stone-400
                                        mb-0.5
                                      "
                                    >
                                      Opening Hours
                                    </p>

                                    <p>
                                      {branch.hours}
                                    </p>

                                  </div>

                                </div>


                                {/* Transit */}

                                <div
                                  className="
                                    flex
                                    items-start
                                    gap-3
                                    text-sm
                                    text-stone-600
                                  "
                                >

                                  <Navigation
                                    className="
                                      w-4
                                      h-4
                                      text-blue-600
                                      shrink-0
                                      mt-0.5
                                    "
                                  />

                                  <div>

                                    <p
                                      className="
                                        text-[10px]
                                        uppercase
                                        tracking-wider
                                        font-bold
                                        text-stone-400
                                        mb-0.5
                                      "
                                    >
                                      Transit & Access
                                    </p>

                                    <p>
                                      {branch.transitTip}
                                    </p>

                                  </div>

                                </div>


                                {/* Map Button */}

                                <div className="pt-1">

                                  <a
                                    href={createGoogleMapsUrl(
                                      branch.name,
                                      branch.address
                                    )}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                      inline-flex
                                      items-center
                                      gap-2
                                      px-4
                                      py-2
                                      rounded-full
                                      bg-stone-900
                                      hover:bg-amber-800
                                      text-white
                                      text-[11px]
                                      uppercase
                                      tracking-wider
                                      font-semibold
                                      transition-colors
                                    "
                                  >

                                    <span>
                                      Open in Google Maps
                                    </span>

                                    <ExternalLink
                                      className="
                                        w-3
                                        h-3
                                      "
                                    />

                                  </a>

                                </div>

                              </div>

                            </div>

                          </div>

                        </div>

                      );
                    }
                  )}

                </div>


                {/* Bottom Note */}

                <div
                  className="
                    mt-7
                    pt-6
                    border-t
                    border-stone-200
                    flex
                    flex-col
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                    gap-3
                  "
                >

                  <div>

                    <p
                      className="
                        text-xs
                        uppercase
                        tracking-widest
                        font-bold
                        text-amber-800
                      "
                    >
                      Gourmet Market
                    </p>

                    <p
                      className="
                        text-sm
                        text-stone-600
                        mt-1
                      "
                    >
                      Look for MAC&CHEESE in the
                      imported food section at participating
                      locations.
                    </p>

                  </div>


                  <div
                    className="
                      inline-flex
                      items-center
                      gap-2
                      text-xs
                      font-semibold
                      text-stone-700
                    "
                  >

                    <span
                      className="
                        w-2
                        h-2
                        rounded-full
                        bg-emerald-500
                      "
                    />

                    4 Signature Flavours

                  </div>

                </div>

              </div>

            )}

          </div>

        )}

      </div>

    </section>
  );
};