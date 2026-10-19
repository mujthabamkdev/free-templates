"use strict";

const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuButton && siteNav) {
  const navLinks = [...siteNav.querySelectorAll("a")];
  let lastFocusedElement = null;

  function closeMenu({ restoreFocus = true } = {}) {
    siteNav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
    document.body.classList.remove("menu-open");
    if (restoreFocus && lastFocusedElement) lastFocusedElement.focus();
    lastFocusedElement = null;
  }

  function openMenu() {
    lastFocusedElement = document.activeElement;
    siteNav.classList.add("is-open");
    menuButton.setAttribute("aria-expanded", "true");
    menuButton.setAttribute("aria-label", "Close navigation");
    document.body.classList.add("menu-open");
    navLinks[0]?.focus();
  }

  menuButton.addEventListener("click", () => {
    if (menuButton.getAttribute("aria-expanded") === "true") closeMenu();
    else openMenu();
  });
  navLinks.forEach((link) => link.addEventListener("click", () => closeMenu({ restoreFocus: false })));
  siteNav.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      closeMenu();
      return;
    }
    if (event.key !== "Tab" || !siteNav.classList.contains("is-open")) return;
    const firstLink = navLinks[0];
    const lastLink = navLinks[navLinks.length - 1];
    if (event.shiftKey && document.activeElement === firstLink) {
      event.preventDefault();
      lastLink.focus();
    } else if (!event.shiftKey && document.activeElement === lastLink) {
      event.preventDefault();
      firstLink.focus();
    }
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 780 && siteNav.classList.contains("is-open")) closeMenu({ restoreFocus: false });
  });
}

const billRange = document.querySelector("#bill-range");
const sunRange = document.querySelector("#sun-range");
const billOutput = document.querySelector("#bill-output");
const sunOutput = document.querySelector("#sun-output");
const offsetResult = document.querySelector("#offset-result");
const resultBarFill = document.querySelector("#result-bar-fill");
const calcCopy = document.querySelector("#calc-copy");
const sunLabels = { 1: "Some shade", 2: "Good", 3: "Excellent" };

function updateCalculator() {
  if (!billRange || !sunRange || !billOutput || !sunOutput || !offsetResult || !resultBarFill || !calcCopy) return;
  const bill = Number(billRange.value);
  const sun = Number(sunRange.value);
  const offset = Math.min(92, Math.max(28, Math.round(34 + bill / 22 + sun * 9)));
  billOutput.textContent = `$${bill}`;
  sunOutput.textContent = sunLabels[sun];
  offsetResult.textContent = `${offset}%`;
  resultBarFill.style.width = `${offset}%`;
  calcCopy.textContent = sun === 1 ? "A shaded roof may need a closer site review and a different system shape." : sun === 3 ? "A strong starting profile for exploring solar and storage options." : "A good starting profile for exploring solar with storage.";
}

[billRange, sunRange].forEach((control) => control?.addEventListener("input", updateCalculator));
updateCalculator();

const consultationForm = document.querySelector("#consultation-form");
const consultationStatus = document.querySelector("#consultation-status");
if (consultationForm && consultationStatus) {
  const consultationSubmit = consultationForm.querySelector("button[type='button']");
  consultationSubmit?.addEventListener("click", () => {
    if (!consultationForm.checkValidity()) {
      consultationForm.reportValidity();
      return;
    }
    const name = String(consultationForm.querySelector("#consultation-name")?.value || "").trim();
    consultationStatus.textContent = `Thanks${name ? `, ${name}` : ""}. This demo request was not sent. Connect an approved endpoint before publishing.`;
    consultationForm.reset();
  });
}

const currentYear = document.querySelector("#current-year");
if (currentYear) currentYear.textContent = String(new Date().getFullYear());
