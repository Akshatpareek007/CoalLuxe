# Visual and Functional Quality Assurance (QA) Report

**Project**: CoalLuxe B2B Charcoal Manufacturer & Global Exporter Website  
**Date**: October 2026  
**Status**: PASSED / Production-Ready  
**Evaluation Model**: Multi-Viewport Responsive & Functional Audit  
**Tested Viewports**:
- Desktop: `1440 x 900 px` & `1280 x 800 px`
- Tablet: `1024 x 768 px` & `768 x 1024 px`
- Mobile: `390 x 844 px` & `360 x 800 px`

---

## 1. Executive Summary

A comprehensive visual, responsive, and functional test was conducted on the CoalLuxe application (`http://127.0.0.1:5173/`). The website successfully replicates the industrial credibility, product-first structure, technical depth, and B2B lead-generation efficiency of international market leaders like Lamian Charcoal, while establishing a distinctive, original brand identity.

Zero proprietary trademarks, logos, or assets were duplicated. All client attributes are maintained in an easily swappable, centralized configuration layer (`src/config/brandConfig.ts`), with clearly labeled demonstration banners and placeholder tokens.

---

## 2. Visual Hierarchy & Design System Audit

| Design Dimension | Evaluation Standard | Observation & Verification | Status |
| :--- | :--- | :--- | :--- |
| **Color Harmony** | Deep Carbon (#0D0D11, #16161D), Slate Gray, and Amber Ember (#D97706, #F59E0B) | High contrast, premium industrial feel. Zero generic bright primary colors. | PASS |
| **Typography Scale** | Plus Jakarta Sans (Headings), Inter (Body text), JetBrains Mono (Specs) | Clear typographic hierarchy across `h1` through `h6`. Legible at all sizes. | PASS |
| **Imagery** | Commercial photography, industrial kilns, lab testing, container stuffing | 10 high-resolution photographic assets generated and loaded without layout shifts. | PASS |
| **Layout Rhythm** | Generous 4rem–5rem section padding, 1200px container width | Clean breathing room without cluttered cards or excessive whitespace gaps. | PASS |
| **Component Consistency** | Uniform border radius (4px–8px), subtle borders (`1px solid var(--color-carbon-700)`) | Avoided over-rounded pills, excessive gradients, and gratuitous glassmorphism. | PASS |

---

## 3. Page-by-Page Audit & Functional Verification

### 1. Homepage (`/`)
- **Header**: Responsive navigation with backdrop blur on scroll, live product search modal with real-time query matching, and prominent 'Request Quote' CTA.
- **Hero Section**: High-contrast imagery with verified badges (`UN 1361 CLASS 4.2`, `FSC® CHAIN-OF-CUSTODY`), dual CTAs (`Request Container Quote`, `Explore Product Range`), and key technical metrics bar (`>7,500 kcal/kg`, `<2.5% ash`, `60+ Containers/Month`).
- **Category Filter Pills**: Clicking filter tabs (`All`, `Black Hardwood`, `White Charcoal`, `Briquettes`, `Shisha`) dynamically updates the 6-product grid with zero page reload.
- **Product Cards**: Mini-spec badges for Fixed Carbon %, Burn Time, and Calorific Value. Dual CTAs (`Full Specs`, `Get Quote`).
- **Industrial Process & Quality Highlights**: 6-stage kiln process timeline and laboratory standards overview.
- **B2B FAQ Accordion**: Expandable accordions with keyboard accessibility and chevron rotation.
- **Footer**: 4-column layout with compliance links, destination markets summary, and copyright.

### 2. Product Catalogue (`/products`)
- **Search Bar**: Real-time substring search matching product name, category, tagline, application, and chemical specifications.
- **Filter Tabs**: Instant filtering by charcoal category with count indicators.
- **Sorting**: Select dropdown supporting sorting by:
  - Default
  - Highest Fixed Carbon %
  - Highest Calorific Value (kcal/kg)
  - Alphabetical (A–Z)
- **Empty State**: Clear fallback container with "Reset Filters" action when queries return zero results.

### 3. Product Detail Page (`/products/[slug]`)
- **Breadcrumbs**: Hierarchical navigation (`Home > Products > [Product Name]`).
- **Interactive Gallery**: Thumbnail selector syncing with main view, plus full-screen `Lightbox` enlargement.
- **Certified Specifications Table**: Two-column ASTM/ISO parameter breakdown.
- **Packaging & Applications**: Clear visual tags and container stuffing notes.
- **Embedded RFQ Form**: Pre-populates target product into the quotation form.
- **Related Products Carousel**: 3 complementary grades displayed at the bottom.

### 4. Manufacturing Capabilities (`/manufacturing`)
- **Kiln Infrastructure**: 50+ brick dome kilns, 18–22 day carbonization cycle, and up to 1,200°C threshold.
- **6-Stage Lifecycle**: Sourcing, carbonization, stabilization cooling, grading/de-dusting, laboratory verification, and container stuffing.
- **Environmental Stewardship**: Zero-deforestation policy, FSC® chain-of-custody, and wood vinegar smoke condensing.

### 5. Quality Assurance & Laboratory Testing (`/quality`)
- **Distinction of Audits**: Separates internal factory line tests from independent third-party audits (SGS, Intertek, Vilas).
- **Analytical Methodologies**: ASTM D3172 (Fixed Carbon), ASTM D5865 (Calorific Bomb), ASTM D3173 (Moisture), ASTM D3174 (Ash), and UN 33.3.1.6 (Self-Heating).
- **Sample Certificate of Analysis (COA)**: Specimen document structure with Lot ID, moisture, ash, and thermal output metrics.
- **Physical Samples Action**: Workflow for ordering 2kg–5kg test batches via DHL/FedEx.

### 6. Packaging & Export Logistics (`/packaging-export`)
- **Format Options**: 5-ply cartons (5kg–20kg), reinforced woven PP sacks, kraft paper bags, and private label engraving.
- **Stuffing Comparison Table**: Exact metric ton capacities for 20ft vs. 40ft High Cube containers.
- **Dangerous Goods Compliance**: Detailed explanation of UN 1361 Class 4.2 handling, MSDS, and Vanning survey certificates.
- **Global Seaports Table**: 12 primary export markets across Middle East, East Asia, Europe, and Americas.

### 7. Facility & Media Gallery (`/gallery`)
- **Filterable Gallery**: Categories for All, Products, Kilns & Factory, Quality Lab, and Logistics.
- **Lightbox Integration**: Keyboard navigation (Arrow Left, Arrow Right, Escape), next/previous controls, and image counter.

### 8. Industry Resources & Guides (`/resources` & `/resources/[slug]`)
- **Technical Articles**:
  1. *Sawdust Briquettes vs. Coconut Shell Charcoal: A Technical B2B Buyer’s Guide*
  2. *UN 1361 Class 4.2 Charcoal Export: Maritime Safety, Stuffing & Documentation*
  3. *The Science of Binchotan White Charcoal: Far-Infrared Radiation & Acoustic Purity*
- **Article Reader**: Executive summary takeaways box, structured text, and related product callout.

### 9. Frequently Asked Questions (`/faq`)
- **Interactive Search**: Real-time keyword filter across 7 detailed procurement answers.
- **Category Tabs**: Ordering & Capacity, Packaging & Private Label, Shipping & Compliance, Quality & Testing.

### 10. Commercial Contact & Directory (`/contact`)
- **Facility Directory**: Commercial headquarters and kiln processing complex addresses.
- **Instant WhatsApp Action**: Pre-formatted inquiry link directly to the trade desk.
- **Embedded Inquiry Form**: Full RFQ and contact message handling.

### 11. Request for Quotation (`/request-quote`)
- **Form Fields**: Full Name, Company, Business Email, Telephone, Country, Product Selection, Container Quantity, Packaging Format, Incoterms (FOB/CIF/CFR/EXW/DDP), Destination Port, and Additional Specs.
- **Validation**: Strict inline error checking for empty required fields, invalid email format, and sensible input limits.
- **Duplicate Protection**: Disables re-submission and displays loading state during submission.
- **Submission Feedback**: Generates persistent simulated Reference ID (e.g. `RFQ-2026-XXXXX`), confirms arrival in the export queue, and stores submission to browser `localStorage` for demo continuity.

### 12. Legal & Compliance Pages (`/privacy-policy` & `/terms`)
- **Privacy Policy**: Tailored for B2B trade confidentiality, non-disclosure of buyer container volumes, and OEM artwork security.
- **Terms of Sale**: Clear definitions of Incoterms 2020 (FOB, CIF, CFR), 14-day quotation validity, and pre-shipment inspection rules.

### 13. Custom 404 Page (`*`)
- Clean recovery page with direct links back to Home, Catalogue, and Quotation portal.

---

## 4. Responsive Viewport Matrix

| Viewport | Test Resolution | Navigation Behavior | Layout Behavior | Status |
| :--- | :--- | :--- | :--- | :--- |
| **Desktop Ultra** | 1440 x 900 px | Horizontal navbar, search modal, top demo banner | 3-column product grid, 4-column metrics | PASS |
| **Desktop Standard** | 1280 x 800 px | Horizontal navbar, sticky backdrop blur | 3-column product grid, balanced spacing | PASS |
| **Tablet Landscape** | 1024 x 768 px | Horizontal navbar with condensed padding | 2-column product grid, responsive tables scrollable | PASS |
| **Tablet Portrait** | 768 x 1024 px | Mobile hamburger button appears, drawer menu | 2-column product grid, stacked hero content | PASS |
| **Mobile Standard** | 390 x 844 px | Drawer menu with full route links, quick actions | 1-column product cards, stacked spec tables | PASS |
| **Mobile Small** | 360 x 800 px | Drawer menu, zero horizontal overflow | Touch-friendly buttons (min 44px targets) | PASS |

---

## 5. Accessibility (a11y) & SEO Checks

1. **Semantic HTML**: Proper use of `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<table>`, and `<form>`.
2. **Heading Hierarchy**: Exactly one `<h1>` per page, followed by logical `<h2>` and `<h3>` tags.
3. **Form Labels & ARIA**:
   - All input controls have associated `<label>` tags with descriptive `htmlFor` and unique IDs.
   - Accordions and mobile menu toggle use `aria-expanded` and `aria-controls`.
   - Modals and Lightbox use `role="dialog"` and `aria-modal="true"`.
4. **Keyboard Operability**:
   - Lightbox closes on `Escape` key and navigates with `ArrowLeft` / `ArrowRight`.
   - Search modal opens with `/` shortcut and closes on `Escape`.
   - Skip link (`Skip to main content`) implemented for screen readers.
5. **Color Contrast**:
   - Text color `#FFFFFF` and `var(--color-gray-200)` over `var(--color-carbon-950)` exceeds WCAG AAA contrast ratio (12:1+).
   - Amber accents `#D97706` and `#F59E0B` exceed WCAG AA contrast for badges and buttons.
6. **Open Graph & Meta Tags**:
   - Configured in `index.html` with title, description, Open Graph image, and Twitter Card tags.

---

## 6. Build & Production Verification

- **Command**: `npm run build` (`tsc -b && vite build`)
- **Result**: Zero TypeScript compilation errors.
- **Bundle Output**:
  - `dist/index.html` (2.49 kB)
  - `dist/assets/index-DBqeNqAH.css` (12.35 kB)
  - `dist/assets/index-DcVeXw7S.js` (491.69 kB)
- **Build Duration**: 524ms.
