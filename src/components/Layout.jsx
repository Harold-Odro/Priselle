import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navigation from './Navigation'
import Footer from './Footer'
import SkipLink from './SkipLink'
import PageTransition from './PageTransition'

export default function Layout() {
  const location = useLocation()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--color-primary-dark)' }}>
      <SkipLink />
      <Navigation />
      <main id="main-content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
