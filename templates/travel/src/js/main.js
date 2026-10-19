(() => {
  'use strict';

  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('[data-nav]');
  const closeMenu = () => {
    if (!menuToggle || !nav) return;
    menuToggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  };

  if (menuToggle && nav) {
    const navLinks = [...nav.querySelectorAll('a')];
    const setMenu = (open) => {
      menuToggle.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('is-open', open);
      if (open) navLinks[0]?.focus();
    };
    menuToggle.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
    navLinks.forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('click', (event) => {
      if (!nav.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
    });
    document.addEventListener('keydown', (event) => {
      if (menuToggle.getAttribute('aria-expanded') !== 'true') return;
      if (event.key === 'Escape') {
        closeMenu();
        menuToggle.focus();
      }
      if (event.key === 'Tab' && navLinks.length) {
        const first = navLinks[0];
        const last = navLinks[navLinks.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    });
  }

  const tripCards = [...document.querySelectorAll('[data-trip-grid] .trip-card')];
  const filterButtons = [...document.querySelectorAll('[data-filter]')];
  const emptyState = document.querySelector('[data-empty-state]');
  const showTrips = ({ region = 'all', season = 'all', pace = 'all' } = {}) => {
    let shown = 0;
    tripCards.forEach((card) => {
      const seasons = (card.dataset.season || '').split(' ');
      const visible = (region === 'all' || card.dataset.region === region)
        && (season === 'all' || seasons.includes(season))
        && (pace === 'all' || card.dataset.pace === pace);
      card.hidden = !visible;
      if (visible) shown += 1;
    });
    if (emptyState) emptyState.hidden = shown > 0;
    filterButtons.forEach((button) => {
      const active = button.dataset.filter === region;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  };
  filterButtons.forEach((button) => button.addEventListener('click', () => showTrips({ region: button.dataset.filter })));

  const finderForm = document.querySelector('[data-finder-form]');
  const finderFeedback = document.querySelector('[data-finder-feedback]');
  finderForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const destination = finderForm.querySelector('#destination')?.value || 'all';
    const season = finderForm.querySelector('#season')?.value || 'all';
    const pace = finderForm.querySelector('#pace')?.value || 'all';
    showTrips({ region: destination, season, pace });
    const selections = [destination, season, pace]
      .filter((value) => value !== 'all')
      .map((value) => value.replace('-', ' '));
    if (finderFeedback) finderFeedback.textContent = selections.length
      ? `Showing illustrative journeys for ${selections.join(', ')}. No booking has been made.`
      : 'Showing every illustrative journey. No booking has been made.';
    document.querySelector('#trips')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  const reviews = [
    ['“Northline gave us a route, then enough room to make it ours. The best moments were the ones no itinerary could have predicted.”', 'Priya & Daniel', 'The quiet atlas'],
    ['“A beautifully human way to travel. We came home with new friends, muddy shoes, and a much longer list of places to return to.”', 'Maya R.', 'Under wide weather'],
    ['“The long lunch was not a detour. It was the trip. Every detail felt generous, grounded, and easy to be present for.”', 'Jon & Elise', 'Salt, stone, slow time']
  ];
  const quote = document.querySelector('[data-review-quote]');
  const reviewName = document.querySelector('[data-review-name]');
  const reviewTrip = document.querySelector('[data-review-trip]');
  const reviewCount = document.querySelector('[data-review-count]');
  let reviewIndex = 0;
  const showReview = (index) => {
    reviewIndex = (index + reviews.length) % reviews.length;
    const [text, name, trip] = reviews[reviewIndex];
    if (quote) quote.textContent = text;
    if (reviewName) reviewName.textContent = `— ${name}`;
    if (reviewTrip) reviewTrip.textContent = `Illustrative guest review · ${trip}`;
    if (reviewCount) reviewCount.textContent = `0${reviewIndex + 1} / 0${reviews.length}`;
  };
  document.querySelector('[data-review-prev]')?.addEventListener('click', () => showReview(reviewIndex - 1));
  document.querySelector('[data-review-next]')?.addEventListener('click', () => showReview(reviewIndex + 1));

  const inquiryForm = document.querySelector('[data-inquiry-form]');
  const inquiryFeedback = document.querySelector('[data-inquiry-feedback]');
  inquiryForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!inquiryForm.reportValidity()) return;
    if (inquiryFeedback) inquiryFeedback.textContent = 'Demo preview ready. Nothing was sent or saved.';
  });

  document.querySelectorAll('[data-trip-detail]').forEach((button) => button.addEventListener('click', () => {
    const trip = button.closest('.trip-card')?.querySelector('h3')?.textContent || 'this journey';
    const select = document.querySelector('#trip-interest');
    if (select) {
      const optionIndex = [...select.options].findIndex((option) => option.textContent.toLowerCase().includes(trip.toLowerCase().split(':')[0]));
      if (optionIndex >= 0) select.selectedIndex = optionIndex;
    }
    document.querySelector('#inquiry')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }));

  const year = document.querySelector('[data-year]');
  if (year) year.textContent = String(new Date().getFullYear());
})();

/* painter-pro runtime: isolated config bridge for live previews and approved forms. */
(() => {
  "use strict";
  const runtime = window.__PAINTER_PRO_RUNTIME__ || (window.__PAINTER_PRO_RUNTIME__ = {});
  if (runtime.initialized) return; runtime.initialized = true;
  let config = window.SITE_CONFIG || {};
  const root = document.documentElement, gallery = document.querySelector("[data-config-gallery], .gallery-grid"), galleryDefault = gallery ? gallery.innerHTML : "";
  const text = (value) => typeof value === "string" ? value.trim() : "";
  const brand = () => config.brand && typeof config.brand === "object" ? config.brand : {};
  const value = (name, fallback = "") => text(config[name]) || text(brand()[name]) || text((config.contact || {})[name]) || fallback;
  const has = (object, key) => Object.prototype.hasOwnProperty.call(object, key);
  const endpoint = () => { const candidate = text((config.contact || {}).formEndpoint) || text((config.contact || {}).googleSheetUrl); if (!candidate) return ""; try { const url = new URL(candidate); return /^https?:$/.test(url.protocol) ? url.href : ""; } catch (_) { return ""; } };
  const utilityForm = (form) => form.matches('[role="search"], #service-search, #tracking-form, #property-search, [id*="filter"], [class*="filter"], [id*="finder"], [class*="finder"], [id*="availability"]');
  function setColors() { const primary = value("primaryColor"), accent = value("accentColor"); if (primary) ["--primary-color", "--primary", "--brand-primary", "--coral", "--clay", "--sun", "--amber", "--blue"].forEach((name) => root.style.setProperty(name, primary)); if (accent) ["--accent-color", "--accent", "--brand-accent", "--teal", "--green", "--forest", "--navy", "--deep", "--green-deep"].forEach((name) => root.style.setProperty(name, accent)); }
  function setBrand() { const name = value("name"); if (name) { document.querySelectorAll("[data-config-brand], .brand .brand-name, .brand > span:not(.brand-mark):not(.brand-symbol)").forEach((node) => { if (!node.querySelector("svg") && !node.classList.contains("brand-mark") && !node.classList.contains("brand-symbol")) node.textContent = name; }); document.querySelectorAll(".brand").forEach((node) => node.setAttribute("aria-label", `${name} home`)); document.title = text(config.title) || `${name}${value("tagline") ? ` — ${value("tagline")}` : ""}`; let author = document.querySelector('meta[name="author"]'); if (!author) { author = document.createElement("meta"); author.name = "author"; document.head.appendChild(author); } author.content = name; } const logo = config.logo !== undefined ? config.logo : brand().logo, src = text(typeof logo === "object" ? logo?.src : logo); document.querySelectorAll("[data-painter-logo]").forEach((node) => { if (!src) node.remove(); }); if (!src) return; document.querySelectorAll("[data-config-logo], .brand").forEach((node) => { let image = node.querySelector("img[data-painter-logo]"); if (!image) { image = document.createElement("img"); image.dataset.painterLogo = "true"; node.prepend(image); } image.src = src; image.alt = typeof logo === "object" && text(logo.alt) ? logo.alt : name; }); }
  function setContact() { const phone = value("phone"), email = value("email"); if (phone) document.querySelectorAll('a[href^="tel:"]').forEach((link) => { link.href = `tel:${phone.replace(/[^\d+]/g, "")}`; if (!link.children.length) link.textContent = phone; }); if (email) document.querySelectorAll('a[href^="mailto:"]').forEach((link) => { link.href = `mailto:${email}`; if (!link.children.length) link.textContent = email; }); }
  function navTargets() { const explicit = [...document.querySelectorAll("#desktop-nav, #mobile-nav, [data-config-nav]")]; if (explicit.length) return explicit; if (document.querySelector(".legal-content, .legal-hero, .legal-page, .legal-layout")) return []; return [...document.querySelectorAll("#site-nav, .site-nav, #primary-nav, .primary-nav")].slice(0, 1); }
  function renderNavigation() { document.querySelectorAll("[data-painter-nav-link]").forEach((node) => node.remove()); const items = Array.isArray(config.navigation) ? config.navigation : []; navTargets().forEach((target) => items.forEach((item) => { if (!item || !text(item.label) || !text(item.href)) return; const link = document.createElement("a"); link.href = text(item.href); link.textContent = text(item.label); link.dataset.painterNavLink = "true"; target.appendChild(link); })); }
  function renderGallery(items) { if (!gallery) return; if (!Array.isArray(items) || !items.length) { gallery.innerHTML = galleryDefault; return; } gallery.replaceChildren(...items.map((item) => { const card = document.createElement("article"); card.className = "gallery-card"; const src = text(typeof item === "object" ? item.src || item.url : item), label = text(typeof item === "object" ? item.alt || item.title : "") || "Gallery image"; if (src) { const image = document.createElement("img"); image.src = src; image.alt = label; image.loading = "lazy"; card.appendChild(image); } const caption = text(typeof item === "object" ? item.title : ""); if (caption) { const heading = document.createElement("p"); heading.textContent = caption; card.appendChild(heading); } return card; })); }
  function statusFor(form) { let status = form.querySelector('.form-status, [id$="status"], [id$="feedback"]'); if (!status) { status = document.createElement("p"); status.className = "form-status"; status.setAttribute("role", "status"); status.setAttribute("aria-live", "polite"); form.appendChild(status); } return status; }
  async function submitConfigured(form) { const url = endpoint(); if (!url || utilityForm(form)) return; const status = statusFor(form); if (!form.checkValidity()) { form.reportValidity?.(); status.textContent = "Please complete required fields before continuing."; status.dataset.state = "error"; return; } const button = form.querySelector("button[type=submit], button[type=button]"), data = new FormData(form); data.append("page", window.location.pathname || "/"); data.append("site_id", text(config.siteId)); data.append("origin", window.location.origin || ""); status.textContent = "Sending…"; status.dataset.state = "loading"; form.setAttribute("aria-busy", "true"); if (button) button.disabled = true; try { const response = await fetch(url, { method: "POST", body: data }); if (!response.ok) throw new Error(`HTTP ${response.status}`); status.textContent = "Thanks — your message was sent."; status.dataset.state = "success"; form.reset(); } catch (_) { status.textContent = "We could not send your message. Please try again."; status.dataset.state = "error"; } finally { form.removeAttribute("aria-busy"); if (button) button.disabled = false; } }
  document.addEventListener("submit", (event) => { if (!endpoint() || !(event.target instanceof HTMLFormElement) || utilityForm(event.target)) return; event.preventDefault(); event.stopImmediatePropagation(); void submitConfigured(event.target); }, true);
  document.addEventListener("click", (event) => { if (!endpoint()) return; const button = event.target.closest?.("button[type=button]"), form = button?.closest("form"); if (!button || !form || utilityForm(form)) return; event.preventDefault(); event.stopImmediatePropagation(); void submitConfigured(form); }, true);
  document.addEventListener("click", (event) => { const link = event.target.closest?.('a[href^="#"]'); if (!link || event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return; const selector = link.getAttribute("href"); if (!selector || selector === "#") return; let target; try { target = document.querySelector(selector); } catch (_) { return; } if (!target) return; event.preventDefault(); target.scrollIntoView({ behavior: window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" }); }, true);
  function apply(next) { if (!next || typeof next !== "object") return; const nextBrand = next.brand && typeof next.brand === "object" ? next.brand : {}; config = { ...config, ...next, brand: { ...brand(), ...nextBrand }, contact: { ...(config.contact || {}), ...(next.contact || {}) } }; if (has(next, "brandName")) config.brand.name = text(next.brandName); if (has(next, "phone")) config.contact.phone = text(next.phone); if (has(next, "email")) config.contact.email = text(next.email); ["heroTitle", "heroText", "primaryColor", "accentColor", "logo"].forEach((key) => { if (has(next, key)) config[key] = next[key]; }); if (has(next, "heroTitle")) document.querySelector("#hero-title, [data-config-hero-title]")?.replaceChildren(document.createTextNode(text(config.heroTitle))); if (has(next, "heroText")) document.querySelector(".hero-lede, .hero-intro, [data-config-hero-text]")?.replaceChildren(document.createTextNode(text(config.heroText))); setColors(); setBrand(); setContact(); renderNavigation(); if (has(next, "gallery")) renderGallery(next.gallery); }
  window.addEventListener("message", (event) => { const data = event.data && typeof event.data === "object" ? event.data : null; if (data && (data.type === "LIVE_PREVIEW_UPDATE" || data.event === "LIVE_PREVIEW_UPDATE")) apply(data.config || data.payload || data); });
  apply(config);
})();
