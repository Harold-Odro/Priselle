import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy, Suspense, useState } from 'react'
import ErrorBoundary from './components/ErrorBoundary'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import SplashScreen from './components/SplashScreen'
import AnimationContext from './contexts/AnimationContext'
import './App.css'

// Lazy load pages
const Homepage = lazy(() => import('./pages/Homepage'))
const WhatWeSource = lazy(() => import('./pages/WhatWeSource'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

// Loading fallback component
function PageLoader() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600 text-lg">Loading...</p>
      </div>
    </div>
  )
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [animationsReady, setAnimationsReady] = useState(false)

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
          <Suspense fallback={<PageLoader />}>
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
        </Router>
      </AnimationContext.Provider>
    </ErrorBoundary>
  )
}