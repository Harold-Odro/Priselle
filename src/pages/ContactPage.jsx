import { Mail, MapPin, Phone } from 'lucide-react'
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
      "name": "Priselle Sourcing & Trade",
      "parentOrganization": {
        "@type": "Organization",
        "name": "Priselle Holdings",
        "url": "https://priselleholdings.com"
      },
      "email": "info@priselleholdings.com",
      "telephone": ["+233-54-486-1154", "+86-130-0689-0774"],
      "address": [
        {
          "@type": "PostalAddress",
          "addressLocality": "Accra",
          "addressCountry": "Ghana"
        },
        {
          "@type": "PostalAddress",
          "addressLocality": "Guangzhou",
          "addressCountry": "China"
        },
        {
          "@type": "PostalAddress",
          "addressLocality": "Foshan",
          "addressCountry": "China"
        }
      ]
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <SEO
        title="Contact Priselle Sourcing & Trade | Free Consultation"
        description="Get in touch with Priselle Sourcing & Trade — the sourcing arm of Priselle Holdings. Email info@priselleholdings.com or call +233 54 486 1154. 24-hour response time."
        keywords="contact Priselle, China sourcing consultation, free sourcing quote, Priselle Holdings contact"
        siteName="Priselle Sourcing & Trade"
        canonicalUrl="https://priselleholdings.com/sourcing/contact"
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
                  href="mailto:info@priselleholdings.com"
                  className="inline-block font-semibold transition-colors"
                  style={{color: 'var(--color-primary)'}}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary-dark)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                >
                  info@priselleholdings.com →
                </a>
              </div>

              {/* Location Card */}
              <div className="card p-8 rounded-2xl text-center transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-2">
                <div
                  className="w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center"
                  style={{background: 'linear-gradient(145deg, var(--color-primary), var(--color-primary-light))'}}
                >
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-4" style={{color: 'var(--color-text)', fontWeight: 600}}>
                  Location
                </h3>
                <p className="mb-2" style={{color: 'var(--color-text-light)'}}>
                  Accra, Ghana
                </p>
                <p className="mb-2" style={{color: 'var(--color-text-light)'}}>
                  Guangzhou, China
                </p>
                <p className="mb-6" style={{color: 'var(--color-text-light)'}}>
                  Foshan, China
                </p>
              </div>

              {/* WhatsApp & Call Card */}
              <div className="card p-8 rounded-2xl text-center transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-2">
                <div
                  className="w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center"
                  style={{background: 'linear-gradient(145deg, var(--color-primary), var(--color-primary-light))'}}
                >
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-4" style={{color: 'var(--color-text)', fontWeight: 600}}>
                  WhatsApp Us
                </h3>
                <p className="mb-4" style={{color: 'var(--color-text-light)'}}>
                  <a
                    href="https://wa.me/233544861154"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold transition-colors"
                    style={{color: 'var(--color-primary)'}}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary-dark)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                  >
                    +233 54 486 1154 →
                  </a>
                </p>
                <p style={{color: 'var(--color-text-light)'}}>
                  Or call us on{' '}
                  <a
                    href="tel:+8613006890774"
                    className="font-semibold transition-colors"
                    style={{color: 'var(--color-primary)'}}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary-dark)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                  >
                    +86 130 0689 0774
                  </a>
                </p>
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
