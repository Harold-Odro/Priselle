

export default function ProductSpecifications({ specifications }) {
  if (!specifications) return null
  
  return (
    <div className="mb-4">
      <h4 className="font-semibold text-gray-900 mb-2">Specifications:</h4>
      <dl className="grid grid-cols-2 gap-2 text-sm">
        {Object.entries(specifications).map(([key, value]) => (
          <div key={key} className="flex justify-between">
            <dt className="text-gray-600">{key}:</dt>
            <dd className="text-gray-900 font-medium">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}