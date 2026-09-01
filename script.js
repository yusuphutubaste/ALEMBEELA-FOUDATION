/* ==========================================================
   Alembeela Foundation - Advanced Platform JavaScript (`script.js`)
   ========================================================== */

// YouTube Channel Configuration
const YOUTUBE_CONFIG = {
    channelId: 'UCQkPUJEsrjWNP2MfCJRwIFQ', // Replace with your channel ID
    apiKey: 'AIzaSyCfGV3otxaHIYqzHYozRfFGLilCzZZHgqw', // YouTube Data API Key
    channelUrl: 'https://www.youtube.com/@AlembeelaFoundation'
};

// Audio/Oral History Configuration
const AUDIO_CONFIG = {
    introMusic: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', // Intro music (plays first)
    enableAutoPlaylist: true, // Automatically play next track
    fadeInDuration: 3000, // 3 second fade-in
    fadeOutDuration: 2000 // 2 second fade-out
};

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
    loadYouTubeVideos();
    initAudioPlayer();
    initMobileMenu();
});

/**
 * Mobile Menu Toggle Function
 */
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    
    if (!mobileMenu || !hamburgerIcon) return;
    
    console.log('%c[Mobile Menu] Toggle clicked', 'color: #38bdf8; font-weight: bold;');
    
    if (mobileMenu.classList.contains('hidden')) {
        // Open menu
        mobileMenu.classList.remove('hidden');
        mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
        hamburgerIcon.classList.remove('fa-bars');
        hamburgerIcon.classList.add('fa-xmark');
        document.body.style.overflow = 'hidden';
        console.log("State: Menu Opened");
    } else {
        // Close menu
        mobileMenu.style.maxHeight = '0';
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
        }, 300);
        hamburgerIcon.classList.remove('fa-xmark');
        hamburgerIcon.classList.add('fa-bars');
        document.body.style.overflow = 'auto';
        console.log("State: Menu Closed");
    }
}

/**
 * Initialize Mobile Menu
 */
function initMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuLinks = mobileMenu?.querySelectorAll('a[href^="#"]');
    
    if (!mobileMenu || !mobileMenuLinks) return;
    
    console.log('%c[Mobile Menu] Initialized', 'color: #38bdf8; font-weight: bold;');
    
    // Close menu when a link is clicked (handled in toggleMobileMenu)
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            // The menu will close via toggleMobileMenu() call in HTML
            console.log(`%c[Mobile Menu] Navigating to: ${link.getAttribute('href')}`, 'color: #34d399;');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        const header = document.querySelector('header');
        const menuBtn = document.getElementById('mobileMenuBtn');
        
        if (header && !header.contains(e.target) && mobileMenu && !mobileMenu.classList.contains('hidden')) {
            toggleMobileMenu();
        }
    });
}

/**
 * Load YouTube Videos Automatically
 * Fetches latest videos from Alembeela Foundation channel
 */
function loadYouTubeVideos() {
    // Using YouTube Data API to fetch latest uploads
    const channelId = 'UCQkPUJEsrjWNP2MfCJRwIFQ'; // Alembeela Foundation Channel ID
    const playlistId = 'UUQkPUJEsrjWNP2MfCJRwIFQ'; // Uploads playlist (U + Channel ID)
    
    console.log('%c[YouTube Integration] Starting to fetch videos from channel...', 'color: #ef4444; font-weight: bold;');
    
    // Fetch from YouTube API
    fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=10&key=${YOUTUBE_CONFIG.apiKey}`)
        .then(response => response.json())
        .then(data => {
            console.log('%c[YouTube Integration] Fetching videos from channel...', 'color: #ef4444; font-weight: bold;');
            if (data.items && data.items.length > 0) {
                populateEpisodeCards(data.items);
                // Store videos for audio extraction
                window.youtubeVideos = data.items;
                initAudioPlaylist(data.items);
                console.log('%c[YouTube Integration] Successfully loaded videos from YouTube API', 'color: #10b981; font-weight: bold;');
            } else {
                console.warn('%c[YouTube API] No items found, loading fallback videos', 'color: #f59e0b;');
                loadFallbackVideos();
            }
        })
        .catch(err => {
            console.warn('%c[YouTube API Error] Using fallback video data', 'color: #f59e0b;');
            console.log('Error:', err);
            // Fallback: Use hardcoded video for demo
            loadFallbackVideos();
        });
}

/**
 * Populate Episode Cards with YouTube Videos
 */
function populateEpisodeCards(videos) {
    const episodesGrid = document.getElementById('episodesGrid');
    if (!episodesGrid) return;

    episodesGrid.innerHTML = '';

    videos.forEach((video, index) => {
        const videoId = video.snippet.resourceId.videoId;
        const title = video.snippet.title;
        const description = video.snippet.description.substring(0, 100) + '...';
        const thumbnail = video.snippet.thumbnails.medium.url;

        const episodeCard = document.createElement('div');
        episodeCard.className = 'episode-card bg-emeraldCustom-900/60 border border-gold-600/20 rounded-2xl overflow-hidden hover:border-gold-500 transition duration-300 flex flex-col justify-between group';
        episodeCard.setAttribute('data-title', title.toLowerCase());
        episodeCard.setAttribute('data-video-id', videoId);

        episodeCard.innerHTML = `
            <div class="relative h-48 bg-black overflow-hidden">
                <a href="#" onclick="openVideoModal('https://www.youtube.com/embed/${videoId}')" class="absolute inset-0 z-20 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition cursor-pointer">
                    <div class="w-12 h-12 rounded-full bg-gold-500 text-black flex items-center justify-center text-lg shadow-lg">
                        <i class="fa-solid fa-play ml-1"></i>
                    </div>
                </a>
                <img src="${thumbnail}" alt="${title}" class="w-full h-full object-cover">
                <div class="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-gold-500/40 text-gold-400 text-xs font-bold px-3 py-1 rounded-full z-10">
                    Sehemu ya ${index + 1}
                </div>
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between">
                <div>
                    <h3 class="text-xl font-bold text-white mb-2 group-hover:text-gold-400 transition">${title}</h3>
                    <p class="text-gray-400 text-sm mb-6 leading-relaxed">${description}</p>
                </div>
                <button onclick="openVideoModal('https://www.youtube.com/embed/${videoId}')" class="inline-flex items-center justify-center gap-2 w-full bg-gold-500/10 hover:bg-gold-500 text-gold-400 hover:text-black font-bold py-2.5 px-4 rounded-lg transition cursor-pointer">
                    <i class="fa-solid fa-play"></i> Tazama Sehemu ya ${index + 1}
                </button>
            </div>
        `;

        episodesGrid.appendChild(episodeCard);
    });

    console.log(`%c[YouTube Integration] Loaded ${videos.length} videos successfully`, 'color: #10b981; font-weight: bold;');
}

/**
 * Fallback: Load demo videos if API fails
 */
function loadFallbackVideos() {
    const fallbackVideos = [
        {
            snippet: {
                title: 'Úmbo Cha Babembe - Part 1: Misingi',
                description: 'Gundua mizizi ya Úmbo, historia ya asili, na maadili yaliyosimamia jamii...',
                resourceId: { videoId: 'chCvVUD1FPo' },
                thumbnails: { medium: { url: 'https://img.youtube.com/vi/chCvVUD1FPo/mqdefault.jpg' } }
            }
        },
        {
            snippet: {
                title: 'Úmbo Cha Babembe - Part 2: Siri za Ndani',
                description: 'Masomo ya kina kuhusu mtiririko wa vizazi na hekima za kuzuia migogoro...',
                resourceId: { videoId: 'chCvVUD1FPo' },
                thumbnails: { medium: { url: 'https://img.youtube.com/vi/chCvVUD1FPo/mqdefault.jpg' } }
            }
        },
        {
            snippet: {
                title: 'Úmbo Cha Babembe - Part 3: Hitimisho',
                description: 'Ufumbuzi wa ramani na mafumbo yatakayosaidia vizazi vijavyo...',
                resourceId: { videoId: 'chCvVUD1FPo' },
                thumbnails: { medium: { url: 'https://img.youtube.com/vi/chCvVUD1FPo/mqdefault.jpg' } }
            }
        }
    ];

    populateEpisodeCards(fallbackVideos);
}

/**
 * Initialize Audio Player with Smooth Transitions
 */
function initAudioPlayer() {
    const audioPlayer = document.getElementById('audioPlayer');
    if (!audioPlayer) return;

    console.log('%c[Audio Player] Initialized with fade effects', 'color: #fb923c; font-weight: bold;');
    
    // Set initial volume
    audioPlayer.volume = 0;
    
    // Smooth fade-in when play button is clicked
    audioPlayer.addEventListener('play', () => {
        fadeAudioIn(audioPlayer);
    });

    // Smooth fade-out when stopped
    audioPlayer.addEventListener('pause', () => {
        fadeAudioOut(audioPlayer);
    });
}

/**
 * Initialize Audio Playlist from YouTube Videos
 */
function initAudioPlaylist(videos) {
    console.group('%c[Audio Playlist] Building from YouTube videos', 'color: #fb923c; font-weight: bold;');
    
    window.audioPlaylist = {
        currentIndex: -1, // Start with intro music
        tracks: [
            {
                title: '🎵 Intro Music - Alembeela Foundation',
                src: AUDIO_CONFIG.introMusic,
                type: 'intro'
            }
        ]
    };

    // Add video titles to playlist (users can select which to listen to)
    videos.forEach((video, index) => {
        window.audioPlaylist.tracks.push({
            title: video.snippet.title,
            videoId: video.snippet.resourceId.videoId,
            type: 'video',
            description: video.snippet.description.substring(0, 60)
        });
    });

    console.log(`Playlist created with ${window.audioPlaylist.tracks.length} tracks`);
    console.groupEnd();
}

/**
 * Fade In Audio Smoothly
 */
function fadeAudioIn(audioElement, duration = AUDIO_CONFIG.fadeInDuration) {
    const steps = 20;
    const stepDuration = duration / steps;
    const maxVolume = 0.8; // Don't go to 100% to protect ears
    let currentStep = 0;

    const fadeInterval = setInterval(() => {
        currentStep++;
        audioElement.volume = (currentStep / steps) * maxVolume;

        if (currentStep >= steps) {
            clearInterval(fadeInterval);
            audioElement.volume = maxVolume;
            console.log('%c[Audio] Fade-in complete', 'color: #10b981;');
        }
    }, stepDuration);
}

/**
 * Fade Out Audio Smoothly
 */
function fadeAudioOut(audioElement, duration = AUDIO_CONFIG.fadeOutDuration) {
    const steps = 15;
    const stepDuration = duration / steps;
    const startVolume = audioElement.volume;
    let currentStep = 0;

    const fadeInterval = setInterval(() => {
        currentStep++;
        audioElement.volume = startVolume * (1 - (currentStep / steps));

        if (currentStep >= steps) {
            clearInterval(fadeInterval);
            audioElement.volume = 0;
            console.log('%c[Audio] Fade-out complete', 'color: #10b981;');
        }
    }, stepDuration);
}

/**
 * Play Next Track in Playlist
 */
function playNextTrack() {
    if (!window.audioPlaylist) return;

    const audioPlayer = document.getElementById('audioPlayer');
    if (!audioPlayer) return;

    // Move to next track
    window.audioPlaylist.currentIndex++;
    
    if (window.audioPlaylist.currentIndex >= window.audioPlaylist.tracks.length) {
        window.audioPlaylist.currentIndex = 0; // Loop back to intro
    }

    const track = window.audioPlaylist.tracks[window.audioPlaylist.currentIndex];

    console.group('%c[Audio Playlist] Playing next track', 'color: #fb923c;');
    console.log(`Track: ${track.title}`);
    console.log(`Type: ${track.type}`);
    console.groupEnd();

    if (track.type === 'intro') {
        audioPlayer.src = track.src;
    } else {
        // For video tracks, link to the video (can be embedded later)
        console.warn('[Audio] Video audio extraction not yet implemented. Showing intro music instead.');
        audioPlayer.src = AUDIO_CONFIG.introMusic;
    }

    audioPlayer.play();
}

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
