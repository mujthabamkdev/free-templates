# Civic & Alder law firm website

Standalone professional-services website built with semantic HTML, plain CSS, and vanilla JavaScript. No dependencies, build step, external fonts, or remote assets.

## Preview

From this directory, run any static server:

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000> in a browser. The page is also safe to open directly from `index.html`, although a local server gives the closest production-like preview.

## Customize

- Replace firm name, practice copy, attorney profiles, locations, and illustrative results in `index.html`.
- Update the palette, typography, spacing, and responsive breakpoints in the token block and rules in `src/css/style.css`.
- The courthouse illustration and attorney portraits are CSS/inline SVG, so there are no image files to replace.
- `src/js/main.js` controls responsive navigation, focus trapping, Escape-to-close behavior, demo-form messaging, and the footer year.
- The consultation form intentionally does not submit or store data. Replace its `action`, add server-side validation and spam protection, and complete a privacy review before collecting real inquiries.
- Update `meta` and Open Graph values in `index.html` when replacing the sample firm identity. Add a verified canonical URL and social image at deployment time.
- Review all illustrative results, testimonials, addresses, credentials, and legal disclosures with counsel before publishing.

## Production checklist

- Connect form to an approved intake system over HTTPS; document retention, consent, and confirmation behavior.
- Replace sample copy and disclosures; confirm jurisdiction-specific advertising, privacy, accessibility, and attorney-client notices.
- Add deployment-owned `robots.txt`, sitemap, canonical URL, and Open Graph image when the final domain is known.
- Test keyboard navigation, reduced motion, narrow screens, native form validation, and the live endpoint in each supported browser.

## Included sections

Semantic navigation with mobile menu, consultation hero, practice areas, attorney cards, clearly labelled illustrative results, testimonial, service areas, FAQ accordion, consultation intake form, privacy/accessibility notes, and footer.
