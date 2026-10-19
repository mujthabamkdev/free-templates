# Common Ground nonprofit template

Responsive standalone nonprofit / association website template built with semantic HTML, opinionated CSS, and vanilla JavaScript. No dependencies, external assets, web fonts, analytics, or build step.

## Preview

Serve this directory over HTTP so navigation and form behavior match deployment:

```sh
python3 -m http.server 4173
```

Open `http://localhost:4173/`. `legal.html` contains the illustrative privacy and accessibility page.

## Included

- Accessible responsive header with skip link, mobile navigation, Escape handling, focus return, focus loop, and reduced-motion styles.
- Hero with donate and volunteer CTAs, mission, programs, clearly illustrative impact metrics, composite stories, reports/transparency, events, partner proof, FAQ, and footer.
- Donation handoff placeholder: no payment processing or provider integration.
- Demo-only newsletter and volunteer forms with labels, native validation, no-JS-safe fallback copy, and explicit no-storage status messages.
- SEO/social metadata and `NGO` JSON-LD in `index.html`.
- `legal.html` privacy, accessibility, forms/giving, and contact guidance.
- Inline SVG/CSS artwork only. No image or runtime dependencies.

## Customization

1. Replace organization name, mission, service area, contact details, navigation, colors, and all illustrative copy.
2. Replace every illustrative metric, story, event, partner mark, report reference, and program description with verified, permissioned content.
3. Connect the donation CTA to an approved accessible giving provider. Document fees, receipts, recurring-gift cancellation, privacy, and support ownership.
4. Connect newsletter and volunteer forms to reviewed services with consent, retention, access, abuse prevention, and error-handling plans. Never request sensitive information through an unreviewed form.
5. Update canonical, Open Graph, Twitter, robots, JSON-LD, email, phone, address, and `sameAs` values for the real organization.
6. Replace `legal.html` with organization-approved privacy, accessibility, safeguarding, fundraising, and contact language.

## Production checklist

- [ ] Verify legal organization name, registration details, governance, tax language, fundraising permissions, and service area.
- [ ] Verify program eligibility, capacity, safety/safeguarding process, accessibility details, event dates, and contact response times.
- [ ] Replace all illustrative labels, metrics, stories, testimonials/composites, partner marks, reports, placeholder URLs, and example contact values.
- [ ] Connect and test an accessible donation provider; confirm receipts, refunds, recurring gifts, fees, and reconciliation ownership.
- [ ] Connect reviewed newsletter and volunteer workflows; add consent, unsubscribe, retention, security, and spam protections.
- [ ] Publish reviewed privacy, accessibility, cookie/analytics, terms, safeguarding, and fundraising disclosures as applicable.
- [ ] Test keyboard navigation, screen readers, focus order, zoom/reflow, contrast, reduced motion, touch targets, forms, and no-JS behavior.
- [ ] Add HTTPS, security headers/CSP, backups, monitoring, error pages, dependency/content review, and an incident contact.
- [ ] Run HTML, CSS, and JavaScript checks and test on current mobile and desktop browsers before launch.
