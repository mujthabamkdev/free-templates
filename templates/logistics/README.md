# Northstar Freight

Standalone logistics / freight / 3PL website template built with semantic HTML, opinionated CSS, and vanilla JavaScript.

## Preview

From this directory, start any static server and open `index.html`:

```bash
python3 -m http.server 8080
```

Open <http://localhost:8080/>. `legal.html` contains the privacy, terms, and accessibility starter page.

## Included

- Responsive header with keyboard-operable mobile menu, Escape-to-close, focus wrapping, and skip link.
- SEO metadata, Open Graph/Twitter metadata, canonical URL, and Organization/LogisticsBusiness + Service JSON-LD.
- Hero route visualization made from CSS and inline SVG only; no external assets or dependencies.
- Services, lanes, demo tracking view, modes/fleet capabilities, industries, process, illustrative compliance badges, case proof, FAQ, and quote request form.
- Forms remain native and anchor-based without JavaScript. JavaScript intercepts them only to show local demo status; no request is sent.
- Privacy, terms, and accessibility starter content at `legal.html`.
- Reduced-motion CSS, semantic landmarks, labeled form fields, `aria-live` status areas, and visible focus treatment.

## Customization

1. Replace Northstar name, logo treatment, phone, email, address, canonical URL, metadata, and both JSON-LD blocks in `index.html` and `legal.html`.
2. Update service, mode, lane, industry, compliance, case study, and FAQ copy to match verified scope. Remove sections that do not apply.
3. Replace illustrative metrics, testimonials, badges, route statuses, and all `illustrative` / `demo` notices with reviewed evidence or remove them.
4. Keep IDs used by navigation (`services`, `lanes`, `tracking`, `capabilities`, `process`, `faq`, `quote`) or update links together.
5. Connect forms to an approved backend only after adding validation, consent language, CSRF/rate-limit controls, spam handling, secure transport, retention rules, and error handling. Update `script.js` to reflect real submission states.
6. Integrate real carrier/TMS data behind authenticated, access-controlled APIs before presenting shipment status as live.

## Production checklist

- [ ] Replace all template names, contact details, URLs, copy, and legal placeholders.
- [ ] Verify authority, insurance, certifications, trade programs, service territory, carrier relationships, and any warehouse or fleet claims.
- [ ] Validate every promise, metric, review, delivery estimate, and availability statement with the business owner; avoid operational guarantees.
- [ ] Have privacy, terms, accessibility statement, cookie/analytics disclosures, and form consent reviewed for the operating jurisdictions.
- [ ] Configure a real form endpoint with security, consent, retention, monitoring, and an accessible success/error flow.
- [ ] Configure analytics only with an approved privacy approach; do not log shipment references or personal data unnecessarily.
- [ ] Run keyboard, screen reader, zoom/reflow, contrast, reduced-motion, mobile, and current-browser checks.
- [ ] Replace illustrative route/tracking visual with an authenticated source of truth, or keep it clearly labeled as a concept.
- [ ] Add a real favicon/social image only if approved; current template intentionally uses no external assets.
- [ ] Set production HTTP security headers and HTTPS at the host.
