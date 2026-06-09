(function () {

  /* ─────────────────────────────────────────
     1. INJECT CSS
  ───────────────────────────────────────── */
  if (!document.getElementById('cb-navbar-styles')) {
    const link = document.createElement('link');
    link.id   = 'cb-navbar-styles';
    link.rel  = 'stylesheet';
    link.href = './src/styles/navbar.css';
    document.head.appendChild(link);
  }

  /* ─────────────────────────────────────────
     2. INJECT HTML
  ───────────────────────────────────────── */
  const html = `
<div id="cb-scroll-progress"></div>

<nav class="navbar navbar-expand-lg fixed-top cb-navbar">
  <div class="container-fluid cb-container" id="cbContainer">

    <!-- Logo -->
    <a class="navbar-brand fw-bolder cb-brand logo-switch" href="#hero-component" data-scroll="hero-component">
      <img src="./Images/logo/carb_logo1.png" alt="Car Breezy" height="30">
    </a>

    <!-- Toggler -->
    <button class="navbar-toggler border-0 cb-toggler"
            aria-expanded="false"
            aria-label="Toggle navigation">
      <span class="cb-toggler-bar"></span>
      <span class="cb-toggler-bar"></span>
      <span class="cb-toggler-bar"></span>
    </button>

    <!-- Menu -->
    <div class="collapse navbar-collapse" id="cbMenu">

      <!-- Centre links -->
      <ul class="navbar-nav cb-nav-links gap-1 mx-auto" id="cbNavLinks">

        <li class="nav-item">
          <a class="nav-link cb-link" href="#hero-component" data-scroll="hero-component">Home</a>
        </li>
        <li class="nav-item dropdown cb-dropdown">

    <a class="nav-link dropdown-toggle cb-link"
       href="#car-listing-component"
       data-scroll="car-listing-component"
       id="vehiclesDropdown"
       role="button"
       data-bs-toggle="dropdown"
       aria-expanded="false">
        Cars
    </a>

    <ul class="dropdown-menu" aria-labelledby="vehiclesDropdown">

        <li>
            <a class="dropdown-item"
               href="#luxury-cars"
               data-scroll="luxury-cars">
                Luxury Cars
            </a>
        </li>

        <li>
            <a class="dropdown-item"
               href="#sports-cars"
               data-scroll="sports-cars">
                Sports Cars
            </a>
        </li>

        <li>
            <a class="dropdown-item"
               href="#car-listing-component"
               data-scroll="car-listing-component">
                All Cars
            </a>
        </li>

    </ul>

</li>

        <li class="nav-item">
          <a class="nav-link cb-link" href="#about-component" data-scroll="about-component">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link cb-link" href="#services-component" data-scroll="services-component">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link cb-link" href="#contact-component" data-scroll="contact-component">Contact</a>
        </li>
      </ul>

      <!-- Right: search + avatar -->
      <div class="cb-nav-right d-flex align-items-center gap-2" id="cbNavRight">
        <div class="cb-search-wrap">
          <svg class="cb-search-icon" xmlns="http://www.w3.org/2000/svg"
               width="14" height="14" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input class="cb-search-input" type="text" placeholder="Search...">
        </div>
        <button class="cb-avatar" aria-label="Account">
          <svg xmlns="http://www.w3.org/2000/svg"
               width="16" height="16" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </button>
      </div>

    </div>
  </div>
</nav>`;

  document.body.insertAdjacentHTML('afterbegin', html);

  /* ─────────────────────────────────────────
     3. ELEMENTS
  ───────────────────────────────────────── */
  const navbar       = document.querySelector('.cb-navbar');
  const toggler      = document.querySelector('.cb-toggler');
  const navMenu      = document.getElementById('cbMenu');
  const container    = document.getElementById('cbContainer');
  const navLinks     = document.getElementById('cbNavLinks');
  const navRight     = document.getElementById('cbNavRight');
  const progressBar  = document.getElementById('cb-scroll-progress');

  /* ─────────────────────────────────────────
     4. LOAD ANIMATION
     Pill expands → links fade in
  ───────────────────────────────────────── */
  function runLoadAnimation() {
    /* step 1 — expand pill */
    setTimeout(function () {
      container.classList.add('expanded');
    }, 150);

    /* step 2 — fade in links & right after expand finishes */
    setTimeout(function () {
      navLinks.classList.add('visible');
      navRight.classList.add('visible');
    }, 900);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runLoadAnimation);
  } else {
    runLoadAnimation();
  }

  /* ─────────────────────────────────────────
     5. SCROLL — progress bar + sticky style
  ───────────────────────────────────────── */
  window.addEventListener('scroll', function () {
    const scrollY   = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct       = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;

    progressBar.style.width = pct + '%';

    if (scrollY > 50) navbar.classList.add('scrolled');
    else              navbar.classList.remove('scrolled');

    updateActiveLink();
  }, { passive: true });

  /* ─────────────────────────────────────────
     6. HAMBURGER TOGGLE
  ───────────────────────────────────────── */
  toggler.addEventListener('click', function () {
    const isOpen = toggler.getAttribute('aria-expanded') === 'true';
    toggler.setAttribute('aria-expanded', String(!isOpen));
    navMenu.classList.toggle('show');
  });

  function closeMenu() {
    toggler.setAttribute('aria-expanded', 'false');
    navMenu.classList.remove('show');
  }

  /* close on outside click */
  document.addEventListener('click', function (e) {
    if (!navbar.contains(e.target) && toggler.getAttribute('aria-expanded') === 'true') {
      closeMenu();
    }
  });

  /* close on resize to desktop */
  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      if (window.innerWidth >= 992) closeMenu();
    }, 100);
  });

  /* ─────────────────────────────────────────
     7. SMOOTH SCROLL
  ───────────────────────────────────────── */
  function navbarHeight() {
    return navbar.offsetHeight + 8;
  }

  function smoothScrollTo(targetId) {
    const target = document.getElementById(targetId);
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - navbarHeight();
    window.scrollTo({ top: top, behavior: 'smooth' });
  }

  /* all [data-scroll] links */
  document.addEventListener('click', function (e) {
    const link = e.target.closest('[data-scroll]');
    if (!link) return;
    const targetId = link.dataset.scroll;
    if (!targetId) return;
    e.preventDefault();
    closeMenu();
    setTimeout(function () { smoothScrollTo(targetId); }, 50);
  });

  /* plain <a href="#id"> links */
  document.addEventListener('click', function (e) {
    const link = e.target.closest('a[href^="#"]');
    if (!link || link.dataset.scroll) return;
    const hash = link.getAttribute('href').slice(1);
    if (!hash) return;
    const target = document.getElementById(hash);
    if (!target) return;
    e.preventDefault();
    closeMenu();
    setTimeout(function () { smoothScrollTo(hash); }, 50);
  });

  /* ─────────────────────────────────────────
     8. ACTIVE LINK (scroll-spy)
  ───────────────────────────────────────── */
  const sectionIds = [
    'hero-component',
    'car-listing-component',
    'about-component',
    'services-component',
    'contact-component',
  ];

  function updateActiveLink() {
    var offset  = navbarHeight() + 40;
    var current = sectionIds[0];

    sectionIds.forEach(function (id) {
      var el = document.getElementById(id);
      if (!el) return;
      if (el.getBoundingClientRect().top <= offset) current = id;
    });

    document.querySelectorAll('.cb-link[data-scroll]').forEach(function (link) {
      link.classList.toggle('active', link.dataset.scroll === current);
    });
  }

  /* ─────────────────────────────────────────
     9. SEARCH INPUT
  ───────────────────────────────────────── */
  var searchInput = document.querySelector('.cb-search-input');
  if (searchInput) {
    searchInput.addEventListener('focus', function () {
      this.parentElement.style.background  = 'rgba(255,255,255,0.12)';
      this.parentElement.style.borderColor = 'rgba(255,255,255,0.28)';
    });
    searchInput.addEventListener('blur', function () {
      this.parentElement.style.background  = 'rgba(255,255,255,0.07)';
      this.parentElement.style.borderColor = 'rgba(255,255,255,0.11)';
    });
  }

})();