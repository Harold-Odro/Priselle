import { Globe, Mail, Phone, MapPin, Linkedin, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-auto" style={{backgroundColor: 'var(--color-primary-dark)', color: 'var(--color-text-inverse)', marginTop: '-80px', paddingTop: '80px', position: 'relative', zIndex: 10}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4 text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-center sm:justify-start space-x-2">
              <Globe className="h-7 w-7" style={{color: 'var(--color-accent)'}} />
              <span className="text-xl font-semibold" style={{fontWeight: 600}}>Priselle Sourcing & Trade</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs mx-auto sm:mx-0" style={{color: 'var(--color-gray-300)', opacity: 0.9}}>
              Your trusted partner for premium China sourcing and international trade solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider" style={{color: 'var(--color-accent)', fontWeight: 600}}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="text-sm transition-colors duration-200"
                  style={{color: 'var(--color-gray-300)', opacity: 0.9}}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-gray-300)'}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-sm transition-colors duration-200"
                  style={{color: 'var(--color-gray-300)', opacity: 0.9}}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-gray-300)'}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm transition-colors duration-200"
                  style={{color: 'var(--color-gray-300)', opacity: 0.9}}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-gray-300)'}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm transition-colors duration-200"
                  style={{color: 'var(--color-gray-300)', opacity: 0.9}}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-gray-300)'}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider" style={{color: 'var(--color-accent)', fontWeight: 600}}>
              Our Services
            </h3>
            <ul className="space-y-2">
              <li className="text-sm" style={{color: 'var(--color-gray-300)', opacity: 0.9}}>Product Sourcing</li>
              <li className="text-sm" style={{color: 'var(--color-gray-300)', opacity: 0.9}}>Quality Control</li>
              <li className="text-sm" style={{color: 'var(--color-gray-300)', opacity: 0.9}}>Logistics Support</li>
              <li className="text-sm" style={{color: 'var(--color-gray-300)', opacity: 0.9}}>Trading Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider" style={{color: 'var(--color-accent)', fontWeight: 600}}>
              Get In Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start justify-center sm:justify-start space-x-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" style={{color: 'var(--color-accent)'}} />
                <a
                  href="mailto:prisellesourcing@gmail.com"
                  className="text-sm transition-colors duration-200 break-all sm:break-normal"
                  style={{color: 'var(--color-gray-300)', opacity: 0.9}}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-gray-300)'}
                >
                  prisellesourcing@gmail.com
                </a>
              </li>
              <li className="flex items-start justify-center sm:justify-start space-x-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" style={{color: 'var(--color-accent)'}} />
                <a
                  href="tel:+233544861154"
                  className="text-sm transition-colors duration-200"
                  style={{color: 'var(--color-gray-300)', opacity: 0.9}}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-gray-300)'}
                >
                  +233 54 486 1154
                </a>
              </li>
              <li className="flex items-start justify-center sm:justify-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" style={{color: 'var(--color-accent)'}} />
                <span className="text-sm" style={{color: 'var(--color-gray-300)', opacity: 0.9}}>
                  Accra, Ghana
                </span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center justify-center sm:justify-start gap-4 mt-6">
              <a
                href="https://www.linkedin.com/company/priselle-sourcing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#0A66C2'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
                }}
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://wa.me/233544861154"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#25D366'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
                }}
                aria-label="Chat with us on WhatsApp"
              >
                <MessageCircle className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t" style={{borderColor: 'rgba(255, 255, 255, 0.1)'}}>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-center sm:text-left" style={{color: 'var(--color-gray-300)', opacity: 0.8}}>
              © 2025 Priselle Sourcing and Trade. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 sm:space-x-6">
              <a
                href="#"
                className="text-xs sm:text-sm transition-colors duration-200"
                style={{color: 'var(--color-gray-300)', opacity: 0.8}}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-gray-300)'}
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-xs sm:text-sm transition-colors duration-200"
                style={{color: 'var(--color-gray-300)', opacity: 0.8}}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-gray-300)'}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}