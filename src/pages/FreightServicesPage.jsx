import { Link } from 'react-router-dom'
import { useAnimations } from '../contexts/AnimationContext'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './FreightPage.css'

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
    features: [
      'Full Container Load (FCL) shipping',
      'Less than Container Load (LCL) options',
      'Port-to-port and door-to-door delivery',
      'Real-time container tracking',
    ],
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
    desc: 'Fast air shipping from China to Ghana for time-sensitive cargo. Delivery in 7–14 days with full tracking and customs clearance.',
    features: [
      'Express delivery in 7–14 days',
      'Ideal for urgent or lightweight shipments',
      'Full customs clearance included',
      'Real-time flight and parcel tracking',
    ],
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
    features: [
      'Secure warehouse facilities in China',
      'Inventory tracking and reporting',
      'Shipment consolidation and batching',
      'Flexible storage duration',
    ],
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
    features: [
      'Pre-shipment factory inspection',
      'Warehouse quality checks',
      'Photo and video documentation',
      'Defect reporting and resolution',
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="8" width="40" height="32" rx="4" />
        <path d="M4 18h40" />
        <path d="M4 28h40" />
        <path d="M12 34h8" />
        <path d="M28 34h8" />
        <path d="M16 23h16" />
        <text x="24" y="25" textAnchor="middle" fontSize="8" fill="currentColor" stroke="none" fontWeight="600">¥</text>
      </svg>
    ),
    title: 'RMB Payments',
    desc: 'We handle RMB payments to Chinese suppliers on your behalf — no need for a Chinese bank account or currency exchange hassle.',
    features: [
      'Direct supplier payments in RMB',
      'Transparent exchange rates',
      'Payment confirmation and receipts',
    ],
  },
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

const process = [
  { num: '01', title: 'Tell Us What You\'re Shipping', desc: 'Share product details, quantity, and preferred destination (Accra or Kumasi).' },
  { num: '02', title: 'Receive Your Quote', desc: 'We calculate the CBM and provide a transparent, competitive quote within 24 hours.' },
  { num: '03', title: 'We Handle the Rest', desc: 'From warehouse pickup to customs clearance and delivery in Ghana — fully managed.' },
]

export default function FreightServicesPage() {
  const { animationsReady } = useAnimations()

  const servicesRef = useRef(null)
  const servicesInView = useInView(servicesRef, { once: true, margin: '-80px' })

  const pricingRef = useRef(null)
  const pricingInView = useInView(pricingRef, { once: true, margin: '-80px' })

  const processRef = useRef(null)
  const processInView = useInView(processRef, { once: true, margin: '-80px' })

  const ctaRef = useRef(null)
  const ctaInView = useInView(ctaRef, { once: true, margin: '-80px' })

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
    }),
  }

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  }

  return (
    <div className="freight-page">
      {/* ── HERO ── */}
      <section className="freight-contact-hero">
        <div className="freight-contact-hero__bg">
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(145deg, var(--gl-teal-dark), var(--gl-teal))',
            }}
          />
          <div className="grain-overlay" />
        </div>

        <div className="freight-contact-hero__content">
          <motion.nav
            className="freight-hero__nav"
            initial={{ opacity: 0, x: -20 }}
            animate={animationsReady ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link to="/freight" className="freight-hero__back">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5" />
                <path d="M12 19l-7-7 7-7" />
              </svg>
              <span>Freight Home</span>
            </Link>
          </motion.nav>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', maxWidth: 700, margin: '0 auto', padding: '4rem 0 2rem' }}>
            <motion.div
              className="freight-hero__badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={animationsReady ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="freight-hero__badge-dot" />
              What We Offer
            </motion.div>

            <motion.h1
              className="freight-hero__title"
              style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)' }}
              initial={{ opacity: 0, y: 50 }}
              animate={animationsReady ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.4 }}
            >
              Our Freight Services
            </motion.h1>

            <motion.p
              className="freight-hero__subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={animationsReady ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              Comprehensive sea and air shipping services from China to Ghana.
              Ship Smart. Ship Secure. Ship China – Ghana.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── SERVICES DETAIL ── */}
      <section className="freight-services" ref={servicesRef}>
        <div className="freight-services__bg">
          <div className="freight-services__orb freight-services__orb--1" />
          <div className="freight-services__orb freight-services__orb--2" />
        </div>

        <div className="freight-services__inner" style={{ maxWidth: 1100 }}>
          <motion.div
            className="freight-services__header"
            initial="hidden"
            animate={servicesInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            <motion.span className="freight-services__label" variants={fadeUp}>
              Our Services
            </motion.span>
            <motion.h2 className="freight-services__title" variants={fadeUp}>
              Everything You Need to Ship from China
            </motion.h2>
            <motion.p className="freight-services__desc" variants={fadeUp}>
              From warehouse to doorstep, we manage every step of your China-to-Ghana freight journey.
            </motion.p>
          </motion.div>

          <motion.div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}
            className="freight-svc-detail-grid"
            initial="hidden"
            animate={servicesInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                className="freight-svc-card"
                style={{ padding: '2.25rem 2rem' }}
                variants={fadeUp}
                custom={i}
                whileHover={{
                  y: -8,
                  boxShadow: '0 24px 60px rgba(47, 111, 115, 0.15), 0 8px 24px rgba(0, 0, 0, 0.08)',
                  transition: { duration: 0.35 },
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
                <p className="freight-svc-card__desc" style={{ marginBottom: '1.25rem' }}>{svc.desc}</p>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {svc.features.map((feature) => (
                    <li key={feature} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.825rem', color: 'var(--gl-text-light)' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gl-teal)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

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
              Transparent Pricing
            </motion.h2>
            <motion.p className="freight-pricing__desc" variants={fadeUp}>
              Competitive rates for sea and air shipping from China to Ghana.
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
            Air Freight — 7–14 Days
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
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            Sea: 35–45 days port to port · Air: 7–14 days
          </motion.p>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="freight-services" ref={processRef} style={{ background: 'var(--gl-bg)' }}>
        <div className="freight-services__bg">
          <div className="freight-services__orb freight-services__orb--1" />
        </div>

        <div className="freight-services__inner" style={{ maxWidth: 800 }}>
          <motion.div
            className="freight-services__header"
            initial="hidden"
            animate={processInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            <motion.span className="freight-services__label" variants={fadeUp}>
              How It Works
            </motion.span>
            <motion.h2 className="freight-services__title" variants={fadeUp}>
              Simple. Transparent. Reliable.
            </motion.h2>
          </motion.div>

          <motion.div
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            initial="hidden"
            animate={processInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            {process.map((step, i) => (
              <motion.div
                key={step.num}
                variants={fadeUp}
                custom={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.5rem',
                  padding: '2rem',
                  background: 'rgba(255, 255, 255, 0.85)',
                  border: '1px solid rgba(47, 111, 115, 0.08)',
                  borderRadius: '20px',
                }}
                whileHover={{
                  y: -4,
                  boxShadow: '0 16px 40px rgba(47, 111, 115, 0.1)',
                  transition: { duration: 0.3 },
                }}
              >
                <span style={{
                  flexShrink: 0,
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(145deg, var(--gl-teal), var(--gl-teal-light))',
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  color: '#fff',
                }}>
                  {step.num}
                </span>
                <div>
                  <h3 style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1.2rem',
                    fontWeight: 500,
                    color: 'var(--gl-text)',
                    margin: '0 0 0.5rem',
                  }}>
                    {step.title}
                  </h3>
                  <p style={{
                    fontSize: '0.9rem',
                    fontWeight: 300,
                    lineHeight: 1.65,
                    color: 'var(--gl-text-light)',
                    margin: 0,
                  }}>
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TAGLINE ── */}
      <section className="freight-tagline">
        <motion.p
          className="freight-tagline__text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
        >
          Choose Priselle; Ship Smart. Ship Secure. Ship China&nbsp;‑&nbsp;Ghana.
        </motion.p>
      </section>

      {/* ── CTA ── */}
      <section className="freight-cta" ref={ctaRef}>
        <div className="freight-cta__bg">
          <div className="freight-cta__orb freight-cta__orb--1" />
          <div className="freight-cta__orb freight-cta__orb--2" />
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
              <Link to="/freight" className="freight-cta__btn-secondary">
                Back to Freight Home
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
                transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
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

      {/* ── FOOTER ── */}
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
