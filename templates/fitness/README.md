# Northline Movement website template

Standalone fitness and wellness studio website built with semantic HTML, opinionated CSS, and vanilla JavaScript. No dependencies, build step, external fonts, remote assets, tracking, or external images. Inline SVG and CSS provide the illustrative art.

## Preview

From this directory, run a local static server:

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000/>. Open `legal.html` for the linked accessibility, privacy, and movement-safety notes. Both pages also work when opened directly, but a local server is closer to production behavior.

## Files

- `index.html` — responsive landing page with skip link, mobile navigation, hero, class and membership cards, visual timetable, coaches, locations, illustrative testimonial, member journey, FAQ, safety notes, and demo-only trial form.
- `styles.css` — responsive layout, accessible states, inline-art styling, reduced-motion rules, responsive timetable, and mobile navigation presentation.
- `script.js` — keyboard-friendly mobile menu with Escape handling and focus loop, demo form validation/status message, and dynamic footer year.
- `legal.html` — linked accessibility, privacy, movement-safety, illustrative-content, and terms notes.

## Customize

1. Replace illustrative names, coach bios, quotes, prices, class descriptions, addresses, phone/email details, hours, and access statements in both HTML files.
2. Update the title, description, canonical URL, Open Graph/Twitter metadata, `robots` decision, theme color, and JSON-LD in `index.html`.
3. Tune the palette, type, spacing, breakpoints, portraits, and inline SVG artwork in `styles.css`; no external assets are required.
4. Replace the timetable with a maintained schedule or secure booking integration. Confirm class suitability, cancellation terms, and live availability.
5. Connect the demo form to a privacy-reviewed service. It intentionally never sends, stores, or echoes user values and must not collect sensitive health information.
6. Replace `legal.html` with reviewed privacy, accessibility, terms, waiver, cookie/analytics, and safety policies that match the real studio.

## Production checklist

- [ ] Studio, legal, privacy, accessibility, and qualified safety reviewers approve copy and policies.
- [ ] Replace all illustrative content, placeholder URLs, structured data, prices, contact details, and `noindex, nofollow` decision.
- [ ] Confirm real building access, equipment, communication support, emergency process, and accommodations; publish only maintainable claims.
- [ ] Use secure booking/contact infrastructure with consent, encryption, least-privilege access, retention rules, and a clear privacy notice.
- [ ] Do not make health guarantees or publish fitness outcomes as promises; secure permission for real testimonials and images.
- [ ] Test keyboard navigation, mobile menu focus behavior, reduced motion, zoom/reflow, contrast, screen readers, form errors, and touch targets.
- [ ] Serve over HTTPS, add security headers and a real favicon/social image if needed, and review analytics/tracking consent.
- [ ] Run HTML/CSS/JS validation and test the real booking integration in a non-production environment.

All names, quotes, prices, locations, schedules, class descriptions, contact details, illustrations, and accessibility statements are illustrative placeholders. This template is not medical advice, diagnosis, treatment, or a guarantee of fitness results.
