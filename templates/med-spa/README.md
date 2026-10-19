# Lumen & Tide Aesthetics website template

Standalone med spa / aesthetics website built with semantic HTML, opinionated plain CSS, and vanilla JavaScript. No dependencies, build step, external fonts, remote assets, tracking, or image files.

## Preview

From this directory, run a static server:

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000/>. `index.html` and `legal.html` also work when opened directly, although a local server gives the closest production-like preview.

## Files

- `index.html` — landing page with responsive navigation, consultation CTA, treatment menu, clinician credentials, illustrative results gallery, treatment journey, financing/expectations, testimonials, FAQ, contraindication and urgent guidance, demo-only consultation form, and footer.
- `styles.css` — responsive layout, accessible focus states, inline SVG artwork, CSS portrait placeholders, reduced-motion rules, and mobile navigation presentation.
- `script.js` — keyboard-friendly mobile menu with focus return/trap and Escape/outside-click close, demo form behavior, and dynamic footer year.
- `legal.html` — linked privacy, accessibility, health-disclaimer, and contact guidance template page.

## Customize

1. Replace every illustrative name, credential, quote, address, phone number, service description, price statement, policy statement, and outcome reference in both HTML files.
2. Update JSON-LD, canonical URL, Open Graph metadata, title, description, and the `noindex, nofollow` decision in `index.html`.
3. Tune colors, type, spacing, responsive breakpoints, portraits, and inline SVG illustrations in `styles.css`.
4. Replace or remove gallery and testimonial placeholders only after documented permission, consent, and clinical/legal review. Never imply guaranteed outcomes.
5. Connect consultation actions to a privacy-reviewed secure scheduling/contact workflow. The included form intentionally never sends, stores, or echoes values and must not collect health information.

## Production checklist

- [ ] Licensed clinicians, clinical, legal, privacy, regulatory, and accessibility owners approve content and policies.
- [ ] Replace all illustrative content, structured data, placeholder URLs, contact details, pricing/financing statements, and emergency guidance.
- [ ] Confirm each treatment’s suitability criteria, contraindications, medication guidance, risks, alternatives, downtime, aftercare, and realistic expectations with a qualified professional.
- [ ] Use a secure scheduling/contact service with least-privilege access, encryption, retention rules, consent language, and an appropriate privacy notice; do not collect sensitive health details through an unprotected form.
- [ ] Obtain documented consent and permissions for real photography, testimonials, names, credentials, and before/after content; publish truthful context and required disclosures.
- [ ] Test keyboard navigation, mobile-menu focus behavior, reduced motion, zoom/reflow, contrast, screen readers, form errors, browser support, and touch targets.
- [ ] Serve over HTTPS, configure security headers and a real favicon/social image if needed, and review analytics/tracking consent before launch.
- [ ] Run HTML/CSS/JS validation and test the real scheduling integration in a non-production environment.

All names, quotes, credentials, locations, contact details, services, reviews, illustrations, and outcomes are illustrative placeholders. This template is not medical advice or emergency care.
