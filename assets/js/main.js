// RC Graphic Designs and Printing — shared site behavior

document.addEventListener("DOMContentLoaded", function () {
  initMobileNav();
  initServicesDropdown();
  initContactForm();
  markActiveNavLink();
});

/* Mobile hamburger nav */
function initMobileNav() {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  var overlay = document.querySelector(".nav-overlay");
  if (!toggle || !links) return;

  function close() {
    links.classList.remove("open");
    if (overlay) overlay.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }
  function open() {
    links.classList.add("open");
    if (overlay) overlay.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
  }

  toggle.addEventListener("click", function () {
    links.classList.contains("open") ? close() : open();
  });
  if (overlay) overlay.addEventListener("click", close);
}

/* Services dropdown — hover on desktop (CSS), tap-to-open on touch/mobile */
function initServicesDropdown() {
  var item = document.querySelector(".nav-item-services");
  if (!item) return;
  var trigger = item.querySelector(".has-dropdown");
  if (!trigger) return;

  trigger.addEventListener("click", function (e) {
    if (window.matchMedia("(max-width: 900px)").matches) {
      e.preventDefault();
      item.classList.toggle("open");
    }
  });
}

/* Contact / quote form: prefill service from ?service=, fake-submit confirmation */
function initContactForm() {
  var form = document.getElementById("quote-form");
  if (!form) return;

  var params = new URLSearchParams(window.location.search);
  var service = params.get("service");
  var select = form.querySelector("#service");
  if (service && select) {
    var match = Array.from(select.options).find(function (opt) {
      return opt.value === service;
    });
    if (match) select.value = service;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    // NOTE: This is a placeholder. Before launch, wire this form up to a real
    // backend (e.g. Formspree, Netlify Forms, or a mail API) so submissions
    // actually reach the business.
    var success = document.getElementById("form-success");
    if (success) {
      success.classList.add("visible");
      success.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    form.reset();
  });
}

/* Highlight the current page's nav link */
function markActiveNavLink() {
  var path = window.location.pathname;
  var file = path.split("/").pop() || "index.html";
  var inServices = path.indexOf("/services/") !== -1;

  document.querySelectorAll(".nav-link[data-page]").forEach(function (link) {
    var page = link.getAttribute("data-page");
    var isMatch = false;
    if (page === "services") {
      isMatch = inServices;
    } else if (page === "index.html") {
      isMatch = file === "index.html" && !inServices;
    } else {
      isMatch = page === file;
    }
    if (isMatch) link.classList.add("active");
  });
}
