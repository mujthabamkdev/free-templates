(function () {
  'use strict';

  document.documentElement.classList.add('js');

  var menuButton = document.querySelector('.menu-toggle');
  var nav = document.getElementById('primary-nav');
  var searchForm = document.getElementById('service-search');
  var queryInput = document.getElementById('service-query');
  var cards = Array.prototype.slice.call(document.querySelectorAll('.service-card'));
  var noResults = document.getElementById('no-results');
  var searchStatus = document.getElementById('search-status');
  var requestForm = document.querySelector('.request-form');
  var requestPreview = document.getElementById('request-preview');
  var requestFeedback = document.getElementById('request-feedback');

  function closeMenu() {
    if (!menuButton || !nav) return;
    menuButton.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  }

  if (menuButton && nav) {
    menuButton.addEventListener('click', function () {
      var isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      nav.classList.toggle('is-open', !isOpen);
      if (!isOpen) nav.querySelector('a').focus();
    });

    nav.addEventListener('click', function (event) {
      if (event.target.tagName === 'A') closeMenu();
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        menuButton.focus();
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 700) closeMenu();
    });
  }

  function filterServices() {
    var query = queryInput.value.trim().toLowerCase();
    var visible = 0;
    cards.forEach(function (card) {
      var searchable = (card.dataset.service + ' ' + card.textContent).toLowerCase();
      var matches = !query || searchable.indexOf(query) !== -1;
      card.hidden = !matches;
      if (matches) visible += 1;
    });
    noResults.hidden = visible !== 0;
    searchStatus.textContent = query
      ? visible + ' service' + (visible === 1 ? '' : 's') + ' found for “' + query + '”.'
      : 'Popular: permits · trash collection · benefits';
  }

  if (searchForm && queryInput) {
    queryInput.addEventListener('input', filterServices);
    searchForm.addEventListener('submit', function (event) {
      event.preventDefault();
      filterServices();
      document.getElementById('service-directory').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  if (requestForm && requestPreview && requestFeedback) {
    requestPreview.addEventListener('click', function () {
      if (!requestForm.checkValidity()) {
        requestForm.reportValidity();
        return;
      }
      requestFeedback.hidden = false;
      requestFeedback.focus();
    });
  }
}());

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
