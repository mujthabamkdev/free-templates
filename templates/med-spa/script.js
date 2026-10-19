"use strict";

const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuButton && siteNav) {
  const navLinks = [...siteNav.querySelectorAll("a")];
  let lastFocusedElement = null;
  const setMenuState = (isOpen, restoreFocus = false) => {
    siteNav.classList.toggle("is-open", isOpen);
    siteNav.setAttribute("aria-hidden", String(!isOpen && window.innerWidth <= 860));
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    document.body.classList.toggle("menu-open", isOpen);
    if (isOpen) { lastFocusedElement = document.activeElement; navLinks[0]?.focus(); }
    else if (restoreFocus) { lastFocusedElement?.focus(); lastFocusedElement = null; }
  };
  const closeMenu = () => setMenuState(false, true);
  menuButton.addEventListener("click", () => setMenuState(menuButton.getAttribute("aria-expanded") !== "true"));
  siteNav.setAttribute("aria-hidden", window.innerWidth <= 860 ? "true" : "false");
  navLinks.forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("click", (event) => { if (siteNav.classList.contains("is-open") && !siteNav.contains(event.target) && !menuButton.contains(event.target)) closeMenu(); });
  document.addEventListener("keydown", (event) => {
    if (!siteNav.classList.contains("is-open")) return;
    if (event.key === "Escape") { closeMenu(); return; }
    if (event.key === "Tab" && navLinks.length) {
      const first = navLinks[0]; const last = navLinks[navLinks.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
  window.addEventListener("resize", () => { if (window.innerWidth > 860) { if (siteNav.classList.contains("is-open")) closeMenu(); siteNav.setAttribute("aria-hidden", "false"); } else if (!siteNav.classList.contains("is-open")) siteNav.setAttribute("aria-hidden", "true"); });
}

const form = document.querySelector("#consultation-form");
const formStatus = document.querySelector("#form-status");
if (form && formStatus) {
  form.querySelectorAll("input, select, textarea, button").forEach((control) => { control.disabled = false; });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    formStatus.textContent = "Demo only: nothing was sent or stored. Connect a privacy-reviewed secure endpoint before launch.";
    formStatus.classList.add("is-success");
    form.reset();
    formStatus.focus();
  });
}

const currentYear = document.querySelector("#current-year");
if (currentYear) currentYear.textContent = String(new Date().getFullYear());
