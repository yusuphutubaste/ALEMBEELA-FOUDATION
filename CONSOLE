/* ==========================================================
   Alembeela Foundation - Advanced Platform JavaScript (`script.js`)
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Styled custom startup banner in console
    console.log(
        "%c[ALEMBEELA FOUNDATION] %c Úmbo Cha Babembe & Community Hub Initialized Successfully 🏛️ ",
        "background: #eab308; color: #03140c; font-weight: bold; padding: 4px 8px; border-radius: 4px;",
        "color: #f3f4f6; font-weight: bold;"
    );
    console.log(`%c[Timestamp]: ${new Date().toLocaleString()}`, "color: #9ca3af; font-style: italic;");
    
    // Initialize components
    initSmoothScrolling();
});

/**
 * 1. Real-Time Episode Search / Filter Engine
 */
function filterEpisodes() {
    const input = document.getElementById('episodeSearch').value.toLowerCase();
    const cards = document.querySelectorAll('.episode-card');
    let matchCount = 0;

    cards.forEach(card => {
        const title = card.getAttribute('data-title').toLowerCase();
        if (title.includes(input)) {
            card.style.display = 'flex';
            matchCount++;
        } else {
            card.style.display = 'none';
        }
    });

    console.groupCollapsed(`%c[Search Telemetry] Query: "${input}"`, "color: #eab308;");
    console.log(`Matching episodes found: ${matchCount}`);
    console.groupEnd();
}

/**
 * 2. Multilingual Dictionary Handler (Swahili / English)
 */
const translations = {
    sw: {
        nav_home: "Nyumbani",
        nav_about: "Kuhusu Sisi",
        nav_series: "Vipindi vya Úmbo",
        nav_wisdom: "Hekima ya Jamii",
        nav_library: "Maktaba",
        nav_teachings: "Mafunzo",
        btn_watch: "Tazama Video",
        hero_badge: "Saving our shared wisdom & community pillars",
        hero_desc: "Tunafichua, kuhifadhi, na kusambaza urithi wa Babembe na mafunzo ya jamii yanayojenga misingi bora ya maisha, umoja, na heshima ya kibinadamu.",
        hero_btn1: "Anza Kutazama Úmbo",
        hero_btn2: "Toa Hekima Yako"
    },
    en: {
        nav_home: "Home",
        nav_about: "About Us",
        nav_series: "Úmbo Series",
        nav_wisdom: "Community Wisdom",
        nav_library: "Library",
        nav_teachings: "Teachings",
        btn_watch: "Watch Video",
        hero_badge: "Saving our shared wisdom & community pillars",
        hero_desc: "Unveiling, preserving, and sharing Babembe heritage and community teachings that build solid foundations for life, unity, and human dignity.",
        hero_btn1: "Start Watching Úmbo",
        hero_btn2: "Share Your Wisdom"
    }
};

function setLanguage(lang) {
    console.group(`%c[Localization Telemetry] Language Switch`, "color: #38bdf8;");
    console.log(`Target Language: ${lang.toUpperCase()}`);
    
    const elements = document.querySelectorAll('[data-i18n]');
    let updatedCount = 0;
    
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
            updatedCount++;
        }
    });
    
    console.log(`Successfully updated DOM elements: ${updatedCount}`);
    console.groupEnd();
}

/**
 * 3. Community Wisdom Submission Handler
 */
function submitWisdom(event) {
    event.preventDefault();
    const name = document.getElementById('contributorName').value;
    const text = document.getElementById('contributorWisdom').value;

    console.group("%c[Community Wall] New Wisdom Submission", "color: #10b981; font-weight: bold;");
    console.log(`Contributor: ${name}`);
    console.log(`Wisdom Text: "${text}"`);

    const feed = document.getElementById('wisdomFeed');
    const newCard = document.createElement('div');
    newCard.className = "bg-emeraldCustom-900/40 border border-gold-500/30 p-6 rounded-2xl relative animate-pulse";
    newCard.innerHTML = `
        <i class="fa-solid fa-quote-left text-gold-500/20 text-4xl absolute top-4 right-6"></i>
        <p class="text-gray-200 text-sm italic mb-3">"${text}"</p>
        <span class="text-xs text-gold-400 font-bold">&mdash; ${name} (Community Contributor)</span>
    `;

    feed.prepend(newCard);
    console.log("Status: Appended successfully to live feed.");
    console.groupEnd();

    document.getElementById('wisdomForm').reset();
    alert('Asante! Hekima yako imechapishwa kwenye uwanja wa jamii.');
}

/**
 * 4. Digital E-Reader Library Modal Handlers
 */
function openReaderModal(title, content) {
    const modal = document.getElementById('readerModal');
    if (!modal) return;

    document.getElementById('readerTitle').textContent = title;
    document.getElementById('readerContent').textContent = content;
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';

    console.log(`%c[Digital Library] Opened Reader Modal -> Title: "${title}"`, "color: #f43f5e;");
}

function closeReaderModal() {
    const modal = document.getElementById('readerModal');
    if (!modal) return;

    modal.classList.remove('flex');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';

    console.log("%c[Digital Library] Closed Reader Modal", "color: #f43f5e;");
}

/**
 * 5. Accordion Toggle for Teachings / FAQs
 */
function toggleAccordion(id) {
    const content = document.getElementById(`content-${id}`);
    const icon = document.getElementById(`icon-${id}`);
    
    if (!content || !icon) return;

    console.group(`%c[FAQ Accordion] Item #${id} Toggle`, "color: #a855f7;");
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.classList.add('rotate-180');
        console.log("State: Expanded");
    } else {
        content.classList.add('hidden');
        icon.classList.remove('rotate-180');
        console.log("State: Collapsed");
    }
    console.groupEnd();
}

/**
 * 6. Audio Oral History Player Integration
 */
function toggleAudioPlayer() {
    const audio = document.getElementById('audioPlayer');
    const btnIcon = document.querySelector('#audioPlayBtn i');

    if (!audio || !btnIcon) return;

    console.group("%c[Audio Telemetry] Oral History Player", "color: #fb923c;");
    if (audio.paused) {
        audio.play().catch(err => console.warn("Playback prevented:", err));
        btnIcon.classList.remove('fa-play', 'ml-0.5');
        btnIcon.classList.add('fa-pause');
        console.log("State: Playing track");
    } else {
        audio.pause();
        btnIcon.classList.remove('fa-pause');
        btnIcon.classList.add('fa-play', 'ml-0.5');
        console.log("State: Paused track");
    }
    console.groupEnd();
}

/**
 * 7. Video Modal Pop-up Handlers
 */
function openVideoModal(videoUrl) {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('modalIframe');
    
    if (!modal || !iframe) return;

    iframe.src = videoUrl;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';

    console.log(`%c[Video Modal] Opened player. Source: ${videoUrl}`, "color: #eab308; font-weight: bold;");
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('modalIframe');
    
    if (!modal || !iframe) return;

    iframe.src = '';
    modal.classList.remove('flex');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';

    console.log("%c[Video Modal] Closed player and halted video stream.", "color: #eab308; font-weight: bold;");
}

/**
 * 8. Smooth Scrolling Enhancements
 */
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('header nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            console.log(`%c[Navigation] Smooth scrolling to anchor: ${targetId}`, "color: #34d399;");
            
            if (targetId.startsWith('#') && targetId.length > 1) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}
