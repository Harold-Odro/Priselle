import ScrollReveal from './ScrollReveal'
import AnimatedCounter from './AnimatedCounter'

const stats = [
  { number: 50, suffix: '+', label: 'Vetted Suppliers' },
  { number: 24, suffix: '/7', label: 'Client Support' },
  { number: 100, suffix: '%', label: 'Commitment to Quality' }
]

export default function CompanyOverview() {
  return (
    <section className="py-14 sm:py-20 lg:py-24" style={{ background: 'var(--color-background-alt)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split: Text + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <ScrollReveal>
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-6"
                style={{ backgroundColor: 'rgba(47, 111, 115, 0.1)', color: 'var(--color-primary)', fontWeight: 600 }}
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--color-primary)' }} />
                Company Overview
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6" style={{ color: 'var(--color-text)', lineHeight: 1.2 }}>
                Connecting Businesses with China's Best
              </h2>
              <p className="text-base sm:text-lg leading-relaxed mb-4" style={{ color: 'var(--color-text-light)' }}>
                At Priselle Sourcing and Trade, we specialize in bridging the gap between global businesses and China's extensive manufacturing capabilities. With years of experience and a deep network of verified suppliers, we ensure every sourcing project meets the highest standards of quality and reliability.
              </p>
              <p className="text-base sm:text-lg leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
                Whether you need bulk manufacturing, custom products, or quality inspections — our team provides comprehensive end-to-end solutions tailored to your business needs.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="rounded-2xl overflow-hidden" style={{ boxShadow: 'var(--shadow-xl)' }}>
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
                alt="Professional workspace"
                className="w-full h-56 sm:h-80 lg:h-96 object-cover"
                width={800}
                height={600}
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Stats Band */}
        <div className="grid grid-cols-3 gap-6 sm:gap-8 pt-8 sm:pt-12" style={{ borderTop: '1px solid var(--color-border)' }}>
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl mb-2" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} duration={2000} />
                </div>
                <div className="text-sm sm:text-base" style={{ color: 'var(--color-text-light)' }}>
                  {stat.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
