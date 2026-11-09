import React from 'react'
import {
  Layers,
  Palette,
  Calendar,
  BarChart3,
} from 'lucide-react'
import Container from '../layout/Container.tsx'
import Button from '../ui/Button.tsx'

export interface PromotionsSectionProps {
  id?: string
}

export const PromotionsSection: React.FC<PromotionsSectionProps> = ({
  id = 'promotions',
}) => {
  const promotionFeatures = [
    {
      title: 'Drop-in ad slots',
      description:
        'Place a banner in your announcement bar, hero, between product rows or at checkout. Choose a slot, add your image and link, and it is live in your preview.',
      icon: <Layers className="w-5 h-5 text-amber-400" />,
    },
    {
      title: 'Ready-made ad templates',
      description:
        'Start from layouts for sales, new arrivals and bundles. They pick up your brand colours and fonts automatically, so every ad looks like you.',
      icon: <Palette className="w-5 h-5 text-amber-400" />,
    },
    {
      title: 'Schedule campaigns',
      description:
        'Set a start and end date and your Friday sale switches on and off by itself. Line up the whole season in one sitting.',
      icon: <Calendar className="w-5 h-5 text-amber-400" />,
    },
    {
      title: 'See what works',
      description:
        'Views, clicks and orders for every campaign, on your dashboard and in the mobile app, so you spend your effort on what sells.',
      icon: <BarChart3 className="w-5 h-5 text-amber-400" />,
    },
  ]

  return (
    <section id={id} className="py-20 md:py-28 bg-slate-950 text-white scroll-mt-20 overflow-hidden">
      <Container size="lg">
        {/* Section Top Eyebrow & Title */}
        <div className="max-w-3xl text-left space-y-4 mb-14">
          <div className="inline-block">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-400 text-slate-950 shadow-2xs">
              Built-in promotions
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Advertise your products right on your own storefront
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
            Your landing page is your busiest shop window. OpenKiosk turns it into your best ad space, so you can promote a sale, a launch or a bundle in a few clicks, with no designer, no extra tools and no ad agency.
          </p>
        </div>

        {/* 2-Column Grid: 4 Feature Points on Left, Store Preview Mockup on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: 4 Feature Items & CTAs */}
          <div className="lg:col-span-5 text-left space-y-8">
            <div className="space-y-6">
              {promotionFeatures.map((feat) => (
                <div key={feat.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                    {feat.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                variant="primary"
                size="md"
                href="#start"
              >
                Start promoting free
              </Button>
              <Button
                variant="dark-outline"
                size="md"
                href="#builder"
              >
                See ad slots in the builder
              </Button>
            </div>
          </div>

          {/* Right Column: Storefront Ad Slots Mockup */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-lg bg-white rounded-2xl border border-slate-200/90 shadow-2xl overflow-hidden text-left relative">
              {/* Browser Window Bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border-b border-slate-200/80">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <span className="text-[11px] font-mono text-slate-500 mx-auto">
                  northwind-roasters.openkiosk.app
                </span>
              </div>

              {/* 1. Announcement Bar Ad Slot */}
              <div className="bg-amber-500/10 border-b border-dashed border-amber-500/40 px-3 py-1.5 text-center">
                <span className="text-[11px] font-semibold text-amber-900 tracking-tight">
                  Holiday sale: 20% off all beans, this week only
                </span>
              </div>

              {/* Storefront Body */}
              <div className="p-4 sm:p-5 space-y-4 bg-slate-50/30">
                {/* Store Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                  <span className="text-xs font-bold text-slate-900 tracking-tight">
                    Northwind Roasters
                  </span>
                  <span className="text-[10px] text-slate-400 space-x-1.5 flex items-center">
                    <span>Shop</span>
                    <span>·</span>
                    <span>Story</span>
                    <span>·</span>
                    <span>🛒 (0)</span>
                  </span>
                </div>

                {/* 2. Hero Ad Slot */}
                <div className="relative rounded-xl border-2 border-dashed border-blue-400/80 p-0.5">
                  <div className="absolute -top-2.5 left-3 bg-blue-600 text-white text-[9px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-2xs">
                    Ad slot · Hero
                  </div>

                  <div className="bg-slate-950 text-white rounded-lg p-4 sm:p-5 mt-1">
                    <span className="text-[10px] font-bold text-amber-400 tracking-wider uppercase block mb-1">
                      New Arrival
                    </span>
                    <h4 className="text-sm sm:text-base font-extrabold text-white leading-tight max-w-[220px]">
                      Single-origin Ethiopia, now in stock
                    </h4>
                    <button
                      type="button"
                      className="mt-3 text-[10px] font-bold px-3 py-1 rounded bg-amber-400 text-slate-950 shadow-2xs cursor-pointer"
                    >
                      Shop the roast
                    </button>
                  </div>
                </div>

                {/* 3. Product Grid with Featured Ad Slot */}
                <div className="grid grid-cols-3 gap-2.5 pt-1">
                  {/* Regular Product 1 */}
                  <div className="bg-white p-2 rounded-lg border border-slate-200/80 space-y-1">
                    <div className="bg-amber-100/70 rounded aspect-square flex items-center justify-center text-xs">
                      ☕
                    </div>
                    <p className="text-[10px] font-semibold text-slate-800 truncate">
                      Ethiopia Natural
                    </p>
                    <p className="text-[9px] text-slate-400 font-mono">[PRICE]</p>
                  </div>

                  {/* Regular Product 2 */}
                  <div className="bg-white p-2 rounded-lg border border-slate-200/80 space-y-1">
                    <div className="bg-emerald-100/70 rounded aspect-square flex items-center justify-center text-xs">
                      🌿
                    </div>
                    <p className="text-[10px] font-semibold text-slate-800 truncate">
                      House Blend
                    </p>
                    <p className="text-[9px] text-slate-400 font-mono">[PRICE]</p>
                  </div>

                  {/* Ad Slot Product 3 */}
                  <div className="relative rounded-lg border-2 border-dashed border-blue-400/80 p-0.5 bg-blue-50/20">
                    <div className="absolute -top-2 left-1.5 bg-blue-600 text-white text-[8px] font-semibold px-1.5 py-0.2 rounded-full uppercase tracking-wider">
                      Ad slot · Featured
                    </div>
                    <div className="bg-white p-2 rounded border border-slate-200/80 space-y-1 mt-1">
                      <div className="bg-purple-100/70 rounded aspect-square flex items-center justify-center text-xs">
                        ❄️
                      </div>
                      <p className="text-[10px] font-semibold text-slate-800 truncate">
                        Cold brew kit
                      </p>
                      <p className="text-[9px] text-blue-600 font-medium truncate">
                        Featured · [PRICE]
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Campaign Performance Overlay Card */}
              <div className="p-3 sm:p-4 bg-white border-t border-slate-100 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-900">
                      Holiday sale campaign
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Live
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400">
                    Starts 1 Dec · Ends 24 Dec · 3 slots
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 pt-1 border-t border-slate-100">
                  <div>
                    <span className="text-base font-extrabold text-slate-900">4,820</span>
                    <p className="text-[10px] font-medium text-slate-500">Views</p>
                  </div>
                  <div>
                    <span className="text-base font-extrabold text-slate-900">312</span>
                    <p className="text-[10px] font-medium text-slate-500">Clicks</p>
                  </div>
                  <div>
                    <span className="text-base font-extrabold text-slate-900">41</span>
                    <p className="text-[10px] font-medium text-slate-500">Orders</p>
                  </div>
                </div>

                <div className="text-right mt-1">
                  <span className="text-[9px] text-slate-400 italic">Sample data</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default PromotionsSection

