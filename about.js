/*
Copyright © 2026 Frenzyyy. All Rights Reserved.
*/

// Hard failsafe
if (window._loaderFailsafe) clearTimeout(window._loaderFailsafe);
setTimeout(() => {
  const ls = document.getElementById('loading-screen');
  if (ls) { ls.style.transition = 'none'; ls.remove(); }
}, 4000);

function showTab(tabId) {
  document.querySelectorAll('.about-screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.about-tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + tabId)?.classList.add('active');
  document.querySelector(`.about-tab-btn[data-tab="${tabId}"]`)?.classList.add('active');
  document.querySelector('#tab-' + tabId + ' .page-scroll')?.scrollTo({top:0,behavior:'instant'});
}

(async function initAbout() {
  Loader.setP(20, 'Applying theme…');
  try { loadTheme(); } catch(e) {}
  await Loader.wait(120);

  // Set year spans
  const yr = new Date().getFullYear();
  document.querySelectorAll('.year-span').forEach(el => el.textContent = yr);

  // Read ?tab= param to decide which tab to show
  const params = new URLSearchParams(window.location.search);
  const tab = params.get('tab') || 'about';
  showTab(tab);

  Loader.setP(100, 'Ready!');
  await Loader.dismiss();
})();
