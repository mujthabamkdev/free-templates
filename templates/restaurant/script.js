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
