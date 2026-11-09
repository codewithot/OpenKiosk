import React from 'react'
import { Check, Plus, FileSpreadsheet } from 'lucide-react'
import Container from '../layout/Container.tsx'
import Button from '../ui/Button.tsx'

export interface StepTwoCatalogProps {
  stepNumber?: string
  title?: string
  description?: string
}

export const StepTwoCatalog: React.FC<StepTwoCatalogProps> = ({
  stepNumber = 'STEP 02',
  title = 'Add what you sell',
  description = 'Add products one by one with photos, prices and variants, or import a whole spreadsheet at once. Group items into collections and track stock so you never oversell.',
}) => {
  const bullets = [
    'Variants such as size, grind or colour',
    'Low-stock alerts on your dashboard',
    'Add products from your phone too',
  ]

  const sampleProducts = [
    {
      name: 'Ethiopia Natural 250g',
      price: '[PRICE]',
      bgColor: 'bg-amber-100 text-amber-700',
      iconText: '☕',
    },
    {
      name: 'House Blend 1kg',
      price: '[PRICE]',
      bgColor: 'bg-emerald-100 text-emerald-700',
      iconText: '🌿',
    },
    {
      name: 'Cold brew kit',
      price: '[PRICE]',
      bgColor: 'bg-purple-100 text-purple-700',
      iconText: '❄️',
    },
  ]

  return (
    <section id="step-02" className="py-14 md:py-20 bg-slate-50/50 border-t border-slate-100">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Product List Mockup */}
          <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
            <div className="w-full max-w-md bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-xs space-y-4 text-left">
              <div className="space-y-2.5 divide-y divide-slate-100">
                {sampleProducts.map((p) => (
                  <div key={p.name} className="flex items-center justify-between pt-2.5 first:pt-0">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${p.bgColor}`}
                      >
                        <span className="text-sm">{p.iconText}</span>
                      </div>
                      <span className="text-sm font-semibold text-slate-800 tracking-tight">
                        {p.name}
                      </span>
                    </div>
                    <span className="text-xs font-mono font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded">
                      {p.price}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-2.5">
                <Button variant="primary" size="sm" leftIcon={<Plus className="w-3.5 h-3.5" />}>
                  Add product
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  leftIcon={<FileSpreadsheet className="w-3.5 h-3.5 text-slate-500" />}
                >
                  Import from spreadsheet
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Checklist */}
          <div className="lg:col-span-6 text-left space-y-5 order-1 lg:order-2">
            <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase block">
              {stepNumber}
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {title}
            </h2>

            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
              {description}
            </p>

            <ul className="space-y-3 pt-2">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-3 text-sm text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default StepTwoCatalog

