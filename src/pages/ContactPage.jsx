import { Mail, Phone, MapPin, Clock } from 'lucide-react'
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
      <div className="min-h-screen" style={{ background: 'var(--color-background)' }}>
        {/* Header Section */}
        <section
          className="section-dark relative py-24 sm:py-28 lg:py-36 overflow-hidden"
          data-dark-section
        >
          {/* Background Image */}
          <div className="absolute inset-0 opacity-15">
            <img
              src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=1080&fit=crop"
              alt="Contact Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{background: 'linear-gradient(135deg, rgba(31, 63, 74, 0.9), rgba(47, 111, 115, 0.8))'}}></div>
          </div>

          {/* Glow effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 -left-40 w-96 h-96 rounded-full blur-3xl" style={{backgroundColor: 'rgba(95, 115, 100, 0.15)'}}></div>
            <div className="absolute bottom-0 -right-40 w-96 h-96 rounded-full blur-3xl" style={{backgroundColor: 'rgba(47, 111, 115, 0.2)'}}></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
                Contact Us
              </h1>
              <p className="text-lg sm:text-xl leading-relaxed" style={{color: 'rgba(255, 255, 255, 0.85)'}}>
                Interested in our sourcing services or need advice? Then please get in touch and we'll be glad to help.
              </p>
            </div>
          </div>
        </section>

        {/* Info Cards Section */}
        <section className="py-20 sm:py-24" style={{background: 'var(--color-background-alt)'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Quick Contact Card */}
              <div className="card p-8 rounded-2xl text-center transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-2">
                <div
                  className="w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center"
                  style={{background: 'linear-gradient(145deg, var(--color-primary), var(--color-primary-light))'}}
                >
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-4" style={{color: 'var(--color-text)', fontWeight: 600}}>
                  Email Us
                </h3>
                <p className="mb-6" style={{color: 'var(--color-text-light)'}}>
                  Send us your inquiry and we'll respond within 24 hours
                </p>
                <a
                  href="mailto:prisellesourcing@gmail.com"
                  className="inline-block font-semibold transition-colors"
                  style={{color: 'var(--color-primary)'}}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary-dark)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                >
                  prisellesourcing@gmail.com →
                </a>
              </div>

              {/* Headquarters Card */}
              <div className="card p-8 rounded-2xl text-center transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-2">
                <div
                  className="w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center"
                  style={{background: 'linear-gradient(145deg, var(--color-primary), var(--color-primary-light))'}}
                >
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-4" style={{color: 'var(--color-text)', fontWeight: 600}}>
                  Headquarters
                </h3>
                <p className="mb-2" style={{color: 'var(--color-text-light)'}}>
                  Priselle Sourcing and Trade
                </p>
                <p className="mb-6" style={{color: 'var(--color-text-light)'}}>
                  Accra, Ghana
                </p>
                <a
                  href="tel:+233544861154"
                  className="inline-block font-semibold transition-colors"
                  style={{color: 'var(--color-primary)'}}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary-dark)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                >
                  +233 54 486 1154 →
                </a>
              </div>

              {/* Working Hours Card */}
              <div className="card p-8 rounded-2xl text-center transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-2">
                <div
                  className="w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center"
                  style={{background: 'linear-gradient(145deg, var(--color-primary), var(--color-primary-light))'}}
                >
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-4" style={{color: 'var(--color-text)', fontWeight: 600}}>
                  Working hours
                </h3>
                <p className="mb-6" style={{color: 'var(--color-text-light)'}}>
                  Available 24/7<br />
                  We're always here to help
                </p>
                <a
                  href="mailto:prisellesourcing@gmail.com"
                  className="inline-block font-semibold transition-colors"
                  style={{color: 'var(--color-primary)'}}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary-dark)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                >
                  Email Us →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 sm:py-24 lg:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-lg" style={{color: 'var(--color-text-light)'}}>
                You can also email us at{' '}
                <a
                  href="mailto:prisellesourcing@gmail.com"
                  className="font-semibold transition-colors"
                  style={{color: 'var(--color-primary)'}}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary-dark)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                >
                  prisellesourcing@gmail.com
                </a>
              </p>
            </div>

            <div className="card rounded-2xl p-8 sm:p-10 transition-all duration-300 hover:shadow-2xl">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Explore More Section */}
        <section
          className="section-dark py-16 sm:py-20"
          data-dark-section
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl text-white mb-8 text-center" style={{fontWeight: 600}}>
              Explore More
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Link
                to="/services"
                className="group p-8 rounded-2xl text-center transition-all duration-300 hover:scale-105"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <h3 className="text-xl text-white mb-3" style={{fontWeight: 600}}>Our Services</h3>
                <p className="text-sm mb-4" style={{color: 'rgba(255, 255, 255, 0.7)'}}>
                  Learn about our sourcing, quality control, and logistics services
                </p>
                <span className="text-sm font-semibold" style={{color: 'var(--color-accent-light)'}}>
                  View Services →
                </span>
              </Link>
              <Link
                to="/products"
                className="group p-8 rounded-2xl text-center transition-all duration-300 hover:scale-105"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <h3 className="text-xl text-white mb-3" style={{fontWeight: 600}}>Our Portfolio</h3>
                <p className="text-sm mb-4" style={{color: 'rgba(255, 255, 255, 0.7)'}}>
                  Explore the industries and products we source from China
                </p>
                <span className="text-sm font-semibold" style={{color: 'var(--color-accent-light)'}}>
                  View Portfolio →
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
