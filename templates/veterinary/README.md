# Northstar Veterinary website template

Standalone companion-animal veterinary clinic website built with semantic HTML, opinionated plain CSS, and vanilla JavaScript. No dependencies, build step, external fonts, remote assets, tracking, or image files. Visuals use inline SVG and CSS only.

## Preview

From this directory, run a static server:

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000/>. `index.html` and `legal.html` also work when opened directly, although a local server gives the closest production-like preview.

## Files

- `index.html` — responsive clinic landing page with mobile navigation, hero actions, pet services, care-team profiles, species pathways, preventive-care reminders, illustrative testimonials, location and hours, FAQ, demo appointment form, emergency guidance, JSON-LD, and footer.
- `styles.css` — responsive layout, accessible focus states, CSS portraits, inline SVG art styling, reduced-motion rules, legal-page layout, and mobile navigation presentation.
- `script.js` — keyboard-friendly mobile menu with focus return/trap, Escape/outside-click close, demo form behavior, and dynamic footer year.
- `legal.html` — linked privacy, accessibility, veterinary-disclaimer, and content-review template page.

## Customize

1. Replace every illustrative name, credential, quote, address, phone number, hour, service description, emergency instruction, and access statement in both HTML files.
2. Update JSON-LD, canonical URL, Open Graph metadata, title, description, and the `noindex, nofollow` decision in `index.html`.
3. Tune colors, type, spacing, responsive breakpoints, CSS portraits, and inline SVG illustrations in `styles.css`.
4. Replace or remove testimonials and profile placeholders only after documented permission and clinical/content review.
5. Connect appointment actions to a privacy-reviewed scheduling workflow. The included form intentionally never sends, stores, or echoes values.

## Production checklist

- [ ] Clinical, legal, privacy, and accessibility owners approve content, claims, emergency instructions, and policies.
- [ ] Replace all illustrative content, placeholder URLs, structured data, contact details, species scope, credentials, and hours.
- [ ] Use a secure scheduling/contact service with least-privilege access, encryption, retention rules, consent language, and an appropriate privacy notice; do not collect health details through the demo form.
- [ ] Verify emergency instructions and local resources; never imply this site provides emergency care, diagnosis, treatment, or guaranteed outcomes.
- [ ] Test keyboard navigation, mobile-menu focus behavior, reduced motion, zoom/reflow, contrast, screen readers, form errors, and touch targets.
- [ ] Serve over HTTPS, configure security headers, and review analytics/tracking consent before launch.
- [ ] Run HTML/CSS/JS validation and test the real scheduling integration in a non-production environment.

All names, quotes, credentials, locations, contact details, services, reviews, illustrations, and outcomes are illustrative placeholders. This template is not veterinary advice or emergency care.
