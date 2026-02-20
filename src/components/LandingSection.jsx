import { useEffect, useRef, useState } from 'react'
import { useAnimations } from '../contexts/AnimationContext'

export default function LandingSection() {
  const { animationsReady } = useAnimations()
  const brandRef = useRef(null)
  const taglineRef = useRef(null)
  const [animationComplete, setAnimationComplete] = useState(false)
  const [alreadyAnimated] = useState(() => sessionStorage.getItem('landingAnimated') === 'true')

  useEffect(() => {
    if (!brandRef.current || typeof gsap === 'undefined') return

    // Animate brand name characters
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
        if (alreadyAnimated) {
          span.style.opacity = '1'
        } else {
          span.style.opacity = '0'
        }
        wordWrapper.appendChild(span)
      })

      brandRef.current.appendChild(wordWrapper)

      if (wordIndex < words.length - 1) {
        const space = document.createTextNode(' ')
        brandRef.current.appendChild(space)
      }
    })

    if (alreadyAnimated) {
      setAnimationComplete(true)
      return
    }

    if (!animationsReady) return

    const chars = brandRef.current.querySelectorAll('.char')

    // Staggered character reveal
    gsap.fromTo(
      chars,
      { opacity: 0, y: 60 },
      {
        duration: 0.5,
        ease: 'power3.out',
        opacity: 1,
        y: 0,
        stagger: 0.03,
        delay: 0.1,
        onComplete: () => {
          setAnimationComplete(true)
          sessionStorage.setItem('landingAnimated', 'true')
        }
      }
    )

    // Animate tagline
    if (taglineRef.current) {
      gsap.fromTo(
        taglineRef.current,
        { opacity: 0, y: 20 },
        { duration: 0.8, ease: 'power2.out', opacity: 1, y: 0, delay: 0.8 }
      )
    }
  }, [animationsReady, alreadyAnimated])

  useEffect(() => {
    if (!animationComplete || !brandRef.current) return

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && brandRef.current) {
        const chars = brandRef.current.querySelectorAll('.char')
        chars.forEach(char => {
          char.style.opacity = '1'
          char.style.transform = 'translateY(0)'
        })
        if (typeof ScrollTrigger !== 'undefined') {
          ScrollTrigger.refresh()
        }
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [animationComplete])

  return (
    <section className="landing-section section-dark" data-dark-section>
      {/* Multi-layer background */}
      <div className="landing-bg"></div>
      <div className="landing-grain"></div>

      {/* Decorative elements */}
      <div className="landing-decor">
        <div className="decor-line decor-line-1"></div>
        <div className="decor-line decor-line-2"></div>
        <div className="decor-orb decor-orb-1"></div>
        <div className="decor-orb decor-orb-2"></div>
      </div>

      {/* Corner accents */}
      <div className="corner-accent top-left">
        <span>EST. 2020</span>
      </div>
      <div className="corner-accent top-right">
        <span>CHINA — WORLDWIDE</span>
      </div>

      <div className="landing-content">
        {/* Logo with glow effect */}
        <div className="logo-wrapper">
          <div className="logo-glow"></div>
          <img
            src="/images/logo.JPG"
            alt="Priselle Logo"
            className="landing-logo"
            style={alreadyAnimated ? { opacity: 1, transform: 'translateY(0) scale(1)', animation: 'none' } : {}}
            onError={(e) => {
              e.target.style.background = 'linear-gradient(135deg, var(--color-primary), var(--color-accent))'
            }}
          />
        </div>

        {/* Main headline with distinctive typography */}
        <h1 ref={brandRef} className="landing-brand">
          Priselle
        </h1>

        {/* Tagline with elegant styling */}
        <p
          ref={taglineRef}
          className="landing-tagline"
          style={alreadyAnimated ? { opacity: 1, transform: 'translateY(0)' } : { opacity: 0 }}
        >
          Sourcing & Trade 
        </p>

        {/* Decorative divider */}
        <div className="landing-divider">
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Value proposition */}
        <p className="landing-value" style={alreadyAnimated ? { opacity: 1 } : {}}>
          Connecting Global Businesses with China's Manufacturing Excellence
        </p>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="landing-scroll">
        <div className="scroll-line"></div>
        <span>Discover</span>
      </div>
    </section>
  )
}
