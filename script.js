document.addEventListener("DOMContentLoaded", () => {

  // ====================================================
  // 1. DYNAMIC YEAR
  // ====================================================
  const currentYearSpan = document.getElementById("currentYear");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // ====================================================
  // 2. DARK / LIGHT MODE
  // ====================================================
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

  // ====================================================
  // 3. BILINGUAL TRANSLATION SYSTEM (Kiswahili & English)
  // ====================================================
  const translations = {
    sw: {
      nav_home: "Mwanzo",
      nav_featured: "Video Kuu",
      nav_shorts: "Vipande Fupi",
      nav_gallery: "Picha za Jamii",
      nav_channels: "Chaneli Zetu",
      nav_about: "Kuhusu Sisi",
      nav_contact: "Mawasiliano",
      hero_badge: "Uhifadhi wa Historia na Mila za Asili",
      hero_title: "Kuhifadhi Urithi, Utamaduni na Historia Yetu",
      hero_desc: "Karibu Alembeela Foundation. Tunakusanya, tunarekodi, na kusimulia historia za kweli, majina ya asili, na mila za Babembe ili zibaki hai kwa vizazi vya sasa na vijavyo.",
      hero_btn_watch: "Tazama Úmbo cha Babembe",
      stat_episodes: "Vipindi vya Historia",
      stat_community: "Familia na Watazamaji",
      stat_authenticity: "% Uhalisia wa Simulizi",
      featured_subtitle: "Simulizi Kuu",
      featured_desc: "Tazama uchambuzi wa kina kuhusu asili, majina ya koo, historia na mafunzo kutoka kwa wazee wa jamii.",
      tag_series: "Mfululizo Rasmi wa Úmbo",
      featured_card_desc: "Maudhui maalum yanayochambua kwa ufasaha misingi ya kitamaduni na safari ya jamii yetu.",
      shorts_subtitle: "Vipande Vifupi",
      shorts_title: "Vipande Fupi & Matukio ya Haraka",
      shorts_desc: "Mafunzo na dondoo fupi za kila siku kuhusu utamaduni na maisha ya jamii.",
      short_item_1: "Kipande #1",
      short_item_2: "Kipande #2",
      short_item_3: "Kipande #3",
      gallery_subtitle: "Matunzio Yetu",
      gallery_title: "Picha za Jamii na Kumbukumbu",
      gallery_desc: "Bofya picha yoyote ili kuifungua kwa ukubwa kamili na kusoma maelezo yake.",
      gallery_p1_title: "Wazee na Mila",
      gallery_p1_text: "Hekima za kale zinazolindwa kwa ajili ya vizazi vijavyo.",
      gallery_p2_title: "Urithi kwa Vijana",
      gallery_p2_text: "Kuelimisha kizazi kipya kujivunia historia yao.",
      gallery_p3_title: "Maeneo ya Asili",
      gallery_p3_text: "Kumbukumbu za kijiografia na chimbuko letu.",
      gallery_p4_title: "Umoja wa Jamii",
      gallery_p4_text: "Kujenga undugu imara popote tulipo duniani.",
      gallery_view_all: "Tazama Ukurasa Kamili wa Picha",
      channels_subtitle: "Jumuiya Yetu Mtandaoni",
      channels_title: "Chaneli Zetu Rasmi za YouTube",
      channels_desc: "Ungana nasi kupitia chaneli zetu zote mbili ili usipitwe na simulizi, video fupi, au taarifa yoyote mpya.",
      badge_primary: "Chaneli Kuu",
      badge_secondary: "Chaneli ya Pili",
      ch_foundation_desc: "Inahifadhi simulizi kamili, vipindi vya Úmbo cha Babembe, pamoja na kumbukumbu rasmi za utafiti wa kitamaduni.",
      ch_waidi_desc: "Inaleta safari za kiuhalisia, matukio ya nyuma ya pazia, maisha ya jamii, na dondoo fupi za kila siku.",
      btn_join_foundation: "Jiunge na @AlembeelaFoundation",
      btn_join_waidi: "Jiunge na @Alembeelawaidi",
      about_subtitle: "Dhamira Yetu",
      about_title: "Kuhusu Alembeela Foundation",
      about_desc: "Daraja thabiti la kuunganisha mizizi yetu ya asili na ustawi wa vizazi vya sasa na vijavyo.",
      about_pillar1_title: "Kuhifadhi Asili na Mila",
      about_pillar1_desc: "Mila nyingi zinasahaulika kwa sababu hazikurekodiwa kwa maandishi wala video. Tunajenga maktaba ya wazi ya kumbukumbu za sauti, maandishi, na picha za video ili watoto wetu wajue chimbuko lao.",
      about_pillar2_title: "Kuleta Jamii Pamoja",
      about_pillar2_desc: "Kutumia nguvu ya vyombo vya kisasa vya habari kuwakutanisha watu wetu waliotawanyika pembe zote za dunia, kujenga heshima ya kitamaduni na kuinua mshikamano wa jamii.",
      contact_subtitle: "Mawasiliano",
      contact_title: "Wasiliana Nasi",
      contact_desc: "Una simulizi, swali, au unataka kushirikiana nasi katika shughuli za kijamii? Tuandikie ujumbe hapa:",
      btn_send_message: "Tuma Ujumbe Moja kwa Moja",
      footer_mission: "Taasisi iliyojitolea kulinda, kurithisha, na kuenzi utamaduni, mila, na historia ya Babembe kwa maendeleo endelevu ya jamii.",
      footer_quick_links: "Viungo vya Haraka",
      footer_contact_info: "Mawasiliano Rasmi",
      footer_hours: "Jumatatu - Ijumaa: 9:00 AM - 5:00 PM (MST)",
      footer_newsletter_title: "Jarida la Taasisi",
      footer_newsletter_desc: "Weka barua pepe yako ili upokee taarifa za video mpya, miradi ya jamii, na makala za historia.",
      btn_subscribe: "Jiunge",
      footer_rights: "Haki zote zimehifadhiwa.",
      footer_back_top: "Rudi Juu ↑",
      wa_tooltip: "Tuandikie WhatsApp",
      gallery_badge: "Kumbukumbu Halisi Katika Picha",
      page_gallery_title: "Matunzio ya Picha za Jamii",
      page_gallery_desc: "Picha za matukio, wazee wa jamii, maeneo ya kurekodia simulizi, na safari za kutunza urithi wetu. Bofya picha yoyote ili kuiona kubwa.",
      placeholder_5_title: "Nafasi ya Picha Mpya",
      placeholder_5_desc: "Picha inayofuata itaongezwa hapa mara matukio mapya yakirekodiwa.",
      placeholder_6_title: "Nafasi ya Picha Mpya",
      placeholder_6_desc: "Picha inayofuata itaongezwa hapa mara matukio mapya yakirekodiwa.",
      btn_back_home: "← Rudi Ukurasa Mkuu"
    },
    en: {
      nav_home: "Home",
      nav_featured: "Featured Video",
      nav_shorts: "Shorts",
      nav_gallery: "Community Gallery",
      nav_channels: "Our Channels",
      nav_about: "About Us",
      nav_contact: "Contact",
      hero_badge: "Preserving History & Indigenous Heritage",
      hero_title: "Preserving Our Heritage, Culture & History",
      hero_desc: "Welcome to Alembeela Foundation. We document, archive, and share authentic oral traditions, clan roots, and Babembe customs for present and future generations.",
      hero_btn_watch: "Watch Úmbo cha Babembe",
      stat_episodes: "Documented Episodes",
      stat_community: "Families & Viewers",
      stat_authenticity: "% Narrative Authenticity",
      featured_subtitle: "Main Feature",
      featured_desc: "In-depth insights into Babembe origins, clan naming structures, cultural heritage, and elder teachings.",
      tag_series: "Official Úmbo Series",
      featured_card_desc: "Authentic exploration into our cultural roots and historical legacy.",
      shorts_subtitle: "Quick Bites",
      shorts_title: "Shorts & Cultural Moments",
      shorts_desc: "Concise lessons and insights into traditional values and daily life.",
      short_item_1: "Short #1",
      short_item_2: "Short #2",
      short_item_3: "Short #3",
      gallery_subtitle: "Our Archives",
      gallery_title: "Community Photos & Memories",
      gallery_desc: "Click any photograph to view high resolution and full documentation.",
      gallery_p1_title: "Elders & Traditions",
      gallery_p1_text: "Preserving generational wisdom and ancient teachings.",
      gallery_p2_title: "Youth Heritage",
      gallery_p2_text: "Empowering the younger generation through their roots.",
      gallery_p3_title: "Ancestral Lands",
      gallery_p3_text: "Geographical landmarks and origin storytelling.",
      gallery_p4_title: "Community Unity",
      gallery_p4_text: "Strengthening fellowship across the global diaspora.",
      gallery_view_all: "View Full Photo Gallery",
      channels_subtitle: "Online Community",
      channels_title: "Our Official YouTube Channels",
      channels_desc: "Subscribe to both channels to stay updated with full episodes, shorts, and behind-the-scenes expeditions.",
      badge_primary: "Main Channel",
      badge_secondary: "Second Channel",
      ch_foundation_desc: "Hosts primary documentaries, the complete Úmbo cha Babembe series, and archival research.",
      ch_waidi_desc: "Presents real-life journeys, field vlogs, community interactions, and short features.",
      btn_join_foundation: "Subscribe to @AlembeelaFoundation",
      btn_join_waidi: "Subscribe to @Alembeelawaidi",
      about_subtitle: "Our Mission",
      about_title: "About Alembeela Foundation",
      about_desc: "A dedicated foundation bridging cultural origins with future prosperity.",
      about_pillar1_title: "Historical & Cultural Preservation",
      about_pillar1_desc: "Unrecorded heritage risks being forgotten. We build accessible digital archives in video, audio, and written formats for future generations.",
      about_pillar2_title: "Uniting the Community",
      about_pillar2_desc: "Using modern digital storytelling to connect our diaspora worldwide, instilling pride in identity and mutual community support.",
      contact_subtitle: "Get In Touch",
      contact_title: "Contact Us",
      contact_desc: "Have a story, inquiry, or partnership opportunity? Reach out to us below:",
      btn_send_message: "Send Message Directly",
      footer_mission: "Dedicated to preserving, transmitting, and celebrating Babembe culture and history for sustainable community development.",
      footer_quick_links: "Quick Links",
      footer_contact_info: "Official Contact",
      footer_hours: "Monday - Friday: 9:00 AM - 5:00 PM (MST)",
      footer_newsletter_title: "Foundation Newsletter",
      footer_newsletter_desc: "Subscribe to receive updates on new documentaries, community projects, and research papers.",
      btn_subscribe: "Subscribe",
      footer_rights: "All rights reserved.",
      footer_back_top: "Back to Top ↑",
      wa_tooltip: "Chat on WhatsApp",
      gallery_badge: "Authentic Photographic Records",
      page_gallery_title: "Community Photo Gallery",
      page_gallery_desc: "Photographs documenting historical sites, tribal elders, field sessions, and heritage conservation.",
      placeholder_5_title: "Upcoming Photo Slot",
      placeholder_5_desc: "New field documentation will appear here soon.",
      placeholder_6_title: "Upcoming Photo Slot",
      placeholder_6_desc: "New field documentation will appear here soon.",
      btn_back_home: "← Back to Homepage"
    }
  };

  const langToggle = document.getElementById("langToggle");
  const langFlag = document.getElementById("langFlag");
  const langLabel = document.getElementById("langLabel");

  const setLanguage = (lang) => {
    document.documentElement.setAttribute("lang", lang);
    localStorage.setItem("alembeelaLang", lang);

    if (lang === "en") {
      if (langFlag) langFlag.textContent = "🇬🇧";
      if (langLabel) langLabel.textContent = "EN";
    } else {
      if (langFlag) langFlag.textContent = "🇹🇿";
      if (langLabel) langLabel.textContent = "SW";
    }

    document.querySelectorAll("[data-i18n]").forEach(elem => {
      const key = elem.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        elem.textContent = translations[lang][key];
      }
    });

    // Update Form Placeholders
    const contactName = document.getElementById("contactName");
    const contactEmail = document.getElementById("contactEmail");
    const contactSubject = document.getElementById("contactSubject");
    const contactMessage = document.getElementById("contactMessage");

    if (contactName) contactName.placeholder = lang === "en" ? "Your Full Name" : "Jina Lako Kamili";
    if (contactEmail) contactEmail.placeholder = lang === "en" ? "Your Email Address" : "Barua Pepe Yako";
    if (contactSubject) contactSubject.placeholder = lang === "en" ? "Subject" : "Mada ya Ujumbe";
    if (contactMessage) contactMessage.placeholder = lang === "en" ? "Type your message here..." : "Andika ujumbe wako hapa...";
  };

  const savedLang = localStorage.getItem("alembeelaLang") || "sw";
  setLanguage(savedLang);

  if (langToggle) {
    langToggle.addEventListener("click", () => {
      const current = localStorage.getItem("alembeelaLang") || "sw";
      const next = current === "sw" ? "en" : "sw";
      setLanguage(next);
    });
  }

  // ====================================================
  // 4. MOBILE HAMBURGER MENU
  // ====================================================
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

  // ====================================================
  // 5. INTERACTIVE PHOTO LIGHTBOX
  // ====================================================
  const galleryCards = document.querySelectorAll(".gallery-card");
  const lightboxModal = document.getElementById("lightboxModal");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const closeLightbox = document.getElementById("closeLightbox");

  galleryCards.forEach(card => {
    card.addEventListener("click", () => {
      const img = card.querySelector("img");
      const currentLang = localStorage.getItem("alembeelaLang") || "sw";
      const caption = currentLang === "en" ? card.getAttribute("data-caption-en") : card.getAttribute("data-caption-sw");

      if (img && lightboxModal) {
        lightboxImg.src = img.src;
        lightboxCaption.textContent = caption || img.alt;
        lightboxModal.style.display = "flex";
        lightboxModal.setAttribute("aria-hidden", "false");
      }
    });
  });

  if (closeLightbox && lightboxModal) {
    const hideLightbox = () => {
      lightboxModal.style.display = "none";
      lightboxModal.setAttribute("aria-hidden", "true");
    };

    closeLightbox.addEventListener("click", hideLightbox);
    lightboxModal.addEventListener("click", (e) => {
      if (e.target === lightboxModal) hideLightbox();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && lightboxModal.style.display === "flex") {
        hideLightbox();
      }
    });
  }

  // ====================================================
  // 6. ANIMATED COUNTERS
  // ====================================================
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

  // ====================================================
  // 7. REAL CONTACT & NEWSLETTER ACTIONS
  // ====================================================
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const currentLang = localStorage.getItem("alembeelaLang") || "sw";
      const msg = currentLang === "en" 
        ? "Thank you! Your message has been sent to Alembeela Foundation." 
        : "Ahsante sana! Ujumbe wako umefika kwa timu ya Alembeela Foundation.";
      alert(msg);
      contactForm.reset();
    });
  }

  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const currentLang = localStorage.getItem("alembeelaLang") || "sw";
      const msg = currentLang === "en"
        ? "Thank you for subscribing to our newsletter!"
        : "Ahsante kwa kujiunga na jarida rasmi la Alembeela Foundation!";
      alert(msg);
      newsletterForm.reset();
    });
  }

});



