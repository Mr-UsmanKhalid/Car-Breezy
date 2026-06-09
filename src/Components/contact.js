(function () {

  function loadCSS() {
    const link = document.createElement('link');
    link.rel   = 'stylesheet';
    link.href  = '../styles/contact.css';
    document.head.appendChild(link);
  }

  function handleContactForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const fname   = form.querySelector('input[name="fname"]').value;
      const lname   = form.querySelector('input[name="lname"]').value;
      const email   = form.querySelector('input[name="email"]').value;
      const phone   = form.querySelector('input[name="phone"]').value;
      const message = form.querySelector('textarea[name="message"]').value;

      if (fname && lname && email && phone && message) {
        const successMsg = form.querySelector('.success-msg');
        successMsg.style.display = 'block';
        form.reset();
        setTimeout(function () {
          successMsg.style.display = 'none';
        }, 4000);
      }
    });
  }

  function loadContact() {
    const placeholder = document.getElementById('contact-component');
    if (!placeholder) return;

    placeholder.innerHTML = `
      <section class="contact-section">
        <div class="contact-inner">

          <!-- Header -->
          <div class="contact-header">
            <span class="contact-eyebrow">Get In Touch</span>
            <h2 class="section-title">Get in <span class="highlight">Touch</span></h2>
            <p class="section-subtitle">Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          </div>

          <!-- Layout -->
          <div class="contact-layout">

            <!-- Form -->
            <div class="form-side">
              <form class="contact-form" method="POST">

                <div class="form-row">
                  <div class="form-group">
                    <label class="form-label">First Name</label>
                    <input type="text" name="fname" class="form-input" placeholder="John" required>
                  </div>
                  <div class="form-group">
                    <label class="form-label">Last Name</label>
                    <input type="text" name="lname" class="form-input" placeholder="Doe" required>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label class="form-label">Email</label>
                    <input type="email" name="email" class="form-input" placeholder="john@example.com" required>
                  </div>
                  <div class="form-group">
                    <label class="form-label">Phone</label>
                    <input type="tel" name="phone" class="form-input" placeholder="+92 (300) 123-4567" required>
                  </div>
                </div>

                <div class="form-group">
                  <label class="form-label">Message</label>
                  <textarea name="message" class="form-input form-textarea" placeholder="Tell us how we can help..." required></textarea>
                </div>

                <button type="submit" class="send-btn">Send Message</button>

                <div class="success-msg">
                  <i class="fa-solid fa-circle-check"></i> Message sent successfully!
                </div>

              </form>
            </div>

            <!-- Info -->
            <div class="info-side">

              <div class="info-item">
                <div class="info-icon"><i class="fa-solid fa-map-marker-alt"></i></div>
                <div>
                  <h3 class="info-title">Address</h3>
                  <p class="info-text">123 Motor Street, Auto City, PAK 12345</p>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon"><i class="fa-solid fa-phone"></i></div>
                <div>
                  <h3 class="info-title">Phone</h3>
                  <p class="info-text">+92 (300) 123-4567</p>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon"><i class="fa-solid fa-envelope"></i></div>
                <div>
                  <h3 class="info-title">Email</h3>
                  <p class="info-text">info@carbreezy.com</p>
                </div>
              </div>

              <div class="hours-card">
                <h4 class="hours-title">Business Hours</h4>
                <div class="hours-list">
                  <div class="hours-row">
                    <span>Monday – Friday</span>
                    <span>9:00 AM – 6:00 PM</span>
                  </div>
                  <div class="hours-row">
                    <span>Saturday</span>
                    <span>10:00 AM – 4:00 PM</span>
                  </div>
                  <div class="hours-row closed">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    `;

    loadCSS();
    handleContactForm();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadContact);
  } else {
    loadContact();
  }

})();