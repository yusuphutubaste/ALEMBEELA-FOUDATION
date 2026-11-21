/* ==========================================================================
   ALEMBEELA FOUNDATION — COMPLETE SCRIPT (@Alembeelawaidi)
   Mobile Menu + Trilingual (BEM/SW/EN) + Theater Player + Archive
   ========================================================================== */

const SITE_CONFIG = {
  primaryChannelUrl: 'https://youtube.com',
  storageKey: 'alembeela_foundation_state_v7',
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
    searchPlaceholder: 'Tafuta: Úmbo, Sehemu ya 1, Short, Asili, Kibembe...',
    clearBtn: 'Futa',
    filterAll: 'Zose',
    savedTab: 'Bipendwa',
    statusReady: 'TAYARI KUCHEZA',
    statusPlaying: 'INACHEZA SASA',
    statusFrozen: 'IMEGANDISHWA',
    loopOn: '🔁 Loop Nzima: ON',
    loopOff: '🔁 Loop Nzima: OFF',
    prevBtn: '⏮ Nyuma',
    playBtn: '▶ Cheza',
    nextBtn: 'Mbele ⏭',
    saveBtn: '☆ Hifadhi',
    savedBtn: '★ Imependezwa',
    shareBtn: 'Share',
    watchHere: 'Lola Hano',
    freezeLabel: 'Kugandisha',
    blockLabel: 'Kuzuia',
    copiedToast: 'Kiungo kimenakiliwa.',
    frozenToast: 'Imegandishwa: Kubadilisha video kumesimamishwa.',
    unfrozenToast: 'Kugandisha kumeondolewa.',
    blockedToast: 'Video imezuiwa kwenye mzunguko.',
    unblockedToast: 'Kizuizi kimeondolewa.',
    emptySaved: 'Haujahifadhi video yoyote kwenye Bipendwa.',
    emptySearch: 'Hakuna matokeo yaliyopatikana.',
    footerCopy: 'Kulinda asili ya milango, mila, na malaka ma bantu ba Babembe.',
    footerNavHeading: 'Menyu',
    footerChannelHeading: 'Channel Yetu'
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
    searchPlaceholder: 'Tafuta: Úmbo, Sehemu ya 1, Short, Asili, Kibembe...',
    clearBtn: 'Futa',
    filterAll: 'Zote',
    savedTab: 'Vipendwa',
    statusReady: 'TAYARI KUCHEZA',
    statusPlaying: 'INACHEZA SASA',
    statusFrozen: 'IMEGANDISHWA',
    loopOn: '🔁 Loop Nzima: ON',
    loopOff: '🔁 Loop Nzima: OFF',
    prevBtn: '⏮ Nyuma',
    playBtn: '▶ Cheza',
    nextBtn: 'Mbele ⏭',
    saveBtn: '☆ Hifadhi',
    savedBtn: '★ Imependezwa',
    shareBtn: 'Share',
    watchHere: 'Tazama Hapa',
    freezeLabel: 'Kugandisha',
    blockLabel: 'Kuzuia',
    copiedToast: 'Kiungo kimenakiliwa.',
    frozenToast: 'Imegandishwa: Kubadilisha video kumesimamishwa.',
    unfrozenToast: 'Kugandisha kumeondolewa.',
    blockedToast: 'Video imezuiwa kwenye mzunguko.',
    unblockedToast: 'Kizuizi kimeondolewa.',
    emptySaved: 'Bado haujahifadhi video yoyote kwenye Vipendwa.',
    emptySearch: 'Hakuna matokeo yaliyopatikana kwa utafutaji wako.',
    footerCopy: 'Kuhifadhi asili ya familia, mila, na sauti za jamii ya Babembe.',
    footerNavHeading: 'Kurasa',
    footerChannelHeading: 'Channel Rasmi'
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
    searchPlaceholder: 'Search: Úmbo, Episode 1, Short, Lineage, Kibembe...',
    clearBtn: 'Clear',
    filterAll: 'All',
    savedTab: 'Saved',
    statusReady: 'READY TO PLAY',
    statusPlaying: 'NOW PLAYING',
    statusFrozen: 'FROZEN',
    loopOn: '🔁 Full Loop: ON',
    loopOff: '🔁 Full Loop: OFF',
    prevBtn: '⏮ Prev',
    playBtn: '▶ Play',
    nextBtn: 'Next ⏭',
    saveBtn: '☆ Save',
    savedBtn: '★ Saved',
    shareBtn: 'Share',
    watchHere: 'Watch Here',
    freezeLabel: 'Freeze',
    blockLabel: 'Block',
    copiedToast: 'Link copied to clipboard.',
    frozenToast: 'Frozen: Video switching locked.',
    unfrozenToast: 'Unfrozen: Video switching unlocked.',
    blockedToast: 'Item blocked from queue.',
    unblockedToast: 'Item unblocked.',
    emptySaved: 'You have not saved any items yet.',
    emptySearch: 'No matching items found.',
    footerCopy: 'Preserving family lineage, traditions, and voices of the Babembe community.',
    footerNavHeading: 'Navigation',
    footerChannelHeading: 'Official Channel'
  }
};

/* ==========================================================================
   MEDIA LIBRARY (3 Full Episodes + 3 YouTube Shorts)
   ========================================================================== */
const MEDIA_ITEMS = [
  {
    id: 'vid-chCvVUD1FPo',
    videoId: 'chCvVUD1FPo',
    embedUrl: 'https://youtube.com',
    type: 'video',
    isSeries: true,
    badge: 'Sehemu ya Kwanza (1)',
    title: 'ÚMBO CHA BABEMBE: Sehemu ya Kwanza (1) – @ALEMBEELAWAIDI',
    description:
      'Mafundisho ya asili, historia, na chimbuko la jamii ya Babembe yakisimuliwa kwa lugha ya Kibembe.',
    shareUrl: 'https://youtu.be'
  },
  {
    id: 'vid-xsxfbtJnrzg',
    videoId: 'xsxfbtJnrzg',
    embedUrl: 'https://youtube.com',
    type: 'video',
    isSeries: true,
    badge: 'Sehemu ya Pili (2)',
    title: 'UMBO CHA BABEMBE SEHEMU YA PILI 2 @Alembeela wa idi APRIL 18TH, 2026',
    description:
      'Mwendelezo wa mafundisho ya nasaba ya familia, mila, na maadili ya jamii ya Babembe.',
    shareUrl: 'https://youtu.be'
  },
  {
    id: 'vid-YPPOyvxJ-Wk',
    videoId: 'YPPOyvxJ-Wk',
    embedUrl: 'https://youtube.com',
    type: 'video',
    isSeries: true,
    badge: 'Sehemu ya Tatu (3)',
    title: 'ÚMBO CHA BABEMBE: Sehemu ya Tatu (3) – @ALEMBEELAWAIDI',
    description:
      'Sehemu ya tatu ya mfululizo wa urithi, hekima za wazee, na historia ya jamii ya Babembe.',
    shareUrl: 'https://youtu.be'
  },
  {
    id: 'short-HhJm-izUZk4',
    videoId: 'HhJm-izUZk4',
    embedUrl: 'https://youtube.com',
    type: 'short',
    isSeries: false,
    badge: 'Short 01 · Úmbo',
    title: 'ÚMBO #AlembeelaFoundation #Alembeelawaidi (01)',
    description:
      'Kipande kifupi cha uhamasishaji wa urithi na mafundisho ya Kibembe — full video ipo YouTube.',
    shareUrl: 'https://youtube.com'
  },
  {
    id: 'short-jCPtT8ZPsoE',
    videoId: 'jCPtT8ZPsoE',
    embedUrl: 'https://youtube.com',
    type: 'short',
    isSeries: false,
    badge: 'Short 02 · Úmbo',
    title: 'ÚMBO #AlembeelaFoundation #Alembeelawaidi (02)',
    description:
      'Dondoo fupi za mila, asili, na sauti za jamii ya Babembe katika Kibembe.',
