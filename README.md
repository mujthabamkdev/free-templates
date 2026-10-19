# free-templates

Free to take professionally designed and structured React, JavaScript, and HTML website/app templates.

Every template follows the painter-pro-compatible structure:

```text
template/
├── index.html
├── template.json
├── site.config.js
├── legal.html
├── README.md
└── src/
    ├── css/style.css
    ├── js/main.js
    └── images/README.md
```

Open `index.html` through a static server. Configure brand, navigation, contact details, theme colours, and future form endpoints in `site.config.js`. Keep form endpoints blank until a reviewed backend is connected.

## Shared runtime features

Every template includes a dependency-free `src/js/main.js` runtime that supports:

- Config-driven brand name, title, author metadata, phone, email, logo, colours, and navigation.
- Optional absolute `http`/`https` form endpoint using `FormData`, `page`, `site_id`, and `origin` fields.
- Safe local demo mode when `formEndpoint` and `googleSheetUrl` are blank or invalid; no request is made.
- Loading, success, and error states for configured form submissions.
- `LIVE_PREVIEW_UPDATE` `postMessage` updates for brand, hero copy, contact details, colours, navigation, logo, and gallery assets.
- Gallery restoration when live-preview gallery updates are cleared.
- Reduced-motion-aware anchor navigation.

Runtime accepts either `contact.formEndpoint` or the sample-compatible `contact.googleSheetUrl`; use one reviewed endpoint, not both.

## Templates

- [Northstar SaaS / B2B landing page](templates/saas/) — standalone HTML, CSS, and vanilla JavaScript template with no dependencies.
- [Civic & Alder law firm](templates/law/) — restrained, responsive law-firm website with practice areas, attorney profiles, illustrative results, FAQ, and consultation intake form.
- [Morrow Clinic medical clinic](templates/medical/) — calm, responsive clinic website with services, care team, insurance guidance, patient journey, FAQ, locations, and privacy-safe appointment form.
- [Atelier Row real estate / property developer](templates/real-estate/) — premium editorial property website with illustrative listings, search filters, neighbourhood guide, buying process, FAQ, and inquiry form.
- [Kiteworks AI products](templates/ai/) — AI automation site with workflow visual, use cases, integrations, trust, pricing, FAQ, and demo-only consultation form.
- [Aegisline cybersecurity](templates/cybersecurity/) — security company site with posture, capabilities, trust signals, incident response, resources, FAQ, and demo-only form.
- [Fieldwork digital agency](templates/agency/) — agency site with services, selected work, process, industries, team, insights, FAQ, and project inquiry form.
- [Ledger & Co. accounting](templates/accounting/) — accounting and tax site with client services, planning visual, credentials, process, team, FAQ, and consultation form.
- [Northline Build Co. construction](templates/construction/) — remodeling and home-services site with estimate CTA, services, projects, process, service areas, FAQ, and demo form.
- [Morrow Dental](templates/dental/) — dental practice site with treatments, care team, results gallery, insurance, patient process, locations, FAQ, and demo appointment form.
- [Morrow Mental Health](templates/mental-health/) — therapy practice site with support areas, therapist profiles, care pathway, privacy-safe intake, FAQ, and crisis guidance.
- [Aurelia Med Spa](templates/med-spa/) — aesthetics site with treatments, practitioner credentials, illustrative results, consultation flow, expectations, and safety guidance.
- [Northline Studio Fitness](templates/fitness/) — wellness studio site with classes, memberships, timetable, coaches, locations, FAQ, and demo trial form.
- [Harborline Financial](templates/finance/) — advisor site with planning paths, illustrative payment explorer, trust disclosures, scenarios, FAQ, and demo consultation form.
- [Fieldhouse Talent](templates/recruitment/) — recruitment site with candidate/employer paths, sector filters, illustrative roles, process, FAQ, and demo forms.
- [Brightpath Studio](templates/education/) — course/coaching site with programs, curriculum, instructor proof, cohort details, pricing, FAQ, and demo enrollment form.
- [Good Common Goods](templates/ecommerce/) — DTC storefront with collections, filters, product detail, bundle/subscription content, returns, FAQ, and demo newsletter form.
- [Juniper & Salt](templates/restaurant/) — restaurant site with menu, dietary tags, gallery, locations, events, FAQ, and demo reservation form.
- [Hearthline House](templates/hotel/) — hotel site with illustrative availability, rooms, amenities, local guide, policies, FAQ, and demo booking inquiry.
- [Fieldwork Studio](templates/architecture/) — architecture/interiors site with portfolio, process, studio, awards, journal, FAQ, and demo inquiry.
- [Sunward Energy](templates/solar/) — solar installer site with illustrative savings explorer, services, process, incentives guidance, FAQ, and demo consultation.
- [Harbor Motors](templates/automotive/) — EV dealership site with inventory filters, ownership tools, finance/trade controls, service CTA, FAQ, and demo inquiry.
- [Northstar Freight](templates/logistics/) — logistics site with services, lanes, tracking preview, compliance, case proof, FAQ, and demo quote forms.
- [Common Ground Initiative](templates/nonprofit/) — nonprofit site with mission, programs, impact, stories, transparency, events, FAQ, and demo forms.
- [Harborline Property](templates/property-management/) — property management site with owner/tenant paths, portfolio, maintenance preview, services, FAQ, and demo forms.
- [Civic Services](templates/government/) — public-service site with service finder, announcements, eligibility guidance, records, FAQ, and demo request form.
- [Pawswell Veterinary](templates/veterinary/) — veterinary site with pet services, species pathways, preventive care, emergency guidance, FAQ, and demo appointment form.
- [Gather & Glow Events](templates/events/) — events and weddings site with event types, illustrative work, packages, process, FAQ, and demo inquiry.
- [The Quiet Atlas Travel](templates/travel/) — travel site with destination/season/pace filters, itineraries, responsible travel, FAQ, and demo trip inquiry.
