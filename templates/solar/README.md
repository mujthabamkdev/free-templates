# Sunward Solar — solar installer template

Standalone renewable-energy installer website built with semantic HTML, opinionated CSS, inline SVG, and vanilla JavaScript. No dependencies, build step, external fonts, remote images, or external assets.

## Preview locally

From this directory:

```sh
python3 -m http.server 4173
```

Open <http://localhost:4173/> or <http://localhost:4173/legal.html>. Local HTTP keeps relative links and the second page behaving consistently.

## Included

- Responsive header with skip link, accessible mobile menu, focus management, Escape-to-close, keyboard focus loop, and visible focus states.
- SEO, canonical, Open Graph, Twitter, robots metadata, and `LocalBusiness` / `Electrician` / `Service` JSON-LD using replacement `.example` values.
- Hero with inline SVG solar-home visual, quote CTA, illustrative proof points, solar/battery/EV services, and installation process.
- Savings-calculator-style controls that update locally in the browser and clearly disclose that output is illustrative—not a quote, guarantee, audit, or tax opinion.
- Financing and incentives guidance with explicit verification disclaimer; project proof cards, service-area illustration, reviews, FAQ, safety/warranty/claims disclaimer, and legal/accessibility page.
- Demo-only consultation form with native validation, no-JS-safe `<noscript>` explanation, and no network submission.
- Reduced-motion support, semantic headings/landmarks, labelled controls, live status messaging, and responsive layout.

## Customize

1. Replace fictional business name, phone, email, service areas, claims, projects, ratings, reviews, incentives, warranty wording, and all `.example` metadata URLs in `index.html` and `legal.html`.
2. Replace inline SVG project visuals with approved local imagery or your own SVGs; keep meaningful accessible names for visual content.
3. Replace calculator assumptions and copy with a reviewed model, or remove it. Never publish savings, production, payback, or tax claims without verified assumptions and required disclosures.
4. Adjust design tokens at the top of `styles.css` for brand colors, spacing, radii, and shadows.
5. Connect `#consultation-form` to an approved backend or form provider, add consent/privacy language, protect against spam, and remove demo success wording in `script.js`.
6. Review legal, electrical, roof, fire, licensing, warranty, financing, incentive, and accessibility copy with appropriate local professionals.

## Production checklist

- [ ] Replace every fictional name, number, testimonial, rating, result, credential, incentive, warranty reference, phone, email, project, and service-area claim.
- [ ] Replace canonical, Open Graph image, JSON-LD, title, and description values with the public site and verified business data.
- [ ] Validate structured data and local-business details; add real business hours, address, service area, license details, and contact consent as appropriate.
- [ ] Connect and secure form handling; test validation, spam controls, consent, confirmation, retention, and error states.
- [ ] Test keyboard navigation, mobile menu focus loop, Escape behavior, screen-reader headings/landmarks, 200% zoom, contrast, touch targets, and reduced motion.
- [ ] Optimize approved local imagery, add a real favicon/social image, configure analytics consent, and run a production link/crawl check.
- [ ] Run legal, tax, electrical, fire, roof, licensing, incentive, financing, warranty, safety, and accessibility review for your jurisdiction.

## Checks

From this directory:

```sh
node --check script.js
python3 -m http.server 4173
```

Check `/`, `/legal.html`, linked anchors, calculator controls, form validation, and mobile navigation in a browser. The template intentionally contains no real submissions or verified business claims.
