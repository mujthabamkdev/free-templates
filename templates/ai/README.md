# Kiteworks AI products and automation studio

Standalone agency website for an AI products, workflow automation, and enablement studio. Built with semantic HTML, opinionated CSS tokens, inline SVG/CSS visuals, and dependency-free vanilla JavaScript. No build step or external assets.

## Preview

From this directory, run any static server:

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000>. Open `index.html` directly for a quick preview; a server better matches production URL behavior. `legal.html` contains privacy, terms, and accessibility starter sections.

## Customize

- Replace Kiteworks copy, metadata, canonical URL, JSON-LD, email, social links, case studies, and client names in `index.html`. Canonical, `og:url`, and JSON-LD URLs intentionally use relative `./` values until deployment; set them to the final absolute site URL before publishing.
- The template uses the safe `summary` social card because it ships without an image. Add an approved absolute `og:image` and `twitter:image`, then switch to `summary_large_image` only after hosting and testing that image.
- Tune design tokens at the top of `styles.css`; keep new component rules grouped near their section.
- `script.js` provides responsive navigation with Escape/Tab focus handling, FAQ native disclosure behavior, demo-form validation/status, and footer year.
- The consultation form has no `action` or `method`; its controls stay disabled until JavaScript loads, so JavaScript-disabled previews cannot submit to the current page. Connect a privacy-reviewed backend only after adding an explicit endpoint, server-side validation, and updated consent/error handling.
- Replace `legal.html` sample policy text with reviewed privacy, terms, accessibility, and contact details.

## Production checklist

- [ ] Connect consultation form to a reviewed endpoint with server-side validation, rate limiting, spam protection, CSRF protection, consent handling, and error states.
- [ ] Replace all `.example` URLs, sample names, claims, client logos, case studies, and legal copy.
- [ ] Add an approved OG image and verify canonical, social, and JSON-LD values.
- [ ] Replace relative `./` metadata URLs with the final absolute origin and verify social previews from a deployed URL.
- [ ] Confirm security, privacy, retention, model governance, and accessibility claims with responsible owners.
- [ ] Run keyboard, screen-reader, reduced-motion, contrast, zoom, and mobile checks on final content.
- [ ] Run Lighthouse or equivalent performance checks after adding production analytics, forms, or media.
