# Harbor & Hart recruitment template

Standalone recruitment / staffing website built with semantic HTML, opinionated CSS tokens, inline SVG artwork, and dependency-free vanilla JavaScript. No build step, external assets, remote fonts, or third-party scripts.

## Preview

From this directory, serve files with any static HTTP server:

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000/>. `index.html` contains distinct candidate and employer paths, an illustrative job search, and demo-only forms. `legal.html` contains linked sample privacy, terms, accessibility, and candidate-data guidance.

## Customize

- Replace Harbor & Hart copy, illustrative roles/results/testimonials, contact details, social links, canonical URL, and metadata in `index.html`.
- Replace sample policy language and contact details in `legal.html` with jurisdiction-appropriate, reviewed content.
- Tune color, type, spacing, and layout tokens at the top of `styles.css`; section styles stay grouped by page area.
- Keep inline SVGs or replace them with optimized, locally hosted artwork. No remote asset requests are required.
- `script.js` owns mobile menu keyboard behavior, footer year, job filtering, and demo form responses.
- Forms intentionally prevent network submission with JavaScript and use same-page GET fallbacks without JavaScript. Add a reviewed backend only after implementing server validation, privacy notices, consent handling, retention/deletion workflows, access controls, and spam protection.

## Production checklist

- [ ] Replace every illustrative job, company, salary, statistic, testimonial, and claim with approved attributable content.
- [ ] Set a real canonical URL, organisation details, social profiles, and JSON-LD values; add an approved social preview image only when one is available.
- [ ] Connect forms to a privacy-reviewed endpoint with server-side validation, CSRF protection, rate limiting, spam protection, monitoring, and accessible error states.
- [ ] Publish reviewed privacy, terms, cookie, candidate-data retention, and accessibility information in `legal.html` or your legal system.
- [ ] Document candidate-data controller/processor roles, lawful basis, consent, retention, deletion, access requests, and sensitive-data handling.
- [ ] Run keyboard-only, screen-reader, reduced-motion, contrast, zoom, mobile, link, metadata, and security checks after customization.
- [ ] Add analytics only with an appropriate consent experience; self-host production media where practical.
