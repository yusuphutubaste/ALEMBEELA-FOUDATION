/* ==========================================================================
   ALEMBEELA FOUNDATION — COMPLETE SCRIPT (BEM / SW / EN + THEATER PLAYER)
   ========================================================================== */

const SITE_CONFIG = {
  mainChannelUrl: 'https://youtube.com',
  secondaryChannelUrl: 'https://www.youtube.com/@Alembeelawaidi',
  storageKey: 'alembeela_foundation_state_v3',
  defaultLoopAll: true
};

const I18N = {
  bem: {
    navSeries: 'Úmbo Cha Babembe',
    navMission: 'Maboko Metu',
    navArchive: 'Maktaba',
    navPhotos: 'Bipicha',
    heroKicker: 'URITHI WA BABEMBE',
    heroHeading: 'Kulinda Asili ya Milango, Mila, na Malaka ma Bakulu',
    heroLead:
      'Alembeela Foundation elinda kumbukumbu za milango, masomo ma Kibembe, na kuelimisha bantu ba luhuka lwa lelo na lwa mbele.',
    heroWatchBtn: '▶ Lola Úmbo Cha Babembe',
    seriesEyebrow: 'MFULULIZO WA KIBEMBE',
    episodesListTitle: 'Sehemu za Mfululizo',
    pillarsEyebrow: 'KAZI YA FOUNDATION',
    pillarsHeading: 'Nguzo Isatu za Alembeela Foundation',
    pillar1Title: 'Asili na Milango ya Bantu',
    pillar1Desc:
      'Kulinda historia ya milango, mazina ma asili, na uhusiano wa bisekelele ili bana ba Babembe bamenye chimbuko labo.',
    pillar2Title: 'Mila, Desturi na Kibembe',
    pillar2Desc:
      'Kurekodi hekima za bakulu, methali, na masomo ma kitamaduni mayotangazwa mu ludimi lwa Kibembe.',
    pillar3Title: 'Kuelimisha Bantu',
    pillar3Desc:
      'Kujenga umoja, mwenendo mwema, na uelewa wa mambo ma jamii mukati na hanze ya nchi.',
    archiveEyebrow: 'KUMBUKUMBU ZOSE',
    libraryHeading: 'Maktaba ya Video & Malaka',
    searchPlaceholder: 'Tafuta: Úmbo, Sehemu ya 1, Asili, Kibembe...',
    clearBtn: 'Futa',
    filterAll: 'Zose',
    savedTab: 'Bipendwa',
    statusReady: 'TAYARI KUCHEZA',
    statusPlaying: 'INACHEZA · AUTO-NEXT',
    statusPaused: 'IMESIMAMA',
    statusFrozen: 'IMEGANDISHWA',
    loopOn: '🔁 Loop Nzima: ON',
    loopOff: '🔁 Loop Nzima: OFF',
    prevBtn: '⏮ Nyuma',
    playBtn: '▶ Cheza',
    pauseBtn: '⏸ Simamisha',
    nextBtn: 'Mbele ⏭',
    saveBtn: '☆ Hifadhi',
    savedBtn: '★ Imependezwa',
    shareBtn: 'Share',
    watchHere: 'Lola Hano',
    freezeLabel: 'Kugandisha',
    blockLabel: 'Kuzuia',
    copiedToast: 'Kiungo kimenakiliwa.',
    frozenToast: 'Imegandishwa: Auto-next imesimamishwa.',
    unfrozenToast: 'Kugandisha kumeondolewa.',
    blockedToast: 'Video imezuiwa kwenye mzunguko.',
    unblockedToast: 'Kizuizi kimeondolewa.',
    emptySaved: 'Haujahifadhi video yoyote kwenye Bipendwa.',
    emptySearch: 'Hakuna matokeo yaliyopatikana.',
    footerCopy: 'Kulinda asili ya milango, mila, na malaka ma bantu ba Babembe.'
  },
  sw: {
    navSeries: 'Úmbo Cha Babembe',
    navMission: 'Dhamira Yetu',
    navArchive: 'Maktaba',
    navPhotos: 'Picha',
    heroKicker: 'URITHI WA JAMII YA BABEMBE',
    heroHeading: 'Kuhifadhi Asili ya Familia, Mila, na Sauti za Wazee',
    heroLead:
      'Alembeela Foundation inalinda kumbukumbu za vizazi, mafundisho ya Kibembe, na uelimishaji wa jamii kwa kizazi cha sasa na kijacho.',
    heroWatchBtn: '▶ Tazama Úmbo Cha Babembe',
    seriesEyebrow: 'MFULULIZO MAALUM (KIBEMBE)',
    episodesListTitle: 'Sehemu za Mfululizo',
    pillarsEyebrow: 'KAZI YA TAASISI',
    pillarsHeading: 'Nguzo Tatu za Alembeela Foundation',
    pillar1Title: 'Asili na Nasaba ya Familia',
    pillar1Desc:
      'Kuhifadhi historia ya koo, majina ya asili, na uhusiano wa vizazi ili vijana wa Babembe wajue chimbuko lao.',
    pillar2Title: 'Mila, Desturi na Kibembe',
    pillar2Desc:
      'Kurekodi hekima za wazee, methali, na mafundisho ya kitamaduni yanayowasilishwa kwa ufasaha wa lugha ya Kibembe.',
    pillar3Title: 'Uelimishaji wa Jamii',
    pillar3Desc:
      'Kujenga mshikamano, maadili mema, na uelewa mpana wa masuala ya kijamii ndani na nje ya nchi.',
    archiveEyebrow: 'KUMBUKUMBU ZOTE',
    libraryHeading: 'Maktaba ya Video & Sauti',
    searchPlaceholder: 'Tafuta: Úmbo, Sehemu ya 1, Asili, Kibembe...',
    clearBtn: 'Futa',
    filterAll: 'Zote',
    savedTab: 'Vipendwa',
    statusReady: 'TAYARI KUCHEZA',
    statusPlaying: 'INACHEZA · AUTO-NEXT',
    statusPaused: 'IMESIMAMA',
    statusFrozen: 'IMEGANDISHWA',
    loopOn: '🔁 Loop Nzima: ON',
    loopOff: '🔁 Loop Nzima: OFF',
    prevBtn: '⏮ Nyuma',
    playBtn: '▶ Cheza',
    pauseBtn: '⏸ Simamisha',
    nextBtn: 'Mbele ⏭',
    saveBtn: '☆ Hifadhi',
    savedBtn: '★ Imependezwa',
    shareBtn: 'Share',
    watchHere: 'Tazama Hapa',
    freezeLabel: 'Kugandisha',
    blockLabel: 'Kuzuia',
    copiedToast: 'Kiungo kimenakiliwa.',
    frozenToast: 'Imegandishwa: Auto-next imesimamishwa.',
    unfrozenToast: 'Kugandisha kumeondolewa.',
    blockedToast: 'Video imezuiwa kwenye mzunguko.',
    unblockedToast: 'Kizuizi kimeondolewa.',
    emptySaved: 'Bado haujahifadhi video yoyote kwenye Vipendwa.',
    emptySearch: 'Hakuna matokeo yaliyopatikana kwa utafutaji wako.',
    footerCopy: 'Kuhifadhi asili ya familia, mila, na sauti za jamii ya Babembe.'
  },
  en: {
    navSeries: 'Úmbo Cha Babembe',
    navMission: 'Our Mission',
    navArchive: 'Archive',
    navPhotos: 'Photos',
    heroKicker: 'BABEMBE COMMUNITY HERITAGE',
    heroHeading: 'Preserving Family Lineage, Traditions, and Elders’ Voices',
    heroLead:
      'Alembeela Foundation safeguards generational history, teachings in Kibembe, and community awareness for present and future generations.',
    heroWatchBtn: '▶ Watch Úmbo Cha Babembe',
    seriesEyebrow: 'FEATURED SERIES (KIBEMBE)',
    episodesListTitle: 'Series Episodes',
    pillarsEyebrow: 'FOUNDATION WORK',
    pillarsHeading: 'Three Pillars of Alembeela Foundation',
    pillar1Title: 'Family Lineage & Origins',
    pillar1Desc:
      'Documenting clan histories, ancestral names, and generational ties so Babembe youth know their roots.',
    pillar2Title: 'Traditions & Kibembe Language',
    pillar2Desc:
      'Recording elders’ wisdom, proverbs, and cultural teachings presented fluently in Kibembe.',
    pillar3Title: 'Community Awareness',
    pillar3Desc:
      'Building unity, shared values, and social awareness across communities at home and abroad.',
    archiveEyebrow: 'COMPLETE ARCHIVE',
    libraryHeading: 'Video & Audio Library',
    searchPlaceholder: 'Search: Úmbo, Episode 1, Lineage, Kibembe...',
    clearBtn: 'Clear',
    filterAll: 'All',
    savedTab: 'Saved',
    statusReady: 'READY TO PLAY',
    statusPlaying: 'PLAYING · AUTO-NEXT',
    statusPaused: 'PAUSED',
    statusFrozen: 'FROZEN',
    loopOn: '🔁 Full Loop: ON',
    loopOff: '🔁 Full Loop: OFF',
    prevBtn: '⏮ Prev',
    playBtn: '▶ Play',
    pauseBtn: '⏸ Pause',
    nextBtn: 'Next ⏭',
    saveBtn: '☆ Save',
    savedBtn: '★ Saved',
    shareBtn: 'Share',
    watchHere: 'Watch Here',
    freezeLabel: 'Freeze',
    blockLabel: 'Block',
    copiedToast: 'Link copied to clipboard.',
    frozenToast: 'Frozen: Auto-next paused.',
    unfrozenToast: 'Unfrozen: Auto-next resumed.',
    blockedToast: 'Item blocked from queue.',
    unblockedToast: 'Item unblocked.',
    emptySaved: 'You have not saved any items yet.',
    emptySearch: 'No matching items found.',
    footerCopy: 'Preserving family lineage, traditions, and voices of the Babembe community.'
  }
};

/* ==========================================================================
   MEDIA LIBRARY (Ongeza video mpya za @AlembeelaFoundation / @Alembeelawaidi)
   ========================================================================== */
const MEDIA_ITEMS = [
  {
    id: 'vid-chCvVUD1FPo',
    videoId: 'chCvVUD1FPo',
    type: 'video',
    isSeries: true,
    badge: 'Sehemu ya Kwanza (1)',
    title: 'ÚMBO CHA BABEMBE: Sehemu ya Kwanza (1) – @ALEMBEELAWAIDI',
    description:
      'Mafundisho ya asili, historia, na chimbuko la jamii ya Babembe yakisimuliwa kwa lugha ya Kibembe.',
    shareUrl: 'https://youtu.be/chCvVUD1FPo'
  },
  {
    id: 'vid-xsxfbtJnrzg',
    videoId: 'xsxfbtJnrzg',
    type: 'video',
    isSeries: true,
    badge: 'Sehemu ya Pili (2)',
    title: 'UMBO CHA BABEMBE SEHEMU YA PILI 2 @Alembeela wa idi APRIL 18TH, 2026',
    description:
      'Mwendelezo wa mafundisho ya nasaba ya familia, mila, na maadili ya jamii ya Babembe.',
    shareUrl: 'https://youtu.be/xsxfbtJnrzg'
  }
];

/* ==========================================================================
   STATE MANAGEMENT
   ========================================================================== */
let state = {
  lang: 'sw',
  filter: 'all',
  searchQuery: '',
  savedIds: [],
  blockedIds: [],
  currentIndex: 0,
  isPlaying: false,
  hasStarted: false,
  loopAll: SITE_CONFIG.defaultLoopAll,
  isFrozen: false
};

let ytPlayer = null;
let ytApiReady = false;
let toastTimer = null;

function loadState() {
  try {
    const raw = localStorage.getItem(SITE_CONFIG.storageKey);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    state = {
      ...state,
      lang: ['bem', 'sw', 'en'].includes(parsed.lang) ? parsed.lang : 'sw',
      savedIds: Array.isArray(parsed.savedIds) ? parsed.savedIds : [],
      blockedIds: Array.isArray(parsed.blockedIds) ? parsed.blockedIds : [],
      loopAll: typeof parsed.loopAll === 'boolean' ? parsed.loopAll : SITE_CONFIG.defaultLoopAll
    };
  } catch (err) {
    console.warn('State load error:', err);
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
    console.warn('State save error:', err);
  }
}

function t(key) {
  return (I18N[state.lang] && I18N[state.lang][key]) || I18N.sw[key] || key;
}

function showToast(msg) {
  const banner = document.getElementById('toastBanner');
  if (!banner) return;
  banner.textContent = msg;
