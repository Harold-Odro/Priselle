# Priselle Homepage Redesign — Full Context Document

## Project Overview
Priselle Sourcing and Trade is a React SPA (Vite + React Router v7 + Tailwind CSS v4) for a China-based sourcing company. The site lives at `/Applications/XAMPP/xamppfiles/htdocs/Priselle`.

## What Was Done

### Phase 1: Codebase Cleanup — Dead Code Removal
Deleted 8 orphaned components that were no longer imported anywhere:
- `HeroSection.jsx`, `AboutSection.jsx`, `HowItWorks.jsx`, `ContactPreview.jsx`, `ProductSlideshow.jsx`, `TrustBadges.jsx`, `StickyMobileCTA.jsx`, `Testimonials.jsx`
- Removed empty `src/hooks/` directory

### Phase 2: CSS Consolidation
- **`src/App.css`** — Stripped to just `@import "tailwindcss"`. Removed ~100 lines of unused CSS variables (blue/purple theme from a different design system) and animation keyframes that were never referenced.
- **`src/index.css`** — Removed ~150 lines of unused CSS classes (`.btn-primary`, various unused animations, unused utility classes). Consolidated duplicate patterns:
  - Created shared `.grain-overlay` class (film grain SVG filter effect) replacing per-component grain classes
  - Created shared `@keyframes orbFloat` replacing duplicate float animations across EntryPage, SouvenirsPage, and LandingSection
- Updated `EntryPage.jsx`, `FreightPage.jsx`, `SouvenirsPage.jsx`, `LandingSection.jsx` to use the shared class names.

### Phase 3: Shared Component Extraction
Created two reusable components to eliminate ~350 lines of duplicate hero/CTA JSX across pages:

**`src/components/PageHero.jsx`** — Shared hero section with dark overlay, background image, badge, title, subtitle, and optional children. Used by: AboutPage, ServicesPage, ContactPage, WhatWeSource, ProductPageHeader.

**`src/components/SectionCTA.jsx`** — Shared call-to-action section with icon, heading, subtitle, primary/secondary buttons, optional children (e.g., testimonial). Uses ScrollReveal. Used by: AboutPage, ServicesPage, WhatWeSource.

Updated all consuming pages to use these shared components, removing their inline hero/CTA markup.

### Phase 4: Additional Cleanup
- **Deleted entire ProductPage ecosystem** (8 files) — `ProductPage.jsx` was orphaned (not routed in App.jsx), replaced by `WhatWeSource.jsx` at `/sourcing/products`. This made `ProductCard.jsx`, `ProductRating.jsx`, `ProductFeatures.jsx`, `ProductSpecifications.jsx`, `ProductFilters.jsx`, `ProductPageHeader.jsx`, and `src/data/products.js` all dead code.
- **Fixed bug**: `ProductCard.jsx` had `navigate('/contact')` instead of `navigate('/sourcing/contact')` — wrong route.
- **Removed unused import**: `Star` from lucide-react in `ProductCard.jsx`.
- **Removed unnecessary eslint-disable**: `PageTransition.jsx` had `// eslint-disable-next-line no-unused-vars` but `motion` was actually used.

### Phase 5: Homepage Redesign
Redesigned the homepage inspired by two reference templates (SkyStructure and Apex Strategy) for a more professional corporate look. Kept the existing color scheme and fonts (Outfit body, Playfair Display headings, Cormorant Garamond decorative).

**Deleted:**
- `HeroServicesSection.jsx` — 3D rotating service cards section (replaced)
- `ServicesPreview.jsx` — 4-column service grid (replaced)
- `IndustriesGallery.jsx` — WebGL/OGL interactive carousel (replaced)
- All associated CSS in `src/index.css` (~250 lines: `.hero-services-section`, `.service-card`, `.industries-section`, `.gallery-container`, etc.)

**Created 5 new homepage section components:**

1. **`src/components/OverlappingCards.jsx`** — 3 white cards with negative top margin overlapping the LandingSection. Cards: About Us (paragraph + link), Our Services (6 icon+label items), Industries We Serve (4 icon+label items). Hover effect: lift + teal top border.

2. **`src/components/CompanyOverview.jsx`** — Split layout: text (badge, heading, two paragraphs) on left, professional image on right. Full-width stats band below with border-top divider showing 4 animated counters: 10+ Years, 50+ Suppliers, 24/7 Support, 100% Quality. Uses `AnimatedCounter` component.

3. **`src/components/ServiceCards.jsx`** — Dark section with background image (`photo-1553413077-190dd305871c`) + teal gradient overlay. Shows top 3 services as white cards: Product Sourcing, Shipping & Logistics, Quality Control & Repackaging. Each has icon, title, description, "Learn More" button. "View All Services" outline button below.

4. **`src/components/CoreFocus.jsx`** — Light background, 3-column grid. Badge "Why Choose Us", heading "Our Core Strengths". Items: Reliability (Shield), Efficiency (Zap), Transparency (Eye). Each has outlined icon circle that fills teal on hover, title, description, "Learn More" link.

5. **`src/components/IndustriesSection.jsx`** — Dark section with background image (`photo-1586528116311-ad8dd3c8310d`) + teal gradient overlay. 6 white icon cards in 3x2 grid (2-col on mobile): Home & Living, Electronics, Construction & Building, Energy & Solar, Vehicles & Auto, Souvenirs & Gifts. Each card shows icon, title, item count, subcategory bullet points (hidden on small mobile), and "Learn More" link. "Explore All Categories" outline button below.

**Updated `src/pages/Homepage.jsx`** — New section order:
```
LandingSection → OverlappingCards → CompanyOverview → ServiceCards → CoreFocus → IndustriesSection → CTASection
```

### Phase 6: Navbar Scroll-to-Show + Mobile Improvements
**Navbar behavior:**
- On the homepage (`/sourcing`), navbar starts hidden (translated off-screen with `translateY(-100%)`, opacity 0, pointer-events none) and smoothly slides in once user scrolls past ~85% of viewport height (past the LandingSection hero)
- On all other `/sourcing` pages, navbar behaves normally (always visible)
- Transition uses `duration-500` for smooth slide-in

**Mobile navigation menu:**
- Changed from conditional render (`{isMenuOpen && ...}`) to always-rendered with CSS transition (`maxHeight`, `opacity`, `overflow` animated)
- Increased touch targets on mobile menu links from `py-3` to `py-4`

**Mobile improvements across homepage sections:**
- **OverlappingCards** — Reduced negative margin (`-mt-10` on mobile vs `-mt-20` on sm+), tighter gap and card padding (`p-6 sm:p-8`)
- **CompanyOverview** — Shorter image height on mobile (`h-56 sm:h-80 lg:h-96`), reduced section padding (`py-14 sm:py-20 lg:py-24`), smaller stat numbers (`text-3xl sm:text-4xl lg:text-5xl`)
- **ServiceCards** — Reduced section padding on mobile, smaller card gap and padding (`p-6 sm:p-8`, `rounded-xl sm:rounded-2xl`)
- **CoreFocus** — Reduced section padding on mobile
- **IndustriesSection** — Now 2-column grid on all screen sizes (`grid-cols-2 lg:grid-cols-3`), compact mobile cards (smaller icons, text sizes, hidden bullet lists and "Learn More" links on small screens via `hidden sm:block`/`hidden sm:inline-flex`)
- **CTASection** — Responsive card padding via CSS media query (`40px 24px` mobile, `60px 40px` sm+), contact info stacks vertically (`flexDirection: column`), tighter benefit pill spacing

### Phase 7: Services Page + Products Page Update
**Services Page (`ServicesPage.jsx`):**
- Updated from 4 services to 6 services matching the new service list
- New services added: Warehouse & Inventory Management, China Concierge & Onboarding Services
- Renamed "Logistics & Shipping" → "Shipping and Logistics", "Quality Control & Inspection" → "Quality Control & Repackaging"
- Service grid changed from 2-column to 3-column (`lg:grid-cols-3`) to fit 6 cards
- Updated structured data schema to include all 6 services
- Updated SEO meta description and keywords
- Added new lucide-react icons: `Warehouse`, `Plane`, `UserCheck`
- Process timeline kept unchanged (still relevant to sourcing flow)

**Products Page (`WhatWeSource.jsx`):**
- Replaced old 7 categories (Electronics, Home & Living, Sanitary Ware, Industrial & Machinery, Toys & Games, Office & Business, Custom Solutions) with the 6 industry categories: Home & Living, Electronics, Construction & Building, Energy & Solar, Vehicles & Auto, Souvenirs & Gifts
- Each category lists actual sourcing items: Furniture & Decor Pieces, Cabinetry, Lightings, Floor Tiles, Wooden and Metal Doors, Windows, Sanitary Wares, Solar Panels, Plant & Generators, Auto Parts, Hotel Supplies, Bathroom Supplies, etc.
- Removed oversized "Custom Solutions" featured card with dark background — all cards now equal treatment in clean 3-column grid
- Simplified card design: icon, title, description, items list, always-visible "Request Quote" button (removed hover-only reveal pattern)
- Fixed navigate path from `/contact` to `/sourcing/contact`
- Updated stats to "6 Industries" instead of "7+ Categories"
- Removed unused imports: `Star`, `Zap`, `Briefcase`, `Wrench`, `Gamepad2`, `Bath`

## Updated Service List (6 services)
1. Product Sourcing
2. Warehouse & Inventory Management
3. Shipping and Logistics
4. China Concierge & Onboarding Services
5. Work Visa Support
6. Quality Control & Repackaging

## Updated Industry Categories (6 categories)
- Home & Living
- Electronics
- Construction & Building
- Energy & Solar
- Vehicles & Auto
- Souvenirs & Gifts

## Product Sourcing Items List
Electronics, Plant & Generators, Hotel Supplies, Wooden and Metal Doors, Floor Tiles, Sanitary Wares, Cabinetry, Furniture & Decor Pieces, Windows, Bathroom Supplies, Auto Parts, Solar Panels, Lightings

## Core Strengths (3 items — Global Reach removed)
- Reliability
- Efficiency
- Transparency

### Phase 8: Freight Page Updates
**Air Freight service added to both `FreightPage.jsx` and `FreightServicesPage.jsx`:**
- Added new "Air Freight" service card with airplane SVG icon, description ("Fast air shipping from China to Ghana for time-sensitive cargo. Delivery in 7–14 days"), and feature list (express delivery, urgent/lightweight shipments, customs clearance, real-time tracking)
- Service card appears between Sea Shipping and Warehouse & Inventory Management

**Sea shipping prices updated:**
- CBM to Accra: $235 → **$240**
- CBM to Kumasi: $255 → **$260**
- Less than 1 CBM to Accra: $240 → **$245**
- Less than 1 CBM to Kumasi: $260 → **$265**

**Air freight pricing added:**
- Air Freight to Ghana: **$20/kg**
- Pricing section now split into two subsections with headings: "Sea Shipping — 35–45 Days" and "Air Freight — 7–14 Days"

**Takoradi port references removed:**
- Sea Shipping description changed from "Chinese ports to Tema and Takoradi" → "Chinese ports to Tema" (both files)
- Only Tema port is used for deliveries

**Text updates across both freight pages:**
- Pricing section description updated to mention "sea and air shipping"
- Duration footer updated to "Sea: 35–45 days port to port · Air: 7–14 days"
- CTA step text updated to "Receive your sea or air freight quote"
- FreightServicesPage hero subtitle updated to "Comprehensive sea and air shipping services"

## Deferred Work (Not Yet Implemented)
- **Products page (WhatWeSource.jsx)**: Add product sourcing videos
- **Services page (ServicesPage.jsx)**: Add click-through detail sections for each service

## Current Homepage File Structure
```
src/pages/Homepage.jsx          — Page wrapper with SEO + section composition
src/components/LandingSection.jsx    — Full-screen animated hero (GSAP, Cormorant Garamond)
src/components/OverlappingCards.jsx  — 3 overlapping info cards
src/components/CompanyOverview.jsx   — Split text/image + stats band
src/components/ServiceCards.jsx      — 3 service cards on dark bg
src/components/CoreFocus.jsx         — 3-column strengths grid (Reliability, Efficiency, Transparency)
src/components/IndustriesSection.jsx — 6 industry cards on dark bg (2-col mobile, 3-col desktop)
src/components/CTASection.jsx        — CTA with glassmorphism card (GSAP text animations)
```

## Color Scheme (unchanged)
- Primary (Teal): `#2F6F73` / Dark: `#1F3F4A` / Light: `#4A8A8E`
- Accent (Olive): `#3D5A45` / Dark: `#2D4535` / Light: `#5F7364`
- Background: `#ECFFDC` (light green) / Alt: `#F5FFF0` / Dark: `#1F3F4A`
- Text: `#1C1C1C` / Light: `#4A4A4A`

## Fonts (unchanged)
- Body: Outfit (sans-serif)
- Headings: Playfair Display (serif)
- Decorative: Cormorant Garamond (serif)

## Key Patterns Used Throughout
- `ScrollReveal` component for scroll-triggered fade-in animations (waits for `animationsReady` from AnimationContext)
- `AnimatedCounter` for counting-up number animations on scroll
- `.section-dark` CSS class + `data-dark-section` attribute for dark teal sections (Navigation detects these to switch to dark mode)
- Dark sections use: background image + `linear-gradient(135deg, rgba(31, 63, 74, 0.93), rgba(47, 111, 115, 0.9))` overlay
- Badge pattern: `inline-flex items-center gap-2 px-4 py-2 rounded-full` with dot indicator
- Card hover: `hover:-translate-y-1` or `hover:-translate-y-2` with shadow increase
- Navbar hides on homepage until user scrolls past 85% of viewport height

## Routing Structure
```
/                    → EntryPage (no navigation)
/sourcing            → Layout wrapper (Navigation + Footer)
  /sourcing          → Homepage (navbar hidden until scroll past hero)
  /sourcing/products → WhatWeSource
  /sourcing/services → ServicesPage
  /sourcing/about    → AboutPage
  /sourcing/contact  → ContactPage
/souvenirs           → SouvenirsPage (standalone)
/freight             → FreightPage (standalone)
  /freight/services  → FreightServicesPage
  /freight/contact   → FreightContactPage
*                    → NotFoundPage (no navigation)
```

## Build Status
All changes compile successfully. No errors, no orphaned components, no unused imports. A static HTML preview exists at `public/preview.html` (can be deleted before deployment).
