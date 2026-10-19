(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  const navLinks = nav ? [...nav.querySelectorAll('a')] : [];
  const form = document.querySelector('#newsletter-form');
  const status = document.querySelector('#form-status');
  const year = document.querySelector('#year');
  const cartCount = document.querySelector('.cart-count');
  const cartItems = document.querySelector('#cart-items');
  const cartTotal = document.querySelector('#cart-total');
  const cartSummary = document.querySelector('#cart-summary');
  const resultsCount = document.querySelector('#results-count');
  const cart = [];

  const closeMenu = () => {
    if (!nav || !menuButton) return;
    nav.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    document.body.classList.remove('menu-open');
  };

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!open));
      menuButton.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
      nav.classList.toggle('is-open', !open);
      document.body.classList.toggle('menu-open', !open);
      if (!open) navLinks[0]?.focus();
    });
    navLinks.forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
      if (!nav.classList.contains('is-open')) return;
      if (event.key === 'Escape') { closeMenu(); menuButton.focus(); }
      if (event.key === 'Tab' && navLinks.length) {
        const first = navLinks[0];
        const last = navLinks[navLinks.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    });
  }

  document.querySelectorAll('.filter-button').forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      document.querySelectorAll('.filter-button').forEach((item) => {
        const active = item === button;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      let visible = 0;
      document.querySelectorAll('.product-card').forEach((card) => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('is-hidden', !show);
        if (show) visible += 1;
      });
      if (resultsCount) resultsCount.textContent = `${visible} ${visible === 1 ? 'good' : 'goods'}`;
    });
  });

  const renderCart = () => {
    if (!cartCount || !cartItems || !cartTotal || !cartSummary) return;
    cartCount.textContent = String(cart.length);
    cartCount.parentElement?.setAttribute('aria-label', `View cart, ${cart.length} item${cart.length === 1 ? '' : 's'}`);
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotal.textContent = `$${total}`;
    cartSummary.textContent = cart.length ? `${cart.length} item${cart.length === 1 ? '' : 's'} in your demo cart. Review the handoff below.` : 'Your demo cart is empty. Add a product above to preview the handoff.';
    cartItems.innerHTML = cart.length ? cart.map((item) => `<div class="cart-item"><span>${item.name}<small>$${item.price}</small></span><button class="text-button remove-item" type="button" data-name="${item.name}">Remove</button></div>`).join('') : '<p class="empty-cart">No items yet · <a href="#shop">Browse the pantry</a></p>';
    cartItems.querySelectorAll('.remove-item').forEach((button) => button.addEventListener('click', () => {
      const index = cart.findIndex((item) => item.name === button.dataset.name);
      if (index > -1) cart.splice(index, 1);
      renderCart();
    }));
  };

  document.querySelectorAll('.add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
      cart.push({ name: button.dataset.product, price: Number(button.dataset.price) });
      renderCart();
      button.textContent = 'Added ✓';
      window.setTimeout(() => { button.innerHTML = 'Add to cart <span aria-hidden="true">+</span>'; }, 1500);
    });
  });

  if (form && status) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      status.textContent = 'Demo only: signup previewed. Connect a consent-aware email provider before launch.';
    });
  }
  if (year) year.textContent = String(new Date().getFullYear());
  renderCart();
})();
