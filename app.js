'use strict';

/* ═══════════════════════════════════════════
   STORAGE & THEME
═══════════════════════════════════════════ */
const LS = {
  get: k => { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } },
  set: (k,v) => localStorage.setItem(k, JSON.stringify(v)),
};
function setTheme(mode) {
  document.documentElement.setAttribute('data-theme', mode);
  LS.set('nl_theme', mode);
  const dark = mode === 'dark';
  const tog = document.getElementById('theme-toggle');
  if (tog) tog.checked = dark;
  document.getElementById('theme-icon').textContent = dark ? '🌙' : '☀️';
  document.getElementById('theme-lbl').textContent  = dark ? 'Dark Mode' : 'Light Mode';
  document.getElementById('theme-sub').textContent  = dark ? 'Easy on the eyes at night' : 'Bright and clean';
  document.getElementById('opt-dark').classList.toggle('active', dark);
  document.getElementById('opt-light').classList.toggle('active', !dark);
}
function applyToggle(c) { setTheme(c ? 'dark' : 'light'); }
function loadTheme() { setTheme(LS.get('nl_theme') || 'dark'); }

/* ═══════════════════════════════════════════
   HERO SLIDER
═══════════════════════════════════════════ */
let slideIdx=0, slideTimer=null, isAnim=false;
const SLIDE_MS = 5000;

function buildSlides() {
  const slides = heroSlides.slice(0,5);
  if (!slides.length) return;
  document.getElementById('hero-track').innerHTML = slides.map(s=>`
    <div class="hero-slide" style="background:${esc(s.bg)}">
      <div class="slide-pat"></div><div class="slide-glow"></div>
      <div class="slide-body">
        <div class="slide-tag">${esc(s.tag)}</div>
        <h1>${esc(s.title)}</h1>
        <p>${esc(s.description)}</p>
        <div class="slide-acts">
          <a class="btn-pri" href="${esc(s.readHref||'#')}">▶ Read Now</a>
          <a class="btn-out" href="#">+ Bookmark</a>
        </div>
      </div>
    </div>`).join('');
  document.getElementById('hero-dots').innerHTML = slides.map((_,i)=>
    `<button class="hero-dot${i===0?' active':''}" onclick="goSlide(${i})"></button>`).join('');
  goSlide(0);
  slideTimer = setInterval(()=>goSlide(slideIdx+1), SLIDE_MS);
}
function goSlide(idx) {
  if (isAnim) return; isAnim = true;
  const total = Math.min(heroSlides.length,5);
  slideIdx = ((idx%total)+total)%total;
  document.getElementById('hero-track').style.transform = `translateX(-${slideIdx*100}%)`;
  document.querySelectorAll('.hero-dot').forEach((d,i)=>d.classList.toggle('active',i===slideIdx));
  setTimeout(()=>{ isAnim=false; }, 650);
  const bar = document.getElementById('hero-progress');
  bar.style.transition='none'; bar.style.width='0%';
  void bar.offsetWidth;
  bar.style.transition=`width ${SLIDE_MS}ms linear`; bar.style.width='100%';
}
(function(){
  let tx=0;
  const sl = document.getElementById('hero-slider');
  sl.addEventListener('touchstart',e=>{tx=e.touches[0].clientX;},{passive:true});
  sl.addEventListener('touchend',e=>{
    const dx=e.changedTouches[0].clientX-tx;
    if(Math.abs(dx)>40){clearInterval(slideTimer);goSlide(slideIdx+(dx<0?1:-1));slideTimer=setInterval(()=>goSlide(slideIdx+1),SLIDE_MS);}
  },{passive:true});
})();

/* ═══════════════════════════════════════════
   NOTIFICATIONS
═══════════════════════════════════════════ */
let notifs = notificationsData.map((n,i)=>({...n,id:i}));
let notifMiniOpen = false;

function unreadCount() { return notifs.filter(n=>!n.read).length; }

function updateNotifBadge() {
  const badge = document.getElementById('notif-badge');
  const cnt = unreadCount();
  badge.classList.toggle('hidden', cnt===0);
}

function renderMiniNotifs() {
  const el = document.getElementById('mini-list');
  if (!notifs.length) {
    el.innerHTML = `<div style="padding:24px 16px;text-align:center;color:var(--text-muted);font-size:.83rem;">🔔 No notifications</div>`;
    return;
  }
  el.innerHTML = notifs.slice(0,4).map(n=>`
    <div class="mini-item${n.read?'':' unread'}" onclick="readNotif(${n.id})">
      <span class="mini-dot${n.read?' read':''}"></span>
      <div><div class="mini-msg">${esc(n.msg)}</div><div class="mini-time">${esc(n.time)}</div></div>
    </div>`).join('');
}

function renderDrawerNotifs() {
  const el = document.getElementById('notif-drawer-list');
  if (!notifs.length) {
    el.innerHTML = `<div class="np-empty"><span class="np-empty-icon">🔔</span><p>No notifications yet.</p></div>`;
    return;
  }
  el.innerHTML = notifs.map(n=>`
    <div class="np-item${n.read?'':' unread'}" onclick="readNotif(${n.id});renderDrawerNotifs();">
      <span class="np-unread-dot${n.read?' read':''}"></span>
      <div class="np-body">
        <div class="np-msg">${esc(n.msg)}</div>
        <div class="np-time">${esc(n.time)}</div>
      </div>
    </div>`).join('');
}

function toggleNotifMini() {
  closeBmMini();
  notifMiniOpen = !notifMiniOpen;
  const mini = document.getElementById('notif-mini');
  mini.classList.toggle('show', notifMiniOpen);
  if (notifMiniOpen) { renderMiniNotifs(); document.getElementById('panel-overlay').classList.add('on'); }
  else { document.getElementById('panel-overlay').classList.remove('on'); }
}

function openNotifDrawer() {
  closeAllMinis();
  renderDrawerNotifs();
  document.getElementById('notif-drawer').classList.add('open');
  document.getElementById('panel-overlay').classList.add('on');
}

function readNotif(id) {
  const n = notifs.find(x=>x.id===id); if(n) n.read=true;
  updateNotifBadge(); renderMiniNotifs();
}
function markAllRead() {
  notifs.forEach(n=>n.read=true);
  updateNotifBadge(); renderMiniNotifs(); renderDrawerNotifs();
}

/* ═══════════════════════════════════════════
   BOOKMARKS
═══════════════════════════════════════════ */
let bookmarks = bookmarksData.map((b,i)=>({...b,id:i}));
let bmMiniOpen = false;

function renderMiniBookmarks() {
  const el = document.getElementById('bm-mini-list');
  if (!bookmarks.length) {
    el.innerHTML=`<div class="bm-empty"><span class="bm-empty-icon">🔖</span><p>No bookmarks yet.<br/>Tap the bookmark button on any novel.</p></div>`;
    return;
  }
  el.innerHTML = bookmarks.slice(0,4).map(b=>`
    <a class="bm-item" href="${esc(b.href||'#')}" onclick="closeBmMini()">
      <div class="bm-cover" style="background:${esc(b.bg||'linear-gradient(160deg,#E8622A,#3B1A08)')}">
        ${esc(b.emoji||'📖')}
      </div>
      <div class="bm-info">
        <div class="bm-title">${esc(b.title)}</div>
        <div class="bm-meta">${esc(b.genre||'')}</div>
      </div>
      <button class="bm-remove" onclick="removeBookmark(event,${b.id})">✕</button>
    </a>`).join('');
}

function renderDrawerBookmarks() {
  const el = document.getElementById('bm-drawer-list');
  if (!bookmarks.length) {
    el.innerHTML=`<div class="np-empty"><span class="np-empty-icon">🔖</span><p>No bookmarks yet. Tap the bookmark button on any novel to save it here.</p></div>`;
    return;
  }
  el.innerHTML = bookmarks.map(b=>`
    <div class="bm-drawer-item" onclick="goToNovel('${esc(b.href||'#')}')">
      <div class="bm-drawer-cover" style="background:${esc(b.bg||'linear-gradient(160deg,#E8622A,#3B1A08)')}">
        ${esc(b.emoji||'📖')}
      </div>
      <div class="bm-drawer-info">
        <div class="bm-drawer-title">${esc(b.title)}</div>
        <div class="bm-drawer-meta">${esc(b.genre||'')}</div>
      </div>
      <button class="bm-drawer-remove" onclick="removeBookmarkDrawer(event,${b.id})">✕</button>
    </div>`).join('');
}

function goToNovel(href) {
  if (href && href !== '#') { window.location.href = href; }
  else { toast('Novel page coming soon!'); }
}

function removeBookmark(e, id) {
  e.preventDefault(); e.stopPropagation();
  bookmarks = bookmarks.filter(b=>b.id!==id);
  renderMiniBookmarks();
  toast('Bookmark removed');
}
function removeBookmarkDrawer(e, id) {
  e.stopPropagation();
  bookmarks = bookmarks.filter(b=>b.id!==id);
  renderDrawerBookmarks();
  toast('Bookmark removed');
}

function toggleBmMini() {
  closeNotifMini();
  bmMiniOpen = !bmMiniOpen;
  const mini = document.getElementById('bm-mini');
  mini.classList.toggle('show', bmMiniOpen);
  if (bmMiniOpen) { renderMiniBookmarks(); document.getElementById('panel-overlay').classList.add('on'); }
  else { document.getElementById('panel-overlay').classList.remove('on'); }
}

function openBmDrawer() {
  closeAllMinis();
  renderDrawerBookmarks();
  document.getElementById('bm-drawer').classList.add('open');
  document.getElementById('panel-overlay').classList.add('on');
}

function closeNotifMini() { notifMiniOpen=false; document.getElementById('notif-mini').classList.remove('show'); }
function closeBmMini()    { bmMiniOpen=false;    document.getElementById('bm-mini').classList.remove('show'); }
function closeDrawer(id)  { document.getElementById(id).classList.remove('open'); document.getElementById('panel-overlay').classList.remove('on'); }
function closeAllMinis()  { closeNotifMini(); closeBmMini(); }
function closeAllPanels() {
  closeAllMinis();
  document.getElementById('notif-drawer').classList.remove('open');
  document.getElementById('bm-drawer').classList.remove('open');
  document.getElementById('panel-overlay').classList.remove('on');
}

/* ═══════════════════════════════════════════
   SCREENS
═══════════════════════════════════════════ */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
function goHome() {
  closeSB(); closeAllPanels();
  showScreen('screen-app');
  document.getElementById('main-scroll')?.scrollTo({top:0,behavior:'smooth'});
}
function goSettings() {
  closeSB(); showScreen('screen-settings');
  const dark = document.documentElement.getAttribute('data-theme')==='dark';
  document.getElementById('theme-toggle').checked = dark;
  document.querySelector('#screen-settings .page-scroll').scrollTop = 0;
}
function goAbout() {
  closeSB();
  document.getElementById('fy2').textContent = new Date().getFullYear();
  showScreen('screen-about');
  document.querySelector('#screen-about .page-scroll').scrollTop = 0;
}
function openSB()  { document.getElementById('sidebar').classList.add('open');    document.getElementById('overlay').classList.add('on'); }
function closeSB() { document.getElementById('sidebar').classList.remove('open'); document.getElementById('overlay').classList.remove('on'); }

/* ═══════════════════════════════════════════
   TABS
═══════════════════════════════════════════ */
function swTab(name, btn) {
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('panel-'+name).classList.add('active');
  document.getElementById('main-scroll').scrollTo({top:0,behavior:'smooth'});
}
function swSub(name, btn) {
  document.querySelectorAll('.sub-tab').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.sub-panel').forEach(p=>p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('sub-'+name).classList.add('active');
}

/* ═══════════════════════════════════════════
   RENDER HELPERS
═══════════════════════════════════════════ */
function esc(s) {
  return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function nCard(n, badge='', bCls='new-b') {
  return `<div class="nc">
    <div class="nc-cov" style="background:${esc(n.bg||'linear-gradient(160deg,#E8622A,#3B1A08)')}">
      <div class="nc-ph">${esc(n.emoji||'📖')}</div>
      ${badge?`<span class="nc-b ${bCls}">${badge}</span>`:''}
    </div>
    <div class="nc-inf">
      <div class="nc-t">${esc(n.title)}</div>
      <div class="nc-m"><span class="nc-s">★</span> ${(n.rating||0).toFixed(1)} <span style="color:var(--carrot-pale)">•</span> ${esc(n.genre||'')}</div>
    </div></div>`;
}
function phCards(label, count=5) {
  return Array(count).fill(null).map(()=>`<div class="nc ph">
    <div class="nc-cov" style="background:linear-gradient(160deg,#555,#333)">
      <div class="nc-ph">📖</div><span class="nc-b ph-b">Soon</span>
    </div>
    <div class="nc-inf">
      <div class="nc-t" style="color:var(--text-faint)">${esc(label)}</div>
      <div class="nc-m" style="color:var(--text-faint)">— • —</div>
    </div></div>`).join('');
}
function emH(icon,title,msg,code='') {
  return `<div class="empty"><div class="empty-i">${icon}</div><h3>${title}</h3><p>${msg}</p>${code?`<code>${esc(code)}</code>`:''}</div>`;
}

/* ═══════════════════════════════════════════
   RENDER ALL
═══════════════════════════════════════════ */
function renderAll() {
  document.getElementById('fy').textContent = new Date().getFullYear();

  // Sub-tab carousels — show placeholder cards when empty
  const carDefs = [
    { id:'car-trending',  arr:trendingData,  ph:'Add Trending Novel',    badgeFn:(n,i)=>i===0?'🔥 Hot':'' },
    { id:'car-hot',       arr:hotPicksData,  ph:'Add Hot Pick',           badgeFn:(n,i)=>i===0?'⭐ Pick':'' },
    { id:'car-dojo',      arr:dojoDuelsData, ph:'Add Dojo Duel Novel',    badgeFn:()=>'' },
    { id:'car-frenzyyy',  arr:frenzyyyData,  ph:"Frenzyyy's Novel",       badgeFn:()=>'' },
  ];
  carDefs.forEach(({ id, arr, ph, badgeFn }) => {
    document.getElementById(id).innerHTML = arr.length
      ? arr.map((n,i) => nCard(n, badgeFn(n,i), i===0?'hot':'new-b')).join('')
      : phCards(ph, 5);
  });

  // What's New
  const newArr = novelsNew.filter(n=>n.isNew);
  document.getElementById('car-new').innerHTML = newArr.length
    ? newArr.map(n=>nCard(n,'New')).join('') : phCards('Coming Soon',4);
  document.getElementById('new-list').innerHTML = !newArr.length
    ? emH('🆕','No new titles yet','Set <strong>isNew: true</strong> on a novel in <strong>novelsNew</strong>.',
        `{ title:'My Novel', isNew: true, ... }`)
    : newArr.map(n=>`<div class="lc">
        <div class="lc-cov">${esc(n.emoji||'📖')}</div>
        <div class="lc-bd">
          <div class="lc-t">${esc(n.title)}</div>
          <div class="lc-d">${esc(n.description||'')}</div>
          <div class="tags"><span class="tag o">${esc(n.genre||'')}</span><span class="tag">${esc(n.status||'')}</span></div>
        </div></div>`).join('');

  // Updates
  document.getElementById('upd-list').innerHTML = !updatesData.length
    ? emH('🔄','No updates yet','Add objects to <strong>updatesData</strong> in the script.',
        `{ novelTitle:'My Novel', emoji:'📖',\n  chapter:5, chapterTitle:'The Beginning',\n  time:'2h ago' }`)
    : updatesData.map((u,i)=>`<div class="upd">
        <div class="upd-ico">${esc(u.emoji||'📖')}</div>
        <div class="upd-bd">
          <div class="upd-t">${esc(u.novelTitle)}${i<3?'<span class="np-pill">NEW</span>':''}</div>
          <div class="upd-s">Chapter ${u.chapter} — ${esc(u.chapterTitle||'')}</div>
        </div>
        <div class="upd-tm">${esc(u.time||'')}</div></div>`).join('');

  // Announcements
  const annEl = document.getElementById('ann-list');
  if (!announcementsData.length) {
    annEl.innerHTML = emH('📢','No announcements yet',
      'Add objects to <strong>announcementsData</strong> in the script.',
      `{ title:'Welcome!', body:'Platform is live.',\n  type:'new', date:'2026-04-03' }`);
  } else {
    const lbl={new:'✨ New',event:'🎉 Event',system:'⚙️ System'};
    annEl.innerHTML = announcementsData.map(a=>`<div class="ann">
      <span class="ann-tp ${esc(a.type||'new')}">${lbl[a.type]||'✨ New'}</span>
      <div class="ann-date">${esc(a.date||'')}</div>
      <h3>${esc(a.title)}</h3><p>${esc(a.body)}</p></div>`).join('');
  }
}

/* ═══════════════════════════════════════════
   UTILS
═══════════════════════════════════════════ */
function toast(msg, dur=2800) {
  const t=document.getElementById('toast');
  t.textContent=msg; t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),dur);
}
function stTop() { document.getElementById('main-scroll')?.scrollTo({top:0,behavior:'smooth'}); }

window.addEventListener('load',()=>{
  const s=document.getElementById('main-scroll');
  if(s) s.addEventListener('scroll',()=>document.getElementById('scrolltop').classList.toggle('on',s.scrollTop>240),{passive:true});
});
document.addEventListener('keydown', e=>{
  if(e.key==='Escape'){closeSB();closeAllPanels();}
});

/* ==============================================
   INIT
============================================== */
function init() {
  loadTheme();
  buildSlides();
  renderAll();
  updateNotifBadge();
}
document.addEventListener('DOMContentLoaded', init);