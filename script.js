document.addEventListener("DOMContentLoaded", () => {
  // 1. Uhuishaji wa Namba za Takwimu (Animated Number Counters)
  const counters = document.querySelectorAll(".counter");

  counters.forEach(counter => {
    counter.innerText = "0";

    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const current = +counter.innerText.replace("+", "");
      const increment = Math.max(1, Math.ceil(target / 60));

      if (current < target) {
        counter.innerText = `${current + increment}`;
        setTimeout(updateCounter, 25);
      } else {
        counter.innerText = `${target}+`;
      }
    };

    updateCounter();
  });

  // 2. Kuteleza Laini kwenye Menu (Smooth Scrolling)
  const menuLinks = document.querySelectorAll(".nav-links a, .hero-buttons a, .footer-nav a");

  menuLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      
      if (targetId && targetId.startsWith("#")) {
        e.preventDefault();
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth"
          });
        }
      }
    });
  });

  // 3. Ushughulikiaji wa Fomu ya Mawasiliano (Contact Form)
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const nameInput = contactForm.querySelector('input[type="text"]').value;
      alert(`Ahsante sana ${nameInput}! Ujumbe wako umepokelewa na timu ya Alembeela Foundation.`);
      contactForm.reset();
    });
  }

  // 4. Ushughulikiaji wa Jarida (Newsletter Form)
  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Ahsante kwa kujiunga na jarida letu la Alembeela Foundation!");
      newsletterForm.reset();
    });
  }
});
