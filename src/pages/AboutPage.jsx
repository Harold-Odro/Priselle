import { Users, Target, Award, Globe2, TrendingUp, CheckCircle2 } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import SEO from '../components/SEO'

export default function AboutPage() {
  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "100+", label: "Verified Suppliers" },
    { number: "50+", label: "Global Clients" },
    { number: "15+", label: "Product Categories" }
  ]

  const values = [
    {
      icon: Target,
      title: "Quality First",
      description: "Rigorous quality control at every stage ensures only the best products reach your hands"
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "We build lasting relationships based on trust, transparency, and mutual success"
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth",
      description: "Always expanding our network and capabilities to serve you better"
    },
    {
      icon: Globe2,
      title: "Global Perspective",
      description: "Bridging cultures and markets to create seamless international trade"
    }
  ]

  const whyChooseUs = [
    "Direct access to 1000+ verified Chinese manufacturers",
    "On-ground presence in China for quality assurance",
    "Expert negotiation securing the best prices",
    "End-to-end logistics and customs handling",
    "Transparent communication throughout the process",
    "Personalized service tailored to your business needs"
  ]

  return (
    <>
      <SEO
        title="About Us | Priselle Sourcing and Trade"
        description="Learn about Priselle Sourcing and Trade - your trusted partner for China sourcing with 500+ projects completed and 1000+ verified suppliers."
        keywords="about priselle, china sourcing company, sourcing partner, manufacturing solutions, trade services"
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32" style={{background: 'linear-gradient(135deg, var(--color-primary-dark), var(--color-primary))'}}>
          {/* Background Image */}
          <div className="absolute inset-0 opacity-20">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&h=1080&fit=crop"
              alt="Professional business team collaboration"
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
              Your Trusted Bridge to
              <span className="block mt-2" style={{color: 'var(--color-accent-light)', fontWeight: 700}}>China's Manufacturing Excellence</span>
            </h1>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto" style={{color: 'rgba(255, 255, 255, 0.9)', fontWeight: 400}}>
              Connecting global businesses with premium Chinese manufacturers since our founding,
              we've built a reputation for quality, reliability, and exceptional service.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 sm:py-24" style={{backgroundColor: 'var(--color-background-alt)'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="text-center">
                    <div className="text-4xl sm:text-5xl mb-2" style={{color: 'var(--color-accent)', fontWeight: 700}}>
                      {stat.number}
                    </div>
                    <div className="text-sm sm:text-base" style={{color: 'var(--color-text-light)', fontWeight: 400}}>
                      {stat.label}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 sm:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <ScrollReveal>
                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6" style={{color: 'var(--color-text)', fontWeight: 700}}>
                    Our Story
                  </h2>
                  <div className="space-y-4 text-lg leading-relaxed" style={{color: 'var(--color-text-light)', fontWeight: 400}}>
                    <p>
                      Priselle Sourcing and Trade was born from a simple vision: to make international
                      sourcing accessible, transparent, and reliable for businesses of all sizes.
                    </p>
                    <p>
                      With deep roots in both Chinese manufacturing and international trade, we uniquely
                      understand the challenges businesses face when sourcing from abroad. Language barriers,
                      quality concerns, logistics complexities—we've experienced them all and built solutions
                      for each.
                    </p>
                    <p>
                      Today, we're proud to serve clients across the globe, connecting them with China's
                      best manufacturers while ensuring quality, competitive pricing, and seamless delivery.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop"
                    alt="Team collaboration and business partnership"
                    className="rounded-2xl shadow-2xl"
                    width={800}
                    height={600}
                  />
                  <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full blur-3xl -z-10" style={{backgroundColor: 'rgba(184, 134, 11, 0.15)'}}></div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 sm:py-24" style={{backgroundColor: 'var(--color-background-alt)'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4" style={{color: 'var(--color-text)', fontWeight: 700}}>
                  Our Core Values
                </h2>
                <p className="text-lg max-w-2xl mx-auto" style={{color: 'var(--color-text-light)', fontWeight: 400}}>
                  The principles that guide every decision we make and every partnership we build
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <ScrollReveal key={index} delay={index * 100}>
                    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300" style={{border: '1px solid var(--color-gray-200)'}}>
                      <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6" style={{backgroundColor: 'var(--color-background-accent)'}}>
                        <Icon className="h-7 w-7" style={{color: 'var(--color-accent)'}} />
                      </div>
                      <h3 className="text-xl mb-3" style={{color: 'var(--color-text)', fontWeight: 600}}>
                        {value.title}
                      </h3>
                      <p className="leading-relaxed" style={{color: 'var(--color-text-light)', fontWeight: 400}}>
                        {value.description}
                      </p>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 sm:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <ScrollReveal>
                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6" style={{color: 'var(--color-text)', fontWeight: 700}}>
                    Why Choose Priselle?
                  </h2>
                  <p className="text-lg mb-8" style={{color: 'var(--color-text-light)', fontWeight: 400}}>
                    We're not just a sourcing company—we're your strategic partner in China,
                    committed to your success.
                  </p>
                  <div className="space-y-4">
                    {whyChooseUs.map((reason, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" style={{color: 'var(--color-accent)'}} />
                        <span style={{color: 'var(--color-text-light)', fontWeight: 400}}>{reason}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="grid grid-cols-2 gap-6">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=500&fit=crop"
                    alt="Professional team collaboration"
                    className="rounded-xl shadow-lg w-full h-64 object-cover"
                    width={400}
                    height={500}
                  />
                  <img
                    src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?w=400&h=500&fit=crop"
                    alt="Modern warehouse and logistics"
                    className="rounded-xl shadow-lg w-full h-64 object-cover mt-8"
                    width={400}
                    height={500}
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 sm:py-24" style={{background: 'linear-gradient(135deg, var(--color-primary-dark), var(--color-primary))'}}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <Award className="h-16 w-16 mx-auto mb-6" style={{color: 'var(--color-accent-light)'}} />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6" style={{fontWeight: 700}}>
                Ready to Source with Confidence?
              </h2>
              <p className="text-lg sm:text-xl mb-8" style={{color: 'rgba(255, 255, 255, 0.9)', fontWeight: 400}}>
                Join hundreds of successful businesses who trust Priselle for their sourcing needs
              </p>
              <a
                href="/contact"
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
                Start Your Sourcing Journey
              </a>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  )
}
