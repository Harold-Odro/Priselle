import { ShoppingCart, Package, CheckCircle, ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import ScrollReveal from './ScrollReveal'

export default function ServicesPreview() {
  const services = [
    {
      icon: ShoppingCart,
      title: "Product Sourcing",
      description: "We find and verify the best manufacturers from our network of 1000+ Chinese suppliers.",
      highlight: "Save up to 40% on costs"
    },
    {
      icon: CheckCircle,
      title: "Quality Control",
      description: "Every product inspected by our team before shipping to ensure it meets your standards.",
      highlight: "Reduce defects by 85%"
    },
    {
      icon: Package,
      title: "Logistics & Shipping",
      description: "Complete shipping and customs clearance from China to anywhere in the world.",
      highlight: "30% faster delivery"
    }
  ]

  return (
    <section className="py-20 sm:py-24 lg:py-32" style={{backgroundColor: 'var(--color-background-alt)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg mb-6" style={{backgroundColor: 'var(--color-background-accent)', border: '1px solid var(--color-accent-light)'}}>
              <Sparkles className="h-4 w-4" style={{color: 'var(--color-accent)'}} />
              <span className="text-sm font-semibold uppercase tracking-wider" style={{color: 'var(--color-accent-dark)', fontWeight: 600, letterSpacing: '0.05em'}}>What We Do</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6" style={{color: 'var(--color-text)', fontWeight: 700}}>
              Our Services
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{color: 'var(--color-text-light)', fontWeight: 400}}>
              End-to-end sourcing solutions designed for businesses worldwide
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="relative bg-white p-8 rounded-xl hover:shadow-lg transition-all duration-300 group" style={{border: '1px solid var(--color-gray-200)'}}>
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg mb-6 group-hover:scale-105 transition-transform duration-300" style={{backgroundColor: 'var(--color-background-accent)'}}>
                    <IconComponent className="h-7 w-7" style={{color: 'var(--color-accent)'}} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl mb-3" style={{color: 'var(--color-text)', fontWeight: 600}}>
                    {service.title}
                  </h3>
                  <p className="leading-relaxed mb-6" style={{color: 'var(--color-text-light)', fontWeight: 400}}>
                    {service.description}
                  </p>

                  {/* Highlight badge */}
                  <div className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold" style={{backgroundColor: 'var(--color-background-accent)', border: '1px solid var(--color-accent-light)', color: 'var(--color-accent-dark)', fontWeight: 600}}>
                    <CheckCircle className="h-4 w-4 mr-2" />
                    {service.highlight}
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* CTA Section */}
        <ScrollReveal delay={300}>
          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-10 py-4 rounded-lg font-semibold text-base transition-all duration-200 shadow-lg hover:shadow-xl"
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
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}