import { useAnimations } from '../contexts/AnimationContext'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useInView, useSpring } from 'framer-motion'
import './FreightPage.css'

const stats = [
  { value: '5K+', label: 'Shipments to Ghana' },
  { value: '99.2%', label: 'On-Time Arrival' },
  { value: '35–45', label: 'Days by Sea' },
  { value: '24/7', label: 'Tracking & Support' },
]

const seaPricing = [
  { route: 'CBM to Accra', price: '$240' },
  { route: 'CBM to Kumasi', price: '$260' },
  { route: 'Less than 1 CBM to Accra', price: '$245' },
  { route: 'Less than 1 CBM to Kumasi', price: '$265' },
]

const airPricing = [
  { route: 'Air Freight to Ghana', price: '$20', unit: 'per kg' },
]

const services = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 36h40" />
        <path d="M8 36V20l16-8 16 8v16" />
        <path d="M24 12v24" />
        <path d="M8 20l16 8 16-8" />
        <path d="M2 40c4-2 8-4 14-4s10 2 14 4 8 4 14 4" />
      </svg>
    ),
    title: 'Sea Shipping',
    desc: 'FCL & LCL ocean shipping from Chinese ports to Tema. Cost-effective bulk transport with full container tracking.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 4l8 6h8v4l-16 12-16-12v-4h8l8-6z" />
        <path d="M8 26l16 12 16-12" />
        <path d="M24 22v20" />
        <path d="M4 38h40" />
      </svg>
    ),
    title: 'Air Freight',
    desc: 'Fast air shipping from China to Ghana for time-sensitive cargo. Delivery in 3–7 days with full tracking and customs clearance.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="10" width="36" height="28" rx="3" />
        <path d="M6 18h36" />
        <path d="M18 10v28" />
        <path d="M30 10v28" />
        <path d="M6 26h36" />
        <path d="M6 34h36" />
      </svg>
    ),
    title: 'Warehouse & Inventory Management',
    desc: 'Secure warehousing in China with inventory tracking, consolidation, and storage before shipment to Ghana.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="18" />
        <path d="M16 24l5 5 11-11" />
        <path d="M24 6v4" />
        <path d="M24 38v4" />
        <path d="M6 24h4" />
        <path d="M38 24h4" />
      </svg>
    ),
    title: 'Quality Control',
    desc: 'Thorough product inspection and quality assurance at the factory and warehouse level before goods leave China.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="8" width="40" height="32" rx="4" />
        <path d="M4 18h40" />
        <path d="M4 28h40" />
        <path d="M12 34h8" />
        <path d="M28 34h8" />
        <circle cx="24" cy="23" r="0" />
        <path d="M16 23h16" />
        <text x="24" y="25" textAnchor="middle" fontSize="8" fill="currentColor" stroke="none" fontWeight="600">¥</text>
      </svg>
    ),
    title: 'RMB Payments',
    desc: 'We handle RMB payments to Chinese suppliers on your behalf.',
  },
]

/* Animated counter that counts up when in view */
function AnimatedStat({ value, label, delay }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const numericPart = value.replace(/[^0-9.]/g, '')
  const prefix = value.match(/^[^0-9]*/)[0]
  const suffix = value.replace(/^[^0-9]*[0-9.]+/, '')
  const isNumeric = numericPart.length > 0 && !value.includes('–')

  const [displayed, setDisplayed] = useState(isNumeric ? '0' : value)

  useEffect(() => {
    if (!isInView || !isNumeric) return
    const target = parseFloat(numericPart)
    const duration = 1800
    const start = performance.now()

    const tick = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      const current = eased * target

      if (target >= 100) {
        setDisplayed(`${prefix}${Math.round(current).toLocaleString()}${suffix}`)
      } else {
        setDisplayed(`${prefix}${current.toFixed(1)}${suffix}`)
      }

      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [isInView, isNumeric, numericPart, prefix, suffix])

  return (
    <motion.div
      ref={ref}
      className="freight-hero__stat"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="freight-hero__stat-value">{isNumeric ? displayed : value}</span>
      <span className="freight-hero__stat-label">{label}</span>
    </motion.div>
  )
}

export default function FreightPage() {
  const { animationsReady } = useAnimations()
  const videoRef = useRef(null)
  const [videoLoaded, setVideoLoaded] = useState(false)

  // Parallax for hero
  const heroRef = useRef(null)
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroVideoY = useTransform(heroProgress, [0, 1], ['0%', '30%'])
  const heroVideoScale = useTransform(heroProgress, [0, 1], [1, 1.15])
  const heroContentOpacity = useTransform(heroProgress, [0, 0.5], [1, 0])
  const heroContentY = useTransform(heroProgress, [0, 0.5], [0, -60])

  // Smooth spring for parallax
  const smoothVideoY = useSpring(heroVideoY, { stiffness: 100, damping: 30 })
  const smoothContentY = useSpring(heroContentY, { stiffness: 100, damping: 30 })

  // Services section
  const servicesRef = useRef(null)
  const servicesInView = useInView(servicesRef, { once: true, margin: '-100px' })

  // Pricing section
  const pricingRef = useRef(null)
  const pricingInView = useInView(pricingRef, { once: true, margin: '-100px' })

  // CTA section
  const ctaRef = useRef(null)
  const ctaInView = useInView(ctaRef, { once: true, margin: '-100px' })

  // CTA parallax
  const { scrollYProgress: ctaProgress } = useScroll({
    target: ctaRef,
    offset: ['start end', 'end start'],
  })
  const ctaOrbX = useTransform(ctaProgress, [0, 1], [-30, 30])
  const ctaOrbY = useTransform(ctaProgress, [0, 1], [40, -40])

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.playbackRate = 0.75
      const handleLoaded = () => setVideoLoaded(true)
      video.addEventListener('canplaythrough', handleLoaded)
      if (video.readyState >= 4) setVideoLoaded(true)
      return () => video.removeEventListener('canplaythrough', handleLoaded)
    }
  }, [])

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: i * 0.1,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <div className="freight-page">
      {/* ── HERO with Video Background ── */}
      <section className="freight-hero" ref={heroRef}>
        <motion.div
          className="freight-hero__video-wrap"
          style={{ y: smoothVideoY, scale: heroVideoScale }}
        >
          <video
            ref={videoRef}
            className={`freight-hero__video ${videoLoaded ? 'loaded' : ''}`}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/videos/globalbg.mp4" type="video/mp4" />
          </video>
          <div className="freight-hero__overlay" />
          <div className="grain-overlay" />
        </motion.div>

        <motion.div
          className="freight-hero__content"
          style={{ opacity: heroContentOpacity, y: smoothContentY }}
        >
          {/* Hero text */}
          <div className="freight-hero__text">
            <motion.div
              className="freight-hero__badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={animationsReady ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="freight-hero__badge-dot" />
              China to Ghana
            </motion.div>

            <motion.h1
              className="freight-hero__title"
              initial={{ opacity: 0, y: 50 }}
              animate={animationsReady ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              Shipping from China{' '}
              <br />
              to Ghana,{' '}
              <span className="freight-hero__title-accent">with Ease.</span>
            </motion.h1>

            <motion.p
              className="freight-hero__subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={animationsReady ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              Reliable freight forwarding from Chinese factories to your
              doorstep in Ghana — by sea or air, cleared and delivered on time.
            </motion.p>

            <motion.div
              className="freight-hero__actions"
              initial={{ opacity: 0, y: 20 }}
              animate={animationsReady ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to="/freight/contact" className="freight-hero__cta-primary">
                Get a Quote
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link to="/freight/services" className="freight-hero__cta-secondary">
                Our Services
              </Link>
            </motion.div>
          </div>

          {/* Stats bar */}
          <div className="freight-hero__stats">
            {stats.map((stat, i) => (
              <AnimatedStat
                key={stat.label}
                value={stat.value}
                label={stat.label}
                delay={0.9 + i * 0.15}
              />
            ))}
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="freight-hero__scroll"
            initial={{ opacity: 0 }}
            animate={animationsReady ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <div className="freight-hero__scroll-line" />
            <span>Scroll</span>
          </motion.div>
        </motion.div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="freight-services" ref={servicesRef}>
        <div className="freight-services__bg">
          <div className="freight-services__orb freight-services__orb--1" />
          <div className="freight-services__orb freight-services__orb--2" />
        </div>

        <div className="freight-services__inner">
          <motion.div
            className="freight-services__header"
            initial="hidden"
            animate={servicesInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            <motion.span className="freight-services__label" variants={fadeUp}>
              What We Do
            </motion.span>
            <motion.h2 className="freight-services__title" variants={fadeUp}>
              China to Ghana, Fully Handled
            </motion.h2>
            <motion.p className="freight-services__desc" variants={fadeUp}>
              From the factory floor in Guangzhou to your warehouse in Accra, Kumasi, or
              anywhere in Ghana — we manage every step of the journey.
            </motion.p>
          </motion.div>

          <motion.div
            className="freight-services__grid"
            initial="hidden"
            animate={servicesInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                className="freight-svc-card"
                variants={fadeUp}
                custom={i}
                whileHover={{
                  y: -8,
                  boxShadow: '0 24px 60px rgba(47, 111, 115, 0.15), 0 8px 24px rgba(0, 0, 0, 0.08)',
                  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                }}
              >
                <motion.div
                  className="freight-svc-card__icon"
                  whileHover={{ scale: 1.15, rotate: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  {svc.icon}
                </motion.div>
                <h3 className="freight-svc-card__title">{svc.title}</h3>
                <p className="freight-svc-card__desc">{svc.desc}</p>
                <div className="freight-svc-card__line" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="freight-pricing" ref={pricingRef}>
        <div className="freight-pricing__inner">
          <motion.div
            className="freight-pricing__header"
            initial="hidden"
            animate={pricingInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            <motion.span className="freight-pricing__label" variants={fadeUp}>
              Shipping Rates
            </motion.span>
            <motion.h2 className="freight-pricing__title" variants={fadeUp}>
              China to Ghana Pricing
            </motion.h2>
            <motion.p className="freight-pricing__desc" variants={fadeUp}>
              Transparent, competitive rates for sea and air shipping from China to Ghana.
            </motion.p>
          </motion.div>

          {/* Sea Shipping Rates */}
          <motion.h3
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.3rem', fontWeight: 500, textAlign: 'center', marginBottom: '1.25rem', color: 'var(--gl-text)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={pricingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Sea Shipping — 35–45 Days
          </motion.h3>

          <motion.div
            className="freight-pricing__grid"
            initial="hidden"
            animate={pricingInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            {seaPricing.map((item, i) => (
              <motion.div
                key={item.route}
                className="freight-pricing__card"
                variants={fadeUp}
                custom={i}
                whileHover={{
                  y: -6,
                  boxShadow: '0 20px 50px rgba(47, 111, 115, 0.12), 0 8px 20px rgba(0, 0, 0, 0.06)',
                  transition: { duration: 0.3 },
                }}
              >
                <span className="freight-pricing__route">{item.route}</span>
                <span className="freight-pricing__price">{item.price}</span>
                <span className="freight-pricing__unit">per CBM</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Air Freight Rates */}
          <motion.h3
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.3rem', fontWeight: 500, textAlign: 'center', margin: '2.5rem 0 1.25rem', color: 'var(--gl-text)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={pricingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Air Freight — 3–7 Days
          </motion.h3>

          <motion.div
            className="freight-pricing__grid"
            initial="hidden"
            animate={pricingInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            {airPricing.map((item, i) => (
              <motion.div
                key={item.route}
                className="freight-pricing__card"
                variants={fadeUp}
                custom={i}
                whileHover={{
                  y: -6,
                  boxShadow: '0 20px 50px rgba(47, 111, 115, 0.12), 0 8px 20px rgba(0, 0, 0, 0.06)',
                  transition: { duration: 0.3 },
                }}
              >
                <span className="freight-pricing__route">{item.route}</span>
                <span className="freight-pricing__price">{item.price}</span>
                <span className="freight-pricing__unit">{item.unit}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            className="freight-pricing__duration"
            initial={{ opacity: 0, y: 20 }}
            animate={pricingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            Sea: 35–45 days port to port · Air: 3–7 days
          </motion.p>
        </div>
      </section>

      {/* ── TAGLINE ── */}
      <section className="freight-tagline">
        <motion.p
          className="freight-tagline__text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Choose Priselle; Ship Smart. Ship Secure. Ship China&nbsp;‑&nbsp;Ghana.
        </motion.p>
      </section>

      {/* ── CTA / Quote ── */}
      <section id="quote" className="freight-cta" ref={ctaRef}>
        <div className="freight-cta__bg">
          <motion.div
            className="freight-cta__orb freight-cta__orb--1"
            style={{ x: ctaOrbX, y: ctaOrbY }}
          />
          <motion.div
            className="freight-cta__orb freight-cta__orb--2"
            style={{ x: useTransform(ctaProgress, [0, 1], [20, -20]), y: useTransform(ctaProgress, [0, 1], [-30, 30]) }}
          />
          <div className="grain-overlay" />
        </div>

        <motion.div
          className="freight-cta__inner"
          initial="hidden"
          animate={ctaInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          <motion.div className="freight-cta__content" variants={fadeUp}>
            <span className="freight-cta__label">Ready to Ship?</span>
            <h2 className="freight-cta__title">
              Get Your Free <br />China-to-Ghana Quote
            </h2>
            <p className="freight-cta__desc">
              Tell us what you're shipping and where in Ghana it's going. Our
              team will send you the best rate and timeline — within 24 hours.
            </p>
            <div className="freight-cta__actions">
              <Link to="/freight/contact" className="freight-cta__btn-primary">
                Request a Quote
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link to="/freight/services" className="freight-cta__btn-secondary">
                View Our Services
              </Link>
            </div>
          </motion.div>

          <motion.div className="freight-cta__features" variants={fadeUp}>
            {[
              { icon: '01', text: 'Tell us what you\'re shipping from China' },
              { icon: '02', text: 'Receive your sea or air freight quote' },
              { icon: '03', text: 'We ship, clear customs & deliver in Ghana' },
            ].map((step, i) => (
              <motion.div
                key={step.icon}
                className="freight-cta__step"
                initial={{ opacity: 0, x: 40 }}
                animate={ctaInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  x: 6,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'rgba(255, 255, 255, 0.18)',
                  transition: { duration: 0.25 },
                }}
              >
                <span className="freight-cta__step-num">{step.icon}</span>
                <span className="freight-cta__step-text">{step.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── Footer ── */}
      <motion.footer
        className="freight-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p>&copy; {new Date().getFullYear()} Priselle Freight and Logistics. All rights reserved.</p>
      </motion.footer>
    </div>
  )
}
