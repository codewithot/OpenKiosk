import type { ReactNode } from 'react'

export interface NavItem {
  label: string
  href: string
}

export interface FeatureItem {
  id: string
  title: string
  description: string
  icon: ReactNode
}

export interface StepItem {
  step: string
  title: string
  description: string
}

export interface PricingPlan {
  id: string
  name: string
  price: string
  period?: string
  description: string
  isPopular?: boolean
  popularBadgeText?: string
  features: string[]
  ctaText: string
  ctaHref: string
  ctaVariant?: 'primary' | 'secondary' | 'dark' | 'outline'
}

export interface BuiltForCategory {
  name: string
}

