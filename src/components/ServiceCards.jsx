import { ShoppingCart, Package, ShieldCheck, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ScrollReveal from './ScrollReveal'

const services = [
  {
    icon: ShoppingCart,
    title: 'Product Sourcing',
    description: 'We identify, vet, and connect you with the best Chinese manufacturers and suppliers for your specific product requirements.'
  },
  {
    icon: Package,
    title: 'Shipping & Logistics',
    description: 'Full logistics management including freight forwarding, customs clearance, and worldwide door-to-door delivery.'
  },
  {
    icon: ShieldCheck,
    title: 'Quality Control & Repackaging',
    description: 'Comprehensive quality inspection at every stage with professional repackaging to meet your brand standards.'
  }
]

export default function ServiceCards() {
  return (
    <section
      className="section-dark relative py-14 sm:py-20 lg:py-32 overflow-hidden"
      data-dark-section
    >
      {/* Background image + overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=1920&h=1080&fit=crop"
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
              What We Do
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4">Our Services</h2>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              End-to-end sourcing solutions designed for businesses worldwide
            </p>
          </div>
        </ScrollReveal>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-7">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl h-full flex flex-col">
                  <div
                    className="w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center"
                    style={{ background: 'linear-gradient(145deg, var(--color-primary), var(--color-primary-light))' }}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl mb-3" style={{ color: 'var(--color-text)', fontWeight: 600 }}>
                    {service.title}
                  </h3>
                  <p className="leading-relaxed mb-6 flex-grow" style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>
                    {service.description}
                  </p>
                  <Link
                    to="/sourcing/services"
                    className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
                    style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}
                  >
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* View All Services Button */}
        <ScrollReveal delay={300}>
          <div className="text-center mt-10">
            <Link
              to="/sourcing/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 border-2 hover:bg-white/10 hover:-translate-y-0.5"
              style={{ backgroundColor: 'transparent', color: 'white', borderColor: 'rgba(255, 255, 255, 0.3)' }}
            >
              View All Services <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
