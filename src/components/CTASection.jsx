import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

export default function CTASection() {
  const headlineRef = useRef(null)
  const subtitleRef = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return

    gsap.registerPlugin(ScrollTrigger)

    // Check if already animated this session
    const alreadyAnimated = sessionStorage.getItem('ctaAnimated') === 'true'

    const setupText = (element, stagger = 0.015) => {
      if (!element) return

      const text = element.textContent.trim()
      element.innerHTML = ''

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
          // If already animated, set final state
          if (alreadyAnimated) {
            span.style.opacity = '1'
            span.style.transform = 'translateY(0%) scaleY(1) scaleX(1)'
          }
          wordWrapper.appendChild(span)
        })

        element.appendChild(wordWrapper)

        if (wordIndex < words.length - 1) {
          // Use regular space text node to allow natural line wrapping
          const space = document.createTextNode(' ')
          element.appendChild(space)
        }
      })

      // Skip animation if already animated
      if (alreadyAnimated) return

      const chars = element.querySelectorAll('.char')

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
          duration: 0.5,
          ease: 'back.out(1.5)',
          opacity: 1,
          yPercent: 0,
          scaleY: 1,
          scaleX: 1,
          stagger: stagger,
          scrollTrigger: {
            trigger: element,
            start: 'top bottom+=10%',
            end: 'top center+=20%',
            scrub: 0.5,
            onEnter: () => {
              setHasAnimated(true)
              sessionStorage.setItem('ctaAnimated', 'true')
            }
          }
        }
      )
    }

    setupText(headlineRef.current)
    setupText(subtitleRef.current, 0.008)

    if (alreadyAnimated) {
      setHasAnimated(true)
    }
  }, [])

  // Handle visibility change to fix text disappearing on tab switch
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        // Refresh ScrollTrigger to recalculate positions
        if (typeof ScrollTrigger !== 'undefined') {
          ScrollTrigger.refresh()
        }

        // If animation has already played, ensure text is visible
        if (hasAnimated) {
          const restoreChars = (ref) => {
            if (ref.current) {
              const chars = ref.current.querySelectorAll('.char')
              chars.forEach(char => {
                char.style.opacity = '1'
                char.style.transform = 'translateY(0%) scaleY(1) scaleX(1)'
              })
            }
          }
          restoreChars(headlineRef)
          restoreChars(subtitleRef)
        }
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [hasAnimated])

  const benefits = [
    'Free consultation',
    '24-hour response',
    'No upfront fees',
    'Transparent pricing'
  ]

  const contactInfo = [
    {
      icon: Mail,
      emoji: '📧',
      label: 'prisellesourcing@gmail.com',
      href: 'mailto:prisellesourcing@gmail.com'
    },
    {
      icon: Phone,
      emoji: '📞',
      label: '+233 54 486 1154',
      href: 'tel:+233544861154'
    },
    {
      icon: MapPin,
      emoji: '📍',
      label: 'Accra, Ghana',
      href: null
    }
  ]

  return (
    <section className="cta-section section-dark" data-dark-section>
      <div className="cta-card">
        <h2
          ref={headlineRef}
          className="cta-headline"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(2rem, 5vw, 2.75rem)',
            fontWeight: 400,
            color: 'white',
            marginBottom: '20px',
            lineHeight: 1.3,
            overflow: 'hidden'
          }}
        >
          Get Started Today
        </h2>
        <p
          ref={subtitleRef}
          className="cta-subtitle"
          style={{
            fontSize: '1.1rem',
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: '35px',
            maxWidth: '500px',
            marginLeft: 'auto',
            marginRight: 'auto',
            overflow: 'hidden'
          }}
        >
          Let's discuss how we can help your business grow with reliable sourcing from China
        </p>

        <Link
          to="/contact"
          className="cta-button"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: 'var(--color-accent)',
            color: 'white',
            padding: '18px 40px',
            borderRadius: '12px',
            fontSize: '1.1rem',
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            marginBottom: '30px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-accent-dark)'
            e.currentTarget.style.transform = 'translateY(-3px)'
            e.currentTarget.style.boxShadow = '0 15px 35px rgba(95, 115, 100, 0.4)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-accent)'
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          Contact Us
          <ArrowRight className="w-5 h-5" />
        </Link>

        <div className="cta-benefits" style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '15px'
        }}>
          {benefits.map((benefit, index) => (
            <span
              key={index}
              className="cta-benefit"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'rgba(255, 255, 255, 0.9)',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '0.85rem',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              {benefit}
            </span>
          ))}
        </div>

        <div className="contact-info" style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '30px',
          marginTop: '40px',
          paddingTop: '30px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="contact-item"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '0.9rem'
              }}
            >
              <span style={{ fontSize: '1.2rem' }}>{item.emoji}</span>
              {item.href ? (
                <a
                  href={item.href}
                  style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    textDecoration: 'none',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
                >
                  {item.label}
                </a>
              ) : (
                <span>{item.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
