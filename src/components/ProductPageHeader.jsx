
import { Search, Shield, Package } from 'lucide-react'

export default function ProductPageHeader() {
  return (
    <div className="relative overflow-hidden bg-white border-b-2 border-gray-200">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="text-center max-w-5xl mx-auto">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl shadow-xl mb-8">
            <Package className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Sourcing Portfolio
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Explore what we can source for your business from verified Chinese suppliers
          </p>

          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
            <div className="flex items-center space-x-2.5 bg-gradient-to-r from-blue-50 to-indigo-50 px-5 py-3 rounded-full border border-blue-200 shadow-sm">
              <Search className="h-5 w-5 text-blue-600" />
              <span className="text-blue-700 font-semibold text-base">1000+ Verified Suppliers</span>
            </div>
            <div className="flex items-center space-x-2.5 bg-gradient-to-r from-blue-50 to-indigo-50 px-5 py-3 rounded-full border border-blue-200 shadow-sm">
              <Shield className="h-5 w-5 text-indigo-600" />
              <span className="text-indigo-700 font-semibold text-base">Quality Control Included</span>
            </div>
            <div className="flex items-center space-x-2.5 bg-gradient-to-r from-blue-50 to-indigo-50 px-5 py-3 rounded-full border border-blue-200 shadow-sm">
              <Package className="h-5 w-5 text-blue-600" />
              <span className="text-blue-700 font-semibold text-base">Custom Sourcing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}