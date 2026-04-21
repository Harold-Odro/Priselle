import { useState } from 'react'
import { FileText, ExternalLink, BookOpen, Home as HomeIcon, HardHat, Filter, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import Breadcrumb from '../components/Breadcrumb'
import PageHero from '../components/PageHero'
import SectionCTA from '../components/SectionCTA'
import AnimatedCounter from '../components/AnimatedCounter'

// Use `url` for externally hosted catalogs (Google Drive, etc.)
// Use `filename` for locally hosted catalogs in /public/documents/
const catalogs = [
  {
    title: 'Bomei Wood Door',
    url: 'https://drive.google.com/file/d/1zKzgc3K2jj4LmB3eaYWBAx7X4uGf-iYJ/view?usp=sharing',
    description: 'Premium wood door designs and specifications from Bomei — interior and exterior options for residential and commercial projects.',
    category: 'Construction & Building',
  },
  {
    title: 'Chair Classic 2024',
    url: 'https://drive.google.com/file/d/1DQHL5WfVZNeRI8igWw0nSE8N1gJTyhCg/view?usp=sharing',
    description: 'Classic chair collection featuring timeless designs for home, office, and hospitality settings.',
    category: 'Home & Living',
  },
  {
    title: 'Hansi Sanitary Ware',
    url: 'https://drive.google.com/file/d/1CoExqp8ey0WqkqfTz1MXlHYIDb39Ij-w/view?usp=sharing',
    description: 'Complete sanitary ware catalog from Hansi — toilets, basins, faucets, and bathroom accessories.',
    category: 'Construction & Building',
  },
  {
    title: 'Hansi Sanitary Ware 2023',
    url: 'https://drive.google.com/file/d/1XSYYbr7jvi2u2WY3iaCDxGmZuCkZ_cwu/view?usp=sharing',
    description: 'Hansi 2023 product line featuring updated designs and new bathroom fixture collections.',
    category: 'Construction & Building',
  },
  {
    title: 'Modern Light Luxury Entrance Door',
    url: 'https://drive.google.com/file/d/1-JjqnM6d_B26aElt4YJUCnvL0E9fZlvf/view?usp=sharing',
    description: 'Modern luxury entrance door catalog — stylish and secure front door solutions for upscale projects.',
    category: 'Construction & Building',
  },
  {
    title: 'Sofas & Beds',
    url: 'https://drive.google.com/file/d/1BYuTtBKKHkbM_LyWLpfJlZavmtMKEY76/view?usp=sharing',
    description: 'Comfortable and stylish sofas and beds for residential and hospitality furnishing needs.',
    category: 'Home & Living',
  },
  {
    title: '2024/2025 Couch Collection',
    url: 'https://drive.google.com/file/d/1gNl6pwBp85hDPMC1q3ZUZkz02WlEG5QW/view?usp=sharing',
    description: 'Latest couch collection for 2024–2025 featuring modern and classic designs for living spaces.',
    category: 'Home & Living',
  },
  {
    title: '2025 Carpet Catalog',
    url: 'https://drive.google.com/file/d/16qjovHY1FxYgZfAp_yd6HE1Yiwza8AL_/view?usp=sharing',
    description: 'Comprehensive carpet catalog for 2025 — residential, commercial, and hospitality carpet solutions.',
    category: 'Home & Living',
  },
  {
    title: '3060 Mat',
    url: 'https://drive.google.com/file/d/108kvmx7yBt7bd2ED84C2xqLyaFRbXmpA/view?usp=sharing',
    description: '30x60 mat collection — durable and stylish floor mats for various applications.',
    category: 'Construction & Building',
  },
  {
    title: '6060 Mat',
    url: 'https://drive.google.com/file/d/11BDj9RnIuspkMTU-OzNfraoL8eZGYxui/view?usp=sharing',
    description: '60x60 mat collection — quality floor mats suited for commercial and residential spaces.',
    category: 'Construction & Building',
  },
  {
    title: '60x120 Design Tiles',
    url: 'https://drive.google.com/file/d/1Ou_OvzAAdmfKo-9tbwl37MiC6DoDxMSs/view?usp=sharing',
    description: 'Designer 60x120 tile catalog with premium patterns and finishes for modern interiors.',
    category: 'Construction & Building',
  },
  {
    title: '60x120 Tiles (II)',
    url: 'https://drive.google.com/file/d/1w8OIjM5IYeatRAJ3HpEjo1K86tIeiYYK/view?usp=sharing',
    description: 'Extended 60x120 tile collection — additional styles, textures, and color options.',
    category: 'Construction & Building',
  },
  {
    title: '60x120 Tiles (III)',
    url: 'https://drive.google.com/file/d/1q9m5wXVnnUpWaXX417qjk5EUFKGnXL_1/view?usp=sharing',
    description: 'Third series of 60x120 tiles featuring new designs and marble-effect finishes.',
    category: 'Construction & Building',
  },
  {
    title: '60x120 Tiles',
    url: 'https://drive.google.com/file/d/1z5EvJPrDnK7Xp7aVrGAOYPojrSGL4hOJ/view?usp=sharing',
    description: 'Standard 60x120 tile catalog — versatile porcelain and ceramic tile options.',
    category: 'Construction & Building',
  },
  {
    title: 'Decorative Chairs',
    url: 'https://drive.google.com/file/d/1TYAIzasmKHnNHkGMBcSBvcJRHuwXeV-b/view?usp=sharing',
    description: 'Decorative chair catalog — accent chairs, lounge seating, and statement furniture pieces.',
    category: 'Home & Living',
  },
  {
    title: 'Hansi Bathroom Accessories 2025',
    url: 'https://drive.google.com/file/d/1ONaCoWWhZ2H1QZ6TdZQAVWB9BW2_BmtY/view?usp=sharing',
    description: 'Hansi 2025 bathroom accessories — towel racks, soap dispensers, mirrors, and fittings.',
    category: 'Construction & Building',
  },
]

const categories = ['All', 'Construction & Building', 'Home & Living']

const categoryIcons = {
  'Construction & Building': HardHat,
  'Home & Living': HomeIcon,
}

const stats = [
  { number: 16, suffix: '', label: 'Product Catalogs' },
  { number: 10, suffix: '+', label: 'Verified Suppliers' },
  { number: 2, suffix: '', label: 'Industry Categories' },
  { number: 1000, suffix: '+', label: 'Products Featured' },
]

export default function CatalogsPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? catalogs
    : catalogs.filter(c => c.category === activeCategory)

  return (
    <div style={{ background: 'var(--color-background)' }}>
      <PageHero
        badge="Product Catalogs"
        title="Browse Our Supplier Catalogs"
        subtitle="Download detailed product catalogs from our verified suppliers — explore specifications, designs, and pricing for your next order"
        backgroundImage="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=1080&fit=crop"
      />

      {/* Breadcrumb */}
      <div style={{ background: 'var(--color-background-alt)' }}>
        <Breadcrumb currentPage="Catalogs" />
      </div>

      {/* Stats Section */}
      <section className="pt-16 pb-20 sm:pt-20 sm:pb-24" style={{ background: 'var(--color-background-alt)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl mb-2" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                    <AnimatedCounter end={stat.number} suffix={stat.suffix} duration={2000} />
                  </div>
                  <div className="text-sm sm:text-base" style={{ color: 'var(--color-text-light)' }}>
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter + Catalogs Grid */}
      <section className="py-20 sm:py-24 lg:py-32" style={{ background: 'var(--color-background)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-6">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm mb-4"
                style={{
                  backgroundColor: 'rgba(47, 111, 115, 0.08)',
                  color: 'var(--color-primary)',
                  fontWeight: 600,
                }}
              >
                <BookOpen className="h-4 w-4" />
                Supplier Catalogs
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4" style={{ color: 'var(--color-text)', fontWeight: 700 }}>
                Explore by Category
              </h2>
              <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: 'var(--color-text-light)' }}>
                Each catalog contains detailed product information, specifications, and imagery directly from our factory partners.
              </p>
            </div>
          </ScrollReveal>

          {/* Filter Tabs */}
          <ScrollReveal delay={100}>
            <div className="flex flex-wrap justify-center gap-3 mb-14">
              {categories.map((cat) => {
                const isActive = activeCategory === cat
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
                    style={{
                      backgroundColor: isActive ? 'var(--color-primary)' : 'transparent',
                      color: isActive ? 'white' : 'var(--color-text-light)',
                      border: isActive ? '2px solid var(--color-primary)' : '2px solid var(--color-border)',
                      transform: isActive ? 'scale(1.05)' : 'scale(1)',
                    }}
                  >
                    {cat === 'All' ? <Filter className="h-4 w-4" /> : null}
                    {cat === 'Construction & Building' ? <HardHat className="h-4 w-4" /> : null}
                    {cat === 'Home & Living' ? <HomeIcon className="h-4 w-4" /> : null}
                    {cat}
                    <span
                      className="ml-1 px-2 py-0.5 rounded-full text-xs"
                      style={{
                        backgroundColor: isActive ? 'rgba(255,255,255,0.2)' : 'var(--color-background-alt)',
                        color: isActive ? 'white' : 'var(--color-text-muted)',
                      }}
                    >
                      {cat === 'All' ? catalogs.length : catalogs.filter(c => c.category === cat).length}
                    </span>
                  </button>
                )
              })}
            </div>
          </ScrollReveal>

          {/* Catalogs Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((catalog, index) => {
              const href = catalog.url || (catalog.filename ? `/documents/${catalog.filename}` : '')
              const CategoryIcon = categoryIcons[catalog.category] || FileText
              return (
                <ScrollReveal key={catalog.title} delay={index * 80}>
                  <div
                    className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 h-full flex flex-col"
                    style={{
                      background: 'var(--color-surface)',
                      border: '1px solid var(--color-border)',
                      boxShadow: '0 4px 24px rgba(0, 0, 0, 0.05)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 12px 40px rgba(47, 111, 115, 0.12)'
                      e.currentTarget.style.borderColor = 'var(--color-primary)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0 4px 24px rgba(0, 0, 0, 0.05)'
                      e.currentTarget.style.borderColor = 'var(--color-border)'
                    }}
                  >
                    {/* Card Header */}
                    <div
                      className="p-6 relative overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, var(--color-primary), #1a4a56)',
                      }}
                    >
                      {/* Decorative circle */}
                      <div
                        className="absolute -top-8 -right-8 w-32 h-32 rounded-full transition-transform duration-500 group-hover:scale-125"
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)' }}
                      />
                      <div
                        className="absolute -bottom-12 -left-12 w-28 h-28 rounded-full"
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.04)' }}
                      />

                      <div className="relative flex items-center gap-4">
                        <div
                          className="w-13 h-13 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                          style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.15)',
                            backdropFilter: 'blur(8px)',
                            width: '52px',
                            height: '52px',
                          }}
                        >
                          <FileText className="h-6 w-6 text-white" />
                        </div>
                        <div className="min-w-0">
                          <h3
                            className="text-lg text-white leading-tight truncate"
                            style={{ fontWeight: 600 }}
                          >
                            {catalog.title}
                          </h3>
                          <div className="flex items-center gap-1.5 mt-1.5">
                            <CategoryIcon className="h-3 w-3" style={{ color: 'rgba(255, 255, 255, 0.6)' }} />
                            <span
                              className="text-xs font-medium"
                              style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                            >
                              {catalog.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 flex-1 flex flex-col">
                      <p
                        className="text-sm leading-relaxed flex-1 mb-6"
                        style={{ color: 'var(--color-text-light)', lineHeight: '1.7' }}
                      >
                        {catalog.description}
                      </p>

                      {href ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 group/btn"
                          style={{
                            backgroundColor: 'var(--color-primary)',
                            color: 'white',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#1a4a56'
                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(47, 111, 115, 0.3)'
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'var(--color-primary)'
                            e.currentTarget.style.boxShadow = 'none'
                          }}
                        >
                          <ExternalLink className="h-4 w-4" />
                          View Catalog
                          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                        </a>
                      ) : (
                        <div
                          className="text-center py-3.5 rounded-xl text-sm font-medium"
                          style={{ color: 'var(--color-text-muted)', backgroundColor: 'var(--color-background-alt)' }}
                        >
                          Coming soon
                        </div>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <FileText className="h-16 w-16 mx-auto mb-4" style={{ color: 'var(--color-text-muted)' }} />
              <p className="text-lg" style={{ color: 'var(--color-text-light)' }}>
                No catalogs found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 sm:py-20" style={{ background: 'var(--color-background-alt)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div
              className="rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center gap-8"
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
              }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(145deg, var(--color-primary), #1a4a56)' }}
              >
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl sm:text-2xl mb-2" style={{ color: 'var(--color-text)', fontWeight: 600 }}>
                  Can't find what you're looking for?
                </h3>
                <p style={{ color: 'var(--color-text-light)' }}>
                  We source from hundreds of verified factories across China. Tell us what you need and we'll find the right supplier catalog for you.
                </p>
              </div>
              <Link
                to="/sourcing/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg flex-shrink-0"
                style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}
              >
                Contact Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <SectionCTA
        heading="Need a Custom Quote?"
        subtitle="Found something in our catalogs? Get in touch and we'll provide competitive pricing, customization options, and shipping estimates."
        primaryLink="/sourcing/contact"
        primaryLabel="Request a Quote"
        secondaryLink="/sourcing/products"
        secondaryLabel="View All Products"
      />
    </div>
  )
}
