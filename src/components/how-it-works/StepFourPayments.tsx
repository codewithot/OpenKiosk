import React from 'react'
import { CreditCard, Truck, Globe } from 'lucide-react'
import Container from '../layout/Container.tsx'

export interface StepFourPaymentsProps {
  stepNumber?: string
  title?: string
  description?: string
}

export const StepFourPayments: React.FC<StepFourPaymentsProps> = ({
  stepNumber = 'STEP 04',
  title = 'Get ready to get paid',
  description = 'Connect a payment provider, set your shipping rules and, when you want to, bring your own domain. A checklist on your dashboard shows what is left, so nothing is missed.',
}) => {
  const checklistItems = [
    {
      icon: <CreditCard className="w-5 h-5 text-blue-600" />,
      title: 'Payments',
      description: 'Connect a provider. Money goes to your own account.',
      badgeText: 'Connected',
      badgeStyles: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
    },
    {
      icon: <Truck className="w-5 h-5 text-blue-600" />,
      title: 'Shipping',
      description: 'Set zones, rates and free-shipping rules.',
      badgeText: 'Set up',
      badgeStyles: 'bg-blue-50 text-blue-700 border-blue-200/80',
    },
    {
      icon: <Globe className="w-5 h-5 text-blue-600" />,
      title: 'Your own domain',
      description: 'Point your domain at the store. SSL is automatic.',
      badgeText: 'Optional',
      badgeStyles: 'bg-amber-50 text-amber-700 border-amber-200/80',
    },
  ]

  return (
    <section id="step-04" className="py-14 md:py-20 bg-white border-t border-slate-100">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Checklist Card Mockup */}
          <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
            <div className="w-full max-w-md bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-xs space-y-4 text-left">
              <div className="space-y-4 divide-y divide-slate-100">
                {checklistItems.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start justify-between gap-3 pt-4 first:pt-0"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50/70 flex items-center justify-center shrink-0 mt-0.5">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 tracking-tight">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border shrink-0 ${item.badgeStyles}`}
                    >
                      {item.badgeText}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Copy */}
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
          </div>
        </div>
      </Container>
    </section>
  )
}

export default StepFourPayments

