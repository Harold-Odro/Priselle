import { useEffect, useRef, useState } from 'react'
import { useAnimations } from '../contexts/AnimationContext'

export default function LandingSection() {
  const { animationsReady } = useAnimations()
  const brandRef = useRef(null)
  const [animationComplete, setAnimationComplete] = useState(false)
  const [alreadyAnimated] = useState(() => sessionStorage.getItem('landingAnimated') === 'true')

  useEffect(() => {
    if (!brandRef.current || typeof gsap === 'undefined') return

    // Split text into characters
    const text = brandRef.current.textContent.trim()
    brandRef.current.innerHTML = ''

    const words = text.split(' ')
    words.forEach((word, wordIndex) => {
      const wordWrapper = document.createElement('span')
      wordWrapper.style.display = 'inline-block'
      wordWrapper.style.whiteSpace = 'nowrap'

      word.split('').forEach((char) => {
        const span = document.createElement('span')
        span.className = 'char'
        span.textContent = char
        span.style.display = 'inline-block'
        // If already animated, set final state immediately
        if (alreadyAnimated) {
          span.style.opacity = '1'
          span.style.transform = 'translateY(0%) scaleY(1) scaleX(1)'
        }
        wordWrapper.appendChild(span)
      })

      brandRef.current.appendChild(wordWrapper)

      if (wordIndex < words.length - 1) {
        // Use regular space text node to allow natural line wrapping
        const space = document.createTextNode(' ')
        brandRef.current.appendChild(space)
      }
    })

    // If already animated, skip animation
    if (alreadyAnimated) {
      setAnimationComplete(true)
      return
    }

    // Wait for animations to be ready before animating
    if (!animationsReady) return

    const chars = brandRef.current.querySelectorAll('.char')

    gsap.fromTo(
      chars,
      {
        opacity: 0,
        yPercent: 120,
        scaleY: 2.3,
        scaleX: 0.7,
        transformOrigin: '50% 0%'
      },
      {
        duration: 0.6,
        ease: 'back.inOut(1.5)',
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        stagger: 0.012,
        delay: 0.3,
        onComplete: () => {
          setAnimationComplete(true)
          sessionStorage.setItem('landingAnimated', 'true')
        }
      }
    )
  }, [animationsReady])

  // Handle visibility change to prevent text disappearing on tab switch
  useEffect(() => {
    if (!animationComplete || !brandRef.current) return

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && brandRef.current) {
        // Ensure all chars remain visible when tab regains focus
        const chars = brandRef.current.querySelectorAll('.char')
        chars.forEach(char => {
          char.style.opacity = '1'
          char.style.transform = 'translateY(0%) scaleY(1) scaleX(1)'
        })
        // Refresh ScrollTrigger if available
        if (typeof ScrollTrigger !== 'undefined') {
          ScrollTrigger.refresh()
        }
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [animationComplete])

  return (
    <section className="landing-section">
      {/* Background */}
      <div className="landing-bg"></div>

      <div className="landing-content">
        <img
          src="/images/logo.JPG"
          alt="Priselle Logo"
          className="landing-logo"
          style={alreadyAnimated ? { opacity: 1, transform: 'translateY(0)', animation: 'none' } : {}}
          onError={(e) => {
            e.target.style.background = 'linear-gradient(135deg, var(--color-primary), var(--color-accent))'
            e.target.style.display = 'flex'
          }}
        />
        <h1
          ref={brandRef}
          className="landing-brand"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(2.2rem, 6vw, 4rem)',
            fontWeight: 500,
            color: 'var(--color-primary-dark)',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            marginBottom: '16px',
            overflow: 'hidden'
          }}
        >
          Priselle Sourcing and Imports
        </h1>
      </div>

      <div className="landing-scroll">
        <span>Scroll to explore</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}
