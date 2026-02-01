// src/pages/Homepage.jsx
// Homepage component - combines all sections to create the complete homepage
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ContactPreview from '../components/ContactPreview'
import Footer from '../components/Footer'
import ServicesPreview from '../components/ServicesPreview'
import HowItWorks from '../components/HowItWorks'
import Testimonials from '../components/Testimonials'
import TrustBadges from '../components/TrustBadges'
import SEO from '../components/SEO'

export default function Homepage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Priselle Sourcing and Trade",
    "description": "Professional sourcing and trading services connecting global businesses with China's manufacturing excellence.",
    "url": "https://prisellesourcing.com",
    "logo": "https://prisellesourcing.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+86-130-0689-0774",
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
        keywords="China sourcing, product sourcing, manufacturing China, wholesale supplier, quality control China, logistics shipping, trade services, Ghana sourcing"
        schema={schema}
      />
      <main className="relative w-full min-h-screen">
        <HeroSection />
        <TrustBadges />
        <HowItWorks />
        <ServicesPreview />
      
        <AboutSection />
        <ContactPreview />
        <Footer />
      </main>
    </>
  )
}