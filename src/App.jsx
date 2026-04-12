import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy, Suspense, useState } from 'react'
import ErrorBoundary from './components/ErrorBoundary'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import SplashScreen from './components/SplashScreen'
import WhatsAppButton from './components/WhatsAppButton'
import BackToTop from './components/BackToTop'
import PageSkeleton from './components/PageSkeleton'
import AnimationContext from './contexts/AnimationContext'
import './App.css'

// Lazy load pages
const EntryPage = lazy(() => import('./pages/EntryPage'))
const Homepage = lazy(() => import('./pages/Homepage'))
const WhatWeSource = lazy(() => import('./pages/WhatWeSource'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const FreightPage = lazy(() => import('./pages/FreightPage'))
const SouvenirsPage = lazy(() => import('./pages/SouvenirsPage'))
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
              {/* Entry portal - no navigation */}
              <Route path="/" element={<EntryPage />} />

              {/* Priselle Sourcing and Trade routes - with navigation */}
              <Route path="/sourcing" element={<Layout />}>
                <Route index element={<Homepage />} />
                <Route path="products" element={<WhatWeSource />} />
                <Route path="services" element={<ServicesPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="contact" element={<ContactPage />} />
              </Route>

              {/* Placeholder routes for other divisions */}
              <Route path="/souvenirs" element={<SouvenirsPage />} />
              <Route path="/freight" element={<FreightPage />} />

              {/* 404 page - no navigation */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
          {!showSplash && (
            <>
              <BackToTop />
              <WhatsAppButton />
            </>
          )}
        </Router>
      </AnimationContext.Provider>
    </ErrorBoundary>
  )
}