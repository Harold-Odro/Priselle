import { Home as HomeIcon, Smartphone, HardHat, Sun, Car, Gift, Package, ArrowRight, CheckCircle2, Globe2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import Breadcrumb from '../components/Breadcrumb'
import AnimatedCounter from '../components/AnimatedCounter'
import PageHero from '../components/PageHero'
import SectionCTA from '../components/SectionCTA'

const categories = [
  {
    icon: HomeIcon,
    title: "Home & Living",
    description: "Quality home products from furniture to kitchenware, sourced from trusted factories across China.",
    items: ['Furniture & Decor Pieces', 'Cabinetry', 'Lightings', 'Bathroom Supplies', 'Hotel Supplies']
  },
  {
    icon: Smartphone,
    title: "Electronics",
    description: "Cutting-edge electronics from verified manufacturers with full compliance and quality assurance.",
    items: ['Consumer Electronics', 'Components & Accessories', 'Smart Devices', 'LED Lightings']
  },
  {
    icon: HardHat,
    title: "Construction & Building",
    description: "Reliable construction materials and building supplies meeting international quality standards.",
    items: ['Floor Tiles', 'Wooden and Metal Doors', 'Windows', 'Sanitary Wares']
  },
  {
    icon: Sun,
    title: "Energy & Solar",
    description: "Renewable energy products and power generation equipment from certified manufacturers.",
    items: ['Solar Panels', 'Plant & Generators', 'LED Lightings', 'Power Equipment']
  },
  {
    icon: Car,
    title: "Vehicles & Auto",
    description: "Automotive parts and accessories sourced from quality-verified suppliers with competitive pricing.",
    items: ['Auto Parts', 'Accessories', 'Tyres & Wheels', 'Tools & Equipment']
  },
  {
    icon: Gift,
    title: "Souvenirs & Gifts",
    description: "Custom souvenirs, promotional items, and branded merchandise for businesses and events.",
    items: ['Custom Gifts', 'Promotional Items', 'Branded Merchandise', 'Novelties']
  }
]

const stats = [
  { number: 6, suffix: "", label: "Industry Categories" },
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
    navigate('/sourcing/contact')
  }

  return (
    <div style={{ background: 'var(--color-background)' }}>
      <PageHero
        badge="Our Portfolio"
        title="We Source Whatever Your Business Needs"
        subtitle="From electronics to construction materials, energy to consumer goods — if it's made in China, we can source it"
        backgroundImage="https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1920&h=1080&fit=crop"
      />

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

      {/* Categories Grid */}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon

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

                    {/* Items List */}
                    <div className="space-y-3 mb-6">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start gap-2">
                          <CheckCircle2
                            className="h-5 w-5 flex-shrink-0 mt-0.5"
                            style={{ color: 'var(--color-primary)' }}
                          />
                          <span className="text-sm" style={{ color: 'var(--color-text-light)' }}>
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Request Button */}
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
                      Request Quote
                      <ArrowRight className="h-4 w-4" />
                    </button>
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
                    <div className="text-2xl font-semibold" style={{color: 'var(--color-primary)'}}>6</div>
                    <div className="text-sm" style={{color: 'var(--color-text-light)'}}>Industries Served</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionCTA
        icon={Package}
        heading="Can't Find What You're Looking For?"
        subtitle="We source it all! Our network of vetted suppliers means we can find exactly what your business needs."
        primaryLink="/sourcing/contact"
        primaryLabel="Get a Free Quote"
        secondaryLink="/sourcing/services"
        secondaryLabel="View Our Services"
      />
    </div>
  )
}
