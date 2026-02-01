import { useState, useEffect, useCallback } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight, Building2 } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechVision Inc.',
    country: 'USA',
    image: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=3B82F6&color=fff&size=128',
    rating: 5,
    text: 'Priselle transformed our sourcing process. Their attention to quality control and transparent communication made importing from China seamless. We\'ve reduced costs by 35% while improving product quality.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Procurement Director',
    company: 'Global Retail Solutions',
    country: 'UK',
    image: 'https://ui-avatars.com/api/?name=Michael+Chen&background=6366F1&color=fff&size=128',
    rating: 5,
    text: 'Working with Priselle has been a game-changer. Their network of verified suppliers and rigorous quality checks give us complete confidence. The team handles everything from sourcing to delivery.',
  },
  {
    id: 3,
    name: 'Amara Osei',
    role: 'Founder',
    company: 'AfriStyle Fashion',
    country: 'Ghana',
    image: 'https://ui-avatars.com/api/?name=Amara+Osei&background=8B5CF6&color=fff&size=128',
    rating: 5,
    text: 'As a growing fashion brand, finding reliable suppliers was our biggest challenge. Priselle not only found us perfect manufacturers but also ensured every shipment met our standards. Exceptional service!',
  },
  {
    id: 4,
    name: 'David Martinez',
    role: 'Operations Manager',
    company: 'ElectroHub',
    country: 'Spain',
    image: 'https://ui-avatars.com/api/?name=David+Martinez&background=EC4899&color=fff&size=128',
    rating: 5,
    text: 'The professionalism and expertise of Priselle\'s team is outstanding. They navigated complex logistics and customs with ease. Our products arrived on time and exactly as specified. Highly recommended!',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlaying, nextTestimonial])

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg mb-6" style={{backgroundColor: 'var(--color-background-accent)', border: '1px solid var(--color-accent-light)'}}>
              <Star className="h-4 w-4" style={{color: 'var(--color-accent)', fill: 'var(--color-accent)'}} />
              <span className="text-sm font-semibold uppercase tracking-wider" style={{color: 'var(--color-accent-dark)', fontWeight: 600, letterSpacing: '0.05em'}}>Client Success Stories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4" style={{color: 'var(--color-text)', fontWeight: 700}}>
              Trusted by Businesses Worldwide
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{color: 'var(--color-text-light)', fontWeight: 400}}>
              Join hundreds of satisfied clients who've transformed their sourcing strategy with Priselle
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div
            className="relative max-w-5xl mx-auto"
            onMouseEnter={() => {
              setIsAutoPlaying(false)
              setIsHovered(true)
            }}
            onMouseLeave={() => {
              setIsAutoPlaying(true)
              setIsHovered(false)
            }}
          >
            {/* Main testimonial card */}
            <div className="rounded-2xl p-8 sm:p-12 lg:p-16 relative overflow-hidden" style={{backgroundColor: 'var(--color-background-alt)', border: '1px solid var(--color-gray-200)'}}>
              {/* Decorative quote icon */}
              <div className="absolute top-8 right-8 opacity-5">
                <Quote className="h-32 w-32" style={{color: 'var(--color-primary)'}} />
              </div>

              <div className="relative">
                {/* Rating */}
                <div className="flex justify-center gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5"
                      style={{color: 'var(--color-accent)', fill: 'var(--color-accent)'}}
                    />
                  ))}
                </div>

                {/* Testimonial text */}
                <blockquote className="text-lg sm:text-xl leading-relaxed text-center mb-10" style={{color: 'var(--color-text)', fontWeight: 400}}>
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Author info */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full border-2"
                    style={{borderColor: 'var(--color-accent-light)'}}
                  />
                  <div className="text-center sm:text-left">
                    <div className="text-lg" style={{color: 'var(--color-text)', fontWeight: 600}}>
                      {testimonials[currentIndex].name}
                    </div>
                    <div style={{color: 'var(--color-text-light)', fontWeight: 400}}>
                      {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 mt-1" style={{color: 'var(--color-accent)'}}>
                      <Building2 className="h-4 w-4" />
                      <span className="text-sm font-medium" style={{fontWeight: 500}}>{testimonials[currentIndex].country}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation arrows - Show on hover */}
              <div
                className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                  isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                }`}
              >
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 sm:w-11 sm:h-11 backdrop-blur-sm rounded-lg flex items-center justify-center transition-all duration-200 shadow-md"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    border: '1px solid var(--color-gray-200)',
                    color: 'var(--color-primary)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-accent)';
                    e.currentTarget.style.borderColor = 'var(--color-accent)';
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                    e.currentTarget.style.borderColor = 'var(--color-gray-200)';
                    e.currentTarget.style.color = 'var(--color-primary)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
              </div>

              <div
                className={`absolute right-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                  isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
                }`}
              >
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 sm:w-11 sm:h-11 backdrop-blur-sm rounded-lg flex items-center justify-center transition-all duration-200 shadow-md"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    border: '1px solid var(--color-gray-200)',
                    color: 'var(--color-primary)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-accent)';
                    e.currentTarget.style.borderColor = 'var(--color-accent)';
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                    e.currentTarget.style.borderColor = 'var(--color-gray-200)';
                    e.currentTarget.style.color = 'var(--color-primary)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
              </div>
            </div>

            {/* Indicator dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: index === currentIndex ? '2rem' : '0.5rem',
                    backgroundColor: index === currentIndex ? 'var(--color-accent)' : 'var(--color-gray-300)'
                  }}
                  onMouseEnter={(e) => {
                    if (index !== currentIndex) {
                      e.currentTarget.style.backgroundColor = 'var(--color-gray-600)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (index !== currentIndex) {
                      e.currentTarget.style.backgroundColor = 'var(--color-gray-300)';
                    }
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Trust metrics */}
        <ScrollReveal delay={400}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-2" style={{color: 'var(--color-accent)', fontWeight: 700}}>4.9/5</div>
              <div style={{color: 'var(--color-text-light)', fontWeight: 400}}>Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-2" style={{color: 'var(--color-accent)', fontWeight: 700}}>500+</div>
              <div style={{color: 'var(--color-text-light)', fontWeight: 400}}>Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-2" style={{color: 'var(--color-accent)', fontWeight: 700}}>98%</div>
              <div style={{color: 'var(--color-text-light)', fontWeight: 400}}>Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-2" style={{color: 'var(--color-accent)', fontWeight: 700}}>50+</div>
              <div style={{color: 'var(--color-text-light)', fontWeight: 400}}>Countries</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}