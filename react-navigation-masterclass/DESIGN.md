# DESIGN.md

## Overview

Swiggy's consumer surfaces (homepage, restaurant discovery feed, Instamart, checkout flow, and restaurant detail pages) read as a high-velocity commerce engine optimized for appetite stimulation and rapid conversion. The design language is dense but controlled: large food photography anchors every discovery surface while typography, offer chips, and metadata compress aggressively around it to maximize scan efficiency.

The system is unmistakably mobile-first. Orange ({colors.primary}) acts as the behavioral accelerator across every primary interaction — checkout CTAs, active tabs, promotional badges, and delivery highlights. Rounded cards, pill-shaped chips, and compressed metadata rows create a tactile, thumb-friendly interface tuned for fast browsing and repeat ordering behavior.

Typography is modern grotesk with high contrast between restaurant names and supporting metadata. Unlike editorial-first commerce systems, Swiggy prioritizes transactional density over whitespace. Cards stack vertically with minimal decorative interruption, enabling near-infinite feed continuity.

Below 768px the experience collapses tightly: desktop navigation compresses into sticky mobile headers, horizontal discovery modules become swipe carousels, restaurant grids flatten to single-column feeds, and checkout actions persist as sticky bottom bars.

**Key Characteristics:**
- Bright Swiggy orange ({colors.primary}) as the universal action and acceleration color
- Image-dominant restaurant cards with dense supporting metadata
- Pill-shaped chips ({rounded.full}) used extensively for filters, offers, and navigation
- Flat white surfaces with restrained shadow usage
- Tight typography hierarchy optimized for rapid scanning
- Infinite-scroll vertical feed architecture
- Sticky search and sticky checkout behaviors across mobile flows
- Offer-heavy merchandising with strong contrast emphasis
- Rounded rectangular geometry ({rounded.lg} → {rounded.xxl}) across all discovery surfaces
- Food photography treated as the emotional layer of the interface

---

## Colors

> Source surfaces: swiggy.com homepage, restaurant discovery feed, Instamart category pages, checkout flow, restaurant detail pages. The palette remains highly consistent across every transactional surface.

### Brand & Accent

- **Swiggy Orange** ({colors.primary}): Universal primary action color. Used on checkout buttons, active states, offer emphasis, and delivery highlights.
- **Deep Orange** ({colors.primary-deep}): Pressed-state variant of the primary orange used in active CTA interactions.
- **Offer Green** ({colors.success}): Discount and savings emphasis ("FREE DELIVERY", "50% OFF", "Save ₹125").
- **Rating Green** ({colors.rating}): Restaurant-rating pill background with white star iconography.
- **Attention Red** ({colors.attention}): Surge pricing, urgency alerts, and limited-availability states.
- **Instamart Purple** ({colors.instamart-purple}): Instamart-specific accent occasionally used for grocery category emphasis.

### Surface

- **Canvas White** ({colors.canvas}): Primary background across discovery and checkout flows.
- **Soft Gray** ({colors.surface-soft}): Filter-chip rest states, grouped containers, loading placeholders.
- **Divider Gray** ({colors.hairline}): 1px separators across cards, rows, and list dividers.
- **Elevated Gray** ({colors.surface-elevated}): Sticky headers and floating surfaces.

### Text

- **Deep Ink** ({colors.ink-deep}): Restaurant names, pricing, and major section headings.
- **Ink** ({colors.ink}): Standard body copy and metadata.
- **Steel** ({colors.steel}): Supporting delivery text, cuisine labels, and tertiary metadata.
- **Stone** ({colors.stone}): Disabled states and quieter footer/support text.

### Semantic

- **Success** ({colors.success}): Delivery rewards, discounts, successful order states.
- **Warning** ({colors.warning}): Delivery surge indicators and temporary service limitations.
- **Critical** ({colors.critical}): Checkout/payment failures and unavailable inventory.
- **Critical Strong** ({colors.critical-strong}): Validation-error borders and inline form errors.

---

## Typography

### Font Family

Swiggy uses a modern grotesk/sans-serif system optimized for dense marketplace scanning and mobile rendering. The typography behaves similarly to Inter, Proxima Nova, or Gilroy-style systems with strong geometric proportions and tight line-height control.

The system prioritizes:
- restaurant discoverability
- delivery-time visibility
- pricing clarity
- offer readability
- feed density

Bold weights are reserved for restaurant names, pricing, and CTA labels while metadata compresses into lighter 12–14px roles.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.hero-display}` | 56px | 700 | 1.1 | -1px | Homepage campaign headlines |
| `{typography.display-lg}` | 40px | 700 | 1.15 | -0.5px | Major promotional sections |
| `{typography.heading-lg}` | 28px | 700 | 1.2 | -0.3px | Section titles |
| `{typography.heading-md}` | 20px | 600 | 1.3 | -0.2px | Restaurant names |
| `{typography.heading-sm}` | 18px | 600 | 1.35 | -0.1px | Card headers |
| `{typography.subtitle-lg}` | 16px | 600 | 1.4 | 0 | Offer emphasis |
| `{typography.body-md}` | 14px | 400 | 1.45 | 0 | Metadata and supporting text |
| `{typography.body-sm}` | 12px | 400 | 1.4 | 0 | Delivery/helper text |
| `{typography.caption-bold}` | 11px | 700 | 1.3 | 0.2px | Offer chips and badges |
| `{typography.caption}` | 11px | 500 | 1.3 | 0.2px | Secondary metadata |
| `{typography.button-md}` | 14px | 700 | 1.4 | 0 | CTA labels |

### Principles

- Restaurant names always dominate visually over cuisine metadata.
- Delivery ETA is prioritized above distance or pricing metadata.
- Pricing and discount text use aggressive contrast hierarchy.
- Supporting metadata compresses vertically to maximize feed density.
- Typography remains highly legible under rapid thumb-scrolling behavior.
- Section headlines use tighter line-height than body text to increase vertical compression efficiency.

---

## Layout

### Spacing System

- **Base unit**: 4px increment system optimized for dense mobile layouts.
- **Tokens**: `{spacing.xs}` (4px) · `{spacing.sm}` (8px) · `{spacing.md}` (12px) · `{spacing.base}` (16px) · `{spacing.lg}` (20px) · `{spacing.xl}` (24px) · `{spacing.xxl}` (32px) · `{spacing.section}` (48px).
- **Card spacing**: Restaurant cards use `{spacing.base}` internal rhythm with compressed metadata stacks.
- **Feed rhythm**: Discovery sections separate at `{spacing.xl}` or `{spacing.xxl}` intervals.
- **Checkout density**: Checkout panels compress aggressively using `{spacing.sm}` → `{spacing.base}` spacing rhythm.

### Grid & Container

- Homepage discovery feed uses single-column stacking on mobile and adaptive multi-column layouts on desktop.
- Horizontal discovery rails use 12–16px column gaps.
- Restaurant cards maintain consistent image ratios regardless of viewport.
- Desktop layouts widen gutters while preserving card density.

### Whitespace Philosophy

Whitespace exists primarily to separate interaction zones rather than create editorial breathing room. Food photography provides the emotional openness while metadata compresses tightly beneath it. Infinite-scroll continuity is prioritized over spacious composition.

---

## Elevation & Depth

The system stays predominantly flat with restrained shadow usage.

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No shadow | Standard feed surfaces |
| 1 (subtle) | `rgba(0,0,0,0.08) 0px 1px 4px` | Floating cards and chips |
| 2 (sticky) | `rgba(0,0,0,0.12) 0px 2px 8px` | Sticky cart footer and checkout bar |
| 3 (modal) | `rgba(0,0,0,0.18) 0px 4px 16px` | Payment and overlay modals |

### Decorative Depth

- Food photography provides most of the emotional depth.
- Gradients appear primarily in promotional banners.
- Shadows are functional rather than decorative.
- Floating sticky elements use slightly elevated surfaces for separation.

---

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Micro tags |
| `{rounded.sm}` | 6px | Chips |
| `{rounded.md}` | 8px | Inputs |
| `{rounded.lg}` | 12px | Restaurant cards |
| `{rounded.xl}` | 16px | Promotional surfaces |
| `{rounded.xxl}` | 24px | Hero banners |
| `{rounded.full}` | 999px | Pills and badges |
| `{rounded.circle}` | 50% | Icons and avatars |

### Geometry

- Restaurant imagery uses `{rounded.lg}` consistently.
- Chips and category filters always use `{rounded.full}`.
- Promotional banners soften toward `{rounded.xxl}`.
- Hard edges are almost entirely absent from the system.

---

## Components

> Hover states are minimal and largely desktop-only. Mobile-first touch behavior dominates the system.

### Buttons

**`button-primary`** — Universal checkout and conversion CTA.
- Background `{colors.primary}`, white text, `{rounded.full}`, typography `{typography.button-md}`.
- Used for checkout, reorder, add-to-cart, and payment flows.
- Pressed state deepens to `{colors.primary-deep}`.

**`button-secondary`** — Ghost/outlined secondary CTA.
- Transparent background, orange border, orange text.
- Used for filters, dismissals, and alternative actions.

**`button-chip`** — Pill-shaped interactive filter chip.
- Inactive: `{colors.surface-soft}` background.
- Active: `{colors.primary}` fill with white text.
- Rounded `{rounded.full}`.

### Cards & Containers

**`card-restaurant`** — Primary discovery card.
- Large food image top.
- Restaurant metadata compressed below.
- Contains rating pill, ETA, cuisine, price range, and offer row.
- Rounded `{rounded.lg}` with minimal border treatment.

**`card-offer-banner`** — Promotional marketing strip.
- Bright gradient backgrounds.
- Large offer typography.
- Rounded `{rounded.xxl}`.

**`card-category`** — Cuisine/category navigation tile.
- Square or slightly vertical layout.
- Image/icon centered.
- Touch-optimized sizing.

**`card-cart-summary`** — Sticky checkout footer.
- Elevated surface.
- Persistent CTA and total pricing.
- Shadow level 2.

### Inputs & Forms

**`search-bar`**
- Sticky pill-shaped search.
- Leading search icon.
- Location-aware behavior.
- Rounded `{rounded.full}`.

**`filter-chip`**
- Pill filter row component.
- Scrollable horizontally on mobile.

**`quantity-stepper`**
- Compact add/remove quantity control.
- Orange accent for active increment state.

### Badges & Status

**`badge-rating`**
- Green pill with white star icon.
- Typography `{typography.caption-bold}`.

**`badge-offer`**
- Orange or green promotional chip.
- Used for discounts and free-delivery messaging.

**`badge-delivery-fast`**
- Fast-delivery emphasis chip.
- Often paired with lightning iconography.

---

## Navigation

### Top Navigation (Desktop)

- Sticky white surface with search, login, location, and cart.
- Search prioritized centrally.
- Thin bottom divider.

### Top Navigation (Mobile)

- Compressed sticky header.
- Search-first behavior.
- Cart icon persistent.
- Horizontal discovery chips below.

### Sticky Cart Footer

- Appears immediately after cart interaction.
- Persists throughout feed scrolling.
- Contains item count, pricing, and CTA.

### Service Tabs

- Food
- Instamart
- Dineout
- Genie

Active state uses `{colors.primary}` emphasis.

---

## Signature Components

**`hero-offer-carousel`**
- Full-width promotional slider.
- Bright illustration-driven surfaces.
- Large discount typography.

**`restaurant-feed`**
- Infinite-scroll recommendation engine.
- Card repetition optimized for endless browsing.

**`delivery-meta-row`**
- Dense horizontal metadata strip:
  - rating
  - ETA
  - cuisine
  - pricing

**`sticky-checkout-bar`**
- Persistent mobile conversion component.
- Elevated above feed surfaces.

**`quick-category-grid`**
- Cuisine and service-entry navigation.
- Icon-first visual hierarchy.

---

## Do's and Don'ts

### Do

- Use `{colors.primary}` aggressively for transactional actions.
- Prioritize food photography over decorative UI.
- Keep metadata compressed but readable.
- Maintain sticky conversion surfaces.
- Preserve pill geometry across all filters and chips.
- Keep delivery ETA visually dominant.

### Don't

- Don't introduce excessive whitespace.
- Don't use hard-edged cards or square chips.
- Don't overload restaurant cards with secondary metadata.
- Don't weaken CTA contrast hierarchy.
- Don't use heavy decorative shadows.
- Don't bury offers below the fold.

---

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile Small | < 480px | Single-column feed; sticky checkout bar; compressed metadata |
| Mobile Large | 480 – 767px | Expanded cards and dual-column promo modules |
| Tablet | 768 – 1023px | Multi-column restaurant grids; wider gutters |
| Desktop | 1024 – 1439px | Full discovery layouts and horizontal merchandising rails |
| Wide Desktop | ≥ 1440px | Larger promotional surfaces and expanded feed density |

### Touch Targets

- Primary CTAs maintain 44px minimum height.
- Chips maintain generous horizontal padding for thumb interaction.
- Sticky checkout surfaces remain reachable within thumb zones.
- Quantity steppers expand hit area beyond visible geometry.

### Collapsing Strategy

- Horizontal carousels become swipeable on mobile.
- Desktop nav compresses into sticky mobile header.
- Restaurant grids flatten into single-column vertical feed.
- Sticky cart footer persists across all mobile checkout flows.
- Discovery chips become horizontally scrollable.

### Image Behavior

- Restaurant cards preserve image dominance across all breakpoints.
- Food imagery maintains high saturation and contrast.
- Hero banners use wide 16:9 promotional ratios.
- Category icons remain centered and touch-optimized.

---

## Iteration Guide

1. Prioritize speed and scanability over decorative minimalism.
2. Keep `{colors.primary}` dominant across transactional flows.
3. Preserve sticky conversion mechanisms whenever possible.
4. Use `{rounded.full}` aggressively for chips and interactive filters.
5. Restaurant cards should always remain image-first.
6. Compress metadata vertically before removing content entirely.
7. Infinite-scroll continuity matters more than isolated visual perfection.

---

## Known Gaps

- Internal motion timing tokens are not publicly visible.
- Dark-mode variants are not exposed consistently.
- Some checkout states require authentication to inspect.
- Hover-state treatment remains minimal and partially hidden.
- Internal typography token naming inferred from observed rendering behavior.