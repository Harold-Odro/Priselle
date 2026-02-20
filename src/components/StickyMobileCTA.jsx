import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MessageSquare } from 'lucide-react'

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const location = useLocation()

  // Hide on contact page since user is already there
  const isContactPage = location.pathname === '/contact'

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past 300px
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Don't render on contact page
  if (isContactPage) return null

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{
        paddingBottom: 'env(safe-area-inset-bottom, 0px)'
      }}
    >
      <div
        className="mx-4 mb-4"
        style={{
          filter: 'drop-shadow(0 -4px 20px rgba(0, 0, 0, 0.15))'
        }}
      >
        <Link
          to="/contact"
          className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold text-base transition-all duration-200"
          style={{
            backgroundColor: 'var(--color-accent)',
            color: 'white',
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 600
          }}
        >
          <MessageSquare className="h-5 w-5" />
          Get a Free Quote
        </Link>
      </div>
    </div>
  )
}
