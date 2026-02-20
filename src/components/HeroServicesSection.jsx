import { useEffect, useRef, useState } from 'react'
import { ShoppingCart, CheckCircle, Package } from 'lucide-react'

export default function HeroServicesSection() {
  const headlineRef = useRef(null)
  const cardsRef = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return

    gsap.registerPlugin(ScrollTrigger)

    // Check if already animated this session
    const alreadyAnimated = sessionStorage.getItem('heroAnimated') === 'true'

    // Animate headline text
    if (headlineRef.current) {
      const text = headlineRef.current.textContent.trim()
      headlineRef.current.innerHTML = ''

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
          } else {
            // Hide until GSAP takes over
            span.style.opacity = '0'
          }
          wordWrapper.appendChild(span)
        })

        headlineRef.current.appendChild(wordWrapper)

        if (wordIndex < words.length - 1) {
          // Use regular space text node to allow natural line wrapping
          const space = document.createTextNode(' ')
          headlineRef.current.appendChild(space)
        }
      })

      // Skip scroll animation if already animated
      if (alreadyAnimated) {
        setHasAnimated(true)
      } else {
        const chars = headlineRef.current.querySelectorAll('.char')

        gsap.fromTo(
          chars,
          {
            opacity: 0,
            y: 30
          },
          {
            duration: 0.4,
            ease: 'power2.out',
            opacity: 1,
            y: 0,
            stagger: 0.02,
            scrollTrigger: {
              trigger: headlineRef.current,
              start: 'top bottom-=10%',
              end: 'top center+=20%',
              scrub: 0.3,
              onEnter: () => {
                setHasAnimated(true)
                sessionStorage.setItem('heroAnimated', 'true')
              },
              onLeaveBack: () => setHasAnimated(false)
            }
          }
        )
      }
    }

    // Animate service cards
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.service-card')
      const cardFinals = [
        { rotateY: 8, rotateX: 2, y: 20 },
        { rotateY: 0, rotateX: 0, y: -10 },
        { rotateY: -8, rotateX: 2, y: 20 }
      ]

      cards.forEach((card, index) => {
        const final = cardFinals[index]

        // If already animated, set final state
        if (alreadyAnimated) {
          gsap.set(card, {
            opacity: 1,
            y: final.y,
            rotateX: final.rotateX,
            rotateY: final.rotateY,
            scale: 1,
            transformPerspective: 1000
          })
        } else {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 100,
              rotateX: 15,
              scale: 0.92,
              transformPerspective: 1000
            },
            {
              opacity: 1,
              y: final.y,
              rotateX: final.rotateX,
              rotateY: final.rotateY,
              scale: 1,
              duration: 0.8,
              ease: 'back.out(1.2)',
              scrollTrigger: {
                trigger: cardsRef.current,
                start: 'top bottom-=10%',
                end: 'center center',
                scrub: 0.5
              }
            }
          )
        }
      })
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
        if (hasAnimated && headlineRef.current) {
          const chars = headlineRef.current.querySelectorAll('.char')
          chars.forEach(char => {
            char.style.opacity = '1'
            char.style.transform = 'translateY(0)'
          })
        }
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [hasAnimated])

  const services = [
    {
      icon: ShoppingCart,
      emoji: '🛒',
      title: 'Product Sourcing',
      description: 'Find verified manufacturers for any product'
    },
    {
      icon: CheckCircle,
      emoji: '✓',
      title: 'Quality Control',
      description: '3-tier inspection before shipment'
    },
    {
      icon: Package,
      emoji: '📦',
      title: 'Logistics & Shipping',
      description: 'Worldwide shipping from China'
    }
  ]

  return (
    <section className="hero-services-section">
      {/* Glow effects */}
      <div className="hero-glow teal"></div>
      <div className="hero-glow olive"></div>

      <div className="hero-services-content">
        <h1
          ref={headlineRef}
          className="hero-headline"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(1.8rem, 5vw, 3rem)',
            fontWeight: 400,
            color: 'var(--color-text)',
            letterSpacing: '-0.01em',
            marginBottom: '50px',
            lineHeight: 1.35,
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'center',
            overflow: 'hidden'
          }}
        >
          Looking for a trusted partner to source quality products from China?
        </h1>

        <div ref={cardsRef} className="service-cards-container">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-card-content">
                <div className="service-icon-circle">
                  {service.emoji}
                </div>
                <div className="service-title">{service.title}</div>
                <div className="service-desc">{service.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

    
    </section>
  )
}
