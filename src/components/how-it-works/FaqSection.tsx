import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Container from '../layout/Container.tsx'

export interface FaqItem {
  question: string
  answer: string
}

const defaultFaqs: FaqItem[] = [
  {
    question: 'Do I need any technical skills?',
    answer:
      'No. The builder works by clicking and dragging, and every setting has plain-language labels.',
  },
  {
    question: 'How long does setup take?',
    answer:
      'Most small shops with a handful of products can be ready in an afternoon. A larger catalog depends mostly on how fast you can import it.',
  },
  {
    question: 'Can I use my own domain?',
    answer:
      'Yes. Start on an OpenKiosk address and connect your own domain whenever you are ready.',
  },
  {
    question: 'Can I manage my shop from my phone?',
    answer:
      'Yes. The mobile app covers orders, products and quick store edits.',
  },
]

export const FaqSection: React.FC<{ faqs?: FaqItem[] }> = ({ faqs = defaultFaqs }) => {
  // All open by default or toggleable
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1, 2, 3])

  const toggleIndex = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index))
    } else {
      setOpenIndices([...openIndices, index])
    }
  }

  return (
    <section className="py-20 md:py-28 bg-slate-50/50 border-t border-slate-100">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 text-left">
          {/* Left Column: Heading */}
          <div className="lg:col-span-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Questions people ask first
            </h2>
          </div>

          {/* Right Column: Q&A Stack */}
          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndices.includes(index)
              return (
                <div
                  key={faq.question}
                  className="bg-white rounded-xl border border-slate-200/90 shadow-2xs overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleIndex(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 font-bold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    <span className="text-base sm:text-lg">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-blue-600' : ''
                        }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-0 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100/60 mt-1">
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FaqSection

