import { useEffect } from 'react'
import { CheckCircle, AlertCircle, X } from 'lucide-react'

export default function Toast({ message, type = 'info', onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 5000)

    return () => clearTimeout(timer)
  }, [onClose])

  const styles = {
    success: 'bg-green-500 border-green-600',
    error: 'bg-red-500 border-red-600',
    info: 'bg-blue-500 border-blue-600',
  }

  const icons = {
    success: CheckCircle,
    error: AlertCircle,
    info: CheckCircle,
  }

  const Icon = icons[type]

  return (
    <div className={`fixed top-4 right-4 z-50 max-w-md animate-fade-in-up`}>
      <div className={`${styles[type]} text-white px-6 py-4 rounded-lg shadow-2xl border-l-4 flex items-start gap-3`}>
        <Icon className="h-5 w-5 flex-shrink-0 mt-0.5" />
        <p className="flex-1 font-medium">{message}</p>
        <button
          onClick={onClose}
          className="flex-shrink-0 hover:bg-white/20 rounded p-1 transition-colors"
          aria-label="Close notification"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
