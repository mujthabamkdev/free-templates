# Northstar SaaS landing page

Standalone SaaS/B2B marketing site built with semantic HTML, opinionated CSS tokens, and dependency-free JavaScript. It has no build step or external assets.

## Preview

From this directory, run any static server. For example, with Python:

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000> in a browser. Open `index.html` directly for a quick static preview, though a server best matches production URL behavior.

## Customize

- Update copy, SEO metadata, structured data, routes, and links in `index.html`.
- Adjust the design tokens at the top of `styles.css`; keep component rules grouped by section and use the existing tokens for new UI.
- `script.js` owns progressive-enhancement behavior: mobile navigation, focus management, billing toggle, demo form status, and footer year.
- Replace sample content, customer logos, prices, social links, and the `https://northstar.example/` canonical URL before publishing.
- Replace `/login` and `/api/trial-signups` with real application routes. The trial form intentionally shows a demo message until a backend is connected.
- Replace `legal.html` sample policy copy with reviewed privacy, terms, and accessibility content.

## Production checklist

- [ ] Connect trial form to a privacy-reviewed endpoint with validation, rate limiting, spam protection, and error handling.
- [ ] Add real authentication, billing, analytics consent, support, and social routes.
- [ ] Add production OG image and verify canonical/JSON-LD values.
- [ ] Run keyboard, screen-reader, reduced-motion, and contrast checks on final content.
- [ ] Run Lighthouse or equivalent performance checks after adding real media and third-party scripts.
