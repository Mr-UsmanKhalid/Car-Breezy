(function () {

  /* ── Auto-load CSS ── */
  function loadCSS() {
    const link = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = '../styles/services.css';
    document.head.appendChild(link);
  }

  /* ── Service data ── */
  const services = [
    {
      num:      '01',
      category: 'Mobility',
      title:    'Rent a Car',
      text:     'Hit the road in style. Choose from our curated fleet of premium and everyday vehicles — flexible terms, zero hassle.',
      price:    'From $99',
      unit:     '/day',
      img:      './Images/Services/rent-car.jpg',
      alt:      'Rent Car',
    },
    {
      num:      '02',
      category: 'Detailing',
      title:    'Car Wash & Detail',
      text:     'Showroom-ready results every time. Our certified detailers restore your car\'s shine inside and out.',
      price:    'From $29',
      unit:     '/wash',
      img:      './Images/Services/car-wash.jpg',
      alt:      'Car Wash',
    },
    {
      num:      '03',
      category: 'Maintenance',
      title:    'Car Repair',
      text:     'Certified technicians, quality parts, honest pricing. Get back on the road with confidence.',
      price:    'From $49',
      unit:     '/visit',
      img:      './Images/Services/Repair-car.avif',
      alt:      'Car Repair',
    },
  ];

  /* ── Build card HTML ── */
  function buildCard(s) {
    return `
      <div class="service-card">
        <span class="service-card-num">${s.num}</span>

        <div class="service-card-img-wrap">
          <img
            src="${s.img}"
            alt="${s.alt}"
            class="service-card-img"
            loading="lazy"
          >
        </div>

        <div class="service-card-body">
          <span class="service-card-category">${s.category}</span>
          <h3 class="service-card-title">${s.title}</h3>
          <p class="service-card-text">${s.text}</p>

          <div class="service-card-footer">
            <span class="service-card-price">
              ${s.price}<span>${s.unit}</span>
            </span>
            <button class="service-card-btn" aria-label="View ${s.title}">View</button>
          </div>
        </div>
      </div>
    `;
  }

  /* ── Render ── */
  function loadServices() {
    const placeholder = document.getElementById('services-component');
    if (!placeholder) return;

    placeholder.innerHTML = `
      <section class="services-section">

        <div class="services-header">
          <div class="services-header-left">
            <h2 class="services-title">Our Services</h2>
          </div>
          <span class="services-count-badge">${services.length} Services</span>
        </div>

        <div class="services-grid">
          ${services.map(buildCard).join('')}
        </div>

      </section>
    `;

    loadCSS();
  }

  /* ── Init ── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadServices);
  } else {
    loadServices();
  }

})();