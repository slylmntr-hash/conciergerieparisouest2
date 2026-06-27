# EditorialDS (editorial-design-system@1.0.0)

This design system is the published editorial-design-system React library, bundled as a single
browser global. All 12 components are the real upstream code.

## Where things are

- `_ds_bundle.js` — the whole-DS bundle at the project root; loads every component to `window.EditorialDS`. First line is a `/* @ds-bundle: … */` metadata header.
- `styles.css` — the single stylesheet entry: it `@import`s the tokens, fonts, and component styles (`_ds_bundle.css`). Link this one file.
- `components/<group>/<Name>/<Name>.prompt.md` (example JSX + variants), `<Name>.d.ts` (types), `<Name>.html` (variant grid).
- `tokens/*.css` — CSS custom properties, names verbatim from upstream.
- `fonts/` — `@font-face` files + `fonts.css` (when the package ships fonts).

For a specific component, `read_file("components/<group>/<Name>/<Name>.prompt.md")`.

## Loading

Add these two lines to your page once (React must be on the page first):

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
```

Components are then available at `window.EditorialDS.*`. Mount into a dedicated child node (e.g. `<div id="ds-root">`), not the host page's own React root, so the two trees don't collide:

```jsx
const { AgeWarning } = window.EditorialDS;
ReactDOM.createRoot(document.getElementById('ds-root')).render(<AgeWarning />);
```

## Tokens

102 CSS custom properties from editorial-design-system. Names are
preserved verbatim from upstream. They are declared inside `_ds_bundle.css` (this DS ships one compiled stylesheet rather than separate token files).

- **color** (57): `--color-white`, `--color-black`, `--color-gray-50`, …
- **spacing** (17): `--space-1`, `--space-2`, `--space-3`, …
- **typography** (8): `--font-display`, `--font-body`, `--font-mono`, …
- **radius** (3): `--border-radius-sm`, `--border-radius-md`, `--border-radius-lg`
- **shadow** (3): `--shadow-subtle`, `--shadow-medium`, `--shadow-strong`
- **other** (14): `--lh-tight`, `--lh-snug`, `--lh-normal`, …

## Components

### general
- `AgeWarning` — AgeWarning  PAT-EDT-005, source: Guardian, trust_rate: 0.85
- `ArticleCard`
- `Breadcrumb` — Breadcrumb  ADR-001 (JSON-LD BreadcrumbList required), PAT-UNI-002
- `CodeBlock` — CodeBlock  PAT-PRD-002, PAT-PRD-004, sources: Stripe, Linear, trust_rate: 0.93
- `DataChart` — DataChart  C08, source: Bloomberg, trust_rate: 0.86
- `Hero`
- `KeyPointsBox` — KeyPointsBox  PAT-EDT-004, sources: BBC, Guardian, trust_rate: 0.87
- `LeadForm` — LeadForm  C05, trust_rate: 0.90
- `LiveBlog` — LiveBlog  PAT-EDT sources: BBC, Guardian, Bloomberg, trust_rate: 0.88
- `Navigation`
- `PaywallPrompt` — PaywallPrompt  C09, sources: NYTimes, Bloomberg, Guardian, trust_rate: 0.84
- `TickerBar` — TickerBar  C11, source: Bloomberg, trust_rate: 0.80
