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
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && siteNav.classList.contains("is-open")) closeMenu();
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 780 && siteNav.classList.contains("is-open")) closeMenu({ restoreFocus: false });
  });
}

const estimateForm = document.querySelector("#estimate-form");
const estimateStatus = document.querySelector("#estimate-status");
const estimateSubmit = document.querySelector("#estimate-submit");

if (estimateForm && estimateStatus && estimateSubmit) {
  const estimateFields = [...estimateForm.querySelectorAll("input, select, textarea")];

  estimateSubmit.addEventListener("click", () => {
    const invalidField = estimateFields.find((field) => !field.checkValidity());
    if (invalidField) {
      invalidField.reportValidity();
      return;
    }
    const name = String(estimateForm.querySelector("#estimate-name")?.value || "").trim();
    estimateStatus.textContent = `Thanks${name ? `, ${name}` : ""}. This demo request was not sent. Connect the form to your approved endpoint before publishing.`;
    estimateFields.forEach((field) => {
      field.value = field.defaultValue;
    });
  });
}

const currentYear = document.querySelector("#current-year");
if (currentYear) currentYear.textContent = String(new Date().getFullYear());
