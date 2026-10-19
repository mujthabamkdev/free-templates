"use strict";

const root = document.documentElement;
root.classList.add("js");

const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = siteNav ? [...siteNav.querySelectorAll("a")] : [];
const mobileLayout = window.matchMedia("(max-width: 760px)");
let lastFocusedElement = null;

function setMenuState(isOpen, { restoreFocus = true } = {}) {
  if (!menuButton || !siteNav) return;
  const wasOpen = siteNav.classList.contains("is-open");
  siteNav.classList.toggle("is-open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  siteNav.setAttribute("aria-hidden", String(!isOpen));
  if (isOpen) {
    siteNav.removeAttribute("inert");
  } else {
    siteNav.setAttribute("inert", "");
  }
  document.body.classList.toggle("menu-open", isOpen && mobileLayout.matches);
  if (isOpen && !wasOpen) {
    lastFocusedElement = document.activeElement;
    navLinks[0]?.focus();
  } else if (!isOpen && wasOpen && restoreFocus) {
    const previousTarget = lastFocusedElement && document.contains(lastFocusedElement) && (lastFocusedElement !== menuButton || mobileLayout.matches) ? lastFocusedElement : null;
    const focusTarget = previousTarget || (mobileLayout.matches ? menuButton : document.querySelector(".brand"));
    focusTarget?.focus();
    lastFocusedElement = null;
  }
}

menuButton?.addEventListener("click", () => {
  setMenuState(menuButton.getAttribute("aria-expanded") !== "true");
});

navLinks.forEach((link) => link.addEventListener("click", () => setMenuState(false)));

document.addEventListener("keydown", (event) => {
  if (!siteNav?.classList.contains("is-open")) return;
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

mobileLayout.addEventListener("change", () => {
  if (!mobileLayout.matches) setMenuState(false);
});

setMenuState(false, { restoreFocus: false });

const demoForm = document.querySelector("#demo-form");
const demoSubmit = document.querySelector("#demo-submit");
const formStatus = document.querySelector("#form-status");

function showDemoMessage() {
  if (!demoForm || !formStatus || !demoForm.checkValidity()) {
    demoForm?.reportValidity();
    return;
  }
  const name = new FormData(demoForm).get("name");
  formStatus.textContent = `Demo only — thanks, ${name}. Connect /api/demo-request to enable submissions.`;
  demoForm.reset();
}

demoSubmit?.addEventListener("click", showDemoMessage);
demoForm?.addEventListener("submit", (event) => event.preventDefault());

const currentYear = document.querySelector("#current-year");
if (currentYear) currentYear.textContent = String(new Date().getFullYear());
