/**
 * CarBreezy Footer Component
 * Usage: place <div id="carbreezy-footer"></div> in your HTML,
 * then load footer.js — it auto-loads its CSS from ./src/Styles/footer.css
 */

(function () {
  // ── Auto-load CSS ──────────────────────────────────────────────
  const link = document.createElement("link");
  link.rel  = "stylesheet";
  link.type = "text/css";
  link.href = "./src/Styles/footer.css";
  document.head.appendChild(link);

  // ── Ticker + Visitor Styles ────────────────────────────────────
  const tickerStyle = document.createElement("style");
  tickerStyle.textContent = `
    /* ── Live Ticker Strip ── */
    .footer-ticker-wrapper {
      background: #111;
      border-top: 1px solid rgba(255,255,255,0.07);
      border-bottom: 1px solid rgba(255,255,255,0.07);
      overflow: hidden;
      white-space: nowrap;
      padding: 6px 0;
      position: relative;
    }
    .footer-ticker-wrapper::before {
      content: "● LIVE";
      position: absolute;
      left: 0; top: 0; bottom: 0;
      display: flex;
      align-items: center;
      padding: 0 14px;
      background: #c0392b;
      color: #fff;
      font-family: 'Courier New', Courier, monospace;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 1.5px;
      z-index: 2;
    }
    .footer-ticker-wrapper::after {
      content: "";
      position: absolute;
      top: 0; right: 0; bottom: 0;
      width: 60px;
      background: linear-gradient(to right, transparent, #111);
      z-index: 1;
      pointer-events: none;
    }
    .footer-ticker-track {
      display: inline-flex;
      align-items: center;
      animation: ticker-scroll 40s linear infinite;
      padding-left: 70px;
    }
    .footer-ticker-track:hover { animation-play-state: paused; }
    .footer-ticker-item {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      color: #e0e0e0;
      font-family: 'Courier New', Courier, monospace;
      font-size: 12px;
      letter-spacing: 0.5px;
      padding: 0 28px;
    }
    .footer-ticker-item .ticker-icon { font-size: 13px; opacity: 0.75; }
    .footer-ticker-item .ticker-label {
      color: #888;
      text-transform: uppercase;
      font-size: 10px;
      letter-spacing: 1px;
      margin-right: 4px;
    }
    .footer-ticker-item .ticker-value { color: #f0c040; font-weight: 600; }
    .footer-ticker-sep { color: #444; font-size: 18px; line-height: 1; padding: 0 4px; }
    @keyframes ticker-scroll {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    /* ── White copyright ── */
    .footer-copyright { color: #ffffff !important; }
  `;
  document.head.appendChild(tickerStyle);

  (function () {
    const brands = [
      "Audi", "BMW", "Mercedes", "Tesla", "Porsche",
      "Honda", "Chevrolet", "Land Rover", "Volkswagen", "Ferrari"
    ];

    function buildMarquee(items) {
      const doubled = [...items, ...items];
      return doubled.map(b =>
        `<span class="footer-marquee-item">${b}<span class="footer-marquee-dot"></span></span>`
      ).join("");
    }

    function buildTickerSegment(locationText) {
      return `
        <span class="footer-ticker-item">
          <span class="ticker-icon">📅</span>
          <span class="ticker-label">Date</span>
          <span class="ticker-value cb-ticker-date">--</span>
        </span>
        <span class="footer-ticker-sep">·</span>
        <span class="footer-ticker-item">
          <span class="ticker-icon">🕐</span>
          <span class="ticker-label">Time</span>
          <span class="ticker-value cb-ticker-time">--:--:--</span>
        </span>
        <span class="footer-ticker-sep">·</span>
        <span class="footer-ticker-item">
          <span class="ticker-icon">📍</span>
          <span class="ticker-label">Location</span>
          <span class="ticker-value cb-ticker-location">${locationText}</span>
        </span>
        <span class="footer-ticker-sep">·</span>
        <span class="footer-ticker-item">
          <span class="ticker-icon">🚗</span>
          <span class="ticker-label">CarBreezy</span>
          <span class="ticker-value">Your Trusted Vehicle Partner</span>
        </span>
        <span class="footer-ticker-sep">·</span>
      `;
    }

    // ── Smooth scroll helper ──────────────────────────────────────
    function scrollTo(sectionId) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    const footerHTML = `
      <footer class="carbreezy-footer">

        <!-- Scrolling Brand Strip -->
        <div class="footer-marquee-wrapper">
          <div class="footer-marquee-track">${buildMarquee(brands)}</div>
        </div>

        <!-- Live Ticker -->
        <div class="footer-ticker-wrapper">
          <div class="footer-ticker-track" id="cb-ticker-track">
            ${buildTickerSegment("Locating&hellip;")}
            ${buildTickerSegment("Locating&hellip;")}
          </div>
        </div>

        <!-- Main Content -->
        <div class="footer-body">

          <!-- Brand Column -->
          <div class="footer-brand-col">
            <img src="./Image/logo/carb_logo1.png" alt="CarBreezy" class="footer-logo" height="40">
            <p class="footer-tagline">Your trusted partner in finding the perfect vehicle.</p>
          </div>

          <!-- Quick Links -->
          <div class="footer-links-col">
            <p class="footer-col-title">Quick Links</p>
            <ul class="footer-nav-list">
              <li><a href="#" data-scroll="hero-component">Home</a></li>
              <li><a href="#" data-scroll="car-listing-component">Cars</a></li>
              <li><a href="#" data-scroll="about-component">About Us</a></li>
              <li><a href="#" data-scroll="services-component">Services</a></li>
              <li><a href="#" data-scroll="brands-component">Brands</a></li>
              <li><a href="#" data-scroll="contact-component">Contact</a></li>
            </ul>
          </div>

          <!-- Follow Us -->
          <div class="footer-cat-col">
            <p class="footer-col-title">Follow Us</p>
            <ul class="footer-nav-list">
              <li><a href="#" target="_blank" rel="noopener">Instagram</a></li>
              <li><a href="#" target="_blank" rel="noopener">Facebook</a></li>
              <li><a href="#" target="_blank" rel="noopener">TikTok</a></li>
              <li><a href="#" target="_blank" rel="noopener">YouTube</a></li>
            </ul>
          </div>

          <!-- Information -->
          <div class="footer-info-col">
            <p class="footer-col-title">Information</p>

            <div class="footer-info-item">
              <div class="footer-info-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                </svg>
              </div>
              <div>
                <span class="footer-info-label">Visitors</span>
                <div class="cb-visitor-wrapper">
                  <span id="cb-visitor-display">0</span>
                </div>
              </div>
            </div>

            <div class="footer-info-item">
              <div class="footer-info-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/>
                </svg>
              </div>
              <div>
                <span class="footer-info-label">Location: </span>
                <span class="footer-info-value">
                  <span class="footer-status-dot"></span>Online
                </span>
              </div>
            </div>
          </div>

        </div><!-- /.footer-body -->

        <!-- Bottom Bar -->
        <div class="footer-bottom">
          <span class="footer-copyright">&copy; 2024 CarBreezy. All rights reserved.</span>
          <ul class="footer-legal-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Cookies</a></li>
          </ul>
        </div>

      </footer>
    `;

    const target = document.getElementById("carbreezy-footer") || document.body;
    target.innerHTML = footerHTML;

    // ── Bind smooth-scroll to Quick Links ────────────────────────
    target.querySelectorAll("a[data-scroll]").forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        scrollTo(this.getAttribute("data-scroll"));
      });
    });

    // ── Real visitor counter (localStorage) ─────────────────────
    // Each unique browser session counts as one visit.
    // The total is stored in localStorage so it persists across page reloads.
    const displayEl = document.getElementById("cb-visitor-display");

    function getCount() {
      return parseInt(localStorage.getItem("cb_visitor_count") || "0", 10);
    }

    function saveCount(n) {
      localStorage.setItem("cb_visitor_count", n);
    }

    function renderCount(n) {
      if (!displayEl) return;
      displayEl.textContent = n.toLocaleString();
    }

    // Only increment once per browser session (not on every page refresh)
    if (!sessionStorage.getItem("cb_visited")) {
      sessionStorage.setItem("cb_visited", "1");
      saveCount(getCount() + 1);
    }

    renderCount(getCount());

    // ── Live clock ──────────────────────────────────────────────
    function updateClock() {
      const now = new Date();
      const dateStr = now.toLocaleDateString("en-US", {
        weekday: "short", month: "short", day: "2-digit", year: "numeric"
      });
      const timeStr = now.toLocaleTimeString("en-US", {
        hour: "2-digit", minute: "2-digit", second: "2-digit"
      });
      document.querySelectorAll(".cb-ticker-date").forEach(el => el.textContent = dateStr);
      document.querySelectorAll(".cb-ticker-time").forEach(el => el.textContent = timeStr);
    }
    updateClock();
    setInterval(updateClock, 1000);

    // ── Geolocation ─────────────────────────────────────────────
    function setLocation(text) {
      document.querySelectorAll(".cb-ticker-location").forEach(el => el.textContent = text);
    }

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (pos) {
          const { latitude, longitude } = pos.coords;
          fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`,
            { headers: { "Accept-Language": "en" } }
          )
            .then(r => r.json())
            .then(data => {
              const a = data.address || {};
              const city    = a.city || a.town || a.village || a.county || "";
              const country = a.country || "";
              setLocation([city, country].filter(Boolean).join(", ") || "Earth");
            })
            .catch(() => {
              setLocation(`${latitude.toFixed(2)}°N, ${longitude.toFixed(2)}°E`);
            });
        },
        function () { setLocation("Location unavailable"); },
        { timeout: 8000, maximumAge: 300000 }
      );
    } else {
      setLocation("Geolocation unsupported");
    }

  })();

})();