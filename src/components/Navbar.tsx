import React, { useEffect, useState } from 'react';
import { Menu, X, Building2 } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent page scrolling while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'The Collection', href: '#hero' },
    { label: 'Four Flavours', href: '#flavours' },
    { label: 'How to Cook', href: '#how-to-cook' },
    { label: 'Product Details', href: '#detail-four-cheese' },
    { label: 'Where to Buy', href: '#coming-soon' },
    { label: 'Before Your Experience', href: '#faq' },
  ];

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navigation"
      className={`
        fixed
        top-0
        left-0
        right-0
        z-50
        transition-all
        duration-300
        ${
          scrolled
            ? `
              bg-[#FAF8F5]/95
              backdrop-blur-xl
              border-b
              border-stone-200/80
              shadow-sm
              py-3
            `
            : `
              bg-[#FAF8F5]/90
              backdrop-blur-md
              py-4
              sm:py-5
            `
        }
      `}
    >
      <div
        className="
          max-w-[1440px]
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          xl:px-10
          flex
          items-center
          justify-between
          gap-4
        "
      >
        {/* =====================================================
            BRAND
        ===================================================== */}
        <a
          href="#hero"
          onClick={closeMobileMenu}
          id="nav-brand-logo"
          aria-label="MAC&CHEESE — Back to top"
          className="
            group
            flex
            items-center
            shrink-0
          "
        >
          <div
            className="
              font-editorial
              font-bold
              tracking-[-0.035em]
              leading-none
              whitespace-nowrap
              text-[1.65rem]
              sm:text-[1.9rem]
              md:text-[2rem]
              xl:text-[2.1rem]
              transition-transform
              duration-300
              group-hover:scale-[1.015]
            "
          >
            {/* Italian-inspired wordmark */}
            <span className="text-[#008C45] transition-colors duration-300">
              MAC
            </span>

            <span className="text-stone-900 mx-[1px]">
              &
            </span>

            <span className="text-[#CD212A] transition-colors duration-300">
              CHEESE
            </span>
          </div>
        </a>

        {/* =====================================================
            DESKTOP NAVIGATION

            xl breakpoint prevents links becoming crowded on
            tablets and smaller laptops.
        ===================================================== */}
        <nav
          id="desktop-nav-menu"
          aria-label="Main navigation"
          className="
            hidden
            xl:flex
            items-center
            justify-center
            gap-4
            2xl:gap-7
            flex-1
            text-[10px]
            2xl:text-xs
            font-medium
            uppercase
            tracking-[0.08em]
            2xl:tracking-wider
            text-stone-700
          "
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="
                relative
                whitespace-nowrap
                py-2
                transition-colors
                duration-200
                hover:text-amber-800

                after:content-['']
                after:absolute
                after:left-0
                after:bottom-0
                after:w-0
                after:h-px
                after:bg-amber-800
                after:transition-all
                after:duration-300

                hover:after:w-full
              "
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* =====================================================
            DESKTOP WHOLESALE BUTTON
        ===================================================== */}
        <div className="hidden xl:flex items-center shrink-0">
          <a
            href="#wholesale"
            id="nav-wholesale-cta"
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-2
              px-4
              2xl:px-5
              py-2.5
              text-[10px]
              2xl:text-xs
              font-semibold
              uppercase
              tracking-wider
              whitespace-nowrap
              text-white
              bg-stone-900
              hover:bg-amber-800
              rounded-full
              transition-all
              duration-300
              shadow-sm
              hover:shadow-md
              hover:-translate-y-px
            "
          >
            <Building2
              className="
                w-3.5
                h-3.5
                shrink-0
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
              "
            />

            <span>Wholesale</span>
          </a>
        </div>

        {/* =====================================================
            TABLET / MOBILE MENU BUTTON
        ===================================================== */}
        <div className="xl:hidden flex items-center shrink-0">
          <button
            id="mobile-menu-toggle-btn"
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="
              w-10
              h-10
              sm:w-11
              sm:h-11
              flex
              items-center
              justify-center
              rounded-full
              text-stone-800
              border
              border-stone-200
              bg-white/70
              hover:bg-stone-100
              hover:border-stone-300
              transition-all
              duration-200
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-amber-700
              focus-visible:ring-offset-2
            "
            aria-label={
              mobileMenuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
            ) : (
              <Menu className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
            )}
          </button>
        </div>
      </div>

      {/* =======================================================
          MOBILE / TABLET DRAWER
      ======================================================= */}
      <div
        id="mobile-navigation"
        className={`
          xl:hidden
          absolute
          top-full
          left-0
          right-0
          overflow-hidden
          transition-all
          duration-300
          ease-out
          ${
            mobileMenuOpen
              ? 'max-h-[calc(100vh-70px)] opacity-100 visible'
              : 'max-h-0 opacity-0 invisible'
          }
        `}
      >
        <div
          className="
            bg-[#FAF8F5]/98
            backdrop-blur-xl
            border-t
            border-b
            border-stone-200
            shadow-xl
          "
        >
          <div
            className="
              max-w-7xl
              mx-auto
              px-5
              sm:px-8
              py-6
              sm:py-8
              max-h-[calc(100vh-80px)]
              overflow-y-auto
            "
          >
            {/* Mobile navigation links */}
            <nav
              aria-label="Mobile navigation"
              className="
                flex
                flex-col
              "
            >
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    gap-4
                    py-4
                    border-b
                    border-stone-200/80
                    text-stone-800
                    hover:text-amber-800
                    transition-colors
                    duration-200
                  "
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="
                        font-editorial
                        text-sm
                        text-stone-400
                        group-hover:text-amber-700
                        transition-colors
                      "
                    >
                      0{index + 1}
                    </span>

                    <span
                      className="
                        text-sm
                        sm:text-base
                        font-medium
                        tracking-wide
                      "
                    >
                      {link.label}
                    </span>
                  </div>

                  <span
                    className="
                      text-stone-300
                      group-hover:text-amber-700
                      group-hover:translate-x-1
                      transition-all
                      duration-200
                    "
                  >
                    →
                  </span>
                </a>
              ))}
            </nav>

            {/* Mobile Wholesale CTA */}
            <div className="pt-6">
              <a
                href="#wholesale"
                onClick={closeMobileMenu}
                className="
                  group
                  w-full
                  flex
                  items-center
                  justify-center
                  gap-2.5
                  px-5
                  py-3.5
                  text-xs
                  sm:text-sm
                  font-semibold
                  uppercase
                  tracking-wider
                  bg-stone-900
                  hover:bg-amber-800
                  text-white
                  rounded-full
                  transition-all
                  duration-300
                  shadow-sm
                "
              >
                <Building2
                  className="
                    w-4
                    h-4
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                  "
                />

                <span>Wholesale Enquiries</span>
              </a>
            </div>

            {/* Italian origin detail */}
            <div
              className="
                mt-6
                flex
                items-center
                justify-center
                gap-2
                text-[10px]
                sm:text-[11px]
                uppercase
                tracking-[0.18em]
                text-stone-400
              "
            >
              <span className="w-4 h-px bg-[#008C45]" />

              <span>Authentic Italian Mac & Cheese</span>

              <span className="w-4 h-px bg-[#CD212A]" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};