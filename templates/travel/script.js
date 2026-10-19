(() => {
  'use strict';

  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('[data-nav]');
  const closeMenu = () => {
    if (!menuToggle || !nav) return;
    menuToggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  };

  if (menuToggle && nav) {
    const navLinks = [...nav.querySelectorAll('a')];
    const setMenu = (open) => {
      menuToggle.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('is-open', open);
      if (open) navLinks[0]?.focus();
    };
    menuToggle.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
    navLinks.forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('click', (event) => {
      if (!nav.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
    });
    document.addEventListener('keydown', (event) => {
      if (menuToggle.getAttribute('aria-expanded') !== 'true') return;
      if (event.key === 'Escape') {
        closeMenu();
        menuToggle.focus();
      }
      if (event.key === 'Tab' && navLinks.length) {
        const first = navLinks[0];
        const last = navLinks[navLinks.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    });
  }

  const tripCards = [...document.querySelectorAll('[data-trip-grid] .trip-card')];
  const filterButtons = [...document.querySelectorAll('[data-filter]')];
  const emptyState = document.querySelector('[data-empty-state]');
  const showTrips = ({ region = 'all', season = 'all', pace = 'all' } = {}) => {
    let shown = 0;
    tripCards.forEach((card) => {
      const seasons = (card.dataset.season || '').split(' ');
      const visible = (region === 'all' || card.dataset.region === region)
        && (season === 'all' || seasons.includes(season))
        && (pace === 'all' || card.dataset.pace === pace);
      card.hidden = !visible;
      if (visible) shown += 1;
    });
    if (emptyState) emptyState.hidden = shown > 0;
    filterButtons.forEach((button) => {
      const active = button.dataset.filter === region;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  };
  filterButtons.forEach((button) => button.addEventListener('click', () => showTrips({ region: button.dataset.filter })));

  const finderForm = document.querySelector('[data-finder-form]');
  const finderFeedback = document.querySelector('[data-finder-feedback]');
  finderForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const destination = finderForm.querySelector('#destination')?.value || 'all';
    const season = finderForm.querySelector('#season')?.value || 'all';
    const pace = finderForm.querySelector('#pace')?.value || 'all';
    showTrips({ region: destination, season, pace });
    const selections = [destination, season, pace]
      .filter((value) => value !== 'all')
      .map((value) => value.replace('-', ' '));
    if (finderFeedback) finderFeedback.textContent = selections.length
      ? `Showing illustrative journeys for ${selections.join(', ')}. No booking has been made.`
      : 'Showing every illustrative journey. No booking has been made.';
    document.querySelector('#trips')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  const reviews = [
    ['“Northline gave us a route, then enough room to make it ours. The best moments were the ones no itinerary could have predicted.”', 'Priya & Daniel', 'The quiet atlas'],
    ['“A beautifully human way to travel. We came home with new friends, muddy shoes, and a much longer list of places to return to.”', 'Maya R.', 'Under wide weather'],
    ['“The long lunch was not a detour. It was the trip. Every detail felt generous, grounded, and easy to be present for.”', 'Jon & Elise', 'Salt, stone, slow time']
  ];
  const quote = document.querySelector('[data-review-quote]');
  const reviewName = document.querySelector('[data-review-name]');
  const reviewTrip = document.querySelector('[data-review-trip]');
  const reviewCount = document.querySelector('[data-review-count]');
  let reviewIndex = 0;
  const showReview = (index) => {
    reviewIndex = (index + reviews.length) % reviews.length;
    const [text, name, trip] = reviews[reviewIndex];
    if (quote) quote.textContent = text;
    if (reviewName) reviewName.textContent = `— ${name}`;
    if (reviewTrip) reviewTrip.textContent = `Illustrative guest review · ${trip}`;
    if (reviewCount) reviewCount.textContent = `0${reviewIndex + 1} / 0${reviews.length}`;
  };
  document.querySelector('[data-review-prev]')?.addEventListener('click', () => showReview(reviewIndex - 1));
  document.querySelector('[data-review-next]')?.addEventListener('click', () => showReview(reviewIndex + 1));

  const inquiryForm = document.querySelector('[data-inquiry-form]');
  const inquiryFeedback = document.querySelector('[data-inquiry-feedback]');
  inquiryForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!inquiryForm.reportValidity()) return;
    if (inquiryFeedback) inquiryFeedback.textContent = 'Demo preview ready. Nothing was sent or saved.';
  });

  document.querySelectorAll('[data-trip-detail]').forEach((button) => button.addEventListener('click', () => {
    const trip = button.closest('.trip-card')?.querySelector('h3')?.textContent || 'this journey';
    const select = document.querySelector('#trip-interest');
    if (select) {
      const optionIndex = [...select.options].findIndex((option) => option.textContent.toLowerCase().includes(trip.toLowerCase().split(':')[0]));
      if (optionIndex >= 0) select.selectedIndex = optionIndex;
    }
    document.querySelector('#inquiry')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }));

  const year = document.querySelector('[data-year]');
  if (year) year.textContent = String(new Date().getFullYear());
})();
