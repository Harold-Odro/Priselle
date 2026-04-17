import { ShoppingCart, Warehouse, Package, Handshake, FileText, ShieldCheck, Home, Smartphone, HardHat, Sun, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ScrollReveal from './ScrollReveal'

const services = [
  { icon: ShoppingCart, label: 'Product Sourcing' },
  { icon: Warehouse, label: 'Warehouse & Inventory' },
  { icon: Package, label: 'Shipping & Logistics' },
  { icon: Handshake, label: 'China Concierge' },
  { icon: FileText, label: 'Work Visa Support' },
  { icon: ShieldCheck, label: 'QC & Repackaging' }
]

const industries = [
  { icon: Home, label: 'Home & Living' },
  { icon: Smartphone, label: 'Electronics' },
  { icon: HardHat, label: 'Construction' },
  { icon: Sun, label: 'Energy & Solar' }
]

export default function OverlappingCards() {
  return (
    <section className="relative z-10 -mt-10 sm:-mt-20 px-4 pb-12 sm:pb-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {/* Card 1: About Us */}
        <ScrollReveal>
          <div
            className="bg-white rounded-2xl p-6 sm:p-8 transition-all duration-300 h-full hover:-translate-y-2"
            style={{
              boxShadow: 'var(--shadow-xl)',
              borderTop: '3px solid transparent',
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderTopColor = 'var(--color-primary)'}
            onMouseLeave={(e) => e.currentTarget.style.borderTopColor = 'transparent'}
          >
            <h3 className="text-xl mb-4" style={{ fontWeight: 600, color: 'var(--color-text)' }}>About Us</h3>
            <p className="leading-relaxed mb-5" style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>
              Founded in China with deep roots in global trade, Priselle bridges the gap between international businesses and China's vast manufacturing ecosystem. We're your trusted sourcing partner.
            </p>
            <Link to="/sourcing/about" className="inline-flex items-center gap-1 font-semibold transition-all duration-200 hover:gap-2" style={{ color: 'var(--color-primary)' }}>
              Learn More <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Card 2: Our Services */}
        <ScrollReveal delay={100}>
          <div
            className="bg-white rounded-2xl p-6 sm:p-8 transition-all duration-300 h-full hover:-translate-y-2"
            style={{
              boxShadow: 'var(--shadow-xl)',
              borderTop: '3px solid transparent',
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderTopColor = 'var(--color-primary)'}
            onMouseLeave={(e) => e.currentTarget.style.borderTopColor = 'transparent'}
          >
            <h3 className="text-xl mb-4" style={{ fontWeight: 600, color: 'var(--color-text)' }}>Our Services</h3>
            <div className="grid grid-cols-2 gap-3 mb-5">
              {services.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--color-background)' }}
                  >
                    <Icon className="h-4 w-4" style={{ color: 'var(--color-primary)' }} />
                  </div>
                  <span className="text-sm" style={{ color: 'var(--color-text-light)' }}>{label}</span>
                </div>
              ))}
            </div>
            <Link to="/sourcing/services" className="inline-flex items-center gap-1 font-semibold transition-all duration-200 hover:gap-2" style={{ color: 'var(--color-primary)' }}>
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Card 3: Industries We Serve */}
        <ScrollReveal delay={200}>
          <div
            className="bg-white rounded-2xl p-6 sm:p-8 transition-all duration-300 h-full hover:-translate-y-2"
            style={{
              boxShadow: 'var(--shadow-xl)',
              borderTop: '3px solid transparent',
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderTopColor = 'var(--color-primary)'}
            onMouseLeave={(e) => e.currentTarget.style.borderTopColor = 'transparent'}
          >
            <h3 className="text-xl mb-4" style={{ fontWeight: 600, color: 'var(--color-text)' }}>Industries We Serve</h3>
            <div className="grid grid-cols-2 gap-3 mb-5">
              {industries.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--color-background)' }}
                  >
                    <Icon className="h-4 w-4" style={{ color: 'var(--color-primary)' }} />
                  </div>
                  <span className="text-sm" style={{ color: 'var(--color-text-light)' }}>{label}</span>
                </div>
              ))}
            </div>
            <Link to="/sourcing/products" className="inline-flex items-center gap-1 font-semibold transition-all duration-200 hover:gap-2" style={{ color: 'var(--color-primary)' }}>
              Explore Categories <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
