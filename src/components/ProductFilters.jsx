
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
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder="Search products by name or description..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-4 text-base border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white transition-all duration-300 shadow-sm hover:shadow-md"
        />
      </div>

      {/* Category Filters */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 text-gray-600">
          <SlidersHorizontal className="h-4 w-4" />
          <span className="text-sm font-semibold">Filter:</span>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 flex-1 scrollbar-hide">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category.toLowerCase())}
              className={`px-5 py-2.5 rounded-lg whitespace-nowrap text-sm font-semibold flex-shrink-0 transition-all duration-300 ${
                category.toLowerCase() === selectedCategory
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-gray-50 text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}