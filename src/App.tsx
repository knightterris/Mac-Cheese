import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FlavoursOverview } from './components/FlavoursOverview';
import { CookingSteps } from './components/CookingSteps';
import { FlavoursDetail } from './components/FlavoursDetail';
import { AttractionBanner } from './components/AttractionBanner';
import { RetailAnnouncement } from './components/RetailAnnouncement';
import { FaqSection } from './components/FaqSection';
import { MarketplacesSection } from './components/MarketplacesSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 selection:bg-amber-900/20 selection:text-amber-900 font-sans">
      {/* 1. Elegant banner just to navigate in one page */}
      <Navbar />

      <main>
        {/* 2. Hero: Left side big advertisement text ("Made in Italy" is necessary) + Right side circular carousel with buttons */}
        <Hero />

        {/* 3. Header four flavours -> under header show products and link them to scroll to detail section below */}
        <FlavoursOverview />

        {/* 4. Elegant text easy to cook or Everyone can cook at ease with simple steps and serve: choose -> get ready or cook -> serve */}
        <CookingSteps />

        {/* 5. Four flavours detail alternating layout:
               - Left text with 3 elegant bullets & right 4 cheese product picture
               - Left jalapenos product image & right 3 elegant bullet text
               - Left 3 elegant bullet text & right product image for tomato mozzarella
               - Left truffle and mushroom product image & right 3 elegant bullet text */}
        <FlavoursDetail />

        {/* 6. Big section with big text and elegant background for attraction */}
        <AttractionBanner />

        {/* 7. Retail announcement:
               "Your new favourite. Coming to your neighbourhood. Discover MC&CHEESE at selected Gourmet Market locations from 24 September 2026."
               + developer editable and client clickable location section with 4 places */}
        <RetailAnnouncement />

        {/* 8. Left side "before your experience" right side with multiple question and answer attached drop downs up to 6 drop downs */}
        <FaqSection />

        {/* 9. Products will be available on lazada, shopee, tiktok soon (coming soon section with 3 buttons for each product) */}
        <MarketplacesSection />
      </main>

      {/* 10. Footer section including copyright, location-thailand, company- Chob Siam Co.,Ltd */}
      <Footer />
    </div>
  );
}
