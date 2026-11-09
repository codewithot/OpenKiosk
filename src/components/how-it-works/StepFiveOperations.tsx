import React from 'react'
import Container from '../layout/Container.tsx'
import Button from '../ui/Button.tsx'

export interface StepFiveOperationsProps {
  stepNumber?: string
  title?: string
  description?: string
}

export const StepFiveOperations: React.FC<StepFiveOperationsProps> = ({
  stepNumber = 'STEP 05',
  title = 'Publish, then run it from anywhere',
  description = 'Press publish and your store is live. Manage orders, stock and customers from the web dashboard, or from the mobile app while you are out packing parcels.',
}) => {
  const chartBars = [35, 50, 45, 70, 60, 85, 100]

  return (
    <section id="step-05" className="py-14 md:py-20 bg-slate-50/50 border-t border-slate-100">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-6 text-left space-y-6">
            <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase block">
              {stepNumber}
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {title}
            </h2>

            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
              {description}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button variant="outline" size="md" href="#dashboard">
                See the dashboard
              </Button>
              <Button variant="ghost" size="md" href="#mobile">
                See the mobile app
              </Button>
            </div>
          </div>

          {/* Right Column: Live Revenue & Order Dashboard Card */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-lg bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-xs grid grid-cols-12 gap-4 text-left">
              {/* Left Side: 7-Day Revenue & Bar Chart */}
              <div className="col-span-7 flex flex-col justify-between pr-2">
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                    Revenue, 7 days
                  </span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                    ₦1,284,500
                  </div>
                </div>

                {/* Stylized Bar Chart */}
                <div className="flex items-end gap-1.5 h-16 pt-3">
                  {chartBars.map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t transition-all duration-300"
                      style={{
                        height: `${height}%`,
                        backgroundColor: i === chartBars.length - 1 ? '#2563eb' : '#93c5fd',
                        opacity: i === chartBars.length - 1 ? 1 : 0.7,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Right Side: Dark Today Orders Card */}
              <div className="col-span-5 bg-slate-950 text-white rounded-xl p-4 flex flex-col justify-between space-y-3">
                <div>
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide">
                    Today
                  </span>
                  <div className="text-lg sm:text-xl font-bold text-white tracking-tight mt-0.5">
                    ₦184,200
                  </div>
                </div>

                {/* Active packing queue badges */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between px-2.5 py-1 rounded bg-slate-800 text-[11px]">
                    <span className="font-mono text-slate-300">#1042</span>
                    <span className="text-amber-400 font-medium">To pack</span>
                  </div>
                  <div className="flex items-center justify-between px-2.5 py-1 rounded bg-slate-800 text-[11px]">
                    <span className="font-mono text-slate-300">#1043</span>
                    <span className="text-amber-400 font-medium">To pack</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default StepFiveOperations

