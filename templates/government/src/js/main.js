(function () {
  'use strict';

  document.documentElement.classList.add('js');

  var menuButton = document.querySelector('.menu-toggle');
  var nav = document.getElementById('primary-nav');
  var searchForm = document.getElementById('service-search');
  var queryInput = document.getElementById('service-query');
  var cards = Array.prototype.slice.call(document.querySelectorAll('.service-card'));
  var noResults = document.getElementById('no-results');
  var searchStatus = document.getElementById('search-status');
  var requestForm = document.querySelector('.request-form');
  var requestPreview = document.getElementById('request-preview');
  var requestFeedback = document.getElementById('request-feedback');

  function closeMenu() {
    if (!menuButton || !nav) return;
    menuButton.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  }

  if (menuButton && nav) {
    menuButton.addEventListener('click', function () {
      var isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      nav.classList.toggle('is-open', !isOpen);
      if (!isOpen) nav.querySelector('a').focus();
    });

    nav.addEventListener('click', function (event) {
      if (event.target.tagName === 'A') closeMenu();
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        menuButton.focus();
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 700) closeMenu();
    });
  }

  function filterServices() {
    var query = queryInput.value.trim().toLowerCase();
    var visible = 0;
    cards.forEach(function (card) {
      var searchable = (card.dataset.service + ' ' + card.textContent).toLowerCase();
      var matches = !query || searchable.indexOf(query) !== -1;
      card.hidden = !matches;
      if (matches) visible += 1;
    });
    noResults.hidden = visible !== 0;
    searchStatus.textContent = query
      ? visible + ' service' + (visible === 1 ? '' : 's') + ' found for “' + query + '”.'
      : 'Popular: permits · trash collection · benefits';
  }

  if (searchForm && queryInput) {
    queryInput.addEventListener('input', filterServices);
    searchForm.addEventListener('submit', function (event) {
      event.preventDefault();
      filterServices();
      document.getElementById('service-directory').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  if (requestForm && requestPreview && requestFeedback) {
    requestPreview.addEventListener('click', function () {
      if (!requestForm.checkValidity()) {
        requestForm.reportValidity();
        return;
      }
      requestFeedback.hidden = false;
      requestFeedback.focus();
    });
  }
}());
