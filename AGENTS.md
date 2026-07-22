<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Bilbella project conventions

Static marketing site for the company, built with Next.js App Router and exported to static HTML/CSS/JS (`output: "export"` in `next.config.ts`). Being built in stages, page by page.

## Stack

- **Next.js 16** (App Router, Turbopack by default), React 19, TypeScript.
- **Styling**: SCSS Modules (`*.module.scss`) per component/page. No CSS-in-JS, no Tailwind.
- **Icons**: `react-icons` — never hand-roll an SVG icon or add a new icon package if one already exists in `react-icons`.
- Images unoptimized (`images.unoptimized: true`) since `next/image` optimization requires a server. Still use `next/image` for local files (layout stability, lazy loading), just know it won't resize/transform.

## Styling system — single source of truth

- All shared design tokens (colors, spacing, font sizes, breakpoints, etc.) live in **`app/styles/_variables.scss`** as SCSS variables (`$color-primary`, `$spacing-md`, ...). Change a value there, it propagates everywhere.
- `app/globals.scss` imports `_variables.scss` and holds only global resets/base element styles — no component-specific rules.
- Every component/page gets its own `*.module.scss` that starts with `@use "@/app/styles/variables" as *;` (or the equivalent relative path) to pull in the shared tokens. Never hardcode a color, spacing value, or font size that already has a variable.
- SCSS partials are kebab-case with a leading underscore: `_variables.scss`, `_mixins.scss`.

## Components

- Reusable components live in a top-level **`components/`** folder, one subfolder per component: `components/Button/Button.tsx` + `components/Button/Button.module.scss`. Add an `index.ts` barrel only if it stays a plain re-export.
- Component folder/file names are PascalCase, matching the component name.
- Page-specific one-off markup can stay in `app/**/page.tsx` with a colocated `page.module.scss`; only promote something to `components/` once it's reused or clearly reusable.

## Design direction

- Premium/grand security-company feel: navy (`$color-navy`) + gold (`$color-gold`) from the letterhead, dark theme by default. Header, footer, hero, and CTA bands use the dark navy background; long-form content sections (about text, service details) switch to white/cream (`$color-background-alt`) for readability — an alternating rhythm, not a solid wall of navy.
- **Animations**: `framer-motion` is the animation library — use it for scroll reveals, hover/tap states, and page transitions rather than hand-rolling `IntersectionObserver` logic or raw CSS keyframes. Keep motion subtle and purposeful (fades, slides, gentle scale) — nothing bouncy or cartoonish — and respect `prefers-reduced-motion`.
- **Image placeholders**: until real photography is supplied, use a shared `ImagePlaceholder` component (navy/gold gradient block, subtle shield watermark, icon + caption naming the intended image) sized to the final image's aspect ratio, so swapping in a real `next/image` later is a one-line change.
- **WhatsApp contact flow**: a floating WhatsApp button (brand green, not navy/gold — keep the universally-recognized color) is fixed on every page except `/contact`, opening `wa.me` with a prefilled greeting. The `/contact` page form builds a formatted message from its fields and redirects to `wa.me` on submit instead of posting to a server — fits the static export constraint and needs no backend.

## Site content — single source of truth

- Company info (name, tagline, address, phone, email, RC No, nav links, social links, etc.) lives in **`components/config.ts`**, exported as plain typed constants/objects. Any component or page that needs this data imports it from there — never hardcode the company name, phone number, or address inline in a page/component.

## Assets

- Company logo: `public/logo.png`. Letterhead/reference doc: `public/bilbella.pdf`.
- New static assets go in `public/` with kebab-case filenames (no spaces — breaks CSS `url()` and is awkward in URLs).

## Static export constraints

Because `output: "export"` is set, avoid anything that needs a Node server at runtime: no Route Handlers that read the request, no Server Actions, no `cookies()`/`headers()`/Draft Mode, no ISR, no dynamic routes without `generateStaticParams()`. Check `node_modules/next/dist/docs/01-app/02-guides/static-exports.md` if unsure whether a feature is supported.
