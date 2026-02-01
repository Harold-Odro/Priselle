import { useState, useEffect, useCallback } from 'react'
import { Star, FileText, ArrowRight, Box } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { products } from '../data/products'

const SLIDESHOW_INTERVAL_MS = 6000
const MAX_VISIBLE_FEATURES = 4

export default function ProductSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const navigate = useNavigate()

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % products.length)
  }, [products.length])

  // Auto-slide functionality with pause on hover
  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      nextSlide()
    }, SLIDESHOW_INTERVAL_MS)

    return () => clearInterval(timer)
  }, [isAutoPlaying, nextSlide])

  // Handle Get Quote
  const handleGetQuote = useCallback((product) => {
    const productInfo = `${product.category} - ${product.name}`
    sessionStorage.setItem('selectedProduct', productInfo)
    navigate('/contact')
  }, [navigate])

  return (
    <section className="py-20 sm:py-24 lg:py-32" style={{backgroundColor: 'var(--color-background-alt)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg mb-6" style={{backgroundColor: 'var(--color-background-accent)', border: '1px solid var(--color-accent-light)'}}>
            <Box className="h-4 w-4" style={{color: 'var(--color-accent)'}} />
            <span className="text-sm font-semibold uppercase tracking-wide" style={{color: 'var(--color-accent-dark)', fontWeight: 600}}>Our Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6" style={{color: 'var(--color-text)', fontWeight: 700}}>
            Featured Products
          </h2>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto" style={{color: 'var(--color-text-light)', fontWeight: 400}}>
            Examples of quality products we source from verified Chinese manufacturers
          </p>
        </div>

        {/* Main Slideshow Container */}
        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Slideshow */}
          <div className="overflow-hidden rounded-2xl shadow-2xl bg-white">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {products.map((product) => (
                <div key={product.id} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Product Image */}
                    <div className="relative aspect-square md:aspect-auto">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        width={800}
                        height={600}
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold shadow-lg" style={{color: 'var(--color-accent-dark)', border: '1px solid var(--color-accent-light)'}}>
                          {product.category}
                        </span>
                      </div>
                      {/* Image overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4"
                            style={{
                              color: i < Math.floor(product.rating) ? 'var(--color-accent)' : 'var(--color-gray-300)',
                              fill: i < Math.floor(product.rating) ? 'var(--color-accent)' : 'var(--color-gray-300)'
                            }}
                          />
                        ))}
                        <span className="ml-2 text-sm font-medium" style={{color: 'var(--color-text-light)'}}>
                          {product.rating}
                        </span>
                      </div>

                      {/* Title and Description */}
                      <h3 className="text-2xl sm:text-3xl mb-3" style={{color: 'var(--color-text)', fontWeight: 700}}>
                        {product.name}
                      </h3>
                      <p className="text-base leading-relaxed mb-6" style={{color: 'var(--color-text-light)', fontWeight: 400}}>
                        {product.description}
                      </p>

                      {/* Features */}
                      <div className="mb-8">
                        <h4 className="text-sm font-semibold uppercase tracking-wide mb-3" style={{color: 'var(--color-text)', fontWeight: 600}}>
                          Key Features
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {product.features.slice(0, MAX_VISIBLE_FEATURES).map((feature, i) => (
                            <span
                              key={i}
                              className="px-3 py-1.5 rounded-lg text-sm font-medium"
                              style={{
                                backgroundColor: 'var(--color-background-accent)',
                                color: 'var(--color-accent-dark)',
                                border: '1px solid var(--color-accent-light)',
                                fontWeight: 500
                              }}
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <button
                        onClick={() => handleGetQuote(product)}
                        className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
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
                        <FileText className="mr-2 h-5 w-5" />
                        Request Quote
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: index === currentSlide ? '2rem' : '0.5rem',
                  backgroundColor: index === currentSlide ? 'var(--color-accent)' : 'var(--color-gray-300)'
                }}
                onMouseEnter={(e) => {
                  if (index !== currentSlide) {
                    e.currentTarget.style.backgroundColor = 'var(--color-gray-600)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (index !== currentSlide) {
                    e.currentTarget.style.backgroundColor = 'var(--color-gray-300)';
                  }
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All Products Button */}
        <div className="mt-16 text-center">
          <Link
            to="/products"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
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
            View Full Portfolio
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}