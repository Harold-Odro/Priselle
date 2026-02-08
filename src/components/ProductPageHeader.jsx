import { Search, Shield, Package } from 'lucide-react'

export default function ProductPageHeader() {
  return (
    <section
      className="section-dark relative overflow-hidden py-24 sm:py-28 lg:py-36"
      data-dark-section
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=1920&h=1080&fit=crop"
          alt="Portfolio Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{background: 'linear-gradient(135deg, rgba(31, 63, 74, 0.85), rgba(47, 111, 115, 0.75))'}}></div>
      </div>

      {/* Glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-40 w-96 h-96 rounded-full blur-3xl" style={{backgroundColor: 'rgba(95, 115, 100, 0.15)'}}></div>
        <div className="absolute bottom-0 -right-40 w-96 h-96 rounded-full blur-3xl" style={{backgroundColor: 'rgba(47, 111, 115, 0.2)'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          {/* Icon */}
          <div
            className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl shadow-xl mb-8"
            style={{background: 'linear-gradient(145deg, var(--color-primary), var(--color-primary-light))'}}
          >
            <Package className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            <span style={{fontFamily: "'Playfair Display', Georgia, serif"}}>
              Sourcing Portfolio
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl mb-10 max-w-3xl mx-auto leading-relaxed" style={{color: 'rgba(255, 255, 255, 0.85)'}}>
            Explore what we can source for your business from verified Chinese suppliers
          </p>

          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
            <div
              className="flex items-center space-x-2.5 px-5 py-3 rounded-full shadow-sm"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <Search className="h-5 w-5" style={{color: 'var(--color-accent-light)'}} />
              <span className="text-white font-semibold text-base">1000+ Verified Suppliers</span>
            </div>
            <div
              className="flex items-center space-x-2.5 px-5 py-3 rounded-full shadow-sm"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <Shield className="h-5 w-5" style={{color: 'var(--color-accent-light)'}} />
              <span className="text-white font-semibold text-base">Quality Control Included</span>
            </div>
            <div
              className="flex items-center space-x-2.5 px-5 py-3 rounded-full shadow-sm"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <Package className="h-5 w-5" style={{color: 'var(--color-accent-light)'}} />
              <span className="text-white font-semibold text-base">Custom Sourcing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
