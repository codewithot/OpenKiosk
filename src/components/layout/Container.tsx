import React from 'react'

export interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'lg',
}) => {
  const sizeStyles = {
    sm: 'max-w-4xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-[1440px]',
    full: 'max-w-full',
  }

  return (
    <div className={`mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-12 ${sizeStyles[size]} ${className}`}>
      {children}
    </div>
  )
}

export default Container

