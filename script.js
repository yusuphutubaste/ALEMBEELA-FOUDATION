document.addEventListener("DOMContentLoaded", () => {

  // 1. MWAKA WA SASA KIOTOMATIKI (Dynamic Year kwenye Footer)
  const currentYearSpan = document.getElementById("currentYear");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // 2. BADILI MUONEKANO (Dark / Light Mode)
  const themeToggle = document.getElementById("themeToggle");
  const htmlRoot = document.documentElement;

  const savedTheme = localStorage.getItem("alembeelaTheme") || "dark";
  htmlRoot.setAttribute("data-theme", savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = htmlRoot.getAttribute("data-theme");
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      htmlRoot.setAttribute("data-theme", nextTheme);
      localStorage.setItem("alembeelaTheme", nextTheme);
    });
  }

  // 3. MENYU YA SIMU (Mobile Hamburger)
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const navLinks = document.getElementById("navLinks");

  if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener("click", () => {
      hamburgerBtn.classList.toggle("active");
      navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        hamburgerBtn.classList.remove("active");
        navLinks.classList.remove("active");
      });
    });
  }

  // 4. UTAFUTAJI WA PAPO HAPO (Live Instant Search)
  const searchInput = document.getElementById("searchInput");
  const clearSearch = document.getElementById("clearSearch");
  const searchableItems = document.querySelectorAll(".searchable-item");

  if (searchInput) {
    searchInput.addEventListener("input", function() {
      const query = this.value.toLowerCase().trim();

      if (query.length > 0) {
        if (clearSearch) clearSearch.style.display = "inline-block";
      } else {
        if (clearSearch) clearSearch.style.display = "none";
      }

      searchableItems.forEach(item => {
        const keywords = (item.getAttribute("data-keywords") || "").toLowerCase();
        const text = item.innerText.toLowerCase();

        if (query === "" || keywords.includes(query) || text.includes(query)) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });
    });

    if (clearSearch) {
      clearSearch.addEventListener("click", () => {
        searchInput.value = "";
        clearSearch.style.display = "none";
        searchableItems.forEach(item => (item.style.display = ""));
        searchInput.focus();
      });
    }
  }

  // 5. KUHESABU TAKWIMU (Counter Animation)
  const counters = document.querySelectorAll(".counter");
  counters.forEach(counter => {
    counter.innerText = "0";
    const target = +counter.getAttribute("data-target");

    const updateCounter = () => {
      const current = +counter.innerText.replace("+", "");
      const increment = Math.max(1, Math.ceil(target / 30));

      if (current < target) {
        counter.innerText = `${current + increment}`;
        setTimeout(updateCounter, 30);
      } else {
        counter.innerText = `${target}+`;
      }
    };

    updateCounter();
  });

  // 6. FOMU YA MAWASILIANO & TAARIFA MPYA
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Ahsante sana! Ujumbe wako umefika kwa timu ya Alembeela Foundation.");
      contactForm.reset();
    });
  }

  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Ahsante kwa kujiunga nasi!");
      newsletterForm.reset();
    });
  }

});


