import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useAnimations } from '../contexts/AnimationContext'

const slides = [
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop",
    title: ["Source Quality", "Products", "from China"],
    subtitle: null,
    buttonText: "Contact Us",
    buttonLink: "/contact"
  },
  {
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop",
    title: ["Discover Our", "Product Range"],
    subtitle: "From electronics to sanitary ware, we source it all",
    buttonText: "View Products",
    buttonLink: "/products"
  },
  {
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1080&fit=crop",
    title: ["End-to-End", "Sourcing Services"],
    subtitle: "Quality control, logistics, and customs handled",
    buttonText: "View Services",
    buttonLink: "/services"
  }
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const { animationsReady } = useAnimations()

  // Auto-advance disabled for better UX - users control navigation
  // Manual navigation available via arrows and dot indicators

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const slide = slides[currentSlide]

  return (
    <section
      className="section-dark relative overflow-hidden h-[60vh] sm:h-[65vh] lg:h-[70vh] flex items-center"
      data-dark-section
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/background.jpg"
          alt="Priselle Sourcing Background"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div
          className="absolute inset-0"
          style={{background: 'linear-gradient(135deg, rgba(31, 63, 74, 0.85), rgba(47, 111, 115, 0.75))'}}
        ></div>
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 -left-40 w-96 h-96 rounded-full blur-3xl"
          style={{backgroundColor: 'rgba(95, 115, 100, 0.15)'}}
        ></div>
        <div
          className="absolute bottom-0 -right-40 w-96 h-96 rounded-full blur-3xl"
          style={{backgroundColor: 'rgba(47, 111, 115, 0.2)'}}
        ></div>
      </div>

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 z-10">
        <div className="max-w-2xl lg:max-w-3xl">

          {/* Main headline with transition */}
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 leading-[1.1] tracking-tight animate-fade-in ${animationsReady ? 'play' : ''}`}>
              {slide.title.map((line, index) => (
                <span
                  key={index}
                  className="block mb-2"
                  style={{
                    color: index === slide.title.length - 1 ? 'var(--color-accent-light)' : 'white',
                    fontWeight: index === slide.title.length - 1 ? 500 : 400,
                    fontFamily: "'Playfair Display', Georgia, serif"
                  }}
                >
                  {line}
                </span>
              ))}
            </h1>

            {/* Subtitle if exists */}
            {slide.subtitle && (
              <p className="text-lg sm:text-xl mb-8" style={{color: 'rgba(255, 255, 255, 0.85)', fontWeight: 400}}>
                {slide.subtitle}
              </p>
            )}

            {/* CTA Button */}
            <div className={`mb-8 animate-fade-in-up ${animationsReady ? 'play' : ''}`}>
              <Link
                to={slide.buttonLink}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 shadow-lg hover:shadow-xl"
                style={{
                  backgroundColor: 'var(--color-accent)',
                  color: 'white',
                  fontWeight: 600
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-accent-dark)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-accent)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {slide.buttonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Show on Hover */}
      <div
        className={`absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
        }`}
      >
        <button
          onClick={prevSlide}
          className="w-10 h-10 sm:w-12 sm:h-12 backdrop-blur-md text-white rounded-xl flex items-center justify-center transition-all duration-200 shadow-lg"
          style={{
            backgroundColor: 'rgba(47, 111, 115, 0.8)',
            border: '1px solid rgba(95, 115, 100, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(95, 115, 100, 0.9)';
            e.currentTarget.style.borderColor = 'rgba(95, 115, 100, 0.8)';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(47, 111, 115, 0.8)';
            e.currentTarget.style.borderColor = 'rgba(95, 115, 100, 0.3)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      </div>
      <div
        className={`absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        <button
          onClick={nextSlide}
          className="w-10 h-10 sm:w-12 sm:h-12 backdrop-blur-md text-white rounded-xl flex items-center justify-center transition-all duration-200 shadow-lg"
          style={{
            backgroundColor: 'rgba(47, 111, 115, 0.8)',
            border: '1px solid rgba(95, 115, 100, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(95, 115, 100, 0.9)';
            e.currentTarget.style.borderColor = 'rgba(95, 115, 100, 0.8)';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(47, 111, 115, 0.8)';
            e.currentTarget.style.borderColor = 'rgba(95, 115, 100, 0.3)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-8 bg-white'
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
