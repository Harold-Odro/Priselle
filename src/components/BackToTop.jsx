import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling 500px
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true })
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed z-40 flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      style={{
        bottom: '6rem', // Position above WhatsApp button
        right: '1.5rem',
        backgroundColor: 'var(--color-primary)',
        outlineColor: 'var(--color-accent)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--color-primary-dark)'
        e.currentTarget.style.transform = isVisible ? 'translateY(-2px)' : ''
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--color-primary)'
        e.currentTarget.style.transform = isVisible ? 'translateY(0)' : ''
      }}
    >
      <ArrowUp className="w-5 h-5 text-white" />
    </button>
  )
}
