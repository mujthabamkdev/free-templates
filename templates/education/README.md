# Brightpath Studio education template

Standalone education, coaching, and online-course website built with semantic HTML, opinionated CSS, and vanilla JavaScript. No dependencies, build step, external fonts, remote assets, tracking, or external images. Inline SVG and CSS provide all visual artwork.

## Preview

From this directory, run a local static server:

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000/>. Open `legal.html` for linked accessibility, privacy, claims, and use notes. Both pages also work when opened directly, though a local server better matches production behavior.

## Files

- `index.html` — responsive course landing page with mobile navigation, enrollment CTA, program cards, six-week curriculum timeline, instructor proof, illustrative outcomes, cohort dates, pricing/financing, testimonial, FAQ, accessibility note, and demo-only enrollment form.
- `styles.css` — responsive layout, accessible focus states, reduced-motion support, inline SVG styling, cards, timeline, pricing, form, legal page, and mobile navigation presentation.
- `script.js` — keyboard-friendly mobile menu with Escape handling and focus loop, demo form validation/status message, and dynamic footer year.
- `legal.html` — linked accessibility, privacy, learning-claims disclaimer, illustrative-content, and terms notes.

## Customize

1. Replace illustrative course names, instructor bio, credentials, learner counts, quotes, outcomes, dates, prices, payment terms, contact details, and access statements in both HTML files.
2. Update title, description, canonical URL, Open Graph/Twitter metadata, `robots` decision, theme color, and Course JSON-LD in `index.html`.
3. Tune palette, type, spacing, breakpoints, inline SVG artwork, and portrait treatment in `styles.css`; no external assets are required.
4. Define real prerequisites, workload, delivery platform, timezone, live-session recordings, captions/transcripts, learner support, refund/cancellation terms, and intellectual-property rules.
5. Connect the demo form to a secure, privacy-reviewed enrollment or lead workflow. It intentionally never sends, stores, or echoes values and must not collect sensitive personal information.
6. Replace `legal.html` with reviewed privacy, accessibility, terms, refund, recording, safeguarding, and claims policies matching the real education provider.

## Production checklist

- [ ] Educator, legal, privacy, accessibility, and safeguarding reviewers approve copy and policies.
- [ ] Replace all illustrative content, placeholder URLs, structured data, prices, dates, contact details, and `noindex, nofollow` decision.
- [ ] Verify instructor qualifications, course prerequisites, workload, cohort size, platform, timezone, captions, transcripts, and support commitments.
- [ ] Substantiate learning-outcome and testimonial claims; never promise employment, income, credentials, promotion, or transformation without evidence and review.
- [ ] Use secure enrollment/payment infrastructure with consent, encryption, least-privilege access, retention rules, and a clear privacy notice.
- [ ] Confirm scholarship/payment-plan eligibility, refund/cancellation terms, employer invoicing, and learner support before publishing.
- [ ] Test keyboard navigation, mobile-menu focus behavior, reduced motion, zoom/reflow, contrast, screen readers, form errors, and touch targets.
- [ ] Serve over HTTPS, add security headers and a real favicon/social image if needed, and review analytics/tracking consent.
- [ ] Run HTML/CSS/JS validation and test the real enrollment integration in a non-production environment.

All names, quotes, prices, dates, cohort details, outcomes, ratings, credentials, contact details, illustrations, and accessibility statements are illustrative placeholders. This template provides general educational marketing structure, not professional advice or a guarantee of learning or career results.
