import { useEffect } from 'react';

export default function SEO({
  title = 'Priselle Sourcing and Trade',
  description = 'Professional sourcing and trading services connecting global businesses with China\'s manufacturing excellence. Quality products, competitive prices, reliable partnerships.',
  keywords = 'sourcing, China sourcing, product sourcing, manufacturing, trade, wholesale, quality control, logistics, shipping',
  ogImage = '/og-image.jpg',
  ogType = 'website',
  canonicalUrl = '',
  schema = null
}) {
  useEffect(() => {
    const createdElements = [];

    // Store original title for cleanup
    const originalTitle = document.title;

    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
        createdElements.push(element);
      }

      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:image', window.location.origin + ogImage, true);
    updateMetaTag('og:url', window.location.href, true);
    updateMetaTag('og:site_name', 'Priselle Sourcing and Trade', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', window.location.origin + ogImage);

    // Additional SEO tags
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('language', 'English');
    updateMetaTag('author', 'Priselle Sourcing and Trade');

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
      createdElements.push(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl || window.location.href);

    // Structured Data (JSON-LD)
    let scriptTag = null;
    if (schema) {
      scriptTag = document.querySelector('script[type="application/ld+json"][data-seo-component]');
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.setAttribute('type', 'application/ld+json');
        scriptTag.setAttribute('data-seo-component', 'true');
        document.head.appendChild(scriptTag);
        createdElements.push(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schema);
    }

    // Cleanup function
    return () => {
      // Restore original title
      document.title = originalTitle;

      // Remove created elements
      createdElements.forEach(element => {
        if (element && element.parentNode) {
          element.parentNode.removeChild(element);
        }
      });
    };
  }, [title, description, keywords, ogImage, ogType, canonicalUrl, schema]);

  return null;
}
