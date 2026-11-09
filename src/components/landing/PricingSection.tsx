import React from 'react'
import Container from '../layout/Container.tsx'
import PricingCard from './PricingCard.tsx'
import type { PricingPlan } from '../../types/landing.ts'

export interface PricingSectionProps {
  title?: string
  plans?: PricingPlan[]
}

const defaultPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$0',
    period: 'month',
    description: 'For new shops testing an idea.',
    features: [
      '1 storefront, 3 templates',
      'Up to 25 products',
      'OpenKiosk subdomain',
      'Mobile app access',
    ],
    ctaText: 'Start free',
    ctaHref: '#start',
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '$29',
    period: 'month',
    description: 'For stores with steady orders.',
    isPopular: true,
    popularBadgeText: 'Most popular',
    features: [
      'Unlimited products',
      'Custom domain and SSL',
      'Staff accounts and roles',
      'Discounts and abandoned carts',
    ],
    ctaText: 'Choose Growth',
    ctaHref: '#growth',
  },
  {
    id: 'scale',
    name: 'Scale',
    price: '$99',
    period: 'month',
    description: 'For brands with several storefronts.',
    features: [
      'Multiple storefronts',
      'API and webhooks',
      'Audit log and SSO',
      'Priority support',
    ],
    ctaText: 'Talk to sales',
    ctaHref: '#sales',
  },
]

export const PricingSection: React.FC<PricingSectionProps> = ({
  title = 'Plans that grow with the business',
  plans = defaultPlans,
}) => {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-white border-t border-slate-100 scroll-mt-20">
      <Container size="lg">
        {/* Header with Title */}
        <div className="max-w-xl mb-14 text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {title}
          </h2>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default PricingSection
