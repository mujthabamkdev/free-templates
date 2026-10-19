# Morrow Clinic medical clinic website

Standalone clinic website built with semantic HTML, plain CSS, and vanilla JavaScript. No dependencies, build step, external fonts, or remote assets.

## Preview

From this directory, run any static server:

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000> in a browser. The page also works when opened directly from `index.html`, although a local server gives the closest production-like preview.

## Customize

- Replace clinic name, care descriptions, team placeholders, testimonials, address, hours, phone number, and insurance language in `index.html`.
- Update the palette, typography, spacing, responsive breakpoints, and generated portraits in `src/css/style.css`.
- The hero illustration and team portraits use inline SVG/CSS, so no image files or remote requests are needed.
- `src/js/main.js` controls mobile navigation (focus return, focus trap, Escape/outside-click close), demo form messaging, and the footer year.
- The appointment form intentionally never sends, stores, or echoes submitted values. Connect it to a privacy-reviewed, secure endpoint before collecting real patient information; update the privacy copy and consent flow with your legal/privacy review.
- Replace the `og:url`, illustrative copy, phone number, address, and `noindex, nofollow` metadata before publishing a real clinic site.

## Production checklist

1. Replace every illustrative name, quote, credential, address, phone number, service claim, and opening hour.
2. Configure a secure scheduling or contact service with least-privilege access, retention rules, consent language, and an appropriate privacy notice. Do not collect health details through this demo form.
3. Replace the example Open Graph URL and decide whether search indexing is appropriate for the finished site.
4. Verify keyboard navigation, reduced-motion behavior, mobile menu focus handling, color contrast, emergency copy, and local emergency-care instructions with your clinic team.
5. Serve over HTTPS, add a real favicon/social image if needed, and run your organization’s accessibility, security, and content checks before launch.

## Included sections

Semantic navigation with mobile menu, appointment hero with phone action, specialties/services, care-team profiles, insurance/payment guidance, patient journey, testimonials, location and hours, FAQ accordion, appointment request form, privacy-safe disclaimer, accessibility/privacy notes, and footer.

All names, quotes, credentials, locations, contact details, service descriptions, and outcomes are illustrative placeholders. The template is not medical advice or emergency care.
