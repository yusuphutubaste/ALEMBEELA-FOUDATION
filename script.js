/* ==========================================================================
   ALEMBEELA FOUNDATION — COMPLETE SCRIPT (SW/EN, PLAYER, FREEZE & BLOCK)
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
    heroDesc:
      'Hifadhi ya historia, mila, mafunzo, na sauti za wazee wa jamii ya Babembe. Tazama mfululizo kamili hapa au hifadhi vipande unavyovipenda.',
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
    frozenToast: 'Imegandishwa: Auto-next imesimamishwa kwa muda.',
    unfrozenToast: 'Kugandisha kumeondolewa.',
    blockedToast: 'Video imezuiwa kwenye mzunguko wa kucheza.',
    unblockedToast: 'Kizuizi kimeondolewa.',
    emptySaved: 'Bado haujahifadhi video yoyote kwenye Vipendwa.',
    emptySearch: 'Hakuna matokeo yaliyopatikana kwa utafutaji wako.',
    footerCopy: 'Urithi, mafunzo, na sauti za jamii — GitHub Pages.',
    footerLib: 'Maktaba',
    footerPl: 'Playlists',
    closeBtn: '✕ Funga'
  },
  en: {
    siteSubtitle: 'Úmbo Cha Babembe & Community Heritage',
    secondChannelPrefix: 'Also watch:',
    heroDesc:
      'Preserving the history, traditions, teachings, and elders’ voices of the Babembe community. Watch the full series here or save your favorite episodes.',
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
    frozenToast: 'Frozen: Auto-next paused.',
    unfrozenToast: 'Unfrozen: Auto-next resumed.',
    blockedToast: 'Item blocked from playback queue.',
    unblockedToast: 'Item unblocked.',
    emptySaved: 'You have not saved any items yet.',
    emptySearch: 'No matching items found.',
    footerCopy: 'Heritage, teachings, and community voices — GitHub Pages.',
    footerLib: 'Library',
    footerPl: 'Playlists',
    closeBtn: '✕ Close'
  }
};

/* ==========================================================================
   MEDIA LIBRARY (Ongeza video au Shorts mpya hapa chini)
   ========================================================================== */
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
    badge: 'Sehemu ya Tatu (3)',
    title: 'ÚMBO CHA BABEMBE: Sehemu ya Tatu (3) – @ALEMBEELAWAIDI',
    description: 'Úmbo Cha Babembe — Sehemu ya Tatu (3) & Sauti za Wazee.',
    shareUrl: 'https://youtu.be'
  }
];

/* ==========================================================================
   PLAYLISTS (Mifululizo ya Channel)
   ========================================================================== */
const PLAYLISTS = [
  {
    id: 'pl-umbo-babembe',
    badge: 'Sauti za Wazee',
    title: 'Úmbo Cha Babembe — Mfululizo Kamili',
    description: 'Sehemu zote za historia, asili, na mafunzo ya jamii ya Babembe.',
    itemIds: ['vid-chCvVUD1FPo', 'vid-xsxfbtJnrzg', 'vid-YPPOyvxJ-Wk'],
    youtubeUrl: 'https://youtube.com'
  }
];

/* ==========================================================================
   APPLICATION STATE
   ========================================================================== */
let state = {
  lang: 'sw',
  filter: 'all',
  searchQuery: '',
  savedIds: [],
  blockedIds: [],
  currentIndex: -1,
  isPlaying: false,
  loopAll: SITE_CONFIG.defaultLoopAll,
  isFrozen: false
};

let ytPlayer = null;
let ytApiReady = false;
let pendingVideoId = null;
let toastTimer = null;

function loadState() {
  try {
    const raw = localStorage.getItem(SITE_CONFIG.storageKey);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    state = {
      ...state,
      lang: parsed.lang === 'en' ? 'en' : 'sw',
      savedIds: Array.isArray(parsed.savedIds) ? parsed.savedIds : [],
      blockedIds: Array.isArray(parsed.blockedIds) ? parsed.blockedIds : [],
      loopAll: typeof parsed.loopAll === 'boolean' ? parsed.loopAll : SITE_CONFIG.defaultLoopAll
    };
  } catch (err) {
    console.warn('Could not load saved state:', err);
  }
}

function saveState() {
  try {
    localStorage.setItem(
      SITE_CONFIG.storageKey,
      JSON.stringify({
        lang: state.lang,
        savedIds: state.savedIds,
        blockedIds: state.blockedIds,
        loopAll: state.loopAll
      })
    );
  } catch (err) {
    console.warn('Could not save state:', err);
  }
}

function t(key) {
  return (I18N[state.lang] && I18N[state.lang][key]) || I18N.sw[key] || key;
}

function showToast(message) {
  const banner = document.getElementById('toastBanner');
  if (!banner) return;
  banner.textContent = message;
  banner.classList.remove('hidden');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    banner.classList.add('hidden');
  }, 3000);
}

/* ==========================================================================
   YOUTUBE IFRAME PLAYER SETUP
   ========================================================================== */
window.onYouTubeIframeAPIReady = function () {
  ytApiReady = true;
  if (pendingVideoId) {
    const vid = pendingVideoId;
    pendingVideoId = null;
    mountOrLoadYouTubeVideo(vid);
  }
};

function mountOrLoadYouTubeVideo(videoId) {
  if (!ytApiReady || !window.YT || !window.YT.Player) {
    pendingVideoId = videoId;
    return;
  }

  if (ytPlayer && typeof ytPlayer.loadVideoById === 'function') {
    ytPlayer.loadVideoById(videoId);
    return;
  }

  ytPlayer = new YT.Player('ytPlayerMount', {
    videoId: videoId,
    playerVars: {
      autoplay: 1,
      rel: 0,
      modestbranding: 1,
      playsinline: 1
    },
    events: {
      onStateChange: handlePlayerStateChange,
      onError: () => {
        if (!state.isFrozen) playNext(true);
      }
    }
  });
}

function handlePlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    state.isPlaying = true;
    updateControlBar();
  } else if (event.data === YT.PlayerState.PAUSED) {
    state.isPlaying = false;
    updateControlBar();
  } else if (event.data === YT.PlayerState.ENDED) {
    state.isPlaying = false;
    if (!state.isFrozen) {
      playNext(true);
    } else {
      updateControlBar();
    }
  }
}

/* ==========================================================================
   PLAYBACK CONTROLS
   ========================================================================== */
function playItemByIndex(index) {
  if (index < 0 || index >= MEDIA_ITEMS.length) return;
  const item = MEDIA_ITEMS[index];

  if (state.blockedIds.includes(item.id)) {
    state.blockedIds = state.blockedIds.filter((id) => id !== item.id);
    saveState();
  }

  state.currentIndex = index;
  state.isPlaying = true;

  const stage = document.getElementById('activePlayerSection');
  document.getElementById('stageBadge').textContent = item.badge;
  document.getElementById('stageTitle').textContent = item.title;
  document.getElementById('stageDesc').textContent = item.description;
  stage.classList.remove('hidden');

  updateStageButtons(item);
  mountOrLoadYouTubeVideo(item.videoId);
  renderMediaGrid();
  updateControlBar();

  stage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function playNext(autoTriggered = false) {
  if (MEDIA_ITEMS.length === 0) return;

  for (let step = 1; step <= MEDIA_ITEMS.length; step++) {
    const nextIdx = state.currentIndex + step;
    if (nextIdx >= MEDIA_ITEMS.length) {
      if (!state.loopAll) {
        state.isPlaying = false;
        updateControlBar();
        return;
      }
