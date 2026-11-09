import React, { useEffect } from 'react'
import Navbar from '../components/layout/Navbar.tsx'
import Footer from '../components/layout/Footer.tsx'
import HowItWorksHero from '../components/how-it-works/HowItWorksHero.tsx'
import StepOneWorkspace from '../components/how-it-works/StepOneWorkspace.tsx'
import StepTwoCatalog from '../components/how-it-works/StepTwoCatalog.tsx'
import StepThreeVisualBuilder from '../components/how-it-works/StepThreeVisualBuilder.tsx'
import StepFourPayments from '../components/how-it-works/StepFourPayments.tsx'
import StepFiveOperations from '../components/how-it-works/StepFiveOperations.tsx'
import TrustSection from '../components/how-it-works/TrustSection.tsx'
import FaqSection from '../components/how-it-works/FaqSection.tsx'
import HowItWorksCta from '../components/how-it-works/HowItWorksCta.tsx'

export const HowItWorksPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      {/* Existing Header / Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero */}
        <HowItWorksHero />

        {/* Step 01: Store Setup */}
        <StepOneWorkspace />

        {/* Step 02: Catalog & Inventory */}
        <StepTwoCatalog />

        {/* Step 03: Visual Storefront Builder */}
        <StepThreeVisualBuilder />

        {/* Step 04: Payments & Shipping */}
        <StepFourPayments />

        {/* Step 05: Operations, Orders & Revenue */}
        <StepFiveOperations />

        {/* Trust & Underpinnings */}
        <TrustSection />

        {/* FAQ Accordion */}
        <FaqSection />

        {/* Bottom CTA Banner */}
        <HowItWorksCta />
      </main>

      {/* Existing Footer */}
      <Footer />
    </div>
  )
}

export default HowItWorksPage

