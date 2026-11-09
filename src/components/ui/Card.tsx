import React from 'react'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: 'default' | 'elevated' | 'dark' | 'outline'
  className?: string
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className = '',
  ...props
}) => {
  const baseStyles = 'rounded-2xl transition-all duration-200'

  const variantStyles = {
    default: 'bg-white border border-slate-100 shadow-xs hover:border-slate-200',
    elevated: 'bg-white border border-slate-100 shadow-md hover:shadow-lg',
    dark: 'bg-slate-950 text-white border border-slate-800 shadow-xl',
    outline: 'border border-slate-200 bg-transparent',
  }

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </div>
  )
}

export default Card

