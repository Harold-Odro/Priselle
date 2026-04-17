import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAnimations } from '../contexts/AnimationContext'
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Clock, CheckCircle, Send, Mail, MapPin, Phone } from 'lucide-react'
import Toast from '../components/Toast'
import './FreightPage.css'

export default function FreightContactPage() {
  const { animationsReady } = useAnimations()
  const location = useLocation()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    product: '',
    quantity: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [toast, setToast] = useState(null)
  const [isEmailJSConfigured, setIsEmailJSConfigured] = useState(true)

  const heroRef = useRef(null)
  const formRef = useRef(null)
  const formInView = useInView(formRef, { once: true, margin: '-80px' })
  const cardsRef = useRef(null)
  const cardsInView = useInView(cardsRef, { once: true, margin: '-80px' })

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required'
        if (value.trim().length < 2) return 'Name must be at least 2 characters'
        return ''
      case 'email':
        if (!value.trim()) return 'Email is required'
        if (!isValidEmail(value)) return 'Please enter a valid email address'
        return ''
      default:
        return ''
    }
  }

  useEffect(() => {
    const required = ['VITE_EMAILJS_SERVICE_ID', 'VITE_EMAILJS_TEMPLATE_ID', 'VITE_EMAILJS_PUBLIC_KEY']
    if (required.some(key => !import.meta.env[key])) {
      setIsEmailJSConfigured(false)
    }
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    const error = validateField(name, value)
    setErrors(prev => ({ ...prev, [name]: error }))
  }

  const handleSubmit = async () => {
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email)
    }
    setErrors(newErrors)

    if (Object.values(newErrors).some(e => e !== '')) {
      setToast({ message: 'Please fix the errors in the form', type: 'error' })
      return
    }

    if (!isEmailJSConfigured) {
      setToast({ message: 'Contact form is currently unavailable. Please email us directly at prisellesourcing@gmail.com', type: 'error' })
      return
    }

    setIsSubmitting(true)

    try {
      const templateParams = {
        to_email: 'prisellesourcing@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        product: formData.product,
        quantity: formData.quantity,
        message: `[FREIGHT INQUIRY]\n\n${formData.message}`
      }

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      setIsSubmitted(true)
    } catch (error) {
      console.error('Error sending email:', error)
      setToast({ message: 'Sorry, there was an error sending your message. Please try again.', type: 'error' })
    } finally {
      setIsSubmitting(false)
    }
  }

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

  const inputStyle = (hasError) => ({
    height: '56px',
    border: hasError ? '2px solid #dc2626' : '2px solid rgba(255, 255, 255, 0.12)',
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    color: '#fff',
    fontSize: '16px',
    borderRadius: '12px',
  })

  const focusHandlers = {
    onFocus: (e) => {
      e.currentTarget.style.borderColor = 'var(--gl-teal-light)'
      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(74, 138, 142, 0.2)'
    },
    onBlur: (e) => {
      if (!e.currentTarget.value || !errors[e.currentTarget.name]) {
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)'
        e.currentTarget.style.boxShadow = 'none'
      }
    },
  }

  const contactCards = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      detail: 'prisellesourcing@gmail.com',
      href: 'mailto:prisellesourcing@gmail.com',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      detail: '+233 54 486 1154',
      href: 'tel:+233544861154',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Office',
      detail: 'Accra, Ghana',
      href: null,
    },
  ]

  return (
    <div className="freight-page">
      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />
      )}

      {/* ── HERO ── */}
      <section className="freight-contact-hero" ref={heroRef}>
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

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', maxWidth: 640, margin: '0 auto', padding: '4rem 0 2rem' }}>
            <motion.div
              className="freight-hero__badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={animationsReady ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="freight-hero__badge-dot" />
              Freight Inquiry
            </motion.div>

            <motion.h1
              className="freight-hero__title"
              style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)' }}
              initial={{ opacity: 0, y: 50 }}
              animate={animationsReady ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.4 }}
            >
              Get in Touch
            </motion.h1>

            <motion.p
              className="freight-hero__subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={animationsReady ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              Have a shipping inquiry? Send us your details and our freight team will get back to you within 24 hours.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── CONTACT CARDS ── */}
      <section className="freight-contact-cards" ref={cardsRef}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <motion.div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}
            className="freight-contact-cards__grid"
            initial="hidden"
            animate={cardsInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            {contactCards.map((card) => (
              <motion.div
                key={card.title}
                className="freight-contact-card"
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                <div className="freight-contact-card__icon">{card.icon}</div>
                <h3 className="freight-contact-card__title">{card.title}</h3>
                {card.href ? (
                  <a href={card.href} className="freight-contact-card__detail">{card.detail}</a>
                ) : (
                  <span className="freight-contact-card__detail">{card.detail}</span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section className="freight-contact-form" ref={formRef}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <motion.div
            initial="hidden"
            animate={formInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            {/* Freight indicator badge */}
            <motion.div variants={fadeUp} style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1.25rem',
                borderRadius: '9999px',
                background: 'rgba(74, 138, 142, 0.15)',
                border: '1px solid rgba(74, 138, 142, 0.25)',
                color: 'var(--gl-teal-light)',
                fontSize: '0.8rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 18h40" />
                  <path d="M4 18V10l8-4 8 4v8" />
                  <path d="M2 20c2-1 4-2 7-2s5 1 7 2 4 2 7 2" />
                </svg>
                Freight &amp; Logistics Division
              </span>
            </motion.div>

            {isSubmitted ? (
              <motion.div variants={fadeUp} style={{ textAlign: 'center', padding: '3rem 0' }}>
                <div style={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  background: 'rgba(5, 150, 105, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                }}>
                  <CheckCircle style={{ width: 40, height: 40, color: '#059669' }} />
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.75rem', color: '#fff', marginBottom: '0.75rem' }}>
                  Thank You!
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.75)', marginBottom: '0.5rem' }}>
                  We've received your freight inquiry.
                </p>
                <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.9rem', marginBottom: '2rem' }}>
                  Our freight team will respond within <strong style={{ color: '#fff' }}>24 hours</strong>.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false)
                    setFormData({ name: '', email: '', product: '', quantity: '', message: '' })
                  }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    background: 'transparent',
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                  }}
                >
                  <Send style={{ width: 16, height: 16 }} />
                  Submit Another Inquiry
                </button>
              </motion.div>
            ) : (
              <>
                <motion.div variants={fadeUp} style={{ marginBottom: '2rem' }}>
                  <h2 style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                    fontWeight: 400,
                    color: '#fff',
                    marginBottom: '0.75rem',
                  }}>
                    Send us your shipping details
                  </h2>
                  <p style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'rgba(255, 255, 255, 0.55)',
                    fontSize: '0.9rem',
                  }}>
                    <Clock style={{ width: 16, height: 16, color: 'var(--gl-teal-light)' }} />
                    We typically respond within 24 hours
                  </p>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div className="freight-form-row">
                      <div style={{ flex: 1 }}>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 500, color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.5rem' }}>Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          required
                          placeholder="Your full name"
                          className="freight-form-input"
                          style={inputStyle(errors.name)}
                          {...focusHandlers}
                        />
                        {errors.name && <p style={{ marginTop: 4, fontSize: '0.8rem', color: '#dc2626' }}>{errors.name}</p>}
                      </div>
                      <div style={{ flex: 1 }}>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 500, color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.5rem' }}>Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          required
                          placeholder="your@email.com"
                          className="freight-form-input"
                          style={inputStyle(errors.email)}
                          {...focusHandlers}
                        />
                        {errors.email && <p style={{ marginTop: 4, fontSize: '0.8rem', color: '#dc2626' }}>{errors.email}</p>}
                      </div>
                    </div>

                    <div className="freight-form-row">
                      <div style={{ flex: 1 }}>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 500, color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.5rem' }}>What are you shipping?</label>
                        <input
                          type="text"
                          name="product"
                          value={formData.product}
                          onChange={handleInputChange}
                          placeholder="e.g. Electronics, Furniture, etc."
                          className="freight-form-input"
                          style={inputStyle(false)}
                          {...focusHandlers}
                        />
                      </div>
                      <div style={{ flex: 1 }}>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 500, color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.5rem' }}>Estimated CBM</label>
                        <input
                          type="text"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleInputChange}
                          placeholder="e.g. 5 CBM"
                          className="freight-form-input"
                          style={inputStyle(false)}
                          {...focusHandlers}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 500, color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.5rem' }}>Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Tell us about your shipping requirements, destination (Accra/Kumasi), timeline, etc."
                        className="freight-form-input"
                        style={{
                          ...inputStyle(false),
                          height: 'auto',
                          padding: '1rem',
                        }}
                        onFocus={focusHandlers.onFocus}
                        onBlur={focusHandlers.onBlur}
                      />
                    </div>

                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="freight-hero__cta-primary"
                      style={{
                        width: '100%',
                        justifyContent: 'center',
                        marginTop: '0.5rem',
                        opacity: isSubmitting ? 0.6 : 1,
                        cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin" style={{ width: 20, height: 20 }} viewBox="0 0 24 24">
                            <circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Freight Inquiry
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14" />
                            <path d="M12 5l7 7-7 7" />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              </>
            )}
          </motion.div>
        </div>
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
