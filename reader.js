/*
Copyright © 2026 Frenzyyy. All Rights Reserved.
*/

// Hard failsafe
if (window._loaderFailsafe) clearTimeout(window._loaderFailsafe);
setTimeout(() => {
  const ls = document.getElementById('loading-screen');
  if (ls) { ls.style.transition = 'none'; ls.remove(); }
}, 4000);

/* READER STATE */
let currentNovelId    = null;
let currentChapterNum = null;

/* READER PREFS PANEL */
function openReaderPrefs() {
  const am = LS.get('nl_automark80');    const rpAm = document.getElementById('rp-automark');    if(rpAm) rpAm.checked = am !== null ? am : true;
  const ac = LS.get('nl_autocontinue'); const rpAc = document.getElementById('rp-autocontinue'); if(rpAc) rpAc.checked = ac !== null ? ac : true;
  _syncReaderThemeBtns();
  document.getElementById('reader-pref-overlay')?.classList.add('on');
  document.getElementById('reader-pref-sheet')?.classList.add('open');
}
function closeReaderPrefs() {
  document.getElementById('reader-pref-overlay')?.classList.remove('on');
  document.getElementById('reader-pref-sheet')?.classList.remove('open');
}
function _syncReaderThemeBtns() {
  const src = document.documentElement.getAttribute('data-theme-source') || 'system';
  const theme = document.documentElement.getAttribute('data-theme') || 'light';
  const isSystem = src === 'system';
  document.getElementById('rp-opt-dark')  ?.classList.toggle('active', !isSystem && theme==='dark');
  document.getElementById('rp-opt-light') ?.classList.toggle('active', !isSystem && theme==='light');
  document.getElementById('rp-opt-system')?.classList.toggle('active', isSystem);
}

/* END SCREEN */
const _ONGOING_MSGS = [
  `You've officially caught up — faster than the author can type! The next chapter is out there, somewhere between a cup of tea and a moment of inspiration. <strong>Check back soon.</strong>`,
  `You've reached the frontier. The story continues... just not yet. The author is probably staring at a blinking cursor right now. <strong>You're all caught up!</strong>`,
  `All caught up! The next chapter is still being dreamed up. Go touch some grass while the author cooks. <strong>We'll hold your spot.</strong>`,
  `The ink hasn't dried on the next chapter yet. You read faster than the author writes — take that as a compliment. <strong>More is coming.</strong>`,
  `You've hit the edge of what exists so far. Beyond here? Just the author, their imagination, and probably a snack. <strong>Stay tuned.</strong>`,
];
const _COMPLETE_MSGS = [
  `Every word, every chapter, every secret — you've seen it all. This story has been told in full. <strong>A journey worth taking.</strong>`,
  `The final page has been turned. This is a completed work — every thread tied, every question answered. <strong>Savor it.</strong>`,
  `You've finished a complete story from start to finish. The author wrote it all for a reader exactly like you. <strong>Well done.</strong>`,
];

function showEndScreen(novelId, lastChapterNum) {
  const nd = novelDetails[novelId];
  if (!nd) return;

  const prog = _getNovelProgress(novelId);
  if (!prog.read.includes(lastChapterNum)) {
    prog.read.push(lastChapterNum);
    prog.last = lastChapterNum;
    _saveNovelProgress(novelId, prog);
    _saveChapterPct(novelId, lastChapterNum, 100);
  }
  currentNovelId    = novelId;
  currentChapterNum = lastChapterNum;

  const isCompleted = (nd.status || '').toLowerCase() === 'completed';
  const pool  = isCompleted ? _COMPLETE_MSGS : _ONGOING_MSGS;
  const msg   = pool[Math.floor(Math.random() * pool.length)];
  const badge = isCompleted ? 'Story Complete' : 'Ongoing';
  const headingText = isCompleted ? 'Story Complete' : 'All Caught Up';

  document.getElementById('end-card').innerHTML = `
    <div class="end-glow"></div>
    <div class="end-badge">${badge}</div>
    <div class="end-title">${headingText}</div>
    <div class="end-novel-label">You just finished</div>
    <div class="end-novel-name">${esc(nd.title)}</div>
    <div class="end-divider"></div>
    <div class="end-msg">${msg}</div>
    <div class="end-actions">
      <button class="end-btn pri" onclick="window.location.href='novel.html?id=${esc(novelId)}'">Back to Novel</button>
      <button class="end-btn sec" onclick="goHome()">Go Home</button>
    </div>`;

  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById('screen-end').classList.add('active');
  document.getElementById('end-scroll')?.scrollTo({ top: 0, behavior: 'instant' });
}

/* CHAPTER READER */
function _watchReadingProgress(scrollEl) {
  const fill = document.getElementById('reading-progress-fill');
  let lastSavedPct = -1;
  function onScroll() {
    const max  = scrollEl.scrollHeight - scrollEl.clientHeight;
    const pct  = max > 0 ? (scrollEl.scrollTop / max) * 100 : 0;
    if (fill) fill.style.width = pct + '%';

    if (currentNovelId && currentChapterNum && Math.abs(pct - lastSavedPct) >= 2) {
      lastSavedPct = pct;
      _saveChapterPct(currentNovelId, currentChapterNum, pct);
    }

    const autoMark = LS.get('nl_automark80');
    const atBottom = (scrollEl.scrollHeight - scrollEl.scrollTop - scrollEl.clientHeight) < 8;
    if ((pct >= 95 || atBottom) && currentNovelId && currentChapterNum && (autoMark === null || autoMark === true)) {
      const prog = _getNovelProgress(currentNovelId);
      if (!prog.read.includes(currentChapterNum)) {
        prog.read.push(currentChapterNum);
        prog.last = currentChapterNum;
        _saveNovelProgress(currentNovelId, prog);
        _saveChapterPct(currentNovelId, currentChapterNum, 100);
        toast('Chapter ' + currentChapterNum + ' marked as read', 2400);
      }
    }
  }
  scrollEl.removeEventListener('scroll', scrollEl._readProg);
  scrollEl._readProg = onScroll;
  scrollEl.addEventListener('scroll', onScroll, {passive:true});
}

function markReadAndNext(novelId, currentNum, nextNum) {
  const prog = _getNovelProgress(novelId);
  if (!prog.read.includes(currentNum)) {
    prog.read.push(currentNum);
    prog.last = currentNum;
    _saveNovelProgress(novelId, prog);
    _saveChapterPct(novelId, currentNum, 100);
  }
  // Preserve the origin so back from next chapter still routes correctly
  const origin = LS.get('nl_chapter_origin') || 'home';
  LS.set('nl_chapter_origin', origin);
  window.location.href = 'reader.html?novel=' + encodeURIComponent(novelId) + '&chapter=' + nextNum;
}

function closeChapter() {
  if (currentNovelId && currentChapterNum) {
    _setChapterProgress(currentNovelId, currentChapterNum, false);
  }
  const origin  = LS.get('nl_chapter_origin');
  const novelId = LS.get('nl_current_novel');
  if (origin === 'modal' && novelId) {
    // Return to index.html and reopen the novel modal
    window.location.href = 'index.html?reopen=' + encodeURIComponent(novelId);
  } else {
    window.location.href = 'index.html';
  }
}

function _renderChapter(novelId, chapterNum) {
  const nd = novelDetails[novelId];
  if (!nd) { document.getElementById('ch-prose').innerHTML = '<p style="padding:40px;text-align:center;">Novel not found. <a href="index.html" style="color:var(--carrot)">Go Home</a></p>'; return; }

  let ch = null, vol = null;
  for (const v of nd.volumes) {
    const found = v.chapters.find(c=>c.number===chapterNum);
    if (found) { ch = found; vol = v; break; }
  }
  if (!ch) { document.getElementById('ch-prose').innerHTML = '<p style="padding:40px;text-align:center;">Chapter not found. <a href="index.html" style="color:var(--carrot)">Go Home</a></p>'; return; }

  currentNovelId    = novelId;
  currentChapterNum = chapterNum;
  LS.set('nl_current_novel', novelId);
  LS.set('nl_current_chapter', chapterNum);

  document.title = `Ch.${ch.number}: ${ch.title} — ${nd.title} — NovéLore`;
  document.getElementById('reader-vol-label').textContent = `Volume ${vol.number}: ${vol.title}`;
  document.getElementById('reader-ch-title').textContent  = `Chapter ${ch.number}: ${ch.title}`;

  document.getElementById('ch-hdr-block').innerHTML = `
    <div class="ch-hdr-vol-label">Volume ${vol.number} — ${esc(vol.title)}</div>
    <div class="ch-hdr-title">Chapter ${ch.number}: ${esc(ch.title)}</div>
    <div class="ch-hdr-meta">
      <span>${esc(ch.date||'')}</span>
      <span>${esc(nd.title)}</span>
    </div>`;

  const paras = (ch.content||'').replace(/^---$/gm, '\n\n---\n\n').split(/\n\n+/).filter(p=>p.trim());
  document.getElementById('ch-prose').innerHTML = paras.map(p => {
    const txt = p.trim();
    if (txt === '---') return '<div class="ch-scene-break">· · ·</div>';
    const html = esc(txt).replace(/\*([^*]+)\*/g, '<em>$1</em>');
    return `<p>${html}</p>`;
  }).join('');

  const allChapters = nd.volumes.flatMap(v => v.chapters);
  const curIdx  = allChapters.findIndex(c => c.number === chapterNum);
  const prevCh  = allChapters[curIdx - 1];
  const nextCh  = allChapters[curIdx + 1];
  const isLast  = !nextCh;

  document.getElementById('ch-nav-strip').innerHTML = `
    <button class="ch-nav-btn${prevCh ? '' : ' disabled'}" onclick="${prevCh ? `window.location.href='reader.html?novel=${encodeURIComponent(novelId)}&chapter=${prevCh.number}'` : 'void(0)'}">← Prev</button>
    <button class="ch-nav-btn" onclick="closeChapter()">← Novel</button>
    <button class="ch-nav-btn pri" onclick="${isLast ? `showEndScreen('${esc(novelId)}',${chapterNum})` : `markReadAndNext('${esc(novelId)}',${chapterNum},${nextCh.number})`}">
      ${isLast ? 'The End' : 'Next →'}
    </button>
    <button class="ch-nav-btn" onclick="goHome()" style="flex:0 0 auto;padding:12px 14px;" title="Go Home">Home</button>`;

  _setChapterProgress(novelId, chapterNum, false);

  const scroll = document.getElementById('chapter-scroll');
  scroll.scrollTop = 0;
  window.scrollTo(0, 0);
  setTimeout(() => { scroll.scrollTop = 0; window.scrollTo(0, 0); }, 0);
  _watchReadingProgress(scroll);
}

/* READER INIT */
(async function initReader() {
  Loader.setP(10, 'Starting up…');
  await Loader.wait(100);

  Loader.setP(25, 'Applying theme…');
  try { loadTheme(); restoreReadingPrefs(); } catch(e) {}
  await Loader.wait(100);

  Loader.setP(60, 'Loading chapter…');

  const params     = new URLSearchParams(window.location.search);
  const novelId    = params.get('novel');
  const chapterNum = parseInt(params.get('chapter'), 10);

  if (!novelId || isNaN(chapterNum)) {
    document.getElementById('ch-prose').innerHTML = '<p style="padding:40px;text-align:center;">Invalid chapter link. <a href="index.html" style="color:var(--carrot)">Go Home</a></p>';
    Loader.setP(100, '');
    await Loader.dismiss();
    return;
  }

  try { _renderChapter(novelId, chapterNum); } catch(e) { console.error('Reader render error:', e); }

  Loader.setP(100, 'Ready!');
  await Loader.dismiss();
})();
