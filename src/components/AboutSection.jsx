import { Users, Star, Globe, Target } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

function AboutSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg mb-6" style={{backgroundColor: 'var(--color-background-accent)', border: '1px solid var(--color-accent-light)'}}>
              <Target className="h-4 w-4" style={{color: 'var(--color-accent)'}} />
              <span className="text-sm font-semibold uppercase tracking-wider" style={{color: 'var(--color-accent-dark)', fontWeight: 600, letterSpacing: '0.05em'}}>Why Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6" style={{color: 'var(--color-text)', fontWeight: 700}}>
              Your Trusted China-Ghana Partner
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{color: 'var(--color-text-light)', fontWeight: 400}}>
              Bridging continents with expertise, quality, and reliability
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="space-y-6">
              <ScrollReveal delay={100}>
                <div className="bg-white p-8 rounded-xl hover:shadow-lg transition-all duration-300 group" style={{border: '1px solid var(--color-gray-200)'}}>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300" style={{backgroundColor: 'var(--color-background-accent)'}}>
                      <Users className="h-7 w-7" style={{color: 'var(--color-accent)'}} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl mb-3" style={{color: 'var(--color-text)', fontWeight: 600}}>Bilingual Expert Team</h3>
                      <p className="leading-relaxed" style={{color: 'var(--color-text-light)', fontWeight: 400}}>English & Chinese speaking professionals with 10+ years in international trade and manufacturing.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="bg-white p-8 rounded-xl hover:shadow-lg transition-all duration-300 group" style={{border: '1px solid var(--color-gray-200)'}}>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300" style={{backgroundColor: 'var(--color-background-accent)'}}>
                      <Star className="h-7 w-7" style={{color: 'var(--color-accent)'}} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl mb-3" style={{color: 'var(--color-text)', fontWeight: 600}}>Quality Guaranteed</h3>
                      <p className="leading-relaxed" style={{color: 'var(--color-text-light)', fontWeight: 400}}>On-ground inspections in China before every shipment. No surprises, just quality products.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="bg-white p-8 rounded-xl hover:shadow-lg transition-all duration-300 group" style={{border: '1px solid var(--color-gray-200)'}}>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300" style={{backgroundColor: 'var(--color-background-accent)'}}>
                      <Globe className="h-7 w-7" style={{color: 'var(--color-accent)'}} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl mb-3" style={{color: 'var(--color-text)', fontWeight: 600}}>Global Presence</h3>
                      <p className="leading-relaxed" style={{color: 'var(--color-text-light)', fontWeight: 400}}>Offices in China and Ghana for faster communication, better service, and local support.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal delay={400}>
            <div className="p-10 sm:p-12 rounded-2xl shadow-lg" style={{background: 'linear-gradient(135deg, var(--color-primary-dark), var(--color-primary))'}}>
              <h3 className="text-3xl sm:text-4xl text-white mb-10 text-center" style={{fontWeight: 700}}>
                Our Track Record
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-xl border transition-all hover:bg-white/15" style={{borderColor: 'rgba(255, 255, 255, 0.2)'}}>
                  <div className="text-4xl sm:text-5xl text-white mb-2" style={{fontWeight: 700, color: 'var(--color-accent-light)'}}>50+</div>
                  <div className="text-sm" style={{color: 'rgba(255, 255, 255, 0.9)', fontWeight: 400}}>Projects Completed</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-xl border transition-all hover:bg-white/15" style={{borderColor: 'rgba(255, 255, 255, 0.2)'}}>
                  <div className="text-4xl sm:text-5xl text-white mb-2" style={{fontWeight: 700, color: 'var(--color-accent-light)'}}>5+</div>
                  <div className="text-sm" style={{color: 'rgba(255, 255, 255, 0.9)', fontWeight: 400}}>Countries Served</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-xl border transition-all hover:bg-white/15" style={{borderColor: 'rgba(255, 255, 255, 0.2)'}}>
                  <div className="text-4xl sm:text-5xl text-white mb-2" style={{fontWeight: 700, color: 'var(--color-accent-light)'}}>100+</div>
                  <div className="text-sm" style={{color: 'rgba(255, 255, 255, 0.9)', fontWeight: 400}}>Verified Suppliers</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-xl border transition-all hover:bg-white/15" style={{borderColor: 'rgba(255, 255, 255, 0.2)'}}>
                  <div className="text-4xl sm:text-5xl text-white mb-2" style={{fontWeight: 700, color: 'var(--color-accent-light)'}}>98%</div>
                  <div className="text-sm" style={{color: 'rgba(255, 255, 255, 0.9)', fontWeight: 400}}>Client Satisfaction</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default AboutSection