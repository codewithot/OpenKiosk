import React from 'react'

export interface BadgeProps {
  children: React.ReactNode
  variant?: 'blue' | 'amber' | 'slate' | 'outline' | 'neutral'
  size?: 'sm' | 'md'
  className?: string
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'md',
  className = '',
}) => {
  const baseStyles = 'inline-flex items-center font-medium rounded-full'

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5',
    md: 'text-xs px-3 py-1',
  }

  const variantStyles = {
    blue: 'bg-blue-50 text-blue-700 border border-blue-200/60',
    amber: 'bg-amber-100 text-amber-900 font-semibold',
    slate: 'bg-slate-100 text-slate-800',
    neutral: 'bg-slate-100/80 text-slate-700 hover:bg-slate-100 transition-colors',
    outline: 'border border-slate-200 text-slate-700 bg-white',
  }

  return (
    <span className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  )
}

export default Badge

