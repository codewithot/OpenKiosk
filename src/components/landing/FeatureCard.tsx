import React from 'react'

export interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  className?: string
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className = '',
}) => {
  return (
    <div
      className={`group rounded-2xl bg-white border border-slate-100 p-7 transition-all duration-200 hover:border-slate-200 hover:shadow-sm text-left flex flex-col justify-between ${className}`}
    >
      <div>
        {/* Tinted blue icon container */}
        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-100 transition-colors shrink-0">
          {icon}
        </div>

        {/* Feature Title */}
        <h3 className="text-base font-semibold text-slate-900 mb-2.5 tracking-tight">
          {title}
        </h3>

        {/* Feature Description */}
        <p className="text-sm text-slate-500 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}

export default FeatureCard

