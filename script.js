/* ==========================================================================
   ALEMBEELA FOUNDATION — COMPLETE UNIFIED SCRIPT (GITHUB PAGES READY)
   ========================================================================== */

const SITE_CONFIG = {
  primaryChannelUrl: 'https://www.youtube.com/@AlembeelaFoundation',
  secondaryChannelUrl: 'https://www.youtube.com/@Alembeelawaidi',
  storageKey: 'alembeela_foundation_state_v1',
  defaultLoopAll: true
};

// 1. VIDEOS & SHORTS
const MEDIA_ITEMS = [
  {
    id: 'vid-chCvVUD1FPo',
    videoId: 'chCvVUD1FPo',
    type: 'video',
    topic: 'Úmbo & Utamaduni',
    badge: 'Sehemu ya Kwanza (1)',
    title: 'ÚMBO CHA BABEMBE: Sehemu ya Kwanza (1) – @ALEMBEELAWAIDI',
    description: 'Kipindi cha kwanza cha mfululizo wa Úmbo Cha Babembe kutoka Alembeela Foundation.',
    shareUrl: 'https://youtu.be/chCvVUD1FPo'
  },
  {
    id: 'vid-xsxfbtJnrzg',
    videoId: 'xsxfbtJnrzg',
    type: 'video',
    topic: 'Úmbo & Utamaduni',
    badge: 'Sehemu ya Pili (2)',
    title: 'UMBO CHA BABEMBE SEHEMU YA PILI 2 @Alembeela wa idi APRIL 18TH, 2026',
    description: 'Sehemu ya pili ya mafunzo ya Úmbo cha Babembe yenye mpangilio wa hatua za jamii.',
    shareUrl: 'https://youtu.be/xsxfbtJnrzg'
  },
  {
    id: 'vid-YPPOyvxJ-Wk',
    videoId: 'YPPOyvxJ-Wk',
    type: 'video',
    topic: 'Úmbo & Utamaduni',
    badge: 'Sehemu ya Kwanza (Toleo)',
    title: 'Úmbo cha Babembe: Sehemu ya Kwanza (1) – @ALEMBEELAWAIDI',
    description: 'Toleo la kipindi cha kwanza cha Úmbo cha Babembe kwa ajili ya kujifunza na kushirikisha.',
    shareUrl: 'https://youtu.be/YPPOyvxJ-Wk'
  },
  {
    id: 'short-HhJm-izUZk4',
    videoId: 'HhJm-izUZk4',
    type: 'short',
    topic: 'Úmbo & Utamaduni',
    badge: 'Short · 0:11',
    title: 'ÚMBO #AlembeelaFoundation#Alembeelawaidi . full video ipo youtube',
    description: 'Dondoo fupi la sekunde 11 linaloelekeza kwenye mafunzo kamili ya Úmbo.',
    shareUrl: 'https://youtube.com/shorts/HhJm-izUZk4'
  },
  {
    id: 'short-jCPtT8ZPsoE',
    videoId: 'jCPtT8ZPsoE',
    type: 'short',
    topic: 'Úmbo & Utamaduni',
    badge: 'Short · 0:08',
    title: 'ÚMBO #AlembeelaFoundation#Alembeelawaidi . full video ipo youtube',
    description: 'Dondoo fupi la sekunde 8 la utambulisho wa Úmbo na hekima ya jamii.',
    shareUrl: 'https://youtube.com/shorts/jCPtT8ZPsoE'
  },
  {
    id: 'short-VklA0Aw2TLc',
    videoId: 'VklA0Aw2TLc',
    type: 'short',
    topic: 'Úmbo & Utamaduni',
    badge: 'Short · 0:11',
    title: 'ÚMBO #AlembeelaFoundation#Alembeelawaidi . full video ipo youtube',
    description: 'Dondoo fupi la sekunde 11 lenye vipengele vya mafunzo ya jamii ya Babembe.',
    shareUrl: 'https://youtube.com/shorts/VklA0Aw2TLc'
  }
];

// 2. PLAYLISTS (Mfululizo ndani ya tovuti)
const PLAYLIST_ITEMS = [
  {
    id: 'PLns5POVtyOJszsYfQkjrf7YD80ycoj4IG',
    title: 'Playlist 01 — Úmbo Cha Babembe',
    description: 'Mkusanyiko wa vipindi vinavyocheza mfululizo ndani ya tovuti.',
    shareUrl: 'https://youtube.com/playlist?list=PLns5POVtyOJszsYfQkjrf7YD80ycoj4IG'
  },
  {
    id: 'PLcI8Km4aCNOM',
    title: 'Playlist 02 — Alembeela Foundation',
    description: 'Orodha ya ziada ya video na mafunzo ya jamii.',
    shareUrl: 'https://youtube.com/playlist?list=PLcI8Km4aCNOM'
  }
];

// 3. SAUTI ZA WAZEE (Vipande 3, bila majina ya kutunga)
const ELDERS_VOICES = [
  {
    id: 'kipande-01',
    label: 'Kipande 01',
    videoId: 'chCvVUD1FPo',
    shareUrl: 'https://youtu.be/chCvVUD1FPo',
    audioSrc: '',
    durationSec: 45
  },
  {
    id: 'kipande-02',
    label: 'Kipande 02',
    videoId: 'xsxfbtJnrzg',
    shareUrl: 'https://youtu.be/xsxfbtJnrzg',
    audioSrc: '',
    durationSec: 45
  },
  {
    id: 'kipande-03',
    label: 'Kipande 03',
    videoId: 'YPPOyvxJ-Wk',
    shareUrl: 'https://youtu.be/YPPOyvxJ-Wk',
    audioSrc: '',
    durationSec: 45
  }
];

const appState = {
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

function loadSavedState() {
  try {
    const raw = localStorage.getItem(SITE_CONFIG.storageKey);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed.savedIds)) appState.savedIds = parsed.savedIds;
    if (typeof parsed.libraryFilter === 'string') appState.libraryFilter = parsed.libraryFilter;
    if (typeof parsed.currentTrackIndex === 'number') {
      appState.currentTrackIndex = parsed.currentTrackIndex;
    }
    if (typeof parsed.loopAll === 'boolean') appState.loopAll = parsed.loopAll;
    if (typeof parsed.isFrozen === 'boolean') appState.isFrozen = parsed.isFrozen;
    if (typeof parsed.isBlocked === 'boolean') appState.isBlocked = parsed.isBlocked;
    if (typeof parsed.elapsedSec === 'number') appState.elapsedSec = parsed.elapsedSec;
  } catch (_) {}
}

function saveState() {
  try {
    localStorage.setItem(
      SITE_CONFIG.storageKey,
      JSON.stringify({
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

function showToast(message) {
  const el = document.getElementById('toastBanner');
  if (!el) return;
  el.textContent = message;
  el.classList.remove('hidden');
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => el.classList.add('hidden'), 3200);
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
  if (idx >= 0) {
    appState.savedIds.splice(idx, 1);
    showToast('Imeondolewa kwenye Vipendwa.');
  } else {
    appState.savedIds.push(itemId);
    showToast('Imehifadhiwa kwenye Vipendwa.');
  }
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

    const searchMatch = matchesSearch([
      item.title,
      item.description,
      item.badge,
      item.topic,
      item.type,
      item.videoId
    ]);

    return typeMatch && searchMatch;
  });

  if (!items.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <p>Hakuna maudhui ya Library yanayolingana na chaguo au utafutaji wako wa sasa.</p>
        <button type="button" class="btn btn--secondary" onclick="resetSearchAndFilters()">
          Onyesha Yote
        </button>
      </div>
    `;
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
            <button
              type="button"
              class="btn btn--primary btn--sm"
              onclick="openVideoModal('${escapeAttr(item.videoId)}', '${escapeAttr(item.title)}')"
            >
              Tazama Hapa
            </button>
            <button
              type="button"
              class="btn btn--ghost btn--sm"
              onclick="shareContent('${escapeAttr(item.shareUrl)}', '${escapeAttr(item.title)}')"
            >
              Share
            </button>
            <button
              type="button"
              class="btn btn--ghost btn--sm"
              onclick="copyContentLink('${escapeAttr(item.shareUrl)}')"
            >
              Nakili Link
            </button>
            <button
              type="button"
              class="btn btn--ghost btn--sm ${isSaved ? 'is-saved' : ''}"
              onclick="toggleSavedItem('${escapeAttr(item.id)}')"
            >
              ${isSaved ? '★ Imependezwa' : '☆ Hifadhi'}
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

  const items = PLAYLIST_ITEMS.filter((pl) =>
    matchesSearch([pl.title, pl.description, pl.id])
  );

  if (!items.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <p>Hakuna Playlist inayolingana na utafutaji wa sasa.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = items
    .map(
      (pl) => `
      <article class="playlist-card">
        <span class="playlist-card__tag">PLAYLIST · MFULULIZO</span>
        <h3 class="playlist-card__title">${escapeHtml(pl.title)}</h3>
        <p class="playlist-card__desc">${escapeHtml(pl.description)}</p>
        <div class="playlist-card__actions">
          <button
            type="button"
            class="btn btn--primary btn--sm"
            onclick="openPlaylistModal('${escapeAttr(pl.id)}', '${escapeAttr(pl.title)}')"
          >
            Cheza Mfululizo Hapa
          </button>
          <button
            type="button"
            class="btn btn--ghost btn--sm"
            onclick="shareContent('${escapeAttr(pl.shareUrl)}', '${escapeAttr(pl.title)}')"
          >
            Share
          </button>
          <button
            type="button"
            class="btn btn--ghost btn--sm"
            onclick="copyContentLink('${escapeAttr(pl.shareUrl)}')"
          >
            Nakili Link
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

  const q = appState.searchQuery.trim();
  const matchingMedia = MEDIA_ITEMS.filter((item) =>
    matchesSearch([item.title, item.description, item.badge, item.topic, item.type, item.videoId])
  ).length;
  const matchingPlaylists = PLAYLIST_ITEMS.filter((pl) =>
    matchesSearch([pl.title, pl.description, pl.id])
  ).length;
  const matchingVoices = ELDERS_VOICES.filter((v) =>
    matchesSearch([v.label, v.videoId])
  ).length;

  if (!q) {
    summaryEl.textContent = `Inaonyesha maudhui yote (${MEDIA_ITEMS.length} Library, ${PLAYLIST_ITEMS.length} Playlists, ${ELDERS_VOICES.length} Sauti za Wazee).`;
    return;
  }

  summaryEl.textContent = `Utafutaji "${q}": ${matchingMedia} kwenye Library, ${matchingPlaylists} kwenye Playlists, ${matchingVoices} kwenye Sauti za Wazee.`;
}

function resetSearchAndFilters() {
  appState.searchQuery = '';
  const input = document.getElementById('globalSearchInput');
  if (input) input.value = '';
  setLibraryFilter('all');
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
  const src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1`;
  openEmbedModal(src, title);
}

function openPlaylistModal(playlistId, title) {
  const src = `https://www.youtube-nocookie.com/embed/videoseries?list=${encodeURIComponent(playlistId)}&autoplay=1`;
  openEmbedModal(src, title);
}

function closeVideoModal(force = false) {
  if (appState.isBlocked && !force) {
    showToast('Kuzuia kumewashwa (ON). Zima swichi ya "Kuzuia" kwanza ili kufunga.');
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
      showToast('Kiungo kimenakiliwa.');
      return;
    } catch (_) {}
  }
  showToast('Kiungo: ' + url);
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
    const deltaSec = Math.max(0.2, (now - (lastTickMs || now)) / 1000);
    lastTickMs = now;

    const track = getCurrentTrack();
    if (track.audioSrc && !eldersAudio.paused) {
      appState.elapsedSec = eldersAudio.currentTime || 0;
    } else {
      appState.elapsedSec += deltaSec;
      const duration = track.durationSec || 45;
      if (appState.elapsedSec >= duration) {
        advanceToNextElderTrack();
        return;
      }
    }

    updateEldersPlayerUI();
  }, 500);
}

function loadElderTrack(index, autoPlay = false, bypassBlock = false) {
  if (appState.isBlocked && !bypassBlock) {
    showToast('Swichi ya "Kuzuia" imewashwa (ON). Zima kwanza ili kubadili kipande.');
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

  if (autoPlay && !appState.isFrozen) {
    playElderQueue();
  }
}

function playElderQueue() {
  if (appState.isFrozen) {
    appState.isFrozen = false;
    showToast('Kugandisha kumezimwa (OFF). Kucheza kunaendelea.');
  }

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
  if (appState.isBlocked) {
    showToast('Swichi ya "Kuzuia" imewashwa (ON).');
    return;
  }
  loadElderTrack(appState.currentTrackIndex - 1, appState.isPlaying, false);
}

function nextElderTrack() {
  if (appState.isBlocked) {
    showToast('Swichi ya "Kuzuia" imewashwa (ON).');
    return;
  }
  loadElderTrack(appState.currentTrackIndex + 1, appState.isPlaying, false);
}

function toggleLoopAll() {
  if (appState.isBlocked) {
    showToast('Swichi ya "Kuzuia" imewashwa (ON).');
    return;
  }
  appState.loopAll = !appState.loopAll;
  showToast(
    appState.loopAll
      ? 'Loop Nzima imewashwa (IKIFIKA MWISHO INARUDIA MWANZO).'
      : 'Loop Nzima imezimwa.'
  );
  saveState();
  updateEldersPlayerUI();
}

function toggleFreezeSwitch() {
  appState.isFrozen = !appState.isFrozen;
  if (appState.isFrozen) {
    appState.isPlaying = false;
    eldersAudio.pause();
    stopTicker();
    showToast('Kugandisha: ON (Hali imegandishwa palepale).');
  } else {
    showToast('Kugandisha: OFF.');
  }
  saveState();
  updateEldersPlayerUI();
}

function toggleBlockSwitch() {
  appState.isBlocked = !appState.isBlocked;
  showToast(
    appState.isBlocked
      ? 'Kuzuia: ON (Mabadiliko ya haraka na kufunga modal vimezuiwa).'
      : 'Kuzuia: OFF.'
  );
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

  const isMatchedBySearch = matchesSearch([track.label, track.videoId]);
  if (titleEl) {
    titleEl.textContent = isMatchedBySearch
      ? track.label
      : `${track.label} (Haiko kwenye utafutaji wa sasa)`;
  }

  if (posEl) {
    posEl.textContent = `${appState.currentTrackIndex + 1} / ${ELDERS_VOICES.length}`;
  }

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
    if (appState.isFrozen) {
      statusEl.textContent = 'IMEGANDISHWA';
    } else if (appState.isPlaying) {
      statusEl.textContent = appState.loopAll ? 'INACHEZA · AUTO-NEXT & LOOP' : 'INACHEZA · AUTO-NEXT';
    } else {
      statusEl.textContent = 'IMESIMAMA';
    }
  }

  if (loopBtn) {
    loopBtn.classList.toggle('is-active', appState.loopAll);
    loopBtn.setAttribute('aria-pressed', String(appState.loopAll));
    loopBtn.textContent = appState.loopAll
      ? '🔁 Loop Nzima: Imewashwa'
      : '🔁 Loop Nzima: Imezimwa';
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
  const searchInput = document.getElementById('globalSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      appState.searchQuery = e.target.value || '';
      renderAllSections();
    });
  }

  const clearSearchBtn = document.getElementById('clearSearchBtn');
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      appState.searchQuery = '';
      renderAllSections();
    });
  }

  document.querySelectorAll('[data-library-filter]').forEach((btn) => {
    btn.addEventListener('click', () => {
      setLibraryFilter(btn.dataset.libraryFilter);
    });
  });

  document.getElementById('elderPrevBtn')?.addEventListener('click', prevElderTrack);
  document.getElementById('elderPlayBtn')?.addEventListener('click', playElderQueue);
  document.getElementById('elderPauseBtn')?.addEventListener('click', pauseElderQueue);
  document.getElementById('elderNextBtn')?.addEventListener('click', nextElderTrack);
  document.getElementById('elderLoopBtn')?.addEventListener('click', toggleLoopAll);
  document.getElementById('elderFreezeBtn')?.addEventListener('click', toggleFreezeSwitch);
  document.getElementById('elderBlockBtn')?.addEventListener('click', toggleBlockSwitch);

  eldersAudio.addEventListener('ended', () => {
    advanceToNextElderTrack();
  });

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && appState.isPlaying && !appState.isFrozen) {
      if (!tickerIntervalId) startTicker();
    }
    updateEldersPlayerUI();
  });

  document.getElementById('closeModalBtn')?.addEventListener('click', () => closeVideoModal(false));
  document.getElementById('videoModal')?.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'videoModal') {
      closeVideoModal(false);
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const modal = document.getElementById('videoModal');
      if (modal && !modal.classList.contains('hidden')) {
        closeVideoModal(false);
      }
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
  bindEvents();
  setLibraryFilter(appState.libraryFilter);
  loadElderTrack(appState.currentTrackIndex, false, true);
  renderAllSections();
});
