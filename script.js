/* =========================================================
   1. MENYU YA SIMU NA VIFAA TOFAUTI (MOBILE DRAWER MENU)
   ========================================================= */
const menuToggle = document.getElementById('menuToggle');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const navLinks = document.getElementById('navLinks');
const menuBackdrop = document.getElementById('menuBackdrop');

function openMobileMenu() {
    if (navLinks) navLinks.classList.add('active');
    if (menuBackdrop) menuBackdrop.classList.add('active');
}

function closeMobileMenu() {
    if (navLinks) navLinks.classList.remove('active');
    if (menuBackdrop) menuBackdrop.classList.remove('active');
}

if (menuToggle) menuToggle.addEventListener('click', openMobileMenu);
if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeMobileMenu);
if (menuBackdrop) menuBackdrop.addEventListener('click', closeMobileMenu);

if (navLinks) {
    navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMobileMenu);
    });
}

/* =========================================================
   2. KIBADILISHA LUGHA (KISWAHILI, KIBEMBE, ENGLISH, FR, RN, ES)
   ========================================================= */
const translations = {
    sw: {
        nav_home: "Mwanzo",
        nav_about: "Kuhusu Sisi",
        nav_teachings: "Mafundisho",
        nav_videos: "Maktaba ya Video",
        nav_photos: "Picha za Jamii",
        nav_contact: "Mawasiliano",
        hero_tag: "OUR HERITAGE • OUR IDENTITY • OUR HISTORY",
        hero_title: "Karibu Alembeela Foundation",
        hero_desc: "Jukwaa rasmi la kidijitali na taasisi ya kijamii iliyojikita katika kufundisha Úmbo Cha Babembe, kuhifadhi historia, lugha ya Kibembe, na kujenga daraja la upendo na maadili mema kati ya wazee na kizazi kipya duniani kote.",
        btn_watch: "Tazama Mafundisho",
        btn_gallery: "Picha za Jamii",
        about_kicker: "CHIMBUKO NA MAONO",
        about_title: "Kuhusu Alembeela Foundation",
        founder_role: "Mwanzilishi — Alembeela Foundation",
        bio_heading: "Sauti ya Urithi, Hekima ya Wazee na Ujenzi wa Jamii",
        pillars_kicker: "TUNACHOFUNDISHA",
        pillars_title: "Nguzo Nne za Kuelimishana",
        p1_title: "Úmbo Cha Babembe",
        p2_title: "Asili na Nasaba",
        p3_title: "Lugha ya Kibembe",
        p4_title: "Maadili, Upendo & Amani",
        vid_kicker: "TAZAMA NA SIKILIZA",
        vid_title: "Maktaba ya Video (Video Library)",
        filter_all: "Zote",
        filter_umbo: "Úmbo Cha Babembe",
        filter_history: "Asili & Historia",
        filter_values: "Maadili & Familia",
        btn_more_videos: "Tazama Video Zaidi Kwenye Chaneli Yetu",
        contact_kicker: "UNGANA NASI",
        contact_title: "Mawasiliano na Ushirikiano",
        btn_send: "Tuma Ujumbe",
        footer_links: "Kurasa Muhimu",
        footer_topics: "Mada Kuu",
        footer_rights: "Haki zote zimehifadhiwa.",
        ph_name: "Jina Lako Kamili",
        ph_email: "Barua Pepe Yako (Email)",
        ph_msg: "Andika ujumbe wako au swali hapa..."
    },
    bem: {
        nav_home: "Mwaambo",
        nav_about: "Bikwatene na Itu",
        nav_teachings: "Mafundisho",
        nav_videos: "Video za Úmbo",
        nav_photos: "Bikwato (Picha)",
        nav_contact: "Tubonane",
        hero_tag: "UBULONGO • MILA • ÚMBO • BULEMBO",
        hero_title: "Mwaishibila mu Alembeela Foundation",
        hero_desc: "Lukala lwa kufundisha Úmbo Cha Babembe, kubika historia, lulemi lwa Kibembe, na kubaka bulalo bwa lutondo na bulembo pakati ka bakulu na bana ba lelo mu nsi yose.",
        btn_watch: "Lola Mafundisho",
        btn_gallery: "Lola Bikwato",
        about_kicker: "MWANDI NA MAONO",
        about_title: "Bikwatene na Alembeela Foundation",
        founder_role: "Mwandi — Alembeela Foundation",
        bio_heading: "Izwi lya Ubulongo, Bwenge bwa Bakulu na Bulembo",
        pillars_kicker: "BYO TUFUNDISHA",
        pillars_title: "Misingi Ine ya Kufundishana",
        p1_title: "Úmbo Cha Babembe",
        p2_title: "Asili na Nasaba",
        p3_title: "Lulemi lwa Kibembe",
        p4_title: "Maadili, Lutondo & Bulembo",
        vid_kicker: "LOLA NA UMVWA",
        vid_title: "Maktaba ya Video (Úmbo & Maadili)",
        filter_all: "Byose",
        filter_umbo: "Úmbo Cha Babembe",
        filter_history: "Asili & Historia",
        filter_values: "Maadili & Familia",
        btn_more_videos: "Lola Video Singi mu Chaneli Yetu",
        contact_kicker: "TUBONANE",
        contact_title: "Tuma Ujumbe Wobe",
        btn_send: "Tuma Ujumbe",
        footer_links: "Mepande Makulu",
        footer_topics: "Byo Tufundisha",
        footer_rights: "Byose byabikwa bwino.",
        ph_name: "Liina Lyobe Lyose",
        ph_email: "Email Yobe",
        ph_msg: "Lemba ujumbe wobe kuno..."
    },
    en: {
        nav_home: "Home",
        nav_about: "About Us",
        nav_teachings: "Teachings",
        nav_videos: "Video Library",
        nav_photos: "Photo Archive",
        nav_contact: "Contact Us",
        hero_tag: "OUR HERITAGE • OUR IDENTITY • OUR HISTORY",
        hero_title: "Welcome to Alembeela Foundation",
        hero_desc: "An official digital platform and social institution dedicated to teaching Úmbo Cha Babembe, preserving history, the Kibembe language, and building a bridge of love, good morals, and peace between elders and the new generation worldwide.",
        btn_watch: "Watch Teachings",
        btn_gallery: "Photo Archive",
        about_kicker: "ORIGIN & VISION",
        about_title: "About Alembeela Foundation",
        founder_role: "Founder — Alembeela Foundation",
        bio_heading: "Voice of Heritage, Wisdom of Elders & Community Building",
        pillars_kicker: "WHAT WE TEACH",
        pillars_title: "Four Pillars of Mutual Learning",
        p1_title: "Úmbo Cha Babembe",
        p2_title: "Origins & Lineage",
        p3_title: "Kibembe Language",
        p4_title: "Values, Love & Peace",
        vid_kicker: "WATCH & LISTEN",
        vid_title: "Video Library",
        filter_all: "All",
        filter_umbo: "Úmbo Cha Babembe",
        filter_history: "Origins & History",
        filter_values: "Values & Family",
        btn_more_videos: "Watch More Videos on Our Channel",
        contact_kicker: "GET IN TOUCH",
        contact_title: "Contact & Collaboration",
        btn_send: "Send Message",
        footer_links: "Quick Links",
        footer_topics: "Core Topics",
        footer_rights: "All rights reserved.",
        ph_name: "Your Full Name",
        ph_email: "Your Email Address",
        ph_msg: "Write your message or question here..."
    },
    fr: {
        nav_home: "Accueil",
        nav_about: "À Propos",
        nav_teachings: "Enseignements",
        nav_videos: "Vidéothèque",
        nav_photos: "Archives Photos",
        nav_contact: "Contact",
        hero_tag: "OUR HERITAGE • OUR IDENTITY • OUR HISTORY",
        hero_title: "Bienvenue à Alembeela Foundation",
        hero_desc: "Plateforme numérique officielle dédiée à l'enseignement de l'Úmbo Cha Babembe, à la préservation de l'histoire, de la langue Kibembe et à la promotion de l'amour, des bonnes mœurs et de la paix.",
        btn_watch: "Voir les Enseignements",
        btn_gallery: "Galerie Photos",
        about_kicker: "ORIGINE & VISION",
        about_title: "À Propos d'Alembeela Foundation",
        founder_role: "Fondateur — Alembeela Foundation",
        bio_heading: "Voix de l'Héritage, Sagesse des Anciens et Paix",
        pillars_kicker: "CE QUE NOUS ENSEIGNONS",
        pillars_title: "Quatre Piliers d'Éducation",
        p1_title: "Úmbo Cha Babembe",
        p2_title: "Origines & Lignée",
        p3_title: "Langue Kibembe",
        p4_title: "Valeurs, Amour & Paix",
        vid_kicker: "REGARDER & ÉCOUTER",
        vid_title: "Vidéothèque",
        filter_all: "Tout",
        filter_umbo: "Úmbo Cha Babembe",
        filter_history: "Origines & Histoire",
        filter_values: "Valeurs & Famille",
        btn_more_videos: "Voir Plus de Vidéos sur Notre Chaîne",
        contact_kicker: "CONTACT",
        contact_title: "Contact & Collaboration",
        btn_send: "Envoyer le Message",
        footer_links: "Liens Rapides",
        footer_topics: "Thèmes Clés",
        footer_rights: "Tous droits réservés.",
        ph_name: "Votre Nom Complet",
        ph_email: "Votre Adresse E-mail",
        ph_msg: "Écrivez votre message ou question ici..."
    },
    rn: {
        nav_home: "Intango",
        nav_about: "Ivyerekeye Twebwe",
        nav_teachings: "Inyigisho",
        nav_videos: "Isomero ry'Amavidewo",
        nav_photos: "Amafoto n'Icibutso",
        nav_contact: "Twandikire",
        hero_tag: "OUR HERITAGE • OUR IDENTITY • OUR HISTORY",
        hero_title: "Kaze muri Alembeela Foundation",
        hero_desc: "Urubuga rwemewe rwo kwigisha Úmbo Cha Babembe, kubungabunga kahise, ururimi rw'Ikibembe, no kwubaka urukundo, indero nziza n'amahoro hagati y'abakurambere n'urwaruka kw'isi yose.",
        btn_watch: "Raba Inyigisho",
        btn_gallery: "Raba Amafoto",
        about_kicker: "INKOMOKO N'ICEREKEZO",
        about_title: "Ivyerekeye Alembeela Foundation",
        founder_role: "Uwabitanguje — Alembeela Foundation",
        bio_heading: "Ijwi ry'Iragi, Ubwenge bw'Abakurambere n'Amahoro",
        pillars_kicker: "IVYO TWIGISHA",
        pillars_title: "Inkingi Zine zo Kwungurana Ubumenyi",
        p1_title: "Úmbo Cha Babembe",
        p2_title: "Inkomoko n'Amamuko",
        p3_title: "Ururimi rw'Ikibembe",
        p4_title: "Indero, Urukundo & Amahoro",
        vid_kicker: "RABA KANDI WUMVIRIZE",
        vid_title: "Isomero ry'Amavidewo",
        filter_all: "Vyose",
        filter_umbo: "Úmbo Cha Babembe",
        filter_history: "Inkomoko & Kahise",
        filter_values: "Indero & Umuryango",
        btn_more_videos: "Raba Ayandi Mavidewo ku Rubuga Rwacu",
        contact_kicker: "TWANDIKIRE",
        contact_title: "Twandikire Kandi Dufashanye",
        btn_send: "Rungika Ubutumwa",
        footer_links: "Imiyoboro Yihuta",
        footer_topics: "Ivyigwa Bikuru",
        footer_rights: "Uburenganzira bwose burazigamwe.",
        ph_name: "Izina Ryawe Ryose",
        ph_email: "Imeyili Yawe (Email)",
        ph_msg: "Andika ubutumwa bwawe canke ikibazo hano..."
    },
    es: {
        nav_home: "Inicio",
        nav_about: "Sobre Nosotros",
        nav_teachings: "Enseñanzas",
        nav_videos: "Videoteca",
        nav_photos: "Archivo de Fotos",
        nav_contact: "Contacto",
        hero_tag: "OUR HERITAGE • OUR IDENTITY • OUR HISTORY",
        hero_title: "Bienvenido a Alembeela Foundation",
        hero_desc: "Plataforma digital oficial dedicada a enseñar Úmbo Cha Babembe, preservar la historia, el idioma Kibembe y construir un puente de amor, buenos valores y paz entre los mayores y las nuevas generaciones.",
        btn_watch: "Ver Enseñanzas",
        btn_gallery: "Archivo de Fotos",
        about_kicker: "ORIGEN Y VISIÓN",
        about_title: "Sobre Alembeela Foundation",
        founder_role: "Fundador — Alembeela Foundation",
        bio_heading: "Voz del Patrimonio, Sabiduría de los Mayores y Paz",
        pillars_kicker: "LO QUE ENSEÑAMOS",
        pillars_title: "Cuatro Pilares de Aprendizaje",
        p1_title: "Úmbo Cha Babembe",
        p2_title: "Orígenes y Linaje",
        p3_title: "Idioma Kibembe",
        p4_title: "Valores, Amor y Paz",
        vid_kicker: "VER Y ESCUCHAR",
        vid_title: "Videoteca",
        filter_all: "Todos",
        filter_umbo: "Úmbo Cha Babembe",
        filter_history: "Orígenes e Historia",
        filter_values: "Valores y Familia",
        btn_more_videos: "Ver Más Videos en Nuestro Canal",
        contact_kicker: "CONTÁCTANOS",
        contact_title: "Contacto y Colaboración",
        btn_send: "Enviar Mensaje",
        footer_links: "Enlaces Rápidos",
        footer_topics: "Temas Principales",
        footer_rights: "Todos los derechos reservados.",
        ph_name: "Tu Nombre Completo",
        ph_email: "Tu Correo Electrónico",
        ph_msg: "Escribe tu mensaje o pregunta aquí..."
    }
};

const languageSelector = document.getElementById('languageSelector');
const googleTranslateDiv = document.getElementById('google_translate_element');

function applyLanguage(selectedLang) {
    if (selectedLang === 'more') {
        if (googleTranslateDiv) {
            googleTranslateDiv.style.display = 'block';
        }
        return;
    }

    if (googleTranslateDiv) {
        googleTranslateDiv.style.display = 'none';
    }

    const dict = translations[selectedLang];
    if (!dict) return;

    document.documentElement.lang = selectedLang === 'bem' ? 'sw' : selectedLang;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (!dict[key]) return;

        const icon = el.querySelector('i');
        if (icon) {
            el.innerHTML = '';
            el.appendChild(icon);
            el.appendChild(document.createTextNode(' ' + dict[key]));
        } else {
            el.textContent = dict[key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key]) {
            el.setAttribute('placeholder', dict[key]);
        }
    });

    try {
        localStorage.setItem('af_selected_lang', selectedLang);
    } catch (_) {
        // Ignore storage restrictions
    }
}

if (languageSelector) {
    const savedLang = (() => {
        try {
            return localStorage.getItem('af_selected_lang');
        } catch (_) {
            return null;
        }
    })();

    if (savedLang && translations[savedLang]) {
        languageSelector.value = savedLang;
        applyLanguage(savedLang);
    }

    languageSelector.addEventListener('change', (e) => {
        applyLanguage(e.target.value);
    });
}

/* =========================================================
   3. KUCHUJA VIDEO (VIDEO LIBRARY FILTER)
   ========================================================= */
const videoFilterBtns = document.querySelectorAll('.filter-btn');
const videoCards = document.querySelectorAll('.video-card');

videoFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        videoFilterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        videoCards.forEach((card) => {
            const category = card.getAttribute('data-category');
            const shouldShow = filter === 'all' || category === filter;
            card.style.display = shouldShow ? 'flex' : 'none';
        });
    });
});

/* =========================================================
   4. FOMU YA MAWASILIANO NA MWAKA WA SASA
   ========================================================= */
const yearEl = document.getElementById('currentYear');
if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameInput = document.getElementById('senderName');
        const senderName = nameInput ? nameInput.value.trim() : '';

        let statusBox = contactForm.querySelector('.form-status-msg');
        if (!statusBox) {
            statusBox = document.createElement('p');
            statusBox.className = 'form-status-msg';
            statusBox.style.color = '#F2C94C';
            statusBox.style.fontSize = '0.9rem';
            statusBox.style.fontWeight = '600';
            contactForm.appendChild(statusBox);
        }

        statusBox.textContent = senderName
            ? `Asante ${senderName}! Ujumbe wako umepokelewa na Alembeela Foundation.`
            : 'Asante! Ujumbe wako umepokelewa na Alembeela Foundation.';

        contactForm.reset();
    });
}

/* =========================================================
   5. LIGHTBOX YA PICHA (PICHA.HTML)
   ========================================================= */
function openLightbox(card) {
    if (!card) return;
    const img = card.querySelector('img');
    if (!img || !img.src) return;

    const title = card.querySelector('h3')?.textContent || '';
    const desc = card.querySelector('p')?.textContent || '';

    const modal = document.getElementById('lightboxModal');
    const modalImg = document.getElementById('lightboxImg');
    const caption = document.getElementById('lightboxCaption');

    if (!modal || !modalImg || !caption) return;

    modalImg.src = img.src;
    modalImg.alt = title;
    caption.innerHTML = `<strong>${title}</strong><br><span>${desc}</span>`;
    modal.classList.add('active');
}

function closeLightbox() {
    const modal = document.getElementById('lightboxModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
        closeMobileMenu();
    }
});
