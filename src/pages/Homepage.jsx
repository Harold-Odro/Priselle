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
    "name": "Priselle Sourcing and Trade",
    "description": "Professional sourcing and trading services connecting global businesses with China's manufacturing excellence.",
    "url": "https://prisellesourcing.com",
    "logo": "https://prisellesourcing.com/icons/priselle-medium.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+233-54-486-1154",
      "contactType": "Customer Service",
      "email": "prisellesourcing@gmail.com",
      "areaServed": "Worldwide",
      "availableLanguage": ["English", "Chinese"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Accra",
      "addressCountry": "Ghana"
    },
    "sameAs": [
      "https://www.linkedin.com/company/priselle-sourcing"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500"
    }
  };

  return (
    <>
      <SEO
        title="Priselle Sourcing and Trade | China Sourcing & Manufacturing Solutions"
        description="Professional sourcing and trading services connecting global businesses with China's manufacturing excellence. Quality products, competitive prices, and reliable partnerships. 500+ projects completed."
        keywords="China sourcing, product sourcing, manufacturing China, wholesale supplier, quality control China, logistics shipping, trade services, global sourcing, worldwide shipping"
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
