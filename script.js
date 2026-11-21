---

### 4. Faili la Nne: `script.js` (Full Code)

```javascript
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
        nav_home: "Nyumbani",
        nav_about: "Kuhusu Sisi",
        nav_teachings: "Mafundisho",
        nav_videos: "Maktaba ya Video",
        nav_photos: "Picha & Kumbukumbu",
        nav_contact: "Wasiliana Nasi",
        hero_tag: "URITHI • MILA • ÚMBO • AMANI",
        hero_title: "Karibu Alembeela Foundation",
        hero_desc: "Jukwaa rasmi la kidijitali na taasisi ya kijamii iliyojikita katika kufundisha Úmbo Cha Babembe, kuhifadhi historia, lugha ya Kibembe, na kujenga daraja la upendo na maadili mema kati ya wazee na kizazi kipya duniani kote.",
        btn_watch: "Tazama Mafundisho",
        btn_gallery: "Hifadhi ya Picha",
        about_kicker: "CHIMBUKO NA MAONO",
        about_title: "Kuhusu Alembeela Foundation",
        founder_role: "Mwanzilishi — Alembeela Foundation",
        bio_heading: "Sauti ya Urithi, Hekima ya Wazee na Ujenzi wa Jamii",
        pillars_kicker: "TUNACHOFUNDISHA",
        pillars_title: "Nguzo Nne za Kuelimishana",
        vid_kicker: "TAZAMA NA SIKILIZA",
        vid_title: "Maktaba ya Video (Video Library)",
        yt_more_title: "Ungependa Kutazama na Kujifunza Zaidi?",
        contact_kicker: "WASILIANA NASI",
        contact_title: "Tuma Ujumbe Wako"
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
        vid_kicker: "LOLA NA UMVWA",
        vid_title: "Maktaba ya Video (Úmbo & Maadili)",
        yt_more_title: "Olongelelwe Kulola Mafundisho Mangi?",
        contact_kicker: "TUBONANE",
        contact_title: "Tuma Ujumbe Wobe"
    },
    en: {
        nav_home: "Home",
        nav_about: "About Us",
        nav_teachings: "Teachings",
        nav_videos: "Video Library",
        nav_photos: "Photo Archive",
        nav_contact: "Contact Us",
        hero_tag: "HERITAGE • CULTURE • ÚMBO • PEACE",
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
        vid_kicker: "WATCH & LISTEN",
        vid_title: "Video Library",
        yt_more_title: "Want to Watch and Learn More?",
        contact_kicker: "CONTACT US",
        contact_title: "Send Your Message"
    },
    fr: {
        nav_home: "Accueil",
        nav_about: "À Propos",
        nav_teachings: "Enseignements",
        nav_videos: "Vidéothèque",
        nav_photos: "Archives Photos",
        nav_contact: "Contact",
        hero_tag: "HÉRITAGE • CULTURE • ÚMBO • PAIX",
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
        vid_kicker: "REGARDER & ÉCOUTER",
        vid_title: "Vidéothèque",
        yt_more_title: "Voulez-vous Voir Plus d'Enseignements ?",
        contact_kicker: "CONTACTEZ-NOUS",
        contact_title: "Envoyez Votre Message"
    },
    rn: {
        nav_home: "Intango",
        nav_about: "Ivyerekeye Twebwe",
        nav_teachings: "Inyigisho",
        nav_videos: "Isomero ry'Amavidewo",
        nav_photos: "Amafoto n'Icibutso",
        nav_contact: "Twandikire",
        hero_tag: "IRAGI • IMICO • ÚMBO • AMAHORO",
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
        vid_kicker: "RABA KANDI WUMVIRIZE",
        vid_title: "Isomero ry'Amavidewo",
        yt_more_title: "Wipfuza Kuraba Izindi Nyigisho?",
        contact_kicker: "TWANDIKIRE",
        contact_title: "Rungika Ubutumwa Bwawe"
    },
    es: {
        nav_home: "Inicio",
        nav_about: "Sobre Nosotros",
        nav_teachings: "Enseñanzas",
        nav_videos: "Videoteca",
        nav_photos: "Archivo de Fotos",
        nav_contact: "Contacto",
        hero_tag: "PATRIMONIO • CULTURA • ÚMBO • PAZ",
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
        vid_kicker: "VER Y ESCUCHAR",
        vid_title: "Videoteca",
        yt_more_title: "¿Quieres Ver Más Enseñanzas?",
        contact_kicker: "CONTÁCTANOS",
        contact_title: "Envía Tu Mensaje"
    }
};

const languageSelector = document.getElementById('languageSelector');
const googleTranslateDiv = document.getElementById('google_translate_element');

if (languageSelector) {
    languageSelector.addEventListener('change', (e) => {
        const selectedLang = e.target.value;

        if (selectedLang === 'more') {
            if (googleTranslateDiv) {
                googleTranslateDiv.style.display = 'block';
            }
            return;
        } else if (googleTranslateDiv) {
            googleTranslateDiv.style.display = 'none';
        }

        const dict = translations[selectedLang];
        if (!dict) return;

        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                el.textContent = dict[key];
            }
        });
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
