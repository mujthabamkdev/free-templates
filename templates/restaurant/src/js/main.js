"use strict";

const root = document.documentElement;
root.classList.add("js");

const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = siteNav ? [...siteNav.querySelectorAll("a")] : [];
const mobileLayout = window.matchMedia("(max-width: 680px)");
let lastFocusedElement = null;

function setMenuState(isOpen, { restoreFocus = true } = {}) {
  if (!menuButton || !siteNav) return;
  siteNav.classList.toggle("is-open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  document.body.classList.toggle("menu-open", isOpen && mobileLayout.matches);
  if (isOpen) {
    lastFocusedElement = document.activeElement;
    navLinks[0]?.focus();
  } else if (restoreFocus) {
    (lastFocusedElement || menuButton).focus();
  }
}

menuButton?.addEventListener("click", () => {
  setMenuState(menuButton.getAttribute("aria-expanded") !== "true");
});

siteNav?.addEventListener("keydown", (event) => {
  if (!siteNav.classList.contains("is-open")) return;
  if (event.key === "Escape") {
    event.preventDefault();
    setMenuState(false);
    return;
  }
  if (event.key !== "Tab" || !mobileLayout.matches || navLinks.length === 0) return;
  const first = navLinks[0];
  const last = navLinks[navLinks.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

navLinks.forEach((link) => link.addEventListener("click", () => setMenuState(false, { restoreFocus: false })));
mobileLayout.addEventListener("change", () => {
  if (!mobileLayout.matches) setMenuState(false, { restoreFocus: false });
});

const tabs = [...document.querySelectorAll("[data-menu-tab]")];
const panels = [...document.querySelectorAll(".menu-panel")];
function selectMenuTab(tab, moveFocus = false) {
  const target = tab.dataset.menuTab;
  tabs.forEach((item) => item.setAttribute("aria-selected", String(item === tab)));
  panels.forEach((panel) => {
    const active = panel.id === `menu-${target}`;
    panel.hidden = !active;
    panel.classList.toggle("is-active", active);
  });
  if (moveFocus) tab.focus();
}
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectMenuTab(tab));
  tab.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : (index + (event.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
    selectMenuTab(tabs[next], true);
  });
});

const reservationForm = document.querySelector("#reservation-form");
const formStatus = document.querySelector("#form-status");
reservationForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!formStatus || !reservationForm.checkValidity()) {
    reservationForm?.reportValidity();
    return;
  }
  const name = new FormData(reservationForm).get("name");
  formStatus.textContent = `Demo only — thanks, ${name}. Connect /demo-reservation to receive this inquiry.`;
  reservationForm.reset();
});

const currentYear = document.querySelector("#current-year");
if (currentYear) currentYear.textContent = String(new Date().getFullYear());
(function siteConfigParity() {
  "use strict";

  var config = window.SITE_CONFIG || {};
  var brand = config.brand || {};
  var contact = config.contact || {};
  var root = document.documentElement;
  var primary = brand.primaryColor || config.primaryColor || "";
  var accent = brand.accentColor || config.accentColor || "";
  var defaults = {
    brandName: brand.name || "",
    heroTitle: document.querySelector("#hero-title")?.textContent || "",
    heroText: document.querySelector(".hero-lede, .hero-intro")?.textContent || "",
    phone: contact.phone || brand.phone || "",
    email: contact.email || brand.email || "",
    logo: brand.logo || config.logo || "",
    primaryColor: primary,
    accentColor: accent
  };
  var navItems = Array.isArray(config.navigation) ? config.navigation.slice() : [];
  var galleryRoot = document.querySelector("[data-config-gallery], .gallery-grid, [data-gallery]");
  var galleryDefault = galleryRoot ? galleryRoot.innerHTML : "";

  function validUrl(value, assets) {
    if (!value || typeof value !== "string") return false;
    try {
      var parsed = new URL(value, window.location.href);
      if (["http:", "https:"].indexOf(parsed.protocol) !== -1) return true;
      return !!assets && ["data:", "blob:"].indexOf(parsed.protocol) !== -1;
    } catch (error) { return false; }
  }

  function endpoint() {
    var value = contact.formEndpoint || contact.googleSheetUrl || "";
    return /^https?:\/\//i.test(value) && validUrl(value, false) ? value : "";
  }

  function setTheme(primaryColor, accentColor) {
    if (primaryColor) ["--primary-color", "--primaryColor", "--primary", "--coral", "--coral-dark", "--accent", "--lime", "--sun"].forEach(function (name) { root.style.setProperty(name, primaryColor); });
    if (accentColor) ["--accent-color", "--accentColor", "--accent-deep", "--forest", "--forest-deep", "--ink", "--ink-deep", "--navy", "--navy-deep", "--moss", "--moss-dark"].forEach(function (name) { root.style.setProperty(name, accentColor); });
  }

  function setMeta() {
    var name = brand.name || defaults.brandName;
    if (name) {
      document.title = name + (brand.tagline ? " — " + brand.tagline : "");
      var author = document.querySelector('meta[name="author"]');
      if (!author) { author = document.createElement("meta"); author.name = "author"; document.head.appendChild(author); }
      author.content = name;
    }
  }

  function setBrandName(name) {
    if (!name) return;
    document.querySelectorAll(".brand").forEach(function (element) {
      var copy = element.querySelector(".brand-copy");
      if (copy) {
        var strong = copy.querySelector("strong");
        if (strong) strong.textContent = name;
        copy.querySelectorAll("em").forEach(function (part) { part.remove(); });
        return;
      }
      var children = element.children;
      if (children.length) children[children.length - 1].textContent = name;
    });
  }

  function setLogo(value) {
    var source = typeof value === "string" ? value : value && (value.src || value.url);
    var safe = source && validUrl(source, true) ? source : "";
    var alt = value && typeof value === "object" ? value.alt || "" : "";
    document.querySelectorAll(".brand").forEach(function (brandElement) {
      var mark = brandElement.querySelector(".brand-mark");
      var current = brandElement.querySelector(".site-config-logo");
      if (current) current.remove();
      if (!safe) { if (mark) mark.hidden = false; return; }
      if (mark) mark.hidden = true;
      var image = document.createElement("img");
      image.className = "site-config-logo";
      image.src = safe;
      image.alt = alt;
      image.width = 36;
      image.height = 36;
      image.style.cssText = "width:2.25em;height:2.25em;object-fit:contain";
      brandElement.insertBefore(image, brandElement.firstChild);
    });
  }

  function setLinkValue(selector, value, scheme) {
    if (!value) return;
    document.querySelectorAll(selector).forEach(function (link) {
      link.setAttribute("href", scheme + (scheme === "tel:" ? value.replace(/[^+\d]/g, "") : value));
      var target = link.querySelector("strong") || link.querySelector("[data-config-value]");
      if (target) { target.textContent = value; return; }
      var walker = document.createTreeWalker(link, NodeFilter.SHOW_TEXT);
      var node;
      var last;
      while ((node = walker.nextNode())) if (node.nodeValue.trim()) last = node;
      if (last) last.nodeValue = value;
    });
  }

  function navigationTargets() {
    var seen = [];
    document.querySelectorAll("#desktop-nav, #mobile-nav, [data-config-nav]").forEach(function (target) { if (seen.indexOf(target) === -1) seen.push(target); });
    return seen;
  }

  function bindNavigation(target) {
    target.querySelectorAll(":scope > a").forEach(function (link) {
      if (link.dataset.configBound) return;
      link.dataset.configBound = "true";
      link.addEventListener("click", function () {
        target.classList.remove("is-open");
        document.body.classList.remove("menu-open");
        if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) root.style.scrollBehavior = "auto";
      });
    });
  }

  function renderNavigation(items) {
    var valid = (Array.isArray(items) ? items : []).filter(function (item) { return item && item.label && typeof item.href === "string"; });
    if (!valid.length) return;
    navigationTargets().forEach(function (target) {
      var existing = Array.prototype.slice.call(target.children).filter(function (child) { return child.tagName === "A"; });
      var cta = existing.find(function (link) { return link.classList.contains("nav-cta") || link.classList.contains("nav-cart"); });
      var cartCount = target.querySelector(".cart-count");
      valid.forEach(function (item, index) {
        var link = existing[index] || document.createElement("a");
        link.href = item.href;
        var preserved = Array.prototype.slice.call(link.children).filter(function (child) { return child.getAttribute("aria-hidden") === "true"; });
        link.textContent = String(item.label);
        preserved.forEach(function (child) { link.appendChild(child); });
        link.querySelectorAll(".cart-count").forEach(function (count) { if (String(item.label).toLowerCase() !== "cart") count.remove(); });
        if (String(item.label).toLowerCase() === "cart" && cartCount && !link.contains(cartCount)) link.appendChild(cartCount);
        if (index === valid.length - 1 && cta) link.className = cta.className;
        else if (index !== valid.length - 1 && (link.classList.contains("nav-cta") || link.classList.contains("nav-cart"))) link.className = "";
        if (!link.parentNode) target.appendChild(link);
      });
      existing.slice(valid.length).forEach(function (link) { link.remove(); });
      bindNavigation(target);
    });
  }

  function formStatus(form) {
    var status = form.querySelector('[data-config-form-status], .form-status, .form-feedback, [role="status"]');
    if (!status && form.parentElement) status = form.parentElement.querySelector('.form-status, .form-feedback, [role="status"]');
    if (!status) {
      status = document.createElement("p");
      status.className = "form-status";
      status.setAttribute("role", "status");
      status.setAttribute("aria-live", "polite");
      form.appendChild(status);
    }
    return status;
  }

  function setFormState(form, status, state, message) {
    status.textContent = message;
    status.classList.remove("is-loading", "is-success", "is-error");
    if (state) status.classList.add("is-" + state);
    form.setAttribute("aria-busy", state === "loading" ? "true" : "false");
  }

  function submitConfigured(form, event) {
    var url = endpoint();
    if (!url) return;
    if (event) { event.preventDefault(); event.stopImmediatePropagation(); }
    var status = formStatus(form);
    if (!form.checkValidity()) { setFormState(form, status, "error", "Complete required fields before sending."); form.reportValidity(); return; }
    var data = new FormData(form);
    data.set("page", window.location.pathname || "/");
    data.set("site_id", config.siteId || "");
    data.set("origin", window.location.origin || "");
    var controls = Array.prototype.slice.call(form.querySelectorAll("input, select, textarea, button"));
    var enabled = controls.filter(function (control) { return !control.disabled; });
    enabled.forEach(function (control) { control.disabled = true; });
    setFormState(form, status, "loading", "Sending…");
    window.fetch(url, { method: "POST", body: data }).then(function (response) {
      if (!response.ok) throw new Error("Request failed");
      form.reset();
      setFormState(form, status, "success", "Thanks — your message was sent.");
    }).catch(function () {
      setFormState(form, status, "error", "We could not send this yet. Please try again.");
    }).then(function () { enabled.forEach(function (control) { control.disabled = false; }); });
  }

  function wireForms() {
    document.querySelectorAll("form").forEach(function (form) {
      if (form.getAttribute("role") === "search") return;
      form.addEventListener("submit", function (event) { submitConfigured(form, event); }, true);
      form.querySelectorAll('button[type="button"]').forEach(function (button) {
        button.addEventListener("click", function (event) {
          if (endpoint()) submitConfigured(form, event);
        }, true);
      });
    });
  }

  function updateGallery(value) {
    if (!galleryRoot) return;
    var items = Array.isArray(value) ? value : value && Array.isArray(value.items) ? value.items : [];
    if (!items.length) { galleryRoot.innerHTML = galleryDefault; return; }
    var cards = Array.prototype.slice.call(galleryRoot.children);
    items.forEach(function (item, index) {
      var card = cards[index];
      if (!card) { card = document.createElement("figure"); card.className = "site-config-gallery-item"; galleryRoot.appendChild(card); cards.push(card); }
      card.hidden = false;
      var source = typeof item === "string" ? item : item && (item.src || item.url || item.image);
      var alt = typeof item === "object" && item ? item.alt || item.title || "" : "";
      if (source && validUrl(source, true)) {
        card.querySelectorAll("svg, .gallery-art").forEach(function (art) { art.remove(); });
        var image = card.querySelector("img") || document.createElement("img");
        image.src = source; image.alt = alt; image.style.cssText = "display:block;width:100%;height:100%;object-fit:cover";
        if (!image.parentNode) card.insertBefore(image, card.firstChild);
      }
      var label = typeof item === "object" && item ? item.title || item.label || "" : "";
      if (label) {
        var caption = card.querySelector("figcaption, h3, [data-gallery-title]");
        if (caption) caption.textContent = label;
      }
    });
    cards.slice(items.length).forEach(function (card) { card.hidden = true; });
  }

  function applyPreviewUpdate(raw) {
    if (!raw || typeof raw !== "object") return;
    var update = raw.payload && typeof raw.payload === "object" ? raw.payload : raw;
    if ("brandName" in update) { var name = update.brandName || defaults.brandName; brand.name = name; setBrandName(name); setMeta(); }
    if ("heroTitle" in update) document.querySelector("#hero-title")?.replaceChildren(document.createTextNode(update.heroTitle || defaults.heroTitle));
    if ("heroText" in update) document.querySelectorAll(".hero-lede, .hero-intro").forEach(function (node) { node.textContent = update.heroText || defaults.heroText; });
    if ("phone" in update) { contact.phone = update.phone || defaults.phone; setLinkValue('a[href^="tel:"]', contact.phone, "tel:"); }
    if ("email" in update) { contact.email = update.email || defaults.email; setLinkValue('a[href^="mailto:"]', contact.email, "mailto:"); }
    if ("logo" in update) setLogo(update.logo || defaults.logo);
    if ("primaryColor" in update) { primary = update.primaryColor || defaults.primaryColor; setTheme(primary, accent); }
    if ("accentColor" in update) { accent = update.accentColor || defaults.accentColor; setTheme(primary, accent); }
    if ("gallery" in update) updateGallery(update.gallery);
    if ("navigation" in update) renderNavigation(update.navigation && update.navigation.length ? update.navigation : navItems);
  }

  setTheme(primary, accent);
  setMeta();
  setBrandName(defaults.brandName);
  setLogo(defaults.logo);
  setLinkValue('a[href^="tel:"]', defaults.phone, "tel:");
  setLinkValue('a[href^="mailto:"]', defaults.email, "mailto:");
  renderNavigation(navItems);
  wireForms();
  window.addEventListener("message", function (event) {
    var data = event.data;
    if (data && (data.type === "LIVE_PREVIEW_UPDATE" || data.event === "LIVE_PREVIEW_UPDATE")) applyPreviewUpdate(data);
  });
}());
