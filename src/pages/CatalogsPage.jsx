import { Download, FileText, Eye } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import Breadcrumb from '../components/Breadcrumb'
import PageHero from '../components/PageHero'
import SectionCTA from '../components/SectionCTA'

const catalogs = [
  {
    title: 'Bomei Wood Door',
    filename: 'BOMEI WOOD DOOR.pdf',
    description: 'Premium wood door designs and specifications from Bomei — interior and exterior options for residential and commercial projects.',
    category: 'Construction & Building',
  },
  {
    title: 'Chair Classic 2024',
    filename: 'CHAIR CLASSIC 2024.pdf',
    description: 'Classic chair collection featuring timeless designs for home, office, and hospitality settings.',
    category: 'Home & Living',
  },
  {
    title: 'Hansi Sanitary Ware',
    filename: 'HANSI SANITARY WARE.pdf',
    description: 'Complete sanitary ware catalog from Hansi — toilets, basins, faucets, and bathroom accessories.',
    category: 'Construction & Building',
  },
  {
    title: 'Hansi Sanitary Ware 2023',
    filename: 'HANSI SANITARY WARE 2023WKL(1).pdf',
    description: 'Hansi 2023 product line featuring updated designs and new bathroom fixture collections.',
    category: 'Construction & Building',
  },
  {
    title: 'Modern Light Luxury Entrance Door',
    filename: 'MODERN LIGHT LUXURY ENTRANCE DOOR.pdf',
    description: 'Modern luxury entrance door catalog — stylish and secure front door solutions for upscale projects.',
    category: 'Construction & Building',
  },
  {
    title: 'Sofas & Beds',
    filename: 'SOFAS AND BEDS.pdf',
    description: 'Comfortable and stylish sofas and beds for residential and hospitality furnishing needs.',
    category: 'Home & Living',
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
            {catalogs.map((catalog, index) => (
              <ScrollReveal key={catalog.filename} delay={index * 100}>
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

                    <div className="flex gap-3">
                      <a
                        href={`/documents/${catalog.filename}`}
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
                        href={`/documents/${catalog.filename}`}
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
                  </div>
                </div>
              </ScrollReveal>
            ))}
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
