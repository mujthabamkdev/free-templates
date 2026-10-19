(() => {
  'use strict';

  const menuToggle = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-nav]');

  if (menuToggle && nav) {
    const navLinks = [...nav.querySelectorAll('a')];

    const closeMenu = () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    };

    menuToggle.addEventListener('click', () => {
      const open = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
      if (!open) navLinks[0]?.focus();
    });

    navLinks.forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        menuToggle.focus();
      }
    });
    document.addEventListener('click', (event) => {
      if (!nav.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
    });
  }

  const setDateDefaults = () => {
    const checkIn = document.querySelector('#check-in');
    const checkOut = document.querySelector('#check-out');
    if (!checkIn || !checkOut) return;
    const today = new Date();
    const toDateValue = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const dayAfter = new Date(today);
    dayAfter.setDate(today.getDate() + 3);
    checkIn.min = toDateValue(tomorrow);
    checkOut.min = toDateValue(dayAfter);
    checkIn.value = toDateValue(tomorrow);
    checkOut.value = toDateValue(dayAfter);
    checkIn.addEventListener('change', () => {
      const nextDay = new Date(`${checkIn.value}T12:00:00`);
      nextDay.setDate(nextDay.getDate() + 1);
      checkOut.min = toDateValue(nextDay);
      if (!checkOut.value || checkOut.value <= checkIn.value) checkOut.value = toDateValue(nextDay);
    });
  };
  setDateDefaults();

  const availabilityForm = document.querySelector('[data-availability-form]');
  const availabilityFeedback = document.querySelector('[data-availability-feedback]');
  const previewAvailability = () => {
    if (!availabilityForm || !availabilityFeedback) return;
    if (!availabilityForm.reportValidity()) return;
    availabilityFeedback.textContent = 'Demo preview: these dates look lovely. No reservation has been made.';
  };
  availabilityForm?.querySelector('[data-availability-submit]')?.addEventListener('click', previewAvailability);

  const inquiryForm = document.querySelector('[data-inquiry-form]');
  const inquiryFeedback = document.querySelector('[data-inquiry-feedback]');
  const previewInquiry = () => {
    if (!inquiryForm || !inquiryFeedback) return;
    if (!inquiryForm.reportValidity()) return;
    inquiryFeedback.textContent = 'Demo preview ready. Nothing was sent or saved.';
    inquiryForm.querySelector('[data-inquiry-submit]')?.focus();
  };
  inquiryForm?.querySelector('[data-inquiry-submit]')?.addEventListener('click', previewInquiry);

  const reviews = [
    ['“The sort of place that makes you forget to check the time. We swam before breakfast, read by the fire, and extended our walk three times.”', 'Mara & Theo', 'The Loft'],
    ['“Thoughtful in all the right ways: warm bread, a perfect map, and a room that felt like exhaling. We will be back for the tide.”', 'Sana P.', 'The Cove'],
    ['“The Lookout gave our family room to spread out and slow down. The porch became our favourite place in Maine.”', 'The Chen family', 'The Lookout']
  ];
  const quote = document.querySelector('.review-quote blockquote');
  const reviewName = document.querySelector('.review-quote figcaption strong');
  const reviewRoom = document.querySelector('.review-quote figcaption span');
  const reviewCount = document.querySelector('.review-controls span');
  let reviewIndex = 0;
  const showReview = (index) => {
    reviewIndex = (index + reviews.length) % reviews.length;
    const [text, name, room] = reviews[reviewIndex];
    if (quote) quote.textContent = text;
    if (reviewName) reviewName.textContent = `— ${name}`;
    if (reviewRoom) reviewRoom.textContent = `Illustrative guest review · ${room}`;
    if (reviewCount) reviewCount.textContent = `0${reviewIndex + 1} / 0${reviews.length}`;
  };
  document.querySelector('[data-review-prev]')?.addEventListener('click', () => showReview(reviewIndex - 1));
  document.querySelector('[data-review-next]')?.addEventListener('click', () => showReview(reviewIndex + 1));
})();
