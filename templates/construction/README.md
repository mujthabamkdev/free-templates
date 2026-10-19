# Northline Build Co. — construction template

Standalone construction, remodeling, and home-services website built with semantic HTML, opinionated CSS, and vanilla JavaScript. No dependencies, build step, external fonts, remote images, or external assets.

## Preview locally

From this directory:

```sh
python3 -m http.server 4173
```

Open <http://localhost:4173/> or <http://localhost:4173/legal.html>. A local server is recommended so relative links behave consistently.

## Included

- Responsive header with skip link, accessible mobile menu, focus management, Escape-to-close, and keyboard focus loop.
- SEO, canonical, Open Graph, Twitter, robots metadata, and `HomeAndConstructionBusiness` JSON-LD using replacement `.example` values.
- Hero with estimate CTA, inline SVG home illustration, service cards, CSS/inline SVG project gallery, process steps, service-area map, trust/financing/credentials section, review, emergency note, FAQ, estimate form, legal/accessibility page, and footer.
- Demo-only estimate form with native validation, no-JS-safe `<noscript>` explanation, and no network submission.
- Reduced-motion support, visible focus treatment, labelled form controls, live status messaging, semantic headings/landmarks, and illustrative-content notices.

## Customize

1. Replace company name, phone, email, service areas, project descriptions, claims, and all `.example` metadata URLs in `index.html` and `legal.html`.
2. Replace illustrative project SVGs with approved local images or your own inline SVGs; keep meaningful accessible names for visual content.
3. Update credentials, warranty wording, financing disclosures, emergency guidance, reviews, ratings, and service-area claims only after verification.
4. Adjust design tokens at the top of `styles.css` for brand colors, spacing, radii, and shadows.
5. Connect `#estimate-form` to an approved backend or form provider, add consent/privacy language, protect against spam, and remove the demo success wording in `script.js`.
6. Review the legal/accessibility page with your appropriate local professional. Add your real privacy, terms, cookie, and accessibility contact details.

## Production checklist

- [ ] Replace every fictional name, number, testimonial, rating, result, credential, financing reference, phone, email, and project.
- [ ] Replace canonical, Open Graph, JSON-LD, and title/description values with the public site URL and verified business data.
- [ ] Connect and secure form handling; test validation, spam controls, consent, confirmation, retention, and error states.
- [ ] Test keyboard navigation, mobile menu focus loop, Escape behavior, screen reader headings/landmarks, 200% zoom, contrast, and reduced motion.
- [ ] Optimize approved local imagery, add a real favicon/social image, configure analytics consent, and run a production link/crawl check.
- [ ] Run legal, insurance, licensing, warranty, financing, emergency, and accessibility copy review for your jurisdiction.

## Checks

From this directory:

```sh
node --check script.js
python3 -m http.server 4173
```

Check `/`, `/legal.html`, linked anchors, form validation, and mobile navigation in a browser. The template intentionally contains no real submissions or verified business claims.
