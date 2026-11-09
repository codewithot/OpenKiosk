import React from 'react'
import {
  LayoutTemplate,
  Box,
  CreditCard,
  Globe,
  Users,
  Shield,
} from 'lucide-react'
import Container from '../layout/Container.tsx'
import FeatureCard from './FeatureCard.tsx'
import type { FeatureItem } from '../../types/landing.ts'

export interface FeaturesGridProps {
  title?: string
  subtitle?: string
  features?: FeatureItem[]
}

const defaultFeatures: FeatureItem[] = [
  {
    id: 'store-builder',
    title: 'Visual store builder',
    description:
      'Arrange sections, pick colors and fonts, and preview on desktop and phone before you publish. No code required.',
    icon: <LayoutTemplate className="w-5 h-5" />,
  },
  {
    id: 'catalog-inventory',
    title: 'Catalog and inventory',
    description:
      'Products, variants, collections and stock levels in one place. Import from a spreadsheet or add items one by one.',
    icon: <Box className="w-5 h-5" />,
  },
  {
    id: 'checkout-payments',
    title: 'Checkout and payments',
    description:
      'Connect the payment providers your customers already trust, set shipping rules and taxes, and get paid to your own account.',
    icon: <CreditCard className="w-5 h-5" />,
  },
  {
    id: 'custom-domain',
    title: 'Your own domain',
    description:
      'Start on an OpenKiosk address, then point your own domain at the store with guided DNS setup and automatic SSL.',
    icon: <Globe className="w-5 h-5" />,
  },
  {
    id: 'team-roles',
    title: 'Team roles and permissions',
    description:
      'Invite staff as owners, managers or fulfilment-only members, and control who can edit the store or see revenue.',
    icon: <Users className="w-5 h-5" />,
  },
  {
    id: 'isolated-tenancy',
    title: 'Isolated by design',
    description:
      'Each business is completely private. Catalogs, customers, and orders never mix between stores.',
    icon: <Shield className="w-5 h-5" />,
  },
]

export const FeaturesGrid: React.FC<FeaturesGridProps> = ({
  title = 'Everything a business needs to open its doors online',
  subtitle = 'Every store is completely yours. Customize your shop your way, while OpenKiosk handles all the tech behind the scenes.',
  features = defaultFeatures,
}) => {
  return (
    <section id="features" className="py-20 md:py-28 bg-white scroll-mt-20">
      <Container size="lg">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* 6-Card Grid (3 columns on md/lg, 2 on sm, 1 on xs) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default FeaturesGrid

