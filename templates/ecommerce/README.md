# Field & Form e-commerce template

Standalone DTC storefront for a fictional small-batch pantry brand. Built with semantic HTML, maintainable CSS, inline SVG/CSS visuals, and vanilla JavaScript. No dependencies, build step, external fonts, remote assets, tracking, or external images.

## Preview

From this directory, run a local static server:

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000/>. Open `legal.html` for the linked accessibility, privacy, product-safety, shipping/returns, and production handoff notes. Both pages can also be opened directly, but a local server better matches deployed behavior.

## Files

- `index.html` — responsive storefront with SEO/social metadata, Organization and Product JSON-LD, skip link, keyboard-friendly mobile menu, hero, filterable product discovery, product cards, featured bundle, reviews/UGC disclosure, subscription/bundle/shipping/returns content, FAQ, demo newsletter form, demo cart, checkout handoff, accessibility callout, and footer.
- `styles.css` — opinionated responsive layout, CSS product art, inline SVG styling, focus states, reduced-motion rules, dark/light sections, and mobile navigation presentation.
- `script.js` — mobile menu Escape/focus-loop behavior, product filters, demo cart preview/removal, form validation/status, and dynamic footer year.
- `legal.html` — linked accessibility, privacy/forms, product safety, shipping/returns, illustrative-content, and contact notes.

## Customize

1. Replace fictional brand, product names, descriptions, ingredients, allergens, prices, availability, shipping, subscription, review, journal, and contact copy in both HTML files.
2. Update title, description, canonical URL, Open Graph/Twitter metadata, robots policy, theme color, and both JSON-LD blocks in `index.html`.
3. Tune palette, typography, spacing, breakpoints, product art, and inline SVG illustrations in `styles.css`; no external assets are required.
4. Replace demo cart behavior with a real commerce platform or hosted checkout. Connect inventory, taxes, shipping rates, discounts, subscriptions, fulfillment, order confirmation, and customer account controls.
5. Connect the demo newsletter form to a consent-aware provider. It intentionally does not send, store, or echo email values and must be covered by a real privacy notice and unsubscribe flow.
6. Replace `legal.html` with reviewed legal, privacy, accessibility, product-safety, shipping, return, subscription, cookie/analytics, and customer-support policies.

## Production checklist

- [ ] Brand owner, commerce, accessibility, privacy, food/product-safety, and legal reviewers approve copy and policies.
- [ ] Replace all illustrative content, placeholder URLs, structured data, prices, product claims, contact details, and `noindex, nofollow` decision.
- [ ] Verify ingredients, allergen statements, net quantity, storage/care instructions, packaging, batch details, and required regulatory disclosures.
- [ ] Integrate secure checkout, inventory, taxes, shipping, fulfillment, returns, subscriptions, transactional email, and customer support; test failures and duplicate submissions.
- [ ] Show final price, renewal cadence, shipping costs, consent, cancellation controls, and terms before payment. Do not make health or sustainability guarantees without evidence.
- [ ] Secure permission for real testimonials, UGC, product artwork, and editorial content; remove fictional reviews before launch.
- [ ] Connect form backend with consent, encryption, access controls, retention, deletion, and unsubscribe handling. Never collect unnecessary data.
- [ ] Test keyboard navigation, mobile menu focus behavior, reduced motion, zoom/reflow, contrast, screen readers, form errors, no-JS paths, and touch targets.
- [ ] Serve over HTTPS, add security headers and a real favicon/social image if needed, and review analytics/tracking consent.
- [ ] Run HTML/CSS/JS validation and exercise the real commerce integration in a non-production environment.

All names, products, prices, stock, shipping promises, reviews, journal content, contact details, illustrations, and policies are illustrative placeholders. This template does not process orders or payments.
