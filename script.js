/* Alembeela Foundation — accessible interactions and real channel video loading.
 * For individual video cards, set window.ALEMBEELA_YOUTUBE_API_KEY before this file
 * to a YouTube Data API key restricted to this site's HTTP referrers and YouTube Data API v3.
 * Without a key, the official YouTube uploads playlist still works without credentials.
 */
const YOUTUBE_CHANNEL_ID = 'UCQkPUJEsrjWNP2MfCJRwIFQ';
const YOUTUBE_API_KEY = window.ALEMBEELA_YOUTUBE_API_KEY || '';
const UPLOADS_PLAYLIST_ID = `UU${YOUTUBE_CHANNEL_ID.slice(2)}`;
const CHANNEL_URL = 'https://www.youtube.com/@AlembeelaFoundation';
const translations = {
  en: { nav_home:'Home',nav_series:'Series',nav_wisdom:'Wisdom',nav_library:'Library',nav_teachings:'Teachings',hero_badge:'Saving our shared wisdom & community pillars',hero_desc:'Unveiling, preserving, and sharing Babembe heritage and community teachings that build strong foundations for life, unity, and dignity.',hero_btn1:'Watch Episodes' },
  sw: { nav_home:'Nyumbani',nav_series:'Vipindi',nav_wisdom:'Hekima',nav_library:'Maktaba',nav_teachings:'Mafunzo',hero_badge:'Kuhifadhi hekima na nguzo za jamii yetu',hero_desc:'Tunafichua, kuhifadhi, na kusambaza urithi wa Babembe na mafunzo ya jamii yanayojenga misingi bora ya maisha, umoja, na heshima ya kibinadamu.',hero_btn1:'Tazama Vipindi' },
  ky: { nav_home:'Aka',nav_series:'Pindl',nav_wisdom:'Uhete',nav_library:'Library',nav_teachings:'Amashyi' },
  lg: { nav_home:'Olwa',nav_series:'Ebirimu',nav_wisdom:'Amagezi',nav_library:'Ebitabo',nav_teachings:'Amasoma' },
  yo: { nav_home:'Ilé',nav_series:'Awọn ìfilọ',nav_wisdom:'Ọgbọ́n',nav_library:'Ibi ìwé',nav_teachings:'Ẹ̀kọ́' }
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
function stored(key, fallback) { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } }
function save(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* private browsing/storage restrictions */ } }
function reduceMotion() { return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches; }

window.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initSearch();
  initModals();
  initAudioPlayer();
  initBackToTop();
  initLocalData();
  initSmoothScrolling();
  setLanguage(stored('alembeela-language', 'sw'));
  loadYouTubeVideos();
});

function initMobileMenu() {
  const menu = $('#mobileMenu');
  const button = $('#mobileMenuBtn');
  if (!menu || !button) return;
  button.setAttribute('aria-controls', 'mobileMenu');
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-label', 'Open navigation menu');
  $$('#mobileMenu a').forEach(link => link.addEventListener('click', () => setMobileMenu(false)));
  document.addEventListener('click', event => {
    if (menu.classList.contains('menu-open') && !menu.contains(event.target) && !button.contains(event.target)) setMobileMenu(false);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      setMobileMenu(false);
      closeVideoModal();
      closeReaderModal();
    }
  });
}

function toggleMobileMenu() { setMobileMenu(!$('#mobileMenu')?.classList.contains('menu-open')); }
function setMobileMenu(open) {
  const menu = $('#mobileMenu'); const button = $('#mobileMenuBtn'); const icon = $('#hamburgerIcon');
  if (!menu || !button) return;
  menu.classList.toggle('menu-open', open);
  menu.classList.toggle('hidden', !open);
  button.setAttribute('aria-expanded', String(open));
  button.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  if (icon) icon.className = `fa-solid ${open ? 'fa-xmark' : 'fa-bars'} text-lg`;
  if (!open && !isAnyModalOpen()) document.body.classList.remove('modal-open');
}

function initSmoothScrolling() {
  $$('a[href^="#"]').forEach(link => link.addEventListener('click', event => {
    const href = link.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.getElementById(href.slice(1));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'start' });
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
    history.replaceState(null, '', href);
  }));
}

function setLanguage(language) {
  if (!translations[language]) language = 'sw';
  document.documentElement.lang = language;
  $$('[data-i18n]').forEach(element => { const text = translations[language][element.dataset.i18n]; if (text) element.textContent = text; });
  const select = $('#languageSelect'); if (select) select.value = language;
  save('alembeela-language', language);
}

function loadYouTubeVideos() {
  const grid = $('#episodesGrid');
  if (!grid) return;
  ensureVideoStatus();
  ensureChannelPlaylist();
  if (!YOUTUBE_API_KEY) {
    grid.replaceChildren();
    showVideoStatus('Tazama video za hivi karibuni kwenye playlist rasmi hapa chini. Individual cards zinahitaji YouTube API key iliyowekewa domain restrictions.');
    $('#videoCount')?.replaceChildren(document.createTextNode('—'));
    return;
  }
  showVideoStatus('Inapakia video za hivi karibuni…');
  const cacheKey = 'alembeela-youtube-videos';
  const cache = stored(cacheKey, null);
  if (cache?.savedAt && Date.now() - cache.savedAt < 10 * 60 * 1000 && Array.isArray(cache.items)) {
    renderYouTubeVideos(cache.items);
    showVideoStatus(`${cache.items.length} video zimepakiwa.`);
    return;
  }
  const endpoint = new URL('https://www.googleapis.com/youtube/v3/playlistItems');
  endpoint.search = new URLSearchParams({ part:'snippet,contentDetails',playlistId:UPLOADS_PLAYLIST_ID,maxResults:'12',key:YOUTUBE_API_KEY }).toString();
  fetch(endpoint, { headers: { Accept: 'application/json' } })
    .then(response => { if (!response.ok) throw new Error(`YouTube API returned ${response.status}`); return response.json(); })
    .then(data => {
      const videos = (data.items || []).map(item => ({
        id: item.contentDetails?.videoId || item.snippet?.resourceId?.videoId,
        title: item.snippet?.title || 'Alembeela Foundation video',
        description: item.snippet?.description || '',
        thumbnail: item.snippet?.thumbnails?.high?.url || item.snippet?.thumbnails?.medium?.url || item.snippet?.thumbnails?.default?.url || ''
      })).filter(video => video.id);
      if (!videos.length) throw new Error('No public videos were returned.');
      save(cacheKey, { savedAt: Date.now(), items: videos });
      renderYouTubeVideos(videos);
      showVideoStatus(`${videos.length} video za hivi karibuni zimepakiwa.`);
    })
    .catch(error => {
      console.warn('YouTube API unavailable; official playlist remains available.', error);
      grid.replaceChildren();
      showVideoStatus('Orodha ya video imeonyeshwa kupitia playlist rasmi hapa chini. Cards za moja kwa moja hazipatikani kwa sasa.');
      $('#videoCount')?.replaceChildren(document.createTextNode('—'));
    });
}

function ensureVideoStatus() {
  let status = $('#videoLoadStatus');
  if (!status) {
    status = document.createElement('p');
    status.id = 'videoLoadStatus';
    status.className = 'col-span-full text-center text-sm text-gray-400';
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');
    $('#episodesGrid')?.before(status);
  }
}
function showVideoStatus(message) { const status = $('#videoLoadStatus'); if (status) status.textContent = message; }

function ensureChannelPlaylist() {
  if ($('#channelPlaylist')) return;
  const section = $('#series'); if (!section) return;
  const wrapper = document.createElement('div');
  wrapper.id = 'channelPlaylist';
  wrapper.className = 'mt-12';
  wrapper.innerHTML = `<div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-5"><div><p class="text-gold-400 text-xs font-bold tracking-widest uppercase mb-2">Alembeela Foundation</p><h3 class="text-2xl font-black text-white">Video zote za channel yetu</h3></div><a class="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-gold-500/40 px-5 py-2 text-sm font-bold text-gold-300 hover:bg-gold-500 hover:text-black transition" href="${CHANNEL_URL}/videos" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-youtube" aria-hidden="true"></i> Fungua YouTube</a></div><div class="channel-playlist"><iframe title="Alembeela Foundation latest YouTube uploads" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`;
  const iframe = $('iframe', wrapper);
  iframe.src = `https://www.youtube-nocookie.com/embed/videoseries?list=${UPLOADS_PLAYLIST_ID}&rel=0`;
  $('#episodesGrid')?.after(wrapper);
}

function renderYouTubeVideos(videos) {
  const grid = $('#episodesGrid'); if (!grid) return;
  grid.replaceChildren();
  videos.forEach((video, index) => {
    const article = document.createElement('article');
    article.className = 'episode-card border border-gold-600/20 rounded-2xl overflow-hidden flex flex-col';
    article.dataset.title = `${video.title} ${video.description}`.toLocaleLowerCase();
    const thumbButton = document.createElement('button');
    thumbButton.type = 'button'; thumbButton.className = 'relative h-48 w-full bg-black overflow-hidden group text-left';
    thumbButton.setAttribute('aria-label', `Cheza video: ${video.title}`);
    const image = document.createElement('img'); image.src = video.thumbnail || `https://i.ytimg.com/vi/${encodeURIComponent(video.id)}/mqdefault.jpg`;
    image.alt = ''; image.loading = 'lazy'; image.className = 'w-full h-full object-cover';
    const playBadge = document.createElement('span'); playBadge.className = 'absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition';
    playBadge.innerHTML = '<span class="w-12 h-12 rounded-full bg-gold-500 text-black flex items-center justify-center"><i class="fa-solid fa-play" aria-hidden="true"></i></span>';
    thumbButton.append(image, playBadge); thumbButton.addEventListener('click', () => openVideoModal(video.id));
    const body = document.createElement('div'); body.className = 'p-5 sm:p-6 flex-1 flex flex-col justify-between';
    const title = document.createElement('h3'); title.className = 'text-lg font-bold text-white mb-2'; title.textContent = video.title;
    const description = document.createElement('p'); description.className = 'text-gray-400 text-sm mb-5 leading-relaxed';
    description.textContent = video.description.length > 150 ? `${video.description.slice(0, 147)}…` : video.description;
    const number = document.createElement('p'); number.className = 'text-xs text-gold-400 font-bold uppercase tracking-wider mb-3'; number.textContent = `Video ${index + 1}`;
    const play = document.createElement('button'); play.type = 'button'; play.className = 'min-h-11 w-full rounded-lg border border-gold-500/40 text-gold-300 font-bold hover:bg-gold-500 hover:text-black transition'; play.textContent = 'Tazama video';
    play.addEventListener('click', () => openVideoModal(video.id));
    body.append(number, title, description, play); article.append(thumbButton, body); grid.append(article);
  });
  $('#videoCount')?.replaceChildren(document.createTextNode(String(videos.length)));
  filterEpisodes();
}

function filterEpisodes() {
  const query = ($('#episodeSearch')?.value || '').trim().toLocaleLowerCase();
  let visible = 0;
  $$('.episode-card').forEach(card => { const matches = (card.dataset.title || '').includes(query); card.hidden = !matches; if (matches) visible++; });
  const status = $('#videoFilterStatus');
  if (status) status.textContent = query ? `${visible} matokeo` : '';
}

function initSearch() {
  ['globalSearch', 'mobileSearch'].forEach(id => {
    const input = document.getElementById(id); if (!input) return;
    input.setAttribute('aria-label', id === 'mobileSearch' ? 'Tafuta yaliyomo kwenye tovuti' : 'Search website content');
    let results = id === 'globalSearch' ? $('#searchResults') : null;
    if (!results) { results = document.createElement('div'); results.id = `${id}Results`; results.className = 'hidden mt-2 max-h-60 overflow-y-auto rounded-xl border border-gold-500/30 bg-emeraldCustom-900 shadow-xl'; input.insertAdjacentElement('afterend', results); }
    results.setAttribute('role', 'listbox');
    input.setAttribute('aria-controls', results.id); input.setAttribute('aria-expanded', 'false');
    input.addEventListener('input', () => searchSite(input, results));
    input.addEventListener('keydown', event => { if (event.key === 'Escape') { results.classList.add('hidden'); input.setAttribute('aria-expanded','false'); } });
  });
  $('#episodeSearch')?.addEventListener('input', filterEpisodes);
  let filterStatus = $('#videoFilterStatus');
  if (!filterStatus && $('#episodeSearch')) { filterStatus = document.createElement('p'); filterStatus.id = 'videoFilterStatus'; filterStatus.className = 'text-sm text-gold-300 mt-3'; filterStatus.setAttribute('role','status'); $('#episodeSearch').parentElement.after(filterStatus); }
}

function searchSite(input, results) {
  const query = input.value.trim().toLocaleLowerCase();
  results.replaceChildren();
  if (!query) { results.classList.add('hidden'); input.setAttribute('aria-expanded','false'); return; }
  const entries = [];
  $$('section[id]').forEach(section => {
    const text = `${section.querySelector('h1,h2,h3')?.textContent || ''} ${section.textContent || ''}`;
    if (text.toLocaleLowerCase().includes(query)) entries.push({ label: section.querySelector('h1,h2,h3')?.textContent || section.id, id: section.id });
  });
  $$('.episode-card').forEach(card => { if ((card.dataset.title || '').includes(query)) entries.push({ label: $('h3', card)?.textContent || 'Video', id: 'series' }); });
  const unique = [...new Map(entries.map(entry => [`${entry.id}:${entry.label}`, entry])).values()].slice(0, 8);
  if (!unique.length) { const empty = document.createElement('p'); empty.className = 'px-4 py-3 text-sm text-gray-300'; empty.textContent = 'Hakuna matokeo.'; results.append(empty); }
  unique.forEach(entry => {
    const button = document.createElement('button'); button.type = 'button'; button.className = 'block min-h-11 w-full px-4 py-3 text-left text-sm text-gray-100 hover:bg-gold-500/10'; button.setAttribute('role','option'); button.textContent = entry.label;
    button.addEventListener('click', () => { document.getElementById(entry.id)?.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth' }); results.classList.add('hidden'); input.setAttribute('aria-expanded','false'); });
    results.append(button);
  });
  results.classList.remove('hidden'); input.setAttribute('aria-expanded','true');
}

function initLocalData() {
  const wisdom = stored('alembeela-wisdom', []);
  wisdom.forEach(entry => renderWisdom(entry));
  const subscribers = stored('alembeela-subscribers', []);
  if (subscribers.length) $('#subscriberCount')?.replaceChildren(document.createTextNode(String(subscribers.length)));
  if (wisdom.length) $('#wisdomCount')?.replaceChildren(document.createTextNode(String(wisdom.length + 45)));
}

function submitNewsletter(event) {
  event.preventDefault(); const input = $('#newsletterEmail'); if (!input?.reportValidity()) return;
  const list = stored('alembeela-subscribers', []); const email = input.value.trim().toLowerCase();
  if (!list.includes(email)) list.push(email); save('alembeela-subscribers', list);
  input.value = ''; $('#subscriberCount')?.replaceChildren(document.createTextNode(String(list.length)));
  announceForm('#newsletterForm', 'Asante kwa kujiunga. Taarifa imehifadhiwa kwenye kifaa hiki pekee.');
}

function submitWisdom(event) {
  event.preventDefault(); const name = $('#contributorName')?.value.trim(); const text = $('#contributorWisdom')?.value.trim();
  if (!name || !text) return;
  const entry = { name, text }; const list = stored('alembeela-wisdom', []); list.unshift(entry); save('alembeela-wisdom', list);
  renderWisdom(entry, true); $('#wisdomForm')?.reset(); $('#wisdomCount')?.replaceChildren(document.createTextNode(String(list.length + 45)));
  announceForm('#wisdomForm', 'Asante! Hekima yako imeongezwa kwenye uwanja wa jamii.');
}
function announceForm(selector, message) {
  let status = $(`${selector}Status`);
  if (!status) { status = document.createElement('p'); status.id = `${selector.slice(1)}Status`; status.className = 'mt-3 text-sm text-gold-300'; status.setAttribute('role','status'); status.setAttribute('aria-live','polite'); $(selector)?.after(status); }
  status.textContent = message;
}
function renderWisdom(entry, prepend = false) {
  const feed = $('#wisdomFeed'); if (!feed) return;
  const card = document.createElement('article'); card.className = 'bg-emeraldCustom-900/40 border border-gold-500/30 p-6 rounded-2xl relative';
  const quote = document.createElement('p'); quote.className = 'text-gray-200 text-sm italic mb-3'; quote.textContent = `“${entry.text}”`;
  const attribution = document.createElement('span'); attribution.className = 'text-xs text-gold-400 font-bold'; attribution.textContent = `— ${entry.name}`;
  card.append(quote, attribution); prepend ? feed.prepend(card) : feed.append(card);
}
function likeWisdom(button) {
  const count = $('.likeCount', button); if (!count) return;
  const liked = button.dataset.liked === 'true'; button.dataset.liked = String(!liked); count.textContent = String(Math.max(0, Number(count.textContent) + (liked ? -1 : 1)));
  button.setAttribute('aria-pressed', String(!liked));
}
function toggleComments(button) { button.closest('#wisdomFeed > div, #wisdomFeed > article')?.querySelector('.commentsSection')?.classList.toggle('hidden'); }

function toggleAccordion(id) {
  const panel = $(`#content-${id}`); const icon = $(`#icon-${id}`); if (!panel) return;
  const opening = panel.classList.contains('hidden');
  $$('[id^="content-"]').forEach(item => { item.classList.add('hidden'); item.setAttribute('aria-hidden','true'); });
  $$('[id^="icon-"]').forEach(item => item.classList.remove('rotate-180'));
  if (opening) { panel.classList.remove('hidden'); panel.setAttribute('aria-hidden','false'); icon?.classList.add('rotate-180'); }
}

function initModals() {
  [['videoModal', closeVideoModal], ['readerModal', closeReaderModal]].forEach(([id, close]) => {
    const modal = document.getElementById(id); if (!modal) return;
    modal.setAttribute('role','dialog'); modal.setAttribute('aria-modal','true');
    modal.addEventListener('click', event => { if (event.target === modal) close(); });
  });
  const frame = $('#modalIframe'); if (frame) { frame.title = 'Alembeela Foundation YouTube video player'; frame.setAttribute('allowfullscreen',''); }
}
function isAnyModalOpen() { return ['videoModal','readerModal'].some(id => document.getElementById(id)?.classList.contains('flex')); }
function openReaderModal(title, content) {
  const modal = $('#readerModal'); if (!modal) return;
  $('#readerTitle').textContent = title; $('#readerContent').textContent = content;
  modal.classList.remove('hidden'); modal.classList.add('flex'); document.body.classList.add('modal-open'); modal.querySelector('button')?.focus();
}
function closeReaderModal() { const modal = $('#readerModal'); if (!modal) return; modal.classList.remove('flex'); modal.classList.add('hidden'); if (!isAnyModalOpen()) document.body.classList.remove('modal-open'); }
function openVideoModal(videoIdOrUrl) {
  const modal = $('#videoModal'); const frame = $('#modalIframe'); if (!modal || !frame) return;
  const videoId = String(videoIdOrUrl).match(/^[\w-]{11}$/) ? videoIdOrUrl : null;
  const url = videoId ? `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1&rel=0` : videoIdOrUrl;
  if (!/^https:\/\/www\.youtube-nocookie\.com\/embed\//.test(url)) return;
  frame.src = url; modal.classList.remove('hidden'); modal.classList.add('flex'); document.body.classList.add('modal-open'); modal.querySelector('button')?.focus();
}
function closeVideoModal() { const modal = $('#videoModal'); const frame = $('#modalIframe'); if (!modal || !frame) return; frame.src = 'about:blank'; modal.classList.remove('flex'); modal.classList.add('hidden'); if (!isAnyModalOpen()) document.body.classList.remove('modal-open'); }

function initAudioPlayer() {
  const audio = $('#audioPlayer'); const icon = $('#audioPlayBtn i'); if (!audio || !icon) return;
  $('#audioPlayBtn')?.setAttribute('aria-label','Play oral archive audio');
  audio.addEventListener('play', () => { icon.className = 'fa-solid fa-pause'; $('#audioPlayBtn')?.setAttribute('aria-label','Pause oral archive audio'); });
  audio.addEventListener('pause', () => { icon.className = 'fa-solid fa-play ml-0.5'; $('#audioPlayBtn')?.setAttribute('aria-label','Play oral archive audio'); });
  audio.addEventListener('error', () => { const button = $('#audioPlayBtn'); if (button) button.title = 'Audio is currently unavailable'; });
}
function toggleAudioPlayer() { const audio = $('#audioPlayer'); if (!audio) return; if (audio.paused) audio.play().catch(() => { $('#audioPlayBtn')?.setAttribute('title','Audio is currently unavailable'); }); else audio.pause(); }
function initBackToTop() { const button = $('#backToTop'); if (!button) return; button.setAttribute('aria-label','Back to top'); const update = () => button.classList.toggle('visible', window.scrollY > 500); window.addEventListener('scroll', update, { passive:true }); update(); }
function scrollToTop() { window.scrollTo({ top:0, behavior:reduceMotion() ? 'auto' : 'smooth' }); }
