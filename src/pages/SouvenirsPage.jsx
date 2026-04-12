import { useAnimations } from '../contexts/AnimationContext'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './SouvenirsPage.css'

export default function SouvenirsPage() {
  const { animationsReady } = useAnimations()

  return (
    <div className="souvenirs-page">
      {/* Background layers */}
      <div className="souvenirs-bg">
        <div className="souvenirs-bg__gradient" />
        <div className="souvenirs-bg__orbs">
          <div className="souvenirs-orb souvenirs-orb--1" />
          <div className="souvenirs-orb souvenirs-orb--2" />
          <div className="souvenirs-orb souvenirs-orb--3" />
        </div>
        <div className="souvenirs-bg__pattern" />
        <div className="grain-overlay" />
      </div>

      {/* Content */}
      <div className="souvenirs-content">
        {/* Nav */}
        <motion.nav
          className="souvenirs-nav"
          initial={{ opacity: 0, x: -20 }}
          animate={animationsReady ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link to="/" className="souvenirs-nav__back">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
            <span>Priselle Group</span>
          </Link>
        </motion.nav>

        {/* Main */}
        <div className="souvenirs-main">
          {/* Icon */}
          <motion.div
            className="souvenirs-icon"
            initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
            animate={animationsReady ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M32 6v10" />
              <path d="M27 6h10" />
              <rect x="12" y="16" width="40" height="10" rx="3" />
              <path d="M16 26v26a5 5 0 005 5h22a5 5 0 005-5V26" />
              <path d="M32 16v41" />
              <path d="M22 36h8" />
              <path d="M34 42h8" />
            </svg>
          </motion.div>

          {/* Badge */}
          <motion.div
            className="souvenirs-badge"
            initial={{ opacity: 0, y: 15 }}
            animate={animationsReady ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            Coming Soon
          </motion.div>

          {/* Title */}
          <motion.h1
            className="souvenirs-title"
            initial={{ opacity: 0, y: 40 }}
            animate={animationsReady ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            Souvenirs & Gifts
          </motion.h1>

          {/* Divider */}
          <motion.div
            className="souvenirs-divider"
            initial={{ scaleX: 0 }}
            animate={animationsReady ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <span />
            <span />
            <span />
          </motion.div>

          {/* Description */}
          <motion.p
            className="souvenirs-desc"
            initial={{ opacity: 0, y: 25 }}
            animate={animationsReady ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            We're curating a collection of handpicked souvenirs, corporate gifts,
            and artisan treasures — crafted with care and cultural authenticity.
          </motion.p>

          {/* Feature tags */}
          <motion.div
            className="souvenirs-tags"
            initial={{ opacity: 0, y: 20 }}
            animate={animationsReady ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            {['Corporate Gifts', 'Cultural Keepsakes', 'Custom Branding', 'Bulk Orders'].map((tag, i) => (
              <motion.span
                key={tag}
                className="souvenirs-tag"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={animationsReady ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.9 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -2, backgroundColor: 'rgba(255, 255, 255, 0.12)' }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="souvenirs-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={animationsReady ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to="/sourcing/contact" className="souvenirs-cta-primary">
              Get Notified
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link to="/" className="souvenirs-cta-secondary">
              Back to Home
            </Link>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          className="souvenirs-footer"
          initial={{ opacity: 0 }}
          animate={animationsReady ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          <p>&copy; {new Date().getFullYear()} Priselle Souvenirs & Gifts. All rights reserved.</p>
        </motion.footer>
      </div>
    </div>
  )
}
