import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import Toast from './Toast'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    product: '',
    quantity: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isProductHighlighted, setIsProductHighlighted] = useState(false)
  const [toast, setToast] = useState(null)
  const [isEmailJSConfigured, setIsEmailJSConfigured] = useState(true)
  const productInputRef = useRef(null)

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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async () => {
    // Validate required fields
    if (!formData.name || !formData.email) {
      showToast('Please fill in required fields (Name and Email)', 'error')
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

      showToast('Thank you for your inquiry! We will contact you within 24 hours.', 'success')

      // Reset form
      setFormData({
        name: '',
        email: '',
        product: '',
        quantity: '',
        message: ''
      })
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
        <h3 className="text-2xl mb-6" style={{color: 'var(--color-text)', fontWeight: 700}}>Send us your requirements</h3>
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2" style={{color: 'var(--color-text)', fontWeight: 500}}>Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
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
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" style={{color: 'var(--color-text)', fontWeight: 500}}>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
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
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2" style={{color: 'var(--color-text)', fontWeight: 500}}>Product Category</label>
              <input
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
              <label className="block text-sm font-medium mb-2" style={{color: 'var(--color-text)', fontWeight: 500}}>Quantity</label>
              <input
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
            <label className="block text-sm font-medium mb-2" style={{color: 'var(--color-text)', fontWeight: 500}}>Message</label>
            <textarea
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
              backgroundColor: isSubmitting ? 'var(--color-gray-300)' : 'var(--color-accent)',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              fontWeight: 600
            }}
            onMouseEnter={(e) => {
              if (!isSubmitting) {
                e.currentTarget.style.backgroundColor = 'var(--color-accent-dark)';
                e.currentTarget.style.transform = 'scale(1.02)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isSubmitting) {
                e.currentTarget.style.backgroundColor = 'var(--color-accent)';
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
      </div>
    </>
  )
}