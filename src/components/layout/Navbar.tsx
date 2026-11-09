import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Container from './Container.tsx'
import Logo from '../common/Logo.tsx'
import Button from '../ui/Button.tsx'
import type { NavItem } from '../../types/landing.ts'

export interface NavbarProps {
  navItems?: NavItem[]
  signInHref?: string
  startFreeHref?: string
}

const defaultNavItems: NavItem[] = [
  { label: 'Product', href: '/#features' },
  { label: 'How it works', href: '/how-it-works' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Developers', href: '#developers' },
]

export const Navbar: React.FC<NavbarProps> = ({
  navItems = defaultNavItems,
  signInHref = '#signin',
  startFreeHref = '#start',
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    closeMobile = false
  ) => {
    if (closeMobile) {
      setMobileMenuOpen(false)
    }

    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '')
      if (location.pathname === '/') {
        e.preventDefault()
        const element = document.getElementById(targetId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          window.history.pushState(null, '', href)
        }
      }
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-100 transition-colors">
      <Container size="lg">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Brand Logo */}
          <div className="flex items-center gap-6">
            <Link to="/" className="group inline-flex items-center transition-opacity hover:opacity-95">
              <Logo size="md" href="" />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isInternal = item.href.startsWith('/')
              const isPageMatch = item.href === location.pathname
              const linkClasses = `text-sm font-medium transition-colors ${
                isPageMatch ? 'text-blue-600 font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`

              return isInternal ? (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={linkClasses}
                >
                  {item.label}
                </Link>
              ) : (
                <a key={item.label} href={item.href} className={linkClasses}>
                  {item.label}
                </a>
              )
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={signInHref}
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors px-2 py-1"
            >
              Sign in
            </a>
            <Button variant="dark" size="md" href={startFreeHref}>
              Start free
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <Button variant="dark" size="sm" href={startFreeHref}>
              Start free
            </Button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-100 py-4 px-2 space-y-3 bg-white">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const isInternal = item.href.startsWith('/')
                return isInternal ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={(e) => handleNavClick(e, item.href, true)}
                    className="px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md transition-colors"
                  >
                    {item.label}
                  </a>
                )
              })}
            </nav>
            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={signInHref}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md text-center"
              >
                Sign in
              </a>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}

export default Navbar
