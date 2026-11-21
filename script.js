document.addEventListener("DOMContentLoaded", () => {

  // 1. MWAKA WA KIOTOMATIKI (Dynamic Year kwenye Footer)
  const currentYearSpan = document.getElementById("currentYear");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // 2. DARK MODE / LIGHT MODE SWITCH (Inafanya kazi 100%)
  const themeToggle = document.getElementById("themeToggle");
  const htmlRoot = document.documentElement;

  // Angalia mandhari iliyohifadhiwa au anza na dark
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

  // 3. MENU YA SIMU (Mobile Hamburger Toggle)
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const navLinks = document.getElementById("navLinks");

  if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener("click", () => {
      hamburgerBtn.classList.toggle("active");
      navLinks.classList.toggle("active");
    });

    // Funga menu kiungo kikibofywa
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        hamburgerBtn.classList.remove("active");
        navLinks.classList.remove("active");
      });
    });
  }

  // 4. LIVE INSTANT SEARCH (Inatafuta video, Shorts, na kadi)
  const searchInput = document.getElementById("searchInput");
  const clearSearch = document.getElementById("clearSearch");
  const searchableItems = document.querySelectorAll(".searchable-item");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const term = e.target.value.toLowerCase().trim();

      if (term.length > 0) {
        if (clearSearch) clearSearch.style.display = "inline-block";
      } else {
        if (clearSearch) clearSearch.style.display = "none";
      }

      searchableItems.forEach(item => {
        const keywords = (item.getAttribute("data-keywords") || "").toLowerCase();
        const text = item.innerText.toLowerCase();

        if (term === "" || keywords.includes(term) || text.includes(term)) {
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

  // 5. TAKWIMU ANIMATED COUNTERS
  const counters = document.querySelectorAll(".counter");
  counters.forEach(counter => {
    counter.innerText = "0";
    const target = +counter.getAttribute("data-target");

    const updateCounter = () => {
      const current = +counter.innerText.replace("+", "");
      const increment = Math.max(1, Math.ceil(target / 40));

      if (current < target) {
        counter.innerText = `${current + increment}`;
        setTimeout(updateCounter, 25);
      } else {
        counter.innerText = `${target}+`;
      }
    };

    updateCounter();
  });

  // 6. CONTACT & NEWSLETTER FORM HANDLERS
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Ahsante! Ujumbe wako umepokelewa na timu ya Alembeela Foundation.");
      contactForm.reset();
    });
  }

  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Ahsante kwa kujiunga na jarida letu!");
      newsletterForm.reset();
    });
  }

});
