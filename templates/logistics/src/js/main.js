(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  const navLinks = nav ? [...nav.querySelectorAll('a')] : [];

  const closeMenu = (returnFocus = false) => {
    if (!menuButton || !nav) return;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    nav.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    if (returnFocus) menuButton.focus();
  };

  const openMenu = () => {
    if (!menuButton || !nav) return;
    menuButton.setAttribute('aria-expanded', 'true');
    menuButton.setAttribute('aria-label', 'Close navigation');
    nav.classList.add('is-open');
    document.body.classList.add('menu-open');
    navLinks[0]?.focus();
  };

  menuButton?.addEventListener('click', () => {
    menuButton.getAttribute('aria-expanded') === 'true' ? closeMenu() : openMenu();
  });

  navLinks.forEach((link) => link.addEventListener('click', () => closeMenu()));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') closeMenu(true);
    if (event.key !== 'Tab' || menuButton?.getAttribute('aria-expanded') !== 'true') return;
    const focusable = [menuButton, ...navLinks];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });

  const trackingForm = document.querySelector('#tracking-form');
  trackingForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = trackingForm.querySelector('input');
    const status = trackingForm.querySelector('.form-status');
    if (!input || !status || !input.value.trim()) return;
    status.textContent = `Demo view ready for ${input.value.trim().toUpperCase()}. No carrier data was requested.`;
  });

  const quoteForm = document.querySelector('#quote-form');
  quoteForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = quoteForm.querySelector('.form-status');
    const name = quoteForm.querySelector('#quote-name');
    if (!status || !name) return;
    status.textContent = `Thanks, ${name.value.trim() || 'there'}. Demo preview complete; no request was sent.`;
  });

  const year = document.querySelector('#current-year');
  if (year) year.textContent = new Date().getFullYear();
})();
