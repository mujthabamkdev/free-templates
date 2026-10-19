(function () {
  "use strict";

  var menuButton = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".site-nav");
  if (menuButton && nav) {
    var navLinks = nav.querySelectorAll("a");
    function closeMenu() {
      nav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
    }
    menuButton.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
      if (isOpen && navLinks.length) navLinks[0].focus();
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        closeMenu();
        menuButton.focus();
      }
      if (event.key === "Tab" && nav.classList.contains("is-open") && navLinks.length) {
        var first = navLinks[0];
        var last = navLinks[navLinks.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    });
    navLinks.forEach(function (link) { link.addEventListener("click", closeMenu); });
  }

  var year = document.getElementById("current-year");
  if (year) year.textContent = String(new Date().getFullYear());

  var search = document.getElementById("job-search");
  var sector = document.getElementById("job-sector");
  var type = document.getElementById("job-type");
  var filterForm = document.getElementById("job-filters");
  var status = document.getElementById("filter-status");
  var empty = document.getElementById("empty-state");
  var jobs = document.querySelectorAll(".job-card");
  function filterJobs(event) {
    if (event) event.preventDefault();
    var query = (search.value || "").trim().toLowerCase();
    var visible = 0;
    jobs.forEach(function (job) {
      var matchesQuery = !query || job.textContent.toLowerCase().indexOf(query) !== -1;
      var matchesSector = sector.value === "all" || job.dataset.sector === sector.value;
      var matchesType = type.value === "all" || job.dataset.type === type.value;
      var show = matchesQuery && matchesSector && matchesType;
      job.hidden = !show;
      if (show) visible += 1;
    });
    empty.hidden = visible !== 0;
    status.textContent = "Showing " + visible + " illustrative opportunit" + (visible === 1 ? "y" : "ies");
  }
  if (filterForm && search && sector && type) {
    filterForm.addEventListener("submit", filterJobs);
    search.addEventListener("input", filterJobs);
    sector.addEventListener("change", filterJobs);
    type.addEventListener("change", filterJobs);
  }

  function demoForm(formId, statusId, message) {
    var form = document.getElementById(formId);
    var formStatus = document.getElementById(statusId);
    if (!form || !formStatus) return;
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!form.checkValidity()) { formStatus.textContent = "Complete required fields to see the demo response."; form.reportValidity(); return; }
      formStatus.textContent = message;
    });
  }
  demoForm("candidate-form", "candidate-status", "Thanks—this demo records nothing and sends no profile.");
  demoForm("employer-form", "employer-status", "Thanks—this demo records nothing and sends no brief.");
}());
