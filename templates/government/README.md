# Government / public-sector service template

Civic Bridge is a standalone, dependency-free public-sector service website template. It uses plain semantic HTML, opinionated CSS, and a small vanilla JavaScript layer for the mobile navigation, service finder, and demo request preview.

## Preview

1. Open `index.html` directly for a static preview, or serve this folder with any local static server.
2. Search for `permits`, `housing`, `records`, or `trash` to filter popular services.
3. Use **Request a service** to see the validation and demo-only preview state. Nothing is submitted or stored.
4. Open **Accessibility**, **Language access**, **Privacy**, or **Disclaimer** in the footer to review policy starter content.

## Files

- `index.html` — responsive service homepage, metadata, `GovernmentOrganization` JSON-LD, service finder, announcements, guidance, records, contact, FAQ, and demo form.
- `styles.css` — responsive design system, high-contrast states, print styles, and reduced-motion handling.
- `script.js` — keyboard-friendly mobile menu, live service filtering, and no-network form preview.
- `legal.html` — accessibility, language access, privacy, and fictional-site disclaimer page.

## Customization

- Replace fictional organization name, domain, contact details, dates, service copy, and all `example.gov` references.
- Update canonical, Open Graph, Twitter, and JSON-LD metadata to match the production domain and organization.
- Connect service links, announcements, records, payments, and forms to approved production destinations.
- Keep the demo banner until all fictional content is removed and official status is appropriate.
- Extend `data-service` terms when adding service cards so plain-language search remains useful.
- Keep focus styles, visible labels, semantic headings, keyboard behavior, and the skip link when restyling.

## Production checklist

- [ ] Confirm legal authority, organization naming, domain ownership, and official affiliation language.
- [ ] Replace every placeholder link, email, phone number, date, record, and service detail.
- [ ] Integrate forms with an approved case-management system; add CSRF protection, validation, error recovery, confirmation, and retention rules.
- [ ] Publish reviewed privacy, accessibility, records, language-access, terms, and disclaimer notices.
- [ ] Complete WCAG 2.2 AA review with keyboard-only, screen reader, zoom/reflow, contrast, reduced-motion, and mobile testing.
- [ ] Test translated content, right-to-left support if needed, plain language, and interpreter routing.
- [ ] Add analytics only with approved privacy controls; never log sensitive form fields.
- [ ] Run HTML, CSS, JavaScript, link, security-header, and performance checks in CI.
- [ ] Verify redirects, HTTPS, error pages, backups, monitoring, content ownership, and an accessible contact path.
