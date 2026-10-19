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
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    if (isOpen) closeMenu();
    else openMenu();
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => closeMenu({ restoreFocus: false }));
  });

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

const propertySearch = document.querySelector("#property-search");
const propertyCards = [...document.querySelectorAll(".property-card")];
const filterStatus = document.querySelector("#filter-status");
const emptyState = document.querySelector("#empty-state");
const keywordInput = document.querySelector("#property-keyword");
const typeInput = document.querySelector("#property-type");
const statusInput = document.querySelector("#property-status");

function filterProperties() {
  if (!keywordInput || !typeInput || !statusInput) return;
  const keyword = keywordInput.value.trim().toLowerCase();
  const type = typeInput.value;
  const status = statusInput.value;
  let visibleCount = 0;

  propertyCards.forEach((card) => {
    const searchableText = card.textContent.toLowerCase();
    const matchesKeyword = !keyword || searchableText.includes(keyword);
    const matchesType = type === "all" || card.dataset.type === type;
    const matchesStatus = status === "all" || card.dataset.status === status;
    const isVisible = matchesKeyword && matchesType && matchesStatus;
    card.hidden = !isVisible;
    if (isVisible) visibleCount += 1;
  });

  if (filterStatus) {
    filterStatus.textContent = `Showing ${visibleCount} illustrative ${visibleCount === 1 ? "residence" : "residences"}`;
  }
  if (emptyState) emptyState.hidden = visibleCount !== 0;
}

if (propertySearch) {
  propertySearch.addEventListener("submit", (event) => {
    event.preventDefault();
    filterProperties();
  });
  propertySearch.addEventListener("reset", () => {
    window.requestAnimationFrame(filterProperties);
  });
  [keywordInput, typeInput, statusInput].forEach((control) => {
    control?.addEventListener("input", filterProperties);
    control?.addEventListener("change", filterProperties);
  });
}

const inquiryForm = document.querySelector("#inquiry-form");
const inquiryStatus = document.querySelector("#inquiry-status");

if (inquiryForm && inquiryStatus) {
  inquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!inquiryForm.checkValidity()) {
      inquiryForm.reportValidity();
      return;
    }
    const formData = new FormData(inquiryForm);
    const name = String(formData.get("name") || "").trim();
    inquiryStatus.textContent = `Thank you${name ? `, ${name}` : ""}. This demo inquiry was not sent. Connect this form to your endpoint before publishing.`;
    inquiryForm.reset();
  });
}

const currentYear = document.querySelector("#current-year");
if (currentYear) currentYear.textContent = String(new Date().getFullYear());
