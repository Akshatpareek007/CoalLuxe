# CoalLuxe — Premium B2B Charcoal Manufacturer & Global Exporter Website

A complete, production-ready, international B2B website built for a premium charcoal manufacturer and bulk exporter. Engineered with a product-led architecture, high-contrast industrial aesthetics, technical laboratory specifications, ocean container logistics data, and a qualified lead-generation RFQ engine.

Inspired by industry-leading international exporter websites like [Lamian Charcoal](https://lamiancharcoal.com/), while maintaining a 100% original brand identity, architecture, typography, and visual presentation.

---

## 🚀 Key Features

- **Original Brand & Design System**: Built on a bespoke Vanilla CSS design system utilizing Deep Carbon, Slate Gray, and glowing Amber Ember accents (`#D97706`). Zero Tailwind dependency.
- **Configurable Brand & Data Layer**: Client business details have not yet been provided; all company details are managed centrally in `src/config/brandConfig.ts` using structured tokens (`[COMPANY_NAME]`, `[COMPANY_ADDRESS]`, etc.). The entire site can be personalized in minutes without rewriting components.
- **Product-Led Catalogue**:
  - Filterable by 4 categories: Natural Black Hardwood, Artisanal Binchotan White Charcoal, Extruded Sawdust Briquettes, and Coconut Shell Shisha Cubes.
  - Real-time search across names, applications, and technical specs.
  - Sorting by Highest Fixed Carbon %, Highest Calorific Value, or Alphabetical.
- **Certified Technical Specifications**:
  - Dedicated parameter tables displaying ASTM D3172 (Fixed Carbon), ASTM D5865 (Calorific Value), ASTM D3173 (Moisture), ASTM D3174 (Ash Content), and UN 33.3.1.6 (Dangerous Goods Self-Heating test).
  - Specimen Certificate of Analysis (COA) document structure.
- **Ocean Logistics & Dangerous Goods Compliance**:
  - Full guidance on maritime UN 1361 Class 4.2 Spontaneously Combustible Solids handling.
  - Container stuffing comparison table (20ft Standard vs. 40ft High Cube capacities in Metric Tons).
  - Vanning Survey, ISPM-15 heat-treated pallets, and export customs documentation package breakdown.
- **B2B Quotation Workflow**:
  - Comprehensive Request for Quotation (RFQ) form with Incoterms (FOB/CIF/CFR/EXW/DDP), destination seaport, and container volume fields.
  - Full client-side validation, duplicate submission protection, and simulated submission confirmation with auto-generated reference IDs.
  - Persistent demo queue stored in browser `localStorage`.
- **Media Gallery & Accessible Lightbox**: High-resolution photography of kilns, screening lines, and container stuffing with keyboard navigation (`ArrowLeft`, `ArrowRight`, `Escape`).
- **Technical Articles & Knowledge Hub**: 3 detailed procurement guides covering sawdust vs. coconut briquettes, UN 1361 ocean freight compliance, and Binchotan culinary science.
- **Mobile-First Responsiveness**: Tested across viewports from 1440px down to 360px with touch-friendly navigation, sticky header, and quick floating WhatsApp/Quote controls.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| **Build Tool & Dev Server** | [Vite 8](https://vite.dev/) (Sub-second HMR & optimized production bundling) |
| **Routing** | [React Router v7](https://reactrouter.com/) (BrowserRouter with 14 multi-page routes) |
| **Styling** | Vanilla CSS (`src/index.css`) with standardized CSS variables and typography tokens |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Typography** | Google Fonts: Plus Jakarta Sans (Headings), Inter (Body), JetBrains Mono (Specs) |

---

## 📁 Project Directory Structure

```
CoalLuxe/
├── public/
│   ├── favicon.svg             # Hexagonal charcoal flame brand icon
│   └── images/                 # High-resolution commercial photographic assets
│       ├── hero_bg.jpg
│       ├── mangrove_charcoal.jpg
│       ├── sawdust_briquettes.jpg
│       ├── binchotan_white_charcoal.jpg
│       ├── coconut_charcoal.jpg
│       ├── khaya_charcoal.jpg
│       ├── factory_kilns.jpg
│       ├── quality_lab.jpg
│       ├── packaging_pallet.jpg
│       └── container_shipping.jpg
├── src/
│   ├── assets/                 # Brand SVG logos and vectors
│   ├── components/             # Reusable UI components
│   │   ├── Breadcrumbs.tsx
│   │   ├── DemoBanner.tsx      # Top dismissible demo notice
│   │   ├── FloatingActions.tsx # WhatsApp & Quote quick buttons
│   │   ├── Footer.tsx          # 4-column B2B footer
│   │   ├── Header.tsx          # Sticky header with search & drawer
│   │   ├── Lightbox.tsx        # Accessible photo modal
│   │   ├── ProductCard.tsx     # Reusable B2B card with mini-specs
│   │   ├── QuoteForm.tsx       # B2B RFQ form with validation
│   │   └── ScrollToTop.tsx     # Viewport scroll reset on route change
│   ├── config/
│   │   └── brandConfig.ts      # Centralized brand, address & market config
│   ├── data/                   # Structured data stores
│   │   ├── articlesData.ts     # Industry technical guides
│   │   ├── faqData.ts          # Procurement FAQ items
│   │   ├── galleryData.ts      # Facility & product media items
│   │   ├── manufacturingSteps.ts # 6-stage kiln process lifecycle
│   │   └── productsData.ts     # 6 structured products with ASTM specs
│   ├── pages/                  # Page routes
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ProductsPage.tsx
│   │   ├── ProductDetailPage.tsx
│   │   ├── ManufacturingPage.tsx
│   │   ├── QualityPage.tsx
│   │   ├── PackagingExportPage.tsx
│   │   ├── GalleryPage.tsx
│   │   ├── ResourcesPage.tsx
│   │   ├── ArticleDetailPage.tsx
│   │   ├── FAQPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── RequestQuotePage.tsx
│   │   ├── PrivacyPolicyPage.tsx
│   │   ├── TermsPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── App.tsx                 # Route declarations
│   ├── index.css               # Global design tokens and utilities
│   └── main.tsx                # Application mount
├── DESIGN_SYSTEM.md            # Design tokens, color system, and typography guide
├── REFERENCE_AUDIT.md          # Reference audit of Lamian Charcoal vs. CoalLuxe
├── VISUAL_QA.md                # Multi-viewport responsive and functional QA audit
├── index.html                  # HTML5 entry with Open Graph & Twitter meta tags
├── package.json                # Project dependencies and npm scripts
├── tsconfig.json               # TypeScript configuration
└── vite.config.ts              # Vite bundler configuration
```

---

## ⚡ Getting Started

### 1. Prerequisites
- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 9.0.0 or higher

### 2. Installation
```bash
# Clone or navigate into the workspace
cd d:/PROJECTS/CoalLuxe

# Install dependencies
npm install
```

### 3. Running Locally in Development Mode
```bash
npm run dev
```
The development server will start at: `http://127.0.0.1:5173/`

### 4. Compiling the Production Bundle
```bash
npm run build
```
This runs `tsc -b` for strict typechecking and compiles the optimized client bundle to `dist/`.

### 5. Previewing the Production Build
```bash
npm run preview
```

---

## 🎨 Client Personalization & Brand Configuration Guide

All client identity parameters are isolated in **`src/config/brandConfig.ts`**. When the client supplies their real corporate identity, simply update the fields in this single file:

```typescript
// src/config/brandConfig.ts

export const brandConfig: BrandConfig = {
  // 1. Toggle demo mode banner off
  isDemoMode: false,

  // 2. Client Corporate Identity
  companyName: 'Your Client Charcoal Co., Ltd.',
  companyShortName: 'ClientCharcoal',
  legalEntity: 'Client Charcoal Global Manufacturing & Export Corp.',
  tagline: 'Sustainable Hardwood Lump & Commercial Briquette Export',
  
  // 3. Contact & Facility Addresses
  address: 'No. 128 Export Processing Highway, District 2, Seaport City',
  city: 'Seaport City',
  country: 'Vietnam / Indonesia / Nigeria',
  email: 'sales@clientcharcoal.com',
  phone: '+84 28 1234 5678',
  whatsappNumber: '+84901234567', // Enables direct click-to-chat
  whatsappMessage: 'Hello, I would like to request container quotation for export.',

  // 4. Operational Scale
  productionCapacity: '80 Containers (1,600 MT) / Month',
  exportMarketsCount: '30+',
  
  // 5. Backend Form Endpoint (Optional)
  // Set this to your REST API, Formspree, or webhook URL:
  formEndpoint: 'https://api.clientcharcoal.com/v1/rfq',
  
  // ...
};
```

---

## 📸 Client Asset Replacement Checklist

Temporary high-resolution photographic demonstrations are currently loaded from `/public/images/`. Use the table below to replace them with the client's authentic photography:

| Current File | Target Subject & Specs | Recommended Format & Dimensions |
| :--- | :--- | :--- |
| `public/images/hero_bg.jpg` | Main hero backdrop: red-hot charcoal embers in commercial grill or kiln mouth | JPG / WebP, `1920 x 1080 px` |
| `public/images/mangrove_charcoal.jpg` | Studio shot of natural mangrove lumpwood charcoal on stone surface | JPG / WebP, `1200 x 900 px` |
| `public/images/sawdust_briquettes.jpg` | Extruded hexagonal sawdust charcoal sticks with central hole | JPG / WebP, `1200 x 900 px` |
| `public/images/binchotan_white_charcoal.jpg` | Authentic Binchotan white charcoal branches with white mineral patina | JPG / WebP, `1200 x 900 px` |
| `public/images/coconut_charcoal.jpg` | 25x25mm coconut shell shisha cubes with 1kg retail carton box | JPG / WebP, `1200 x 900 px` |
| `public/images/khaya_charcoal.jpg` | Large chunky African mahogany black lumpwood pieces | JPG / WebP, `1200 x 900 px` |
| `public/images/factory_kilns.jpg` | Exterior of brick dome kilns or processing facility with smoke stacks | JPG / WebP, `1200 x 800 px` |
| `public/images/quality_lab.jpg` | On-site QA laboratory: moisture balances, bomb calorimeter, muffle furnace | JPG / WebP, `1200 x 800 px` |
| `public/images/packaging_pallet.jpg` | Palletized master cartons wrapped with corner protection in warehouse | JPG / WebP, `1200 x 800 px` |
| `public/images/container_shipping.jpg` | Forklift stuffing 40ft High Cube container at maritime loading dock | JPG / WebP, `1200 x 800 px` |

---

## 📬 Form & Backend Integration

The quotation form (`QuoteForm.tsx`) operates in **Simulation / Demo Mode** by default:
- Inputs are validated strictly on the client side.
- Valid submissions generate a realistic Reference ID (e.g., `RFQ-2026-89421`).
- Inquiries are serialized and saved to `localStorage.getItem('coalluxe_demo_quotes')` so inquiries can be inspected during client demonstrations.
- To connect a live backend, simply configure `formEndpoint` in `src/config/brandConfig.ts`. If populated, `QuoteForm` will issue a `POST` request with JSON payload containing:
  ```json
  {
    "fullName": "Marcus Vance",
    "companyName": "Nordic Fire & Grill Wholesale AB",
    "email": "m.vance@nordicfire-example.com",
    "phone": "+46 8 123 4567",
    "country": "Sweden",
    "product": "Natural Mangrove Hardwood Lump Charcoal",
    "quantity": "2 x 40ft High Cube Containers (~44 MT)",
    "packaging": "10 kg Export Corrugated Cartons",
    "incoterm": "CIF (Cost, Insurance & Freight to Port)",
    "destinationPort": "Port of Gothenburg",
    "notes": "Please provide CIF Gothenburg pricing based on monthly shipment schedule."
  }
  ```

---

## 🗺️ Sitemap & Navigation Routes

| Route | Page Component | Business Purpose |
| :--- | :--- | :--- |
| `/` | `HomePage` | B2B conversion hero, trust metrics, product highlights, process, FAQs |
| `/about` | `AboutPage` | Company profile, operating milestones, and compliance summary |
| `/products` | `ProductsPage` | Complete catalogue with live search, category pills, and sorting |
| `/products/:slug` | `ProductDetailPage` | In-depth ASTM specs table, packaging, applications, embedded quote |
| `/manufacturing` | `ManufacturingPage` | 6-stage kiln carbonization cycle, facility scale, zero-deforestation |
| `/quality` | `QualityPage` | ASTM/ISO test methods, proximate analysis, specimen COA preview |
| `/packaging-export` | `PackagingExportPage` | Carton/bag formats, container stuffing table, Dangerous Goods UN 1361 |
| `/gallery` | `GalleryPage` | Photo gallery of kilns, products, laboratory, and maritime export |
| `/resources` | `ResourcesPage` | Technical knowledge hub and B2B procurement guides |
| `/resources/:slug` | `ArticleDetailPage` | Full article reader with takeaways and related product links |
| `/faq` | `FAQPage` | Searchable accordion directory for buyer procurement questions |
| `/contact` | `ContactPage` | Office & factory addresses, hours, direct WhatsApp, inquiry form |
| `/request-quote` | `RequestQuotePage` | Dedicated commercial container RFQ portal with 4-stage workflow |
| `/privacy-policy` | `PrivacyPolicyPage` | B2B trade confidentiality and private label trademark security |
| `/terms` | `TermsPage` | Incoterms 2020 definitions, quotation validity, inspection terms |
| `*` | `NotFoundPage` | 404 recovery page with quick navigation back to catalogue or quote |

---

## 🌐 Deployment Instructions

The project produces a standard static single-page application (`SPA`) inside the `dist/` directory.

### Deploying to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` from the project root.
3. Add a `vercel.json` rewrite rule for SPA routing:
   ```json
   {
     "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
   }
   ```

### Deploying to Netlify
1. Connect repository to Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add a `public/_redirects` file with: `/* /index.html 200`

### Deploying to Nginx / Docker
Ensure the Nginx configuration includes `try_files $uri $uri/ /index.html;` to allow client-side routing on direct URL hits.

---

## 📄 License & Attribution
- Built originally as a bespoke B2B international charcoal manufacturer prototype.
- Free for commercial client deployment, rebranding, and customization.
