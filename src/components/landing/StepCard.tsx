import React from 'react'

export interface StepCardProps {
  step: string
  title: string
  description: string
  isActive?: boolean
  className?: string
}

export const StepCard: React.FC<StepCardProps> = ({
  step,
  title,
  description,
  isActive = false,
  className = '',
}) => {
  return (
    <div className={`relative pt-6 text-left ${className}`}>
      {/* Top indicator bar */}
      <div
        className={`absolute top-0 left-0 right-0 h-0.5 rounded-full ${
          isActive ? 'bg-blue-600' : 'bg-slate-200'
        }`}
      />

      {/* Step Number */}
      <div className="text-xs sm:text-sm font-semibold text-blue-600 mb-4 tracking-wider">
        {step}
      </div>

      {/* Step Title */}
      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2.5 tracking-tight">
        {title}
      </h3>

      {/* Step Description */}
      <p className="text-sm text-slate-500 leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export default StepCard

