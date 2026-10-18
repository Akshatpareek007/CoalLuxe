# Comprehensive Reference Audit: Lamian Charcoal (lamiancharcoal.com)

## 1. Verified Observations

### Architecture & Technology Stack
- **Platform**: WordPress 7.x with Flatsome multi-purpose e-commerce theme and Flatsome Child theme.
- **E-Commerce & Catalogue**: WooCommerce running in B2B catalogue mode (prices hidden, cart hidden, replaced with inquiry / quote actions).
- **Forms**: Contact Form 7 with specialized B2B styling (`.b2b-contact-container`, `.b2b-contact-form`).
- **SEO & Structured Data**: Rank Math SEO plugin implementing `Organization`, `Place`, `WebSite`, `WebPage`, `Product`, and `Article` JSON-LD schemas.
- **Interactive Components**: Flickity / Swiper sliders for product galleries, post carousels, and stacked image galleries; Helpie FAQ accordions; Lightbox for gallery viewing.
- **Multilingual Support**: GTranslate widget embedded in header navigation.
- **Floating Controls**: Floating Contact Buttons (WhatsApp `wa.me`, Zalo `zalo.me`) on bottom-right, plus pulsating hotline phone button on bottom-left.

### Visual Identity & Design System
- **Color Palette**:
  - Dominant Backgrounds: Deep black (`#000000`), dark charcoal (`#111215`, `#1a1a1a`), and warm off-white (`#faf9f9`, `#f1f1f1`) for alternating sections.
  - Accent / Primary CTA: Warm Ember Gold / Amber (`#face0a`, `#d4a017`) and Alert Crimson (`#dd3333`) used for key CTAs and highlights.
  - Borders & Containers: Subtle translucent borders (`rgba(151, 151, 151, 0.17)`), dark overlays (`rgba(0, 0, 0, 0.75 - 0.85)`).
- **Typography**:
  - Primary Headings: *Rubik* (weight 700) and *Be Vietnam Pro* (weight 800 for uppercase menu links).
  - Body Text: *Rubik* regular (clean, high legibility for technical data).
- **Header Layout**:
  - Center logo placement flanked by left navigation (`HOME`, `ABOUT US` with dropdown, `PRODUCTS` with dropdown, `NEWS`, `GALLERY`, `CONTACT`) and right search form + language toggle. Sticky transition on scroll with reduced height.

### Content Structure & Key Sections
- **Homepage Flow**:
  1. Header with navigation, dropdowns, and live product search.
  2. Full-bleed video/imagery Hero banner with primary "VISIT SHOP / EXPLORE" and secondary "GET FREE QUOTE" CTAs.
  3. Floating Credibility Metric bar: 100% Natural & Sustainable, 20+ Global Export Markets, 50+ Containers/Month, 95% Repeat Customer Rate.
  4. About section featuring company synopsis and embedded video.
  5. Tabbed Product Showcase: Black Charcoal, White Charcoal (Binchotan), Other Products.
  6. Logistics & Shipping Partners banner (Maersk, MSC, CMA CGM, ONE, Evergreen).
  7. Value Proposition / Why Choose Us: 4 key pillars (Team expertise, Source-controlled quality, Seamless supply chain, Real-time reporting).
  8. Factory & Production Gallery carousel with lightbox enlargement.
  9. Industry Insights / Knowledge base carousel (articles on sawdust vs. coconut, lighting charcoal, Binchotan metallic ring, export standards).
  10. Comprehensive B2B Footer: Logo, company description, corporate email, social icons, quick links, product taxonomy, verified legal address, and embedded map.

- **Product Detail Pages**:
  - Multi-image gallery with thumbnail navigation and zoom.
  - Breadcrumb hierarchy (`Home / Products / Category / Product Name`).
  - Key product summary and WhatsApp direct engagement button.
  - Standardized Technical Specification table (Origin, Material, Shape, Diameter, Length, Calorific Value > 7000 Kcal/kg, Fixed Carbon %, Volatile Matter %, Ash %, Moisture %).
  - Dedicated on-page B2B Quote Form pre-qualifying buyer requirements (Company Name, Contact Person, Corporate Email, Phone/WhatsApp, Charcoal Type, Estimated Order Quantity, Incoterms/Port/Notes).
  - Cross-sell / Related Products slider.

- **Company / About Page**:
  - Corporate background and affiliation with energy groups.
  - Interactive Milestone & Vision accordion (Foundation, Network Expansion, Global Integration, Future Growth).
  - Compliance & Documentation highlights (Multilingual MSDS, UN 1361 Class 4.2 Dangerous Goods packaging group III, FSC® certification, Vinacontrol inspection).
  - MSDS download action.

- **Export & Logistics Page**:
  - 13 Key Export Destination Markets (UAE, Saudi Arabia, Kuwait, Bahrain, Qatar, Oman, Jordan, Lebanon, Iraq, Turkey, etc.).
  - Port options (Cat Lai, Hai Phong, Da Nang) explaining route and freight optimization.
  - Dangerous Goods (DG Class 4.2) compliance handling and container stuffing protocols.

- **FAQ Page**:
  - Categorized accordions addressing OEM private label packaging (3kg, 6kg, 10kg, 15kg, 20kg boxes and PP bags), production capacity (14-21 days lead time for container orders), Incoterms (FOB, CIF, CFR, DDP), payment terms (T/T, L/C at sight), and self-heating test reports.

---

## 2. Inferences from Accessible Content
- **B2B Buyers' Priorities**: International buyers (wholesalers, distributors, restaurant chains, shisha lounges) prioritize **consistent fixed carbon / calorific value**, **low ash content (< 2-3%)**, **spark/smoke-free burn**, **reliable container lead times**, **Dangerous Goods (UN 1361 Class 4.2) shipping compliance**, and **custom OEM packaging**.
- **Quote Form Strategy**: Instead of an instant checkout, B2B procurement requires quotes based on container volume (20ft / 40ft HC), destination port (CIF / FOB), and packaging specifications.
- **Credibility Signals**: Laboratory test sheets, FSC® certificates, SGS / Vinacontrol inspection reports, and warehouse loading photos are essential proof points for first-time overseas buyers.

---

## 3. Assumptions Requiring Confirmation (Client Specific)
- Client's official legal name, trading brand, headquarters, and factory/kiln locations.
- Whether client is a primary kiln owner/manufacturer, an integrated exporter, or a trading aggregator.
- Specific wood varieties processed (e.g., Mangrove, Acacia, Eucalyptus, Khaya/Mahogany, Coffee wood, Lychee, Coconut Shell, Sawdust briquettes).
- Verified monthly production capacity (containers per month) and minimum order quantity (MOQ).
- Exact certifications held (FSC, ISO, PEFC, SGS self-heating test, etc.).
- Active export markets and preferred Incoterms (FOB, CIF, CFR, EXW, DDP).
- Official corporate email, WhatsApp business number, and hotline phone number.

---

## 4. Useful Design Patterns (To Re-architect Originally)
1. **Prominent Technical Specification Tables**: Clean, high-contrast tables on every product page displaying calorific value, fixed carbon, ash, and moisture.
2. **Integrated Product Quote Flow**: Allowing buyers to initiate a quote directly with pre-filled product attributes or via a dedicated bulk request form.
3. **Logistics & Dangerous Goods Clarity**: Dedicated explanations of UN 1361 Class 4.2 maritime handling, container stuffing, and export documentation to alleviate buyer friction.
4. **Interactive Milestones & Quality Assurance Timeline**: Visualizing quality control from raw wood sourcing to kiln carbonization, grading, and moisture testing.
5. **Multi-tier Category Filtering**: Seamless filtering across lump charcoal, white charcoal (Binchotan), sawdust briquettes, and coconut shisha charcoal.
6. **Floating Quick-Contact Hub**: Discreet, non-intrusive floating WhatsApp/inquiry action tailored for mobile and desktop.

---

## 5. Original Assets and Assets Strategy
- **DO NOT COPY**: Lamian's proprietary logo, corporate photos, brand graphics, Vietnamese legal text, or registered trademark marks.
- **ORIGINAL ASSETS TO GENERATE / PREPARE**:
  - Custom high-resolution industrial charcoal photography: raw hardwood lump charcoal, glowing binchotan coals, kiln brick carbonization ovens, precision hexagonal sawdust briquettes, coconut cube shisha charcoals, container loading, and laboratory moisture testing.
  - Original vector diagrams for the 6-stage manufacturing cycle and quality control workflow.
  - Clean iconography for specifications (Fixed Carbon, Heat Value, Ash Content, Burn Duration).
  - Clear placeholder data architecture with `[COMPANY_NAME]`, `[COMPANY_ADDRESS]`, `[CERTIFICATION_DETAILS]`, etc., making personalization straightforward.

---

## 6. Pages & Interactions Limitations Encountered
- Live server backend logic (PHP/MySQL) was not directly accessible; replicated via clean, modern client-side state management and simulated API endpoints.
- Third-party chat widgets (Zalo web script, Chongmadoc security badge) are proprietary Vietnam-specific tools; replaced with standard international B2B WhatsApp, phone, email, and accessible modal inquiry workflows.
