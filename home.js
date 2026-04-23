/*
Copyright © 2026 Frenzyyy. All Rights Reserved.
*/

// Hard failsafe
if (window._loaderFailsafe) clearTimeout(window._loaderFailsafe);
setTimeout(() => {
  const ls = document.getElementById('loading-screen');
  if (ls) { ls.style.transition = 'none'; ls.remove(); }
  const app = document.getElementById('screen-app');
  if (app) { app.style.display='flex'; app.classList.add('active'); }
}, 6000);

/* NOVEL CARD HELPERS */
function nCard(n, badge='', bCls='new-b') {
  const cl = n.novelId ? ` onclick="openNovel('${n.novelId}')" style="cursor:pointer"` : '';
  return `<div class="nc"${cl}>
    <div class="nc-cov" style="background:${safeCss(n.bg||'linear-gradient(160deg,#E8622A,#3B1A08)')}">
      ${coverHtml(n,'nc')}
      ${badge?`<span class="nc-b ${bCls}">${esc(badge)}</span>`:''}
    </div>
    <div class="nc-inf">
      <div class="nc-t">${esc(n.title)}</div>
      <div class="nc-m">${esc(n.genre||'')}</div>
    </div></div>`;
}
function phCards(label, count=5) {
  return Array(count).fill(null).map(()=>`<div class="nc ph">
    <div class="nc-cov" style="background:linear-gradient(160deg,#555,#333)">
      <div class="nc-ph">·</div><span class="nc-b ph-b">Soon</span>
    </div>
    <div class="nc-inf">
      <div class="nc-t" style="color:var(--text-faint)">${esc(label)}</div>
      <div class="nc-m" style="color:var(--text-faint)">— • —</div>
    </div></div>`).join('');
}
function emptySection(icon, msg) {
  return `<div class="sec-empty">
    <div class="sec-empty-icon">${icon}</div>
    <p class="sec-empty-msg">${msg}</p>
  </div>`;
}
function emH(icon,title,msg,code='') {
  return `<div class="empty"><div class="empty-i">${icon}</div><h3>${title}</h3><p>${msg}</p>${code?`<code>${esc(code)}</code>`:''}</div>`;
}
function skeletonCards(count = 4) {
  return `<div class="sk-wrap">${Array(count).fill(null).map(()=>`
    <div class="sk-card">
      <div class="sk-cov"></div>
      <div class="sk-inf"><div class="sk-line"></div><div class="sk-line short"></div></div>
    </div>`).join('')}</div>`;
}

/* HERO SLIDER */
let slideIdx=0, slideTimer=null, isAnim=false;
const SLIDE_MS = 5000;

function buildSlides() {
  const slides = heroSlides.slice(0, 5);
  if (!slides.length) {
    document.getElementById('hero-slider').innerHTML = `
      <div class="hero-slide hero-empty" style="background:linear-gradient(135deg,#2C1206 0%,#3B1A08 60%,#4A2210 100%)">
        <div class="slide-pat"></div>
        <div class="slide-body">
          <div class="slide-tag">Coming Soon</div>
          <h1>No Featured Stories Yet</h1>
          <p>The creator is probably dreaming up something amazing... or just taking a nap. Check back soon!</p>
          <div class="slide-acts">
            <span class="btn-decorative">Stay tuned</span>
          </div>
        </div>
      </div>`;
    return;
  }
  document.getElementById('hero-track').innerHTML = slides.map(s=>{
    const init = titleInitial(s.title);
    let slideCover;
    if (s.coverImg) {
      const safe = safeUrl(s.coverImg);
      if (safe && safe !== '#') {
        slideCover = `<div class="slide-cover-wrap">
          <img class="slide-cover" src="${safe}" alt="${esc(s.title)}" loading="lazy"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
          <div class="slide-initial" style="display:none">${esc(init)}</div>
        </div>`;
      } else {
        slideCover = `<div class="slide-cover-wrap"><div class="slide-initial">${esc(init)}</div></div>`;
      }
    } else {
      slideCover = `<div class="slide-cover-wrap"><div class="slide-initial">${esc(init)}</div></div>`;
    }
    return `
    <div class="hero-slide" style="background:${safeCss(s.bg)}">
      <div class="slide-pat"></div>
      ${(s.coverImg || s.novelId) ? slideCover : ''}
      <div class="slide-body">
        ${s.tag ? `<div class="slide-tag">${esc(s.tag)}</div>` : ''}
        ${s.title ? `<h1>${esc(s.title)}</h1>` : ''}
        ${s.description ? `<p>${esc(s.description)}</p>` : ''}
        ${(s.novelId || s.readHref) ? `<div class="slide-acts">
          ${s.novelId ? `<button class="btn-pri" onclick="openNovel('${s.novelId}')">▶ Read Now</button>` : `<a class="btn-pri" href="${safeUrl(s.readHref)}" rel="noopener noreferrer">▶ Read Now</a>`}
          ${(s.novelId && s.bookmark !== false) ? `<button class="btn-out slide-bm-btn" id="slide-bm-${s.novelId}" onclick="toggleSlideBookmark('${s.novelId}',this)">${bookmarks.some(b=>b.novelId===s.novelId)?'Saved':'Bookmark'}</button>` : ''}
        </div>` : ''}
      </div>
    </div>`;
  }).join('');
  document.getElementById('hero-dots').innerHTML = slides.map((_,i)=>
    `<button class="hero-dot${i===0?' active':''}" onclick="goSlide(${i})"></button>`).join('');
  goSlide(0);
  slideTimer = setInterval(()=>goSlide(slideIdx+1), SLIDE_MS);
}
function goSlide(idx) {
  const track = document.getElementById('hero-track');
  const bar   = document.getElementById('hero-progress');
  if (!track || !bar) { isAnim = false; return; }
  if (isAnim) return; isAnim = true;
  const total = Math.min(heroSlides.length, 5);
  if (!total) { isAnim = false; return; }
  slideIdx = ((idx % total) + total) % total;
  track.style.transform = `translateX(-${slideIdx * 100}%)`;
  document.querySelectorAll('.hero-dot').forEach((d,i)=>d.classList.toggle('active',i===slideIdx));
  setTimeout(()=>{ isAnim=false; }, 650);
  bar.style.transition='none'; bar.style.width='0%';
  void bar.offsetWidth;
  bar.style.transition=`width ${SLIDE_MS}ms linear`; bar.style.width='100%';
}
(function(){
  let tx=0;
  const sl = document.getElementById('hero-slider');
  if (!sl) return;
  sl.addEventListener('touchstart',e=>{tx=e.touches[0].clientX;},{passive:true});
  sl.addEventListener('touchend',e=>{
    if (!heroSlides.length) return;
    const dx=e.changedTouches[0].clientX-tx;
    if(Math.abs(dx)>40){clearInterval(slideTimer);goSlide(slideIdx+(dx<0?1:-1));slideTimer=setInterval(()=>goSlide(slideIdx+1),SLIDE_MS);}
  },{passive:true});
})();

/* NOTIFICATIONS */
let notifs = notificationsData.map((n,i)=>({ ...n, id: n.id !== undefined ? n.id : i }));
(function _loadNotifState(){
  try {
    const saved = LS.get('nl_notif_state');
    if (!saved) return;
    if (saved.cleared) { notifs = []; return; }
    if (Array.isArray(saved.readIds)) {
      notifs.forEach(n => { if (saved.readIds.includes(n.id)) n.read = true; });
    }
  } catch(e) {}
})();
function _saveNotifState() {
  try {
    if (notifs.length === 0) { LS.set('nl_notif_state', {cleared:true, readIds:[]}); return; }
    LS.set('nl_notif_state', { cleared:false, readIds: notifs.filter(n=>n.read).map(n=>n.id) });
  } catch(e) {}
}
let notifMiniOpen = false;

function unreadCount() { return notifs.filter(n=>!n.read).length; }

function updateNotifBadge() {
  const badge = document.getElementById('notif-badge');
  if (!badge) return;
  const cnt = unreadCount();
  badge.classList.toggle('hidden', cnt===0);
}

function renderMiniNotifs() {
  const el = document.getElementById('mini-list');
  if (!el) return;
  if (!notifs.length) {
    el.innerHTML = `<div style="padding:24px 16px;text-align:center;color:var(--text-muted);font-size:.83rem;">No notifications</div>`;
    return;
  }
  el.innerHTML = notifs.slice(0,4).map(n=>`
    <div class="mini-item${n.read?'':' unread'}" onclick="readNotif('${n.id}')">
      <span class="mini-dot${n.read?' read':''}"></span>
      <div><div class="mini-msg">${esc(n.msg)}</div><div class="mini-time">${esc(n.time)}</div></div>
    </div>`).join('');
}

function renderDrawerNotifs() {
  const el = document.getElementById('notif-drawer-list');
  const countEl = document.getElementById('notif-drawer-count');
  const unread = unreadCount();
  if (countEl) {
    if (notifs.length === 0) countEl.textContent = '';
    else if (unread > 0) countEl.textContent = unread + ' unread';
    else countEl.textContent = notifs.length + ' total';
  }
  if (!el) return;
  if (!notifs.length) {
    el.innerHTML = `<div class="np-empty"><p>No notifications yet.</p></div>`;
    return;
  }
  el.innerHTML = notifs.map(n=>`
    <div class="np-item${n.read?'':' unread'}" onclick="readNotif('${n.id}');renderDrawerNotifs();">
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
  if (!mini) return;
  mini.classList.toggle('show', notifMiniOpen);
  if (notifMiniOpen) { renderMiniNotifs(); }
}

function openNotifDrawer() {
  closeAllMinis();
  renderDrawerNotifs();
  document.getElementById('notif-drawer').classList.add('open');
  const ov = document.getElementById('panel-overlay');
  ov.classList.add('on');
  ov.classList.add('dimmed');
}

function readNotif(id) {
  const n = notifs.find(x => String(x.id) === String(id)); if(n) n.read=true;
  _saveNotifState(); updateNotifBadge(); renderMiniNotifs();
}
function markAllRead() {
  notifs.forEach(n=>n.read=true);
  _saveNotifState(); updateNotifBadge(); renderMiniNotifs(); renderDrawerNotifs();
}
function markAllReadDrawer() { markAllRead(); }
function clearAllNotifications() {
  notifs = [];
  _saveNotifState(); updateNotifBadge();
  renderMiniNotifs();
  renderDrawerNotifs();
  toast('Notifications cleared');
}

/* BOOKMARKS */
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
function _saveBookmarkState() {
  try { LS.set('nl_bookmarks', bookmarks); } catch(e) {}
}
function _nextBmId() { return String(_bmIdCtr++); }
let bmMiniOpen = false;

function renderMiniBookmarks() {
  const el = document.getElementById('bm-mini-list');
  if (!el) return;
  if (!bookmarks.length) {
    el.innerHTML=`<div class="bm-empty"><p>No bookmarks yet. Tap the bookmark button on any novel.</p></div>`;
    return;
  }
  el.innerHTML = bookmarks.slice(0,4).map(b=>{
    const init = titleInitial(b.title);
    const bg   = safeCss(b.bg||'linear-gradient(160deg,#E8622A,#3B1A08)');
    let bmInner;
    if (b.coverImg) {
      const safe = safeUrl(b.coverImg);
      bmInner = safe && safe !== '#'
        ? `<img class="bm-cover-img" src="${safe}" alt="${esc(b.title)}" loading="lazy"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
           <div class="bm-initial" style="display:none">${esc(init)}</div>`
        : `<div class="bm-initial">${esc(init)}</div>`;
    } else {
      bmInner = `<div class="bm-initial">${esc(init)}</div>`;
    }
    const bid = String(b.id);
    return `
    <div class="bm-item" style="cursor:pointer" onclick="if(!event._bmRemove){${b.novelId?`closeAllMinis();openNovel('${b.novelId}')`:'closeBmMini()'}}">
      <div class="bm-cover" style="background:${bg}">${bmInner}</div>
      <div class="bm-info">
        <div class="bm-title">${esc(b.title)}</div>
        <div class="bm-meta">${esc(b.genre||'')}</div>
      </div>
      <button class="bm-remove" onclick="event._bmRemove=true;event.stopPropagation();removeBookmark(event,'${bid}')">✕</button>
    </div>`;
  }).join('');
}

function renderDrawerBookmarks() {
  const el = document.getElementById('bm-drawer-list');
  const countEl = document.getElementById('bm-drawer-count');
  if (countEl) countEl.textContent = bookmarks.length > 0 ? bookmarks.length + ' saved' : '';
  if (!el) return;
  if (!bookmarks.length) {
    el.innerHTML=`<div class="np-empty"><p>No bookmarks yet. Tap a novel to save it here.</p></div>`;
    return;
  }
  el.innerHTML = bookmarks.map(b=>{
    const init = titleInitial(b.title);
    const bg   = safeCss(b.bg||'linear-gradient(160deg,#E8622A,#3B1A08)');
    let bmInner;
    if (b.coverImg) {
      const safe = safeUrl(b.coverImg);
      bmInner = safe && safe !== '#'
        ? `<img class="bm-drawer-cover-img" src="${safe}" alt="${esc(b.title)}" loading="lazy"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
           <div class="bm-drawer-initial" style="display:none">${esc(init)}</div>`
        : `<div class="bm-drawer-initial">${esc(init)}</div>`;
    } else {
      bmInner = `<div class="bm-drawer-initial">${esc(init)}</div>`;
    }
    return `
    <div class="bm-drawer-item" onclick="goToNovel('${esc(b.href||'#')}')">
      <div class="bm-drawer-cover" style="background:${bg}">${bmInner}</div>
      <div class="bm-drawer-info">
        <div class="bm-drawer-title">${esc(b.title)}</div>
        <div class="bm-drawer-meta">${esc(b.genre||'')}</div>
      </div>
      <button class="bm-drawer-remove" onclick="event.stopPropagation();removeBookmarkDrawer(event,'${String(b.id)}')">✕</button>
    </div>`;
  }).join('');
}

function goToNovel(href) {
  const url = safeUrl(href);
  if (url && url !== '#') { window.location.href = url; }
  else { toast('Novel page coming soon!'); }
}

function removeBookmark(e, id) {
  e.preventDefault(); e.stopPropagation();
  bookmarks = bookmarks.filter(b=>String(b.id)!==String(id));
  _saveBookmarkState(); renderMiniBookmarks(); renderDrawerBookmarks(); updateNotifBadge();
  toast('Bookmark removed');
}
function removeBookmarkDrawer(e, id) {
  e.stopPropagation();
  bookmarks = bookmarks.filter(b=>String(b.id)!==String(id));
  _saveBookmarkState(); renderMiniBookmarks(); renderDrawerBookmarks(); updateNotifBadge();
  toast('Bookmark removed');
}
function clearAllBookmarks() {
  if (!bookmarks.length) return;
  bookmarks = [];
  _saveBookmarkState();
  renderDrawerBookmarks();
  renderMiniBookmarks();
  toast('All bookmarks cleared');
}

function toggleBmMini() {
  closeNotifMini();
  bmMiniOpen = !bmMiniOpen;
  const mini = document.getElementById('bm-mini');
  if (!mini) return;
  mini.classList.toggle('show', bmMiniOpen);
  if (bmMiniOpen) { renderMiniBookmarks(); }
}

function openBmDrawer() {
  closeAllMinis();
  renderDrawerBookmarks();
  document.getElementById('bm-drawer').classList.add('open');
  const ov = document.getElementById('panel-overlay');
  ov.classList.add('on');
  ov.classList.add('dimmed');
}

function toggleSlideBookmark(novelId, btn) {
  const nd = novelDetails[novelId];
  if (!nd) return;
  const idx = bookmarks.findIndex(b=>b.novelId===novelId);
  if (idx >= 0) {
    bookmarks.splice(idx,1);
    toast('Bookmark removed');
  } else {
    bookmarks.push({ id:_nextBmId(), novelId:nd.id, title:nd.title, emoji:nd.emoji, bg:nd.bg, genre:(nd.genres||[nd.genre||''])[0], href:'#', coverImg:nd.coverImg||'' });
    toast('Bookmarked!');
  }
  _saveBookmarkState(); renderMiniBookmarks(); renderDrawerBookmarks(); updateNotifBadge();
  document.querySelectorAll('.slide-bm-btn').forEach(b=>{
    const nid = b.id.replace('slide-bm-','');
    const active = bookmarks.some(bm=>bm.novelId===nid);
    b.textContent = active ? 'Saved' : 'Bookmark';
    b.style.opacity = active ? '.8' : '';
  });
}

function closeNotifMini() { notifMiniOpen=false; const el=document.getElementById('notif-mini'); if(el) el.classList.remove('show'); }
function closeBmMini()    { bmMiniOpen=false;    const el=document.getElementById('bm-mini');    if(el) el.classList.remove('show'); }

function closeDrawer(id) {
  document.getElementById(id)?.classList.remove('open');
  // Only remove on if no other drawer is still open
  const anyOpen = ['notif-drawer','bm-drawer'].some(d => document.getElementById(d)?.classList.contains('open'));
  if (!anyOpen) {
    const ov = document.getElementById('panel-overlay');
    if (ov) { ov.classList.remove('on'); ov.classList.remove('dimmed'); }
  }
}
function closeAllMinis()  { closeNotifMini(); closeBmMini(); }
function closeAllPanels() {
  closeAllMinis();
  document.getElementById('notif-drawer')?.classList.remove('open');
  document.getElementById('bm-drawer')?.classList.remove('open');
  const ov = document.getElementById('panel-overlay');
  if (ov) { ov.classList.remove('on'); ov.classList.remove('dimmed'); }
}

/* SIDEBAR */
function openSB()  { document.getElementById('sidebar')?.classList.add('open');    document.getElementById('overlay')?.classList.add('on'); }
function closeSB() { document.getElementById('sidebar')?.classList.remove('open'); document.getElementById('overlay')?.classList.remove('on'); }

/* TABS */
let lastTab = 'home';

function swTab(name, btn) {
  lastTab = name;
  LS.set('nl_tab', name);
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('panel-'+name).classList.add('active');
  document.getElementById('main-scroll').scrollTo({top:0,behavior:'instant'});
}

/* RENDER ALL */
function renderAll() {
  document.getElementById('fy').textContent = new Date().getFullYear();

  const carDefs = [
    { id:'car-trending', arr:trendingData,  badgeFn:(n,i)=>i===0?'Hot':'',       empty: emptySection('', "Nothing here yet — check back soon.") },
    { id:'car-hot',      arr:hotPicksData,  badgeFn:(n,i)=>i===0?'Pick':'',      empty: emptySection('', "No hot picks at the moment — check back soon.") },
    { id:'car-frenzyyy', arr:frenzyyyData,  badgeFn:(n,i)=>i===0?'Exclusive':'', empty: emptySection('', "Nothing from Frenzyyy yet — coming soon.") },
  ];
  carDefs.forEach(({ id, arr, badgeFn, empty }, defIdx) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (arr.length) {
      el.classList.remove('hidden');
      el.innerHTML = arr.map((n,i) => nCard(n, badgeFn(n,i), i===0?'hot':'new-b')).join('');
    } else {
      el.classList.add('hidden');
      const skId = 'sk-' + id;
      el.insertAdjacentHTML('afterend', `<div id="${skId}">${skeletonCards(4)}</div>`);
      const delay = 500 + defIdx * 180 + Math.random() * 300;
      setTimeout(() => { document.getElementById(skId)?.remove(); el.insertAdjacentHTML('afterend', empty); }, delay);
    }
  });

  const newArr = novelsNew.filter(n => n.isNew === true);
  const carNew = document.getElementById('car-new');
  const newList = document.getElementById('new-list');
  if (newArr.length) {
    if (carNew) { carNew.classList.remove('hidden'); carNew.innerHTML = newArr.map(n => nCard(n, 'New')).join(''); }
    if (newList) newList.innerHTML = newArr.map(n=>{
      const init = titleInitial(n.title);
      const bg   = safeCss(n.bg||'linear-gradient(160deg,#E8622A,#3B1A08)');
      let lcInner;
      if (n.coverImg) {
        const safe = safeUrl(n.coverImg);
        lcInner = safe && safe !== '#'
          ? `<img class="lc-cov-img" src="${safe}" alt="${esc(n.title)}" loading="lazy"
               onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
             <div class="lc-initial" style="display:none">${esc(init)}</div>`
          : `<div class="lc-initial">${esc(init)}</div>`;
      } else { lcInner = `<div class="lc-initial">${esc(init)}</div>`; }
      const lcClick = n.novelId ? ` onclick="openNovel('${n.novelId}')" style="cursor:pointer"` : '';
      return `<div class="lc"${lcClick}>
        <div class="lc-cov" style="background:${bg}">${lcInner}</div>
        <div class="lc-bd">
          <div class="lc-t">${esc(n.title)}</div>
          <div class="lc-d">${esc(n.description||'')}</div>
          <div class="tags"><span class="tag o">${esc(n.genre||'')}</span><span class="tag">${esc(n.status||'')}</span></div>
        </div></div>`;
    }).join('');
  } else {
    if (carNew) carNew.classList.add('hidden');
    if (newList) {
      const skNewId = 'sk-car-new';
      newList.insertAdjacentHTML('beforebegin', `<div id="${skNewId}">${skeletonCards(3)}</div>`);
      setTimeout(() => { document.getElementById(skNewId)?.remove(); newList.innerHTML = emptySection('', "Nothing new yet — fresh titles coming soon."); }, 700 + Math.random() * 400);
    }
  }

  const updBookList = document.getElementById('upd-book-list');
  if (updBookList) {
    if (bookUpdatesData.length) {
      updBookList.innerHTML = bookUpdatesData.map((u, i) => {
        const clickAttr = u.novelId ? ` onclick="openNovel('${esc(u.novelId)}')" style="cursor:pointer"` : '';
        return `<div class="upd"${clickAttr}>
          <div class="upd-ico">${esc((u.novelTitle||'N')[0])}</div>
          <div class="upd-bd">
            <div class="upd-t">${esc(u.novelTitle)}${i===0?'<span class="np-pill">NEW</span>':''}</div>
            <div class="upd-s">${esc(u.bookTitle||'')}${u.description?' — '+esc(u.description):''}</div>
          </div>
          <div class="upd-tm">${esc(u.time||'')}</div></div>`;
      }).join('');
    } else {
      updBookList.innerHTML = emptySection('', "No book updates yet — check back soon.");
    }
  }

  const updVolList = document.getElementById('upd-vol-list');
  if (updVolList) {
    if (volumeUpdatesData.length) {
      updVolList.innerHTML = volumeUpdatesData.map((u, i) => {
        const clickAttr = u.novelId ? ` onclick="openNovel('${esc(u.novelId)}')" style="cursor:pointer"` : '';
        return `<div class="upd"${clickAttr}>
          <div class="upd-ico">${esc((u.novelTitle||'N')[0])}</div>
          <div class="upd-bd">
            <div class="upd-t">${esc(u.novelTitle)}${i===0?'<span class="np-pill">NEW</span>':''}</div>
            <div class="upd-s">Vol. ${safeNum(u.volumeNumber,0)|0} — ${esc(u.volumeTitle||'')}${u.description?' · '+esc(u.description):''}</div>
          </div>
          <div class="upd-tm">${esc(u.time||'')}</div></div>`;
      }).join('');
    } else {
      updVolList.innerHTML = emptySection('', "No volume updates yet — new arcs on the way.");
    }
  }

  const updList = document.getElementById('upd-list');
  if (updList) {
    if (updatesData.length) {
      updList.innerHTML = updatesData.map((u,i)=>{
        const chNum = safeNum(u.chapter, 0)|0;
        const clickAttr = u.novelId ? ` onclick="openChapter('${esc(u.novelId)}',${chNum})" style="cursor:pointer"` : '';
        return `<div class="upd"${clickAttr}>
          <div class="upd-ico">${esc((u.novelTitle||'N')[0])}</div>
          <div class="upd-bd">
            <div class="upd-t">${esc(u.novelTitle)}${i<3?'<span class="np-pill">NEW</span>':''}</div>
            <div class="upd-s">Chapter ${chNum} — ${esc(u.chapterTitle||'')}</div>
          </div>
          <div class="upd-tm">${esc(u.time||'')}</div></div>`;
      }).join('');
    } else {
      updList.innerHTML = emptySection('', "No chapter updates yet — check back soon.");
    }
  }

  const annEl = document.getElementById('ann-list');
  if (annEl) {
    if (announcementsData.length) {
      const ALLOWED_TYPES = ['new', 'event', 'system'];
      const lbl = { new:'New', event:'Event', system:'System' };
      annEl.innerHTML = announcementsData.map(a => {
        const type = safeChoice(a.type, ALLOWED_TYPES, 'new');
        const clickAttr = a.novelId ? ` onclick="openNovel('${esc(a.novelId)}')" style="cursor:pointer"` : '';
        return `<div class="ann"${clickAttr}>
          <span class="ann-tp ${type}">${lbl[type]}</span>
          <div class="ann-date">${esc(a.date||'')}</div>
          <h3>${esc(a.title)}</h3><p>${esc(a.body)}</p></div>`;
      }).join('');
    } else {
      annEl.innerHTML = emptySection('', "No announcements yet — check back soon.");
    }
  }
}

/* SCROLL TOP */
function stTop() {
  const activeScreen = document.querySelector('.screen.active');
  if (!activeScreen || activeScreen.id === 'screen-app') {
    document.getElementById('main-scroll')?.scrollTo({top:0,behavior:'smooth'});
  } else {
    // Scroll the page-scroll inside whichever screen is active
    activeScreen.querySelector('.page-scroll')?.scrollTo({top:0,behavior:'smooth'});
  }
}

/* EVENT LISTENERS */
window.addEventListener('load',()=>{
  const s=document.getElementById('main-scroll');
  if(s) {
    s.addEventListener('scroll',()=>{
      // Only show the scrolltop button when home screen is active
      const onHome = document.getElementById('screen-app')?.classList.contains('active');
      document.getElementById('scrolltop').classList.toggle('on', onHome && s.scrollTop > 240);
    },{passive:true});
    s.addEventListener('scroll',()=>LS.set('nl_scroll', s.scrollTop),{passive:true});
  }
});
document.addEventListener('keydown', e=>{
  if(e.key==='Escape'){closeSB();closeAllPanels();}
});
document.addEventListener('click', e => {
  const notifMini = document.getElementById('notif-mini');
  const bmMini    = document.getElementById('bm-mini');
  const notifBtn  = document.getElementById('notif-btn');
  const bmBtn     = document.getElementById('bm-btn');
  if (notifMini && notifBtn && notifMiniOpen && !notifMini.contains(e.target) && !notifBtn.contains(e.target)) closeNotifMini();
  if (bmMini && bmBtn && bmMiniOpen && !bmMini.contains(e.target) && !bmBtn.contains(e.target)) closeBmMini();
}, true);

/* ── IN-PAGE NAVIGATION ── */

// Single nav lock — prevents ghost clicks / double-fires for 350ms after any nav action
let _navLock = false;
function _navigate(screenId, afterFn) {
  if (_navLock) return;
  _navLock = true;
  setTimeout(() => { _navLock = false; }, 350);

  // Force-nuke every overlay/panel/mini regardless of state
  document.getElementById('sidebar')?.classList.remove('open');
  document.getElementById('overlay')?.classList.remove('on');
  const pov = document.getElementById('panel-overlay');
  if (pov) { pov.classList.remove('on', 'dimmed'); }
  document.getElementById('notif-drawer')?.classList.remove('open');
  document.getElementById('bm-drawer')?.classList.remove('open');
  document.getElementById('notif-mini')?.classList.remove('show');
  document.getElementById('bm-mini')?.classList.remove('show');
  notifMiniOpen = false;
  bmMiniOpen = false;

  // Close novel modal unless we're explicitly opening it
  if (screenId !== '__modal__') {
    const nm = document.getElementById('novel-modal');
    if (nm) { nm.classList.remove('open'); document.body.style.overflow = ''; currentNovelId = null; }
  }

  showScreen(screenId);

  // Sync active state on sidebar links
  const linkMap = {
    'screen-app':       'sbl-home',
    'screen-settings':  'sbl-settings',
    'screen-about':     'sbl-about',
    'screen-tos':       'sbl-tos',
    'screen-changelog': 'sbl-changelog',
  };
  document.querySelectorAll('.sb-link').forEach(b => b.classList.remove('active'));
  const activeLink = linkMap[screenId];
  if (activeLink) document.getElementById(activeLink)?.classList.add('active');

  // Hide scrolltop button unless returning to home
  if (screenId !== 'screen-app') {
    document.getElementById('scrolltop')?.classList.remove('on');
  }
  if (typeof afterFn === 'function') afterFn();
}

function goSettings() {
  _navigate('screen-settings', () => {
    setTheme(document.documentElement.getAttribute('data-theme-source') === 'system'
      ? 'system' : (LS.get('nl_theme') || 'system'));
    restoreReadingPrefs();
    const novelListEl = document.getElementById('settings-novel-list');
    if (novelListEl) {
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
    document.querySelector('#screen-settings .page-scroll')?.scrollTo({top:0,behavior:'instant'});
  });
}

function goAbout() {
  _navigate('screen-about', () => {
    const fy2 = document.getElementById('fy2');
    if (fy2) fy2.textContent = new Date().getFullYear();
    document.querySelector('#screen-about .page-scroll')?.scrollTo({top:0,behavior:'instant'});
  });
}

function goTos() {
  _navigate('screen-tos', () => {
    const fyTos = document.getElementById('fy-tos');
    if (fyTos) fyTos.textContent = new Date().getFullYear();
    document.querySelector('#screen-tos .page-scroll')?.scrollTo({top:0,behavior:'instant'});
  });
}

function goChangelog() {
  _navigate('screen-changelog', () => {
    const fy3 = document.getElementById('fy3');
    if (fy3) fy3.textContent = new Date().getFullYear();
    document.querySelector('#screen-changelog .page-scroll')?.scrollTo({top:0,behavior:'instant'});
  });
}

// Override utils.js goHome() with nav-locked version
function goHome() {
  if (!document.getElementById('screen-app')) { window.location.href = 'index.html'; return; }
  _navigate('screen-app', () => {
    const tab = typeof lastTab !== 'undefined' ? lastTab : 'home';
    const savedBtn = document.querySelector(`.tab-btn[data-tab="${tab}"]`);
    if (savedBtn) {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      savedBtn.classList.add('active');
      document.getElementById('panel-' + tab)?.classList.add('active');
    }
    document.getElementById('main-scroll')?.scrollTo({top:0,behavior:'instant'});
  });
}

/* ── NOVEL MODAL ── */
let currentNovelId = null;

function openNovelModal(novelId) {
  const nd = novelDetails[novelId];
  if (!nd) { toast('Novel not found'); return; }
  if (_navLock) return;
  _navLock = true;
  setTimeout(() => { _navLock = false; }, 350);

  // Force-clear all panels before opening modal
  const pov = document.getElementById('panel-overlay');
  if (pov) { pov.classList.remove('on', 'dimmed'); }
  document.getElementById('notif-mini')?.classList.remove('show');
  document.getElementById('bm-mini')?.classList.remove('show');
  notifMiniOpen = false;
  bmMiniOpen = false;

  currentNovelId = novelId;
  LS.set('nl_current_novel', novelId);
  _renderNovelPage(nd);
  document.getElementById('novel-modal').classList.add('open');
  document.getElementById('novel-scroll')?.scrollTo({top:0,behavior:'instant'});
  document.body.style.overflow = 'hidden';
}

function closeNovelModal() {
  if (_navLock) return;
  _navLock = true;
  setTimeout(() => { _navLock = false; }, 350);
  document.getElementById('novel-modal').classList.remove('open');
  document.body.style.overflow = '';
  currentNovelId = null;
}

function _refreshNovelBmBtn() {
  const btn = document.getElementById('novel-bm-btn');
  if (btn && currentNovelId) {
    const active = bookmarks.some(b => b.novelId === currentNovelId);
    btn.classList.toggle('bm-active', active);
    btn.textContent = active ? 'Saved' : 'Save';
  }
}

function toggleNovelBookmark(novelId) {
  const nd = novelDetails[novelId];
  if (!nd) return;
  const idx = bookmarks.findIndex(b => b.novelId === novelId);
  if (idx >= 0) {
    bookmarks.splice(idx, 1);
    toast('Bookmark removed');
  } else {
    bookmarks.push({ id: _nextBmId(), novelId: nd.id, title: nd.title, emoji: nd.emoji, bg: nd.bg, genre: (nd.genres||[nd.genre||''])[0], href: '#', coverImg: nd.coverImg||'' });
    toast('Bookmarked!');
  }
  _saveBookmarkState(); renderMiniBookmarks(); renderDrawerBookmarks(); updateNotifBadge(); _refreshNovelBmBtn();
}

function toggleVol(vi) {
  const hdr = document.getElementById('vol-hdr-' + vi);
  const chs = document.getElementById('vol-chs-' + vi);
  if (!hdr || !chs) return;
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

function _renderNovelPage(nd) {
  document.getElementById('novel-nav-title').textContent = nd.title;

  const prog    = _getNovelProgress(nd.id);
  const totalCh = nd.volumes.reduce((s,v) => s + v.chapters.length, 0);
  const bm      = bookmarks.find(b => b.novelId === nd.id);
  const bmActive= bm ? 'bm-active' : '';
  const init    = titleInitial(nd.title);

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

  const statusCls  = nd.status === 'Ongoing' ? 'chip-status-ongoing' : 'chip-status-completed';
  const genreChips = (nd.genres||[nd.genre||'']).map(g => `<span class="novel-meta-chip chip-genre">${esc(g)}</span>`).join('');

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
          <button class="novel-action-btn pri" onclick="openChapter('${esc(nd.id)}',${continueChNum},'modal')">${continueLabel}</button>
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
    credits += prog.read.includes(ch.number) ? 1 : _getChapterPct(nd.id, ch.number) / 100;
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
      <div class="novel-progress-fill" style="width:${pct}%"></div>
    </div>`;

  let volsHtml = '<div class="volumes-section-lbl">Volumes &amp; Chapters</div>';
  nd.volumes.forEach((vol, vi) => {
    const chHtml = vol.chapters.map(ch => {
      const isRead     = prog.read.includes(ch.number);
      const chPct      = isRead ? 100 : _getChapterPct(nd.id, ch.number);
      const isNew      = ch.number === totalCh;
      const showBar    = !isRead && chPct > 0;
      const numDisplay = isRead ? '✓' : (showBar ? Math.round(chPct)+'%' : ch.number);
      const progBar    = showBar ? `
        <div class="ch-prog-wrap">
          <div class="ch-prog-bar"><div class="ch-prog-fill" style="width:${chPct}%"></div></div>
          <div class="ch-prog-pct">${Math.round(chPct)}% read</div>
        </div>` : '';
      return `<div class="ch-row${isRead?' read':''}" onclick="openChapter('${esc(nd.id)}',${ch.number},'modal')">
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

/* HOME INIT */
(async function init() {
  try {
    Loader.setP(8, 'Starting up…');
    await Loader.wait(120);

    Loader.setP(18, 'Applying theme…');
    try { loadTheme(); } catch(e) { console.error('theme err', e); }
    await Loader.wait(140);

    Loader.setP(30, 'Restoring your preferences…');
    try { restoreReadingPrefs(); } catch(e) { console.error('prefs err', e); }
    await Loader.wait(160);

    Loader.setP(46, 'Loading featured stories…');
    try { buildSlides(); } catch(e) { console.error('slides err', e); }
    await Loader.wait(200);

    Loader.setP(64, 'Building your library…');
    try { renderAll(); } catch(e) { console.error('renderAll err', e); }
    await Loader.wait(180);

    Loader.setP(78, 'Loading bookmarks & notifications…');
    try { updateNotifBadge(); } catch(e) { console.error('badge err', e); }
    await Loader.wait(160);

    Loader.setP(90, 'Restoring your session…');
    await Loader.wait(120);

    try {
      const savedScreen = LS.get('nl_screen');
      const savedTab    = LS.get('nl_tab');
      const savedScroll = LS.get('nl_scroll');

      // Restore in-page screens (settings, about, tos, changelog)
      const inPageScreens = ['screen-settings','screen-about','screen-tos','screen-changelog'];
      if (savedScreen && inPageScreens.includes(savedScreen) && document.getElementById(savedScreen)) {
        if (savedScreen === 'screen-settings') goSettings();
        else if (savedScreen === 'screen-about') goAbout();
        else if (savedScreen === 'screen-tos') goTos();
        else if (savedScreen === 'screen-changelog') goChangelog();
      } else {
        showScreen('screen-app');
      }

      if (savedTab) {
        lastTab = savedTab;
        const savedBtn = document.querySelector(`.tab-btn[data-tab="${savedTab}"]`);
        if (savedBtn) {
          document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
          document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
          savedBtn.classList.add('active');
          document.getElementById('panel-' + savedTab)?.classList.add('active');
        }
      }

      if (savedScroll) {
        requestAnimationFrame(() => {
          setTimeout(() => {
            document.getElementById('main-scroll')?.scrollTo({ top: savedScroll, behavior: 'instant' });
          }, 80);
        });
      }
    } catch(e) { console.error('Session restore error:', e); }

    Loader.setP(96, 'Almost ready…');
    const si = document.getElementById('search-input');
    if (si) {
      si.addEventListener('input', e => {
        const q = e.target.value.trim().toLowerCase();
        const hero = document.getElementById('hero-slider');
        if (hero) hero.style.display = q ? 'none' : '';
        document.querySelectorAll('.nc').forEach(card => {
          const title = (card.querySelector('.nc-t')?.textContent || '').toLowerCase();
          card.style.display = (!q || title.includes(q)) ? '' : 'none';
        });
        document.querySelectorAll('.cw').forEach(cw => {
          if (!q) { cw.style.display = ''; return; }
          const hasVisible = [...cw.querySelectorAll('.nc')].some(c => c.style.display !== 'none');
          cw.style.display = hasVisible ? '' : 'none';
        });
      });
    }

    Loader.setP(100, 'Welcome!');
  } catch(e) {
    console.error('NovéLore init error:', e);
  } finally {
    // Always dismiss the loading screen, even if something went wrong above
    try { await Loader.dismiss(); } catch(e) {
      const ls = document.getElementById('loading-screen');
      if (ls) { ls.style.transition='none'; ls.remove(); }
    }
    // After loading screen is gone, check if returning from reader with a novel to reopen
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const reopen = urlParams.get('reopen');
      if (reopen && novelDetails && novelDetails[reopen]) {
        openNovelModal(reopen);
        // Clean up the URL param without reloading the page
        const cleanUrl = window.location.pathname;
        history.replaceState(null, '', cleanUrl);
      }
    } catch(e) {}
  }
})();

/* ── SEE-ALL MODAL ──────────────────────────────────────────────────────── */
(function () {

  const SECTION_META = {
    trending:    { title: 'Trending',         type: 'grid',   getData: () => trendingData,      badgeFn: (n,i) => i===0 ? 'Hot'       : '', badgeCls: (n,i) => i===0 ? 'hot' : 'new-b' },
    hot:         { title: 'Hot Picks',         type: 'grid',   getData: () => hotPicksData,      badgeFn: (n,i) => i===0 ? 'Pick'      : '', badgeCls: (n,i) => i===0 ? 'hot' : 'new-b' },
    frenzyyy:    { title: "Frenzyyy's Work",   type: 'grid',   getData: () => frenzyyyData,      badgeFn: (n,i) => i===0 ? 'Exclusive' : '', badgeCls: (n,i) => i===0 ? 'hot' : 'new-b' },
    new:         { title: "What's New",        type: 'list-lc',getData: () => novelsNew.filter(n => n.isNew === true) },
    'upd-book':  { title: 'Book Updates',      type: 'list-upd',getData: () => bookUpdatesData  },
    'upd-vol':   { title: 'Volume Updates',    type: 'list-upd',getData: () => volumeUpdatesData },
    'upd-chapter':{ title: 'Chapter Updates',  type: 'list-upd',getData: () => typeof updatesData !== 'undefined' ? updatesData : [] },
    announce:    { title: 'Announcements',     type: 'list-ann',getData: () => typeof announcementsData !== 'undefined' ? announcementsData : [] },
  };

  // nCard variant that closes see-all modal before opening the novel
  function saCard(n, badge='', bCls='new-b') {
    const cl = n.novelId ? ` onclick="closeSeeAll();openNovel('${n.novelId}')" style="cursor:pointer"` : '';
    return `<div class="nc"${cl}>
    <div class="nc-cov" style="background:${safeCss(n.bg||'linear-gradient(160deg,#E8622A,#3B1A08)')}">
      ${coverHtml(n,'nc')}
      ${badge?`<span class="nc-b ${bCls}">${esc(badge)}</span>`:''}
    </div>
    <div class="nc-inf">
      <div class="nc-t">${esc(n.title)}</div>
      <div class="nc-m">${esc(n.genre||'')}</div>
    </div></div>`;
  }

  function buildGrid(arr, meta) {
    if (!arr.length) return `<div class="sa-empty">Nothing to see here yet.</div>`;
    return `<div class="sa-grid">${arr.map((n, i) => saCard(n, meta.badgeFn(n,i), meta.badgeCls(n,i))).join('')}</div>`;
  }

  function buildListLc(arr) {
    if (!arr.length) return `<div class="sa-empty">Nothing to see here yet.</div>`;
    return `<div class="sa-list">${arr.map(n => {
      const init = titleInitial(n.title);
      const bg   = safeCss(n.bg || 'linear-gradient(160deg,#E8622A,#3B1A08)');
      let lcInner;
      if (n.coverImg) {
        const safe = safeUrl(n.coverImg);
        lcInner = safe && safe !== '#'
          ? `<img class="lc-cov-img" src="${safe}" alt="${esc(n.title)}" loading="lazy"
               onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
             <div class="lc-initial" style="display:none">${esc(init)}</div>`
          : `<div class="lc-initial">${esc(init)}</div>`;
      } else { lcInner = `<div class="lc-initial">${esc(init)}</div>`; }
      const cl = n.novelId ? ` onclick="closeSeeAll();openNovel('${esc(n.novelId)}')" style="cursor:pointer"` : '';
      return `<div class="lc"${cl}>
        <div class="lc-cov" style="background:${bg}">${lcInner}</div>
        <div class="lc-bd">
          <div class="lc-t">${esc(n.title)}</div>
          <div class="lc-d">${esc(n.description||'')}</div>
          <div class="tags"><span class="tag o">${esc(n.genre||'')}</span><span class="tag">${esc(n.status||'')}</span></div>
        </div></div>`;
    }).join('')}</div>`;
  }

  function buildListUpd(arr) {
    if (!arr.length) return `<div class="sa-empty">Nothing to see here yet.</div>`;
    return `<div class="sa-list">${arr.map((u, i) => {
      const clickAttr = u.novelId ? ` onclick="closeSeeAll();openNovel('${esc(u.novelId)}')" style="cursor:pointer"` : '';
      // detect type: chapter has u.chapter, volume has u.volumeNumber, book has u.bookTitle
      let sub = '';
      if (u.chapterTitle) sub = esc(u.chapterTitle);
      else if (u.volumeTitle) sub = `Vol. ${esc(String(u.volumeNumber||''))} — ${esc(u.volumeTitle)}${u.description ? ' — ' + esc(u.description) : ''}`;
      else sub = esc(u.bookTitle||'') + (u.description ? ' — ' + esc(u.description) : '');
      return `<div class="upd"${clickAttr}>
        <div class="upd-ico">${esc((u.novelTitle||'N')[0])}</div>
        <div class="upd-bd">
          <div class="upd-t">${esc(u.novelTitle)}${i===0 ? '<span class="np-pill">NEW</span>' : ''}</div>
          <div class="upd-s">${sub}</div>
        </div>
        <div class="upd-tm">${esc(u.time||'')}</div></div>`;
    }).join('')}</div>`;
  }

  function buildListAnn(arr) {
    if (!arr.length) return `<div class="sa-empty">Nothing to see here yet.</div>`;
    return `<div class="sa-list">${arr.map(a => {
      const cl = a.novelId ? ` onclick="closeSeeAll();openNovel('${esc(a.novelId)}')" style="cursor:pointer"` : '';
      return `<div class="ann"${cl}>
        <div class="ann-date">${esc(a.date||'')}</div>
        <h3>${esc(a.title)}</h3>
        <p>${esc(a.body||'')}</p>
        ${a.type ? `<span class="ann-tp ${esc(a.type)}">${esc(a.type)}</span>` : ''}
      </div>`;
    }).join('')}</div>`;
  }

  window.openSeeAll = function (key) {
    const meta = SECTION_META[key];
    if (!meta) return;
    const arr  = meta.getData();

    document.getElementById('sa-title-text').textContent = meta.title;
    document.getElementById('sa-count-badge').textContent = arr.length + (arr.length === 1 ? ' title' : ' total');

    let html = '';
    if      (meta.type === 'grid')      html = buildGrid(arr, meta);
    else if (meta.type === 'list-lc')   html = buildListLc(arr);
    else if (meta.type === 'list-upd')  html = buildListUpd(arr);
    else if (meta.type === 'list-ann')  html = buildListAnn(arr);

    const body = document.getElementById('sa-body');
    body.innerHTML = html;
    body.scrollTop = 0;

    const modal = document.getElementById('see-all-modal');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  window.closeSeeAll = function () {
    document.getElementById('see-all-modal')?.classList.remove('open');
    document.body.style.overflow = '';
  };

  // Close on swipe-down
  (function attachSwipe() {
    const modal = document.getElementById('see-all-modal');
    if (!modal) return;
    let startY = 0;
    modal.addEventListener('touchstart', e => { startY = e.touches[0].clientY; }, { passive: true });
    modal.addEventListener('touchend', e => {
      const dy = e.changedTouches[0].clientY - startY;
      if (dy > 80) closeSeeAll();
    }, { passive: true });
  })();

})();
