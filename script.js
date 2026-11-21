/* ==========================================================================
   ALEMBEELA FOUNDATION — COMPLETE SCRIPT (WITH LANGUAGE SWITCH SW/EN)
   ========================================================================== */

const SITE_CONFIG = {
  secondaryChannelUrl: 'https://www.youtube.com/@Alembeelawaidi',
  storageKey: 'alembeela_foundation_state_v2',
  defaultLoopAll: true
};

const I18N = {
  sw: {
    siteSubtitle: 'Úmbo Cha Babembe & Urithi wa Jamii',
    secondChannelPrefix: 'Tazama pia:',
    searchLabel: 'Tafuta chochote kwenye tovuti (Video, Short, Playlist, au Sauti za Wazee)',
    searchPlaceholder: 'Tafuta: Úmbo, Sehemu, Short, Playlist, Kipande 01...',
    clearBtn: 'Futa',
    libraryHeading: 'Maktaba',
    savedTab: 'Vipendwa',
    playlistsHeading: 'Playlists',
    eldersBadge: 'Sauti za Wazee',
    prevBtn: '⏮ Nyuma',
    playBtn: '▶ Cheza',
    pauseBtn: '⏸ Simamisha',
    nextBtn: 'Mbele ⏭',
    loopOn: '🔁 Loop Nzima: ON',
    loopOff: '🔁 Loop Nzima: OFF',
    freezeLabel: 'Kugandisha',
    blockLabel: 'Kuzuia',
    statusPaused: 'IMESIMAMA',
    statusFrozen: 'IMEGANDISHWA',
    statusPlayingLoop: 'INACHEZA · AUTO-NEXT & LOOP',
    statusPlayingOnce: 'INACHEZA · AUTO-NEXT',
    watchHere: 'Tazama Hapa',
    playSeriesHere: 'Cheza Mfululizo Hapa',
    shareBtn: 'Share',
    copyLinkBtn: 'Nakili Link',
    saveBtn: '☆ Hifadhi',
    savedBtn: '★ Imependezwa',
    copiedToast: 'Kiungo kimenakiliwa.',
    footerCopy: 'Urithi, mafunzo, na sauti za jamii — GitHub Pages.',
    footerLib: 'Maktaba',
    footerPl: 'Playlists',
    closeBtn: '✕ Funga'
  },
  en: {
    siteSubtitle: 'Úmbo Cha Babembe & Community Heritage',
    secondChannelPrefix: 'Also watch:',
    searchLabel: 'Search anything across the site (Video, Short, Playlist, or Elders Voices)',
    searchPlaceholder: 'Search: Úmbo, Sehemu, Short, Playlist, Kipande 01...',
    clearBtn: 'Clear',
    libraryHeading: 'Library',
    savedTab: 'Saved',
    playlistsHeading: 'Playlists',
    eldersBadge: 'Elders Voices',
    prevBtn: '⏮ Prev',
    playBtn: '▶ Play',
    pauseBtn: '⏸ Pause',
    nextBtn: 'Next ⏭',
    loopOn: '🔁 Full Loop: ON',
    loopOff: '🔁 Full Loop: OFF',
    freezeLabel: 'Freeze',
    blockLabel: 'Block',
    statusPaused: 'PAUSED',
    statusFrozen: 'FROZEN',
    statusPlayingLoop: 'PLAYING · AUTO-NEXT & LOOP',
    statusPlayingOnce: 'PLAYING · AUTO-NEXT',
    watchHere: 'Watch Here',
    playSeriesHere: 'Play Series Here',
    shareBtn: 'Share',
    copyLinkBtn: 'Copy Link',
    saveBtn: '☆ Save',
    savedBtn: '★ Saved',
    copiedToast: 'Link copied.',
    footerCopy: 'Heritage, teachings, and community voices — GitHub Pages.',
    footerLib: 'Library',
    footerPl: 'Playlists',
    closeBtn: '✕ Close'
  }
};

const MEDIA_ITEMS = [
  {
    id: 'vid-chCvVUD1FPo',
    videoId: 'chCvVUD1FPo',
    type: 'video',
    badge: 'Sehemu ya Kwanza (1)',
    title: 'ÚMBO CHA BABEMBE: Sehemu ya Kwanza (1) – @ALEMBEELAWAIDI',
    description: 'Úmbo Cha Babembe — Sehemu ya Kwanza (1).',
    shareUrl: 'https://youtu.be/chCvVUD1FPo'
  },
  {
    id: 'vid-xsxfbtJnrzg',
    videoId: 'xsxfbtJnrzg',
    type: 'video',
    badge: 'Sehemu ya Pili (2)',
    title: 'UMBO CHA BABEMBE SEHEMU YA PILI 2 @Alembeela wa idi APRIL 18TH, 2026',
    description: 'Úmbo Cha Babembe — Sehemu ya Pili (2).',
    shareUrl: 'https://youtu.be/xsxfbtJnrzg'
  },
  {
    id: 'vid-YPPOyvxJ-Wk',
    videoId: 'YPPOyvxJ-Wk',
    type: 'video',
    badge: 'Sehemu ya Kwanza (Toleo)',
    title: 'Úmbo cha Babembe: Sehemu ya Kwanza (1) – @ALEMBEELAWAIDI',
    description: 'Úmbo Cha Babembe — Sehemu ya Kwanza (1).',
    shareUrl: 'https://youtu.be/YPPOyvxJ-Wk'
  },
  {
    id: 'short-HhJm-izUZk4',
    videoId: 'HhJm-izUZk4',
    type: 'short',
    badge: 'Short · 0:11',
    title: 'ÚMBO #AlembeelaFoundation#Alembeelawaidi . full video ipo youtube',
    description: 'Short — 0:11 (@Alembeelawaidi).',
    shareUrl: 'https://youtube.com/shorts/HhJm-izUZk4'
  },
  {
    id: 'short-jCPtT8ZPsoE',
    videoId: 'jCPtT8ZPsoE',
    type: 'short',
    badge: 'Short · 0:08',
    title: 'ÚMBO #AlembeelaFoundation#Alembeelawaidi . full video ipo youtube',
    description: 'Short — 0:08 (@Alembeelawaidi).',
    shareUrl: 'https://youtube.com/shorts/jCPtT8ZPsoE'
  },
  {
    id: 'short-VklA0Aw2TLc',
    videoId: 'VklA0Aw2TLc',
    type: 'short',
    badge: 'Short · 0:11',
    title: 'ÚMBO #AlembeelaFoundation#Alembeelawaidi . full video ipo youtube',
    description: 'Short — 0:11 (@Alembeelawaidi).',
    shareUrl: 'https://youtube.com/shorts/VklA0Aw2TLc'
  }
];

const PLAYLIST_ITEMS = [
  {
    id: 'PLns5POVtyOJszsYfQkjrf7YD80ycoj4IG',
    title: 'Playlist 01 — Úmbo Cha Babembe',
    description: 'PLns5POVtyOJszsYfQkjrf7YD80ycoj4IG',
    shareUrl: 'https://youtube.com/playlist?list=PLns5POVtyOJszsYfQkjrf7YD80ycoj4IG'
  },
  {
    id: 'PLcI8Km4aCNOM',
    title: 'Playlist 02 — Alembeela Foundation',
    description: 'PLcI8Km4aCNOM',
    shareUrl: 'https://youtube.com/playlist?list=PLcI8Km4aCNOM'
  }
];

// Sauti za Wazee: Vipande 3 bila majina ya kutunga
const ELDERS_VOICES = [
  { id: 'kipande-01', label: 'Kipande 01', videoId: 'chCvVUD1FPo', audioSrc: '', durationSec: 45 },
  { id: 'kipande-02', label: 'Kipande 02', videoId: 'xsxfbtJnrzg', audioSrc: '', durationSec: 45 },
  { id: 'kipande-03', label: 'Kipande 03', videoId: 'YPPOyvxJ-Wk', audioSrc: '', durationSec: 45 }
];

const appState = {
  lang: 'sw',
  libraryFilter: 'all',
  searchQuery: '',
  savedIds: [],
  currentTrackIndex: 0,
  isPlaying: false,
  isFrozen: false,
  isBlocked: false,
  loopAll: SITE_CONFIG.defaultLoopAll,
  elapsedSec: 0,
  lastFocusedElement: null
};

const eldersAudio = new Audio();
eldersAudio.preload = 'metadata';
let tickerIntervalId = null;
let lastTickMs = null;

function t(key) {
  return (I18N[appState.lang] && I18N[appState.lang][key]) || I18N.sw[key] || '';
}

function loadSavedState() {
  try {
    const raw = localStorage.getItem(SITE_CONFIG.storageKey);
    if (!raw) return;
    const p = JSON.parse(raw);
    if (p.lang === 'sw' || p.lang === 'en') appState.lang = p.lang;
    if (Array.isArray(p.savedIds)) appState.savedIds = p.savedIds;
    if (typeof p.libraryFilter === 'string') appState.libraryFilter = p.libraryFilter;
    if (typeof p.currentTrackIndex === 'number') appState.currentTrackIndex = p.currentTrackIndex;
    if (typeof p.loopAll === 'boolean') appState.loopAll = p.loopAll;
    if (typeof p.isFrozen === 'boolean') appState.isFrozen = p.isFrozen;
    if (typeof p.isBlocked === 'boolean') appState.isBlocked = p.isBlocked;
    if (typeof p.elapsedSec === 'number') appState.elapsedSec = p.elapsedSec;
  } catch (_) {}
}

function saveState() {
  try {
    localStorage.setItem(
      SITE_CONFIG.storageKey,
      JSON.stringify({
        lang: appState.lang,
        savedIds: appState.savedIds,
        libraryFilter: appState.libraryFilter,
        currentTrackIndex: appState.currentTrackIndex,
        loopAll: appState.loopAll,
        isFrozen: appState.isFrozen,
        isBlocked: appState.isBlocked,
        elapsedSec: appState.elapsedSec
      })
    );
  } catch (_) {}
}

function showToast(msg) {
  const el = document.getElementById('toastBanner');
  if (!el) return;
  el.textContent = msg;
  el.classList.remove('hidden');
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => el.classList.add('hidden'), 3000);
}

function setLanguage(lang) {
  if (appState.isBlocked) {
    showToast(appState.lang === 'en' ? 'Block is ON.' : 'Swichi ya Kuzuia imewashwa (ON).');
    return;
  }
  appState.lang = lang === 'en' ? 'en' : 'sw';
  document.documentElement.lang = appState.lang;
  document.querySelectorAll('[data-lang]').forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.lang === appState.lang);
  });
  saveState();
  applyLanguageLabels();
  renderAllSections();
}

function applyLanguageLabels() {
  const setText = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };
  setText('siteSubtitle', t('siteSubtitle'));
  setText('searchLabel', t('searchLabel'));
  setText('clearSearchBtn', t('clearBtn'));
  setText('libraryHeading', t('libraryHeading'));
  setText('savedTabLabel', t('savedTab'));
  setText('playlistsHeading', t('playlistsHeading'));
  setText('eldersBadgeText', t('eldersBadge'));
  setText('elderPrevBtn', t('prevBtn'));
  setText('elderPlayBtn', t('playBtn'));
  setText('elderPauseBtn', t('pauseBtn'));
  setText('elderNextBtn', t('nextBtn'));
  setText('freezeLabelText', t('freezeLabel'));
  setText('blockLabelText', t('blockLabel'));
  setText('footerCopy', t('footerCopy'));
  setText('footerLibLink', t('footerLib'));
  setText('footerPlLink', t('footerPl'));
  setText('closeModalBtn', t('closeBtn'));

  const secondChannelEl = document.getElementById('secondChannelText');
  if (secondChannelEl) {
    secondChannelEl.innerHTML = `${escapeHtml(t('secondChannelPrefix'))} <strong>@Alembeelawaidi</strong>`;
  }

  const searchInput = document.getElementById('globalSearchInput');
  if (searchInput) searchInput.placeholder = t('searchPlaceholder');
}

function matchesSearch(parts) {
  const q = appState.searchQuery.trim().toLowerCase();
  if (!q) return true;
  return parts.join(' ').toLowerCase().includes(q);
}

function setLibraryFilter(filter) {
  appState.libraryFilter = filter;
  document.querySelectorAll('[data-library-filter]').forEach((btn) => {
    const active = btn.dataset.libraryFilter === filter;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-selected', String(active));
    btn.setAttribute('aria-pressed', String(active));
  });
  saveState();
  renderAllSections();
}

function toggleSavedItem(itemId) {
  const idx = appState.savedIds.indexOf(itemId);
  if (idx >= 0) appState.savedIds.splice(idx, 1);
  else appState.savedIds.push(itemId);
  saveState();
  renderLibrary();
}

function renderLibrary() {
  const grid = document.getElementById('libraryGrid');
  const countEl = document.getElementById('savedCount');
  if (countEl) countEl.textContent = String(appState.savedIds.length);
  if (!grid) return;

  const items = MEDIA_ITEMS.filter((item) => {
    const typeMatch =
      appState.libraryFilter === 'all' ||
      (appState.libraryFilter === 'saved'
        ? appState.savedIds.includes(item.id)
        : item.type === appState.libraryFilter);
    const searchMatch = matchesSearch([item.title, item.description, item.badge, item.type, item.videoId]);
    return typeMatch && searchMatch;
  });

  if (!items.length) {
    grid.innerHTML = `<div class="empty-state"><p>0</p></div>`;
    return;
  }

  grid.innerHTML = items
    .map((item) => {
      const isSaved = appState.savedIds.includes(item.id);
      return `
        <article class="media-card" data-type="${escapeAttr(item.type)}">
          <div class="media-card__top">
            <span class="media-card__badge">${escapeHtml(item.badge)}</span>
            <span class="media-card__type">${escapeHtml(item.type.toUpperCase())}</span>
          </div>
          <h3 class="media-card__title">${escapeHtml(item.title)}</h3>
          <p class="media-card__desc">${escapeHtml(item.description)}</p>
          <div class="media-card__actions">
            <button type="button" class="btn btn--primary btn--sm" onclick="openVideoModal('${escapeAttr(item.videoId)}', '${escapeAttr(item.title)}')">
              ${escapeHtml(t('watchHere'))}
            </button>
            <button type="button" class="btn btn--ghost btn--sm" onclick="shareContent('${escapeAttr(item.shareUrl)}', '${escapeAttr(item.title)}')">
              ${escapeHtml(t('shareBtn'))}
            </button>
            <button type="button" class="btn btn--ghost btn--sm" onclick="copyContentLink('${escapeAttr(item.shareUrl)}')">
              ${escapeHtml(t('copyLinkBtn'))}
            </button>
            <button type="button" class="btn btn--ghost btn--sm ${isSaved ? 'is-saved' : ''}" onclick="toggleSavedItem('${escapeAttr(item.id)}')">
              ${escapeHtml(isSaved ? t('savedBtn') : t('saveBtn'))}
            </button>
          </div>
        </article>
      `;
    })
    .join('');
}

function renderPlaylists() {
  const grid = document.getElementById('playlistGrid');
  if (!grid) return;

  const items = PLAYLIST_ITEMS.filter((pl) => matchesSearch([pl.title, pl.description, pl.id]));
  if (!items.length) {
    grid.innerHTML = `<div class="empty-state"><p>0</p></div>`;
    return;
  }

  grid.innerHTML = items
    .map(
      (pl) => `
      <article class="playlist-card">
        <span class="playlist-card__tag">PLAYLIST</span>
        <h3 class="playlist-card__title">${escapeHtml(pl.title)}</h3>
        <p class="playlist-card__desc">${escapeHtml(pl.description)}</p>
        <div class="playlist-card__actions">
          <button type="button" class="btn btn--primary btn--sm" onclick="openPlaylistModal('${escapeAttr(pl.id)}', '${escapeAttr(pl.title)}')">
            ${escapeHtml(t('playSeriesHere'))}
          </button>
          <button type="button" class="btn btn--ghost btn--sm" onclick="shareContent('${escapeAttr(pl.shareUrl)}', '${escapeAttr(pl.title)}')">
            ${escapeHtml(t('shareBtn'))}
          </button>
          <button type="button" class="btn btn--ghost btn--sm" onclick="copyContentLink('${escapeAttr(pl.shareUrl)}')">
            ${escapeHtml(t('copyLinkBtn'))}
          </button>
        </div>
      </article>
    `
    )
    .join('');
}

function updateSearchSummary() {
  const summaryEl = document.getElementById('searchSummary');
  if (!summaryEl) return;

  const mCount = MEDIA_ITEMS.filter((i) =>
    matchesSearch([i.title, i.description, i.badge, i.type, i.videoId])
  ).length;
  const pCount = PLAYLIST_ITEMS.filter((p) =>
    matchesSearch([p.title, p.description, p.id])
  ).length;
  const vCount = ELDERS_VOICES.filter((v) => matchesSearch([v.label, v.videoId])).length;

  summaryEl.textContent =
    appState.lang === 'en'
      ? `Library: ${mCount} · Playlists: ${pCount} · Elders Voices: ${vCount}`
      : `Maktaba: ${mCount} · Playlists: ${pCount} · Sauti za Wazee: ${vCount}`;
}

function renderAllSections() {
  renderLibrary();
  renderPlaylists();
  updateEldersPlayerUI();
  updateSearchSummary();
}

function openEmbedModal(embedUrl, title) {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('modalIframe');
  const titleEl = document.getElementById('videoModalTitle');
  if (!modal || !iframe) return;

  appState.lastFocusedElement = document.activeElement;
  if (titleEl) titleEl.textContent = title;
  iframe.src = embedUrl;
  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

function openVideoModal(videoId, title) {
  openEmbedModal(`https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1`, title);
}

function openPlaylistModal(playlistId, title) {
  openEmbedModal(`https://www.youtube-nocookie.com/embed/videoseries?list=${encodeURIComponent(playlistId)}&autoplay=1`, title);
}

function closeVideoModal(force = false) {
  if (appState.isBlocked && !force) {
    showToast(appState.lang === 'en' ? 'Block is ON.' : 'Swichi ya Kuzuia imewashwa (ON).');
    return;
  }
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('modalIframe');
  if (!modal || !iframe) return;

  iframe.src = '';
  modal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  if (appState.lastFocusedElement && typeof appState.lastFocusedElement.focus === 'function') {
    appState.lastFocusedElement.focus();
  }
}

async function shareContent(url, title) {
  if (navigator.share) {
    try {
      await navigator.share({ title, url });
      return;
    } catch (_) {}
  }
  await copyContentLink(url);
}

async function copyContentLink(url) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(url);
      showToast(t('copiedToast'));
      return;
    } catch (_) {}
  }
  showToast(url);
}

function getCurrentTrack() {
  return ELDERS_VOICES[appState.currentTrackIndex] || ELDERS_VOICES[0];
}

function stopTicker() {
  if (tickerIntervalId) {
    clearInterval(tickerIntervalId);
    tickerIntervalId = null;
  }
  lastTickMs = null;
}

function startTicker() {
  stopTicker();
  lastTickMs = Date.now();
  tickerIntervalId = setInterval(() => {
    if (!appState.isPlaying || appState.isFrozen) {
      lastTickMs = Date.now();
      return;
    }
    const now = Date.now();
    const dt = Math.max(0.2, (now - (lastTickMs || now)) / 1000);
    lastTickMs = now;

    const track = getCurrentTrack();
    if (track.audioSrc && !eldersAudio.paused) {
      appState.elapsedSec = eldersAudio.currentTime || 0;
    } else {
      appState.elapsedSec += dt;
      if (appState.elapsedSec >= (track.durationSec || 45)) {
        advanceToNextElderTrack();
        return;
      }
    }
    updateEldersPlayerUI();
  }, 500);
}

function loadElderTrack(index, autoPlay = false, bypassBlock = false) {
  if (appState.isBlocked && !bypassBlock) {
    showToast(appState.lang === 'en' ? 'Block is ON.' : 'Swichi ya Kuzuia imewashwa (ON).');
    return;
  }
  const total = ELDERS_VOICES.length;
  if (!total) return;

  appState.currentTrackIndex = ((index % total) + total) % total;
  appState.elapsedSec = 0;

  eldersAudio.pause();
  eldersAudio.removeAttribute('src');
  const track = getCurrentTrack();
  if (track.audioSrc) {
    eldersAudio.src = track.audioSrc;
    eldersAudio.load();
  }

  saveState();
  updateEldersPlayerUI();
  if (autoPlay && !appState.isFrozen) playElderQueue();
}

function playElderQueue() {
  if (appState.isFrozen) appState.isFrozen = false;
  appState.isPlaying = true;
  const track = getCurrentTrack();
  if (track.audioSrc) {
    if (appState.elapsedSec > 0 && eldersAudio.readyState >= 1) {
      try {
        eldersAudio.currentTime = appState.elapsedSec;
      } catch (_) {}
    }
    eldersAudio.play().catch(() => {});
  }
  startTicker();
  saveState();
  updateEldersPlayerUI();
}

function pauseElderQueue() {
  appState.isPlaying = false;
  eldersAudio.pause();
  stopTicker();
  saveState();
  updateEldersPlayerUI();
}

function advanceToNextElderTrack() {
  if (appState.isFrozen) return;
  const nextIndex = appState.currentTrackIndex + 1;
  if (nextIndex < ELDERS_VOICES.length) {
    loadElderTrack(nextIndex, true, true);
  } else if (appState.loopAll) {
    loadElderTrack(0, true, true);
  } else {
    pauseElderQueue();
  }
}

function prevElderTrack() {
  if (appState.isBlocked) return;
  loadElderTrack(appState.currentTrackIndex - 1, appState.isPlaying, false);
}

function nextElderTrack() {
  if (appState.isBlocked) return;
  loadElderTrack(appState.currentTrackIndex + 1, appState.isPlaying, false);
}

function toggleLoopAll() {
  if (appState.isBlocked) return;
  appState.loopAll = !appState.loopAll;
  saveState();
  updateEldersPlayerUI();
}

function toggleFreezeSwitch() {
  appState.isFrozen = !appState.isFrozen;
  if (appState.isFrozen) {
    appState.isPlaying = false;
    eldersAudio.pause();
    stopTicker();
  }
  saveState();
  updateEldersPlayerUI();
}

function toggleBlockSwitch() {
  appState.isBlocked = !appState.isBlocked;
  saveState();
  updateEldersPlayerUI();
}

function formatSeconds(sec) {
  const clean = Math.max(0, Math.floor(sec || 0));
  const m = String(Math.floor(clean / 60)).padStart(2, '0');
  const s = String(clean % 60).padStart(2, '0');
  return `${m}:${s}`;
}

function updateEldersPlayerUI() {
  const track = getCurrentTrack();
  const titleEl = document.getElementById('elderTrackTitle');
  const posEl = document.getElementById('elderTrackPos');
  const statusEl = document.getElementById('elderPlayerStatus');
  const progressEl = document.getElementById('elderProgressBar');
  const elapsedEl = document.getElementById('elderElapsedText');
  const durationEl = document.getElementById('elderDurationText');
  const loopBtn = document.getElementById('elderLoopBtn');
  const freezeBtn = document.getElementById('elderFreezeBtn');
  const blockBtn = document.getElementById('elderBlockBtn');
  const freezeLabel = document.getElementById('freezeStateLabel');
  const blockLabel = document.getElementById('blockStateLabel');

  if (titleEl) titleEl.textContent = track.label;
  if (posEl) posEl.textContent = `${appState.currentTrackIndex + 1} / ${ELDERS_VOICES.length}`;

  const totalDuration =
    track.audioSrc && Number.isFinite(eldersAudio.duration) && eldersAudio.duration > 0
      ? eldersAudio.duration
      : track.durationSec || 45;

  const currentSec =
    track.audioSrc && !eldersAudio.paused
      ? eldersAudio.currentTime || appState.elapsedSec
      : appState.elapsedSec;

  const pct = Math.min(100, Math.max(0, (currentSec / totalDuration) * 100));
  if (progressEl) {
    progressEl.style.width = `${pct}%`;
    progressEl.setAttribute('aria-valuenow', String(Math.round(pct)));
  }
  if (elapsedEl) elapsedEl.textContent = formatSeconds(currentSec);
  if (durationEl) durationEl.textContent = formatSeconds(totalDuration);

  if (statusEl) {
    if (appState.isFrozen) statusEl.textContent = t('statusFrozen');
    else if (appState.isPlaying) statusEl.textContent = appState.loopAll ? t('statusPlayingLoop') : t('statusPlayingOnce');
    else statusEl.textContent = t('statusPaused');
  }

  if (loopBtn) {
    loopBtn.classList.toggle('is-active', appState.loopAll);
    loopBtn.setAttribute('aria-pressed', String(appState.loopAll));
    loopBtn.textContent = appState.loopAll ? t('loopOn') : t('loopOff');
  }

  if (freezeBtn) {
    freezeBtn.classList.toggle('is-on', appState.isFrozen);
    freezeBtn.setAttribute('aria-checked', String(appState.isFrozen));
    freezeBtn.setAttribute('aria-pressed', String(appState.isFrozen));
  }
  if (freezeLabel) freezeLabel.textContent = appState.isFrozen ? 'ON' : 'OFF';

  if (blockBtn) {
    blockBtn.classList.toggle('is-on', appState.isBlocked);
    blockBtn.setAttribute('aria-checked', String(appState.isBlocked));
    blockBtn.setAttribute('aria-pressed', String(appState.isBlocked));
  }
  if (blockLabel) blockLabel.textContent = appState.isBlocked ? 'ON' : 'OFF';
}

function bindEvents() {
  document.querySelectorAll('[data-lang]').forEach((btn) => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  const searchInput = document.getElementById('globalSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      appState.searchQuery = e.target.value || '';
      renderAllSections();
    });
  }

  document.getElementById('clearSearchBtn')?.addEventListener('click', () => {
    if (searchInput) searchInput.value = '';
    appState.searchQuery = '';
    renderAllSections();
  });

  document.querySelectorAll('[data-library-filter]').forEach((btn) => {
    btn.addEventListener('click', () => setLibraryFilter(btn.dataset.libraryFilter));
  });

  document.getElementById('elderPrevBtn')?.addEventListener('click', prevElderTrack);
  document.getElementById('elderPlayBtn')?.addEventListener('click', playElderQueue);
  document.getElementById('elderPauseBtn')?.addEventListener('click', pauseElderQueue);
  document.getElementById('elderNextBtn')?.addEventListener('click', nextElderTrack);
  document.getElementById('elderLoopBtn')?.addEventListener('click', toggleLoopAll);
  document.getElementById('elderFreezeBtn')?.addEventListener('click', toggleFreezeSwitch);
  document.getElementById('elderBlockBtn')?.addEventListener('click', toggleBlockSwitch);

  eldersAudio.addEventListener('ended', () => advanceToNextElderTrack());

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && appState.isPlaying && !appState.isFrozen && !tickerIntervalId) {
      startTicker();
    }
    updateEldersPlayerUI();
  });

  document.getElementById('closeModalBtn')?.addEventListener('click', () => closeVideoModal(false));
  document.getElementById('videoModal')?.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'videoModal') closeVideoModal(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const modal = document.getElementById('videoModal');
      if (modal && !modal.classList.contains('hidden')) closeVideoModal(false);
    }
  });
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeAttr(str) {
  return escapeHtml(str).replace(/'/g, '&#39;');
}

document.addEventListener('DOMContentLoaded', () => {
  loadSavedState();
  document.querySelectorAll('[data-lang]').forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.lang === appState.lang);
  });
  applyLanguageLabels();
  bindEvents();
  setLibraryFilter(appState.libraryFilter);
  loadElderTrack(appState.currentTrackIndex, false, true);
  renderAllSections();
});
