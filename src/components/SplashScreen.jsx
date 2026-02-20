import { useState, useEffect } from 'react'
import './SplashScreen.css'

export default function SplashScreen({ onComplete }) {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    // Start slide-up animation after 1.5 seconds (reduced for better UX)
    const timer = setTimeout(() => {
      setIsAnimating(true)
      // Call onComplete after animation finishes
      setTimeout(() => {
        onComplete()
      }, 500) // Reduced animation duration
    }, 1500)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div className={`splash-screen ${isAnimating ? 'slide-up' : ''}`}>
      <div className="splash-content">
        {/* Animated logo/brand mark */}
        <div className="splash-logo-container">
          <div className="splash-logo">
            <div className="logo-circle"></div>
            <div className="logo-text">PRISELLE</div>
          </div>
          <div className="splash-tagline">Sourcing & Trade</div>
        </div>

        {/* Animated loading bar */}
        <div className="splash-loader">
          <div className="loader-bar"></div>
        </div>

        {/* Subtle decorative elements */}
        <div className="splash-decorations">
          <div className="deco-circle deco-1"></div>
          <div className="deco-circle deco-2"></div>
          <div className="deco-circle deco-3"></div>
        </div>
      </div>
    </div>
  )
}
