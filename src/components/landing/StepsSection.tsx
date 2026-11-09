import React from 'react'
import Container from '../layout/Container.tsx'
import StepCard from './StepCard.tsx'
import type { StepItem } from '../../types/landing.ts'

export interface StepsSectionProps {
  title?: string
  steps?: StepItem[]
}

const defaultSteps: StepItem[] = [
  {
    step: '01',
    title: 'Set up your store',
    description:
      'Sign up, name your business and pick a starting template. Your store gets its own web address, catalog, and private customer data from the first minute.',
  },
  {
    step: '02',
    title: 'Shape it in the builder',
    description:
      'Add products, drag sections into place, set colors and fonts, connect your domain. Everything is a click away, with a live preview.',
  },
  {
    step: '03',
    title: 'Publish and sell',
    description:
      'Turn on payments and shipping, hit publish, and manage orders from the web dashboard or the mobile app.',
  },
]

export const StepsSection: React.FC<StepsSectionProps> = ({
  title = 'From sign-up to first order in three steps',
  steps = defaultSteps,
}) => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white border-t border-slate-100">
      <Container size="lg">
        {/* Section Title */}
        <div className="max-w-xl mb-16 text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {title}
          </h2>
        </div>

        {/* 3 Step Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12">
          {steps.map((item, index) => (
            <StepCard
              key={item.step}
              step={item.step}
              title={item.title}
              description={item.description}
              isActive={index === 0}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default StepsSection

