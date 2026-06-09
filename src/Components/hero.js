/**
 * ╔══════════════════════════════════════════════════════╗
 * ║            Car Breezy — Hero Component               ║
 * ║   Injects hero CSS + HTML, runs brand carousel       ║
 * ╚══════════════════════════════════════════════════════╝
 */

(function () {

  /* ─────────────────────────────────────────
     1.  INJECT CSS  (external stylesheet)
  ───────────────────────────────────────── */
  if (!document.getElementById('cb-hero-styles')) {
    const link = document.createElement('link');
    link.id   = 'cb-hero-styles';
    link.rel  = 'stylesheet';
    link.href = '../styles/hero.css';
    document.head.appendChild(link);
  }

  /* ─────────────────────────────────────────
     2.  INJECT HTML  into #hero-component
  ───────────────────────────────────────── */
  const target = document.getElementById('hero-component');
  if (!target) {
    console.warn('hero.js: #hero-component not found.');
    return;
  }

  target.innerHTML = `
<section class="hero-section">
  <div class="container hero-content">
    <div class="row align-items-center">

      <!-- Text -->
      <div class="col-lg-5 text-center text-lg-start hero-text-col">
        <h1 id="heroTitle">Porsche P911</h1>
        <p id="heroText">German performance with luxury comfort.</p>

        <div class="hero-cta-row">
          <a href="#car-listing-component" class="hero-btn-primary" data-scroll="car-listing-component">
            Browse Cars
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2.5"
                stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
          <a href="#about-component" class="hero-btn-secondary" data-scroll="about-component">
            Learn More
          </a>
        </div>

        <div class="hero-stats">
          <div class="hero-stat-item">
            <div class="hero-stat-num">200+</div>
            <div class="hero-stat-label">Vehicles</div>
          </div>
          <div class="hero-stat-divider"></div>
          <div class="hero-stat-item">
            <div class="hero-stat-num">14</div>
            <div class="hero-stat-label">Brands</div>
          </div>
          <div class="hero-stat-divider"></div>
          <div class="hero-stat-item">
            <div class="hero-stat-num">5K+</div>
            <div class="hero-stat-label">Happy Clients</div>
          </div>
        </div>
      </div>

      <!-- Car image -->
      <div class="col-lg-7 text-center">
        <div class="car-wrapper">
          <img id="heroCar"
               src="./Images/hero/porscheS.png"
               alt="Featured Car"
               class="img-fluid car-img">
        </div>
      </div>

    </div>
  </div>

  <!-- Brand Carousel -->
  <div class="bc-wrap">
    <button class="bc-arrow" id="bcLeft" aria-label="Previous brand">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2.2"
           stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 18 9 12 15 6"/>
      </svg>
    </button>

    <div class="bc-viewport" id="bcViewport">
      <div class="bc-track" id="bcTrack"></div>
    </div>

    <button class="bc-arrow" id="bcRight" aria-label="Next brand">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2.2"
           stroke-linecap="round" stroke-linejoin="round">
        <polyline points="9 18 15 12 9 6"/>
      </svg>
    </button>
  </div>
</section>
  `;

  /* ─────────────────────────────────────────
     3.  BRAND CAROUSEL + HERO LOGIC
         (your original jQuery code, unchanged)
  ───────────────────────────────────────── */
  $(document).ready(function () {

    $(window).on('load', function () {
      /* step 1 — expand pill after tiny delay */
      setTimeout(function () {
        $('.cb-navbar .container-fluid').addClass('expanded');
      }, 150);

      /* step 2 — fade in links after expand finishes */
      setTimeout(function () {
        $('.cb-nav-links').addClass('visible');
        $('.cb-nav-right').addClass('visible');
      }, 850);
    });

    /* ── Scroll — fixed bar ── */
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 50) {
        $('.cb-navbar').addClass('scrolled');
      } else {
        $('.cb-navbar').removeClass('scrolled');
      }
    });

    /* ── Active nav link on click ── */
    $('.cb-link').on('click', function () {
      $('.cb-link').removeClass('active');
      $(this).addClass('active');
    });

    /* ══════════════════════════════
       BRAND DATA
    ══════════════════════════════ */
    const brands = [
      { name: 'Porsche',     img: './Images/logo/Porsche_logo.png',     title: 'Porsche P911',         text: 'German performance with luxury comfort.',                              car: './Images/hero/porscheS.png' },
      { name: 'Mercedes',    img: './Images/logo/mercedes_logo.png',    title: 'Mercedes AMG GT 63s',  text: 'Luxury and performance with Mercedes Benz AMG.',                      car: './Images/hero/mercedess.png' },
      { name: 'Lamborghini', img: './Images/logo/Lamborghini_logo.png', title: 'Lamborghini',          text: 'Experience the thrill of Lamborghini for unmatched performance.',     car: './Images/hero/lamborghiniS.png' },
      { name: 'Tesla',       img: './Images/logo/Tesla_logo.png',       title: 'Tesla',                text: 'Experience the future of driving with Tesla.',                        car: './Images/hero/TeslaS.png' },
      { name: 'Camaro',      img: './Images/logo/chervelote logo.png',  title: 'Chevrolet Camaro',     text: 'Stand out with the Camaro for iconic style and performance.',          car: './Images/hero/cherveloteS.png' },
      { name: 'Toyota',      img: './Images/logo/Toyota_logo.png',      title: 'Toyota Corolla',       text: 'Reliable and fuel-efficient Toyota Corolla for everyday driving.',    car: './Images/hero/Toyota_CorollaS.png' },
      { name: 'Audi',        img: './Images/logo/audi_logo.png',        title: 'Audi R8 Rental',       text: 'Experience the thrill of Audi R8 for unmatched performance.',         car: './Images/hero/Audi_R8s.png' },
      { name: 'Rolls Royce', img: './Images/logo/RRlogo.png',           title: 'Rolls Royce',          text: 'Luxury and elegance with Rolls Royce for a prestigious experience.',  car: './Images/hero/rr.png' },
      { name: 'Honda',       img: './Images/logo/honda_logo.png',       title: 'Honda Civic',          text: 'Reliable and fuel-efficient Honda Civic for everyday driving.',       car: './Images/hero/honda_civic.png' },
      { name: 'Ferrari',     img: './Images/logo/Ferrari_logo.png',     title: 'Ferrari SF 90',        text: 'Cool and fast Ferrari SF 90 for an unforgettable driving experience.', car: './Images/hero/Ferrari_sf_90.png' },
      { name: 'Nissan',      img: './Images/logo/Nissan_logo.png',      title: 'Nissan Sedan',         text: 'Family friendly Nissan for comfort and practicality.',                car: './Images/hero/nissanS.png' },
      { name: 'McLaren',     img: './Images/logo/Mclaren_logo.png',     title: 'McLaren',              text: 'McLaren rental for unmatched performance and cutting-edge design.',   car: './Images/hero/mclarens.png' },
      { name: 'Bugatti',     img: './Images/logo/Bugatti_logo.png',     title: 'Bugatti',              text: 'Fastest car in the world.',                                           car: './Images/hero/bugattiS.png' },
      { name: 'BMW',         img: './Images/logo/bmw_logo.png',         title: 'BMW M3',               text: 'Popular BMW M3 rental for performance and style.',                    car: './Images/hero/bmwM3.png' },
    ];

    /* ══════════════════════════════
       CAROUSEL CONFIG
    ══════════════════════════════ */
    const VISIBLE = 5;
    const N       = brands.length;
    const CLONES  = VISIBLE * 2;

    let active      = 0;
    let isAnimating = false;

    const track    = document.getElementById('bcTrack');
    const viewport = document.getElementById('bcViewport');

    if (!track || !viewport) { return; }

    function getMetrics() {
      const w = window.innerWidth;
      if (w <= 767) return { item: 38, gap: 16 };
      if (w <= 992) return { item: 44, gap: 22 };
      return               { item: 50, gap: 32 };
    }

    function setViewportWidth() {
      const m = getMetrics();
      viewport.style.width = (VISIBLE * m.item + (VISIBLE - 1) * m.gap) + 'px';
    }

    function getStep() {
      const m = getMetrics();
      return m.item + m.gap;
    }

    setViewportWidth();
    window.addEventListener('resize', function () {
      setViewportWidth();
      jumpTo(realPos());
    });

    function mod(n, m) { return ((n % m) + m) % m; }

    const indexMap = [];

    function buildTrack() {
      track.innerHTML = '';
      indexMap.length = 0;

      for (let i = N - CLONES; i < N; i++) indexMap.push(mod(i, N));
      for (let i = 0; i < N; i++)          indexMap.push(i);
      for (let i = 0; i < CLONES; i++)     indexMap.push(mod(i, N));

      indexMap.forEach(function (brandIdx) {
        const b    = brands[brandIdx];
        const item = document.createElement('div');
        item.className        = 'bc-item';
        item.dataset.brandIdx = String(brandIdx);

        const img     = document.createElement('img');
        img.src       = b.img;
        img.alt       = b.name;
        img.draggable = false;

        item.appendChild(img);
        track.appendChild(item);

        item.addEventListener('click', function () {
          let steps = mod(brandIdx - active, N);
          if (steps > N / 2) steps -= N;
          if (steps !== 0) moveBy(steps);
        });
      });
    }

    function realPos() { return CLONES + active; }

    function xForPos(pos) {
      return -((pos - Math.floor(VISIBLE / 2)) * getStep());
    }

    function jumpTo(pos) {
      track.style.transition = 'none';
      track.style.transform  = 'translateX(' + xForPos(pos) + 'px)';
    }

    function slideTo(pos, ms, cb) {
      track.style.transition = 'transform ' + ms + 'ms cubic-bezier(.4,0,.2,1)';
      track.style.transform  = 'translateX(' + xForPos(pos) + 'px)';
      if (cb) setTimeout(cb, ms);
    }

    function refreshActive() {
      const rp = realPos();
      track.querySelectorAll('.bc-item').forEach(function (item, i) {
        item.classList.toggle('active', i === rp);
      });
    }

    function moveBy(steps) {
      if (isAnimating) return;
      isAnimating = true;

      slideTo(realPos() + steps, 420, function () {
        active = mod(active + steps, N);
        jumpTo(realPos());
        track.getBoundingClientRect(); // force reflow
        refreshActive();

        const b = brands[active];
        changeHero(b.title, b.text, b.car);

        isAnimating = false;
      });
    }

    buildTrack();
    jumpTo(realPos());
    refreshActive();

    $('#bcLeft').on('click',  function () { moveBy(-1); });
    $('#bcRight').on('click', function () { moveBy(1); });

    /* ── Touch swipe ── */
    let touchStartX = null;
    let touchStartT = null;
    let isDragging  = false;
    let dragOffset  = 0;

    viewport.addEventListener('touchstart', function (e) {
      if (isAnimating) return;
      touchStartX = e.touches[0].clientX;
      touchStartT = Date.now();
      isDragging  = true;
      dragOffset  = 0;
      track.style.transition = 'none';
    }, { passive: true });

    viewport.addEventListener('touchmove', function (e) {
      if (!isDragging) return;
      dragOffset = e.touches[0].clientX - touchStartX;
      track.style.transform = 'translateX(' + (xForPos(realPos()) + dragOffset) + 'px)';
    }, { passive: true });

    viewport.addEventListener('touchend', function () {
      if (!isDragging) return;
      isDragging = false;

      const velocity = Math.abs(dragOffset) / (Date.now() - touchStartT);
      const STEP     = getStep();

      let steps = 0;
      if (Math.abs(dragOffset) > STEP * 0.35 || velocity > 0.4) {
        steps = Math.round(-dragOffset / STEP);
        if (steps === 0) steps = dragOffset < 0 ? 1 : -1;
        steps = Math.max(-3, Math.min(3, steps));
      }

      if (steps !== 0) {
        moveBy(steps);
      } else {
        slideTo(realPos(), 300);
      }
    });

    /* ══════════════════════════════
       HERO CHANGE on brand select
    ══════════════════════════════ */
    function changeHero(title, text, image) {
      $('#heroTitle, #heroText')
        .removeClass('text-show')
        .addClass('text-hide');

      $('#heroCar').addClass('slide-left-out');

      setTimeout(function () {
        $('#heroTitle').html(title);
        $('#heroText').html(text);

        $('#heroCar')
          .attr('src', image)
          .removeClass('slide-left-out')
          .addClass('slide-right-in');

        $('#heroTitle').removeClass('text-hide').addClass('text-show');

        setTimeout(function () {
          $('#heroText').removeClass('text-hide').addClass('text-show');
        }, 200);

        setTimeout(function () {
          $('#heroCar').removeClass('slide-right-in');
        }, 700);

      }, 700);
    }

    /* ── Logo click → reset to Porsche ── */
    $('.logo-switch').on('click', function (e) {
      e.preventDefault();
      if (active === 0) return;
      let steps = -active;
      if (Math.abs(steps) > N / 2) steps = N + steps;
      moveBy(steps);
    });

  }); // end $(document).ready

})();