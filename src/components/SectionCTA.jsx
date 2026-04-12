import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

export default function SectionCTA({
  icon: Icon,
  heading,
  subtitle,
  primaryLink,
  primaryLabel,
  secondaryLink,
  secondaryLabel,
  children,
}) {
  return (
    <section className="section-dark py-20 sm:py-24" data-dark-section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid ${children ? 'md:grid-cols-2 gap-12 items-center' : ''}`}>
          <ScrollReveal>
            <div className={`text-center ${children ? 'md:text-left' : ''}`}>
              {Icon && (
                <Icon
                  className={`h-14 w-14 mb-6 ${children ? 'mx-auto md:mx-0' : 'mx-auto'}`}
                  style={{ color: 'var(--color-accent-light)' }}
                />
              )}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
                {heading}
              </h2>
              <p
                className="text-lg sm:text-xl mb-8"
                style={{ color: 'rgba(255, 255, 255, 0.85)' }}
              >
                {subtitle}
              </p>
              <div className={`flex flex-wrap gap-4 ${children ? 'justify-center md:justify-start' : 'justify-center'}`}>
                {primaryLink && (
                  <Link
                    to={primaryLink}
                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 shadow-lg hover:shadow-xl gap-2 hover:-translate-y-0.5"
                    style={{ backgroundColor: 'var(--color-accent)', color: 'white' }}
                  >
                    {primaryLabel}
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                )}
                {secondaryLink && (
                  <Link
                    to={secondaryLink}
                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 gap-2 border-2 hover:bg-white/10 hover:border-white/50"
                    style={{
                      backgroundColor: 'transparent',
                      color: 'white',
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    }}
                  >
                    {secondaryLabel}
                  </Link>
                )}
              </div>
            </div>
          </ScrollReveal>

          {children && (
            <ScrollReveal delay={200}>
              {children}
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  )
}
