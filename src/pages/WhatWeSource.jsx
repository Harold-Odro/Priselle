import { Smartphone, Home as HomeIcon, Bath, Wrench, Gamepad2, Briefcase, Package, ArrowRight, CheckCircle2, Globe2, Star, Zap } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import Breadcrumb from '../components/Breadcrumb'
import AnimatedCounter from '../components/AnimatedCounter'

const categories = [
  {
    icon: Package,
    title: "Custom Solutions",
    description: "Don't see your category? We source anything your business needs with tailored solutions and dedicated support.",
    features: [
      "Personalized sourcing strategy",
      "Dedicated account manager",
      "Custom product development",
      "Flexible MOQ negotiation"
    ],
    featured: true
  },
  {
    icon: Smartphone,
    title: "Electronics & Technology",
    description: "Cutting-edge electronics from verified manufacturers with full compliance and quality assurance.",
    features: [
      "Smartphones & tablets",
      "Components & accessories",
      "Smart devices & IoT"
    ]
  },
  {
    icon: HomeIcon,
    title: "Home & Living",
    description: "Quality home products from furniture to kitchenware, sourced from trusted factories.",
    features: [
      "Furniture & decor",
      "Kitchenware & appliances",
      "Textiles & bedding"
    ]
  },
  {
    icon: Bath,
    title: "Sanitary Ware & Bathroom",
    description: "Premium bathroom fixtures and sanitary products meeting international standards.",
    features: [
      "Bathtubs & showers",
      "Faucets & fixtures",
      "Tiles & accessories"
    ]
  },
  {
    icon: Wrench,
    title: "Industrial & Machinery",
    description: "Industrial equipment and tools from certified manufacturers with quality guarantees.",
    features: [
      "Machinery & equipment",
      "Tools & hardware",
      "Manufacturing supplies"
    ]
  },
  {
    icon: Gamepad2,
    title: "Toys & Games",
    description: "Safe, certified toys and recreational products meeting global safety standards.",
    features: [
      "Games & puzzles",
      "Sports equipment",
      "Hobby items"
    ]
  },
  {
    icon: Briefcase,
    title: "Office & Business",
    description: "Professional office supplies and business equipment for modern workplaces.",
    features: [
      "Office furniture",
      "Technology & equipment",
      "Stationery supplies"
    ]
  }
]

const stats = [
  { number: 7, suffix: "+", label: "Product Categories" },
  { number: 500, suffix: "+", label: "Products Sourced" },
  { number: 50, suffix: "+", label: "Verified Suppliers" },
  { number: 100, suffix: "%", label: "Quality Inspected" }
]

const whySourceBenefits = [
  "Direct factory relationships across all categories",
  "Consolidated shipping for multi-category orders",
  "Single point of contact for diverse sourcing needs",
  "Category-specific quality inspection protocols",
  "Flexible minimum order quantities",
  "Competitive pricing through supplier network"
]

export default function WhatWeSource() {
  const navigate = useNavigate()

  const handleRequestCategory = (categoryTitle) => {
    sessionStorage.setItem('selectedProduct', categoryTitle)
    navigate('/contact')
  }

  return (
    <div style={{ background: 'var(--color-background)' }}>
      {/* Hero Section */}
      <section
        className="section-dark relative overflow-hidden py-20 sm:py-24 lg:py-32"
        data-dark-section
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1920&h=1080&fit=crop"
            alt=""
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0" style={{background: 'linear-gradient(135deg, rgba(31, 63, 74, 0.92), rgba(47, 111, 115, 0.88))'}}></div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 -left-40 w-96 h-96 rounded-full blur-3xl" style={{backgroundColor: 'rgba(95, 115, 100, 0.15)'}}></div>
          <div className="absolute bottom-0 -right-40 w-96 h-96 rounded-full blur-3xl" style={{backgroundColor: 'rgba(47, 111, 115, 0.2)'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-6"
            style={{backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'var(--color-accent-light)'}}
          >
            <span className="w-2 h-2 rounded-full" style={{backgroundColor: 'var(--color-accent-light)'}}></span>
            Our Portfolio
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            We Source Whatever Your Business Needs
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed" style={{color: 'rgba(255, 255, 255, 0.85)'}}>
            From electronics to sanitary ware, machinery to consumer goods — if it's made in China, we can source it
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div style={{background: 'var(--color-background-alt)'}}>
        <Breadcrumb currentPage="Products" />
      </div>

      {/* Animated Stats Section */}
      <section className="pt-16 pb-20 sm:pt-20 sm:pb-24" style={{background: 'var(--color-background-alt)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl mb-2" style={{color: 'var(--color-primary)', fontWeight: 600}}>
                    <AnimatedCounter
                      end={stat.number}
                      suffix={stat.suffix}
                      duration={2000}
                    />
                  </div>
                  <div className="text-sm sm:text-base" style={{color: 'var(--color-text-light)'}}>
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Bento Grid */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6" style={{color: 'var(--color-text)', fontWeight: 700}}>
                Industries We Serve
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{color: 'var(--color-text-light)', fontWeight: 400}}>
                Browse our main sourcing categories or contact us for custom requirements
              </p>
            </div>
          </ScrollReveal>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon
              const isFeatured = category.featured

              if (isFeatured) {
                // Enhanced Custom Solutions Card
                return (
                  <ScrollReveal
                    key={index}
                    delay={index * 100}
                    className="md:col-span-2 lg:col-span-1 lg:row-span-2"
                  >
                    <div
                      className="relative rounded-2xl overflow-hidden h-full group"
                      style={{ minHeight: '100%' }}
                    >
                      {/* Background Image with Overlay */}
                      <div className="absolute inset-0">
                        <img
                          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=800&fit=crop"
                          alt=""
                          className="w-full h-full object-cover"
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            background: 'linear-gradient(160deg, rgba(47, 111, 115, 0.95) 0%, rgba(31, 63, 74, 0.98) 100%)'
                          }}
                        />
                        {/* Decorative Pattern Overlay */}
                        <div
                          className="absolute inset-0 opacity-10"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                          }}
                        />
                      </div>

                      {/* Content */}
                      <div className="relative p-8 h-full flex flex-col">
                        {/* Badge */}
                        <div className="flex items-center gap-2 mb-6">
                          <div
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                            style={{
                              backgroundColor: 'var(--color-accent)',
                              color: 'white'
                            }}
                          >
                            <Star className="h-3 w-3" />
                            Most Requested
                          </div>
                        </div>

                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                          style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(10px)' }}
                        >
                          <Icon className="h-8 w-8 text-white" />
                        </div>

                        <h3 className="text-2xl lg:text-3xl text-white mb-4" style={{ fontWeight: 700 }}>
                          {category.title}
                        </h3>

                        <p className="text-base lg:text-lg leading-relaxed mb-6" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                          {category.description}
                        </p>

                        {/* Features List */}
                        <div className="space-y-3 mb-8">
                          {category.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start gap-3">
                              <CheckCircle2
                                className="h-5 w-5 flex-shrink-0 mt-0.5"
                                style={{ color: 'var(--color-accent-light)' }}
                              />
                              <span className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Stats Row */}
                        <div
                          className="flex items-center gap-6 py-4 px-5 rounded-xl mb-8"
                          style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}
                        >
                          <div className="flex items-center gap-2">
                            <Zap className="h-5 w-5" style={{ color: 'var(--color-accent-light)' }} />
                            <span className="text-sm text-white font-medium">100% Tailored</span>
                          </div>
                          <div className="w-px h-6" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
                          <div className="flex items-center gap-2">
                            <Globe2 className="h-5 w-5" style={{ color: 'var(--color-accent-light)' }} />
                            <span className="text-sm text-white font-medium">Any Category</span>
                          </div>
                        </div>

                        {/* Spacer to push button to bottom */}
                        <div className="flex-grow" />

                        {/* Prominent CTA Button */}
                        <button
                          onClick={() => handleRequestCategory('Custom Product Request')}
                          className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl"
                          style={{
                            backgroundColor: 'var(--color-accent)',
                            color: 'white'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'var(--color-accent-dark)'
                            e.currentTarget.style.transform = 'translateY(-2px)'
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'var(--color-accent)'
                            e.currentTarget.style.transform = 'translateY(0)'
                          }}
                        >
                          Get Custom Quote
                          <ArrowRight className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </ScrollReveal>
                )
              }

              // Regular Category Card with Hover Button
              return (
                <ScrollReveal key={index} delay={index * 100}>
                  <div
                    className="card rounded-2xl p-8 hover:shadow-xl transition-all duration-300 h-full group relative overflow-hidden"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
                  >
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: 'linear-gradient(145deg, var(--color-primary), var(--color-primary-light))' }}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="text-xl mb-3" style={{ color: 'var(--color-text)', fontWeight: 600 }}>
                      {category.title}
                    </h3>

                    <p className="leading-relaxed mb-6" style={{ color: 'var(--color-text-light)' }}>
                      {category.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-3 mb-6">
                      {category.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-2">
                          <CheckCircle2
                            className="h-5 w-5 flex-shrink-0 mt-0.5"
                            style={{ color: 'var(--color-primary)' }}
                          />
                          <span className="text-sm" style={{ color: 'var(--color-text-light)' }}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Hover Request Button */}
                    <div
                      className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                      style={{
                        background: 'linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.95) 100%)'
                      }}
                    >
                      <button
                        onClick={() => handleRequestCategory(category.title)}
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
                        style={{
                          backgroundColor: 'var(--color-primary)',
                          color: 'white'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--color-primary-dark)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--color-primary)'
                        }}
                      >
                        Request {category.title.split(' ')[0]}
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Source Section - Split Layout */}
      <section className="py-20 sm:py-24 lg:py-32" style={{background: 'var(--color-background-alt)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6" style={{color: 'var(--color-text)'}}>
                  Why Source These Categories With Us?
                </h2>
                <p className="text-lg mb-8" style={{color: 'var(--color-text-light)'}}>
                  Our expertise spans multiple industries, allowing you to consolidate your sourcing needs with a single trusted partner.
                </p>
                <div className="space-y-4">
                  {whySourceBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-white/50 group cursor-default"
                    >
                      <CheckCircle2
                        className="h-6 w-6 flex-shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110"
                        style={{color: 'var(--color-primary)'}}
                      />
                      <span
                        className="transition-colors duration-200"
                        style={{color: 'var(--color-text-light)'}}
                      >
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="grid grid-cols-2 gap-6">
                  <img
                    src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&h=500&fit=crop"
                    alt="Warehouse and logistics operations"
                    className="rounded-xl shadow-lg w-full h-64 object-cover"
                    width={400}
                    height={500}
                  />
                  <img
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=500&fit=crop"
                    alt="Quality inspection process"
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
                    <Globe2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-semibold" style={{color: 'var(--color-primary)'}}>7+</div>
                    <div className="text-sm" style={{color: 'var(--color-text-light)'}}>Categories Served</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section
        className="section-dark py-20 sm:py-24"
        data-dark-section
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 mx-auto"
              style={{background: 'rgba(255, 255, 255, 0.15)'}}
            >
              <Package className="h-8 w-8" style={{color: 'var(--color-accent-light)'}} />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto" style={{color: 'rgba(255, 255, 255, 0.85)'}}>
              We source it all! Our network of vetted suppliers means we can find exactly what your business needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 shadow-lg hover:shadow-xl gap-2"
                style={{backgroundColor: 'var(--color-accent)', color: 'white'}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-accent-dark)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-accent)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Get a Free Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 gap-2"
                style={{
                  backgroundColor: 'transparent',
                  color: 'white',
                  border: '2px solid rgba(255, 255, 255, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                }}
              >
                View Our Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
