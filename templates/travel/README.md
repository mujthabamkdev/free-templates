# Northline Journeys travel template

Standalone travel / tour-operator website built with semantic HTML, opinionated CSS, inline SVG/CSS visuals, and a small vanilla JavaScript enhancement layer. No dependencies, external assets, fonts, analytics, cookies, or network requests.

## Preview

Serve this directory over HTTP:

```sh
python3 -m http.server 8080
```

Open `http://localhost:8080/`. Opening `index.html` directly also works, but HTTP gives more realistic local checks.

## Included

- Responsive, semantic header with mobile menu, Escape-to-close, outside-click close, focus return, keyboard focus loop, and skip link.
- Hero with destination / season / pace search controls and no-JS-safe fallback.
- Filterable journey cards for Japan, Portugal, and New Zealand with clearly illustrative pricing and availability disclosure.
- Visual itinerary/detail section with an inline route map, itinerary stages, and trip inquiry CTA.
- Responsible-travel standards, local-host / guide proof, field notes, illustrative reviews, FAQ, and accessibility callout.
- Demo-only inquiry form with native validation, `method="get"` fragment fallback, live status message, and explicit no-send notice.
- `legal.html` covering booking and price disclosure, privacy, terms, accessibility, and asset notes.
- SEO description, canonical URL, Open Graph / X metadata, theme color, `TravelAgency` and `TouristTrip` JSON-LD.

## Customize

1. Replace the Northline brand, contact details, destination copy, itinerary facts, and guide / partner claims in `index.html` and `legal.html`.
2. Replace `example.com` canonical and social metadata. Add a real social image only after creating an optimized, licensed asset.
3. Tune colour tokens, typography, spacing, cards, route art, and breakpoints in `styles.css`; preserve contrast and focus states.
4. Replace illustrative prices, dates, availability, reviews, group sizes, sustainability claims, accessibility details, and JSON-LD values with verified production data.
5. Connect inquiry and booking flows to reviewed, secure services only after adding server-side validation, consent, spam controls, error recovery, privacy handling, and payment / booking terms.
6. Replace the starter legal copy with jurisdiction-specific privacy, cookie, booking, cancellation, supplier, insurance, and accessibility information.
7. If adding real photography, keep assets local or use a reviewed CDN, provide useful alternative text, confirm rights, and test responsive crops and performance.

## Production checklist

- [ ] Verify operator identity, seller of record, contact details, destinations, guides, partners, inclusions, exclusions, taxes, rates, dates, and availability.
- [ ] Replace every illustrative / demo notice with approved production content, or retain clear prototype language.
- [ ] Configure booking and payment provider with final-price disclosure, deposit rules, cancellation terms, traveller insurance guidance, and confirmation / failure states.
- [ ] Wire inquiry form to a secure endpoint with CSRF protection, rate limiting, bot controls, validation, consent, retention policy, and accessible success / error messages.
- [ ] Publish verified route-by-route accessibility information, mobility / terrain details, dietary support, emergency process, and monitored accessibility contact.
- [ ] Validate responsible-travel claims with partners; document review cadence, local compensation, transport choices, and environmental limits.
- [ ] Replace `legal.html` starter content with reviewed privacy, cookie, terms, booking, cancellation, and complaints notices.
- [ ] Test keyboard-only navigation, menu focus loop, Escape close, screen-reader landmarks, 200% zoom, narrow screens, touch targets, reduced motion, and colour contrast.
- [ ] Test metadata previews, JSON-LD, HTTP security headers, 404 handling, caching, compression, and mobile performance.
- [ ] Run HTML / CSS / JS validation and test current Safari, Firefox, Chrome, and mobile browsers.

All destinations, itineraries, prices, dates, availability, reviews, contacts, partners, guide profiles, accessibility information, and responsible-travel statements in this template are illustrative. This site does not make bookings, process payments, or store inquiry data.
