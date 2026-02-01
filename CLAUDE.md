# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Priselle Sourcing and Trade is a business website for a China-based sourcing and trading company. It's a React SPA built with Vite, using React Router for navigation, Tailwind CSS v4 for styling, and EmailJS for contact form submissions.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

## Architecture

### Entry Point & Routing

- **Entry**: `src/main.jsx` → `src/App.jsx`
- **Router Structure**: Uses React Router v7 with lazy-loaded pages
- **Layout System**: Pages wrapped in `<Layout>` component get the `<Navigation>` header
- **404 Page**: Renders without navigation (outside Layout wrapper)

### Animation System

The app uses a coordinated animation system where:

1. **Splash Screen** (`src/components/SplashScreen.jsx`): Shows for 2.5 seconds on initial load, then slides up
2. **AnimationContext** (`src/contexts/AnimationContext.jsx`): Provides `animationsReady` state throughout the app
3. **Landing Page Animations**: Trigger only AFTER splash completes
   - CSS animations are paused by default (opacity: 0, transformed position)
   - `.play` class triggers the actual animation
   - Components check `animationsReady` from context before starting

**Key Pattern**: When adding new animated components:
```jsx
import { useAnimations } from '../contexts/AnimationContext'

function Component() {
  const { animationsReady } = useAnimations()

  return (
    <div className={`animate-fade-in ${animationsReady ? 'play' : ''}`}>
      Content
    </div>
  )
}
```

### Component Organization

#### Pages (`src/pages/`)
- **Homepage.jsx**: Composite page combining all homepage sections
- **ProductPage.jsx**: Product catalog with filtering
- **ServicesPage.jsx**: Services information
- **ContactPage.jsx**: Contact form and company details
- **NotFoundPage.jsx**: 404 error page

#### Core Components (`src/components/`)
- **Navigation.jsx**: Global header with links
- **Layout.jsx**: Wrapper providing Navigation via Outlet
- **Footer.jsx**: Site footer
- **ErrorBoundary.jsx**: React error boundary
- **ScrollToTop.jsx**: Resets scroll on navigation
- **SEO.jsx**: Manages meta tags and structured data

#### Homepage Sections
- **SplashScreen.jsx**: Initial loading animation
- **HeroSection.jsx**: Main hero with stats and CTAs
- **TrustBadges.jsx**: Social proof indicators
- **HowItWorks.jsx**: Process explanation
- **ServicesPreview.jsx**: Services overview
- **ProductSlideshow.jsx**: Featured products carousel
- **Testimonials.jsx**: Customer reviews
- **AboutSection.jsx**: Company information
- **ContactPreview.jsx**: Contact CTA section

#### Reusable Components
- **ScrollReveal.jsx**: Intersection Observer-based animation trigger
  - Waits for `animationsReady` before activating
  - Configurable delay and threshold
- **ProductCard.jsx**: Product display card
- **ContactForm.jsx**: Contact form with EmailJS integration

### Styling Architecture

**Tailwind CSS v4**: Primary styling system via `@tailwindcss/vite` plugin

**Custom CSS Files**:
- `src/index.css`: Global styles, CSS variables, typography, utility classes
- `src/App.css`: Animation keyframes and utility classes
  - Defines paused animations that activate with `.play` class
- Component-specific CSS: `SplashScreen.css`

**Animation Classes**:
- `.animate-fade-in` / `.animate-fade-in-up` / `.animate-fade-in-down`: Fade animations
- `.animate-gradient-x`: Animated gradient background
- All require `.play` class to activate (except in SplashScreen context)

### Data Management

**Static Data**: `src/data/products.js`
- Exports `products` array (product catalog)
- Exports `categories` array (filter options)

### External Integrations

**EmailJS**: Contact form email service
- Configuration in `.env` (VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY)
- Implementation in `src/components/ContactForm.jsx`
- Uses `@emailjs/browser` package

### Assets

**Public Directory** (`/public/`):
- `/images/`: Product images, background images
- Favicon variants (SVG, ICO, PNG)
- SEO files: `robots.txt`, `sitemap.xml`
- PWA manifest: `site.webmanifest`

## Key Implementation Details

### Lazy Loading
All pages are lazy-loaded with `React.lazy()` for code-splitting. A `<PageLoader>` component shows during loading.

### SEO Strategy
- Each page uses `<SEO>` component for meta tags
- Structured data (JSON-LD) embedded per page
- Comprehensive Open Graph and Twitter Card tags
- Canonical URLs and meta descriptions

### State Management
- React Context for animation coordination (`AnimationContext`)
- Local component state for UI interactions
- No global state library (Redux/Zustand) used

### Responsive Design
- Mobile-first Tailwind classes
- Breakpoints: sm, md, lg, xl (Tailwind defaults)
- Touch-friendly interactive elements

## Important Notes

### Splash Screen Timing
- Splash duration: 2.5 seconds
- Slide-up animation: 0.8 seconds
- Landing animations start: 100ms after splash completes
- Total delay before landing animations: ~3.4 seconds

### Adding New Pages
1. Create page component in `src/pages/`
2. Add lazy import in `src/App.jsx`
3. Add route to router (inside or outside `<Layout>` element)
4. Use `<SEO>` component for meta tags
5. If page has animations, use `useAnimations()` hook

### Modifying Products
Edit `src/data/products.js` - product schema includes: id, name, category, image, rating, description, features (array), optional price

### Animation Performance
- ScrollReveal components only observe when `animationsReady === true`
- IntersectionObserver used for scroll-triggered animations
- CSS transforms preferred over layout-affecting properties
