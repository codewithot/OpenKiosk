import React from 'react'
import Container from '../layout/Container.tsx'
import Button from '../ui/Button.tsx'
import StoreBuilderPreview from './StoreBuilderPreview.tsx'

export interface HeroProps {
  eyebrow?: string
  title?: string
  description?: string
  primaryCtaText?: string
  primaryCtaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  reassuranceText?: string
}

export const Hero: React.FC<HeroProps> = ({
  eyebrow = 'From first sale to full brand',
  title = 'Bring your kiosk online. No code, no agency.',
  description = 'Every business on OpenKiosk, from a one-person stall to a growing brand, gets its own storefront, catalog, checkout and customer data. Set it up in an afternoon, shape it visually, promote it with built-in ads, and manage it from web or phone.',
  primaryCtaText = 'Start your store',
  primaryCtaHref = '#start',
  secondaryCtaText = 'Try editor demo ⚡',
  secondaryCtaHref = '#builder',
  reassuranceText = 'No card needed to start. Bring your own domain whenever you are ready.',
}) => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center py-12 lg:py-16 xl:py-20 overflow-hidden bg-gradient-to-b from-slate-50/60 via-white to-white">
      {/* Ambient background glows for large-screen depth */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-indigo-50/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <Container size="xl" className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 xl:gap-16 items-center w-full">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-5 text-left space-y-6 sm:space-y-7 xl:space-y-8">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>{eyebrow}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] xl:leading-[1.02]">
              {title}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg xl:text-xl text-slate-600 leading-relaxed max-w-xl font-normal">
              {description}
            </p>

            {/* Buttons Group */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <Button
                variant="primary"
                size="lg"
                href={primaryCtaHref}
                className="px-7 py-3.5 text-base font-semibold shadow-md hover:shadow-lg rounded-xl transition-all"
              >
                {primaryCtaText}
              </Button>
              <Button
                variant="outline"
                size="lg"
                href={secondaryCtaHref}
                className="px-7 py-3.5 text-base font-semibold rounded-xl transition-all"
              >
                {secondaryCtaText}
              </Button>
            </div>

            {/* Reassurance Trust Microcopy */}
            <div className="space-y-2 pt-1">
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                {reassuranceText}
              </p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-slate-400">
                <span className="inline-flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  Free subdomain
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  Custom domain ready
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Store Builder Preview */}
          <div id="builder" className="lg:col-span-7 flex justify-center w-full scroll-mt-24">
            <StoreBuilderPreview />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero

