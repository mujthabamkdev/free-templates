"use strict";

const root = document.documentElement;
root.classList.remove("no-js");
root.classList.add("js");

const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = siteNav ? [...siteNav.querySelectorAll("a")] : [];
const mobileLayout = window.matchMedia("(max-width: 800px)");
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

navLinks.forEach((link) => link.addEventListener("click", () => setMenuState(false, { restoreFocus: false })));
mobileLayout.addEventListener("change", () => {
  if (!mobileLayout.matches) setMenuState(false, { restoreFocus: false });
});

const inventoryGrid = document.querySelector("#inventory-grid");
const inventoryCards = inventoryGrid ? [...inventoryGrid.querySelectorAll(".vehicle-card")] : [];
const filterButtons = [...document.querySelectorAll("[data-filter]")];
const emptyState = document.querySelector("#empty-state");
const vehicleCount = document.querySelector("#vehicle-count");
const sortSelect = document.querySelector("#sort-inventory");
let activeFilter = "all";

function sortInventory() {
  if (!inventoryGrid) return;
  const sort = sortSelect?.value || "featured";
  const sorted = [...inventoryCards].sort((a, b) => {
    if (sort === "price-low") return Number(a.dataset.price) - Number(b.dataset.price);
    if (sort === "range-high") return Number(b.dataset.range) - Number(a.dataset.range);
    return inventoryCards.indexOf(a) - inventoryCards.indexOf(b);
  });
  sorted.forEach((card) => inventoryGrid.append(card));
}

function applyInventoryFilter(filter) {
  activeFilter = filter;
  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === filter;
    button.classList.toggle("is-active", isActive);
    if (button.hasAttribute("aria-pressed")) button.setAttribute("aria-pressed", String(isActive));
  });
  let visible = 0;
  inventoryCards.forEach((card) => {
    const show = filter === "all" || card.dataset.type === filter;
    card.hidden = !show;
    if (show) visible += 1;
  });
  if (vehicleCount) vehicleCount.textContent = String(visible);
  if (emptyState) emptyState.hidden = visible !== 0;
  sortInventory();
}

filterButtons.forEach((button) => button.addEventListener("click", () => applyInventoryFilter(button.dataset.filter)));
sortSelect?.addEventListener("change", sortInventory);
applyInventoryFilter(activeFilter);

document.querySelectorAll(".save-vehicle").forEach((button) => {
  button.addEventListener("click", () => {
    const isSaved = button.getAttribute("aria-pressed") !== "true";
    button.setAttribute("aria-pressed", String(isSaved));
    button.textContent = isSaved ? "♥" : "♡";
    button.setAttribute("aria-label", `${isSaved ? "Remove" : "Save"} ${button.getAttribute("aria-label")?.replace(/^(Save|Remove) /, "") || "vehicle"}`);
  });
});

const milesSlider = document.querySelector("#miles-slider");
const milesOutput = document.querySelector("#miles-output");
const chargeResult = document.querySelector("#charge-result");
function updateRangeEstimate() {
  if (!milesSlider) return;
  const miles = Number(milesSlider.value);
  if (milesOutput) milesOutput.textContent = miles.toLocaleString();
  if (chargeResult) {
    const charges = Math.max(1, Math.ceil(miles / 240));
    chargeResult.textContent = charges === 1 ? "Charge about once a week" : `Charge about ${charges} times a week`;
  }
}
milesSlider?.addEventListener("input", updateRangeEstimate);
updateRangeEstimate();

const financePrice = document.querySelector("#finance-price");
const financeTerm = document.querySelector("#finance-term");
const financePriceOutput = document.querySelector("#finance-price-output");
const financeTermOutput = document.querySelector("#finance-term-output");
const paymentOutput = document.querySelector("#payment-output");
function updatePaymentEstimate() {
  if (!financePrice || !financeTerm) return;
  const price = Number(financePrice.value);
  const term = Number(financeTerm.value);
  const principal = Math.max(0, price - 5000);
  const monthlyRate = 0.0699 / 12;
  const payment = principal * monthlyRate / (1 - (1 + monthlyRate) ** -term);
  if (financePriceOutput) financePriceOutput.textContent = `$${price.toLocaleString()}`;
  if (financeTermOutput) financeTermOutput.textContent = `${term} mo`;
  if (paymentOutput) paymentOutput.textContent = `$${Math.round(payment).toLocaleString()}`;
}
financePrice?.addEventListener("input", updatePaymentEstimate);
financeTerm?.addEventListener("input", updatePaymentEstimate);
updatePaymentEstimate();

function demoForm(formId, statusId, message) {
  const form = document.querySelector(formId);
  const status = document.querySelector(statusId);
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!status || !form.checkValidity()) return;
    status.textContent = message;
    form.reset();
  });
}
demoForm("#trade-form", "#trade-status", "Demo only — connect your appraisal provider to return an estimate.");
demoForm("#inquiry-form", "#inquiry-status", "Demo only — connect a reviewed endpoint to send this inquiry.");

document.querySelectorAll("[data-vehicle]").forEach((link) => {
  link.addEventListener("click", () => {
    const interest = document.querySelector("#interest");
    if (interest) interest.options[0].text = `Booking a drive in ${link.dataset.vehicle}`;
  });
});

const currentYear = document.querySelector("#current-year");
if (currentYear) currentYear.textContent = String(new Date().getFullYear());
