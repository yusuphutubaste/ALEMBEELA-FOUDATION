document.addEventListener("DOMContentLoaded", () => {
    // 1. Mwaka wa sasa kwenye footer
    const yearEl = document.getElementById("currentYear");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // 2. Menyu ya simu na kompyuta
    // Support both the current menuToggle ID and the older hamburgerBtn ID.
    const menuToggle = document.getElementById("menuToggle") || document.getElementById("hamburgerBtn");
    const closeMenuBtn = document.getElementById("closeMenuBtn");
    const navLinks = document.getElementById("navLinks");
    const menuBackdrop = document.getElementById("menuBackdrop");

    function setMenuOpen(isOpen) {
        if (navLinks) navLinks.classList.toggle("active", isOpen);
        if (menuBackdrop) menuBackdrop.classList.toggle("active", isOpen);
        if (menuToggle) menuToggle.setAttribute("aria-expanded", String(isOpen));
    }

    function closeMenu() {
        setMenuOpen(false);
    }

    if (menuToggle) {
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.addEventListener("click", () => {
            const isOpen = navLinks && navLinks.classList.contains("active");
            setMenuOpen(!isOpen);
        });
    }
    if (closeMenuBtn) closeMenuBtn.addEventListener("click", closeMenu);
    if (menuBackdrop) menuBackdrop.addEventListener("click", closeMenu);

    if (navLinks) {
        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", closeMenu);
        });
    }

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeMenu();
    });

    // 3. Kuchuja video kwenye Maktaba ya Video
    const filterButtons = document.querySelectorAll(".filter-btn");
    const videoCards = document.querySelectorAll(".video-card");

    filterButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            filterButtons.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.getAttribute("data-filter");
            videoCards.forEach((card) => {
                const category = card.getAttribute("data-category");
                if (filter === "all" || category === filter) {
                    card.style.display = "flex";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    // 4. Fomu ya mawasiliano
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Asante kwa kuwasiliana na Alembeela Foundation. Ujumbe wako umepokelewa.");
            contactForm.reset();
        });
    }

    // 5. Kubadili lugha na kutafsiri ukurasa mzima (ALL WEB)
    const languageSelector = document.getElementById("languageSelector");

    function setGoogleTranslateCookie(langCode) {
        const domain = window.location.hostname;
        if (!langCode || langCode === "sw") {
            document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            if (domain && domain !== "localhost") {
                document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${domain}`;
            }
            return;
        }
        const value = `/sw/${langCode}`;
        document.cookie = `googtrans=${value}; path=/;`;
        if (domain && domain !== "localhost") {
            document.cookie = `googtrans=${value}; path=/; domain=.${domain}`;
        }
    }

    function applySiteTranslation(targetLang) {
        setGoogleTranslateCookie(targetLang);

        const gtCombo = document.querySelector("select.goog-te-combo");
        if (gtCombo) {
            gtCombo.value = targetLang === "sw" ? "" : targetLang;
            gtCombo.dispatchEvent(new Event("change"));
            return;
        }

        // Ikiwa widget ya Google Translate bado inapakia, pakia upya ukurasa ili itafsiri ukurasa mzima
        window.location.reload();
    }

    if (languageSelector) {
        const match = document.cookie.match(/(?:^|;\s*)googtrans=\/sw\/([^;]+)/);
        if (match && match[1]) {
            const savedLang = match[1];
            const exists = Array.from(languageSelector.options).some((opt) => opt.value === savedLang);
            if (exists) {
                languageSelector.value = savedLang;
            }
        }

        languageSelector.addEventListener("change", (e) => {
            const selected = e.target.value;

            if (selected === "more") {
                const floatingBox = document.getElementById("google_translate_element");
                if (floatingBox) {
                    floatingBox.classList.toggle("open");
                }
                const gtCombo = document.querySelector("select.goog-te-combo");
                if (gtCombo) {
                    gtCombo.focus();
                }
                return;
            }

            applySiteTranslation(selected);
        });
    }
});
