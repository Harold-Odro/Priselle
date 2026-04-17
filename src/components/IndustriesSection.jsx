import { Home, Smartphone, HardHat, Sun, Car, Gift, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ScrollReveal from './ScrollReveal'

const industries = [
  {
    icon: Home,
    title: 'Home & Living',
    count: '15+',
    items: ['Furniture & Decor', 'Cabinetry', 'Lightings', 'Bathroom Supplies']
  },
  {
    icon: Smartphone,
    title: 'Electronics',
    count: '20+',
    items: ['Consumer Electronics', 'Components', 'Smart Devices', 'Accessories']
  },
  {
    icon: HardHat,
    title: 'Construction & Building',
    count: '25+',
    items: ['Floor Tiles', 'Doors & Windows', 'Sanitary Wares', 'Building Materials']
  },
  {
    icon: Sun,
    title: 'Energy & Solar',
    count: '12+',
    items: ['Solar Panels', 'Generators', 'Plant & Machinery', 'LED Lightings']
  },
  {
    icon: Car,
    title: 'Vehicles & Auto',
    count: '22+',
    items: ['Auto Parts', 'Accessories', 'Tyres & Wheels', 'Tools & Equipment']
  },
  {
    icon: Gift,
    title: 'Souvenirs & Gifts',
    count: '12+',
    items: ['Custom Gifts', 'Promotional Items', 'Branded Merchandise', 'Novelties']
  }
]

export default function IndustriesSection() {
  return (
    <section
      className="section-dark relative py-14 sm:py-20 lg:py-32 overflow-hidden"
      data-dark-section
    >
      {/* Background image + overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=1080&fit=crop"
          alt=""
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(31, 63, 74, 0.93), rgba(47, 111, 115, 0.9))' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-6"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'var(--color-accent-light)' }}
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--color-accent-light)' }} />
              What We Source
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Browse our main sourcing categories or contact us for custom requirements
            </p>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 mb-12">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <ScrollReveal key={index} delay={index * 80}>
                <div
                  className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group h-full"
                  style={{ border: '1px solid var(--color-border)' }}
                >
                  {/* Icon + Title */}
                  <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 mb-3 sm:mb-4">
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105"
                      style={{ background: 'linear-gradient(145deg, var(--color-primary), var(--color-primary-light))' }}
                    >
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-lg mb-0.5" style={{ color: 'var(--color-text)', fontWeight: 600 }}>
                        {industry.title}
                      </h3>
                      <span className="text-xs sm:text-sm" style={{ color: 'var(--color-primary)', fontWeight: 500 }}>
                        {industry.count} categories
                      </span>
                    </div>
                  </div>

                  {/* Items List - hidden on small mobile, shown on sm+ */}
                  <ul className="hidden sm:block space-y-2 mb-5">
                    {industry.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-text-light)' }}>
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: 'var(--color-primary-light)' }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  <Link
                    to="/sourcing/products"
                    className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold transition-all duration-200 hover:gap-2"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    Learn More <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* CTA */}
        <ScrollReveal delay={300}>
          <div className="text-center">
            <Link
              to="/sourcing/products"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 border-2 hover:bg-white/10 hover:-translate-y-0.5"
              style={{ backgroundColor: 'transparent', color: 'white', borderColor: 'rgba(255, 255, 255, 0.3)' }}
            >
              Explore All Categories <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
