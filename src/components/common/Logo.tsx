import React from 'react'

export interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  className?: string
  href?: string
}

export const LogoIcon: React.FC<{ size?: 'sm' | 'md' | 'lg'; className?: string }> = ({
  size = 'md',
  className = '',
}) => {
  const sizeMap = {
    sm: 'w-7 h-7 rounded-lg',
    md: 'w-8 h-8 rounded-lg',
    lg: 'w-10 h-10 rounded-xl',
  }

  const iconSizeMap = {
    sm: 'w-4 h-4',
    md: 'w-4.5 h-4.5',
    lg: 'w-5.5 h-5.5',
  }

  return (
    <div
      className={`bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-sm ${sizeMap[size]} ${className}`}
      aria-hidden="true"
    >
      <svg
        className={iconSizeMap[size]}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
        <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
        <path d="M2 7h20" />
        <path d="M22 7v3a2 2 0 0 1-2 2 2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7" />
      </svg>
    </div>
  )
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
  href = '/',
}) => {
  const textSizeMap = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
  }

  const content = (
    <div className={`inline-flex items-center gap-2.5 font-bold tracking-tight text-slate-900 select-none ${className}`}>
      <LogoIcon size={size} />
      {showText && (
        <span className={`${textSizeMap[size]} leading-none font-semibold text-slate-900`}>
          OpenKiosk
        </span>
      )}
    </div>
  )

  if (href) {
    return (
      <a href={href} className="group inline-flex items-center transition-opacity hover:opacity-95">
        {content}
      </a>
    )
  }

  return content
}

export default Logo

