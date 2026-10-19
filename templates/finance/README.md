# Northstar Financial — finance template

Standalone mortgage, protection, and financial-advisor website built with semantic HTML, opinionated CSS, inline CSS artwork, and dependency-free vanilla JavaScript. No build step, external assets, remote fonts, or third-party scripts.

## Preview

From this directory:

```sh
python3 -m http.server 4173
```

Open <http://localhost:4173/>. `index.html` is the marketing page and `legal.html` contains starter privacy, terms/disclosure, and accessibility content.

## Included

- Responsive semantic header with skip link, mobile menu, Escape handling, focus wrapping, and resize cleanup.
- SEO description, canonical URL, Open Graph/Twitter metadata, and FinancialService JSON-LD placeholders.
- Consultation hero, mortgage/protection/planning service paths, illustrative payment explorer, scenarios, process, trust/licensing disclosure area, advisor team, illustrative testimonial, FAQ, demo-only form, disclaimer, footer, and legal/accessibility page.
- Payment explorer is a visual illustration only; it does not quote, recommend, approve, or assess eligibility.
- Form is intentionally no-network and no-storage. Native required validation remains available without JavaScript.
- Responsive layout, visible focus, semantic headings, labelled fields, live status, reduced-motion support, and no external assets.

## Customize

1. Replace fictional brand, people, licenses, jurisdictions, service claims, contact details, scenarios, testimonial, metrics, disclosures, and placeholder URLs in `index.html` and `legal.html`.
2. Update the CSS tokens at the top of `styles.css`; component styles are grouped by section.
3. Replace CSS-generated artwork with optimized local assets or inline SVG when needed. Keep meaningful alternative text and captions.
4. Review the calculator assumptions in `script.js` and keep every result visibly marked illustrative; never present it as a quote or affordability decision.
5. If connecting the form, replace the demo button flow with a privacy-reviewed endpoint, server-side validation, rate limiting, spam protection, consent, encryption, monitoring, and accessible success/error states. Do not collect sensitive financial documents in this demo.
6. Replace canonical/social metadata, JSON-LD address/service area, legal copy, and footer details with approved production values.

## Production checklist

- [ ] Obtain legal/compliance review for mortgage, insurance, financial-advice, advertising, licensing, compensation, and jurisdiction claims.
- [ ] Replace all fictional names, credentials, rates, amounts, metrics, testimonials, scenarios, and illustrations with approved attributable content.
- [ ] Verify licensing, registration, lender/carrier relationships, compensation, conflicts, complaint process, and required state disclosures.
- [ ] Connect form only after privacy review, consent design, secure transport, server validation, retention policy, anti-abuse controls, and monitoring are ready.
- [ ] Replace `legal.html` starter language with reviewed privacy, terms, disclosure, accessibility, and cookie/analytics policies as applicable.
- [ ] Run keyboard-only, screen-reader, reduced-motion, contrast, zoom, mobile, and no-JavaScript checks.
- [ ] Set real canonical/social URLs and add an approved social preview image when available.
- [ ] Run HTML parsing, CSS validation/sanity, link checks, Lighthouse or equivalent security/performance checks, and review all copy before launch.
