/*
Copyright © 2026 Frenzyyy. All Rights Reserved.

This source code is proprietary and confidential. Unauthorized copying, redistribution, or use of this code, in whole or in part, is strictly prohibited.
*/

// Security
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('keydown', e => {
  if (
    (e.ctrlKey && (e.key === 'u' || e.key === 's' || e.key === 'p')) ||
    (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
    e.key === 'F12'
  ) e.preventDefault();
});
document.addEventListener('selectstart', e => e.preventDefault());

// Console
console.log(`
(\\(\\
( -.-) 
o_(")(")

NovéLore — Read Without Limits
Built with love and carrot by Frenzyyy.
`);

console.log(
  '%cHold on.',
  'font-size:26px;font-weight:900;color:#E8622A;letter-spacing:-0.5px;'
);

console.log(
  '%cThis source code is proprietary and confidential.\n\n' +
  'Inspecting, copying, or reusing any part of this codebase — in whole or in part — without explicit written permission from Frenzyyy is a violation of NovéLore Terms of Service (§6: Source Code and Platform Design) and constitutes an infringement of applicable copyright law.\n\n' +
  'Specifically prohibited:\n' +
  '  · Copying or reproducing this code for your own projects\n' +
  '  · Redistributing or repurposing any part of the codebase or design\n' +
  '  · Using automated tools or scrapers to extract content (§15)\n' +
  '  · Feeding this code or content into AI/ML systems without consent\n\n' +
  'Violations may result in a formal DMCA takedown notice (§25), civil legal action under applicable copyright law, and/or permanent restriction of access to this platform (§26).\n\n' +
  'If you have a legitimate development or collaboration inquiry, contact: frenzyyybusinessemail@gmail.com',
  'color:#C44B1A;font-size:12px;line-height:2;font-family:monospace;'
);

/* STORAGE */
const LS = {
  get: k => { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } },
  set: (k,v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
};

/* THEME */
function setTheme(mode) {
  const isSystem = mode === 'system';
  let resolved = mode;
  if (isSystem) {
    localStorage.removeItem('nl_theme');
    resolved = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme-source', 'system');
  } else {
    LS.set('nl_theme', mode);
    document.documentElement.setAttribute('data-theme-source', 'manual');
  }
  document.documentElement.setAttribute('data-theme', resolved);
  const dark = resolved === 'dark';
  const tog = document.getElementById('theme-toggle');
  if (tog) tog.checked = dark;
  const iconEl = document.getElementById('theme-icon');
  const lblEl  = document.getElementById('theme-lbl');
  const subEl  = document.getElementById('theme-sub');
  if (iconEl) iconEl.textContent = isSystem ? 'System' : (dark ? 'Dark' : 'Light');
  if (lblEl)  lblEl.textContent  = isSystem ? 'System Default' : (dark ? 'Dark Mode' : 'Light Mode');
  if (subEl)  subEl.textContent  = isSystem ? 'Follows your OS light/dark setting' : (dark ? 'Easy on the eyes at night' : 'Bright and clean');
  const optDark   = document.getElementById('opt-dark');
  const optLight  = document.getElementById('opt-light');
  const optSystem = document.getElementById('opt-system');
  if (optDark)   optDark.classList.toggle('active',   !isSystem && dark);
  if (optLight)  optLight.classList.toggle('active',  !isSystem && !dark);
  if (optSystem) optSystem.classList.toggle('active', isSystem);
  if (typeof _syncReaderThemeBtns === 'function') _syncReaderThemeBtns();
}
function applyToggle(checked) { setTheme(checked ? 'dark' : 'light'); }
function loadTheme() {
  const saved = LS.get('nl_theme');
  if (saved === 'light' || saved === 'dark') { setTheme(saved); }
  else { setTheme('system'); }
}
if (window.matchMedia) {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
    if (document.documentElement.getAttribute('data-theme-source') === 'system') {
      document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
      const tog = document.getElementById('theme-toggle');
      if (tog) tog.checked = e.matches;
    }
  });
}

/* READING PREFERENCES */
const FONT_SIZES   = { small:'.82rem', medium:'.92rem', large:'1.05rem' };
const LINE_SPACES  = { compact:'1.55', normal:'1.75', relaxed:'2.0' };
const READ_WIDTHS  = { narrow:'480px', normal:'640px', wide:'820px' };

function applyFontSize(val, btn) {
  LS.set('nl_fontsize', val);
  document.documentElement.style.setProperty('--reading-fs', FONT_SIZES[val] || FONT_SIZES.medium);
  document.querySelectorAll('.font-size-ctrl .seg-btn').forEach(b=>b.classList.toggle('active', b.dataset.val===val));
}
function applyLineSpace(val, btn) {
  LS.set('nl_linespace', val);
  document.documentElement.style.setProperty('--reading-lh', LINE_SPACES[val] || LINE_SPACES.normal);
  document.querySelectorAll('.line-space-ctrl .seg-btn').forEach(b=>b.classList.toggle('active', b.dataset.val===val));
}
function applyReadWidth(val, btn) {
  LS.set('nl_readwidth', val);
  document.documentElement.style.setProperty('--reading-w', READ_WIDTHS[val] || READ_WIDTHS.normal);
  document.querySelectorAll('.read-width-ctrl .seg-btn').forEach(b=>b.classList.toggle('active', b.dataset.val===val));
}
function applyReduceMotion(on) {
  LS.set('nl_reducemotion', on);
  document.documentElement.classList.toggle('reduce-motion', on);
}
function applyHighContrast(on) {
  LS.set('nl_highcontrast', on);
  document.documentElement.classList.toggle('high-contrast', on);
}
function savePref(key, val) { LS.set(key, val); }

function restoreReadingPrefs() {
  const fs = LS.get('nl_fontsize') || 'medium';
  document.documentElement.style.setProperty('--reading-fs', FONT_SIZES[fs] || FONT_SIZES.medium);
  document.querySelectorAll('#font-size-ctrl .seg-btn').forEach(b=>b.classList.toggle('active', b.dataset.val===fs));
  const ls2 = LS.get('nl_linespace') || 'normal';
  document.documentElement.style.setProperty('--reading-lh', LINE_SPACES[ls2] || LINE_SPACES.normal);
  document.querySelectorAll('#line-space-ctrl .seg-btn').forEach(b=>b.classList.toggle('active', b.dataset.val===ls2));
  const rw = LS.get('nl_readwidth') || 'normal';
  document.documentElement.style.setProperty('--reading-w', READ_WIDTHS[rw] || READ_WIDTHS.normal);
  document.querySelectorAll('#read-width-ctrl .seg-btn').forEach(b=>b.classList.toggle('active', b.dataset.val===rw));
  const rm = LS.get('nl_reducemotion'); if(rm!==null){const el=document.getElementById('reduce-motion');if(el)el.checked=rm;applyReduceMotion(rm);}
  const hc = LS.get('nl_highcontrast'); if(hc!==null){const el=document.getElementById('high-contrast');if(el)el.checked=hc;applyHighContrast(hc);}
  const nc = LS.get('nl_notif_chapters'); if(nc!==null){const el=document.getElementById('notif-chapters');if(el)el.checked=nc;}
  const na = LS.get('nl_notif_announce'); if(na!==null){const el=document.getElementById('notif-announce');if(el)el.checked=na;}
  const nn = LS.get('nl_notif_new'); if(nn!==null){const el=document.getElementById('notif-new');if(el)el.checked=nn;}
  const ac = LS.get('nl_autocontinue');  const acEl = document.getElementById('autocontinue');  if(acEl) acEl.checked = ac !== null ? ac : true;
  const sp = LS.get('nl_showprogress');  const spEl = document.getElementById('showprogress');  if(spEl) spEl.checked = sp !== null ? sp : true;
  const am = LS.get('nl_automark80');    const amEl = document.getElementById('automark80');    if(amEl) amEl.checked = am !== null ? am : true;
}

function clearHistory() {
  if (!confirm('Clear all reading history?\n\nThis will remove your reading progress and chapter positions for every novel. Your bookmarks and settings will not be affected.\n\nThis cannot be undone.')) return;

  // Remove fixed keys
  ['nl_scroll','nl_tab','nl_screen','nl_current_novel','nl_current_chapter','nl_chapter_origin'].forEach(k => localStorage.removeItem(k));

  // Remove all dynamic progress keys (nl_prog_* and nl_chprog_*)
  const toRemove = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && (k.startsWith('nl_prog_') || k.startsWith('nl_chprog_'))) toRemove.push(k);
  }
  toRemove.forEach(k => localStorage.removeItem(k));

  toast('Reading history cleared');
}

function resetAllSettings() {
  if (!confirm('Reset all settings to defaults?\n\nThis will restore theme, font size, line spacing, reading width, and all toggle preferences.\n\nThis cannot be undone.')) return;

  const keys = ['nl_theme','nl_fontsize','nl_linespace','nl_readwidth','nl_reducemotion','nl_highcontrast','nl_notif_chapters','nl_notif_announce','nl_notif_new','nl_autocontinue','nl_showprogress','nl_automark80'];
  keys.forEach(k => localStorage.removeItem(k));
  loadTheme();
  restoreReadingPrefs();
  toast('↺ Settings reset to defaults!');
}

/* SECURITY HELPERS */
function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#x27;');
}
function safeUrl(u) {
  const s = String(u || '#').trim();
  return /^(https?:\/\/|\/|#)/i.test(s) ? esc(s) : '#';
}
function safeCss(s) {
  return esc(String(s || '')
    .replace(/url\s*\(/gi, '')
    .replace(/expression\s*\(/gi, '')
    .replace(/javascript\s*:/gi, ''));
}
function safeNum(n, fallback = 0) {
  const v = parseFloat(n);
  return isFinite(v) ? v : fallback;
}
function safeChoice(val, allowed, fallback) {
  return allowed.includes(String(val)) ? String(val) : fallback;
}

/* RENDER HELPERS */
function titleInitial(title) {
  const s = String(title || '').trim();
  const cap = s.match(/[A-Z]/);
  return cap ? cap[0] : (s[0] || '?').toUpperCase();
}

function coverHtml(n, cls='nc') {
  const init = titleInitial(n.title);
  const bg   = safeCss(n.bg || 'linear-gradient(160deg,#E8622A,#3B1A08)');
  if (n.coverImg) {
    const safe = safeUrl(n.coverImg);
    if (safe && safe !== '#') {
      return `<img class="${cls}-cov-img" src="${safe}" alt="${esc(n.title)}" loading="lazy"
               onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
              <div class="${cls}-initial" style="display:none">${esc(init)}</div>`;
    }
  }
  return `<div class="${cls}-initial">${esc(init)}</div>`;
}

/* TOAST */
function toast(msg, dur=2800) {
  const t=document.getElementById('toast');
  if (!t) return;
  t.textContent=msg; t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),dur);
}

/* LOADING SCREEN CONTROLLER */
const Loader = (() => {
  const bar  = () => document.getElementById('ls-bar');
  const lbl  = () => document.getElementById('ls-status');
  const scr  = () => document.getElementById('loading-screen');
  let cur = 0;

  function setP(pct, label) {
    cur = Math.max(cur, Math.min(pct, 100));
    const b = bar(); if (b) b.style.width = cur + '%';
    const l = lbl(); if (l && label) l.textContent = label;
  }

  function dismiss() {
    return new Promise(resolve => {
      setP(100, 'Welcome!');
      setTimeout(() => {
        const el = scr();
        if (!el) { resolve(); return; }
        el.classList.add('fade-out');
        const cleanup = () => { try { el.remove(); } catch(e) {} resolve(); };
        el.addEventListener('transitionend', cleanup, { once: true });
        setTimeout(cleanup, 800);
      }, 350);
    });
  }

  function wait(ms) { return new Promise(r => setTimeout(r, ms)); }

  return { setP, dismiss, wait };
})();

/* SCREENS (in-page navigation, used on index.html) */
function showScreen(id) {
  LS.set('nl_screen', id);
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
}

/* NAVIGATION */
function goHome() {
  if (document.getElementById('screen-app')) {
    closeSB(); closeAllPanels();
    showScreen('screen-app');
    const tab = typeof lastTab !== 'undefined' ? lastTab : 'home';
    const savedBtn = document.querySelector(`.tab-btn[data-tab="${tab}"]`);
    if (savedBtn) {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      savedBtn.classList.add('active');
      document.getElementById('panel-' + tab)?.classList.add('active');
    }
    document.getElementById('main-scroll')?.scrollTo({top:0,behavior:'instant'});
  } else {
    window.location.href = 'index.html';
  }
}

// goSettings / goAbout / goTos / goChangelog are defined in home.js for in-page use on index.html.
// These stubs exist as fallbacks for pages that don't load home.js.
function goSettings()  { window.location.href = 'index.html'; }
function goAbout()     { window.location.href = 'index.html'; }
function goTos()       { window.location.href = 'index.html'; }
function goChangelog() { window.location.href = 'index.html'; }

function openNovel(novelId) {
  // If the novel modal exists on this page (index.html), use it
  if (document.getElementById('novel-modal')) {
    if (typeof openNovelModal === 'function') openNovelModal(novelId);
  } else {
    window.location.href = 'novel.html?id=' + encodeURIComponent(novelId);
  }
}

// origin: 'modal' = came from novel modal, 'home' = came from home feed
function openChapter(novelId, chapterNum, origin) {
  LS.set('nl_chapter_origin', origin || 'home');
  window.location.href = 'reader.html?novel=' + encodeURIComponent(novelId) + '&chapter=' + chapterNum;
}

/* PROGRESS HELPERS (shared: used by novel.js and reader.js) */
function _getNovelProgress(novelId) {
  const id = typeof novelId === 'string' ? novelId : (novelId.id||novelId);
  try {
    const raw = JSON.parse(localStorage.getItem('nl_prog_'+id));
    if (raw && Array.isArray(raw.read)) return raw;
  } catch {}
  return { read: [], last: 0 };
}
function _saveNovelProgress(novelId, prog) {
  try { localStorage.setItem('nl_prog_'+novelId, JSON.stringify(prog)); } catch {}
}
function _getChapterPct(novelId, chNum) {
  try {
    const v = JSON.parse(localStorage.getItem('nl_chprog_'+novelId+'_'+chNum));
    return (typeof v === 'number' && v >= 0 && v <= 100) ? v : 0;
  } catch { return 0; }
}
function _saveChapterPct(novelId, chNum, pct) {
  try { localStorage.setItem('nl_chprog_'+novelId+'_'+chNum, JSON.stringify(Math.round(pct))); } catch {}
}
function _setChapterProgress(novelId, chapterNum, markRead) {
  const prog = _getNovelProgress(novelId);
  if (markRead && !prog.read.includes(chapterNum)) prog.read.push(chapterNum);
  prog.last = chapterNum;
  _saveNovelProgress(novelId, prog);
}