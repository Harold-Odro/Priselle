import { useState, useEffect, useRef, useCallback } from 'react'

export default function AnimatedCounter({
  end,
  duration = 2000,
  suffix = '',
  prefix = '',
  className = ''
}) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)

  const animateCount = useCallback(() => {
    const startTime = performance.now()
    const endValue = parseInt(end.toString().replace(/\D/g, ''), 10)

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Ease out cubic for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentValue = Math.floor(easeOut * endValue)

      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            animateCount()
          }
        })
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated, animateCount])

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  )
}
