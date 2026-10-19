# Atelier Row — real-estate template

Standalone real-estate / property-developer website built with plain HTML, CSS, and vanilla JavaScript. No dependencies, build step, remote fonts, or external assets.

## Preview locally

From this directory:

```sh
python3 -m http.server 4173
```

Open <http://localhost:4173/templates/real-estate/> from the repository root, or open `index.html` directly in a browser. The static server is recommended so all relative links behave consistently.

## Included

- Responsive, semantic header with keyboard-friendly mobile navigation and skip link.
- CSS-generated architectural illustrations and inline content artwork; no image downloads required.
- Searchable/filterable illustrative property collection with type and availability controls.
- Approach showcase, neighbourhood guide, team proof, buying process, testimonial, FAQ accordion, and inquiry form.
- Client-side inquiry success state; form intentionally does not submit or store personal data.
- Reduced-motion styles, visible focus states, labelled controls, live status messages, and privacy/accessibility footer links.
- Search filters update as users type or select options, with a reset control and an empty result state.
- Open Graph, Twitter, canonical, and robots metadata use `atelierrow.example` placeholders for replacement.

## Customize

1. Replace the illustrative names, locations, prices, status labels, and copy in `index.html`.
2. Keep each `.property-card` `data-name`, `data-location`, `data-type`, and `data-status` value aligned with its visible content so filters continue to work.
3. Adjust colour, spacing, border, and shadow tokens near the top of `src/css/style.css`.
4. Replace CSS artwork elements with local `<img>` or inline SVG assets if desired. Keep meaningful image descriptions in `aria-label` or adjacent visible copy.
5. Connect `#inquiry-form` to your preferred form endpoint in `src/js/main.js`; remove the demo-only success wording and update the privacy copy.
6. Replace the canonical and social metadata URLs in `index.html` with your public site URL.
7. Update `title`, description, telephone, email, legal links, and footer details before publishing.

## Local checks

From this directory, run `node --check src/js/main.js`. Serve the folder with `python3 -m http.server 4173` and check `http://localhost:4173/` in a browser at desktop and narrow mobile widths. Confirm keyboard focus reaches the menu, filters, FAQ, and form; press `Escape` to close the mobile menu.

All property, pricing, resident, team, and contact details in this template are illustrative demo content and must be replaced before production use.
