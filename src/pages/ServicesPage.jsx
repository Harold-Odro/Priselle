import { Search, FileCheck, Handshake, ShieldCheck, Package, CheckCircle, Globe, Users, Shield, Clock, ShoppingCart, Award, Warehouse, Plane, UserCheck } from 'lucide-react'
import SEO from '../components/SEO'
import ScrollReveal from '../components/ScrollReveal'
import Breadcrumb from '../components/Breadcrumb'
import PageHero from '../components/PageHero'
import SectionCTA from '../components/SectionCTA'

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
            "name": "Warehouse & Inventory Management",
            "description": "Secure storage, inventory tracking, and consolidation services in China"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Shipping and Logistics",
            "description": "End-to-end shipping solutions from China to your destination worldwide"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "China Concierge & Onboarding Services",
            "description": "On-the-ground support for business visitors and new arrivals in China"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Work Visa Support",
            "description": "Professional guidance and support for China work visa applications and renewals"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Quality Control & Repackaging",
            "description": "Comprehensive inspection and professional repackaging to meet your brand standards"
          }
        }
      ]
    }
  };

  const processSteps = [
    {
      step: 1,
      icon: Search,
      title: "Discovery",
      description: "Share your product requirements and we'll research the best options from our extensive supplier network.",
      benefit: "Tailored research",
      side: "left"
    },
    {
      step: 2,
      icon: FileCheck,
      title: "Assessment",
      description: "We verify suppliers, compare prices, and present top choices with detailed reports and recommendations.",
      benefit: "Vetted suppliers only",
      side: "right"
    },
    {
      step: 3,
      icon: Handshake,
      title: "Negotiation",
      description: "Expert negotiation to secure the best terms, pricing, and payment conditions for your business.",
      benefit: "Best prices guaranteed",
      side: "left"
    },
    {
      step: 4,
      icon: ShieldCheck,
      title: "Quality Control",
      description: "Rigorous inspection before and during production ensures your products meet international standards.",
      benefit: "100% quality assured",
      side: "right"
    },
    {
      step: 5,
      icon: Package,
      title: "Logistics",
      description: "End-to-end shipping coordination with real-time tracking and customs support for smooth delivery.",
      benefit: "Full transparency",
      side: "left"
    },
    {
      step: 6,
      icon: CheckCircle,
      title: "Delivery",
      description: "Products arrive at your doorstep on time, with continued support for any post-delivery needs.",
      benefit: "On-time guarantee",
      side: "right"
    }
  ]

  const services = [
    {
      icon: ShoppingCart,
      title: "Product Sourcing",
      description: "Find the perfect manufacturers and suppliers for your products in China's vast marketplace with our extensive network of verified partners.",
      features: [
        "Factory verification and assessment",
        "Competitive price negotiation",
        "Sample procurement and testing",
        "Supplier relationship management"
      ],
    },
    {
      icon: Warehouse,
      title: "Warehouse & Inventory Management",
      description: "Secure storage and inventory management in China. We consolidate shipments, track stock levels, and prepare orders for dispatch.",
      features: [
        "Secure warehouse facilities",
        "Inventory tracking and reporting",
        "Order consolidation and batching",
        "Stock level monitoring"
      ]
    },
    {
      icon: Plane,
      title: "Shipping and Logistics",
      description: "Seamless end-to-end shipping solutions from China to your destination worldwide with full tracking and support.",
      features: [
        "Sea freight & air freight options",
        "Customs clearance assistance",
        "Real-time shipment tracking",
      ]
    },
    {
      icon: Handshake,
      title: "China Concierge & Onboarding Services",
      description: "On-the-ground support for business visitors and new arrivals in China — from airport pickup to factory tours and city orientation.",
      features: [
        "Airport pickup and accommodation",
        "Factory and supplier visit coordination",
        "Translation and interpretation",
        "City orientation and settling-in support"
      ]
    },
    {
      icon: UserCheck,
      title: "Work Visa Support",
      description: "Professional guidance and support for China work visa applications, renewals, and documentation to help you work legally in China.",
      features: [
        "Work permit application support",
        "Visa renewal assistance",
        "Document preparation & review",
      ]
    },
    {
      icon: ShieldCheck,
      title: "Quality Control & Repackaging",
      description: "Comprehensive quality inspection at every production stage with professional repackaging to meet your brand and export standards.",
      features: [
        "Pre-production sample approval",
        "During production monitoring",
        "Final random inspection",
        "Repackaging and labeling"
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
      description: "English & Chinese speaking team"
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
        description="Comprehensive sourcing solutions including product sourcing, warehouse management, shipping & logistics, China concierge, work visa support, and quality control & repackaging."
        keywords="product sourcing services, warehouse management China, logistics shipping, factory verification, supplier management, China trade services, work visa China, quality control"
        schema={schema}
      />
      <div style={{ background: 'var(--color-background)' }}>
        <PageHero
          badge="What We Offer"
          title="Our Services"
          subtitle="End-to-end B2B sourcing solutions connecting global businesses with China's manufacturing excellence"
          backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1080&fit=crop"
        />

        {/* Breadcrumb */}
        <Breadcrumb currentPage="Services" />

        {/* Process Timeline Section */}
        <section className="py-20 sm:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4" style={{color: 'var(--color-text)'}}>
                  Your Sourcing Journey
                </h2>
                <p className="text-lg max-w-2xl mx-auto" style={{color: 'var(--color-text-light)'}}>
                  From initial inquiry to doorstep delivery — here's how we bring your products to life
                </p>
              </div>
            </ScrollReveal>

            {/* Timeline */}
            <div className="relative">
              {/* Desktop Timeline Line */}
              <div
                className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
                style={{backgroundColor: 'var(--color-border)'}}
              ></div>

              {/* Mobile Timeline Line */}
              <div
                className="lg:hidden absolute left-6 top-0 bottom-0 w-0.5"
                style={{backgroundColor: 'var(--color-border)'}}
              ></div>

              {/* Process Steps */}
              <div className="space-y-12 lg:space-y-16">
                {processSteps.map((step, index) => {
                  const Icon = step.icon
                  const isLeft = step.side === 'left'

                  return (
                    <ScrollReveal key={index} delay={index * 100}>
                      <div className={`relative flex items-start gap-6 lg:gap-0 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                        {/* Mobile Step Badge */}
                        <div
                          className="lg:hidden flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-semibold z-10"
                          style={{backgroundColor: 'var(--color-primary)'}}
                        >
                          {step.step}
                        </div>

                        {/* Content Card */}
                        <div className={`flex-1 lg:w-5/12 ${isLeft ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`}>
                          <div
                            className="card rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 group"
                            style={{backgroundColor: 'rgba(255, 255, 255, 0.95)'}}
                          >
                            <div className={`flex items-center gap-4 mb-4 ${isLeft ? 'lg:flex-row-reverse' : ''}`}>
                              <div
                                className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                                style={{background: 'linear-gradient(145deg, var(--color-primary), var(--color-primary-light))'}}
                              >
                                <Icon className="h-7 w-7 text-white" />
                              </div>
                              <div className={isLeft ? 'lg:text-right' : ''}>
                                <h3 className="text-xl font-semibold" style={{color: 'var(--color-text)'}}>
                                  {step.title}
                                </h3>
                                <span className="text-sm hidden lg:inline" style={{color: 'var(--color-primary)'}}>
                                  Step {step.step}
                                </span>
                              </div>
                            </div>
                            <p className={`mb-4 leading-relaxed ${isLeft ? 'lg:text-right' : ''}`} style={{color: 'var(--color-text-light)'}}>
                              {step.description}
                            </p>
                            <div
                              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm ${isLeft ? 'lg:ml-auto' : ''}`}
                              style={{backgroundColor: 'rgba(47, 111, 115, 0.1)', color: 'var(--color-primary)'}}
                            >
                              <span className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: 'var(--color-primary)'}}></span>
                              {step.benefit}
                            </div>
                          </div>
                        </div>

                        {/* Desktop Center Step Badge */}
                        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                          <div
                            className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-semibold shadow-lg z-10"
                            style={{backgroundColor: 'var(--color-primary)'}}
                          >
                            {step.step}
                          </div>
                        </div>

                        {/* Desktop Spacer */}
                        <div className="hidden lg:block lg:w-5/12"></div>
                      </div>
                    </ScrollReveal>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Service Details - Bento Grid */}
        <section className="py-20 sm:py-24 lg:py-32" style={{background: 'var(--color-background-alt)'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4" style={{color: 'var(--color-text)'}}>
                  Our Core Services
                </h2>
                <p className="text-lg max-w-2xl mx-auto" style={{color: 'var(--color-text-light)'}}>
                  Comprehensive solutions designed to streamline your sourcing experience
                </p>
              </div>
            </ScrollReveal>

            {/* Bento Grid - 3 columns for 6 services */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon

                return (
                  <ScrollReveal key={index} delay={index * 100}>
                    <div
                      className="card rounded-2xl p-8 hover:shadow-xl transition-all duration-300 h-full group"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      }}
                    >
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                        style={{
                          background: 'linear-gradient(145deg, var(--color-primary), var(--color-primary-light))'
                        }}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3
                        className="text-xl mb-3"
                        style={{
                          color: 'var(--color-text)',
                          fontWeight: 600
                        }}
                      >
                        {service.title}
                      </h3>
                      <p
                        className="leading-relaxed mb-6"
                        style={{
                          color: 'var(--color-text-light)'
                        }}
                      >
                        {service.description}
                      </p>

                      {/* Features List */}
                      <div className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-2">
                            <CheckCircle
                              className="h-5 w-5 flex-shrink-0 mt-0.5"
                              style={{color: 'var(--color-primary)'}}
                            />
                            <span
                              className="text-sm"
                              style={{color: 'var(--color-text-light)'}}
                            >
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section - Split Layout */}
        <section className="py-20 sm:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <ScrollReveal>
                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6" style={{color: 'var(--color-text)'}}>
                    Why Choose Priselle?
                  </h2>
                  <p className="text-lg mb-8" style={{color: 'var(--color-text-light)'}}>
                    We combine local expertise with global standards to deliver exceptional results for your business
                  </p>
                  <div className="space-y-4">
                    {whyChooseUs.map((item, index) => {
                      const IconComponent = item.icon
                      return (
                        <div
                          key={index}
                          className="flex items-start gap-4 p-4 rounded-xl transition-all duration-200 hover:bg-white/70 group cursor-default"
                        >
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                            style={{background: 'linear-gradient(145deg, var(--color-primary), var(--color-primary-light))'}}
                          >
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1" style={{color: 'var(--color-text)'}}>
                              {item.title}
                            </h3>
                            <p className="text-sm" style={{color: 'var(--color-text-light)'}}>
                              {item.description}
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="relative">
                  <div className="grid grid-cols-2 gap-6">
                    <img
                      src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=500&fit=crop"
                      alt="Quality inspection process"
                      className="rounded-xl shadow-lg w-full h-64 object-cover"
                      width={400}
                      height={500}
                    />
                    <img
                      src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&h=500&fit=crop"
                      alt="Warehouse and logistics"
                      className="rounded-xl shadow-lg w-full h-64 object-cover mt-8"
                      width={400}
                      height={500}
                    />
                  </div>

                  {/* Floating Stats Card */}
                  <div
                    className="absolute -bottom-6 left-1/2 -translate-x-1/2 p-5 rounded-xl shadow-2xl flex items-center gap-4"
                    style={{backgroundColor: 'white'}}
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{background: 'linear-gradient(145deg, var(--color-primary), var(--color-primary-light))'}}
                    >
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-semibold" style={{color: 'var(--color-primary)'}}>50+</div>
                      <div className="text-sm" style={{color: 'var(--color-text-light)'}}>Vetted Suppliers</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <SectionCTA
          icon={Award}
          heading="Ready to Start Your Sourcing Journey?"
          subtitle="Get a free consultation and discover how we can help optimize your supply chain"
          primaryLink="/sourcing/contact"
          primaryLabel="Get a Free Quote"
          secondaryLink="/sourcing/products"
          secondaryLabel="View What We Source"
        />
      </div>
    </>
  )
}
