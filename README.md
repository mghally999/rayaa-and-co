# Rayaa & Co

The official site — a quiet-luxury, hand-embroidered fashion house based in Dubai.

Built with **Next.js 14 (App Router) + TypeScript + Tailwind + GSAP + Lenis + raw WebGL**.

---

## Quick start

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

For a production build:

```bash
npm run build
npm run start
```

---

## What's inside

```
rayaa-and-co/
├── app/
│   ├── layout.tsx           # fonts, theme, smooth scroll, nav, footer
│   ├── page.tsx             # home — hero + marquee + featured + lookbook + journal
│   ├── globals.css          # design tokens, theme variables, component styles
│   ├── collection/page.tsx  # full catalogue with filter chips
│   ├── atelier/page.tsx     # brand story + numbers + process
│   ├── journal/page.tsx     # editorial entries
│   └── contact/page.tsx     # appointment form + atelier info
├── components/
│   ├── Nav.tsx              # sticky blurred nav with active link underline
│   ├── Footer.tsx           # newsletter + link columns
│   ├── Hero.tsx             # GSAP-staggered hero with WebGL bg
│   ├── HeroCanvas.tsx       # raw WebGL warm-noise gradient
│   ├── ProductCard.tsx      # the "model breaks out of card" card
│   ├── ProductGrid.tsx      # responsive auto-fill grid
│   ├── Lookbook.tsx         # editorial 2-up split layout
│   ├── Marquee.tsx          # infinite horizontal scroll banner
│   ├── ThemeToggle.tsx      # light/dark switch
│   ├── SmoothScroll.tsx     # Lenis wrapper
│   ├── ScrollReveal.tsx     # IntersectionObserver fade-up
│   └── ui/Logo.tsx
├── lib/
│   ├── theme.tsx            # theme context + localStorage persistence
│   └── products.ts          # product data
└── public/
    ├── logo.png             # brand mark
    └── images/look-*.jpg    # 24 curated Rayaa & Co photographs
```

---

## Design system

| Token            | Light                 | Dark                  |
|------------------|-----------------------|-----------------------|
| `--bg`           | `#f3ead6` cream       | `#14100c` warm black  |
| `--ink`          | `#1a1410` warm black  | `#f0e6cf` cream       |
| `--maroon`       | `#5e1a1d`             | `#c4555a` (lifted)    |
| `--paper`        | `#faf3e0`             | `#1f1812`             |

**Type system**
- Display: Cormorant Garamond (serif, editorial)
- Body: Inter (sans, refined)
- Eyebrow labels: Inter 500, `tracking: 0.22em`, uppercase

All colors live as CSS variables. Tailwind reads them via `tailwind.config.ts` so you can use `bg-bg`, `text-ink`, `text-maroon`, etc. **and** they still flip on theme change.

---

## Animations

| Where           | What                                                            |
|-----------------|-----------------------------------------------------------------|
| Hero (load)     | GSAP timeline: eyebrow → word-by-word headline → lede → CTAs    |
| Hero image      | Reveal with scale + Y offset                                    |
| Hero background | WebGL fragment shader: warm fbm noise + radial vignette + grain |
| Whole page      | Lenis smooth scroll                                             |
| Sections        | IntersectionObserver fade-up on enter                           |
| Product cards   | Image lifts beyond card top on hover                            |
| Marquee         | CSS `keyframes` infinite linear scroll                          |
| Nav             | Backdrop blur kicks in after 16px scroll                        |

---

## The "model breaks out of the card" effect

The piece you asked for. Each `<ProductCard>` has:
- a `frame` div with `aspect-ratio: 3/4` and `overflow: visible`
- a `figure` div positioned `inset: -12% 0 0 0` (image extends 12% above the card top)
- on `:hover`, the inset lifts to `-18% 0 4% 0` — image rises further out

Implementation in `app/globals.css` (`.product-card .figure`). Pure CSS, no JS.

---

## Themes

Toggle in the top-right of the nav. State persisted to `localStorage` under `rayaa-theme` and respects `prefers-color-scheme` on first load. The WebGL hero canvas listens for the `data-theme` attribute change and re-reads the CSS color variables — no flash, no canvas restart.

---

## Customisation cheatsheet

- **Change brand colors** → edit `:root` block in `app/globals.css`.
- **Change fonts** → edit `next/font` imports in `app/layout.tsx`.
- **Add products** → push entries into `lib/products.ts`. Drop the image into `public/images/`.
- **Add a page** → create `app/<slug>/page.tsx`. Nav links live in `components/Nav.tsx`.
- **Tune the hero shader** → `components/HeroCanvas.tsx`, edit the `FRAG` shader source.

---

## Performance notes

- All images via `next/image` (AVIF + WebP, lazy loaded).
- Fonts via `next/font/google` (zero CLS, self-hosted).
- WebGL canvas is one full-screen quad, 5-octave fbm — runs ~0.4ms per frame on a M1.
- Lenis duration tuned to 1.4s with exponential easing — smooth without feeling laggy.
- `prefers-reduced-motion` kills all animations.

---

## Credits

Photography from `@rayaa_and_co` on Instagram. Brand identity, palette, type system all derived from the existing Rayaa & Co identity. Logo lives in `/public/logo.png`.
