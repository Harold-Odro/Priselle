import { Download, FileText, Eye, ExternalLink } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import Breadcrumb from '../components/Breadcrumb'
import PageHero from '../components/PageHero'
import SectionCTA from '../components/SectionCTA'

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

export default function CatalogsPage() {
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

      {/* Catalogs Grid */}
      <section className="py-20 sm:py-24 lg:py-32" style={{ background: 'var(--color-background-alt)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4" style={{ color: 'var(--color-text)' }}>
                Supplier Catalogs
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-text-light)' }}>
                Each catalog contains detailed product information, specifications, and imagery directly from our factory partners.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {catalogs.map((catalog, index) => {
              const href = catalog.url || (catalog.filename ? `/documents/${catalog.filename}` : '')
              return (
              <ScrollReveal key={catalog.title} delay={index * 100}>
                <div
                  className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full flex flex-col"
                  style={{
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                  }}
                >
                  {/* Card Header */}
                  <div
                    className="p-6 flex items-center gap-4"
                    style={{
                      background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark, #1a4a56))',
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                    >
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white leading-tight">
                        {catalog.title}
                      </h3>
                      <span
                        className="text-xs font-medium mt-1 inline-block"
                        style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                      >
                        {catalog.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: 'var(--color-text-light)' }}>
                      {catalog.description}
                    </p>

                    {href ? (
                      catalog.url ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                          style={{
                            backgroundColor: 'var(--color-primary)',
                            color: 'white',
                          }}
                        >
                          <ExternalLink className="h-4 w-4" />
                          View Catalog
                        </a>
                      ) : (
                        <div className="flex gap-3">
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                            style={{
                              backgroundColor: 'var(--color-primary)',
                              color: 'white',
                            }}
                          >
                            <Eye className="h-4 w-4" />
                            View
                          </a>
                          <a
                            href={href}
                            download
                            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 border-2"
                            style={{
                              backgroundColor: 'transparent',
                              color: 'var(--color-primary)',
                              borderColor: 'var(--color-primary)',
                            }}
                          >
                            <Download className="h-4 w-4" />
                            Download
                          </a>
                        </div>
                      )
                    ) : (
                      <div
                        className="text-center py-3 rounded-xl text-sm font-medium"
                        style={{ color: 'var(--color-text-muted)', backgroundColor: 'var(--color-background-alt)' }}
                      >
                        Coming soon
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            )})}
          </div>
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
