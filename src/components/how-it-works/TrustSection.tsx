import React from 'react'
import Container from '../layout/Container.tsx'

export interface TrustItem {
  title: string
  description: string
}

const defaultTrustItems: TrustItem[] = [
  {
    title: 'Your data stays yours',
    description:
      'Each business is completely private. Products, customers and orders are never mixed with another store.',
  },
  {
    title: 'Drafts before live',
    description:
      'Experiment freely. Nothing reaches your customers until you publish, and you can roll back to an earlier version.',
  },
  {
    title: 'Grows with you',
    description:
      'Start with one stall. Add staff, a custom domain and more storefronts as the business grows, on the same account.',
  },
]

export const TrustSection: React.FC<{ items?: TrustItem[] }> = ({
  items = defaultTrustItems,
}) => {
  return (
    <section className="py-20 md:py-24 bg-white border-t border-slate-100">
      <Container size="lg">
        <div className="max-w-xl text-left mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            What you can count on underneath
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-left">
          {items.map((item) => (
            <div key={item.title} className="space-y-3">
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default TrustSection

