export default function PageHero({ badge, title, subtitle, backgroundImage, children }) {
  return (
    <section
      className="section-dark relative overflow-hidden py-20 sm:py-24 lg:py-32"
      data-dark-section
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt=""
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(31, 63, 74, 0.92), rgba(47, 111, 115, 0.88))' }}
        />
      </div>

      {/* Glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 -left-40 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(95, 115, 100, 0.15)' }}
        />
        <div
          className="absolute bottom-0 -right-40 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(47, 111, 115, 0.2)' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {badge && (
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-6"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'var(--color-accent-light)' }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: 'var(--color-accent-light)' }}
            />
            {badge}
          </div>
        )}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
          {title}
        </h1>
        {subtitle && (
          <p
            className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: 'rgba(255, 255, 255, 0.85)' }}
          >
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}
