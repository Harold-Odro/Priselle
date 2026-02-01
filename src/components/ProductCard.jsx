
import { Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import ProductRating from './ProductRating'
import ProductFeatures from './ProductFeatures'
import ProductSpecifications from './ProductSpecifications'

export default function ProductCard({ product }) {
  const navigate = useNavigate()

  // Handle quote request
  const handleRequestQuote = () => {
    // Save product info to sessionStorage
    const productInfo = `${product.category} - ${product.name}`
    sessionStorage.setItem('selectedProduct', productInfo)

    // Navigate to contact page using React Router
    navigate('/contact')
  }

  return (
    <div className="bg-white rounded-3xl border-2 border-gray-200 overflow-hidden hover:border-blue-300 hover:shadow-2xl transition-all duration-300 group h-full flex flex-col">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          width={800}
          height={600}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute top-5 left-5">
          <span className="bg-white/95 backdrop-blur-sm text-blue-700 px-4 py-2 rounded-full text-sm font-bold shadow-xl border border-blue-100">
            {product.category}
          </span>
        </div>
        <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/95 backdrop-blur-sm w-11 h-11 rounded-full flex items-center justify-center shadow-xl">
            <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
          </div>
        </div>
      </div>

      <div className="p-7 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <ProductRating rating={product.rating} />
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-5 leading-relaxed flex-1">
          {product.description}
        </p>

        <div className="space-y-4 mb-6">
          <ProductFeatures features={product.features} />
          <ProductSpecifications specifications={product.specifications} />
        </div>

        <button
          onClick={handleRequestQuote}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-xl font-semibold text-base hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Request Quote
        </button>
      </div>
    </div>
  )
}