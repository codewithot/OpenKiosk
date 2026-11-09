import React from 'react'
import Container from '../layout/Container.tsx'

export interface BuiltForBarProps {
  label?: string
  categories?: string[]
}

const defaultNigerianCategories = [
  'Provisions & Groceries',
  'Foodstuffs & Farm Produce',
  'Fashion & Fabrics',
  'Hair, Wigs & Beauty',
  'Phones & Gadget Accessories',
  'Small Chops & Fast Food',
  'Chemist & Wellness',
  'Auto Spare Parts',
  'Home & Kitchenware',
  'Footwear & Bags',
  'Books & Stationery',
  'Digital Goods & Airtime',
]

export const BuiltForBar: React.FC<BuiltForBarProps> = ({
  label = 'Built for',
  categories = defaultNigerianCategories,
}) => {
  return (
    <div className="w-full border-y border-slate-100 py-6 sm:py-8 my-4 bg-slate-50/60">
      <Container size="lg">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 text-sm">
          <div className="flex items-center gap-2 shrink-0">
            <span className="font-semibold text-slate-400 uppercase tracking-wider text-xs">
              {label}
            </span>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-slate-300" />
          </div>

          {/* Pill tags cloud */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs sm:text-sm font-medium text-slate-700 shadow-2xs hover:border-blue-400 hover:text-blue-600 hover:shadow-xs transition-all duration-150 cursor-default select-none"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default BuiltForBar
