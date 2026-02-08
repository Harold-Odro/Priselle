import { Search, ClipboardCheck, Package, Plane, CheckCircle, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'
import ScrollReveal from './ScrollReveal'

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: FileText,
      title: "Share Your Requirements",
      description: "Tell us what products you need. Our team discusses specifications, quantities, budget, and timeline with you."
    },
    {
      number: "02",
      icon: Search,
      title: "We Source & Verify",
      description: "We find the best suppliers from our network of 1000+ verified manufacturers and negotiate the best prices for you."
    },
    {
      number: "03",
      icon: ClipboardCheck,
      title: "Quality Control",
      description: "Our team inspects products before shipping to ensure they meet your specifications and quality standards."
    },
    {
      number: "04",
      icon: Plane,
      title: "Shipping & Customs",
      description: "We handle all logistics, shipping, and customs clearance. Your products arrive safely at your doorstep anywhere in the world."
    }
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg mb-6" style={{backgroundColor: 'var(--color-background-accent)', border: '1px solid var(--color-accent-light)'}}>
              <Package className="h-4 w-4" style={{color: 'var(--color-accent)'}} />
              <span className="text-sm font-semibold uppercase tracking-wider" style={{color: 'var(--color-accent-dark)', fontWeight: 600, letterSpacing: '0.05em'}}>Simple Process</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 tracking-tight" style={{color: 'var(--color-text)', fontWeight: 700}}>
              How It Works
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{color: 'var(--color-text-light)', fontWeight: 400}}>
              From inquiry to delivery, we handle everything. Four simple steps to get quality products from China.
            </p>
          </div>
        </ScrollReveal>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="relative">
                  {/* Connecting line for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-px -z-10" style={{backgroundColor: 'var(--color-gray-200)'}}></div>
                  )}

                  {/* Step card */}
                  <div className="bg-white p-8 rounded-xl hover:shadow-lg transition-all duration-300 group h-full" style={{border: '1px solid var(--color-gray-200)'}}>
                    {/* Number badge */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-lg flex items-center justify-center font-semibold text-base shadow-md group-hover:scale-110 transition-transform" style={{backgroundColor: 'var(--color-accent)', color: 'white', fontWeight: 600}}>
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg mb-6 group-hover:scale-105 transition-all duration-300" style={{backgroundColor: 'var(--color-background-accent)'}}>
                      <IconComponent className="h-7 w-7" style={{color: 'var(--color-accent)'}} />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl mb-3" style={{color: 'var(--color-text)', fontWeight: 600}}>
                      {step.title}
                    </h3>
                    <p className="leading-relaxed" style={{color: 'var(--color-text-light)', fontWeight: 400}}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={400}>
          <div className="mt-20 text-center rounded-2xl p-12 sm:p-16 shadow-lg relative overflow-hidden" style={{background: 'linear-gradient(135deg, var(--color-primary-dark), var(--color-primary))'}}>
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl" style={{backgroundColor: 'rgba(184, 134, 11, 0.08)'}}></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl" style={{backgroundColor: 'rgba(44, 82, 130, 0.12)'}}></div>

            <div className="relative">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <CheckCircle className="h-6 w-6" style={{color: 'var(--color-accent-light)'}} />
                <span className="text-white text-base" style={{fontWeight: 400}}>Average project completion: 4-6 weeks</span>
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4 tracking-tight" style={{fontWeight: 700}}>
                Ready to Start Sourcing?
              </h3>
              <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto" style={{color: 'rgba(255, 255, 255, 0.9)', fontWeight: 400}}>
                Join 500+ businesses that trust us with their China sourcing needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center px-10 py-4 rounded-lg font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl"
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
                  Request Quote
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-10 py-4 bg-transparent rounded-lg font-semibold text-base hover:bg-white/10 transition-all duration-300"
                  style={{border: '2px solid rgba(255, 255, 255, 0.3)', fontWeight: 600, color: 'white'}}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'}
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}