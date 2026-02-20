import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

export default function Breadcrumb({ currentPage }) {
  const location = useLocation()
  const baseUrl = 'https://prisellesourcing.com'

  // Generate JSON-LD structured data for breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": currentPage,
        "item": `${baseUrl}${location.pathname}`
      }
    ]
  }

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <nav
        aria-label="Breadcrumb"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"
      >
        <ol className="flex items-center gap-2 text-sm">
          <li>
            <Link
              to="/"
              className="flex items-center gap-1 transition-colors duration-200"
              style={{ color: 'var(--color-text-light)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-light)'}
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="h-4 w-4" style={{ color: 'var(--color-text-muted)' }} />
          </li>
          <li>
            <span
              aria-current="page"
              style={{ color: 'var(--color-text)', fontWeight: 500 }}
            >
              {currentPage}
            </span>
          </li>
        </ol>
      </nav>
    </>
  )
}
