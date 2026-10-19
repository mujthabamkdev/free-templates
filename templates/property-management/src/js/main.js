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
    if (event.key === "Escape") { event.preventDefault(); closeMenu(); return; }
    if (event.key !== "Tab" || !siteNav.classList.contains("is-open")) return;
    const firstLink = navLinks[0];
    const lastLink = navLinks[navLinks.length - 1];
    if (event.shiftKey && document.activeElement === firstLink) { event.preventDefault(); lastLink.focus(); }
    if (!event.shiftKey && document.activeElement === lastLink) { event.preventDefault(); firstLink.focus(); }
  });
  document.addEventListener("click", (event) => {
    if (siteNav.classList.contains("is-open") && !siteNav.contains(event.target) && !menuButton.contains(event.target)) closeMenu({ restoreFocus: false });
  });
  window.addEventListener("resize", () => { if (window.innerWidth > 760 && siteNav.classList.contains("is-open")) closeMenu({ restoreFocus: false }); });
}

document.querySelectorAll("[data-demo-form]").forEach((form) => {
  const status = form.querySelector(".form-status");
  if (!status) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    const name = String(new FormData(form).get("name") || "").trim();
    status.textContent = `Thanks${name ? `, ${name}` : ""}. This demo handoff was not sent. Connect a secure endpoint before publishing.`;
    form.reset();
  });
});

const currentYear = document.querySelector("#current-year");
if (currentYear) currentYear.textContent = String(new Date().getFullYear());
