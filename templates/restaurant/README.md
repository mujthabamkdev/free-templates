# Juniper & Hearth restaurant / cafe template

Standalone restaurant and cafe website built with semantic HTML, maintainable CSS tokens, and dependency-free vanilla JavaScript. It has no build step, external assets, web fonts, or external runtime requests. Visuals use CSS shapes and inline SVG.

## Preview

From this directory, run a static server:

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000>. Open `index.html` directly for a quick preview, but a server better matches production URL behavior. Resize to a mobile viewport to test the accessible menu.

## Customize

- Replace the illustrative restaurant name, copy, menu items, prices, dietary tags, reviews, team profiles, locations, hours, events, social links, contact details, canonical URL, and Restaurant JSON-LD in `index.html`.
- Update the design tokens at the top of `styles.css`; component rules are grouped by page section and use those tokens.
- `script.js` owns progressive-enhancement behavior: mobile navigation with Escape and focus wrapping, keyboard-operable menu tabs, demo reservation status, and the footer year.
- Keep the native form action and validation for no-JS use, then replace `/demo-reservation` with a real privacy-reviewed reservation/inquiry endpoint.
- Replace `legal.html` sample privacy, terms, and accessibility copy with approved policy content.

## Production checklist

- [ ] Connect reservation and inquiry forms to a reviewed backend with validation, rate limiting, spam protection, success/error states, and privacy disclosures.
- [ ] Connect the order button to a real ordering flow; publish current menu, allergen, cross-contact, substitution, and price information.
- [ ] Replace all content marked illustrative, including menu/prices, reviews, team, event dates, address, hours, links, social URLs, and email.
- [ ] Verify Restaurant JSON-LD, canonical URL, Open Graph metadata, telephone, address, hours, and reservation behavior with production values.
- [ ] Add approved photography or optimized local assets if desired; keep meaningful alt text and avoid third-party asset requests without consent/performance review.
- [ ] Run keyboard, screen-reader, reduced-motion, focus, color-contrast, form-error, and mobile checks on final content and embedded services.
- [ ] Add consent-aware analytics, cookie notice where required, security headers, HTTPS, backups, monitoring, and a reviewed privacy/terms policy.
- [ ] Run Lighthouse or equivalent performance checks after adding real media and third-party integrations.
