(() => {
  'use strict';
  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#site-nav');
  const form = document.querySelector('#consultation-form');
  const status = document.querySelector('#form-status');
  const year = document.querySelector('#current-year');
  const price = document.querySelector('#home-price');
  const deposit = document.querySelector('#deposit');
  const priceValue = document.querySelector('#home-price-value');
  const depositValue = document.querySelector('#deposit-value');
  const paymentValue = document.querySelector('#payment-value');
  let menuOpen = false;

  if (year) year.textContent = String(new Date().getFullYear());
  const closeMenu = (returnFocus = true) => {
    if (!menuButton || !menu) return;
    menuOpen = false; menu.classList.remove('is-open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Open navigation'); document.body.classList.remove('menu-open');
    if (returnFocus) menuButton.focus({ preventScroll: true });
  };
  const openMenu = () => {
    if (!menuButton || !menu) return;
    menuOpen = true; menu.classList.add('is-open'); menuButton.setAttribute('aria-expanded', 'true'); menuButton.setAttribute('aria-label', 'Close navigation'); document.body.classList.add('menu-open');
    const firstLink = menu.querySelector('a'); if (firstLink) firstLink.focus();
  };
  if (menuButton && menu) {
    menuButton.addEventListener('click', () => (menuOpen ? closeMenu() : openMenu()));
    menu.addEventListener('click', (event) => { if (event.target.closest('a')) closeMenu(false); });
    document.addEventListener('keydown', (event) => {
      if (!menuOpen) return;
      if (event.key === 'Escape') closeMenu();
      if (event.key === 'Tab') { const focusable = [...menu.querySelectorAll('a[href]')]; if (!focusable.length) return; const first = focusable[0]; const last = focusable[focusable.length - 1]; if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); } else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); } }
    });
    window.addEventListener('resize', () => { if (window.innerWidth > 760 && menuOpen) closeMenu(false); });
  }

  const updateCalculator = () => {
    if (!price || !deposit || !priceValue || !depositValue || !paymentValue) return;
    const homePrice = Number(price.value); const depositPercent = Number(deposit.value); const principal = homePrice * (1 - depositPercent / 100); const monthlyRate = 0.0625 / 12; const months = 360; const payment = principal * monthlyRate * ((1 + monthlyRate) ** months) / (((1 + monthlyRate) ** months) - 1);
    priceValue.textContent = `$${homePrice.toLocaleString('en-US')}`; depositValue.textContent = `${depositPercent}%`; paymentValue.textContent = `$${Math.round(payment).toLocaleString('en-US')}`;
  };
  if (price && deposit) { price.addEventListener('input', updateCalculator); deposit.addEventListener('input', updateCalculator); updateCalculator(); }
  if (form && status) {
    const demoSubmit = form.querySelector('button[type="button"]');
    if (demoSubmit) demoSubmit.addEventListener('click', () => { if (!form.checkValidity()) { status.textContent = 'Please complete required fields and confirm demo mode.'; status.setAttribute('role', 'alert'); form.reportValidity(); return; } status.removeAttribute('role'); status.textContent = 'Demo only: your message was not sent or stored. Connect a reviewed endpoint before launch.'; form.reset(); });
  }
})();
