import React from 'react'
import Container from './Container.tsx'

export interface SectionProps {
  id?: string
  children: React.ReactNode
  className?: string
  containerClassName?: string
  size?: 'sm' | 'md' | 'lg' | 'full'
}

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  className = 'py-16 sm:py-24',
  containerClassName = '',
  size = 'lg',
}) => {
  return (
    <section id={id} className={`w-full ${className}`}>
      <Container size={size} className={containerClassName}>
        {children}
      </Container>
    </section>
  )
}

export default Section

