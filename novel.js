/*
Copyright © 2026 Frenzyyy. All Rights Reserved.
*/

// Hard failsafe
if (window._loaderFailsafe) clearTimeout(window._loaderFailsafe);
setTimeout(() => {
  const ls = document.getElementById('loading-screen');
  if (ls) { ls.style.transition = 'none'; ls.remove(); }
}, 4000);

/* BOOKMARKS (needed for Save button on novel page) */
let bookmarks = bookmarksData.map((b,i)=>({...b,id:String(i)}));
let _bmIdCtr = bookmarksData.length;
(function _loadBookmarkState(){
  try {
    const saved = LS.get('nl_bookmarks');
    if (Array.isArray(saved) && saved.length) {
      bookmarks = saved;
      _bmIdCtr = saved.reduce((max,b) => Math.max(max, parseInt(b.id)||0), 0) + 1;
    }
  } catch(e) {}
})();
function _saveBookmarkState() { try { LS.set('nl_bookmarks', bookmarks); } catch(e) {} }
function _nextBmId() { return String(_bmIdCtr++); }

function _refreshNovelBmBtn() {
  const btn = document.getElementById('novel-bm-btn');
  if (btn && currentNovelId) {
    const active = bookmarks.some(b=>b.novelId===currentNovelId);
    btn.classList.toggle('bm-active', active);
    btn.textContent = active ? 'Saved' : 'Save';
  }
}

function toggleNovelBookmark(novelId) {
  const nd = novelDetails[novelId];
  if (!nd) return;
  const idx = bookmarks.findIndex(b=>b.novelId===novelId);
  if (idx >= 0) {
    bookmarks.splice(idx, 1);
    toast('Bookmark removed');
  } else {
    bookmarks.push({ id: _nextBmId(), novelId: nd.id, title: nd.title, emoji: nd.emoji, bg: nd.bg, genre: (nd.genres||[nd.genre||''])[0], href:'#', coverImg: nd.coverImg||'' });
    toast('Bookmarked!');
  }
  _saveBookmarkState();
  _refreshNovelBmBtn();
}

/* NOVEL PAGE */
let currentNovelId = null;

function novelGoBack() { window.location.href = 'index.html'; }

function _renderNovelPage(nd) {
  document.getElementById('novel-nav-title').textContent = nd.title;
  document.title = nd.title + ' — NovéLore';

  const prog = _getNovelProgress(nd);
  const totalCh = nd.volumes.reduce((s,v)=>s+v.chapters.length,0);
  const bm = bookmarks.find(b=>b.novelId===nd.id);
  const bmActive = bm ? 'bm-active' : '';
  const init = titleInitial(nd.title);
  let coverHtmlStr;
  if (nd.coverImg) {
    const safe = safeUrl(nd.coverImg);
    coverHtmlStr = safe && safe !== '#'
      ? `<img class="novel-cover-img" src="${safe}" alt="${esc(nd.title)}" loading="lazy"
           onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
         <div class="novel-cover-init" style="display:none">${esc(init)}</div>`
      : `<div class="novel-cover-init">${esc(init)}</div>`;
  } else {
    coverHtmlStr = `<div class="novel-cover-init">${esc(init)}</div>`;
  }
  const statusCls = nd.status==='Ongoing' ? 'chip-status-ongoing' : 'chip-status-completed';
  const genreChips = (nd.genres||[nd.genre||'']).map(g=>`<span class="novel-meta-chip chip-genre">${esc(g)}</span>`).join('');

  const lastRead = prog.last || 0;
  let continueLabel = '▶ Start Reading';
  let continueChNum = 1;
  if (lastRead > 0) {
    continueLabel = lastRead >= totalCh ? '↺ Read Again' : `▶ Continue Ch.${lastRead+1}`;
    continueChNum = lastRead >= totalCh ? 1 : lastRead + 1;
  }

  document.getElementById('novel-hero-band').innerHTML = `
    <div class="novel-hero-inner">
      <div class="novel-cover-block" style="background:${safeCss(nd.bg)}">${coverHtmlStr}</div>
      <div class="novel-text-block">
        <div class="novel-page-title">${esc(nd.title)}</div>
        <div class="novel-author-line">by <strong>${esc(nd.author||'Unknown')}</strong></div>
        <div class="novel-meta-chips">
          <span class="novel-meta-chip ${statusCls}">${esc(nd.status)}</span>
          ${genreChips}
          <span class="novel-meta-chip chip-date">${esc(nd.datePublished||'')}</span>
        </div>
        <div class="novel-action-row">
          <button class="novel-action-btn pri" onclick="openChapter('${esc(nd.id)}',${continueChNum})">${continueLabel}</button>
          <button class="novel-action-btn sec ${bmActive}" id="novel-bm-btn" onclick="toggleNovelBookmark('${esc(nd.id)}')">${bm?'Saved':'Save'}</button>
        </div>
      </div>
    </div>`;

  document.getElementById('novel-synopsis-section').innerHTML = `
    <div class="synopsis-label">Synopsis</div>
    <div class="synopsis-text" id="synopsis-inner">${esc(nd.synopsis||'No synopsis available.').replace(/\n/g,'<br>')}</div>
    <span class="synopsis-toggle" id="synopsis-toggle-btn" onclick="toggleSynopsis()">Read more ↓</span>`;

  let credits = 0;
  nd.volumes.forEach(v => v.chapters.forEach(ch => {
    if (prog.read.includes(ch.number)) { credits += 1; }
    else { credits += _getChapterPct(nd.id, ch.number) / 100; }
  }));
  const pct = totalCh > 0 ? Math.round((credits / totalCh) * 100) : 0;
  const inProgress = nd.volumes.reduce((s,v) =>
    s + v.chapters.filter(ch => !prog.read.includes(ch.number) && _getChapterPct(nd.id, ch.number) > 0).length, 0);
  const progressDetail = inProgress > 0 ? ` · ${inProgress} in progress` : '';
  document.getElementById('novel-progress-section').innerHTML = `
    <div class="novel-progress-hdr">
      <span class="novel-progress-lbl">Reading Progress</span>
      <span class="novel-progress-pct">${prog.read.length}/${totalCh} chapters · ${pct}%${progressDetail}</span>
    </div>
    <div class="novel-progress-bar">
      <div class="novel-progress-fill" id="novel-prog-fill" style="width:${pct}%"></div>
    </div>`;

  let volsHtml = '<div class="volumes-section-lbl">Volumes &amp; Chapters</div>';
  nd.volumes.forEach((vol, vi) => {
    const chHtml = vol.chapters.map(ch => {
      const isRead   = prog.read.includes(ch.number);
      const chPct    = isRead ? 100 : _getChapterPct(nd.id, ch.number);
      const isNew    = ch.number === totalCh;
      const showBar  = !isRead && chPct > 0;
      const numDisplay = isRead ? '✓' : (showBar ? Math.round(chPct)+'%' : ch.number);
      const progBar  = showBar ? `
        <div class="ch-prog-wrap">
          <div class="ch-prog-bar"><div class="ch-prog-fill" style="width:${chPct}%"></div></div>
          <div class="ch-prog-pct">${Math.round(chPct)}% read</div>
        </div>` : '';
      return `<div class="ch-row${isRead?' read':''}" onclick="openChapter('${esc(nd.id)}',${ch.number})">
        <div class="ch-num-badge">${numDisplay}</div>
        <div class="ch-body">
          <div class="ch-title-text">${esc(ch.title)}${isNew?'<span class="ch-new-badge">NEW</span>':''}</div>
          <div class="ch-date-text">${esc(ch.date||'')}</div>
          ${progBar}
        </div>
        <div class="ch-check">✓</div>
      </div>`;
    }).join('');
    volsHtml += `
      <div class="volume-block">
        <div class="vol-hdr" id="vol-hdr-${vi}" onclick="toggleVol(${vi})">
          <span class="vol-badge">Vol. ${vol.number}</span>
          <span class="vol-title-text">${esc(vol.title)}</span>
          <span class="vol-arrow">▾</span>
        </div>
        <div class="vol-chapters" id="vol-chs-${vi}" style="max-height:${vol.chapters.length*61}px">${chHtml}</div>
      </div>`;
  });
  document.getElementById('novel-volumes-section').innerHTML = volsHtml;
}

function toggleVol(vi) {
  const hdr = document.getElementById('vol-hdr-'+vi);
  const chs = document.getElementById('vol-chs-'+vi);
  const collapsed = hdr.classList.toggle('collapsed');
  chs.classList.toggle('collapsed', collapsed);
}

function toggleSynopsis() {
  const inner = document.getElementById('synopsis-inner');
  const btn   = document.getElementById('synopsis-toggle-btn');
  if (!inner) return;
  const exp = inner.classList.toggle('expanded');
  btn.textContent = exp ? 'Show less ↑' : 'Read more ↓';
}

/* NOVEL PAGE INIT */
(async function initNovel() {
  Loader.setP(10, 'Starting up…');
  await Loader.wait(100);

  Loader.setP(25, 'Applying theme…');
  try { loadTheme(); } catch(e) {}
  await Loader.wait(120);

  Loader.setP(50, 'Loading novel…');

  const params = new URLSearchParams(window.location.search);
  const novelId = params.get('id');

  if (!novelId || !novelDetails[novelId]) {
    document.getElementById('novel-hero-band').innerHTML = `<div style="padding:40px;text-align:center;color:var(--text-muted);">Novel not found. <a href="index.html" style="color:var(--carrot)">Go Home</a></div>`;
    Loader.setP(100, '');
    await Loader.dismiss();
    return;
  }

  currentNovelId = novelId;

  try {
    _renderNovelPage(novelDetails[novelId]);
  } catch(e) {
    console.error('Novel render error:', e);
  }

  Loader.setP(100, 'Ready!');
  await Loader.dismiss();

  document.getElementById('novel-scroll')?.scrollTo({top:0,behavior:'instant'});
})();
