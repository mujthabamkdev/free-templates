"use strict";

const root = document.documentElement;
root.classList.add("js");

const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");
const mobileLayout = window.matchMedia("(max-width: 760px)");
let lastFocusedElement = null;

function menuLinks() {
  return siteNav ? [...siteNav.querySelectorAll("a")] : [];
}

function menuFocusables() {
  return menuButton ? [menuButton, ...menuLinks()] : menuLinks();
}

function setMenuState(isOpen, { restoreFocus = true } = {}) {
  if (!menuButton || !siteNav) return;
  siteNav.classList.toggle("is-open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  document.body.classList.toggle("menu-open", isOpen && mobileLayout.matches);

  if (isOpen) {
    lastFocusedElement = document.activeElement;
    menuLinks()[0]?.focus();
  } else if (restoreFocus) {
    (lastFocusedElement || menuButton).focus();
  }
}

menuButton?.addEventListener("click", () => {
  setMenuState(menuButton.getAttribute("aria-expanded") !== "true");
});

siteNav?.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenuState(false);
});

document.addEventListener("keydown", (event) => {
  if (!siteNav?.classList.contains("is-open")) return;
  const links = menuLinks();
  if (event.key === "Escape") {
    event.preventDefault();
    setMenuState(false);
    return;
  }
  if (event.key !== "Tab" || !mobileLayout.matches || links.length === 0) return;
  const focusables = menuFocusables();
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

function closeMenuForViewport() {
  if (!mobileLayout.matches && siteNav?.classList.contains("is-open")) {
    setMenuState(false, { restoreFocus: false });
  }
}

mobileLayout.addEventListener("change", closeMenuForViewport);
window.addEventListener("resize", closeMenuForViewport);

const consultationForm = document.querySelector("#consultation-form");
const consultationFields = document.querySelector("#consultation-fields");
const formStatus = document.querySelector("#form-status");

consultationFields?.removeAttribute("disabled");

consultationForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!formStatus) return;
  if (!consultationForm.checkValidity()) {
    formStatus.textContent = "Please complete required fields before continuing.";
    consultationForm.reportValidity();
    return;
  }
  const name = new FormData(consultationForm).get("name");
  formStatus.textContent = `Demo only — thanks, ${name}. Connect /api/consultations to send this inquiry.`;
  consultationForm.reset();
});

const currentYear = document.querySelector("#current-year");
if (currentYear) currentYear.textContent = String(new Date().getFullYear());
