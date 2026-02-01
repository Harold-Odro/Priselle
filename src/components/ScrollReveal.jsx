import { useEffect, useRef, useState } from 'react'
import { useAnimations } from '../contexts/AnimationContext'

export default function ScrollReveal({ children, className = '', delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)
  const { animationsReady } = useAnimations()

  useEffect(() => {
    // Don't start observing until animations are ready
    if (!animationsReady) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    )

    const currentElement = elementRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [delay, animationsReady])

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-1000 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-12'
      } ${className}`}
    >
      {children}
    </div>
  )
}
