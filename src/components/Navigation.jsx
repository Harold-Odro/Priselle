import { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo - Left Aligned */}
          <Link to="/" className="flex-shrink-0 flex items-center group">
            <div className="relative">
              <Globe className="h-7 w-7 sm:h-8 sm:w-8 transition-transform duration-300 group-hover:rotate-12" style={{color: 'var(--color-primary)'}} />
            </div>
            <span className="ml-2 sm:ml-3 text-lg sm:text-xl font-semibold whitespace-nowrap transition-colors duration-300" style={{color: 'var(--color-text)', fontWeight: 600}}>
              Priselle Sourcing
            </span>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md transition-colors duration-200 touch-target"
              style={{color: 'var(--color-primary)'}}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop Navigation Links - Right Aligned */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/services"
              className="px-4 py-2 rounded-md transition-all duration-200 font-medium text-sm"
              style={{color: 'var(--color-text-light)', fontWeight: 500}}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-light)'}
            >
              Services
            </Link>
            <Link
              to="/products"
              className="px-4 py-2 rounded-md transition-all duration-200 font-medium text-sm"
              style={{color: 'var(--color-text-light)', fontWeight: 500}}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-light)'}
            >
              Portfolio
            </Link>
            <Link
              to="/about"
              className="px-4 py-2 rounded-md transition-all duration-200 font-medium text-sm"
              style={{color: 'var(--color-text-light)', fontWeight: 500}}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-light)'}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="ml-4 px-6 py-2.5 rounded-md font-semibold transition-all duration-200 shadow-sm hover:shadow-md text-sm"
              style={{
                backgroundColor: 'var(--color-accent)',
                color: 'white',
                fontWeight: 600
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-accent-dark)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-accent)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Get Started
            </Link>
          </div>
        </div>

       {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div 
            className="md:hidden border-t bg-white"
            style={{
              borderColor: '#e5e7eb',
              paddingBottom: '1rem'
            }}
          >
            <div className="flex flex-col pt-4">
              <Link
                to="/services"
                className="px-4 py-3 text-base font-medium text-gray-600 hover:text-blue-900 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>

              <Link
                to="/products"
                className="px-4 py-3 text-base font-medium text-gray-600 hover:text-blue-900 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>

              <Link
                to="/about"
                className="px-4 py-3 text-base font-medium text-gray-600 hover:text-blue-900 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>

              <Link
                to="/contact"
                className="mx-4 mt-4 px-6 py-3 rounded-lg font-semibold text-center text-white shadow-sm"
                onClick={() => setIsMenuOpen(false)}
                style={{
                  backgroundColor: '#c9962d'
                }}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}