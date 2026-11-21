/* Alembeela Foundation — complete client-side fixes */

const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@AlembeelaFoundation';
const FALLBACK_VIDEOS = [
  { title: 'Úmbo Cha Babembe — Misingi', description: 'Misingi ya historia, maadili na mshikamano wa jamii.', videoId: 'chCvVUD1FPo' },
  { title: 'Úmbo Cha Babembe — Vizazi', description: 'Mtiririko wa hekima kati ya vizazi na namna ya kulinda urithi.', videoId: 'chCvVUD1FPo' },
  { title: 'Úmbo Cha Babembe — Jamii', description: 'Kusuluhisha migogoro na kujenga mshikamano wa jamii.', videoId: 'chCvVUD1FPo' }
];

const translations = {
  en: { nav_home: 'Home', nav_series: 'Series', nav_wisdom: 'Wisdom', nav_library: 'Library', nav_teachings: 'Teachings', hero_badge: 'Saving our shared wisdom & community pillars', hero_desc: 'Unveiling, preserving, and sharing Babembe heritage and community teachings that build strong foundations for life, unity, and dignity.', hero_btn1: 'Watch Episodes' },
  sw: { nav_home: 'Nyumbani', nav_series: 'Vipindi', nav_wisdom: 'Hekima', nav_library: 'Maktaba', nav_teachings: 'Mafunzo', hero_badge: 'Kuhifadhi hekima na nguzo za jamii yetu', hero_desc: 'Tunafichua, kuhifadhi, na kusambaza urithi wa Babembe na mafunzo ya jamii yanayojenga misingi bora ya maisha, umoja, na heshima ya kibinadamu.', hero_btn1: 'Tazama Vipindi' },
  ky: { nav_home: 'Aka', nav_series: 'Pindl', nav_wisdom: 'Uhete', nav_library: 'Library', nav_teachings: 'Amashyi' },
  lg: { nav_home: 'Olwa', nav_series: 'Ebirimu', nav_wisdom: 'Amagezi', nav_library: 'Ebitabo', nav_teachings: 'Amasoma' },
  yo: { nav_home: 'Ilé', nav_series: 'Awọn ìfilọ', nav_wisdom: 'Ọgbọ́n', nav_library: 'Ibi ìwé', nav_teachings: 'Ẹ̀kọ́' }
};

function escapeText(value) {
  const element = document.createElement('span');
  element.textContent = String(value);
  return element.innerHTML;
}

function safeStorageGet(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch (_) { return fallback; }
}

function safeStorageSet(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch (_) { /* Storage may be unavailable */ }
}

document.addEventListener('DOMContentLoaded', () => {
  initSmoothScrolling();
  initMobileMenu();
  initModals();
  initAudioPlayer();
  initBackToTop();
  initLocalData();
  renderFallbackVideos();

  const savedLanguage = safeStorageGet('alembeela-language', 'sw');
  setLanguage(savedLanguage);

  document.getElementById('globalSearch')?.addEventListener('input', handleGlobalSearch);
  document.getElementById('mobileSearch')?.addEventListener('input', handleGlobalSearch);
});

function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
      const id = link.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    });
  });
}

function toggleMobileMenu(forceClose = false) {
  const menu = document.getElementById('mobileMenu');
  const icon = document.getElementById('hamburgerIcon');
  if (!menu || !icon) return;

  const opening = forceClose ? false : menu.classList.toggle('menu-open');
  menu.classList.toggle('hidden', !opening);
  icon.className = `fa-solid ${opening ? 'fa-xmark' : 'fa-bars'} text-lg`;
  document.body.classList.toggle('modal-open', opening);
}

function initMobileMenu() {
  document.querySelectorAll('#mobileMenu a').forEach(link => link.addEventListener('click', () => toggleMobileMenu(true)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      toggleMobileMenu(true);
      closeVideoModal();
      closeReaderModal();
    }
  });
}

function setLanguage(language) {
  if (!translations[language]) language = 'sw';
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    if (translations[language][key]) element.textContent = translations[language][key];
  });
  const selector = document.getElementById('languageSelect');
  if (selector) selector.value = language;
  safeStorageSet('alembeela-language', language);
}

function renderFallbackVideos() {
  const grid = document.getElementById('episodesGrid');
  if (!grid) return;

  grid.innerHTML = FALLBACK_VIDEOS.map((video, index) => `
    <article class="episode-card bg-emeraldCustom-900/60 border border-gold-600/20 rounded-2xl overflow-hidden hover:border-gold-500 transition duration-300 flex flex-col" data-title="${escapeText(video.title.toLowerCase())}">
      <button type="button" onclick="openVideoModal('https://www.youtube-nocookie.com/embed/${video.videoId}?rel=0')" class="relative h-48 w-full bg-black overflow-hidden group text-left" aria-label="Play ${escapeText(video.title)}">
        <img src="https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg" alt="${escapeText(video.title)}" loading="lazy" class="w-full h-full object-cover">
        <span class="absolute inset-0 flex items-center justify-center bg-black/30 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition">
          <span class="w-12 h-12 rounded-full bg-gold-500 text-black flex items-center justify-center"><i class="fa-solid fa-play"></i></span>
        </span>
      </button>
      <div class="p-6 flex-1 flex flex-col justify-between">
        <div><h3 class="text-xl font-bold text-white mb-2">${escapeText(video.title)}</h3><p class="text-gray-400 text-sm mb-6">${escapeText(video.description)}</p></div>
        <button type="button" onclick="openVideoModal('https://www.youtube-nocookie.com/embed/${video.videoId}?rel=0')" class="w-full border border-gold-500/40 text-gold-400 hover:bg-gold-500 hover:text-black py-3 rounded-lg transition font-bold"><i class="fa-solid fa-play mr-2"></i>Tazama sehemu</button>
      </div>
    </article>`).join('');

  document.getElementById('videoCount')?.replaceChildren(document.createTextNode(String(FALLBACK_VIDEOS.length)));
}

function filterEpisodes() {
  const input = document.getElementById('episodeSearch')?.value.trim().toLowerCase() ?? '';
  document.querySelectorAll('.episode-card').forEach(card => {
    card.style.display = (card.dataset.title || '').includes(input) ? 'flex' : 'none';
  });
}

function handleGlobalSearch(event) {
  const query = event.target.value.trim().toLowerCase();
  const results = document.getElementById('searchResults');
  if (!results) return;
  if (!query) { results.classList.add('hidden'); results.innerHTML = ''; return; }

  const matches = [];
  document.querySelectorAll('section[id], article[data-title]').forEach(element => {
    const title = (element.dataset.title || element.querySelector('h1,h2,h3')?.textContent || element.id).trim();
    if (title.toLowerCase().includes(query)) matches.push({ title, id: element.id || 'series' });
  });

  results.innerHTML = matches.length ? matches.slice(0, 8).map(item => `<button type="button" class="block w-full text-left px-4 py-3 hover:bg-gold-500/10 text-sm" onclick="jumpToSearch('${escapeText(item.id)}')">${escapeText(item.title)}</button>`).join('') : '<p class="px-4 py-3 text-sm text-gray-400">Hakuna matokeo.</p>';
  results.classList.remove('hidden');
}

function jumpToSearch(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  document.getElementById('searchResults')?.classList.add('hidden');
}

function submitNewsletter(event) {
  event.preventDefault();
  const input = document.getElementById('newsletterEmail');
  if (!input || !input.checkValidity()) { input?.reportValidity(); return; }

  const subscribers = safeStorageGet('alembeela-subscribers', []);
  const email = input.value.trim().toLowerCase();
  if (!subscribers.includes(email)) subscribers.push(email);
  safeStorageSet('alembeela-subscribers', subscribers);
  input.value = '';
  document.getElementById('subscriberCount')?.replaceChildren(document.createTextNode(String(subscribers.length)));
  alert('Asante kwa kujiunga! Email yako imehifadhiwa kwenye kifaa hiki.');
}

function submitWisdom(event) {
  event.preventDefault();
  const name = document.getElementById('contributorName')?.value.trim();
  const text = document.getElementById('contributorWisdom')?.value.trim();
  if (!name || !text) return;

  const entry = { name, text };
  const wisdom = safeStorageGet('alembeela-wisdom', []);
  wisdom.unshift(entry);
  safeStorageSet('alembeela-wisdom', wisdom);
  renderWisdom(entry, true);
  document.getElementById('wisdomForm')?.reset();
  document.getElementById('wisdomCount')?.replaceChildren(document.createTextNode(String(wisdom.length + 45)));
  alert('Asante! Hekima yako imeongezwa kwenye uwanja wa jamii.');
}

function renderWisdom(entry, prepend = false) {
  const feed = document.getElementById('wisdomFeed');
  if (!feed) return;
  const card = document.createElement('article');
  card.className = 'bg-emeraldCustom-900/40 border border-gold-500/30 p-6 rounded-2xl relative';
  card.innerHTML = `<i class="fa-solid fa-quote-left text-gold-500/20 text-4xl absolute top-4 right-6"></i><p class="text-gray-200 text-sm italic mb-3"></p><span class="text-xs text-gold-400 font-bold"></span>`;
  card.querySelector('p').textContent = `"${entry.text}"`;
  card.querySelector('span').textContent = `— ${entry.name}`;
  prepend ? feed.prepend(card) : feed.append(card);
}

function initLocalData() {
  const wisdom = safeStorageGet('alembeela-wisdom', []);
  wisdom.forEach(entry => renderWisdom(entry));
  const subscribers = safeStorageGet('alembeela-subscribers', []);
  if (subscribers.length) document.getElementById('subscriberCount')?.replaceChildren(document.createTextNode(String(subscribers.length)));
  document.getElementById('wisdomCount')?.replaceChildren(document.createTextNode(String(wisdom.length + 45)));
}

function likeWisdom(button) {
  const count = button.querySelector('.likeCount');
  if (!count) return;
  const liked = button.dataset.liked === 'true';
  button.dataset.liked = String(!liked);
  count.textContent = String(Number(count.textContent) + (liked ? -1 : 1));
  button.classList.toggle('text-red-400', !liked);
}

function toggleComments(button) {
  const card = button.closest('.bg-emeraldCustom-900\\/40, article') || button.parentElement?.parentElement;
  card?.querySelector('.commentsSection')?.classList.toggle('hidden');
}

function openReaderModal(title, content) {
  const modal = document.getElementById('readerModal');
  if (!modal) return;
  document.getElementById('readerTitle').textContent = title;
  document.getElementById('readerContent').textContent = content;
  modal.classList.remove('hidden'); modal.classList.add('flex');
  document.body.classList.add('modal-open');
  modal.querySelector('button')?.focus();
}

function closeReaderModal() {
  const modal = document.getElementById('readerModal');
  if (!modal) return;
  modal.classList.remove('flex'); modal.classList.add('hidden');
  if (!document.getElementById('videoModal')?.classList.contains('flex')) document.body.classList.remove('modal-open');
}

function toggleAccordion(id) {
  const content = document.getElementById(`content-${id}`);
  const icon = document.getElementById(`icon-${id}`);
  if (!content || !icon) return;
  content.classList.toggle('hidden');
  icon.classList.toggle('rotate-180');
  document.querySelectorAll(`[id^="content-"]`).forEach((item, index) => {
    if (index + 1 !== id) item.classList.add('hidden');
  });
}

function openVideoModal(url) {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('modalIframe');
  if (!modal || !iframe) return;
  iframe.src = url;
  modal.classList.remove('hidden'); modal.classList.add('flex');
  document.body.classList.add('modal-open');
  modal.querySelector('button')?.focus();
}

function closeVideoModal() {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('modalIframe');
  if (!modal || !iframe) return;
  iframe.src = 'about:blank';
  modal.classList.remove('flex'); modal.classList.add('hidden');
  if (!document.getElementById('readerModal')?.classList.contains('flex')) document.body.classList.remove('modal-open');
}

function initAudioPlayer() {
  const audio = document.getElementById('audioPlayer');
  const icon = document.querySelector('#audioPlayBtn i');
  if (!audio || !icon) return;
  audio.addEventListener('play', () => { icon.className = 'fa-solid fa-pause'; });
  audio.addEventListener('pause', () => { icon.className = 'fa-solid fa-play ml-0.5'; });
  audio.addEventListener('error', () => { console.warn('The oral-history audio source is currently unavailable.'); });
}

function toggleAudioPlayer() {
  const audio = document.getElementById('audioPlayer');
  if (!audio) return;
  if (audio.paused) audio.play().catch(() => alert('Unable to play the audio source. Please try again later.'));
  else audio.pause();
}

function initBackToTop() {
  const button = document.getElementById('backToTop');
  if (!button) return;
  const update = () => button.classList.toggle('visible', window.scrollY > 500);
  window.addEventListener('scroll', update, { passive: true });
  update();
}

function scrollToTop() { window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); }
