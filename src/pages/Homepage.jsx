// src/pages/Homepage.jsx
// Homepage component - combines all sections to create the complete homepage
import LandingSection from '../components/LandingSection'
import OverlappingCards from '../components/OverlappingCards'
import CompanyOverview from '../components/CompanyOverview'
import ServiceCards from '../components/ServiceCards'
import CoreFocus from '../components/CoreFocus'
import IndustriesSection from '../components/IndustriesSection'
import CTASection from '../components/CTASection'
import SEO from '../components/SEO'

export default function Homepage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Priselle Sourcing & Trade",
    "description": "The sourcing and trading arm of Priselle Holdings — connecting global businesses with China's manufacturing excellence.",
    "url": "https://priselleholdings.com/sourcing",
    "logo": "https://priselleholdings.com/icons/priselle-medium.png",
    "parentOrganization": {
      "@type": "Organization",
      "name": "Priselle Holdings",
      "url": "https://priselleholdings.com"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+233-54-486-1154",
      "contactType": "Customer Service",
      "email": "info@priselleholdings.com",
      "areaServed": "Worldwide",
      "availableLanguage": ["English", "Chinese"]
    },
    "address": [
      {
        "@type": "PostalAddress",
        "addressLocality": "Accra",
        "addressCountry": "Ghana"
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "Guangzhou",
        "addressCountry": "China"
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "Foshan",
        "addressCountry": "China"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/priselle-sourcing"
    ]
  };

  return (
    <>
      <SEO
        title="Priselle Sourcing & Trade | A Priselle Holdings Company"
        description="The sourcing and trading arm of Priselle Holdings. Connecting global businesses with China's manufacturing excellence — quality products, competitive prices, reliable partnerships."
        keywords="Priselle Sourcing, China sourcing, product sourcing, manufacturing China, wholesale supplier, quality control, trade services, Priselle Holdings"
        canonicalUrl="https://priselleholdings.com/sourcing"
        siteName="Priselle Sourcing & Trade"
        schema={schema}
      />
      <div className="relative w-full">
        <LandingSection />
        <OverlappingCards />
        <CompanyOverview />
        <ServiceCards />
        <CoreFocus />
        <IndustriesSection />
        <CTASection />
      </div>
    </>
  )
}
