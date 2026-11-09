import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const ScrollToHash: React.FC = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const targetId = hash.replace('#', '')
    let attempts = 0
    const maxAttempts = 10

    const tryScroll = () => {
      const element = document.getElementById(targetId)
      if (element) {
        // Account for sticky navbar height (~64px) with scroll-margin or offset
        const yOffset = -70
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({ top: y, behavior: 'smooth' })
        return true
      }
      return false
    }

    if (!tryScroll()) {
      const interval = setInterval(() => {
        attempts += 1
        if (tryScroll() || attempts >= maxAttempts) {
          clearInterval(interval)
        }
      }, 80)

      return () => clearInterval(interval)
    }
  }, [pathname, hash])

  return null
}

export default ScrollToHash
