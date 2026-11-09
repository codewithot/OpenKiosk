import React from 'react'
import { Check } from 'lucide-react'
import Container from '../layout/Container.tsx'

export interface StepOneWorkspaceProps {
  stepNumber?: string
  title?: string
  description?: string
}

export const StepOneWorkspace: React.FC<StepOneWorkspaceProps> = ({
  stepNumber = 'STEP 01',
  title = 'Set up your store',
  description = 'Sign up with your email, name your business and choose your store address. Pick what you sell and your currency, and we set up a starting catalog structure to match.',
}) => {
  const bullets = [
    'Free to start, no card needed',
    'Your own private data space from minute one',
    'A live address like yourname.openkiosk.app',
  ]

  return (
    <section id="step-01" className="py-14 md:py-20 bg-white border-t border-slate-100">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Text & Features */}
          <div className="lg:col-span-6 text-left space-y-5">
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

          {/* Right Column: Address Form Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md bg-slate-50/70 p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-5 text-left">
              {/* Business Name Field */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  Business name
                </label>
                <div className="px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-900 shadow-2xs">
                  Kamau's Farm
                </div>
              </div>

              {/* Store Address Field */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  Your store address
                </label>
                <div className="flex items-center rounded-lg border border-slate-200 bg-white overflow-hidden shadow-2xs focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                  <div className="flex-1 px-3.5 py-2.5 text-sm font-medium text-slate-900">
                    kamaus-farm
                  </div>
                  <span className="bg-slate-50 text-slate-500 px-3 py-2.5 text-xs sm:text-sm font-mono border-l border-slate-200 select-none">
                    .openkiosk.app
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 pt-1">
                  <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                  <span>Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default StepOneWorkspace

