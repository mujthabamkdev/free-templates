"use strict";

const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuButton && siteNav) {
  const navLinks = [...siteNav.querySelectorAll("a")];
  let lastFocusedElement = null;

  function updateNavAccessibility(isOpen = false) {
    const mobile = window.innerWidth <= 760;
    siteNav.setAttribute("aria-hidden", String(mobile && !isOpen));
    navLinks.forEach((link) => { link.tabIndex = mobile && !isOpen ? -1 : 0; });
  }

  function closeMenu({ restoreFocus = true } = {}) {
    siteNav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
    document.body.classList.remove("menu-open");
    updateNavAccessibility(false);
    if (restoreFocus && lastFocusedElement) lastFocusedElement.focus();
    lastFocusedElement = null;
  }

  function openMenu() {
    lastFocusedElement = document.activeElement;
    siteNav.classList.add("is-open");
    menuButton.setAttribute("aria-expanded", "true");
    menuButton.setAttribute("aria-label", "Close navigation");
    document.body.classList.add("menu-open");
    updateNavAccessibility(true);
    navLinks[0]?.focus();
  }

  updateNavAccessibility();
  menuButton.addEventListener("click", () => menuButton.getAttribute("aria-expanded") === "true" ? closeMenu() : openMenu());
  navLinks.forEach((link) => link.addEventListener("click", () => closeMenu({ restoreFocus: false })));
  siteNav.addEventListener("keydown", (event) => {
    if (event.key === "Escape") { event.preventDefault(); closeMenu(); return; }
    if (event.key !== "Tab" || !siteNav.classList.contains("is-open")) return;
    const first = navLinks[0];
    const last = navLinks[navLinks.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape" && siteNav.classList.contains("is-open")) closeMenu(); });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 760 && siteNav.classList.contains("is-open")) closeMenu({ restoreFocus: false });
    else if (!siteNav.classList.contains("is-open")) updateNavAccessibility();
  });
}

const inquiryForm = document.querySelector("#inquiry-form");
const inquiryStatus = document.querySelector("#inquiry-status");
if (inquiryForm && inquiryStatus) {
  inquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!inquiryForm.checkValidity()) { inquiryForm.reportValidity(); return; }
    const name = String(inquiryForm.elements.name?.value || "").trim();
    inquiryStatus.textContent = `Thanks${name ? `, ${name}` : ""}. This demo inquiry was not sent. Connect an approved endpoint before publishing.`;
    inquiryForm.reset();
  });
}

document.querySelectorAll("#current-year").forEach((year) => { year.textContent = String(new Date().getFullYear()); });
