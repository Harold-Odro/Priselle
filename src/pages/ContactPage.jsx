import { Mail, MapPin, Clock } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'
import Breadcrumb from '../components/Breadcrumb'
import PageHero from '../components/PageHero'

export default function ContactPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Priselle Sourcing and Trade",
      "email": "prisellesourcing@gmail.com",
      "telephone": ["+233-54-486-1154", "+86-130-0689-0774"],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Accra",
        "addressCountry": "Ghana"
      }
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <SEO
        title="Contact Us | Get a Free Consultation | Priselle Sourcing"
        description="Contact Priselle Sourcing and Trade for expert sourcing advice. Email: prisellesourcing@gmail.com | Phone: +86-130-0689-0774. 24-hour response time guaranteed."
        keywords="contact sourcing company, China sourcing consultation, free sourcing quote, trade consultation"
        schema={schema}
      />
      <>
        <PageHero
          badge="Get In Touch"
          title="Contact Us"
          subtitle="Interested in our sourcing services or need advice? Then please get in touch and we'll be glad to help."
          backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=1080&fit=crop"
        />

        {/* Breadcrumb */}
        <div style={{background: 'var(--color-background-alt)'}}>
          <Breadcrumb currentPage="Contact" />
        </div>

        {/* Info Cards Section */}
        <section className="pt-16 pb-20 sm:pt-20 sm:pb-24" style={{background: 'var(--color-background-alt)'}}>
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
        <section
          className="section-dark pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-20"
          data-dark-section
          style={{ backgroundColor: 'var(--color-primary-dark)', flex: 1 }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="card rounded-2xl p-8 sm:p-10 transition-all duration-300 hover:shadow-2xl">
              <ContactForm />
            </div>
          </div>
        </section>
      </>
    </div>
  )
}
