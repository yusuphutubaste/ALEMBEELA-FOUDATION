document.addEventListener("DOMContentLoaded", () => {
  // 1. Uhuishaji wa Namba za Takwimu (Animated Number Counters)
  // Mtumiaji akifungua ukurasa, namba zinaanza kuhesabu taratibu hadi zifike mwisho
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

  // 2. Kufanya Urambazaji Uende Laini (Smooth Scrolling)
  // Mtumiaji akibofya kiungo kwenye menu, ukurasa unashuka taratibu badala ya kuruka ghafla
  const menuLinks = document.querySelectorAll(".nav-links a, .hero-buttons a");

  menuLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      
      // Angalia kama ni kiungo cha ndani ya ukurasa (chenye #)
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

  // 3. Ushughulikiaji wa Fomu ya Mawasiliano (Contact Form Handler)
  // Mtu akituma ujumbe, inampa uthibitisho na kuzuia ukurasa kujipakia upya
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      // Hapa unaweza kuona jina la mtumaji
      const nameInput = contactForm.querySelector('input[type="text"]').value;

      alert(`Ahsante sana ${nameInput}! Ujumbe wako umepokelewa na timu ya Alembeela Foundation.`);
      
      // Safisha fomu baada ya kutuma
      contactForm.reset();
    });
  }
});
