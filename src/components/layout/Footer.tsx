import React from 'react'
import Container from './Container.tsx'

export interface FooterProps {
  brandText?: string
  links?: { label: string; href: string }[]
}

const defaultLinks = [
  { label: 'Terms', href: '#terms' },
  { label: 'Privacy', href: '#privacy' },
  { label: 'Status', href: '#status' },
]

export const Footer: React.FC<FooterProps> = ({
  brandText = 'OpenKiosk · From first sale to full brand',
  links = defaultLinks,
}) => {
  return (
    <footer className="w-full border-t border-slate-100 py-10 bg-white">
      <Container size="lg">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>{brandText}</div>
          <div className="flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-slate-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

