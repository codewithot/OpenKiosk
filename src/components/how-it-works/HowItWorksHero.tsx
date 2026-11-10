import React from 'react'
import Container from '../layout/Container.tsx'
import Button from '../ui/Button.tsx'
import MobileCustomerListPhone from './MobileCustomerListPhone.tsx'

export interface HowItWorksHeroProps {
  eyebrow?: string
  title?: string
  description?: string
  primaryCtaText?: string
  primaryCtaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
}

export const HowItWorksHero: React.FC<HowItWorksHeroProps> = ({
  eyebrow = 'How it works',
  title = 'From first sale to full brand, in five steps',
  description = 'You do not need a developer or a designer. Everything happens in the browser or the mobile app, and you can change any step later without starting over.',
  primaryCtaText = 'Start your store',
  primaryCtaHref = '#start',
  secondaryCtaText = 'See the builder',
  secondaryCtaHref = '#step-03',
}) => {
  return (
    <section className="pt-12 pb-14 md:pt-16 md:pb-20 bg-gradient-to-b from-slate-50/50 via-white to-white overflow-hidden">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Eyebrow */}
            <div className="inline-block">
              <span className="text-xs sm:text-sm font-semibold text-blue-600 tracking-normal">
                {eyebrow}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-5.5xl font-extrabold text-slate-900 tracking-tight leading-[1.08]">
              {title}
            </h1>

            {/* Subtitle / Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              {description}
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button variant="primary" size="lg" href={primaryCtaHref}>
                {primaryCtaText}
              </Button>
              <Button variant="outline" size="lg" href={secondaryCtaHref}>
                {secondaryCtaText}
              </Button>
            </div>
          </div>

          {/* Right Column: Phone Mockup with Obinna's Customer List */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <MobileCustomerListPhone />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HowItWorksHero
