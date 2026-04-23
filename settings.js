/*
Copyright © 2026 Frenzyyy. All Rights Reserved.
*/

// Hard failsafe
if (window._loaderFailsafe) clearTimeout(window._loaderFailsafe);
setTimeout(() => {
  const ls = document.getElementById('loading-screen');
  if (ls) { ls.style.transition = 'none'; ls.remove(); }
}, 4000);

/* SETTINGS INIT */
(async function initSettings() {
  Loader.setP(20, 'Applying theme…');
  try { loadTheme(); } catch(e) {}
  await Loader.wait(120);

  Loader.setP(55, 'Loading preferences…');
  try { restoreReadingPrefs(); } catch(e) {}
  await Loader.wait(150);

  Loader.setP(80, 'Building novel list…');
  try {
    // Populate novel progress list
    const novelListEl = document.getElementById('settings-novel-list');
    if (novelListEl && typeof novelDetails !== 'undefined') {
      novelListEl.innerHTML = Object.values(novelDetails).map(nd => {
        const prog  = _getNovelProgress(nd.id);
        const total = nd.volumes.reduce((s,v) => s + v.chapters.length, 0);
        const label = prog.read.length === 0
          ? 'Not started yet — tap Open to begin'
          : prog.read.length + ' / ' + total + ' chapters read · Last: Ch.' + prog.last;
        return `<div class="setting-row">
          <div class="setting-row-l">
            <span class="setting-icon">${esc(nd.emoji||'')}</span>
            <div>
              <div class="setting-lbl">${esc(nd.title)}</div>
              <div class="setting-sub">${label}</div>
            </div>
          </div>
          <button class="setting-action-btn" onclick="openNovel('${nd.id}')">Open →</button>
        </div>`;
      }).join('');
    }
  } catch(e) {}
  await Loader.wait(100);

  Loader.setP(100, 'Ready!');
  await Loader.dismiss();
})();
