# OpenKiosk · Multi-Tenant E-Commerce SaaS

> **Bring your kiosk online. No code, no agency.**  
> *From first sale to full brand...*

OpenKiosk is a modern multi-tenant e-commerce platform designed to help independent kiosks, market stalls, and neighborhood retail businesses launch, customize, and manage their online storefronts with zero technical overhead.

---

## 🚀 Key Features

### 1. Landing Page (`/`)
- **Interactive Visual Store Builder Mockup**: Live in-browser theme and color palette switcher, section picker, and responsive storefront canvas.
- **Built-in Promotions Showcase**: Highlight product launches, holiday sales, and banner campaigns directly on merchant storefronts with live ad slots and campaign performance tracking.
- **Localized Retail Use Cases**: Tailored for high-demand everyday retail sectors (Provisions & Groceries, Foodstuffs, Fashion & Fabrics, Hair & Beauty, Gadgets & Accessories, Small Chops, Auto Parts, etc.).
- **Merchant-Centric Workflows**: Plain-language steps from store creation to publishing with no developer jargon.
- **Transparent Pricing**: Three straightforward tiers:
  - **Starter ($0/month)**: 1 storefront, 3 templates, up to 25 products, mobile app access.
  - **Growth ($29/month)**: Unlimited products, custom domain & SSL, staff accounts, abandoned carts.
  - **Scale ($99/month)**: Multiple storefronts, API & webhooks, audit logs & SSO, priority support.

### 2. How It Works Deep Dive (`/how-it-works`)
A step-by-step breakdown with interactive visual mockups:
- **Step 01 · Store Setup**: Instant business name and subdomain reservation (e.g. `kamaus-farm.openkiosk.app`) with live availability checks.
- **Step 02 · Catalog & Inventory**: Product creation, variant options (size, grind, color), low-stock alerts, and spreadsheet import.
- **Step 03 · Visual Storefront Builder**: Dark-mode visual editor featuring real-time theme customization, section organization, and live draft previews.
- **Step 04 · Payments & Shipping**: Payment provider connection, shipping zones, and automated SSL domain routing.
- **Step 05 · Operations & Analytics**: Real-time sales tracking, 7-day revenue charts (supporting local currencies like Nigerian Naira `₦`), and active packing queues.
- **Platform Guarantees**: Private tenant data isolation, draft staging before publishing, and scalable multi-storefront accounts.
- **Interactive FAQ Accordion**: Expandable answers addressing technical skills, setup speed, custom domains, and mobile management.

### 3. Architecture & UX Highlights
- **Smooth Cross-Page Hash Scrolling (`ScrollToHash`)**: Seamlessly navigates to `#pricing`, `#features`, or other anchor targets across routes while accounting for the sticky header offset.
- **Optimized Mobile Space Management**: Compact UI badges and emoji-based cart indicators (`🛒`) for mobile readability.
- **Extracted Brand Assets**: Dedicated vector SVG brand mark and favicon (`public/favicon.svg`, `public/logo.svg`).

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vite.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Linter**: [Oxlint](https://oxc.rs/)

---

## 📁 Project Structure

```text
multitenant-ecommerce-saas/
├── public/
│   ├── favicon.svg              # Brand squircle kiosk favicon
│   └── logo.svg                 # Standalone vector brand logo
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Logo.tsx         # Reusable brand logo component
│   │   │   └── ScrollToHash.tsx # Cross-route smooth hash scrolling
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Sticky navigation header with mobile drawer
│   │   │   ├── Footer.tsx       # Standard brand footer with legal links
│   │   │   ├── Container.tsx    # Responsive max-width wrapper
│   │   │   └── Section.tsx      # Consistent section container
│   │   ├── ui/
│   │   │   ├── Button.tsx       # Multi-variant button component (primary, dark, outline, dark-outline)
│   │   │   ├── Badge.tsx        # Pill tags and status badges
│   │   │   └── Card.tsx         # Elevated & outlined card containers
│   │   ├── landing/
│   │   │   ├── Hero.tsx         # Hero section with headline, CTAs & store preview
│   │   │   ├── StoreBuilderPreview.tsx # Interactive visual editor mockup
│   │   │   ├── BuiltForBar.tsx  # Localized retail category pill cloud
│   │   │   ├── FeaturesGrid.tsx # 6-card feature grid
│   │   │   ├── FeatureCard.tsx  # Individual feature card
│   │   │   ├── PromotionsSection.tsx # Built-in ads & promotion slots showcase
│   │   │   ├── StepsSection.tsx # 3-step merchant launch flow
│   │   │   ├── StepCard.tsx     # Step indicator card
│   │   │   ├── PricingSection.tsx # 3-tier standard pricing grid
│   │   │   ├── PricingCard.tsx  # Individual pricing card
│   │   │   └── CtaBanner.tsx    # Conversion call-to-action banner
│   │   └── how-it-works/
│   │       ├── HowItWorksHero.tsx # Subpage hero section
│   │       ├── StepOneWorkspace.tsx # Subdomain reservation mockup
│   │       ├── StepTwoCatalog.tsx # Product catalog & spreadsheet import mockup
│   │       ├── StepThreeVisualBuilder.tsx # Dark visual builder mockup
│   │       ├── StepFourPayments.tsx # Payments & shipping checklist mockup
│   │       ├── StepFiveOperations.tsx # Live orders & revenue analytics mockup
│   │       ├── TrustSection.tsx # 3-pillar data privacy & reliability section
│   │       ├── FaqSection.tsx   # Interactive expandable FAQ accordion
│   │       └── HowItWorksCta.tsx # Bottom conversion card
│   ├── pages/
│   │   ├── LandingPage.tsx      # Root landing page composition
│   │   └── HowItWorksPage.tsx   # "How It Works" 5-step deep dive page
│   ├── types/
│   │   ├── landing.ts           # Type definitions for navigation, pricing, features
│   │   └── tenant.ts            # Type definitions for tenant models
│   ├── App.tsx                  # React Router configuration & routes
│   ├── main.tsx                 # Application entry point
│   └── index.css                # Tailwind CSS root styling
├── index.html                   # HTML template with OpenKiosk metadata
├── package.json                 # Project dependencies & scripts
└── tsconfig.json                # TypeScript configuration
```

---

## ⚡ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` or `pnpm`

### Installation
```bash
# Clone the repository and navigate to the directory
cd multitenant-ecommerce-saas

# Install project dependencies
npm install
```

### Development
```bash
# Start the local development server
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### Production Build
```bash
# Type check and build optimized production assets
npm run build

# Preview the production build locally
npm run preview
```

### Linting
```bash
# Run Oxlint across all TypeScript and React files
npm run lint
```
