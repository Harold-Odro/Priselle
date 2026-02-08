import { Search, SlidersHorizontal } from 'lucide-react'

export default function ProductFilters({
  categories,
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery
}) {
  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative max-w-2xl mx-auto">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5" style={{color: 'var(--color-text-light)'}} />
        <input
          type="text"
          placeholder="Search products by name or description..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-4 text-base rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
          style={{
            backgroundColor: 'white',
            border: '2px solid var(--color-border)',
            color: 'var(--color-text)'
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = 'var(--color-primary)';
            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(47, 111, 115, 0.1)';
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = 'var(--color-border)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        />
      </div>

      {/* Category Filters */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2" style={{color: 'var(--color-text-light)'}}>
          <SlidersHorizontal className="h-4 w-4" />
          <span className="text-sm font-semibold">Filter:</span>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 flex-1 scrollbar-hide">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category.toLowerCase())}
              className="px-5 py-2.5 rounded-lg whitespace-nowrap text-sm font-semibold flex-shrink-0 transition-all duration-300"
              style={{
                background: category.toLowerCase() === selectedCategory
                  ? 'linear-gradient(145deg, var(--color-primary), var(--color-primary-light))'
                  : 'var(--color-background-alt)',
                color: category.toLowerCase() === selectedCategory
                  ? 'white'
                  : 'var(--color-text)',
                border: category.toLowerCase() === selectedCategory
                  ? 'none'
                  : '1px solid var(--color-border)',
                boxShadow: category.toLowerCase() === selectedCategory
                  ? '0 4px 15px rgba(47, 111, 115, 0.3)'
                  : 'none'
              }}
              onMouseEnter={(e) => {
                if (category.toLowerCase() !== selectedCategory) {
                  e.currentTarget.style.backgroundColor = 'rgba(47, 111, 115, 0.1)';
                  e.currentTarget.style.color = 'var(--color-primary)';
                }
              }}
              onMouseLeave={(e) => {
                if (category.toLowerCase() !== selectedCategory) {
                  e.currentTarget.style.backgroundColor = 'var(--color-background-alt)';
                  e.currentTarget.style.color = 'var(--color-text)';
                }
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
