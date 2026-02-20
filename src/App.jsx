import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy, Suspense, useState } from 'react'
import ErrorBoundary from './components/ErrorBoundary'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import SplashScreen from './components/SplashScreen'
import WhatsAppButton from './components/WhatsAppButton'
import StickyMobileCTA from './components/StickyMobileCTA'
import BackToTop from './components/BackToTop'
import PageSkeleton from './components/PageSkeleton'
import AnimationContext from './contexts/AnimationContext'
import './App.css'

// Lazy load pages
const Homepage = lazy(() => import('./pages/Homepage'))
const WhatWeSource = lazy(() => import('./pages/WhatWeSource'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))


export default function App() {
  // Check if returning visitor - skip splash screen for better UX
  const isReturningVisitor = () => {
    try {
      const hasVisited = localStorage.getItem('priselle_visited')
      if (hasVisited) return true
      localStorage.setItem('priselle_visited', 'true')
      return false
    } catch {
      return false // If localStorage unavailable, show splash
    }
  }

  const [showSplash, setShowSplash] = useState(() => !isReturningVisitor())
  const [animationsReady, setAnimationsReady] = useState(() => isReturningVisitor())

  const handleSplashComplete = () => {
    setShowSplash(false)
    // Trigger animations after splash completes
    setTimeout(() => {
      setAnimationsReady(true)
    }, 100)
  }

  return (
    <ErrorBoundary>
      <AnimationContext.Provider value={{ animationsReady }}>
        {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
        <Router>
          <ScrollToTop />
          <Suspense fallback={<PageSkeleton />}>
            <Routes>
              {/* Priselle Sourcing and Trade routes - with navigation */}
              <Route element={<Layout />}>
                <Route path="/" element={<Homepage />} />
                <Route path="/products" element={<WhatWeSource />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Route>

              {/* 404 page - no navigation */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
          {!showSplash && (
            <>
              <BackToTop />
              <WhatsAppButton />
              <StickyMobileCTA />
            </>
          )}
        </Router>
      </AnimationContext.Provider>
    </ErrorBoundary>
  )
}