# Juniper & Tide Therapy

Calm, responsive mental-health / therapy practice website template built with semantic HTML, opinionated CSS, and vanilla JavaScript. No dependencies or external assets.

## Preview

From this directory, serve files over HTTP so browser behavior matches production:

```sh
python3 -m http.server 4173
```

Open `http://localhost:4173/`. The `legal.html` page contains the illustrative privacy, accessibility, and health-disclaimer notes.

## Included

- Accessible responsive header with skip link, mobile menu, Escape handling, focus return, and keyboard focus loop.
- Hero with discreet inquiry CTA, support areas, approach, illustrative therapist profiles, care pathway, illustrative testimonials, availability, FAQ, and a demo-only inquiry form.
- Privacy-safe intake guidance and crisis-resource disclaimer. Form prevents submission and storage in `script.js`.
- SEO/social metadata and `MedicalBusiness` JSON-LD in `index.html`.
- Inline SVG/CSS artwork only; no image, font, analytics, or runtime dependencies.

## Customization

1. Replace practice name, copy, colors, contact details, locations, hours, specialties, credentials, and JSON-LD values.
2. Replace illustrative profiles and testimonials with verified information and documented permissions.
3. Keep inquiry copy general. Connect a privacy-reviewed secure intake or scheduling system before enabling real submissions.
4. Replace `legal.html` content with organization-approved privacy, accessibility, licensing, and disclaimer language.
5. Update canonical/OG URLs, robots policy, crisis resources, service area, and structured data for the real practice.

## Production checklist

- [ ] Confirm clinician licensure, scope, availability, fees, coverage, service area, and accessibility details.
- [ ] Replace all illustrative labels, placeholder phone/address/email values, quotes, and JSON-LD fields.
- [ ] Connect a reviewed secure intake/scheduling provider; never post sensitive information through the demo form.
- [ ] Add privacy notice, terms, consent language, retention/access controls, and a reviewed crisis-resource page.
- [ ] Test keyboard navigation, screen readers, zoom/reflow, contrast, reduced motion, touch targets, and form errors.
- [ ] Set deployment headers, HTTPS, CSP, backups, monitoring, and a documented content review process.
- [ ] Run HTML/CSS/JS checks and test on current mobile and desktop browsers before launch.
