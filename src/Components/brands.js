/* ═══════════════════════════════════════
   BRANDS COMPONENT
   Injects into #brands-component
═══════════════════════════════════════ */

(function () {

  const brands = [
    { name: 'BMW',           count: 24, logo: './Images/logo/bmw_logo.png' },
    { name: 'Mercedes-Benz', count: 18, logo: './Images/logo/Mercedes_logo.png' },
    { name: 'Porsche',       count: 8,  logo: './Images/logo/Porsche_logo.png' },
    { name: 'Mclaren',       count: 14, logo: './Images/logo/Mclaren_logo.png' },
    { name: 'Lamborghini',   count: 4,  logo: './Images/logo/Lamborghini_logo.png' },
    { name: 'Honda',         count: 21, logo: './Images/logo/honda_logo.png' },
    { name: 'Toyota',        count: 32, logo: './Images/logo/Toyota_logo.png' },
    { name: 'Tesla',         count: 8,  logo: './Images/logo/Tesla_logo.png' },
    { name: 'Nissan',        count: 17, logo: './Images/logo/Nissan_logo.png' },
    { name: 'Ferrari',       count: 3,  logo: './Images/logo/Ferrari_logo.png' },
    { name: 'Audi',          count: 15, logo: './Images/logo/audi_logo.png' },
    { name: 'Bugatti',       count: 2,  logo: './Images/logo/Bugatti_logo.png' },
  ];

  /* ══════════════════════════════════════
     CSS LOADER
  ══════════════════════════════════════ */
  function loadCSS(){
    const link = document.createElement('link');
    link.rel   = 'stylesheet';
    link.href  = '../styles/brands.css';
    document.head.appendChild(link);
  }

  /* ══════════════════════════════════════
     BRAND CARD
  ══════════════════════════════════════ */
  function brandCard(b){
    return `
      <div class="br-card" data-brand="${b.name}">
        <img class="br-logo" src="${b.logo}" alt="${b.name}">
        <span class="br-name">${b.name}</span>
        <span class="br-count">${b.count} cars</span>
      </div>`;
  }

  /* ══════════════════════════════════════
     SECTION HTML
  ══════════════════════════════════════ */
  function brandsSection(){
    return `
      <section class="br-section" id="brands">
        <div class="br-inner">

          <div class="br-header">
            <div>
              <h2 class="br-title">Browse by Brands</h2>
              <p class="br-sub">Choose from the world's leading manufacturers</p>
            </div>
          </div>

          <div class="br-grid">
            ${brands.map(brandCard).join('')}
          </div>

        </div>
      </section>`;
  }

  /* ══════════════════════════════════════
     EVENT BINDING
  ══════════════════════════════════════ */
  function bindEvents(){
    document.querySelectorAll('.br-card').forEach(function(card){
      card.addEventListener('click', function(){
        document.querySelectorAll('.br-card').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
      });
    });
  }

  /* ══════════════════════════════════════
     INIT
  ══════════════════════════════════════ */
  function init(){
    const root = document.getElementById('brands-component');
    if(!root){ console.error('#brands-component not found'); return; }

    root.innerHTML = brandsSection();
    loadCSS();
    bindEvents();
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();