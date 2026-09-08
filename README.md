# SIPVODA BEVERAGES — PURE WATER. ELEVATED.

> **World-Class Packaged Drinking Water & Bespoke Private Label Hydration**  
> Certified under Bureau of Indian Standards (BIS IS 14543) and FSSAI. Bottled at source in Bulandshahr, Uttar Pradesh, India.

---

## 🌊 Overview

**SIPVODA BEVERAGES** is India’s premier luxury packaged drinking water brand, engineered specifically for high-end hospitality, fine-dining establishments, corporate headquarters, and destination celebrations. 

The web experience is designed with an editorial light-theme luxury aesthetic, pairing fluid water caustics and slow cinematic motion with crystal typography, interactive 3D bottle studio proofing, and instant WhatsApp concierge integration.

---

## 🛠 Technology Stack

- **Core Framework:** [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/)
- **Routing:** [React Router v6](https://reactrouter.com/) (Single Page Application architecture)
- **Styling:** [Tailwind CSS v3](https://tailwindcss.com/) + PostCSS + Custom luxury glassmorphism utilities
- **Iconography:** [Lucide React](https://lucide.dev/)
- **Feedback & Notifications:** [Sonner](https://sonner.emilkowal.ski/)
- **Animation & Canvas:** Custom high-performance HTML5 Canvas refractive water caustics with adaptive Device Pixel Ratio (DPR), viewport intersection observer, and `prefers-reduced-motion` compliance.

---

## 📁 Project Structure

```text
sipvoda-website/
├── public/
│   ├── assets/
│   │   ├── images/          # Authentic SIPVODA bottle range, plant & brand assets
│   │   └── videos/          # Cinematic royalty-free water footage
│   ├── favicon.ico          # Official brand favicon
│   ├── favicon.png          # High-res brand icon
│   ├── robots.txt           # Production search crawler instructions
│   ├── sitemap.xml          # XML sitemap covering all 8 public routes
│   └── site.webmanifest     # Progressive Web App manifest
├── src/
│   ├── components/
│   │   ├── CustomBottleStudio.jsx  # Interactive private label bottle configurator
│   │   ├── Footer.jsx              # Footer with brand credentials & legal links
│   │   ├── Navbar.jsx              # Responsive header with mobile drawer
│   │   ├── ScrollToTop.jsx         # Scroll reset on route transitions
│   │   ├── WaterCausticsCanvas.jsx # GPU-accelerated water caustics animation
│   │   ├── WaterDropRipple.jsx     # Water drop physics micro-interaction
│   │   └── WaterVideoBackground.jsx# Looping video layer with fallback poster
│   ├── pages/
│   │   ├── About.jsx               # Heritage, Bulandshahr facility & philosophy
│   │   ├── B2BSolutions.jsx        # Solutions for Hotels, Restaurants, Corporates
│   │   ├── Contact.jsx             # Validated quotation & inquiry concierge
│   │   ├── CustomBottles.jsx       # 4-stage co-branding process & live studio
│   │   ├── Home.jsx                # Cinematic hero, collection, & trust proof
│   │   ├── NotFound.jsx            # Custom 404 error page
│   │   ├── Products.jsx            # Complete catalog (Glass, PET, Clear Cans)
│   │   ├── Sustainability.jsx      # Glass recyclability & water stewardship
│   │   └── TheWater.jsx            # 5-stage purification science (IS 14543)
│   ├── App.jsx                     # Route definitions and light theme wrapper
│   ├── index.css                   # Tailwind directives & luxury design tokens
│   └── main.jsx                    # Application root mount
├── index.html                      # HTML5 entry with Open Graph, Twitter & JSON-LD
├── package.json                    # Project dependencies and npm scripts
├── tailwind.config.js              # Theme extensions, palettes, and shadows
└── vite.config.js                  # Vite bundler configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher (or `pnpm` / `yarn`)

### Installation

```bash
# Clone the repository
git clone https://github.com/inboxcrew1/Sipvoda-Beverages.git

# Navigate into project directory
cd Sipvoda-Beverages

# Install dependencies
npm install
```

### Local Development

```bash
# Launch Vite development server
npm run dev
```

The application will be accessible at `http://localhost:5173/`.

### Production Build

```bash
# Compile and bundle optimized production assets
npm run build

# Preview production build locally
npm run preview
```

The production output is generated into the `dist/` directory.

---

## 🌐 SEO & Technical Optimization

- **Canonical URL:** `https://www.sipvoda.com/`
- **Structured Data (JSON-LD):**
  - `Organization`: Brand identity, official logo, and direct contact details.
  - `WebSite`: Search engine discovery metadata.
  - `LocalBusiness` / `Manufacturer`: Bulandshahr, Uttar Pradesh production facility.
- **Social Sharing:** Complete Open Graph (`og:*`) and Twitter Card (`twitter:*`) tags with verified image dimensions.
- **Search Engine Directives:** Clean `robots.txt` and timestamped `sitemap.xml` referencing all active pages.
- **PWA Ready:** Web app manifest (`site.webmanifest`) configured with theme color `#FFFFFF`.

---

## 📨 Lead Generation & Contact System

The inquiry system on `/contact` is equipped with:
- **Strict Client-Side Validation:** Validates full name, organization, 10–15 digit phone/WhatsApp numbers, and standard email formats.
- **Local Persistence:** Preserves inquiry submissions in browser `localStorage` (`sipvoda_leads`).
- **Instant WhatsApp Bridge:** Prepares an encoded, structured message dispatching immediately to the corporate concierge at **`+91 9528021068`**.
- **Email Bridge:** Native `mailto:` fallback to **`support@sipvoda.com`**.

---

## 🚢 Deployment Guidelines

### Vercel / Netlify
This is a standard Single Page Application (SPA). When deploying to Vercel or Netlify, ensure SPA routing rewrites all incoming paths to `/index.html`:

**Vercel (`vercel.json`):**
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

**Netlify (`_redirects` in `public/`):**
```text
/*    /index.html   200
```

---

## 📄 License & Attribution

Designed & Developed by **[inboxcrew](https://www.inboxcrew.in/)** for **SIPVODA Beverages**.  
All rights reserved © SIPVODA Beverages.
