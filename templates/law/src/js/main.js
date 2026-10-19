"use strict";

const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuButton && siteNav) {
  const mobileQuery = window.matchMedia("(max-width: 760px)");
  let lastFocusedElement = null;

  const setMenuState = (isOpen) => {
    const mobile = mobileQuery.matches;
    const open = mobile && isOpen;
    siteNav.classList.toggle("is-open", open);
    siteNav.setAttribute("aria-hidden", String(mobile && !open));
    siteNav.inert = mobile && !open;
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    document.body.classList.toggle("menu-open", open);
  };

  const closeMenu = () => {
    setMenuState(false);
    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
      lastFocusedElement.focus();
    }
    lastFocusedElement = null;
  };

  const trapFocus = (event) => {
    if (event.key !== "Tab" || !siteNav.classList.contains("is-open")) return;
    const focusable = siteNav.querySelectorAll("a[href], button:not([disabled]), [tabindex]:not([tabindex=\"-1\"])");
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") !== "true";
    if (isOpen) lastFocusedElement = document.activeElement;
    setMenuState(isOpen);
    if (isOpen) siteNav.querySelector("a")?.focus();
  });
  siteNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
    trapFocus(event);
  });
  window.addEventListener("resize", () => setMenuState(false));
  setMenuState(false);
}

const form = document.querySelector("#consultation-form");
const formStatus = document.querySelector("#form-status");

if (form && formStatus) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = new FormData(form).get("fullName");
    const firstName = typeof name === "string" && name.trim() ? name.trim().split(/\s+/)[0] : "there";
    formStatus.textContent = `Demo only, ${firstName}: no information was sent or stored. Connect this form to a privacy-reviewed endpoint before launch.`;
    form.reset();
  });
}

const currentYear = document.querySelector("#current-year");
if (currentYear) currentYear.textContent = String(new Date().getFullYear());
