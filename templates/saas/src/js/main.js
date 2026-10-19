"use strict";

const root = document.documentElement;
root.classList.add("js");

const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = siteNav ? [...siteNav.querySelectorAll("a")] : [];
const mobileLayout = window.matchMedia("(max-width: 820px)");
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

function handleMenuKeydown(event) {
  if (!siteNav?.classList.contains("is-open")) return;

  if (event.key === "Escape") {
    event.preventDefault();
    setMenuState(false);
    return;
  }

  if (event.key !== "Tab" || !mobileLayout.matches || navLinks.length === 0) return;

  const firstLink = navLinks[0];
  const lastLink = navLinks[navLinks.length - 1];

  if (event.shiftKey && document.activeElement === firstLink) {
    event.preventDefault();
    lastLink.focus();
  } else if (!event.shiftKey && document.activeElement === lastLink) {
    event.preventDefault();
    firstLink.focus();
  }
}

menuButton?.addEventListener("click", () => {
  const shouldOpen = menuButton.getAttribute("aria-expanded") !== "true";
  setMenuState(shouldOpen);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => setMenuState(false, { restoreFocus: false }));
});

document.addEventListener("keydown", handleMenuKeydown);

mobileLayout.addEventListener("change", () => {
  if (!mobileLayout.matches) setMenuState(false, { restoreFocus: false });
});

const billingToggle = document.querySelector("#billing-toggle");
const priceCards = [...document.querySelectorAll(".price-card")];

function setBillingPeriod(isYearly) {
  billingToggle?.setAttribute("aria-pressed", String(isYearly));
  priceCards.forEach((card) => card.classList.toggle("yearly", isYearly));
}

billingToggle?.addEventListener("click", () => {
  const isYearly = billingToggle.getAttribute("aria-pressed") !== "true";
  setBillingPeriod(isYearly);
});

setBillingPeriod(billingToggle?.getAttribute("aria-pressed") === "true");

const trialForm = document.querySelector("#trial-form");
const formStatus = document.querySelector("#form-status");

trialForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!formStatus || !trialForm.checkValidity()) return;

  const email = new FormData(trialForm).get("email");
  formStatus.textContent = `Demo only — connect /api/trial-signups to send an invite to ${email}.`;
  trialForm.reset();
});

const currentYear = document.querySelector("#current-year");
if (currentYear) currentYear.textContent = String(new Date().getFullYear());

/* painter-pro runtime: deliberately isolated from template interactions. */
(() => {
  "use strict";
  const runtime = window.__PAINTER_PRO_RUNTIME__ || (window.__PAINTER_PRO_RUNTIME__ = {});
  if (runtime.initialized) return;
  runtime.initialized = true;
  let config = window.SITE_CONFIG || {};
  const root = document.documentElement;
  const gallery = document.querySelector("[data-config-gallery], .gallery-grid");
  const galleryDefault = gallery ? gallery.innerHTML : "";

  const text = (value) => typeof value === "string" ? value.trim() : "";
  const brand = () => config.brand || {};
  const value = (name, fallback = "") => text(config[name]) || text(brand()[name]) || text((config.contact || {})[name]) || fallback;
  const endpoint = () => {
    const candidate = text((config.contact || {}).formEndpoint) || text((config.contact || {}).googleSheetUrl);
    if (!candidate) return "";
    try {
      const url = new URL(candidate, window.location.href);
      return /^https?:$/.test(url.protocol) && /^https?:$/.test(new URL(candidate).protocol) ? url.href : "";
    } catch (_) { return ""; }
  };

  function setColors() {
    const primary = value("primaryColor");
    const accent = value("accentColor");
    if (primary) ["--primary-color", "--primary", "--brand-primary"].forEach((name) => root.style.setProperty(name, primary));
    if (accent) ["--accent-color", "--accent", "--brand-accent"].forEach((name) => root.style.setProperty(name, accent));
  }

  function setBrand() {
    const name = value("name");
    if (name) {
      document.querySelectorAll("[data-config-brand], .brand .brand-name, .brand > span:not(.brand-mark):not(.brand-symbol)").forEach((node) => {
        if (!node.querySelector("svg") && !node.classList.contains("brand-mark") && !node.classList.contains("brand-symbol")) node.textContent = name;
      });
      document.querySelectorAll(".brand").forEach((node) => node.setAttribute("aria-label", `${name} home`));
      document.title = text(config.title) || `${name}${value("tagline") ? ` — ${value("tagline")}` : ""}`;
      let author = document.querySelector('meta[name="author"]');
      if (!author) { author = document.createElement("meta"); author.name = "author"; document.head.appendChild(author); }
      author.content = name;
    }
    const logo = config.logo || brand().logo;
    if (logo) {
      const src = text(typeof logo === "object" ? logo.src : logo);
      if (src) document.querySelectorAll("[data-config-logo], .brand").forEach((node) => {
        let image = node.querySelector("img[data-painter-logo]");
        if (!image) { image = document.createElement("img"); image.dataset.painterLogo = "true"; node.prepend(image); }
        image.src = src; image.alt = typeof logo === "object" && text(logo.alt) ? logo.alt : name;
      });
    }
  }

  function setContact() {
    const phone = value("phone");
    const email = value("email");
    if (phone) document.querySelectorAll('a[href^="tel:"]').forEach((link) => {
      link.href = `tel:${phone.replace(/[^\d+]/g, "")}`;
      const target = link.querySelector("strong") || (!link.children.length ? link : null);
      if (target) target.textContent = phone;
    });
    if (email) document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
      link.href = `mailto:${email}`;
      if (!link.children.length) link.textContent = email;
    });
  }

  function renderNavigation() {
    document.querySelectorAll("[data-painter-nav-link]").forEach((node) => node.remove());
    const items = Array.isArray(config.navigation) ? config.navigation : [];
    if (!items.length || /(?:^|\/)legal\.html(?:$|[?#])/.test(window.location.href)) return;
    let targets = [...document.querySelectorAll("#desktop-nav, #mobile-nav, [data-config-nav]")];
    if (!targets.length) targets = [...document.querySelectorAll(".site-nav")];
    targets.forEach((target) => items.forEach((item) => {
      const label = text(item?.label); const href = text(item?.href);
      if (!label || !href) return;
      const exists = [...target.querySelectorAll("a")].some((node) => text(node.textContent) === label && node.getAttribute("href") === href);
      if (exists) return;
      const link = document.createElement("a");
      link.href = href; link.textContent = label; link.dataset.painterNavLink = "true";
      target.appendChild(link);
    }));
  }

  function renderGallery(items) {
    if (!gallery) return;
    if (!Array.isArray(items) || !items.length) { gallery.innerHTML = galleryDefault; return; }
    gallery.replaceChildren(...items.map((item) => {
      const card = document.createElement("article"); card.className = "gallery-card";
      const src = text(typeof item === "object" ? item.src || item.url : item);
      const label = text(typeof item === "object" ? item.alt || item.title : "") || "Gallery image";
      if (src) { const image = document.createElement("img"); image.src = src; image.alt = label; image.loading = "lazy"; card.appendChild(image); }
      const caption = text(typeof item === "object" ? item.title : "");
      if (caption) { const heading = document.createElement("p"); heading.textContent = caption; card.appendChild(heading); }
      return card;
    }));
  }

  function statusFor(form) { return form.querySelector(".form-status, [id$=\"status\"]"); }
  async function submitConfigured(form) {
    const url = endpoint();
    if (!url) return;
    const status = statusFor(form);
    if (!form.checkValidity()) { form.reportValidity?.(); if (status) status.textContent = "Please complete required fields before continuing."; return; }
    const data = new FormData(form);
    data.append("page", window.location.pathname || "/");
    data.append("site_id", text(config.siteId));
    data.append("origin", window.location.origin || "");
    if (status) { status.textContent = "Sending…"; status.dataset.state = "loading"; }
    try {
      const response = await fetch(url, { method: "POST", body: data });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      if (status) { status.textContent = "Thanks — your message was sent."; status.dataset.state = "success"; }
      form.reset();
    } catch (_) {
      if (status) { status.textContent = "We could not send your message. Please try again."; status.dataset.state = "error"; }
    }
  }

  document.addEventListener("submit", (event) => {
    if (!endpoint() || !(event.target instanceof HTMLFormElement)) return;
    event.preventDefault(); event.stopImmediatePropagation(); void submitConfigured(event.target);
  }, true);
  document.addEventListener("click", (event) => {
    if (!endpoint()) return;
    const button = event.target.closest?.("button[type=button]");
    const form = button?.closest("form, [role=form]");
    if (!button || !form) return;
    event.preventDefault(); event.stopImmediatePropagation(); void submitConfigured(form);
  }, true);

  document.addEventListener("click", (event) => {
    const link = event.target.closest?.('a[href^="#"]');
    if (!link) return;
    const href = link.getAttribute("href");
    if (!href || href === "#") return;
    let target;
    try { target = document.querySelector(href); } catch (_) { return; }
    if (!target) return;
    event.preventDefault();
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
    if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  });

  function apply(next) {
    if (!next || typeof next !== "object") return;
    const has = (key) => Object.prototype.hasOwnProperty.call(next, key);
    const nextBrand = next.brand && typeof next.brand === "object" ? next.brand : {};
    config = { ...config, ...next, brand: { ...brand(), ...nextBrand }, contact: { ...(config.contact || {}), ...(next.contact || {}) } };
    if (has("brandName")) config.brand.name = text(next.brandName);
    if (has("phone")) { config.brand.phone = text(next.phone); config.contact.phone = text(next.phone); }
    if (has("email")) { config.brand.email = text(next.email); config.contact.email = text(next.email); }
    ["heroTitle", "heroText", "primaryColor", "accentColor", "logo"].forEach((key) => { if (has(key)) config[key] = next[key]; });
    const titleNode = document.querySelector("#hero-title, [data-config-hero-title]");
    const copyNode = document.querySelector(".hero-lede, .hero-intro, [data-config-hero-text]");
    if (!Object.prototype.hasOwnProperty.call(runtime, "heroTitleDefault")) {
      runtime.heroTitleDefault = titleNode?.innerHTML || "";
      runtime.heroTextDefault = copyNode?.innerHTML || "";
    }
    const title = text(config.heroTitle); const copy = text(config.heroText);
    if (title) titleNode?.replaceChildren(document.createTextNode(title));
    else if (titleNode) titleNode.innerHTML = runtime.heroTitleDefault;
    if (copy) copyNode?.replaceChildren(document.createTextNode(copy));
    else if (copyNode) copyNode.innerHTML = runtime.heroTextDefault;
    setColors(); setBrand(); setContact(); renderNavigation();
    if (has("logo") && !text(config.logo) && !text(brand().logo)) document.querySelectorAll("img[data-painter-logo]").forEach((node) => node.remove());
    if (has("primaryColor") && !text(config.primaryColor)) ["--primary-color", "--primary", "--brand-primary"].forEach((name) => root.style.removeProperty(name));
    if (has("accentColor") && !text(config.accentColor)) ["--accent-color", "--accent", "--brand-accent"].forEach((name) => root.style.removeProperty(name));
    if (has("gallery")) renderGallery(next.gallery);
  }

  window.addEventListener("message", (event) => {
    const data = event.data && typeof event.data === "object" ? event.data : null;
    if (data && (data.type === "LIVE_PREVIEW_UPDATE" || data.event === "LIVE_PREVIEW_UPDATE")) apply(data.config || data.payload || data);
  });
  apply(config);
})();
