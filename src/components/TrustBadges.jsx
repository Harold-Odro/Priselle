import { Shield, Award, Clock, Headphones, DollarSign, TrendingUp } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const badges = [
  {
    icon: Shield,
    title: 'Quality Assured',
    description: '3-tier quality control on every order'
  },
  {
    icon: Award,
    title: 'Certified Suppliers',
    description: '100+ verified manufacturing partners'
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: '98% shipments arrive as scheduled'
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'Personal account manager for every client'
},
  {
    icon: DollarSign,
    title: 'No Hidden Fees',
    description: 'Transparent pricing with no surprises'
},
  {
    icon: TrendingUp,
    title: 'Cost Savings',
    description: 'Average 40% reduction in sourcing costs'
  }
]

export default function TrustBadges() {
  return (
    <section className="py-20 sm:py-24 lg:py-32" style={{backgroundColor: 'var(--color-background-alt)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg mb-6" style={{backgroundColor: 'var(--color-background-accent)', border: '1px solid var(--color-accent-light)'}}>
              <Shield className="h-4 w-4" style={{color: 'var(--color-accent)'}} />
              <span className="text-sm font-semibold uppercase tracking-wider" style={{color: 'var(--color-accent-dark)', fontWeight: 600, letterSpacing: '0.05em'}}>Why Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6" style={{color: 'var(--color-text)', fontWeight: 700}}>
              Your Trusted Partner in
              <span className="block mt-2" style={{color: 'var(--color-accent)', fontWeight: 700}}>
                China Sourcing
              </span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{color: 'var(--color-text-light)', fontWeight: 400}}>
              We combine industry expertise with cutting-edge technology to deliver unmatched value
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {badges.map((badge, index) => {
            const Icon = badge.icon

            return (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="group relative bg-white rounded-xl p-8 transition-all duration-300 cursor-default hover:shadow-lg" style={{border: '1px solid var(--color-gray-200)'}}>
                  {/* Icon container */}
                  <div
                    className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-105 transition-all duration-300"
                    style={{backgroundColor: 'var(--color-background-accent)'}}
                  >
                    <Icon className="h-7 w-7" style={{color: 'var(--color-accent)'}} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl mb-3" style={{color: 'var(--color-text)', fontWeight: 600}}>
                    {badge.title}
                  </h3>
                  <p className="leading-relaxed" style={{color: 'var(--color-text-light)', fontWeight: 400}}>
                    {badge.description}
                  </p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}