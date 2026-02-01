

export default function ProductFeatures({ features }) {
  if (!features?.length) return null
  
  return (
    <div className="mb-4">
      <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
      <ul className="list-disc list-inside text-gray-600 space-y-1">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  )
}