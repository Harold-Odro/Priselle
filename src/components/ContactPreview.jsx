import { Mail, Phone, MapPin, CheckCircle, Send } from 'lucide-react'
import { Link } from 'react-router-dom'
import ScrollReveal from './ScrollReveal'

export default function ContactPreview() {
  const benefits = [
    "Free initial consultation",
    "24-hour response time",
    "No upfront fees",
    "Transparent pricing"
  ]

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "prisellesourcing@gmail.com",
      action: "mailto:prisellesourcing@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+233 54 486 1154",
      action: "tel:+233544861154"
    },
    {
      icon: MapPin,
      label: "Office",
      value: "Accra, Ghana",
      action: null
    }
  ]

  return (
    <section className="py-20 sm:py-24 lg:py-32" style={{backgroundColor: 'var(--color-background-alt)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg mb-6" style={{backgroundColor: 'var(--color-background-accent)', border: '1px solid var(--color-accent-light)'}}>
              <Send className="h-4 w-4" style={{color: 'var(--color-accent)'}} />
              <span className="text-sm font-semibold uppercase tracking-wider" style={{color: 'var(--color-accent-dark)', fontWeight: 600, letterSpacing: '0.05em'}}>Get In Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6" style={{color: 'var(--color-text)', fontWeight: 700}}>
              Ready to Start Sourcing?
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{color: 'var(--color-text-light)', fontWeight: 400}}>
              Contact us today for a free consultation. Let's discuss how we can help your business grow.
            </p>
          </div>
        </ScrollReveal>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Cards */}
          <div className="space-y-8">
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon
              return (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="bg-white p-8 rounded-xl hover:shadow-lg transition-all duration-300 group" style={{border: '1px solid var(--color-gray-200)'}}>
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300" style={{backgroundColor: 'var(--color-background-accent)'}}>
                        <IconComponent className="h-6 w-6" style={{color: 'var(--color-accent)'}} />
                      </div>
                      <div>
                        <div className="mb-1" style={{color: 'var(--color-text)', fontWeight: 600}}>{contact.label}</div>
                        {contact.action ? (
                          <a
                            href={contact.action}
                            className="transition-colors"
                            style={{color: 'var(--color-accent)', fontWeight: 500}}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent-dark)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <div style={{color: 'var(--color-text-light)', fontWeight: 400}}>{contact.value}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}

            {/* Why work with us */}
            <ScrollReveal delay={300}>
              <div className="bg-white p-8 rounded-xl" style={{border: '1px solid var(--color-gray-200)'}}>
                <h4 className="text-xl mb-6" style={{color: 'var(--color-text)', fontWeight: 600}}>What You Get</h4>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0" style={{color: 'var(--color-success)'}} />
                      <span style={{color: 'var(--color-text-light)', fontWeight: 400}}>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: CTA Card */}
          <ScrollReveal delay={400}>
            <div className="p-10 sm:p-12 rounded-2xl shadow-lg text-white flex flex-col justify-center h-full" style={{background: 'linear-gradient(135deg, var(--color-primary-dark), var(--color-primary))'}}>
              <h3 className="text-3xl sm:text-4xl mb-4" style={{fontWeight: 700}}>
                Let's Discuss Your Project
              </h3>
              <p className="mb-8 text-lg leading-relaxed" style={{color: 'rgba(255, 255, 255, 0.9)', fontWeight: 400}}>
                Get a free consultation and detailed proposal tailored to your specific sourcing needs. No obligations, just expert advice.
              </p>

              <div className="space-y-4">
                <Link
                  to="/contact"
                  className="block w-full text-center px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg"
                  style={{backgroundColor: 'var(--color-accent)', color: 'white', fontWeight: 600}}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-accent-dark)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-accent)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Request Quote
                </Link>

                <Link
                  to="/services"
                  className="block w-full text-center text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200"
                  style={{border: '2px solid rgba(255, 255, 255, 0.3)', fontWeight: 600, color: 'white'}}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'}
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}