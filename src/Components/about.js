(function () {

  function loadCSS() {
    const link = document.createElement('link');
    link.rel   = 'stylesheet';
    link.href  = './src/styles/about.css';
    document.head.appendChild(link);
  }

  function animateCounters() {
    document.querySelectorAll('.stat-number').forEach(function (el) {
      const target = parseInt(el.dataset.target);
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;
      const timer = setInterval(function () {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.textContent = Math.floor(current).toLocaleString();
      }, 16);
    });
  }

  function initObserver() {
    const grid = document.querySelector('.stats-grid');
    if (!grid) return;
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });
    observer.observe(grid);
  }

  function loadAbout() {
    const placeholder = document.getElementById('about-component');
    if (!placeholder) return;

    placeholder.innerHTML = `
      <section class="about-section" id="about">
        <div class="about-inner">

          <!-- Header -->
          <div class="about-header">
            <span class="about-eyebrow">Who We Are</span>
            <h2 class="about-title">Built for People <br>Who Love Cars</h2>
            <p class="about-subtitle">
              At Car Breezy, we're passionate about making car buying easy and enjoyable.
            </p>
          </div>

          <!-- Stats -->
          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-icon">
                <i class="fa-solid fa-users"></i>
              </div>
              <div class="stat-number-wrap">
                <span class="stat-number" data-target="15000">0</span>
                <span class="stat-suffix">+</span>
              </div>
              <span class="stat-label">Happy Customers</span>
            </div>
            <div class="stat-card">
              <div class="stat-icon">
                <i class="fa-solid fa-car"></i>
              </div>
              <div class="stat-number-wrap">
                <span class="stat-number" data-target="8500">0</span>
                <span class="stat-suffix">+</span>
              </div>
              <span class="stat-label">Cars Sold</span>
            </div>
            <div class="stat-card">
              <div class="stat-icon">
                <i class="fa-solid fa-calendar-check"></i>
              </div>
              <div class="stat-number-wrap">
                <span class="stat-number" data-target="25">0</span>
                <span class="stat-suffix">+</span>
              </div>
              <span class="stat-label">Years in Business</span>
            </div>
            <div class="stat-card">
              <div class="stat-icon">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <div class="stat-number-wrap">
                <span class="stat-number" data-target="50">0</span>
                <span class="stat-suffix">+</span>
              </div>
              <span class="stat-label">Cities Covered</span>
            </div>
          </div>

          <!-- Features -->
          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon-wrap">
                <i class="fa-solid fa-layer-group"></i>
              </div>
              <h3 class="feature-title">Wide Selection</h3>
              <p class="feature-text">
                Browse our extensive collection of new and pre-owned vehicles
                from the world's top brands, all in one place.
              </p>
            </div>
            <div class="feature-card">
              <div class="feature-icon-wrap">
                <i class="fa-solid fa-headset"></i>
              </div>
              <h3 class="feature-title">Expert Support</h3>
              <p class="feature-text">
                Our certified automotive experts guide you through every step —
                from browsing to driving away in your dream car.
              </p>
            </div>
            <div class="feature-card">
              <div class="feature-icon-wrap">
                <i class="fa-solid fa-tag"></i>
              </div>
              <h3 class="feature-title">Best Prices</h3>
              <p class="feature-text">
                Competitive pricing, transparent deals, and exclusive offers
                that ensure you always get the best value.
              </p>
            </div>
          </div>

        </div>
      </section>
    `;

    loadCSS();
    setTimeout(initObserver, 100);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAbout);
  } else {
    loadAbout();
  }

})();