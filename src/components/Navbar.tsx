import React, { useState, useEffect } from 'react';
import { Menu, X, Building2 } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'The Collection', href: '#hero' },
    { label: 'Four Flavours', href: '#flavours' },
    { label: 'How to Cook', href: '#how-to-cook' },
    { label: 'Product Details', href: '#detail-four-cheese' },
    { label: 'Where to Buy', href: '#coming-soon' },
    { label: 'Before Your Experience', href: '#faq' },
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md shadow-xs border-b border-stone-200/80 py-3.5'
          : 'bg-[#FAF8F5]/60 backdrop-blur-xs py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Brand Logo & Italian Origin Seal */}
        <a
          href="#hero"
          className="flex items-center gap-3 group"
          id="nav-brand-logo"
        >
          <div className="flex flex-col">
            <div className="flex items-center gap-2">

              <span className="font-editorial text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 group-hover:text-amber-700 transition-colors">
                MAC&CHEESE
              </span>

              {/* Italian Badge */}
              <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] uppercase font-semibold tracking-wider bg-stone-100 text-stone-700 border border-stone-300 rounded-sm">

                <span className="w-1.5 h-2 bg-emerald-600 rounded-2xs inline-block" />

                <span className="w-1.5 h-2 bg-white border border-stone-200 rounded-2xs inline-block" />

                <span className="w-1.5 h-2 bg-rose-600 rounded-2xs inline-block" />

                <span className="ml-1">
                  Italia
                </span>

              </span>

            </div>
          </div>
        </a>


        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-7 text-xs font-medium uppercase tracking-wider text-stone-700"
          id="desktop-nav-menu"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="
                hover:text-amber-800
                transition-colors
                py-1
                relative
                after:content-['']
                after:absolute
                after:bottom-0
                after:left-0
                after:w-0
                after:h-px
                after:bg-amber-800
                hover:after:w-full
                after:transition-all
                after:duration-200
              "
            >
              {link.label}
            </a>
          ))}
        </nav>


        {/* Wholesale CTA */}
        <div className="hidden sm:flex items-center">

          <a
            href="#wholesale"
            id="nav-wholesale-cta"
            className="
              group
              inline-flex
              items-center
              gap-2
              px-5
              py-2.5
              text-xs
              font-semibold
              uppercase
              tracking-wider
              text-white
              bg-stone-900
              hover:bg-amber-800
              rounded-full
              transition-all
              duration-300
              shadow-xs
              hover:shadow-md
            "
          >
            <Building2
              className="
                w-3.5
                h-3.5
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
              "
            />

            <span>
              Wholesale
            </span>
          </a>

        </div>


        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">

          <button
            id="mobile-menu-toggle-btn"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="
              p-2
              rounded-lg
              text-stone-800
              hover:bg-stone-100
              focus:outline-hidden
            "
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

        </div>

      </div>


      {/* Mobile Drawer */}
      {mobileMenuOpen && (

        <div
          className="
            lg:hidden
            bg-[#FAF8F5]
            border-b
            border-stone-200
            px-6
            py-5
            shadow-lg
            space-y-4
            animate-in
            fade-in
            duration-200
          "
        >

          {/* Mobile Navigation Links */}
          <div className="flex flex-col space-y-3 text-sm font-medium tracking-wide text-stone-800">

            {navLinks.map((link) => (

              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="
                  py-1.5
                  border-b
                  border-stone-100
                  hover:text-amber-800
                  transition-colors
                "
              >
                {link.label}
              </a>

            ))}

          </div>


          {/* Mobile Wholesale CTA */}
          <div className="pt-2">

            <a
              href="#wholesale"
              onClick={() => setMobileMenuOpen(false)}
              className="
                group
                w-full
                flex
                items-center
                justify-center
                gap-2
                px-4
                py-3
                text-xs
                font-semibold
                uppercase
                tracking-wider
                bg-stone-900
                hover:bg-amber-800
                text-white
                rounded-full
                transition-all
                duration-300
              "
            >
              <Building2 className="w-4 h-4" />

              <span>
                Wholesale Enquiries
              </span>
            </a>

          </div>

        </div>

      )}
    </header>
  );
};