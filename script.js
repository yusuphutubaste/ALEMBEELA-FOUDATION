// Huongeza namba taratibu (Counter Animation)
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  counters.forEach(counter => {
    counter.innerText = "0";

    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const current = +counter.innerText;
      const increment = target / 60; // Kasi ya kuhesabu

      if (current < target) {
        counter.innerText = `${Math.ceil(current + increment)}`;
        setTimeout(updateCounter, 30);
      } else {
        counter.innerText = `${target}+`;
      }
    };

    updateCounter();
  });

  // Uthibitisho wa kutuma ujumbe (Contact Form Handler)
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Ahsante! Ujumbe wako umepokelewa. Tutawasiliana nawe hivi karibuni.");
      contactForm.reset();
    });
  }
});
