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
