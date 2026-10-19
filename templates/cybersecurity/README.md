# Aegisline cybersecurity website

Standalone cybersecurity company website built with semantic HTML, opinionated CSS, inline SVG, and dependency-free vanilla JavaScript. No external assets, build step, or network request is required for the preview.

## Preview

From this directory, run a local static server:

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000/>. `index.html` also opens directly, but a server matches production URL behavior more closely.

## Customize

- Edit copy, metadata, JSON-LD, links, illustrative metrics, and organization details in `index.html`.
- Tune colors, spacing, type scale, component rules, and responsive breakpoints in `styles.css`.
- `script.js` owns mobile navigation focus management, Escape/Tab behavior, demo-only form messaging, and footer year.
- Set your real site origin, canonical URL, `og:url`, JSON-LD URL, social profile URLs, and contact routes before publishing. This template omits origin metadata until deployment values are known.
- The default Twitter card is the safe `summary` variant. If adding a social preview image, use an approved absolute HTTPS `og:image`/`twitter:image` asset (typically 1200×630) and verify its cacheable public URL.
- Replace `legal.html` sample policy language with reviewed privacy, terms, accessibility, and security disclaimer content.
- The visual signal map uses inline SVG, so no image pipeline or asset hosting is needed.

## Production checklist

- [ ] Connect `#demo-form` to a privacy-reviewed backend with server-side validation, rate limiting, spam controls, consent handling, and clear success/error states. The current form intentionally prevents network submission.
- [ ] Replace illustrative customer sectors, case studies, metrics, trust signals, and capability claims with verifiable, approved evidence.
- [ ] Review security and compliance language with qualified legal/security stakeholders; do not imply certification, prevention, or guaranteed response outcomes.
- [ ] Set absolute HTTPS canonical, Open Graph, and JSON-LD URLs; add an approved social image or keep the safe `summary` card; configure analytics consent, support, and real contact routes.
- [ ] Keep demo-only form behavior until a reviewed backend is connected; with JavaScript disabled, fields never submit over the network.
- [ ] Test keyboard navigation, focus restoration, screen readers, reduced motion, contrast, mobile menu behavior, and form errors.
- [ ] Add security headers, HTTPS, CSP, dependency review, monitoring, backups, and an incident contact route at deployment.
- [ ] Run Lighthouse or equivalent checks after adding production integrations.
