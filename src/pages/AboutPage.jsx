import { Users, Target, Award, Globe2, TrendingUp, CheckCircle2, Quote, Building2, Handshake, ShieldCheck, ArrowRight } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import AnimatedCounter from '../components/AnimatedCounter'
import SEO from '../components/SEO'
import Breadcrumb from '../components/Breadcrumb'

export default function AboutPage() {
  const stats = [
    { number: 10, suffix: "+", label: "Years Industry Experience" },
    { number: 50, suffix: "+", label: "Vetted Suppliers" },
    { number: 24, suffix: "/7", label: "Client Support" },
    { number: 100, suffix: "%", label: "Commitment to Quality" }
  ]

  const milestones = [
    {
      year: "2024",
      icon: Building2,
      title: "Founded in China",
      description: "Priselle was established with a vision to bridge global businesses with China's manufacturing excellence.",
      stat: "Our journey begins",
      side: "left"
    },
    {
      year: "2024",
      icon: Handshake,
      title: "Building Our Network",
      description: "Rapidly building partnerships with verified manufacturers across diverse product categories.",
      stat: "Growing partnerships",
      side: "right"
    },
    {
      year: "2024",
      icon: ShieldCheck,
      title: "Quality Standards",
      description: "Implementing rigorous quality control protocols and on-ground inspection processes from day one.",
      stat: "Quality first approach",
      side: "left"
    },
    {
      year: "Future",
      icon: Globe2,
      title: "Global Expansion",
      description: "Expanding our reach to serve clients across North America, Europe, Australia, and beyond.",
      stat: "Your success, our mission",
      side: "right"
    },
    {
      year: "Vision",
      icon: TrendingUp,
      title: "Sustainable Growth",
      description: "Building towards a future of sustainable sourcing and long-term partnerships with clients worldwide.",
      stat: "Growing together",
      side: "left"
    }
  ]

  const values = [
    {
      icon: Target,
      title: "Quality First",
      description: "Rigorous quality control at every stage ensures only the best products reach your hands",
      featured: true
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
    "Direct access to vetted Chinese manufacturers",
    "On-ground presence in China for quality assurance",
    "Expert negotiation securing competitive prices",
    "End-to-end logistics and customs handling",
    "Transparent communication throughout the process",
    "Personalized service tailored to your business needs"
  ]

  return (
    <>
      <SEO
        title="About Us | Priselle Sourcing and Trade"
        description="Learn about Priselle Sourcing and Trade - your trusted partner for China sourcing with experienced professionals and vetted supplier networks."
        keywords="about priselle, china sourcing company, sourcing partner, manufacturing solutions, trade services"
      />

      <div style={{ background: 'var(--color-background)' }}>
        {/* Hero Section - Split Screen */}
        <section
          className="section-dark relative overflow-hidden py-20 sm:py-24 lg:py-32"
          data-dark-section
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&h=1080&fit=crop"
              alt=""
              className="w-full h-full object-cover"
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0" style={{background: 'linear-gradient(135deg, rgba(31, 63, 74, 0.92), rgba(47, 111, 115, 0.88))'}}></div>
          </div>

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 -left-40 w-96 h-96 rounded-full blur-3xl" style={{backgroundColor: 'rgba(95, 115, 100, 0.15)'}}></div>
            <div className="absolute bottom-0 -right-40 w-96 h-96 rounded-full blur-3xl" style={{backgroundColor: 'rgba(47, 111, 115, 0.2)'}}></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-6"
              style={{backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'var(--color-accent-light)'}}
            >
              <span className="w-2 h-2 rounded-full" style={{backgroundColor: 'var(--color-accent-light)'}}></span>
              About Priselle
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
              Your Trusted Bridge to
              <span className="block mt-2" style={{color: 'var(--color-accent-light)'}}>China's Manufacturing Excellence</span>
            </h1>
            <p className="text-lg sm:text-xl mb-8 leading-relaxed max-w-3xl mx-auto" style={{color: 'rgba(255, 255, 255, 0.85)'}}>
              We connect global businesses with premium Chinese manufacturers,
              ensuring quality, competitive pricing, and seamless delivery for every project.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 shadow-lg hover:shadow-xl gap-2"
                style={{backgroundColor: 'var(--color-accent)', color: 'white'}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-accent-dark)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-accent)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Start Your Project
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div style={{background: 'var(--color-background-alt)'}}>
          <Breadcrumb currentPage="About Us" />
        </div>

        {/* Animated Stats Section */}
        <section className="pt-16 pb-20 sm:pt-20 sm:pb-24" style={{background: 'var(--color-background-alt)'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="text-center">
                    <div className="text-4xl sm:text-5xl mb-2" style={{color: 'var(--color-primary)', fontWeight: 600}}>
                      <AnimatedCounter
                        end={stat.number}
                        suffix={stat.suffix}
                        duration={2000}
                      />
                    </div>
                    <div className="text-sm sm:text-base" style={{color: 'var(--color-text-light)'}}>
                      {stat.label}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story - Interactive Timeline */}
        <section className="py-20 sm:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4" style={{color: 'var(--color-text)'}}>
                  Our Story
                </h2>
                <p className="text-lg max-w-2xl mx-auto" style={{color: 'var(--color-text-light)'}}>
                  From a vision to reality - the journey of building bridges between global businesses and China's manufacturing excellence
                </p>
              </div>
            </ScrollReveal>

            {/* Timeline */}
            <div className="relative">
              {/* Desktop Timeline Line */}
              <div
                className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
                style={{backgroundColor: 'var(--color-border)'}}
              ></div>

              {/* Mobile Timeline Line */}
              <div
                className="lg:hidden absolute left-6 top-0 bottom-0 w-0.5"
                style={{backgroundColor: 'var(--color-border)'}}
              ></div>

              {/* Milestones */}
              <div className="space-y-12 lg:space-y-16">
                {milestones.map((milestone, index) => {
                  const Icon = milestone.icon
                  const isLeft = milestone.side === 'left'

                  return (
                    <ScrollReveal key={index} delay={index * 150}>
                      <div className={`relative flex items-start gap-6 lg:gap-0 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                        {/* Mobile Year Badge */}
                        <div
                          className="lg:hidden flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-semibold z-10"
                          style={{backgroundColor: 'var(--color-primary)'}}
                        >
                          {milestone.year.slice(-2)}
                        </div>

                        {/* Content Card */}
                        <div className={`flex-1 lg:w-5/12 ${isLeft ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`}>
                          <div
                            className="card rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 group"
                            style={{backgroundColor: 'rgba(255, 255, 255, 0.95)'}}
                          >
                            <div className={`flex items-center gap-4 mb-4 ${isLeft ? 'lg:flex-row-reverse' : ''}`}>
                              <div
                                className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                                style={{background: 'linear-gradient(145deg, var(--color-primary), var(--color-primary-light))'}}
                              >
                                <Icon className="h-7 w-7 text-white" />
                              </div>
                              <div className={isLeft ? 'lg:text-right' : ''}>
                                <h3 className="text-xl font-semibold" style={{color: 'var(--color-text)'}}>
                                  {milestone.title}
                                </h3>
                                <span className="text-sm hidden lg:inline" style={{color: 'var(--color-primary)'}}>
                                  {milestone.year}
                                </span>
                              </div>
                            </div>
                            <p className={`mb-4 leading-relaxed ${isLeft ? 'lg:text-right' : ''}`} style={{color: 'var(--color-text-light)'}}>
                              {milestone.description}
                            </p>
                            <div
                              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm ${isLeft ? 'lg:ml-auto' : ''}`}
                              style={{backgroundColor: 'rgba(47, 111, 115, 0.1)', color: 'var(--color-primary)'}}
                            >
                              <span className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: 'var(--color-primary)'}}></span>
                              {milestone.stat}
                            </div>
                          </div>
                        </div>

                        {/* Desktop Center Year Badge */}
                        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                          <div
                            className="w-16 h-16 rounded-full flex items-center justify-center text-white text-lg font-semibold shadow-lg z-10"
                            style={{backgroundColor: 'var(--color-primary)'}}
                          >
                            {milestone.year}
                          </div>
                        </div>

                        {/* Desktop Spacer */}
                        <div className="hidden lg:block lg:w-5/12"></div>
                      </div>
                    </ScrollReveal>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Founder Spotlight */}
        <section className="py-20 sm:py-24" style={{background: 'var(--color-background-alt)'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{background: 'linear-gradient(135deg, var(--color-primary-dark), var(--color-primary))'}}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                  <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl" style={{backgroundColor: 'var(--color-accent-light)'}}></div>
                  <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full blur-3xl" style={{backgroundColor: 'var(--color-primary-light)'}}></div>
                </div>

                <div className="relative grid md:grid-cols-2 gap-8 lg:gap-12 p-8 sm:p-12 lg:p-16 items-center">
                  {/* Photo */}
                  <div className="relative">
                    <div className="relative aspect-[4/5] max-w-sm mx-auto md:mx-0">
                      <img
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop"
                        alt="Priscilla Bervell - Founder"
                        className="w-full h-full object-cover rounded-2xl shadow-2xl"
                        width={400}
                        height={500}
                      />
                      <div
                        className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full blur-3xl -z-10"
                        style={{backgroundColor: 'rgba(95, 115, 100, 0.4)'}}
                      ></div>
                    </div>
                  </div>

                  {/* Quote & Bio */}
                  <div className="text-center md:text-left">
                    <Quote className="h-12 w-12 mb-6 opacity-50" style={{color: 'var(--color-accent-light)'}} />
                    <blockquote className="text-xl sm:text-2xl lg:text-3xl text-white mb-8 leading-relaxed italic">
                      "Our mission is simple: to make international sourcing accessible,
                      transparent, and reliable for businesses of all sizes."
                    </blockquote>
                    <div className="space-y-2">
                      <h3 className="text-2xl text-white font-semibold">Priscilla Bervell</h3>
                      <p style={{color: 'var(--color-accent-light)'}}>Founder & CEO, Priselle Sourcing and Trade</p>
                    </div>
                    <p className="mt-6 leading-relaxed" style={{color: 'rgba(255, 255, 255, 0.85)'}}>
                      With deep roots in both Chinese manufacturing and international trade,
                      Priscilla founded Priselle to bridge the gap between quality manufacturers
                      and businesses worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Core Values - Bento Grid */}
        <section className="py-20 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4" style={{color: 'var(--color-text)'}}>
                  Our Core Values
                </h2>
                <p className="text-lg max-w-2xl mx-auto" style={{color: 'var(--color-text-light)'}}>
                  The principles that guide every decision we make and every partnership we build
                </p>
              </div>
            </ScrollReveal>

            {/* Bento Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon
                const isFeatured = value.featured

                return (
                  <ScrollReveal key={index} delay={index * 100}>
                    <div
                      className={`card rounded-2xl p-8 hover:shadow-xl transition-all duration-300 h-full group ${
                        isFeatured ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''
                      }`}
                      style={{
                        backgroundColor: isFeatured ? 'var(--color-primary)' : 'rgba(255, 255, 255, 0.95)',
                      }}
                    >
                      <div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${
                          isFeatured ? '' : ''
                        }`}
                        style={{
                          background: isFeatured
                            ? 'rgba(255, 255, 255, 0.2)'
                            : 'linear-gradient(145deg, var(--color-primary), var(--color-primary-light))'
                        }}
                      >
                        <Icon className={`h-8 w-8 ${isFeatured ? 'text-white' : 'text-white'}`} />
                      </div>
                      <h3
                        className={`text-xl mb-3 ${isFeatured ? 'lg:text-2xl' : ''}`}
                        style={{
                          color: isFeatured ? 'white' : 'var(--color-text)',
                          fontWeight: 600
                        }}
                      >
                        {value.title}
                      </h3>
                      <p
                        className={`leading-relaxed ${isFeatured ? 'lg:text-lg' : ''}`}
                        style={{
                          color: isFeatured ? 'rgba(255, 255, 255, 0.9)' : 'var(--color-text-light)'
                        }}
                      >
                        {value.description}
                      </p>
                      {isFeatured && (
                        <div className="mt-6 pt-6 border-t border-white/20">
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full bg-white/50"></div>
                            <span className="text-white/80 text-sm">Our #1 priority since day one</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 sm:py-24 lg:py-32" style={{background: 'var(--color-background-alt)'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <ScrollReveal>
                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6" style={{color: 'var(--color-text)'}}>
                    Why Choose Priselle?
                  </h2>
                  <p className="text-lg mb-8" style={{color: 'var(--color-text-light)'}}>
                    We're not just a sourcing company—we're your strategic partner in China,
                    committed to your success.
                  </p>
                  <div className="space-y-4">
                    {whyChooseUs.map((reason, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-white/50 group cursor-default"
                      >
                        <CheckCircle2
                          className="h-6 w-6 flex-shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110"
                          style={{color: 'var(--color-primary)'}}
                        />
                        <span
                          className="transition-colors duration-200"
                          style={{color: 'var(--color-text-light)'}}
                        >
                          {reason}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="relative">
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

                  {/* Floating Stats Card */}
                  <div
                    className="absolute -bottom-6 left-1/2 -translate-x-1/2 p-5 rounded-xl shadow-2xl flex items-center gap-4"
                    style={{backgroundColor: 'white'}}
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{background: 'linear-gradient(145deg, var(--color-primary), var(--color-primary-light))'}}
                    >
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-semibold" style={{color: 'var(--color-primary)'}}>100%</div>
                      <div className="text-sm" style={{color: 'var(--color-text-light)'}}>Quality Commitment</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA Section with Testimonial */}
        <section
          className="section-dark py-20 sm:py-24"
          data-dark-section
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* CTA Content */}
              <ScrollReveal>
                <div className="text-center md:text-left">
                  <Award className="h-14 w-14 mb-6 mx-auto md:mx-0" style={{color: 'var(--color-accent-light)'}} />
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
                    Ready to Source with Confidence?
                  </h2>
                  <p className="text-lg sm:text-xl mb-8" style={{color: 'rgba(255, 255, 255, 0.85)'}}>
                    Join hundreds of successful businesses who trust Priselle for their sourcing needs
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 shadow-lg hover:shadow-xl gap-2"
                      style={{backgroundColor: 'var(--color-accent)', color: 'white'}}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--color-accent-dark)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--color-accent)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      Start Your Project
                      <ArrowRight className="h-5 w-5" />
                    </a>
                    <a
                      href="/services"
                      className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 gap-2"
                      style={{
                        backgroundColor: 'transparent',
                        color: 'white',
                        border: '2px solid rgba(255, 255, 255, 0.3)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                      }}
                    >
                      View Our Services
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              {/* Mini Testimonial */}
              <ScrollReveal delay={200}>
                <div
                  className="rounded-2xl p-8"
                  style={{backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)'}}
                >
                  <Quote className="h-10 w-10 mb-4 opacity-50" style={{color: 'var(--color-accent-light)'}} />
                  <p className="text-lg text-white mb-6 leading-relaxed italic">
                    "Working with Priselle transformed our supply chain. Their attention to quality
                    and transparent communication made sourcing from China seamless and stress-free."
                  </p>
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold"
                      style={{backgroundColor: 'var(--color-accent)'}}
                    >
                      JM
                    </div>
                    <div>
                      <div className="text-white font-semibold">James Mitchell</div>
                      <div className="text-sm" style={{color: 'rgba(255, 255, 255, 0.7)'}}>CEO, Mitchell Imports</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
