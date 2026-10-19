# Harbor & Pine Dental website template

Standalone dental practice website built with semantic HTML, opinionated plain CSS, and vanilla JavaScript. No dependencies, build step, external fonts, remote assets, or tracking.

## Preview

From this directory, run a static server:

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000/>. `index.html` and `legal.html` also work when opened directly, although a local server gives the closest production-like preview.

## Files

- `index.html` — full landing page: responsive header, hero actions, treatments, care team, inline SVG/CSS gallery, insurance/payment, patient process, illustrative reviews, locations/hours, FAQ, demo appointment form, emergency guidance, and footer.
- `styles.css` — responsive layout, accessible focus states, generated portraits, inline-art styling, reduced-motion rules, and mobile navigation presentation.
- `script.js` — keyboard-friendly mobile menu, focus return/trap, Escape/outside-click close, demo form behavior, and dynamic footer year.
- `legal.html` — linked privacy, accessibility, and health-disclaimer template page.

## Customize

1. Replace every illustrative name, credential, quote, address, phone number, hour, service description, insurance statement, and outcome reference in both HTML files.
2. Update the JSON-LD, canonical URL, Open Graph metadata, title, description, and `noindex, nofollow` decision in `index.html`.
3. Tune colors, type, spacing, responsive breakpoints, portraits, and inline SVG illustrations in `styles.css`.
4. Replace or remove gallery and review placeholders only after documented permission and content review.
5. Connect appointment actions to a privacy-reviewed scheduling workflow. The included form intentionally never sends, stores, or echoes values.

## Production checklist

- [ ] Clinical, legal, privacy, and accessibility owners approve content and policies.
- [ ] Replace all illustrative content, placeholder URLs, structured data, and contact details.
- [ ] Use a secure scheduling/contact service with least-privilege access, encryption, retention rules, consent language, and an appropriate privacy notice; do not collect health details through the demo form.
- [ ] Verify emergency instructions and local resources; never imply this site provides emergency care or medical advice.
- [ ] Test keyboard navigation, mobile-menu focus behavior, reduced motion, zoom/reflow, contrast, screen readers, form errors, and touch targets.
- [ ] Serve over HTTPS, configure security headers and a real favicon/social image if needed, and review analytics/tracking consent before launch.
- [ ] Run HTML/CSS/JS validation and test the real scheduling integration in a non-production environment.

All names, quotes, credentials, locations, contact details, services, reviews, illustrations, and outcomes are illustrative placeholders. This template is not medical advice or emergency care.
