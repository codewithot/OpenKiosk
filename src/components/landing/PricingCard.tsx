import React from 'react'
import { Check } from 'lucide-react'
import Button from '../ui/Button.tsx'
import type { PricingPlan } from '../../types/landing.ts'

export interface PricingCardProps {
  plan: PricingPlan
  className?: string
}

export const PricingCard: React.FC<PricingCardProps> = ({ plan, className = '' }) => {
  const isDark = plan.isPopular

  return (
    <div
      className={`relative rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 text-left ${
        isDark
          ? 'bg-slate-950 text-white shadow-xl ring-1 ring-slate-800'
          : 'bg-white text-slate-900 border border-slate-200/90 shadow-2xs hover:border-slate-300'
      } ${className}`}
    >
      <div>
        {/* Top Header & Popular Badge */}
        <div className="flex items-center justify-between mb-4">
          <h3 className={`text-lg font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {plan.name}
          </h3>
          {plan.isPopular && (
            <span className="text-[11px] font-semibold bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded-full shadow-2xs">
              {plan.popularBadgeText || 'Most popular'}
            </span>
          )}
        </div>

        {/* Pricing Amount */}
        <div className="flex items-baseline gap-1.5 mb-2">
          <span className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {plan.price}
          </span>
          {plan.period && (
            <span className={`text-xs sm:text-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              / {plan.period}
            </span>
          )}
        </div>

        {/* Plan Description */}
        <p className={`text-xs sm:text-sm mb-6 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          {plan.description}
        </p>

        {/* Divider */}
        <div className={`h-px w-full mb-6 ${isDark ? 'bg-slate-800' : 'bg-slate-100'}`} />

        {/* Features Checklist */}
        <ul className="space-y-3 mb-8">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm">
              <Check
                className={`w-4 h-4 mt-0.5 shrink-0 ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                }`}
                strokeWidth={2.5}
              />
              <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action CTA Button */}
      <div>
        <Button
          variant={isDark ? 'primary' : 'outline'}
          size="md"
          fullWidth
          href={plan.ctaHref}
          className={
            isDark
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'border-slate-300 text-slate-800 hover:bg-slate-50'
          }
        >
          {plan.ctaText}
        </Button>
      </div>
    </div>
  )
}

export default PricingCard

