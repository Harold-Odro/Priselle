import { Search, Shield, Package } from 'lucide-react'

export default function ProductPageHeader() {
  return (
    <section
      className="section-dark relative overflow-hidden py-20 sm:py-24 lg:py-32"
      data-dark-section
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=1920&h=1080&fit=crop"
          alt=""
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0" style={{background: 'linear-gradient(135deg, rgba(31, 63, 74, 0.92), rgba(47, 111, 115, 0.88))'}}></div>
      </div>

      {/* Glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-40 w-96 h-96 rounded-full blur-3xl" style={{backgroundColor: 'rgba(95, 115, 100, 0.15)'}}></div>
        <div className="absolute bottom-0 -right-40 w-96 h-96 rounded-full blur-3xl" style={{backgroundColor: 'rgba(47, 111, 115, 0.2)'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-6"
            style={{backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'var(--color-accent-light)'}}
          >
            <span className="w-2 h-2 rounded-full" style={{backgroundColor: 'var(--color-accent-light)'}}></span>
            Our Portfolio
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Sourcing Portfolio
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
              <span className="text-white font-semibold text-base">Vetted Suppliers</span>
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
