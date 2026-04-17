import { Shield, Zap, Eye, ArrowRight } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const strengths = [
  {
    icon: Shield,
    title: 'Reliability',
    description: 'Every supplier in our network is thoroughly vetted for consistency, compliance, and quality standards.'
  },
  {
    icon: Zap,
    title: 'Efficiency',
    description: 'Our streamlined process takes you from inquiry to delivery with minimal friction and maximum speed.'
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'Clear pricing with no hidden fees. You\'ll always know exactly what you\'re paying for at every stage.'
  }
]

export default function CoreFocus() {
  return (
    <section className="py-14 sm:py-20 lg:py-32" style={{ background: 'var(--color-background)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-6"
              style={{ backgroundColor: 'rgba(47, 111, 115, 0.1)', color: 'var(--color-primary)', fontWeight: 600 }}
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--color-primary)' }} />
              Why Choose Us
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4" style={{ color: 'var(--color-text)' }}>
              Our Core Strengths
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-text-light)' }}>
              What sets Priselle apart as your trusted sourcing partner
            </p>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {strengths.map((item, index) => {
            const Icon = item.icon
            return (
              <ScrollReveal key={index} delay={index * 100}>
                <div
                  className="text-center p-8 rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group h-full"
                  style={{ border: '1px solid var(--color-border)' }}
                >
                  <div
                    className="w-16 h-16 mx-auto mb-5 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[var(--color-primary)] group-hover:border-[var(--color-primary)] group-hover:text-white"
                    style={{
                      backgroundColor: 'rgba(47, 111, 115, 0.08)',
                      border: '2px solid rgba(47, 111, 115, 0.15)',
                      color: 'var(--color-primary)'
                    }}
                  >
                    <Icon className="h-7 w-7" style={{ color: 'inherit' }} />
                  </div>
                  <h3 className="text-lg mb-3" style={{ color: 'var(--color-text)', fontWeight: 600, fontFamily: 'Outfit, sans-serif' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-light)' }}>
                    {item.description}
                  </p>
                  <a
                    href="/sourcing/services"
                    className="inline-flex items-center gap-1 text-sm font-semibold transition-all duration-200 hover:gap-2"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    Learn More <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
