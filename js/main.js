(function () {
  "use strict";

  var WA_NUMBER = "6282110757247";

  /* ---------- Header scroll state ---------- */
  var header = document.getElementById("siteHeader");
  function onScroll() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 8);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Mobile nav ---------- */
  var navToggle = document.getElementById("navToggle");
  var siteNav = document.getElementById("siteNav");
  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      var open = siteNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    siteNav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        siteNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll(".faq-item").forEach(function (item) {
    var q = item.querySelector(".faq-q");
    var a = item.querySelector(".faq-a");
    if (!q || !a) return;
    q.addEventListener("click", function () {
      var isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach(function (other) {
        if (other !== item) {
          other.classList.remove("open");
          other.querySelector(".faq-a").style.maxHeight = "0px";
        }
      });
      item.classList.toggle("open", !isOpen);
      a.style.maxHeight = isOpen ? "0px" : a.scrollHeight + "px";
    });
  });

  /* ---------- Tabs ---------- */
  document.querySelectorAll(".tabs-bar").forEach(function (bar) {
    var group = bar.getAttribute("data-tabs");
    bar.querySelectorAll(".tab-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        bar.querySelectorAll(".tab-btn").forEach(function (b) {
          b.classList.remove("active");
        });
        btn.classList.add("active");
        document.querySelectorAll('[data-panel="' + group + '"]').forEach(function (panel) {
          panel.classList.toggle(
            "active",
            panel.getAttribute("data-tab") === btn.getAttribute("data-tab")
          );
        });
      });
    });
  });

  /* ---------- Kontak form -> WhatsApp ---------- */
  var contactForm = document.getElementById("waForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(contactForm);
      var msg =
        "Halo Youmna Print, saya " + (data.get("nama") || "-") +
        "\nProduk: " + (data.get("produk") || "-") +
        "\nDetail: " + (data.get("pesan") || "-") +
        "\nMohon info harga dan ketersediaannya. Terima kasih.";
      window.open(
        "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(msg),
        "_blank"
      );
    });
  }

  /* ---------- Harga terpusat dari data/harga.js ---------- */
  function applyHarga() {
    if (!window.YOUMMA_HARGA) return;
    document.querySelectorAll("[data-price]").forEach(function (el) {
      var val = window.YOUMMA_HARGA[el.getAttribute("data-price")];
      if (val) el.textContent = val;
    });
  }
  if (window.YOUMMA_HARGA) {
    applyHarga();
  } else {
    var hargaScript = document.createElement("script");
    hargaScript.src = "data/harga.js";
    hargaScript.onload = applyHarga;
    document.head.appendChild(hargaScript);
  }

  /* ---------- Dark mode ---------- */
  var themeToggle = document.getElementById("themeToggle");
  var docRoot = document.documentElement;
  var savedTheme = null;
  try { savedTheme = localStorage.getItem("youmna-theme"); } catch (err) { savedTheme = null; }
  if (savedTheme === "dark") docRoot.setAttribute("data-theme", "dark");

  function syncThemeUi() {
    if (!themeToggle) return;
    var dark = docRoot.getAttribute("data-theme") === "dark";
    themeToggle.setAttribute("aria-pressed", dark ? "true" : "false");
    themeToggle.innerHTML = dark
      ? '<i class="ti ti-sun" aria-hidden="true"></i>'
      : '<i class="ti ti-moon" aria-hidden="true"></i>';
  }
  syncThemeUi();
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var dark = docRoot.getAttribute("data-theme") === "dark";
      if (dark) {
        docRoot.removeAttribute("data-theme");
      } else {
        docRoot.setAttribute("data-theme", "dark");
      }
      try { localStorage.setItem("youmna-theme", dark ? "light" : "dark"); } catch (err) {}
      syncThemeUi();
    });
  }

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
