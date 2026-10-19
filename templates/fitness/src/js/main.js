(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  const navLinks = nav ? [...nav.querySelectorAll('a')] : [];
  const form = document.querySelector('#trial-form');
  const status = document.querySelector('#form-status');
  const year = document.querySelector('#year');

  const closeMenu = () => {
    if (!nav || !menuButton) return;
    nav.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    document.body.classList.remove('menu-open');
  };

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!open));
      menuButton.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
      nav.classList.toggle('is-open', !open);
      document.body.classList.toggle('menu-open', !open);
      if (!open) navLinks[0]?.focus();
    });
    navLinks.forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) {
        closeMenu();
        menuButton.focus();
      }
      if (event.key === 'Tab' && nav.classList.contains('is-open') && navLinks.length) {
        const first = navLinks[0];
        const last = navLinks[navLinks.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    });
  }

  if (form && status) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      status.textContent = 'Demo only: request previewed. Connect a secure booking workflow before launch.';
    });
  }

  if (year) year.textContent = String(new Date().getFullYear());
})();
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
