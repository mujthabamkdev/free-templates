# Harbour & Hearth hotel template

Standalone, no-dependency hotel / vacation-rental website template. Plain semantic HTML, opinionated CSS, and small vanilla JavaScript enhancement layer.

## Preview

From this directory, serve files over HTTP:

```sh
python3 -m http.server 8080
```

Open `http://localhost:8080/` in a browser. Opening `index.html` directly also works; HTTP is preferred for realistic local checks.

## Included

- Responsive header with mobile menu, Escape-to-close, outside-click close, focus return, and skip link.
- Responsive hero, illustrative availability controls, room cards, amenity list, gallery, local guide, reviews, FAQ, inquiry form, accessibility and privacy sections.
- `legal.html` starter page covering privacy, booking/demo disclosure, accessibility, and terms.
- Inline CSS/SVG-style visuals only. No external assets, fonts, scripts, analytics, cookies, trackers, or dependencies.
- SEO description, canonical URL, Open Graph / X metadata, theme color, and Hotel JSON-LD.
- Native HTML validation primitives, keyboard-visible focus, semantic landmarks, reduced-motion support, descriptive labels, and live status messages.

## Customize

1. Replace illustrative brand, address, contact links, room copy, rates, policies, and guide recommendations in `index.html`.
2. Replace `example.com` canonical, social URLs, and `social-card.jpg` metadata with production values. Add a real social image only when publishing.
3. Tune palette, spacing, typography, and breakpoint rules in `styles.css`; keep contrast and focus states intact.
4. Connect availability and inquiry forms to a reviewed backend. Keep server-side validation, spam protection, privacy consent, error handling, and payment flows outside this demo.
5. Replace Hotel JSON-LD placeholders with verified property information. Remove or revise schema fields that do not apply.
6. Swap CSS visuals for licensed, optimized real media only after checking image alt text, performance, rights, and responsive crops.
7. Replace `legal.html` starter copy with reviewed, property-specific privacy, booking, accessibility, and terms content.

## Production checklist

- [ ] Verify every address, phone number, email, room detail, rate, availability rule, review, policy, and accessibility statement.
- [ ] Replace all “illustrative” and “demo-only” notices with approved production content or keep them if site remains a prototype.
- [ ] Wire forms to secure endpoints with CSRF protection, rate limiting, bot controls, validation, confirmation, and an accessible error/success path.
- [ ] Configure real booking/payment provider, cancellation terms, taxes, occupancy rules, and disclosure of final prices.
- [ ] Add reviewed privacy/cookie notices and consent controls where legally required.
- [ ] Replace `legal.html` starter copy with approved notices, terms, booking disclosures, and accessibility contact details.
- [ ] Test keyboard-only use, screen reader landmarks, 200% zoom, narrow screens, touch targets, focus visibility, reduced motion, and color contrast.
- [ ] Test metadata previews, JSON-LD, HTTP security headers, 404 handling, caching, compression, and mobile performance.
- [ ] Run HTML/CSS/JS validation and test on current Safari, Firefox, Chrome, and mobile browsers.

All availability, prices, room names, reviews, contact details, policies, and destination content in this template are illustrative. This site makes no real booking and processes no payment.
