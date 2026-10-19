# Voltline Motors automotive website

Standalone automotive / EV dealership site built with semantic HTML, maintainable CSS tokens, inline SVG visuals, and dependency-free vanilla JavaScript. No build step, external assets, or external runtime dependencies.

## Preview

From this directory, run a static server:

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000>. Opening `index.html` directly also works for a quick preview, while a local server better matches production URL behavior.

## Customize

- Update dealership copy, contact details, routes, canonical URL, social metadata, and AutoDealer / Vehicle JSON-LD in `index.html`.
- Replace inline SVG vehicle illustrations with approved dealership photography or locally hosted optimized media if desired; keep meaningful alternative text.
- Adjust color, type, spacing, radius, and shadow tokens at the top of `styles.css`. Component rules are grouped by section.
- `script.js` owns keyboard-safe mobile navigation, inventory filtering/sorting, save buttons, range and finance estimates, demo form status, and footer year.
- Replace the illustrative inventory, reviews, rating, prices, battery health, mileage, range, and availability with verified data. The review and rating section is explicitly labeled illustrative.
- Connect `#inquiry-form` and `#trade-form` to privacy-reviewed production endpoints. JavaScript intentionally prevents network submission and displays demo-only status messages.
- Replace `legal.html` sample privacy, terms, pricing, and accessibility copy with dealership-approved policies.

## Production checklist

- [ ] Connect inquiry, test-drive, trade-in, and service flows to reviewed endpoints with server-side validation, rate limiting, spam protection, CSRF protection, consent, and error handling.
- [ ] Add real inventory feeds, VIN-level disclosures, tax/title/registration fees, incentives, financing disclosures, and availability states.
- [ ] Replace `voltline.example`, contact details, social links, and structured data with verified production values; validate JSON-LD in a rich-results tool.
- [ ] Add a reviewed privacy notice, terms, accessibility statement, cookie/analytics consent, and data-retention process.
- [ ] Test keyboard focus and focus return, mobile menu Escape/Tab behavior, forms with and without JavaScript, screen readers, reduced motion, contrast, zoom, and touch targets.
- [ ] Run Lighthouse or equivalent performance checks after adding real media, analytics, maps, inventory, chat, and scheduling integrations.
- [ ] Verify security headers, HTTPS, CSP, backups, monitoring, uptime, and vendor failure states before launch.
