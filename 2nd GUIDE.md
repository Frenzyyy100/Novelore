# NovéLore — Developer Guide
*Everything you need to know to edit, add to, and maintain the code.*

---

## What the file is

The entire app lives in **one HTML file**. It has three sections:

1. **`<style>`** — All the CSS (colours, layout, sizes)
2. **`<body>`** — All the HTML (loading screen, panels, screens)
3. **`<script>`** — All the JavaScript (data, logic, interactions)

There is no server, no database, no build step. Open the file in a browser and it works.

---

## Colour System (CSS Variables)

At the top of the `<style>` block you'll find the colour palette. You never have to hunt for a hex code — just use the variable name anywhere in the CSS.

```
--carrot        #E8622A   Main orange-red (buttons, accents, active states)
--carrot-deep   #C44B1A   Darker carrot (hover states)
--carrot-light  #F4924A   Lighter carrot (logo highlights)
--carrot-pale   #FDDBB8   Very pale carrot (light text on dark bg)
--amber         #F5B942   Gold/yellow (logo, headings, stars)
```

The colours that **change between dark and light mode** are defined inside `[data-theme="dark"]` and `[data-theme="light"]` blocks:

```
--bg            Page background
--bg-card       Card/panel background
--bg-elevated   Slightly raised surface (chips, inputs)
--border        Faint divider lines
--border-mid    Slightly stronger divider
--text-main     Primary body text
--text-muted    Secondary/label text
--text-faint    Placeholder/disabled text
--nav-bg        Top navigation bar background
--tab-bg        Tab bar background
--panel-bg      Side drawers and popups background
```

**To change a colour:** Find it in `:root` (for fixed colours) or in the `[data-theme]` blocks (for theme-aware colours) and update the hex value.

---

## Theme (Dark / Light Mode)

### How it works
- The `<html>` tag has a `data-theme` attribute, e.g. `data-theme="dark"`
- An **inline `<script>` in `<head>`** reads the user's saved choice from `localStorage` and sets `data-theme` before the page paints — this is what prevents the flash
- All theme-aware CSS uses `var(--bg)`, `var(--text-main)` etc., so they switch automatically

### Where to find it in the code
- **CSS:** `[data-theme="dark"]` and `[data-theme="light"]` blocks near the top of `<style>`
- **JS:** `setTheme(mode)`, `loadTheme()`, `applyToggle()` — in the `STORAGE & THEME` section
- **HTML:** The toggle switch in `#screen-settings`

### To change the light mode background, for example:
Find `[data-theme="light"]` and change `--bg`.

---

## Screen System

The app has three full-page screens. Only one is shown at a time.

| Screen ID | What it is |
|---|---|
| `#screen-app` | Main reading app (home, tabs, search) |
| `#screen-settings` | Settings page |
| `#screen-about` | About / contact page |

**To switch screens in JS**, call one of:
```js
goHome()       // goes to screen-app
goSettings()   // goes to screen-settings
goAbout()      // goes to screen-about
```

Behind the scenes these all call `showScreen(id)` which removes `active` from every `.screen` and adds it to the one you want. The screen also saves to `localStorage` so it restores on reload.

---

## Adding Your Content

All content lives at the top of the `<script>` block under the comment `YOUR CONTENT`. These are plain JavaScript arrays — just fill them in.

### Hero Slider (the big banner at the top)
```js
const heroSlides = [
  {
    tag: '🔥 Featured',          // small label on the slide
    title: 'Your Novel Title',
    description: 'A short blurb about the novel.',
    bg: 'linear-gradient(135deg, #3B1A08 0%, #C44B1A 100%)',  // slide background
    readHref: 'https://yourlink.com'  // where "Read Now" goes
  },
  // add up to 5 slides
];
```
Leave the array empty `[]` and a friendly "coming soon" panel shows instead.

### Novel Cards (carousels on the home page)
Each carousel has its own array:

```js
const trendingData  = [];   // 🔥 Trending section
const hotPicksData  = [];   // ⭐ Hot Picks section
const dojoDuelsData = [];   // ⚔️ Dojo Duels section
const frenzyyyData  = [];   // ✍️ Frenzyyy's Work section
```

Each item looks like:
```js
{
  title: 'Novel Name',
  emoji: '⚔️',
  bg: 'linear-gradient(160deg, #E8622A, #3B1A08)',  // card cover background
  rating: 4.8,
  genre: 'Action',
  status: 'Ongoing',   // or 'Completed'
  isNew: true,         // shows a "NEW" badge
  isHot: false         // shows a "HOT" badge
}
```

### What's New tab
```js
const novelsNew = [
  { title: '...', emoji: '...', bg: '...', description: '...', genre: '...', status: '...', rating: 4.5, isNew: true }
];
```

### Chapter Updates tab
```js
const updatesData = [
  { novelTitle: 'My Novel', emoji: '📖', chapter: 12, chapterTitle: 'The Battle Begins', time: '2h ago' }
];
```

### Announcements tab
```js
const announcementsData = [
  { title: 'Big News!', body: 'Something exciting is happening.', type: 'new', date: 'April 2025' }
  // type can be: 'new', 'event', or 'system'
];
```

### Notifications (bell icon)
```js
const notificationsData = [
  { msg: '📢 Welcome to NovéLore!', time: 'Just now', read: false }
];
```

### Bookmarks (bookmark icon)
```js
const bookmarksData = [
  { title: 'My Novel', emoji: '📖', bg: 'linear-gradient(160deg,#E8622A,#3B1A08)', genre: 'Fantasy', href: '#' }
];
```

---

## Notifications & Bookmarks Panels

### How the mini popup works (the small one that drops down)
- Tapping 🔔 or 🔖 in the top bar calls `toggleNotifMini()` or `toggleBmMini()`
- This adds the `.show` class to `#notif-mini` or `#bm-mini`
- Shows the **4 most recent** items only

### How the full drawer works ("View all →")
- Tapping "View all →" calls `openNotifDrawer()` or `openBmDrawer()`
- This slides in the `.side-drawer` panel from the right
- Shows **all** items
- The background dims (`.panel-overlay.dimmed`)
- Clicking outside (the dim area) or the ✕ button closes it

### Drawer header features
| Panel | Header actions |
|---|---|
| Notifications | Live **unread count** badge + **Mark all read** button |
| Bookmarks | Live **saved count** badge + **Clear all** button |

### Key JS functions

| Function | What it does |
|---|---|
| `openNotifDrawer()` | Opens the full notification panel |
| `openBmDrawer()` | Opens the full bookmark panel |
| `closeDrawer(id)` | Closes a drawer by its HTML id |
| `closeAllPanels()` | Closes all drawers and mini popups |
| `markAllRead()` | Marks every notification as read |
| `markAllReadDrawer()` | Same, called from inside the drawer header |
| `clearAllBookmarks()` | Removes all bookmarks |
| `readNotif(id)` | Marks one notification as read |
| `removeBookmarkDrawer(e, id)` | Removes one bookmark from the drawer |

---

## Loading Screen

The loading bar progresses through real browser events:

| Step | When | Bar % |
|---|---|---|
| Script starts running | Immediately | 10% |
| DOM fully parsed | DOMContentLoaded | 40% |
| App content rendered | After `init()` finishes | 75% |
| Fonts loaded | `document.fonts.ready` | 90% |
| Everything done | `window.load` | 95% → dismiss |
| Safety net | 4 seconds max | Force dismiss |

The loading screen automatically matches the user's saved theme — no flash.

**To change the loading screen logo or tagline:** Find `#loading-screen` in the HTML body.

---

## Settings

Settings are stored in `localStorage` and restored on every load.

| Key | What it controls |
|---|---|
| `nl_theme` | `'dark'` or `'light'` |
| `nl_fontsize` | `'small'`, `'medium'`, `'large'` |
| `nl_linespace` | `'compact'`, `'normal'`, `'relaxed'` |
| `nl_readwidth` | `'narrow'`, `'normal'`, `'wide'` |
| `nl_reducemotion` | `true` / `false` |
| `nl_highcontrast` | `true` / `false` |
| `nl_screen` | Last screen the user was on |
| `nl_tab` | Last tab the user had open |
| `nl_scroll` | Last scroll position |

**To add a new setting:** Add a toggle or segment control in `#screen-settings` HTML, then in JS call `LS.set('your_key', value)` to save it and `LS.get('your_key')` to read it on load.

---

## Adding a New Screen

1. **Add the HTML** — copy the pattern of an existing screen:
```html
<div id="screen-mypage" class="screen">
  <nav class="page-nav">
    <button class="back-btn" onclick="goHome()">← Back</button>
    <span class="page-nav-t">My Page</span>
  </nav>
  <div class="page-scroll"><div class="page-body">
    <!-- your content here -->
  </div></div>
</div>
```

2. **Add a JS function** to navigate to it:
```js
function goMyPage() {
  closeSB();
  showScreen('screen-mypage');
}
```

3. **Add a link** — in the sidebar (`#sidebar`) or wherever makes sense:
```html
<button class="sb-link" onclick="goMyPage()">
  <span class="sb-ico">📄</span> My Page
</button>
```

---

## Adding a New Tab (on the Home screen)

1. **Add a tab button** in `#tabbar`:
```html
<button class="tab-btn" data-tab="mytab" onclick="swTab('mytab',this)">🆕 My Tab</button>
```

2. **Add the tab panel** inside `#main`:
```html
<div class="tab-panel" id="panel-mytab">
  <!-- tab content here -->
</div>
```

The `swTab()` function handles showing/hiding panels and saving the active tab automatically.

---

## Sidebar Navigation

The sidebar (`#sidebar`) slides in from the left when the hamburger button is tapped.

| Function | What it does |
|---|---|
| `openSB()` | Opens the sidebar |
| `closeSB()` | Closes it |

To add a link to the sidebar, add a `<button class="sb-link">` inside `.sb-nav`.

---

## Security Notes

- The Content Security Policy (`<meta http-equiv="Content-Security-Policy">`) blocks external network requests for scripts (`connect-src 'none'`). If you add an API call later, you'll need to add the domain there.
- All user-supplied text is escaped through the `esc()` helper before being inserted into the DOM — this prevents XSS.
- URLs are checked through `safeUrl()` before being used in `href` attributes.
- CSS values from data are checked through `safeCss()` before being applied inline.

---

## Quick Cheat Sheet

| Task | Where to go |
|---|---|
| Change brand colours | `:root` block in `<style>` |
| Change dark/light theme colours | `[data-theme]` blocks in `<style>` |
| Add hero banner slides | `heroSlides` array in `<script>` |
| Add novel cards | `trendingData`, `hotPicksData`, etc. |
| Add notifications | `notificationsData` array |
| Add bookmarks | `bookmarksData` array |
| Add announcements | `announcementsData` array |
| Add a new page | New `.screen` div + `showScreen()` function |
| Add a new home tab | New `.tab-btn` + `.tab-panel` |
| Change the contact email | Find `mailto:` in the About screen HTML |
| Change Discord handle | Find `Frenzyyy` in the About screen HTML |
