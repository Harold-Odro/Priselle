import { Mail, Phone, MapPin, Clock, HelpCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'

export default function ContactPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Priselle Sourcing and Trade",
      "email": "prisellesourcing@gmail.com",
      "telephone": "+86-130-0689-0774",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Accra",
        "addressCountry": "Ghana"
      }
    }
  };

  return (
    <>
      <SEO
        title="Contact Us | Get a Free Consultation | Priselle Sourcing"
        description="Contact Priselle Sourcing and Trade for expert sourcing advice. Email: prisellesourcing@gmail.com | Phone: +86-130-0689-0774. 24-hour response time guaranteed."
        keywords="contact sourcing company, China sourcing consultation, free sourcing quote, trade consultation"
        schema={schema}
      />
      <div className="min-h-screen bg-white">
        {/* Header Section */}
        <section className="relative bg-white py-16 sm:py-20 lg:py-24 overflow-hidden" style={{borderBottom: '1px solid var(--color-gray-200)'}}>
          {/* Background Image */}
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=1080&fit=crop"
              alt="Contact Background"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6" style={{color: 'var(--color-text)', fontWeight: 700}}>
                Contact Us
              </h1>
              <p className="text-lg sm:text-xl leading-relaxed" style={{color: 'var(--color-text-light)', fontWeight: 400}}>
                Interested in our sourcing services or need advice? Then please get in touch and we'll be glad to help.
              </p>
            </div>
          </div>
        </section>

        {/* Info Cards Section */}
        <section className="py-20 sm:py-24" style={{backgroundColor: 'var(--color-background-alt)'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* FAQs Card */}
              <div
                className="bg-white p-8 rounded-lg text-center transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-2"
                style={{border: '1px solid var(--color-gray-200)'}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-accent-light)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-gray-200)';
                }}
              >
                <div className="w-16 h-16 mx-auto mb-6">
                  <HelpCircle className="w-full h-full" style={{color: 'var(--color-accent)'}} />
                </div>
                <h3 className="text-xl mb-4" style={{color: 'var(--color-text)', fontWeight: 600}}>
                  FAQs
                </h3>
                <p className="mb-6" style={{color: 'var(--color-text-light)', fontWeight: 400}}>
                  For quick answers to common questions, try our FAQ first!
                </p>
                <Link
                  to="/faq"
                  className="inline-block font-medium transition-colors"
                  style={{color: 'var(--color-accent)', fontWeight: 600}}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-accent-dark)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--color-accent)';
                  }}
                >
                  Help Center
                </Link>
              </div>

              {/* Headquarters Card */}
              <div
                className="bg-white p-8 rounded-lg text-center transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-2"
                style={{border: '1px solid var(--color-gray-200)'}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-accent-light)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-gray-200)';
                }}
              >
                <div className="w-16 h-16 mx-auto mb-6">
                  <MapPin className="w-full h-full" style={{color: 'var(--color-accent)'}} />
                </div>
                <h3 className="text-xl mb-4" style={{color: 'var(--color-text)', fontWeight: 600}}>
                  Headquarters
                </h3>
                <p className="mb-2" style={{color: 'var(--color-text-light)', fontWeight: 400}}>
                  Priselle Sourcing and Trade
                </p>
                <p className="mb-6" style={{color: 'var(--color-text-light)', fontWeight: 400}}>
                  Accra, Ghana
                </p>
                <a
                  href="tel:+233544861154"
                  className="inline-block font-medium transition-colors"
                  style={{color: 'var(--color-accent)', fontWeight: 600}}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-accent-dark)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--color-accent)';
                  }}
                >
                  +233 54 486 1154
                </a>
              </div>

              {/* Working Hours Card */}
              <div
                className="bg-white p-8 rounded-lg text-center transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-2"
                style={{border: '1px solid var(--color-gray-200)'}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-accent-light)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-gray-200)';
                }}
              >
                <div className="w-16 h-16 mx-auto mb-6">
                  <Clock className="w-full h-full" style={{color: 'var(--color-accent)'}} />
                </div>
                <h3 className="text-xl mb-4" style={{color: 'var(--color-text)', fontWeight: 600}}>
                  Working hours
                </h3>
                <p className="mb-6" style={{color: 'var(--color-text-light)', fontWeight: 400}}>
                  Open Monday to Friday<br />
                  8AM - 6PM GMT
                </p>
                <Link
                  to="/faq"
                  className="inline-block font-medium transition-colors"
                  style={{color: 'var(--color-accent)', fontWeight: 600}}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-accent-dark)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--color-accent)';
                  }}
                >
                  Help Center
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 sm:py-24 lg:py-32 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-lg" style={{color: 'var(--color-text-light)', fontWeight: 400}}>
                You can also email us at{' '}
                <a
                  href="mailto:prisellesourcing@gmail.com"
                  className="font-medium transition-colors"
                  style={{color: 'var(--color-accent)', fontWeight: 600}}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-accent-dark)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--color-accent)';
                  }}
                >
                  prisellesourcing@gmail.com
                </a>
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 sm:p-10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1" style={{border: '1px solid var(--color-gray-200)'}}>
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="py-20 sm:py-24" style={{background: 'linear-gradient(135deg, var(--color-primary-dark), var(--color-primary))'}}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl text-white mb-4" style={{color: 'var(--color-accent-light)', fontWeight: 600}}>
              Let's get started
            </h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6" style={{fontWeight: 700}}>
              Are you ready for a better, more productive business?
            </h3>
            <p className="text-lg mb-8" style={{color: 'rgba(255, 255, 255, 0.9)', fontWeight: 400}}>
              Stop worrying about sourcing problems. Focus on your business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-4 text-white rounded-lg font-medium text-base transition-all duration-200 shadow-lg hover:shadow-xl"
              style={{backgroundColor: 'var(--color-accent)', fontWeight: 600}}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-accent-dark)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-accent)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Contact us Now
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}