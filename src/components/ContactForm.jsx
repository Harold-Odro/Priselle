import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Clock, CheckCircle, Send } from 'lucide-react'
import Toast from './Toast'

export default function ContactForm() {
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
  const [isProductHighlighted, setIsProductHighlighted] = useState(false)
  const [toast, setToast] = useState(null)
  const [isEmailJSConfigured, setIsEmailJSConfigured] = useState(true)
  const productInputRef = useRef(null)

  // Email validation regex
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  // Validate a single field
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

  // Validate EmailJS environment variables on mount
  useEffect(() => {
    const requiredEnvVars = [
      'VITE_EMAILJS_SERVICE_ID',
      'VITE_EMAILJS_TEMPLATE_ID',
      'VITE_EMAILJS_PUBLIC_KEY'
    ]

    const missing = requiredEnvVars.filter(
      key => !import.meta.env[key]
    )

    if (missing.length > 0) {
      console.error('Missing required EmailJS environment variables:', missing)
      setIsEmailJSConfigured(false)
    }
  }, [])

  // Check sessionStorage for product info when component mounts
  useEffect(() => {
    const savedProduct = sessionStorage.getItem('selectedProduct')

    if (savedProduct) {
      setFormData(prev => ({
        ...prev,
        product: savedProduct
      }))

      // Clear sessionStorage after using
      sessionStorage.removeItem('selectedProduct')

      // Add visual feedback to the product field (state-driven)
      setTimeout(() => {
        setIsProductHighlighted(true)
        productInputRef.current?.focus()

        setTimeout(() => {
          setIsProductHighlighted(false)
        }, 2000)
      }, 300)
    }
  }, [])

  const showToast = (message, type = 'info') => {
    setToast({ message, type })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    const error = validateField(name, value)
    setErrors(prev => ({ ...prev, [name]: error }))
  }

  const handleSubmit = async () => {
    // Validate all required fields
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email)
    }

    setErrors(newErrors)

    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some(error => error !== '')
    if (hasErrors) {
      showToast('Please fix the errors in the form', 'error')
      return
    }

    // Check if EmailJS is configured
    if (!isEmailJSConfigured) {
      showToast('Contact form is currently unavailable. Please email us directly at prisellesourcing@gmail.com', 'error')
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
        message: formData.message
      }

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      // Show success state instead of toast
      setIsSubmitted(true)
    } catch (error) {
      console.error('Error sending email:', error)
      showToast('Sorry, there was an error sending your message. Please try again.', 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <div className="p-8 rounded-2xl" style={{backgroundColor: 'var(--color-background-alt)'}}>
        {isSubmitted ? (
          /* Success Card */
          <div className="text-center py-8">
            <div
              className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
              style={{backgroundColor: 'rgba(5, 150, 105, 0.1)'}}
            >
              <CheckCircle className="h-10 w-10" style={{color: 'var(--color-success)'}} />
            </div>
            <h3 className="text-2xl mb-3" style={{color: 'var(--color-text)', fontWeight: 700}}>
              Thank You!
            </h3>
            <p className="text-lg mb-2" style={{color: 'var(--color-text)'}}>
              We've received your inquiry.
            </p>
            <p className="mb-6" style={{color: 'var(--color-text-light)'}}>
              Our team will respond within <strong>4 business hours</strong>.
            </p>
            <p className="text-sm mb-8" style={{color: 'var(--color-text-muted)'}}>
              Check your email for a confirmation.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false)
                setFormData({
                  name: '',
                  email: '',
                  product: '',
                  quantity: '',
                  message: ''
                })
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200"
              style={{
                backgroundColor: 'transparent',
                border: '2px solid var(--color-primary)',
                color: 'var(--color-primary)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--color-primary)';
              }}
            >
              <Send className="h-4 w-4" />
              Submit Another Inquiry
            </button>
          </div>
        ) : (
          /* Contact Form */
          <>
        <h3 className="text-2xl mb-4" style={{color: 'var(--color-text)', fontWeight: 700}}>Send us your requirements</h3>
        <p className="text-sm mb-6 flex items-center gap-2" style={{color: 'var(--color-text-light)'}}>
          <Clock className="h-4 w-4" style={{color: 'var(--color-primary)'}} />
          We typically respond within 4 business hours
        </p>
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium mb-2" style={{color: 'var(--color-text)', fontWeight: 500}}>Name *</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                onBlur={handleBlur}
                required
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className="w-full px-4 rounded-lg transition-all duration-200 bg-white"
                style={{
                  height: '56px',
                  border: errors.name ? '2px solid #dc2626' : '2px solid var(--color-gray-200)',
                  color: 'var(--color-text)',
                  fontSize: '16px'
                }}
                onFocus={(e) => {
                  if (!errors.name) {
                    e.currentTarget.style.borderColor = 'var(--color-accent)';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(184, 134, 11, 0.1)';
                  }
                }}
                placeholder="Your full name"
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-sm" style={{ color: '#dc2626' }}>{errors.name}</p>
              )}
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium mb-2" style={{color: 'var(--color-text)', fontWeight: 500}}>Email *</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                onBlur={handleBlur}
                required
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className="w-full px-4 rounded-lg transition-all duration-200 bg-white"
                style={{
                  height: '56px',
                  border: errors.email ? '2px solid #dc2626' : '2px solid var(--color-gray-200)',
                  color: 'var(--color-text)',
                  fontSize: '16px'
                }}
                onFocus={(e) => {
                  if (!errors.email) {
                    e.currentTarget.style.borderColor = 'var(--color-accent)';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(184, 134, 11, 0.1)';
                  }
                }}
                placeholder="your@email.com"
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm" style={{ color: '#dc2626' }}>{errors.email}</p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-product" className="block text-sm font-medium mb-2" style={{color: 'var(--color-text)', fontWeight: 500}}>Product Category</label>
              <input
                id="contact-product"
                ref={productInputRef}
                type="text"
                name="product"
                value={formData.product}
                onChange={handleInputChange}
                className="w-full px-4 rounded-lg transition-all duration-200"
                style={{
                  height: '56px',
                  border: isProductHighlighted ? '2px solid var(--color-accent)' : '2px solid var(--color-gray-200)',
                  backgroundColor: isProductHighlighted ? 'var(--color-background-accent)' : 'white',
                  boxShadow: isProductHighlighted ? '0 0 0 4px rgba(184, 134, 11, 0.2)' : 'none',
                  color: 'var(--color-text)',
                  fontSize: '16px'
                }}
                onFocus={(e) => {
                  if (!isProductHighlighted) {
                    e.currentTarget.style.borderColor = 'var(--color-accent)';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(184, 134, 11, 0.1)';
                  }
                }}
                onBlur={(e) => {
                  if (!isProductHighlighted) {
                    e.currentTarget.style.borderColor = 'var(--color-gray-200)';
                    e.currentTarget.style.boxShadow = 'none';
                  }
                }}
                placeholder="Electronics, Textiles, etc."
              />
            </div>
            <div>
              <label htmlFor="contact-quantity" className="block text-sm font-medium mb-2" style={{color: 'var(--color-text)', fontWeight: 500}}>Quantity</label>
              <input
                id="contact-quantity"
                type="text"
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                className="w-full px-4 rounded-lg transition-all duration-200 bg-white"
                style={{
                  height: '56px',
                  border: '2px solid var(--color-gray-200)',
                  color: 'var(--color-text)',
                  fontSize: '16px'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-accent)';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(184, 134, 11, 0.1)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-gray-200)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                placeholder="Order quantity"
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium mb-2" style={{color: 'var(--color-text)', fontWeight: 500}}>Message</label>
            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 rounded-lg transition-all duration-200 bg-white"
              style={{
                border: '2px solid var(--color-gray-200)',
                color: 'var(--color-text)',
                fontSize: '16px'
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-accent)';
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(184, 134, 11, 0.1)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-gray-200)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              placeholder="Tell us more about your requirements..."
            ></textarea>
          </div>

          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full px-6 rounded-lg font-semibold text-center transition-all duration-200 shadow-lg flex items-center justify-center text-white"
            style={{
              height: '56px',
              backgroundColor: isSubmitting ? 'var(--color-gray-300)' : 'var(--color-primary)',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              fontWeight: 600,
              letterSpacing: '0.03em',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.15)'
            }}
            onMouseEnter={(e) => {
              if (!isSubmitting) {
                e.currentTarget.style.backgroundColor = 'var(--color-primary-dark)';
                e.currentTarget.style.transform = 'scale(1.02)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isSubmitting) {
                e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                e.currentTarget.style.transform = 'scale(1)';
              }
            }}
          >
            {isSubmitting && (
              <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
              </svg>
            )}
            {isSubmitting ? 'Sending...' : 'Send Inquiry'}
          </button>
        </div>
          </>
        )}
      </div>
    </>
  )
}