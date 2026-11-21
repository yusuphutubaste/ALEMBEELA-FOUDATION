/* Alembeela Foundation — accessible interactions and real channel video loading.
 * For individual video cards, set window.ALEMBEELA_YOUTUBE_API_KEY before this file
 * to a YouTube Data API key restricted to this site's HTTP referrers and YouTube Data API v3.
 * Without a key, the official YouTube uploads playlist still works without credentials.
 */
const YOUTUBE_CHANNEL_ID = 'UCQkPUJEsrjWNP2MfCJRwIFQ';
const YOUTUBE_API_KEY = window.ALEMBEELA_YOUTUBE_API_KEY || '';
const UPLOADS_PLAYLIST_ID = `UU${YOUTUBE_CHANNEL_ID.slice(2)}`;
const CHANNEL_URL = 'https://www.youtube.com/@AlembeelaFoundation';

const STORAGE_KEYS = {
  lang: 'alembeela_lang',
  wisdom: 'alembeela_wisdom_posts',
  subscribers: 'alembeela_subscribers',
  visits: 'alembeela_visits'
};

const translations = {
  en: {
    nav_home: 'Home',
    nav_series: 'Series',
    nav_wisdom: 'Wisdom',
    nav_library: 'Library',
    nav_teachings: 'Teachings',
    hero_badge: 'Saving our shared wisdom & community pillars',
    hero_desc: 'Unveiling, preserving, and sharing Babembe heritage and community teachings that build strong foundations for life, unity, and dignity.',
    hero_btn1: 'Watch Episodes',
    hero_btn2: 'Join Newsletter',
    newsletter_title: '📧 Join Our Community',
    newsletter_desc: 'Receive new episodes, teachings, and Alembeela updates directly in your inbox.',
    newsletter_btn: 'Subscribe',
    series_title: 'Úmbo Cha Babembe Episodes',
    series_desc: 'Search and watch episodes carrying foundational community teachings.',
    wisdom_title: 'Community Wisdom Wall',
    wisdom_desc: 'Read teachings from the community or contribute your own proverb and advice.',
    library_title: 'Documents & Guides',
    library_desc: 'Read summaries of publications and cultural lessons.',
    teachings_title: 'Key Teachings (FAQ)'
  },
  sw: {
    nav_home: 'Nyumbani',
    nav_series: 'Vipindi',
    nav_wisdom: 'Hekima',
    nav_library: 'Maktaba',
    nav_teachings: 'Mafunzo',
    hero_badge: 'Kuhifadhi hekima na nguzo za jamii yetu',
    hero_desc: 'Tunafichua, kuhifadhi, na kusambaza urithi wa Babembe na mafunzo ya jamii yanayojenga misingi bora ya maisha, umoja, na heshima ya kibinadamu.',
    hero_btn1: 'Tazama Vipindi',
    hero_btn2: 'Jiunga Newsletter',
    newsletter_title: '📧 Jiunga na Jamii Yetu',
    newsletter_desc: 'Pokea sehemu mpya, mafunzo, na habari za Alembeela kwenye inbox yako.',
    newsletter_btn: 'Jiunga',
    series_title: 'Úmbo Cha Babembe Episodes',
    series_desc: 'Tafuta na utazame vipindi vyote vilivyobeba mafunzo ya msingi ya jamii.',
    wisdom_title: 'Uwanja wa Hekima ya Jamii',
    wisdom_desc: 'Soma mafunzo kutoka kwa jamii au changia msemo na ushauri wako.',
    library_title: 'Nyaraka na Mwongozo',
    library_desc: 'Soma muhtasari wa machapisho na masomo.',
    teachings_title: 'Mafunzo Muhimu (FAQ)'
  },
  ky: {
    nav_home: 'Aka',
    nav_series: 'Pindi',
    nav_wisdom: 'Uhete',
    nav_library: 'Maktaba',
    nav_teachings: 'Mafunzo',
    hero_badge: 'Kuhifadhi uhete na nguzo za jamii yetu',
    hero_desc: 'Tunafichua na kuhifadhi urithi wa Babembe na mafunzo ya jamii yanayojenga maisha bora, umoja, na heshima.',
    hero_btn1: 'Lola Vipindi',
    hero_btn2: 'Jiunga Newsletter',
    newsletter_title: '📧 Jiunga na Jamii Yetu',
    newsletter_desc: 'Pokea vipindi vipya na mafunzo ya Alembeela moja kwa moja.',
    newsletter_btn: 'Jiunga',
    series_title: 'Úmbo Cha Babembe Episodes',
    series_desc: 'Tafuta na uangalie vipindi vyote vya mafunzo ya jamii.',
    wisdom_title: 'Uwanja wa Uhete wa Jamii',
    wisdom_desc: 'Soma mafunzo kutoka kwa jamii au andika ushauri wako.',
    library_title: 'Nyaraka na Mwongozo',
    library_desc: 'Soma muhtasari wa machapisho na masomo.',
    teachings_title: 'Mafunzo Muhimu (FAQ)'
  },
  lg: {
    nav_home: 'Ewaka',
    nav_series: 'Emizannyo',
    nav_wisdom: 'Amagezi',
    nav_library: 'Etterekero',
    nav_teachings: 'Enjigiriza',
    hero_badge: 'Okukuuma amagezi gaffe n’empagi z’ekitundu',
    hero_desc: 'Tubikkula, tukuuma, era tubunyisa obusika bw’Ababembe n’enjigiriza ezizimba obulamu obulungi, obumu, n’ekitiibwa.',
    hero_btn1: 'Laba Ebikwata ku Mboozi',
    hero_btn2: 'Wegatte ku Newsletter',
    newsletter_title: '📧 Wegatte ku Kitundu Kyaffe',
    newsletter_desc: 'Funa ebitundu ebipya n’enjigiriza za Alembeela mu inbox yo.',
    newsletter_btn: 'Wegatte',
    series_title: 'Úmbo Cha Babembe Episodes',
    series_desc: 'Noonya era olabe ebitundu byonna ebirimu enjigiriza z’ekitundu.',
    wisdom_title: 'Ekisaawe ky’Amagezi g’Ekitundu',
    wisdom_desc: 'Soma enjigiriza okuva mu kitundu oba gattaako amagezi go.',
    library_title: 'Ebiwandiiko n’Obulagirizi',
    library_desc: 'Soma mu bufunze ebikwata ku bitabo n’amasomo.',
    teachings_title: 'Enjigiriza Enkulu (FAQ)'
  },
  yo: {
    nav_home: 'Ilé',
    nav_series: 'Àwọn Ètò',
    nav_wisdom: 'Ọgbọ́n',
    nav_library: 'Ilé-Ìkàwé',
    nav_teachings: 'Ẹ̀kọ́',
    hero_badge: 'Pípa ọgbọ́n àjọpín àti àwọn òpó àwùjọ wa mọ́',
    hero_desc: 'A ń ṣípayá, pa mọ́, àti pín ogún Babembe àti àwọn ẹ̀kọ́ àwùjọ tí ó ń kọ́ ìpìlẹ̀ tó lágbára fún ìgbésí ayé, ìṣọ̀kan, àti ọ̀wọ̀.',
    hero_btn1: 'Wo Àwọn Ètò',
    hero_btn2: 'Darapọ̀ mọ́ Ìwé Ìròyìn',
    newsletter_title: '📧 Darapọ̀ mọ́ Àwùjọ Wa',
    newsletter_desc: 'Gba àwọn ètò tuntun àti ẹ̀kọ́ Alembeela sínú àpótí ìfìwéránṣẹ́ rẹ.',
    newsletter_btn: 'Forúkọsílẹ̀',
    series_title: 'Úmbo Cha Babembe Episodes',
    series_desc: 'Wá kí o sì wo gbogbo àwọn ètò tó ní ẹ̀kọ́ ìpìlẹ̀ àwùjọ.',
    wisdom_title: 'Ògiri Ọgbọ́n Àwùjọ',
    wisdom_desc: 'Ka àwọn ẹ̀kọ́ láti ọ̀dọ̀ àwùjọ tàbí fi òwe àti ìmọ̀ràn tìrẹ kún un.',
    library_title: 'Àwọn Ìwé àti Ìtọ́sọ́nà',
    library_desc: 'Ka àkópọ̀ àwọn ìwé àti ẹ̀kọ́ àṣà.',
    teachings_title: 'Àwọn Ẹ̀kọ́ Pàtàkì (FAQ)'
  }
};

const defaultWisdomPosts = [
  {
    id: 'w-1',
    name: 'Mzee wa Jamii',
    text: 'Umoja wa jamii ni ngao thabiti kuliko ukuta wa mawe.',
    likes: 14,
    liked: false,
    comments: ['Hekima kubwa sana!']
  },
  {
    id: 'w-2',
    name: 'Mama Mlezi',
    text: 'Mtoto anayejua asili yake hawezi kupotea njia hata akiwa mbali na nyumbani.',
    likes: 9,
    liked: false,
    comments: []
  }
];

const searchableIndex = [
  { title: 'Úmbo Cha Babembe — Vipindi vya Video', category: 'Vipindi', href: '#series' },
  { title: 'Uwanja wa Hekima ya Jamii', category: 'Hekima', href: '#wisdom-wall' },
  { title: 'Misingi ya Úmbo na Utamaduni', category: 'Maktaba', href: '#library' },
  { title: 'Elimu kwa Vijana', category: 'Maktaba', href: '#library' },
  { title: 'Úmbo Cha Babembe ni nini? (FAQ)', category: 'Mafunzo', href: '#teachings' },
  { title: 'Jiunga na Newsletter ya Jamii', category: 'Newsletter', href: '#newsletter' }
];

let loadedEpisodes = [];
let lastFocusedElement = null;

function escapeHTML(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/* ---------------- Language Switcher ---------------- */
function setLanguage(lang) {
  const dict = translations[lang] || translations.sw;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  const select = document.getElementById('languageSelect');
  if (select) select.value = lang;

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle('bg-gold-500', isActive);
    btn.classList.toggle('text-black', isActive);
    btn.classList.toggle('font-bold', isActive);
  });

  try {
    localStorage.setItem(STORAGE_KEYS.lang, lang);
  } catch (_) {}
}

/* ---------------- Mobile Menu & Scroll ---------------- */
function toggleMobileMenu(forceState) {
  const menu = document.getElementById('mobileMenu');
  const btn = document.getElementById('mobileMenuBtn');
  const icon = document.getElementById('hamburgerIcon');
  if (!menu || !btn) return;

  const isOpen = typeof forceState === 'boolean'
    ? forceState
    : menu.classList.contains('hidden');

  if (isOpen) {
    menu.classList.remove('hidden');
    requestAnimationFrame(() => menu.classList.add('menu-open'));
    btn.setAttribute('aria-expanded', 'true');
    if (icon) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-xmark');
    }
  } else {
    menu.classList.remove('menu-open');
    btn.setAttribute('aria-expanded', 'false');
    if (icon) {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
    setTimeout(() => {
      if (!menu.classList.contains('menu-open')) {
        menu.classList.add('hidden');
      }
    }, 250);
  }
}

function handleScroll() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  if (window.scrollY > 400) {
    btn.classList.add('visible');
  } else {
    btn.classList.remove('visible');
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ---------------- YouTube Channel Loader ---------------- */
async function loadChannelVideos() {
  const grid = document.getElementById('episodesGrid');
  const searchWrap = document.getElementById('episodeSearchWrap');
  if (!grid) return;

  if (YOUTUBE_API_KEY) {
    try {
      const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=9&playlistId=${encodeURIComponent(UPLOADS_PLAYLIST_ID)}&key=${encodeURIComponent(YOUTUBE_API_KEY)}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error('YouTube API request failed');
      const data = await res.json();

      loadedEpisodes = (data.items || [])
        .filter((item) => item.snippet && item.snippet.resourceId && item.snippet.resourceId.videoId)
        .map((item) => {
          const s = item.snippet;
          const thumbs = s.thumbnails || {};
          const thumb = (thumbs.high || thumbs.medium || thumbs.default || {}).url || '';
          return {
            videoId: s.resourceId.videoId,
            title: s.title || 'Úmbo Cha Babembe Episode',
            description: s.description || 'Mafunzo ya jamii na urithi wa Babembe.',
            publishedAt: s.publishedAt ? new Date(s.publishedAt).toLocaleDateString() : '',
            thumbnail: thumb
          };
        });

      if (loadedEpisodes.length > 0) {
        updateStatCounter('videoCount', loadedEpisodes.length);
        loadedEpisodes.forEach((ep) => {
          searchableIndex.push({
            title: ep.title,
            category: 'Video',
            href: '#series'
          });
        });
        renderEpisodeCards(loadedEpisodes);
        return;
      }
    } catch (err) {
      console.warn('Falling back to official YouTube uploads playlist embed:', err);
    }
  }

  // Fallback without API credentials: embed the official YouTube uploads playlist directly
  if (searchWrap) searchWrap.classList.add('hidden');
  grid.innerHTML = `
    <div class="col-span-full max-w-4xl mx-auto w-full">
      <div class="channel-playlist">
        <iframe
          src="https://www.youtube-nocookie.com/embed/videoseries?list=${encodeURIComponent(UPLOADS_PLAYLIST_ID)}"
          title="Alembeela Foundation Official Uploads Playlist"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
      <div class="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-emeraldCustom-900/60 border border-gold-500/30 rounded-2xl p-5">
        <p class="text-sm text-gray-300 text-center sm:text-left">
          Tazama mfululizo kamili wa <strong class="text-gold-400">Úmbo Cha Babembe</strong> moja kwa moja kutoka chaneli rasmi ya Alembeela Foundation.
        </p>
        <a href="${CHANNEL_URL}" target="_blank" rel="noopener noreferrer" class="shrink-0 inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-5 py-3 rounded-xl transition">
          <i class="fa-brands fa-youtube text-base"></i> Fungua Kwenye YouTube
        </a>
      </div>
    </div>
  `;
}

function renderEpisodeCards(episodes) {
  const grid = document.getElementById('episodesGrid');
  if (!grid) return;

  if (!episodes.length) {
    grid.innerHTML = `
      <div class="col-span-full text-center py-12 bg-emeraldCustom-900/40 border border-gold-500/20 rounded-2xl">
        <p class="text-gray-300 text-sm">Hakuna kipindi kilicholingana na utafutaji wako.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = episodes
    .map((ep) => `
      <article class="episode-card border border-gold-500/30 rounded-2xl overflow-hidden flex flex-col justify-between">
        <div>
          <div class="relative aspect-video bg-black overflow-hidden">
            <img src="${escapeHTML(ep.thumbnail)}" alt="${escapeHTML(ep.title)}" loading="lazy" class="w-full h-full object-cover">
            <button type="button" onclick="openVideoModal('${escapeHTML(ep.videoId)}')" aria-label="Play ${escapeHTML(ep.title)}" class="absolute inset-0 bg-black/40 hover:bg-black/20 flex items-center justify-center transition group">
              <span class="w-14 h-14 rounded-full bg-gold-500 text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                <i class="fa-solid fa-play text-lg ml-0.5"></i>
              </span>
            </button>
          </div>
          <div class="p-6">
            <span class="text-[11px] font-bold uppercase tracking-wider text-gold-400 block mb-2">${escapeHTML(ep.publishedAt || 'Alembeela Foundation')}</span>
            <h3 class="text-lg font-bold text-white mb-2 line-clamp-2">${escapeHTML(ep.title)}</h3>
            <p class="text-gray-400 text-xs leading-relaxed line-clamp-3">${escapeHTML(ep.description)}</p>
          </div>
        </div>
        <div class="px-6 pb-6">
          <button type="button" onclick="openVideoModal('${escapeHTML(ep.videoId)}')" class="w-full bg-gold-500/15 hover:bg-gold-500 text-gold-400 hover:text-black border border-gold-500/40 font-bold text-xs py-2.5 px-4 rounded-xl transition">
            <i class="fa-solid fa-circle-play mr-1.5"></i> Tazama Kipindi
          </button>
        </div>
      </article>
    `)
    .join('');
}

function filterEpisodes() {
  const input = document.getElementById('episodeSearch');
  if (!input || !loadedEpisodes.length) return;
  const q = input.value.trim().toLowerCase();
  if (!q) {
    renderEpisodeCards(loadedEpisodes);
    return;
  }
  const filtered = loadedEpisodes.filter(
    (ep) => ep.title.toLowerCase().includes(q) || ep.description.toLowerCase().includes(q)
  );
  renderEpisodeCards(filtered);
}

/* ---------------- Global Search ---------------- */
function setupSearch(inputId, resultsId) {
  const input = document.getElementById(inputId);
  const results = document.getElementById(resultsId);
  if (!input || !results) return;

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) {
      results.classList.add('hidden');
      results.innerHTML = '';
      return;
    }

    const matches = searchableIndex.filter(
      (item) => item.title.toLowerCase().includes(q) || item.category.toLowerCase().includes(q)
    );

    if (!matches.length) {
      results.innerHTML = `<div class="p-3 text-xs text-gray-400">Hakuna matokeo kwa "${escapeHTML(q)}"</div>`;
    } else {
      results.innerHTML = matches
        .slice(0, 6)
        .map(
          (m) => `
          <a href="${escapeHTML(m.href)}" onclick="closeSearchDropdowns()" class="block px-4 py-3 hover:bg-gold-500/10 border-b border-gold-500/10 last:border-0 transition">
            <span class="block text-xs font-bold text-white">${escapeHTML(m.title)}</span>
            <span class="block text-[10px] text-gold-400 uppercase tracking-wider mt-0.5">${escapeHTML(m.category)}</span>
          </a>
        `
        )
        .join('');
    }
    results.classList.remove('hidden');
  });
}

function closeSearchDropdowns() {
  ['searchResults', 'mobileSearchResults'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.classList.add('hidden');
  });
  toggleMobileMenu(false);
}

/* ---------------- Wisdom Wall ---------------- */
function getWisdomPosts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.wisdom);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length) return parsed;
    }
  } catch (_) {}
  return defaultWisdomPosts;
}

function saveWisdomPosts(posts) {
  try {
    localStorage.setItem(STORAGE_KEYS.wisdom, JSON.stringify(posts));
  } catch (_) {}
}

function renderWisdomFeed() {
  const feed = document.getElementById('wisdomFeed');
  if (!feed) return;
  const posts = getWisdomPosts();

  updateStatCounter('wisdomCount', 43 + posts.length);

  feed.innerHTML = posts
    .map(
      (post) => `
      <div class="bg-emeraldCustom-900/40 border border-gold-500/30 p-6 rounded-2xl relative">
        <i class="fa-solid fa-quote-left text-gold-500/20 text-4xl absolute top-4 right-6"></i>
        <p class="text-gray-200 text-sm italic mb-3">"${escapeHTML(post.text)}"</p>
        <span class="text-xs text-gold-400 font-bold">&mdash; ${escapeHTML(post.name)}</span>
        <div class="mt-3 flex gap-4 text-xs">
          <button type="button" onclick="likeWisdom('${escapeHTML(post.id)}')" class="flex items-center gap-1.5 ${post.liked ? 'text-red-400' : 'text-gray-400 hover:text-red-400'} transition">
            <i class="fa-solid fa-heart"></i> <span>${post.likes}</span>
          </button>
          <button type="button" onclick="toggleComments('${escapeHTML(post.id)}')" class="flex items-center gap-1.5 text-gray-400 hover:text-blue-400 transition">
            <i class="fa-solid fa-comment"></i> <span>${post.comments.length}</span>
          </button>
        </div>
        <div id="comments-${escapeHTML(post.id)}" class="hidden mt-3 border-t border-gold-500/20 pt-3 space-y-2">
          ${post.comments
            .map((c) => `<p class="text-xs text-gray-300 bg-black/30 rounded px-2.5 py-1.5">${escapeHTML(c)}</p>`)
            .join('')}
          <form onsubmit="addWisdomComment(event, '${escapeHTML(post.id)}')" class="flex gap-2 pt-1">
            <input type="text" required maxlength="200" placeholder="Andika maoni yako..." aria-label="Write a comment" class="flex-1 bg-black/50 border border-gold-500/20 rounded px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-gold-400">
            <button type="submit" class="bg-gold-500 text-black font-bold text-xs px-3 py-1.5 rounded hover:bg-gold-400 transition">Tuma</button>
          </form>
        </div>
      </div>
    `
    )
    .join('');
}

function submitWisdom(event) {
  event.preventDefault();
  const nameInput = document.getElementById('contributorName');
  const wisdomInput = document.getElementById('contributorWisdom');
  const statusEl = document.getElementById('wisdomStatus');
  if (!nameInput || !wisdomInput) return;

  const name = nameInput.value.trim();
  const text = wisdomInput.value.trim();
  if (!name || !text) return;

  const posts = getWisdomPosts();
  posts.unshift({
    id: `w-${Date.now()}`,
    name,
    text,
    likes: 1,
    liked: true,
    comments: []
  });

  saveWisdomPosts(posts);
  renderWisdomFeed();
  nameInput.value = '';
  wisdomInput.value = '';

  if (statusEl) {
    statusEl.textContent = 'Asante! Hekima yako imeongezwa kwenye uwanja wa jamii.';
    setTimeout(() => {
      statusEl.textContent = '';
    }, 4000);
  }
}

function likeWisdom(id) {
  const posts = getWisdomPosts();
  const target = posts.find((p) => p.id === id);
  if (!target) return;

  target.liked = !target.liked;
  target.likes += target.liked ? 1 : -1;
  saveWisdomPosts(posts);
  renderWisdomFeed();
}

function toggleComments(id) {
  const section = document.getElementById(`comments-${id}`);
  if (section) section.classList.toggle('hidden');
}

function addWisdomComment(event, id) {
  event.preventDefault();
  const input = event.target.querySelector('input');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;

  const posts = getWisdomPosts();
  const target = posts.find((p) => p.id === id);
  if (!target) return;

  target.comments.push(text);
  saveWisdomPosts(posts);
  renderWisdomFeed();

  const section = document.getElementById(`comments-${id}`);
  if (section) section.classList.remove('hidden');
}

/* ---------------- Newsletter ---------------- */
function submitNewsletter(event) {
  event.preventDefault();
  const emailInput = document.getElementById('newsletterEmail');
  const statusEl = document.getElementById('newsletterStatus');
  if (!emailInput || !statusEl) return;

  const email = emailInput.value.trim().toLowerCase();
  if (!email) return;

  let subscribers = [];
  try {
    subscribers = JSON.parse(localStorage.getItem(STORAGE_KEYS.subscribers) || '[]');
  } catch (_) {}

  if (!subscribers.includes(email)) {
    subscribers.push(email);
    try {
      localStorage.setItem(STORAGE_KEYS.subscribers, JSON.stringify(subscribers));
    } catch (_) {}
    updateStatCounter('subscriberCount', 567 + subscribers.length);
    statusEl.textContent = 'Asante kwa kujiunga! Utapokea taarifa mpya za Alembeela.';
  } else {
    statusEl.textContent = 'Tayari umejiunga na newsletter yetu. Asante!';
  }

  emailInput.value = '';
}

/* ---------------- FAQ Accordion ---------------- */
function toggleAccordion(index) {
  const content = document.getElementById(`content-${index}`);
  const icon = document.getElementById(`icon-${index}`);
  if (!content) return;

  const button = content.previousElementSibling;
  const isHidden = content.classList.contains('hidden');

  content.classList.toggle('hidden', !isHidden);
  if (button) button.setAttribute('aria-expanded', String(isHidden));
  if (icon) icon.classList.toggle('rotate-180', isHidden);
}

/* ---------------- Modals (Video & Reader) ---------------- */
function openVideoModal(videoId) {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('modalIframe');
  if (!modal || !iframe) return;

  lastFocusedElement = document.activeElement;
  iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1`;
  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

function closeVideoModal() {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('modalIframe');
  if (!modal) return;

  if (iframe) iframe.src = '';
  modal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  if (lastFocusedElement) lastFocusedElement.focus();
}

function openReaderModal(title, content) {
  const modal = document.getElementById('readerModal');
  const titleEl = document.getElementById('readerTitle');
  const contentEl = document.getElementById('readerContent');
  if (!modal || !titleEl || !contentEl) return;

  lastFocusedElement = document.activeElement;
  titleEl.textContent = title;
  contentEl.textContent = content;
  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

function closeReaderModal() {
  const modal = document.getElementById('readerModal');
  if (!modal) return;

  modal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  if (lastFocusedElement) lastFocusedElement.focus();
}

/* ---------------- Audio Player ---------------- */
function toggleAudioPlayer() {
  const audio = document.getElementById('audioPlayer');
  const icon = document.getElementById('audioPlayIcon');
  const waveIcon = document.getElementById('audioWaveIcon');
  if (!audio || !icon) return;

  if (audio.paused) {
    audio.play().then(() => {
      icon.classList.remove('fa-play', 'ml-0.5');
      icon.classList.add('fa-pause');
      if (waveIcon) waveIcon.classList.add('animate-pulse');
    }).catch(() => {});
  } else {
    audio.pause();
    icon.classList.remove('fa-pause');
    icon.classList.add('fa-play', 'ml-0.5');
    if (waveIcon) waveIcon.classList.remove('animate-pulse');
  }
}

function initAudioPlayer() {
  const audio = document.getElementById('audioPlayer');
  const timeEl = document.getElementById('audioTime');
  const icon = document.getElementById('audioPlayIcon');
  const waveIcon = document.getElementById('audioWaveIcon');
  if (!audio) return;

  audio.addEventListener('timeupdate', () => {
    if (!timeEl) return;
    const mins = Math.floor(audio.currentTime / 60);
    const secs = Math.floor(audio.currentTime % 60).toString().padStart(2, '0');
    timeEl.textContent = `${mins}:${secs}`;
  });

  audio.addEventListener('ended', () => {
    if (icon) {
      icon.classList.remove('fa-pause');
      icon.classList.add('fa-play', 'ml-0.5');
    }
    if (waveIcon) waveIcon.classList.remove('animate-pulse');
  });
}

/* ---------------- Stats & Initialization ---------------- */
function updateStatCounter(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = Number(value).toLocaleString();
}

function initStats() {
  let visits = 1234;
  let subscriberExtra = 0;
  try {
    const storedVisits = parseInt(localStorage.getItem(STORAGE_KEYS.visits) || '1234', 10);
    visits = (Number.isNaN(storedVisits) ? 1234 : storedVisits) + 1;
    localStorage.setItem(STORAGE_KEYS.visits, String(visits));

    const subs = JSON.parse(localStorage.getItem(STORAGE_KEYS.subscribers) || '[]');
    subscriberExtra = Array.isArray(subs) ? subs.length : 0;
  } catch (_) {}

  updateStatCounter('visitorCount', visits);
  updateStatCounter('subscriberCount', 567 + subscriberExtra);
}

document.addEventListener('DOMContentLoaded', () => {
  let savedLang = 'sw';
  try {
    savedLang = localStorage.getItem(STORAGE_KEYS.lang) || 'sw';
  } catch (_) {}

  setLanguage(savedLang);
  initStats();
  renderWisdomFeed();
  loadChannelVideos();
  setupSearch('globalSearch', 'searchResults');
  setupSearch('mobileSearch', 'mobileSearchResults');
  initAudioPlayer();

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  document.addEventListener('click', (e) => {
    if (!e.target.closest('#globalSearch') && !e.target.closest('#searchResults')) {
      const sr = document.getElementById('searchResults');
      if (sr) sr.classList.add('hidden');
    }
    if (e.target.id === 'videoModal') closeVideoModal();
    if (e.target.id === 'readerModal') closeReaderModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeVideoModal();
      closeReaderModal();
      toggleMobileMenu(false);
    }
  });
});
