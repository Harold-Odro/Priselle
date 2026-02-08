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
    <div
      className="card rounded-2xl overflow-hidden transition-all duration-300 group h-full flex flex-col"
      style={{
        border: '1px solid var(--color-border)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--color-primary-light)';
        e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(47, 111, 115, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--color-border)';
        e.currentTarget.style.boxShadow = '';
      }}
    >
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
          <span
            className="px-4 py-2 rounded-full text-sm font-bold shadow-xl"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(4px)',
              color: 'var(--color-primary)',
              border: '1px solid rgba(47, 111, 115, 0.1)'
            }}
          >
            {product.category}
          </span>
        </div>
        <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center shadow-xl"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(4px)'
            }}
          >
            <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
          </div>
        </div>
      </div>

      <div className="p-7 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <ProductRating rating={product.rating} />
        </div>

        <h3 className="text-xl mb-2" style={{color: 'var(--color-text)', fontWeight: 600}}>
          {product.name}
        </h3>
        <p className="mb-5 leading-relaxed flex-1" style={{color: 'var(--color-text-light)'}}>
          {product.description}
        </p>

        <div className="space-y-4 mb-6">
          <ProductFeatures features={product.features} />
          <ProductSpecifications specifications={product.specifications} />
        </div>

        <button
          onClick={handleRequestQuote}
          className="w-full text-white py-4 px-6 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl"
          style={{
            background: 'linear-gradient(145deg, var(--color-primary), var(--color-primary-light))'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'linear-gradient(145deg, var(--color-primary-dark), var(--color-primary))';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'linear-gradient(145deg, var(--color-primary), var(--color-primary-light))';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          Request Quote
        </button>
      </div>
    </div>
  )
}
