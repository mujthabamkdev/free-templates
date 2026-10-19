# Fieldwork Studio — architecture template

Standalone architecture and interior-design studio website built with semantic HTML, opinionated CSS, inline SVG/CSS visuals, and vanilla JavaScript. No dependencies, build step, remote fonts, external images, or network requests.

## Preview locally

From this directory:

```sh
python3 -m http.server 4173
```

Open <http://localhost:4173/> and <http://localhost:4173/legal.html>. A local server keeps relative links and the legal page behaving consistently.

## Included

- Responsive header with skip link, accessible mobile menu, focus management, Escape-to-close, keyboard focus loop, and resize cleanup.
- SEO, canonical, robots, Open Graph, Twitter metadata, and `ArchitectureFirm` JSON-LD with replaceable `.example` values.
- Editorial hero, inline SVG visual, portfolio grid, project case-study details, services, approach/process, studio/team, awards/credentials, journal, inquiry form, legal/accessibility page, and footer.
- Demo-only inquiry form with native validation, no-JS-safe `<noscript>` guidance, no network submission, and explicit production integration notes.
- Reduced-motion support, visible focus treatment, labelled form controls, semantic headings/landmarks, descriptive visual labels, and illustrative-content notices.

## Customize

1. Replace studio name, contact details, address, service area, metadata URLs, JSON-LD, team, projects, awards, and all illustrative claims in `index.html` and `legal.html`.
2. Replace inline SVG/CSS project and portrait visuals with approved local media when ready. Keep meaningful accessible names for informative visuals and empty alt text for decorative ones.
3. Update service descriptions, project scope/timeline/area, credentials, journal links, and editorial copy only after verification.
4. Adjust design tokens at the top of `styles.css` for palette, spacing, borders, type scale, and motion.
5. Connect `#inquiry-form` to an approved backend or form provider. Add consent/privacy language, CSRF/spam controls, rate limits, error/success states, and remove demo wording in `script.js`.
6. Review `legal.html` with an appropriate professional. Add real privacy, terms, cookie/analytics, accessibility, copyright, and professional-practice language.

## Production checklist

- [ ] Replace every fictional name, person, project, location, number, testimonial, award, credential, claim, phone, email, and `.example` URL.
- [ ] Replace canonical, social metadata, JSON-LD, title/description, and social image with public, verified studio data.
- [ ] Add approved photography or illustrations with usage rights, compression, responsive sizing, meaningful alternative text, and a real favicon.
- [ ] Connect and secure inquiry handling; test validation, spam controls, consent, confirmation, retention, failure states, and privacy disclosures.
- [ ] Test keyboard navigation, mobile menu focus loop, Escape behavior, screen-reader landmarks/headings, 200% zoom, contrast, touch targets, and reduced motion.
- [ ] Run a production link/crawl check, performance audit, accessibility audit, and legal/professional-practice copy review.

## Checks

From this directory:

```sh
node --check script.js
python3 -m http.server 4173
```

Also validate HTML structure, confirm `/` and `/legal.html` return `200`, inspect linked anchors/form behavior in a browser, and run `git diff --check`. All included content is intentionally illustrative; no inquiry is sent by this template.
