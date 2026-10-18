# Design System Specification: B2B Industrial Charcoal Manufacturer & Exporter

## 1. Design Philosophy
- **Aesthetic Core**: High-end industrial precision, commercial reliability, and mineral/charcoal materiality.
- **Brand Identity Strategy**: Configurable client abstraction with distinct, unbranded defaults. High contrast between deep carbonaceous tones, warm raw earthy neutrals, and a glowing ember bronze/amber accent.
- **Tone of Voice**: Professional B2B exporter, international compliance-ready, technically authoritative.

---

## 2. Color Palette & Design Tokens

### Primary Dark Scales (Carbon & Kiln)
- `--color-carbon-950`: `#0B0C0E` (Deepest charcoal backdrop, high-contrast dark surface)
- `--color-carbon-900`: `#121316` (Primary dark surface, navigation, hero)
- `--color-carbon-850`: `#17191D` (Card backgrounds, panel containers)
- `--color-carbon-800`: `#1F2228` (Elevated card surfaces, secondary interactive cards)
- `--color-carbon-700`: `#2C3038` (Borders, dividers, subtle separators)
- `--color-carbon-600`: `#3D434E` (Subtle strokes, hover borders)

### Light & Neutral Scales (Stone & Paper)
- `--color-sand-50`: `#FAF8F5` (Warm off-white light section background)
- `--color-sand-100`: `#F3EFEA` (Warm light panel backdrop, spec tables)
- `--color-sand-200`: `#E5E0D8` (Light surface borders and muted lines)
- `--color-gray-100`: `#E4E7EB` (High-contrast text on dark backgrounds)
- `--color-gray-300`: `#B0B6BF` (Body text on dark backgrounds)
- `--color-gray-400`: `#868E9B` (Secondary text, metadata, labels)
- `--color-gray-600`: `#505662` (Tertiary text, disabled states)
- `--color-charcoal-text`: `#18191B` (Primary dark text on light backgrounds)

### Restrained Accent (Ember Gold / Bronze)
- `--color-accent-amber`: `#D97706` (Primary interactive highlights, active badges)
- `--color-accent-hover`: `#B45309` (Hover state for amber CTA)
- `--color-accent-subtle`: `rgba(217, 119, 6, 0.12)` (Subtle badge backdrops, tag pills)
- `--color-accent-border`: `rgba(217, 119, 6, 0.35)` (Focus rings, accent borders)
- `--color-accent-copper`: `#C87D55` (Secondary industrial warmth for kiln/firewood indicators)

### Status & Feedback Tokens
- `--color-status-success`: `#10B981` (In-stock indicator, form success)
- `--color-status-warning`: `#F59E0B` (Order lead-time notice)
- `--color-status-danger`: `#EF4444` (Validation error messages)
- `--color-status-info`: `#3B82F6` (Regulatory and shipping compliance tags)

---

## 3. Typography Hierarchy

### Font Family
- **Headings & Brand**: `'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- **Body & Data**: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- **Technical Specs & Numbers**: `'JetBrains Mono', 'SF Mono', Consolas, monospace`

### Scale
- **Display 1 (Hero Title)**: `clamp(2.5rem, 5vw, 4rem)` | Weight: 800 | Line-height: 1.1 | Letter-spacing: `-0.03em`
- **Heading 1 (Page Title)**: `clamp(2rem, 3.5vw, 2.75rem)` | Weight: 700 | Line-height: 1.2 | Letter-spacing: `-0.02em`
- **Heading 2 (Section Title)**: `clamp(1.5rem, 2.5vw, 2rem)` | Weight: 700 | Line-height: 1.25 | Letter-spacing: `-0.01em`
- **Heading 3 (Card Title)**: `1.25rem (20px)` | Weight: 600 | Line-height: 1.35
- **Heading 4 (Subheadings)**: `1.05rem (16.8px)` | Weight: 600 | Line-height: 1.4
- **Body Large**: `1.125rem (18px)` | Weight: 400 | Line-height: 1.6
- **Body Regular**: `0.95rem (15.2px)` | Weight: 400 | Line-height: 1.55
- **Body Small / Meta**: `0.825rem (13.2px)` | Weight: 500 | Line-height: 1.45
- **Badge / Micro Label**: `0.75rem (12px)` | Weight: 700 | Letter-spacing: `0.06em` | Uppercase

---

## 4. Spacing, Layout & Container Tokens

### Container Widths
- `--container-max`: `1280px`
- `--container-wide`: `1400px`
- `--container-narrow`: `960px`
- `--container-prose`: `760px`

### Spacing Scale
- `--space-1`: `4px`
- `--space-2`: `8px`
- `--space-3`: `12px`
- `--space-4`: `16px`
- `--space-5`: `20px`
- `--space-6`: `24px`
- `--space-8`: `32px`
- `--space-10`: `40px`
- `--space-12`: `48px`
- `--space-16`: `64px`
- `--space-20`: `80px`
- `--space-24`: `96px`

### Responsive Breakpoints
- `mobile-sm`: `360px`
- `mobile`: `390px`
- `tablet`: `768px`
- `desktop-sm`: `1024px`
- `desktop`: `1280px`
- `desktop-lg`: `1440px`

---

## 5. Component Styles

### Buttons
- **Primary CTA (`.btn-primary`)**:
  - Background: `--color-accent-amber` (`#D97706`), text: `#FFFFFF`
  - Padding: `12px 24px`
  - Border-radius: `6px`
  - Transition: `background-color 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease`
  - Hover: Background `--color-accent-hover` (`#B45309`), shadow `0 4px 12px rgba(217, 119, 6, 0.35)`, transform `-1px`
- **Secondary CTA (`.btn-secondary`)**:
  - Background: `transparent`, border: `1px solid var(--color-carbon-600)`, text: `--color-gray-100`
  - Padding: `12px 24px`
  - Border-radius: `6px`
  - Hover: Border `--color-accent-amber`, text `--color-accent-amber`, background `rgba(217, 119, 6, 0.08)`
- **Light Theme Primary (`.btn-light-primary`)**:
  - Background: `--color-carbon-900`, text: `#FFFFFF`, border: `none`
  - Hover: Background `--color-carbon-800`

### Product & Category Cards
- **Product Card (`.product-card`)**:
  - Surface: `--color-carbon-850`, border: `1px solid var(--color-carbon-700)`
  - Border radius: `8px` (clean industrial geometry, not overly pill-shaped)
  - Image aspect ratio: `4/3` with crisp `object-fit: cover`
  - Tags: Category pill at top-right (`.category-pill`)
  - Key Specs Bar: Mini row displaying fixed carbon %, burn duration, and calorific value
  - Actions: Dual action — "View Specifications" + "Request Quote"
  - Hover state: Border turns `--color-carbon-600` with subtle upward elevation (`translateY(-3px)`) and image subtle zoom (`scale(1.03)`).

### Technical Specification Tables
- Full-bleed bordered table with alternating striping.
- Left column (Parameter): Medium font weight, muted tone (`--color-gray-400`).
- Right column (Standard / Value): High-contrast white (`--color-gray-100`), monospaced where applicable (`> 7,500 kcal/kg`, `≤ 2.5% ash`).
- Standardized ISO/ASTM parameter definitions.

### Form Design System
- Dark input fields (`background: var(--color-carbon-800)`, `border: 1px solid var(--color-carbon-700)`)
- Clear floating / top-aligned labels with mandatory asterisks (`*`)
- Inline validation messages in `--color-status-danger`
- Focus state: `outline: none`, `border-color: var(--color-accent-amber)`, `box-shadow: 0 0 0 3px rgba(217, 119, 6, 0.25)`

### Focus States & Accessibility
- Visible focus rings: `2px solid var(--color-accent-amber)` with `2px offset`.
- High color contrast ratio: Exceeds WCAG AA (4.5:1 for normal text, 3:1 for large text).
- Reduced motion support: `@media (prefers-reduced-motion: reduce)` disables scale transforms and slider animations.
