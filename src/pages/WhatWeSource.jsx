import { Smartphone, Home, Bath, Wrench, Sparkles, Gamepad2, Briefcase, Package } from 'lucide-react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

const categories = [
  {
    icon: Smartphone,
    title: "Electronics & Technology",
    examples: ["Smartphones", "Tablets", "Components", "Smart devices"],
    color: "blue"
  },
  {
    icon: Home,
    title: "Home & Living",
    examples: ["Furniture", "Kitchenware", "Decor", "Appliances"],
    color: "indigo"
  },
  {
    icon: Bath,
    title: "Sanitary Ware & Bathroom",
    examples: ["Bathtubs", "Showers", "Tiles", "Toilets", "Faucets"],
    color: "cyan"
  },
  {
    icon: Wrench,
    title: "Industrial & Machinery",
    examples: ["Equipment", "Tools", "Parts", "Manufacturing supplies"],
    color: "slate"
  },
  {
    icon: Sparkles,
    title: "Health & Beauty",
    examples: ["Cosmetics", "Personal care", "Medical supplies"],
    color: "pink"
  },
  {
    icon: Gamepad2,
    title: "Toys & Entertainment",
    examples: ["Games", "Sports equipment", "Hobby items"],
    color: "purple"
  },
  {
    icon: Briefcase,
    title: "Office & Business",
    examples: ["Supplies", "Furniture", "Technology", "Stationery"],
    color: "green"
  },
  {
    icon: Package,
    title: "Custom Solutions",
    examples: ["Don't see your category?", "We source anything you need"],
    color: "orange",
    isCustom: true
  }
]

export default function WhatWeSource() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32" style={{background: 'linear-gradient(135deg, var(--color-primary-dark), var(--color-primary))'}}>
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1920&h=1080&fit=crop"
            alt="Modern manufacturing facility showcasing Chinese industrial production capabilities"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0" style={{background: 'linear-gradient(135deg, rgba(21, 41, 66, 0.85), rgba(30, 58, 95, 0.75))'}}></div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 -left-40 w-96 h-96 rounded-full blur-3xl" style={{backgroundColor: 'rgba(184, 134, 11, 0.08)'}}></div>
          <div className="absolute bottom-0 -right-40 w-96 h-96 rounded-full blur-3xl" style={{backgroundColor: 'rgba(44, 82, 130, 0.12)'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6" style={{fontWeight: 700}}>
            We Source Whatever Your Business Needs
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto" style={{color: 'rgba(255, 255, 255, 0.9)', fontWeight: 400}}>
            From electronics to sanitary ware, machinery to consumer goods — if it's made in China, we can source it
          </p>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => {
              const Icon = category.icon

              return (
                <ScrollReveal key={index} delay={index * 100}>
                  <div
                    className="group relative bg-white rounded-lg p-8 transition-all duration-300 cursor-pointer h-full hover:shadow-lg"
                    style={{border: '1px solid var(--color-gray-200)'}}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-accent-light)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-gray-200)';
                    }}
                  >
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-105 transition-all duration-300" style={{backgroundColor: 'var(--color-background-accent)'}}>
                      <Icon className="h-7 w-7" style={{color: 'var(--color-accent)'}} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl mb-4" style={{color: 'var(--color-text)', fontWeight: 600}}>
                      {category.title}
                    </h3>

                    {/* Examples */}
                    <ul className="space-y-2 mb-6">
                      {category.examples.map((example, i) => (
                        <li key={i} className="flex items-start" style={{color: 'var(--color-text-light)', fontWeight: 400}}>
                          <span className="mr-2" style={{color: 'var(--color-accent)'}}>•</span>
                          <span>{example}</span>
                        </li>
                      ))}
                      {!category.isCustom && (
                        <li className="flex items-start" style={{color: 'var(--color-text-light)', fontWeight: 400}}>
                          <span className="mr-2" style={{color: 'var(--color-accent)'}}>•</span>
                          <span className="italic">and more...</span>
                        </li>
                      )}
                    </ul>

                    {/* Hover CTA */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Link
                        to="/contact"
                        className="inline-block font-medium text-sm"
                        style={{color: 'var(--color-accent)', fontWeight: 600}}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = 'var(--color-accent-dark)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = 'var(--color-accent)';
                        }}
                      >
                        Request Quote →
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-20 sm:py-24" style={{backgroundColor: 'var(--color-background-alt)'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="rounded-lg p-12 sm:p-16 shadow-lg" style={{background: 'linear-gradient(135deg, var(--color-primary-dark), var(--color-primary))'}}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6" style={{fontWeight: 700}}>
                Can't Find What You're Looking For?
              </h2>
              <p className="text-lg sm:text-xl mb-8" style={{color: 'rgba(255, 255, 255, 0.9)', fontWeight: 400}}>
                We source it all! Our network of 1000+ verified suppliers means we can find exactly what your business needs.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-10 py-4 text-white rounded-lg font-medium text-base transition-all duration-200 shadow-lg hover:shadow-xl"
                style={{backgroundColor: 'var(--color-accent)', fontWeight: 600}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-accent-dark)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-accent)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Get in Touch
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}