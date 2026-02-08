import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import ProductFilters from '../components/ProductFilters'
import ProductPageHeader from '../components/ProductPageHeader'
import { products, categories } from '../data/products'
import SEO from '../components/SEO'

export default function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState('all products')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all products' ||
                          product.category.toLowerCase() === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": products.slice(0, 10).map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.name,
        "description": product.description,
        "category": product.category
      }
    }))
  };

  return (
    <>
      <SEO
        title="Sourcing Portfolio | What We Can Source from China | Priselle"
        description="Explore our sourcing capabilities: electronics, textiles, home goods, and more from 1000+ verified Chinese suppliers. Quality control and logistics included. Request a quote today."
        keywords="China sourcing portfolio, what to source from China, product sourcing examples, Chinese manufacturers, import business, wholesale sourcing, worldwide shipping"
        schema={schema}
      />
      <div className="min-h-screen" style={{ background: 'var(--color-background)' }}>
        {/* Header */}
        <ProductPageHeader />

        {/* Filters and Search */}
        <div
          className="sticky top-[70px] z-10 shadow-sm"
          style={{
            backgroundColor: 'var(--color-background)',
            borderBottom: '1px solid var(--color-border)'
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
            <ProductFilters
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="min-h-screen" style={{background: 'var(--color-background-alt)'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl font-light" style={{color: 'var(--color-text-light)'}}>
                  No products found matching your criteria.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
