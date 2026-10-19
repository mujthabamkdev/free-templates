# Morrow & Muse Studio website template

Standalone beauty salon / barber website built with semantic HTML, opinionated plain CSS, and vanilla JavaScript. No dependencies, build step, external fonts, remote assets, tracking, or image files.

## Preview

From this directory, run a static server:

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000/>. `index.html` and `legal.html` also work when opened directly, although a local server gives the closest production-like preview.

## Files

- `index.html` — responsive salon/barber landing page with keyboard-friendly navigation, hero booking CTA, illustrative menu and starting prices, artist profiles, inline SVG gallery, membership/retail, location/hours, testimonials, FAQ, safety and patch-test notes, demo-only booking request, and footer.
- `styles.css` — responsive layout, accessible focus states, inline SVG artwork, CSS portrait placeholders, reduced-motion rules, mobile navigation presentation, and print-friendly semantic styling foundations.
- `script.js` — mobile menu with focus return/trap and Escape/outside-click close, demo form behavior, and dynamic footer year.
- `legal.html` — linked illustrative privacy, accessibility, safety, patch-test, booking-policy, and contact guidance page.

## Customize

1. Replace every illustrative name, quote, service, price, address, phone number, email, policy, hours statement, and membership term in both HTML files.
2. Update JSON-LD, canonical URL, Open Graph metadata, title, description, social image strategy, and the `noindex, nofollow` decision in `index.html`.
3. Tune colors, typography, spacing, responsive breakpoints, CSS portraits, and inline SVG illustrations in `styles.css`; keep artwork local or replace it with properly licensed assets.
4. Replace testimonials and portfolio placeholders only after documented permission, consent, and accurate context. Do not imply guaranteed beauty outcomes.
5. Connect booking CTAs to a privacy-reviewed scheduler or secure contact workflow. The included form intentionally never sends, stores, or echoes values and must not collect sensitive information.

## Production checklist

- [ ] Verify business name, staff roles, licenses or certifications where applicable, location, contact details, hours, accessibility details, and service scope.
- [ ] Replace all illustrative content, structured data, placeholder URLs, metadata, prices, membership terms, cancellation/deposit policy, and safety guidance.
- [ ] Review color/chemical service warnings, patch-test and strand-test requirements, allergy/sensitivity intake, aftercare guidance, and realistic expectations with qualified professionals and suppliers.
- [ ] Use a secure booking/contact service with least-privilege access, encryption, retention rules, consent language, spam protection, and an appropriate privacy notice; do not collect sensitive details through an unprotected form.
- [ ] Obtain documented permission for real photography, names, artist credentials, portfolio work, and testimonials; publish truthful context and required disclosures.
- [ ] Test keyboard navigation, mobile-menu focus behavior, reduced motion, zoom/reflow, contrast, screen readers, form errors, browser support, touch targets, and no-JavaScript messaging.
- [ ] Serve over HTTPS, configure security headers and a real favicon/social image if needed, and review analytics/tracking consent before launch.
- [ ] Run HTML/CSS/JS validation and test the real booking integration in a non-production environment.

All names, quotes, credentials, locations, contact details, services, reviews, illustrations, prices, and policies are illustrative placeholders. This template is not a booking service, medical advice, or emergency care.
