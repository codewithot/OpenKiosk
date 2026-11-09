import React from 'react'
import { Check } from 'lucide-react'
import Container from '../layout/Container.tsx'

export interface StepThreeVisualBuilderProps {
  stepNumber?: string
  title?: string
  description?: string
  ctaText?: string
  ctaHref?: string
}

export const StepThreeVisualBuilder: React.FC<StepThreeVisualBuilderProps> = ({
  stepNumber = 'STEP 03',
  title = 'Shape your storefront visually',
  description = 'Start from a template, then drag sections into place, set your colours and fonts, and write your own words. You see every change as you make it, on desktop and on a phone.',
  ctaText = 'Open the builder',
  ctaHref = '#builder',
}) => {
  const bullets = [
    'Drag-and-drop sections, no code',
    'Saved as a draft until you publish',
    'Your brand, not ours, on every page',
  ]

  return (
    <section id="step-03" className="py-16 md:py-24 bg-slate-950 text-white overflow-hidden">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Copy & Checklist */}
          <div className="lg:col-span-5 text-left space-y-6">
            <span className="text-xs font-semibold text-blue-400 tracking-wider uppercase block">
              {stepNumber}
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-4.5xl font-extrabold text-white tracking-tight leading-tight">
              {title}
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              {description}
            </p>

            <ul className="space-y-3 pt-1">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-3 text-sm text-slate-200">
                  <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <a
                href={ctaHref}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-amber-400 text-slate-950 font-bold text-sm hover:bg-amber-300 transition-colors shadow-sm"
              >
                {ctaText}
              </a>
            </div>
          </div>

          {/* Right Column: Mini Builder Mockup */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden text-left">
              {/* Window Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-950 border-b border-slate-800">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <span className="text-[11px] font-mono text-slate-500 ml-2">editor · northwind</span>
              </div>

              {/* Builder Body: Sections Tree + Canvas Preview */}
              <div className="grid grid-cols-12 min-h-[300px]">
                {/* Left Sections Sidebar */}
                <div className="col-span-4 border-r border-slate-800 p-3 sm:p-4 bg-slate-900/60 space-y-3">
                  <p className="text-[10px] font-semibold text-slate-500 tracking-wider uppercase">
                    Sections
                  </p>
                  <div className="space-y-1">
                    <div className="px-2.5 py-1.5 rounded bg-blue-950/60 text-blue-300 text-xs font-semibold border border-blue-800/50">
                      Hero banner
                    </div>
                    <div className="px-2.5 py-1.5 rounded text-slate-400 text-xs hover:bg-slate-800/50">
                      Featured
                    </div>
                    <div className="px-2.5 py-1.5 rounded text-slate-400 text-xs hover:bg-slate-800/50">
                      Our story
                    </div>
                  </div>
                  <div className="pt-2">
                    <span className="block w-full py-1.5 text-center text-[10px] font-medium text-slate-500 border border-dashed border-slate-700 rounded hover:text-slate-400 cursor-pointer">
                      + Add section
                    </span>
                  </div>
                </div>

                {/* Right Canvas Area */}
                <div className="col-span-8 p-3 sm:p-4 bg-slate-950/40 flex flex-col justify-between">
                  <div className="bg-slate-900 rounded-xl border border-slate-800 p-3 space-y-3">
                    {/* Coffee Store Hero Card */}
                    <div className="bg-slate-950 rounded-lg p-3.5 border border-slate-800/80">
                      <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                        Small-batch coffee, roasted weekly
                      </h4>
                      <p className="text-[10px] text-slate-400 mt-1">
                        Fresh beans delivered across the country.
                      </p>
                      <button
                        type="button"
                        className="mt-2.5 text-[10px] font-bold px-2.5 py-1 rounded bg-amber-400 text-slate-950 shadow-2xs"
                      >
                        Shop beans
                      </button>
                    </div>

                    {/* Product Cards Row */}
                    <div className="grid grid-cols-3 gap-2 pt-1">
                      <div className="space-y-1">
                        <div className="bg-amber-900/30 border border-amber-800/30 rounded aspect-square flex items-center justify-center text-xs">
                          ☕
                        </div>
                        <p className="text-[9px] text-slate-300 truncate">Ethiopia</p>
                      </div>
                      <div className="space-y-1">
                        <div className="bg-emerald-900/30 border border-emerald-800/30 rounded aspect-square flex items-center justify-center text-xs">
                          🌿
                        </div>
                        <p className="text-[9px] text-slate-300 truncate">House Blend</p>
                      </div>
                      <div className="space-y-1">
                        <div className="bg-purple-900/30 border border-purple-800/30 rounded aspect-square flex items-center justify-center text-xs">
                          ❄️
                        </div>
                        <p className="text-[9px] text-slate-300 truncate">Cold brew</p>
                      </div>
                    </div>
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

export default StepThreeVisualBuilder

