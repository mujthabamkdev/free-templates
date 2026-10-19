# Aster & Co. digital agency template

Standalone digital agency / consultancy site built with semantic HTML, opinionated CSS tokens, inline SVG artwork, and dependency-free vanilla JavaScript. No build step, external assets, or third-party scripts.

## Preview

From this directory, serve the files with any static HTTP server:

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000/>. `index.html` is the main page; `legal.html` is the linked legal, privacy, and accessibility sample page.

## Customize

- Replace Aster & Co. copy, illustrative case studies/results, email, social links, canonical URL, and metadata in `index.html`.
- Replace sample policy language and contact details in `legal.html` with reviewed legal and accessibility content.
- Tune color, type, spacing, and layout tokens at the top of `styles.css`; component styles remain grouped by page section.
- Keep inline SVGs or swap them for optimized, locally hosted artwork. Do not add remote font or image requests unless you intentionally accept that production dependency.
- `script.js` owns the mobile menu (including Escape and focus wrapping), footer year, reduced-motion-compatible behavior, and demo form response.
- The inquiry form intentionally has no network action and clearly tells users it is a demo. Add a reviewed backend endpoint only after adding server validation, privacy notices, consent handling, spam protection, and error states.

## Production checklist

- [ ] Replace all illustrative client names, claims, scores, and results with approved, attributable content.
- [ ] Set a real canonical URL, organization details, social profiles, and JSON-LD values; add an approved social preview image and switch Twitter metadata to `summary_large_image` only when that image is available.
- [ ] Connect the inquiry form to a privacy-reviewed endpoint with server-side validation, rate limiting, spam protection, observability, and accessible errors.
- [ ] Replace `legal.html` sample privacy, terms, and accessibility copy with jurisdiction-appropriate reviewed policies.
- [ ] Run keyboard-only, screen-reader, reduced-motion, contrast, zoom, and mobile checks on final content.
- [ ] Add analytics only with an appropriate consent experience; self-host any production media where practical.
- [ ] Run Lighthouse or equivalent performance, metadata, link, and security checks after customization.
