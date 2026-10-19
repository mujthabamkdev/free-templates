# Gather & Glow — Events / weddings template

Standalone semantic HTML, opinionated CSS, and vanilla JavaScript template for an event planner, wedding planner, or celebrations studio. No dependencies and no external assets. Visuals use CSS shapes and inline SVG so preview works offline.

## Preview

From this folder, serve files over HTTP (recommended for realistic browser behavior):

```sh
python3 -m http.server 8080
```

Open `http://localhost:8080/`. `index.html` is the main landing page; `legal.html` contains privacy, terms, cancellations, and accessibility starter sections.

## Included

- Responsive header with skip link, mobile menu, focus return, Escape handling, and keyboard focus loop.
- Hero inquiry CTA, event types, illustrative case stories, planning process, packages, venue section, CSS/inline-SVG gallery, testimonials, FAQ, and demo inquiry form.
- SEO description, canonical URL, Open Graph/Twitter metadata, `EventPlanner` and `Organization` JSON-LD.
- Native form validation and no-JavaScript fallback messaging. JavaScript only displays a local demo confirmation; it does not submit or store data.
- Reduced-motion styles, visible focus, semantic landmarks/headings, labels, `details` FAQ controls, and explicit illustrative-content labels.

## Customization

1. Replace brand name, contact details, URLs, social links, descriptions, JSON-LD, and canonical metadata in `index.html`.
2. Replace illustrative stories, testimonials, package prices, venues, dates, and claims with approved, verifiable content. Keep any sample content clearly labeled until replaced.
3. Update colors and layout tokens at the top of `styles.css`; replace CSS/inline-SVG art with optimized, descriptive images if desired.
4. Connect `#inquiry-form` to a reviewed endpoint, add server-side validation, spam protection, consent handling, secure transport, and a real success/error flow. Do not rely on client-side validation alone.
5. Replace legal starter copy in `legal.html`; confirm privacy, cancellation, contract, accessibility, and cookie requirements for your jurisdiction.

## Production checklist

- [ ] Replace all `.example` URLs, placeholder contacts, social links, logo metadata, and sample copy.
- [ ] Replace illustrative case stories/testimonials with permissioned work and accurate accessibility descriptions.
- [ ] Confirm package scope, dates, prices, travel, taxes, availability, and any outcome language in reviewed copy.
- [ ] Connect and secure inquiry handling; document retention, privacy notice, consent, notifications, and error states.
- [ ] Test keyboard navigation, screen-reader names, focus order, contrast, reduced motion, zoom/reflow, and touch targets.
- [ ] Test real venues, maps, third-party embeds, forms, email delivery, analytics consent, and mobile browsers.
- [ ] Optimize any replacement media, set an appropriate CSP/security headers, and run HTML/CSS/JS validation in CI.
