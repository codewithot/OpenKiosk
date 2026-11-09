import React from 'react'
import Navbar from '../components/layout/Navbar.tsx'
import Footer from '../components/layout/Footer.tsx'
import Hero from '../components/landing/Hero.tsx'
import BuiltForBar from '../components/landing/BuiltForBar.tsx'
import FeaturesGrid from '../components/landing/FeaturesGrid.tsx'
import PromotionsSection from '../components/landing/PromotionsSection.tsx'
import StepsSection from '../components/landing/StepsSection.tsx'
import PricingSection from '../components/landing/PricingSection.tsx'
import CtaBanner from '../components/landing/CtaBanner.tsx'

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Built For Categories Bar */}
        <BuiltForBar />

        {/* 3. Features Section (Everything a business needs...) */}
        <FeaturesGrid />

        {/* 4. Built-in Promotions Section (Advertise your products...) */}
        <PromotionsSection />

        {/* 5. Three Steps Section (From sign-up to first order...) */}
        <StepsSection />

        {/* 5. Pricing Plans (Plans that grow with the business) */}
        <PricingSection />

        {/* 6. Call To Action Banner (Your customers are waiting...) */}
        <CtaBanner />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default LandingPage

