import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark' | 'outline' | 'ghost' | 'white' | 'dark-outline'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  href?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  href,
  leftIcon,
  rightIcon,
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-150 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer'

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2 gap-2',
    lg: 'text-base px-6 py-2.5 gap-2.5',
  }

  const variantStyles = {
    primary:
      'bg-blue-600 text-white hover:bg-blue-700 shadow-sm focus:ring-blue-500 active:bg-blue-800',
    secondary:
      'bg-slate-100 text-slate-800 hover:bg-slate-200 focus:ring-slate-400 active:bg-slate-300',
    dark:
      'bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900 active:bg-black shadow-sm',
    outline:
      'border border-slate-200 bg-white text-slate-800 hover:bg-slate-50 hover:border-slate-300 focus:ring-blue-500 shadow-xs',
    ghost:
      'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 focus:ring-slate-300',
    white:
      'bg-white text-slate-900 hover:bg-slate-100 shadow-sm focus:ring-white',
    'dark-outline':
      'border border-slate-700 bg-transparent text-slate-200 hover:text-white hover:bg-slate-800/80 hover:border-slate-500 focus:ring-slate-500 shadow-xs',
  }

  const widthStyle = fullWidth ? 'w-full' : ''
  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {leftIcon && <span className="shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </a>
    )
  }

  return (
    <button className={combinedClasses} {...props}>
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </button>
  )
}

export default Button

