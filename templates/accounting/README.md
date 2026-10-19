# Ledger & Co. accounting template

Standalone accounting, tax-planning, and bookkeeping website built with semantic HTML, opinionated CSS tokens, inline SVG artwork, and dependency-free vanilla JavaScript. No build step, external assets, or third-party scripts.

## Preview

Serve this directory with any static HTTP server:

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000/>. `index.html` is the main page; `legal.html` contains linked sample privacy, terms, and accessibility content.

## Customize

- Replace Ledger & Co. copy, illustrative figures, credentials, testimonials, contact details, links, canonical URL, social metadata, and JSON-LD in `index.html`.
- Replace sample policy language and contact details in `legal.html` with reviewed legal, privacy, tax, and accessibility content.
- Tune the color, typography, spacing, and layout tokens at the top of `styles.css`; section styles remain grouped by component.
- Keep inline SVGs or replace them with optimized, locally hosted artwork. No remote font or image requests are required.
- `script.js` owns the mobile menu (Escape, focus wrapping, and resize behavior), footer year, and demo form response.
- The consultation form uses a button that is not a native submit control. It intentionally has no network action and clearly states that it is a demo. Add a reviewed backend only after server validation, privacy notices, consent handling, spam protection, accessible errors, and observability are in place.

## Production checklist

- [ ] Replace all fictional names, claims, credentials, dates, amounts, client stories, testimonials, and illustrative labels with approved, attributable content.
- [ ] Have a qualified tax professional review service descriptions, disclaimers, jurisdictions, and every tax-related claim.
- [ ] Set a real canonical URL, organization address, social profiles, service area, and JSON-LD values; add an approved social preview image when available.
- [ ] Connect the consultation form to a privacy-reviewed endpoint with server-side validation, rate limiting, spam protection, consent, monitoring, and accessible error states.
- [ ] Replace `legal.html` sample privacy, terms, and accessibility copy with jurisdiction-appropriate reviewed policies.
- [ ] Run keyboard-only, screen-reader, reduced-motion, contrast, zoom, and mobile checks on final content.
- [ ] Add analytics only with an appropriate consent experience; self-host any production media where practical.
- [ ] Run Lighthouse or equivalent performance, metadata, link, and security checks after customization.
