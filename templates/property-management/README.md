# Harborline Property Co. — property-management template

Standalone property-management website built with semantic HTML, maintainable CSS, and vanilla JavaScript. No dependencies, build step, remote fonts, or external assets.

## Preview

From this directory:

```sh
python3 -m http.server 4173
```

Open <http://localhost:4173/> and <http://localhost:4173/legal.html>. The static server is recommended so the privacy/accessibility page and relative links behave consistently.

## Included

- Responsive header with skip link, keyboard-operable mobile menu, focus return, Escape handling, and outside-click close.
- Owner and resident paths, illustrative property portfolio, management/leasing services, service areas, resident portal handoff, maintenance request flow, FAQ, testimonials, and metrics.
- Demo-only owner inquiry and maintenance forms. JavaScript shows a local status message; no entry is sent or stored. Native form fallback remains safe when JavaScript is disabled.
- Privacy and accessibility starter page at `legal.html` with adaptation guidance.
- PropertyManagement and Organization JSON-LD, canonical URL, Open Graph, Twitter metadata, description, theme color, and robots metadata.
- CSS-generated artwork only; reduced-motion styles, visible focus states, labelled controls, semantic landmarks, and responsive layouts.

## Customize

1. Replace company name, phone, email, URLs, service areas, policy copy, portfolio content, and all illustrative statements in `index.html` and `legal.html`.
2. Replace the `PropertyManagement` and `Organization` JSON-LD values with verified business details, then validate structured data.
3. Adjust color, typography, spacing, and component tokens at the top of `styles.css`.
4. Replace CSS artwork with approved local images or inline SVGs if desired. Preserve meaningful alternative text and captions.
5. Connect `#owner-form` and `#maintenance-form` to secure, monitored endpoints. Update validation, success/error handling, privacy copy, and emergency guidance to match the real operation.
6. Replace the illustrative portfolio, metric, and testimonial content only with accurate, approved, attributable material.

## Production checklist

- [ ] Replace `.example` URLs and placeholder contact information.
- [ ] Publish reviewed privacy, accessibility, terms, cookie, and resident/emergency guidance.
- [ ] Connect forms and resident portal through secure, monitored services; never collect sensitive data in an unprotected form.
- [ ] Confirm service areas, leasing scope, response expectations, fees, fair-housing language, and maintenance escalation paths.
- [ ] Test keyboard navigation, focus order, zoom/reflow, contrast, screen readers, reduced motion, and current mobile browsers.
- [ ] Run HTML/CSS validation, structured-data validation, link checks, and a production accessibility audit.

## Local checks

From this directory:

```sh
node --check script.js
python3 - <<'PY'
from html.parser import HTMLParser
for filename in ("index.html", "legal.html"):
    parser = HTMLParser()
    with open(filename, encoding="utf-8") as file:
        parser.feed(file.read())
    parser.close()
    print(f"parsed {filename}")
PY
python3 -m http.server 4173
```

Then request `/`, `/index.html`, `/legal.html`, `/styles.css`, and `/script.js` from the local server and inspect desktop and narrow mobile layouts. All portfolio, metric, testimonial, and contact details in this template are illustrative demo content until replaced.
