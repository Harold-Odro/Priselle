import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

export default function WhatsAppButton() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)
  const phoneNumber = '233544861154'
  const message = encodeURIComponent('Hello! I\'m interested in your sourcing services.')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {isTooltipVisible && (
        <div
          className="absolute bottom-full right-0 mb-3 p-4 rounded-xl shadow-2xl min-w-[200px]"
          style={{
            background: 'white',
            border: '1px solid var(--color-gray-200)'
          }}
        >
          <button
            onClick={() => setIsTooltipVisible(false)}
            className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close tooltip"
          >
            <X className="w-4 h-4" style={{ color: 'var(--color-text-muted)' }} />
          </button>
          <p className="text-sm mb-3 pr-4" style={{ color: 'var(--color-text)' }}>
            Need help? Chat with us on WhatsApp!
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-2 px-4 rounded-lg text-center text-white text-sm font-medium transition-all hover:opacity-90"
            style={{ backgroundColor: '#25D366' }}
          >
            Start Chat
          </a>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
        style={{ backgroundColor: '#25D366' }}
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setIsTooltipVisible(true)}
        onMouseLeave={() => setIsTooltipVisible(false)}
      >
        <MessageCircle className="w-7 h-7 text-white" fill="white" />
      </a>

      {/* Pulse animation ring */}
      <span
        className="absolute inset-0 rounded-full animate-ping pointer-events-none"
        style={{
          backgroundColor: '#25D366',
          opacity: 0.3,
          animationDuration: '2s'
        }}
      />
    </div>
  )
}
