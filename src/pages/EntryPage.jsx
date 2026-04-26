import { useNavigate } from 'react-router-dom'
import { useAnimations } from '../contexts/AnimationContext'
import SEO from '../components/SEO'
import './EntryPage.css'

const divisions = [
  {
    id: 'sourcing',
    title: 'Sourcing & Trade',
    subtitle: 'Global Procurement',
    description:
      'End-to-end sourcing solutions from China\'s finest manufacturers. Quality products, competitive pricing, seamless logistics.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="20" />
        <ellipse cx="24" cy="24" rx="10" ry="20" />
        <path d="M4 24h40" />
        <path d="M7 12h34" />
        <path d="M7 36h34" />
      </svg>
    ),
    path: '/sourcing',
    cta: 'Explore Sourcing',
    accent: 'var(--color-primary)',
  },
  {
    id: 'freight',
    title: 'Freight and Logistics',
    subtitle: 'Reliable Delivery',
    description:
      'Sea shipping from China to Ghana with warehouse management, quality control, and RMB payment services. Ship smart. Ship secure.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 32h28V12H2z" />
        <path d="M30 20h8l6 8v4H30z" />
        <circle cx="12" cy="36" r="4" />
        <circle cx="38" cy="36" r="4" />
        <path d="M16 36h18" />
      </svg>
    ),
    path: '/freight',
    cta: 'Ship With Us',
    accent: '#5A7A8A',
  },
  {
    id: 'souvenirs',
    title: 'Souvenirs & Gifts',
    subtitle: 'Curated Collections',
    description:
      'Handpicked souvenirs, corporate gifts, and artisan treasures. Memorable keepsakes crafted with care and cultural authenticity.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 4v8" />
        <path d="M20 4h8" />
        <rect x="8" y="12" width="32" height="8" rx="2" />
        <path d="M12 20v20a4 4 0 004 4h16a4 4 0 004-4V20" />
        <path d="M24 12v32" />
      </svg>
    ),
    path: '/souvenirs',
    cta: 'Browse Collection',
    accent: 'var(--color-accent)',
  },
]

export default function EntryPage() {
  const navigate = useNavigate()
  const { animationsReady } = useAnimations()

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Priselle Holdings',
    url: 'https://priselleholdings.com',
    logo: 'https://priselleholdings.com/icons/priselle-medium.png',
    description: 'Parent group behind Priselle Sourcing & Trade and Priselle Freight & Logistics — connecting Ghana and global businesses with China\'s manufacturing and shipping networks.',
    address: [
      { '@type': 'PostalAddress', addressLocality: 'Accra', addressCountry: 'Ghana' },
      { '@type': 'PostalAddress', addressLocality: 'Guangzhou', addressCountry: 'China' },
      { '@type': 'PostalAddress', addressLocality: 'Foshan', addressCountry: 'China' }
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+233-54-486-1154',
      contactType: 'Customer Service',
      email: 'info@priselleholdings.com',
      areaServed: 'Worldwide',
      availableLanguage: ['English', 'Chinese']
    },
    subOrganization: [
      {
        '@type': 'Organization',
        name: 'Priselle Sourcing & Trade',
        url: 'https://priselleholdings.com/sourcing'
      },
      {
        '@type': 'Organization',
        name: 'Priselle Freight & Logistics',
        url: 'https://priselleholdings.com/freight'
      },
      {
        '@type': 'Organization',
        name: 'Priselle Souvenirs & Gifts',
        url: 'https://priselleholdings.com/souvenirs'
      }
    ]
  }

  return (
    <div className="entry-page">
      <SEO
        title="Priselle Holdings | Sourcing, Freight & Trade Solutions"
        description="The parent group behind Priselle Sourcing & Trade and Priselle Freight & Logistics. Connecting Ghana and global businesses with China's manufacturing and shipping networks."
        keywords="Priselle Holdings, Priselle, sourcing, freight, logistics, Ghana, China, trading"
        canonicalUrl="https://priselleholdings.com/"
        schema={schema}
      />
      {/* Atmospheric background layers */}
      <div className="entry-bg">
        <div className="entry-bg-gradient" />
        <div className="entry-bg-orbs">
          <div className="entry-orb entry-orb--1" />
          <div className="entry-orb entry-orb--2" />
          <div className="entry-orb entry-orb--3" />
        </div>
        <div className="grain-overlay" />
      </div>

      {/* Content */}
      <div className={`entry-content ${animationsReady ? 'play' : ''}`}>
        {/* Header */}
        <header className="entry-header">
          <div className="entry-logo-mark">
            <img src="/icons/priselle-icon.svg" alt="Priselle" style={{ width: 48, height: 48 }} />
          </div>
          <h1 className="entry-brand">PRISELLE</h1>
          <p className="entry-tagline">Choose Your Destination</p>
          <div className="entry-divider">
            <span />
          </div>
        </header>

        {/* Cards */}
        <div className="entry-cards">
          {divisions.map((div, i) => (
            <button
              key={div.id}
              className="entry-card"
              style={{ '--card-index': i, '--card-accent': div.accent }}
              onClick={() => navigate(div.path)}
            >
              <div className="entry-card__glow" />
              <div className="entry-card__inner">
                <div className="entry-card__icon">{div.icon}</div>
                <span className="entry-card__subtitle">{div.subtitle}</span>
                <h2 className="entry-card__title">{div.title}</h2>
                <p className="entry-card__desc">{div.description}</p>
                <span className="entry-card__cta">
                  {div.cta}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Footer */}
        <footer className="entry-footer">
          <p>&copy; {new Date().getFullYear()} Priselle Holdings. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}
