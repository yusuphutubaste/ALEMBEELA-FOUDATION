document.addEventListener("DOMContentLoaded", () => {

  // 1. Dark Mode / Light Mode Switch (Ikiwa na kumbukumbu ya localStorage)
  const themeToggle = document.getElementById("themeToggle");
  const htmlRoot = document.documentElement;

  // Angalia uchaguzi uliopita
  const savedTheme = localStorage.getItem("alembeelaTheme") || "dark";
  htmlRoot.setAttribute("data-theme", savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = htmlRoot.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      htmlRoot.setAttribute("data-theme", newTheme);
      localStorage.setItem("alembeelaTheme", newTheme);
    });
  }

  // 2. Mobile Menu (Hamburger Toggle)
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const navLinks = document.getElementById("navLinks");

  if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener("click", () => {
      hamburgerBtn.classList.toggle("active");
      navLinks.classList.toggle("active");
    });

    // Funga menu mtu akibofya kiungo chochote
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        hamburgerBtn.classList.remove("active");
        navLinks.classList.remove("active");
      });
    });
  }

  // 3. Live Instant Search Bar
  const searchInput = document.getElementById("searchInput");
  const clearSearch = document.getElementById("clearSearch");
  const searchableItems = document.querySelectorAll(".searchable-item");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const term = e.target.value.toLowerCase().trim();

      if (term.length > 0) {
        clearSearch.style.display = "block";
      } else {
        clearSearch.style.display = "none";
      }

      searchableItems.forEach(item => {
        const keywords = (item.getAttribute("data-keywords") || "").toLowerCase();
        const text = item.textContent.toLowerCase();

        if (keywords.includes(term) || text.includes(term)) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });
    });

    clearSearch.addEventListener("click", () => {
      searchInput.value = "";
      clearSearch.style.display = "none";
      searchableItems.forEach(item => (item.style.display = ""));
      searchInput.focus();
    });
  }

  // 4. Interactive Photo Lightbox Modal
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightboxModal = document.getElementById("lightboxModal");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const closeLightbox = document.getElementById("closeLightbox");

  galleryItems.forEach(item => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      const caption = item.getAttribute("data-caption");

      if (img && lightboxModal) {
        lightboxImg.src = img.src;
        lightboxCaption.innerText = caption || img.alt;
        lightboxModal.style.display = "flex";
      }
    });
  });

  if (closeLightbox && lightboxModal) {
    closeLightbox.addEventListener("click", () => {
      lightboxModal.style.display = "none";
    });

    lightboxModal.addEventListener("click", (e) => {
      if (e.target === lightboxModal) {
        lightboxModal.style.display = "none";
      }
    });
  }

  // 5. Takwimu Animated Counter
  const counters = document.querySelectorAll(".counter");
  let animated = false;

  const runCounters = () => {
    counters.forEach(counter => {
      counter.innerText = "0";
      const target = +counter.getAttribute("data-target");

      const updateCounter = () => {
        const current = +counter.innerText.replace("+", "");
        const increment = Math.max(1, Math.ceil(target / 50));

        if (current < target) {
          counter.innerText = `${current + increment}`;
          setTimeout(updateCounter, 25);
        } else {
          counter.innerText = `${target}+`;
        }
      };

      updateCounter();
    });
  };

  // Anzisha namba ukurasa ukipakia
  runCounters();

  // 6. Smooth Scrolling for Internal Links
  const allAnchorLinks = document.querySelectorAll('a[href^="#"]');
  allAnchorLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href");
      if (targetId && targetId.length > 1) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  // 7. Contact Form Handler
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Ahsante! Ujumbe wako umepokelewa na timu ya Alembeela Foundation.");
      contactForm.reset();
    });
  }

  // 8. Newsletter Form Handler
  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Ahsante kwa kujiunga na jarida rasmi la Alembeela Foundation!");
      newsletterForm.reset();
    });
  }

});
