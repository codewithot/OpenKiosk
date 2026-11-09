import React from 'react'
import Container from '../layout/Container.tsx'
import Button from '../ui/Button.tsx'

export interface HowItWorksCtaProps {
  title?: string
  subtitle?: string
  ctaText?: string
  ctaHref?: string
}

export const HowItWorksCta: React.FC<HowItWorksCtaProps> = ({
  title = 'Ready to open your kiosk?',
  subtitle = 'Set up your store in minutes and start selling today.',
  ctaText = 'Start your store',
  ctaHref = '#start',
}) => {
  return (
    <section className="py-14 sm:py-18 md:py-24 bg-white border-t border-slate-100">
      <Container size="lg">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-blue-600 px-6 py-10 sm:px-12 sm:py-14 md:px-16 md:py-16 text-white shadow-xl shadow-blue-600/10">
          {/* Subtle background glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-blue-500/40 blur-2xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-blue-400/20 blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 sm:gap-8 text-left">
            <div className="max-w-xl space-y-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
                {title}
              </h2>
              <p className="text-sm sm:text-base text-blue-100">
                {subtitle}
              </p>
            </div>

            <div className="shrink-0">
              <Button
                variant="white"
                size="lg"
                href={ctaHref}
                className="font-semibold text-slate-900 hover:bg-blue-50 shadow-md"
              >
                {ctaText}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HowItWorksCta

