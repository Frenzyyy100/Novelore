# 📖 NovéLore — Editor's Guide
> Everything you need to know to manage and update your site on your own.

---

## 📁 File Structure

```
your-repo/
├── index.html        ← The page layout. Rarely needs editing.
├── css/
│   └── style.css     ← All colours, fonts, spacing. Edit to restyle.
└── js/
    ├── data.js       ← ✏️  YOUR CONTENT LIVES HERE. Edit this most.
    └── app.js        ← Site logic. Don't touch unless you know JS.
```

**Rule of thumb:** 99% of the time, you only edit `js/data.js`.

---

## 🗂️ What's Inside `data.js`

Open `js/data.js` and you'll see these sections in order:

| Section | What it controls |
|---|---|
| `heroSlides` | The big banner slider at the top of Home |
| `trendingData` | 🔥 Trending carousel |
| `hotPicksData` | 🔥 Hot Picks carousel |
| `dojoDuelsData` | 🥋 Dojo Duels carousel |
| `frenzyyyData` | ✍️ Frenzyyy's Work carousel |
| `novelsNew` | ✨ What's New tab |
| `updatesData` | 🔄 Chapter Updates tab |
| `announcementsData` | 📢 Announcements tab |
| `notificationsData` | 🔔 Bell notification popup |
| `bookmarksData` | 🔖 Bookmark popup |

---

## 🎠 Adding a Novel Card (Trending / Hot Picks / Dojo Duels / Frenzyyy's Work)

Find the array you want (e.g. `trendingData`) and add an object inside the `[ ]`:

```js
const trendingData = [
  {
    title:  'My Novel Title',       // The name shown on the card
    emoji:  '⚔️',                   // Big icon shown on the cover
    bg:     'linear-gradient(160deg, #E8622A, #3B1A08)', // Cover background
    rating: 4.8,                    // Star rating (0.0 – 5.0)
    genre:  'Action',               // Genre label shown below rating
  },
];
```

### 🎨 Background colour ideas

Copy-paste any of these into the `bg` field:

```
'linear-gradient(160deg, #E8622A, #3B1A08)'   ← Carrot (default orange)
'linear-gradient(160deg, #1A3A5C, #0D1F33)'   ← Dark blue
'linear-gradient(160deg, #2D5A27, #0F2010)'   ← Forest green
'linear-gradient(160deg, #5C1A5C, #1F0D1F)'   ← Purple
'linear-gradient(160deg, #5C3A1A, #1F1005)'   ← Brown
'linear-gradient(160deg, #C44B1A, #F5B942)'   ← Sunset
```

### Adding multiple novels

Just separate each object with a comma:

```js
const trendingData = [
  { title: 'First Novel',  emoji: '🔥', bg: 'linear-gradient(160deg,#E8622A,#3B1A08)', rating: 4.9, genre: 'Action' },
  { title: 'Second Novel', emoji: '🌸', bg: 'linear-gradient(160deg,#5C1A5C,#1F0D1F)', rating: 4.5, genre: 'Romance' },
  { title: 'Third Novel',  emoji: '⚔️', bg: 'linear-gradient(160deg,#1A3A5C,#0D1F33)', rating: 4.7, genre: 'Fantasy' },
];
```

> **Note:** If an array is empty `[]`, the section shows a friendly "no content yet" message automatically. No extra work needed.

---

## 🖼️ Editing the Hero Slider (Top Banner)

Find `heroSlides` in `data.js`. You can have up to **5 slides**.

```js
const heroSlides = [
  {
    tag:         '🔥 Featured',                          // Small label pill
    title:       'The Name of the Wind',                 // Big heading
    description: 'A legendary story of a man called Kvothe.', // Subtitle text
    bg:          'linear-gradient(135deg, #3B1A08 0%, #C44B1A 100%)', // Slide background
    readHref:    'https://your-novel-link.com',          // Where "Read Now" goes
  },
];
```

To **disable a slide**, just add `//` in front of the `{`:

```js
const heroSlides = [
  { tag: '🔥 Featured', title: 'Active Slide', ... },
  // { tag: '✨ New', title: 'This slide is disabled', ... },
];
```

---

## ✨ What's New Tab

Add novels to `novelsNew` and set `isNew: true` to make them appear:

```js
const novelsNew = [
  {
    title:       'Brand New Novel',
    emoji:       '🌟',
    bg:          'linear-gradient(160deg, #E8622A, #3B1A08)',
    rating:      4.6,
    genre:       'Fantasy',
    status:      'Ongoing',           // 'Ongoing', 'Completed', 'Hiatus', etc.
    description: 'A short description of the novel shown in the list.',
    isNew:       true,                // ← REQUIRED to show in What's New
  },
];
```

---

## 🔄 Chapter Updates Tab

Add entries to `updatesData`:

```js
const updatesData = [
  {
    novelTitle:   'My Novel',         // Novel name
    emoji:        '⚔️',               // Icon
    chapter:      12,                 // Chapter number
    chapterTitle: 'The Final Battle', // Chapter name
    time:         '2h ago',           // How long ago (you write this manually)
  },
];
```

> The first 3 entries automatically get a **NEW** badge.

---

## 📢 Announcements Tab

Add entries to `announcementsData`:

```js
const announcementsData = [
  {
    title: 'Site is Live!',
    body:  'Welcome to NovéLore. We are officially open.',
    type:  'new',           // 'new' | 'event' | 'system'
    date:  '2026-04-05',    // Any date string you like
  },
];
```

**Type options and what they look like:**
- `'new'` → orange ✨ New badge
- `'event'` → yellow 🎉 Event badge
- `'system'` → grey ⚙️ System badge

---

## 🔔 Notifications

Add entries to `notificationsData`:

```js
const notificationsData = [
  { msg: '📢 Welcome to NovéLore!',         time: 'Just now', read: false },
  { msg: '🔥 Chapter 5 of My Novel is out', time: '1h ago',   read: false },
  { msg: '✅ Site maintenance complete',     time: 'Yesterday', read: true  },
];
```

- `read: false` → shows as **unread** (highlighted + orange dot)
- `read: true` → shows as already read

---

## 🔖 Bookmarks

Pre-loaded bookmarks shown in the bookmark popup:

```js
const bookmarksData = [
  {
    title: 'My Featured Novel',
    emoji: '📖',
    bg:    'linear-gradient(160deg, #E8622A, #3B1A08)',
    genre: 'Fantasy',
    href:  'https://link-to-novel.com',   // Where tapping it goes
  },
];
```

Set to `[]` for an empty bookmark list (users can't add their own yet).

---

## 🎨 Changing Colours (Advanced)

Open `css/style.css` and find the `:root` block at the very top:

```css
:root {
  --carrot:       #E8622A;   ← Main orange accent colour
  --carrot-deep:  #C44B1A;   ← Darker version (hover states)
  --carrot-light: #F4924A;   ← Lighter version
  --amber:        #F5B942;   ← Yellow/gold (logo, headings)
}
```

Change `#E8622A` to any hex colour to retheme the whole site.

---

## 💡 Tips & Common Mistakes

| Problem | Fix |
|---|---|
| Novel not showing | Check for a missing comma between objects |
| Page looks broken | Make sure you upload ALL files (index.html + css/ + js/) |
| Email shows as [protected] | Don't paste the site through Cloudflare — use the fixed index.html |
| Slide not showing | Make sure `heroSlides` has at least 1 object and isn't commented out |
| Rating shows `NaN` | Make sure `rating` is a number like `4.5`, not a string like `'4.5'` |

---

## ✅ Quick Checklist When Adding a Novel

- [ ] Added the object inside the correct array (e.g. `trendingData`)
- [ ] Every property ends with a comma except the last one
- [ ] The whole array still has `[` at the start and `]` at the end
- [ ] `rating` is a number (no quotes)
- [ ] Saved the file and re-uploaded `js/data.js` to GitHub

---

## 📋 Full Property Reference

### Novel card (used in all 4 main sections + novelsNew)
| Property | Type | Required | Description |
|---|---|---|---|
| `title` | string | ✅ | Novel name |
| `emoji` | string | ✅ | Cover icon |
| `bg` | string | ✅ | CSS gradient for cover |
| `rating` | number | ✅ | Star rating 0–5 |
| `genre` | string | ✅ | Genre label |
| `status` | string | novelsNew only | e.g. `'Ongoing'` |
| `description` | string | novelsNew only | Short blurb |
| `isNew` | boolean | novelsNew only | Must be `true` to appear |

### Hero slide
| Property | Type | Required | Description |
|---|---|---|---|
| `tag` | string | ✅ | Small pill label |
| `title` | string | ✅ | Big heading |
| `description` | string | ✅ | Subtitle paragraph |
| `bg` | string | ✅ | Full slide background gradient |
| `readHref` | string | ✅ | URL for Read Now button |

### Update entry
| Property | Type | Required | Description |
|---|---|---|---|
| `novelTitle` | string | ✅ | Novel name |
| `emoji` | string | ✅ | Icon |
| `chapter` | number | ✅ | Chapter number |
| `chapterTitle` | string | ✅ | Chapter name |
| `time` | string | ✅ | e.g. `'2h ago'`, `'Yesterday'` |

### Announcement
| Property | Type | Required | Description |
|---|---|---|---|
| `title` | string | ✅ | Headline |
| `body` | string | ✅ | Body text |
| `type` | string | ✅ | `'new'` / `'event'` / `'system'` |
| `date` | string | ✅ | Display date |

---

*Built with ❤️ by Frenzyyy — NovéLore Read Without Limits*