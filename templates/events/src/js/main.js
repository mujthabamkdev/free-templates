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

menuButton?.addEventListener("click", () => setMenuState(menuButton.getAttribute("aria-expanded") !== "true"));
siteNav?.addEventListener("keydown", (event) => {
  if (!siteNav.classList.contains("is-open")) return;
  if (event.key === "Escape") { event.preventDefault(); setMenuState(false); return; }
  if (event.key !== "Tab" || !mobileLayout.matches || navLinks.length === 0) return;
  const first = navLinks[0]; const last = navLinks[navLinks.length - 1];
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
});
navLinks.forEach((link) => link.addEventListener("click", () => setMenuState(false, { restoreFocus: false })));
mobileLayout.addEventListener("change", () => { if (!mobileLayout.matches) setMenuState(false, { restoreFocus: false }); });

const inquiryForm = document.querySelector("#inquiry-form");
const formStatus = document.querySelector("#form-status");
inquiryForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!inquiryForm.checkValidity()) { inquiryForm.reportValidity(); return; }
  const name = new FormData(inquiryForm).get("name");
  if (formStatus) formStatus.textContent = `Demo only — thanks, ${name}. Connect a reviewed backend to receive this inquiry.`;
  inquiryForm.reset();
});

const year = document.querySelector("#current-year");
if (year) year.textContent = String(new Date().getFullYear());
