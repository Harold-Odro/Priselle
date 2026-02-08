import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOnDark, setIsOnDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past threshold
      setIsScrolled(window.scrollY > 100);

      // Check if navbar is over dark sections
      const darkSections = document.querySelectorAll('.section-dark, [data-dark-section]');
      let onDark = false;

      darkSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 70 && rect.bottom > 70) {
          onDark = true;
        }
      });

      setIsOnDark(onDark);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Determine navbar styles based on scroll and dark section
  const getNavbarStyles = () => {
    if (isScrolled) {
      if (isOnDark) {
        return {
          background: 'rgba(31, 63, 74, 0.95)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 2px 20px rgba(0, 0, 0, 0.2)'
        };
      }
      return {
        background: 'rgba(236, 255, 220, 0.95)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 2px 20px rgba(0, 0, 0, 0.08)'
      };
    }
    return {
      background: 'transparent',
      backdropFilter: 'none',
      boxShadow: 'none'
    };
  };

  const getLinkColor = () => {
    if (isOnDark) return '#FFFFFF';
    return 'var(--color-text)';
  };

  const getLinkHoverColor = () => {
    if (isOnDark) return 'rgba(255, 255, 255, 0.7)';
    return 'var(--color-primary)';
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        height: '70px',
        ...getNavbarStyles()
      }}
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo - Left Aligned */}
          <Link to="/" className="flex-shrink-0 flex items-center group">
            <img
              src="/images/logo.JPG"
              alt="Priselle"
              className="h-10 w-auto rounded-lg"
              style={{
                filter: isOnDark ? 'brightness(1.2)' : 'none'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <span
              className="ml-3 text-lg font-semibold whitespace-nowrap transition-colors duration-300"
              style={{
                color: getLinkColor(),
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 600
              }}
            >
              Priselle
            </span>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md transition-colors duration-200"
              style={{ color: getLinkColor() }}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop Navigation Links - Right Aligned */}
          <div className="hidden md:flex items-center gap-10">
            {[
              { to: '/', label: 'Home' },
              { to: '/services', label: 'Services' },
              { to: '/about', label: 'About' },
              { to: '/contact', label: 'Contact' }
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="transition-opacity duration-200 text-sm tracking-wide"
                style={{
                  color: getLinkColor(),
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 500,
                  letterSpacing: '0.02em'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0"
          style={{
            background: isOnDark ? 'rgba(31, 63, 74, 0.98)' : 'rgba(236, 255, 220, 0.98)',
            backdropFilter: 'blur(10px)',
            borderTop: isOnDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.05)'
          }}
        >
          <div className="flex flex-col py-4">
            {[
              { to: '/', label: 'Home' },
              { to: '/services', label: 'Services' },
              { to: '/about', label: 'About' },
              { to: '/contact', label: 'Contact' }
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-6 py-3 text-base font-medium transition-opacity duration-200"
                style={{
                  color: getLinkColor(),
                  fontFamily: "'Outfit', sans-serif"
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <Link
              to="/contact"
              className="mx-4 mt-4 px-6 py-3 rounded-xl font-semibold text-center text-white shadow-md transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
              style={{
                backgroundColor: 'var(--color-accent)',
                fontFamily: "'Outfit', sans-serif"
              }}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
