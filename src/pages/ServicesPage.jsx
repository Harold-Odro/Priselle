import { ShoppingCart, Package, CheckCircle, Globe, Users, Shield, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import ScrollReveal from '../components/ScrollReveal'

export default function ServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Product Sourcing and Trade Services",
    "provider": {
      "@type": "Organization",
      "name": "Priselle Sourcing and Trade"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Sourcing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Product Sourcing",
            "description": "Find the perfect manufacturers and suppliers for your products in China's vast marketplace"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Quality Control & Inspection",
            "description": "Comprehensive inspection and quality assurance services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Logistics & Shipping",
            "description": "End-to-end shipping solutions from China to your destination worldwide"
          }
        }
      ]
    }
  };

  const services = [
    {
      icon: ShoppingCart,
      title: "Product Sourcing",
      description: "Find the perfect manufacturers and suppliers for your products in China's vast marketplace with our extensive network.",
      features: [
        "Factory verification and assessment",
        "Competitive price negotiation",
        "Sample procurement and testing",
        "Supplier relationship management",
        "Market research and analysis",
        "Alternative supplier identification"
      ]
    },
    {
      icon: CheckCircle,
      title: "Quality Control & Inspection",
      description: "Ensure your products meet international standards with our comprehensive inspection and quality assurance services.",
      features: [
        "Pre-production sample approval",
        "During production monitoring",
        "Final random inspection",
        "Compliance verification",
        "Detailed quality reports",
        "Corrective action recommendations"
      ]
    },
    {
      icon: Package,
      title: "Logistics & Shipping",
      description: "Seamless end-to-end shipping solutions from China to your destination worldwide with full tracking and support.",
      features: [
        "Sea freight & air freight options",
        "Customs clearance assistance",
        "Real-time shipment tracking",
        "Insurance coverage options",
        "Consolidation services",
        "Warehouse storage solutions"
      ]
    }
  ]

  const whyChooseUs = [
    {
      icon: Globe,
      title: "Global Bridge",
      description: "Physical presence in both countries ensures seamless operations"
    },
    {
      icon: Users,
      title: "Bilingual Experts",
      description: "English & Chinese speaking team with 10+ years experience"
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "Every product inspected before shipping worldwide"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Always available across time zones for urgent needs"
    }
  ]

  return (
    <>
      <SEO
        title="Our Services | Priselle Sourcing and Trade"
        description="Comprehensive sourcing solutions including product sourcing, quality control & inspection, and logistics & shipping. Save up to 40% on procurement costs with our expert team."
        keywords="product sourcing services, quality control China, logistics shipping, factory verification, supplier management, China trade services"
        schema={schema}
      />
      <div className="min-h-screen" style={{ background: 'var(--color-background)' }}>
        {/* Header Section */}
        <section
          className="section-dark relative overflow-hidden py-24 sm:py-28 lg:py-36"
          data-dark-section
        >
          {/* Background Image */}
          <div className="absolute inset-0 opacity-20">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1080&fit=crop"
              alt="Services Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{background: 'linear-gradient(135deg, rgba(31, 63, 74, 0.85), rgba(47, 111, 115, 0.75))'}}></div>
          </div>

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 -left-40 w-96 h-96 rounded-full blur-3xl" style={{backgroundColor: 'rgba(95, 115, 100, 0.15)'}}></div>
            <div className="absolute bottom-0 -right-40 w-96 h-96 rounded-full blur-3xl" style={{backgroundColor: 'rgba(47, 111, 115, 0.2)'}}></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
                Our Services
              </h1>
              <p className="text-lg sm:text-xl" style={{color: 'rgba(255, 255, 255, 0.85)'}}>
                End-to-end B2B sourcing solutions connecting global businesses with China's manufacturing excellence
              </p>
            </div>
          </div>
        </section>

        {/* Main Services Section */}
        <section className="py-20 sm:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {services.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <ScrollReveal key={index} delay={index * 100}>
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                      <div>
                        <div className="flex items-center mb-6">
                          <div
                            className="w-14 h-14 rounded-xl flex items-center justify-center mr-4"
                            style={{
                              background: 'linear-gradient(145deg, var(--color-primary), var(--color-primary-light))'
                            }}
                          >
                            <IconComponent className="h-7 w-7 text-white" />
                          </div>
                          <h2 className="text-3xl sm:text-4xl" style={{color: 'var(--color-text)'}}>
                            {service.title}
                          </h2>
                        </div>

                        <p className="text-lg mb-8 leading-relaxed" style={{color: 'var(--color-text-light)'}}>
                          {service.description}
                        </p>

                        <div>
                          <h3 className="text-xl mb-4" style={{color: 'var(--color-text)', fontWeight: 600}}>
                            What's Included:
                          </h3>
                          <div className="space-y-3">
                            {service.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-start">
                                <CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" style={{color: 'var(--color-primary)'}} />
                                <span className="text-base" style={{color: 'var(--color-text-light)'}}>
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div
                        className="rounded-2xl p-8"
                        style={{
                          background: 'rgba(255, 255, 255, 0.7)',
                          border: '1px solid rgba(47, 111, 115, 0.1)',
                          backdropFilter: 'blur(10px)'
                        }}
                      >
                        <div
                          className="w-full h-64 rounded-xl flex items-center justify-center"
                          style={{background: 'linear-gradient(145deg, var(--color-primary-dark), var(--color-primary))'}}
                        >
                          <IconComponent className="h-24 w-24" style={{color: 'var(--color-accent-light)', opacity: 0.9}} />
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 sm:py-24 lg:py-32" style={{background: 'var(--color-background-alt)'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6" style={{color: 'var(--color-text)'}}>
                  Why Choose Priselle?
                </h2>
                <p className="text-lg max-w-3xl mx-auto" style={{color: 'var(--color-text-light)'}}>
                  We combine local expertise with global standards to deliver exceptional results
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <ScrollReveal key={index} delay={index * 100}>
                    <div
                      className="card p-8 rounded-2xl text-center transition-all duration-300 hover:shadow-xl group"
                    >
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-6"
                        style={{
                          background: 'linear-gradient(145deg, var(--color-primary), var(--color-primary-light))'
                        }}
                      >
                        <IconComponent className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-xl mb-3" style={{color: 'var(--color-text)', fontWeight: 600}}>
                        {item.title}
                      </h3>
                      <p className="text-base leading-relaxed" style={{color: 'var(--color-text-light)'}}>
                        {item.description}
                      </p>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="section-dark py-20 sm:py-24"
          data-dark-section
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
                Ready to Start Your Sourcing Journey?
              </h2>
              <p className="text-lg sm:text-xl mb-8" style={{color: 'rgba(255, 255, 255, 0.85)'}}>
                Get a free consultation and discover how we can help optimize your supply chain
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-10 py-4 text-white rounded-xl font-semibold text-base transition-all duration-200 shadow-lg hover:shadow-xl"
                  style={{backgroundColor: 'var(--color-accent)'}}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-accent-dark)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-accent)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Get Free Consultation
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center px-10 py-4 bg-transparent text-white rounded-xl font-semibold text-base transition-all duration-200"
                  style={{border: '2px solid rgba(255, 255, 255, 0.3)'}}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(95, 115, 100, 0.2)';
                    e.currentTarget.style.borderColor = 'var(--color-accent-light)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  }}
                >
                  View What We Source
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  )
}
