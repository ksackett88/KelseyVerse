# HANDOFF — kelseyverse.com

> **Status:** LIVE at https://kelseyverse.com as of 2026-04-17
> **Deployed via:** Netlify auto-deploy from `main` (+ GitHub Pages mirror at https://ksackett88.github.io/KelseyVerse/)
> **Current on main:** squash commit `e3b820b` ("Design: Homepage redesign (editorial plant-punk)")

This document hands off the redesigned homepage and the brand system it sits inside. Read it once end-to-end before touching anything. Every section matters.

---

## 1. What this site is

`kelseyverse.com` is Kelsey Sackett's personal brand + blog. She's a former executive housekeeper, now Director of Sales at Zip Kit (Cedar City, UT), partnered with Cody, mom to Ryden, human to an Australian blue heeler named Powder. She processes life by naming her personality traits (Cache, Kevin, Crumbz, Tiddles, Nova, Taz, Stackie) and letting them argue on the internet. The site is the public shape of that.

**Plant Bitch Botanicals** is the merch/commerce sub-brand — loud, pink, unapologetic. Drop 01 is live on the homepage (hat, hoodie, mug, apron, gym bro jr. line, crop tee, matching set, skull planter, doormat — 9 SKUs shown, 20+ total in production).

---

## 2. The brand system (LOCKED)

**This is not negotiable.** Kelsey's brand showcase locks these rules. Violating them drifts the brand.

### Colors — four, in these roles only

| name | hex | role |
|------|-----|------|
| **ink** | `#0D0F1C` | dark background voice. text on cream. base of every dark scene. |
| **leaf** | `#86C281` | botanical accent. "verse" in the wordmark. vines, links, UI affordances. **never full-bleed background.** |
| **neon** | `#FF2D8A` | the loud bitch. Plant Bitch tagline only. always with a glow. **never for body copy.** |
| **cream** | `#F3ECDE` | canvas paper. tote base. body copy on dark. soft surfaces. packaging stock. |

Tonal variants are allowed (`--ink-2`, `--ink-3`, `--cream-2`, `--cream-dim`, `--leaf-dark`, `--leaf-deep`, `--neon-soft`, `--neon-hot`). Adding a fifth base color drifts the brand.

### Fonts — four, in these roles only

| name | role |
|------|------|
| **Syne** (700/800, lowercase) | wordmark, section titles, stat numbers, display. **never smaller than 14px. always lowercase.** |
| **Rock Salt** | Plant Bitch tagline *only*. always rotated ~-6deg. always with neon glow. **never paired with itself. never used elsewhere.** |
| **Inter** (300/400/500/600, incl. italic) | body copy, editorial letter, post excerpts, everything readable. |
| **JetBrains Mono** (400/500) | eyebrows, meta, SKUs, labels, tickers, timestamps. |

All four are loaded from Google Fonts in `<head>`. **Don't add a fifth font** (an earlier draft added Fraunces for editorial body — reverted; Inter 300 italic at 19px/1.55 line-height carries editorial feel without breaking the system).

### Wordmark rules

- `kelseyverse™` is split-color: **kelsey** in cream/ink, **verse** in leaf-green. Green must be present or it's the wrong brand.
- `™` is small, superscript, faded (`opacity: 0.5`). Not decorative — legal.
- **"Plant Bitch" ALWAYS sits on the wordmark.** They are a package deal, not two separate marks. You'll see them stacked horizontally (primary) or stacked vertically (hangtags, stickers).

### Pink is the voice

Every spot that uses pink is reinforcing brand voice. **Never recolor the neon. Never mute the glow. Never substitute a safer shade.** Muting it kills the whole joke. This is Kelsey's explicit rule — repeated in the hero ticker ("never recolor the neon pink. pink is the voice.") and the signoff strip.

### Signature effects

- **Grain overlay** on body (global SVG fractalNoise, `mix-blend-mode: overlay`, opacity 0.08).
- **Neon breath animation** on the Plant Bitch tagline — 5s ease-in-out loop, with a flicker beat at 88-92%.
- **Heartbeat pulse** behind the hero lockup — radial pink glow at 4.2s loop.
- **Botanical photo masks** — `mix-blend-mode: screen` over monstera/pothos art, with `mask-image: radial-gradient` softening edges.
- **Floating pill nav** — fixed top center, backdrop-blur 22px, hot-pink `shop ✦` CTA with neon glow.

### Voice (on-page copy)

- lowercase everything in display type
- declarative sentences, full stops ("Beans." "How It Started.")
- "No X. No Y. No Z." pattern
- self-aware, clipped, dry
- casual profanity allowed ("where the fuck is the sun" ships on a hoodie)
- emoji punctuation (🐾 for Powder, 🐧 Kevin, ✨ Crumbz, ✦ brand stamp, 🌿 plants)

---

## 3. File structure

```
KelseyVerse/
├── index.html               ← the live homepage (2800+ lines, the redesign)
├── index.old.html           ← archived previous homepage (rollback target)
├── style.css                ← legacy stylesheet (used by index.old.html and posts/*, NOT by new index.html)
├── cosmic.js                ← legacy 53-byte JS snippet (unused by new index)
├── HANDOFF.md               ← this file
├── photos/                  ← personal photography (22 files)
│   ├── adventure.jpg, cody1.jpg, cody2.jpg
│   ├── homedepot-dog.jpg, meandpow.jpg, meandpow2.jpg
│   ├── my-babies.jpg, phillip.jpg, plant-room.jpg
│   ├── plant2.jpg, plant3.jpg, plantroom2.jpg, plants1.jpg, plants4.jpg
│   ├── pow.jpg, powder.jpg, powder2.jpg, powder-dutch-bros.jpg.jpg
│   ├── ryry.jpg, snow1.jpg, snow2.jpg, zipkitboss.jpg
│   ├── botanicals/          ← art-directed plant photography (3 JPGs)
│   │   ├── monstera-fiurdelin-sm.jpg      ← hero left + featured post
│   │   ├── monstera-leaf-photo-sm.jpg     ← hero right + post--f (Casual Sunday)
│   │   └── pothos-horticole-plate-sm.jpg  ← hero accent + post--a (Friday Plant Salon)
│   └── swag/                ← product photography for Drop 01 (20 files)
│       ├── hat.png, hoodie-where-the-sun.png, hoodie-fine-this-morning.png
│       ├── mug.png, apron.png, gymbro-jr.png
│       ├── tee-stop-touching-it.png, tee-where-the-sun-crop.png
│       ├── tee-long-moved-it.png, tee-sleeveless-leave.png
│       ├── set-watered-it-model.png       ← matching crop + leggings, model shot
│       ├── set-where-the-sun.png          ← matching set, greenhouse context
│       ├── set-leave-for-one-day-flatlay.png
│       ├── skull-planter.png              ← ceramic skull with succulents (signature piece)
│       ├── doormat.png                    ← jute, "leave me alone"
│       ├── tumbler-houseplant-fuel.png    ← parody spray-bottle label tumbler
│       ├── lifestyle-still-life.png       ← tote + hat + planter + tumbler flatlay
│       ├── backpack-apron-socks.png       ← accessories ecosystem
│       ├── packaging-flatlay.png          ← boxes + slogan labels + hangtags
│       ├── slogan-labels.png              ← slogan sticker catalog
│       └── slogan-ecosystem.png           ← tags + twine + labels styling shot
├── posts/                   ← 13 blog post HTML files + template
│   ├── post-template.html   ← starter for new posts
│   ├── the-beast.html              (featured post — "I Brought Home a Beast")
│   ├── friday-night-plant-salon.html
│   ├── phillip-and-craig.html      ("Phillip, Craig, and the Great Soil Purge")
│   ├── corporate-rise.html         ("How I Accidentally Became Director of Sales")
│   ├── gnat.war.html               (note the dot — file is literally "gnat.war.html")
│   ├── gym-bro-jr.html
│   ├── Casual-sunday.html          (note the capital C)
│   ├── threatened.html             ("So Apparently I'm Threatening. Cool.")
│   ├── beans.html
│   ├── the-origin.html             ("How It Started.")
│   ├── nobody-asked-if-kevin-was-okay.html
│   ├── mind-your-vibes-kevin.html
│   └── cache-debugging-snacks.html ("Debugging with Snacks")
└── shop/
    └── index.html           ← shop page (not redesigned in this pass)
```

**Note on post filenames:** some are quirky (`gnat.war.html` has a dot; `Casual-sunday.html` has a capital C). The homepage `index.html` hrefs match these exact strings. Don't lowercase them or remove the dot when copying.

---

## 4. The homepage (index.html)

All CSS is inline in a single `<style>` block in `<head>`. All tokens are CSS custom properties on `:root`. Single HTML file, no framework, no build step.

### Section map

| id | section | what's in it |
|----|---------|--------------|
| `#top` (`.hero`) | hero | 3 botanical atmospheric images, lockup (kelseyverse™ + Plant Bitch neon), sub "welcome to my orbit.", tagline, 3 random "now in orbit" chips, scroll cue |
| — | ticker | horizontal infinite scroll of 8 status items; paused on hover |
| `#about` | about | editorial letter (3 paragraphs) + sticky "field guide" sidebar with 6 bullets (plant parent, powder, ryden, director of sales, cedar city, chaos crew) |
| — (nested in `.crew`) | the crew | 3 character cards: Cache 🐾, Kevin 🐧, Crumbz ✨ — each with a quote from Kelsey's own copy |
| `#posts` | dispatches from orbit | 7 category filter pills + featured post ("I Brought Home a Beast") + 10 asymmetric cards (variants: tape corner, tape-right, cream, neon, photo, sticker "NEW" badge, hand scrawl); archive CTA at bottom |
| `#obsessed` | the log | 4 journal entries with emoji header, timestamp meta, hashtag footer |
| `#photos` | from my orbit | 10-tile personal photo mosaic (1 quote tile + 9 photos). **This is the dedicated personal photo zone** — don't put personal photos elsewhere on the page. |
| `#drop` | drop 01 — the lab | 9 product cards (3×3 grid, 1:1 aspect), pink CTA to `shop/` |
| — (`.signoff`) | signoff | big "join the orbit" headline, email signup form, 4-col link grid, "made with love + chlorophyll" base |

### Interactivity

Two tiny inline `<script>` blocks at the bottom:

1. **Reveal-on-scroll** — IntersectionObserver adds `.is-in` to `.reveal` elements when they enter viewport. Translates up + fades in. Respects `prefers-reduced-motion`.
2. **Random "now in orbit" chips** — picks 3 of 10 status badges from a pool on every page load. Gives the hero a living-orbit feel.

No other JS. No dependencies.

### Photo discipline (enforce strictly)

Kelsey's taste rule, confirmed live:

- **Atmospheric / editorial slots** (hero backdrops, featured post photo, post-card photo thumbnails) → **botanical imagery only**. Use the 3 JPGs in `photos/botanicals/`.
- **The `#photos` section mosaic** → **personal photos only**. Powder, Ryden, Cody, plant room, zipkit boss, snow days. This is where real life lives.
- **The `#drop` section** → **product photography only**. Pull from `photos/swag/`.

**Don't cross the streams.** Personal photos in post thumbnails read as biographical rather than editorial. Botanical art in the mosaic kills the "it's really me" feeling. Product shots in hero make the site feel like a store.

---

## 5. Drop 01 merch — full catalog

Each SKU in Drop 01 has its own tagline. **They are NOT interchangeable.** Use the right slogan on the right product.

### Currently on the homepage (9 cards)

| card | file | tagline / type |
|------|------|----------------|
| the dad hat | `hat.png` | "stop touching it" back · washed green |
| the hoodie | `hoodie-where-the-sun.png` | "where the fuck is the sun" · acid-wash green · "MOVED IT" sleeve |
| the matching set | `set-watered-it-model.png` | "i watered it" crop + "PLANT BITCH" leggings |
| the morning mug | `mug.png` | "i said it needed light" front / "stop touching it" side / "WATER IT. LEAVE IT. REPEAT." inside rim |
| the work apron | `apron.png` | "i said it needed light" · heavy canvas |
| gym bro jr. | `gymbro-jr.png` | sub-line (crop + shorts + hat) — see back text list below |
| the skull | `skull-planter.png` | ceramic skull planter with succulents, "PLANT BITCH" on forehead |
| the doormat | `doormat.png` | "leave me alone" · jute |
| the crop tee | `tee-stop-touching-it.png` | "stop touching it" · black charcoal wash |

### Staged for the shop page (11 more in `photos/swag/`)

- `set-where-the-sun.png` — matching set, greenhouse context
- `set-leave-for-one-day-flatlay.png` — crop + leggings flatlay with packaging
- `hoodie-fine-this-morning.png` — alt hoodie, "it was fine this morning"
- `tee-where-the-sun-crop.png` — green washed crop tee
- `tee-long-moved-it.png` — long-sleeve, "you moved it didn't you" + "KILLED IT" sleeve
- `tee-sleeveless-leave.png` — sleeveless muscle crop, "i leave for one day"
- `tumbler-houseplant-fuel.png` — "PLANT BITCH HOUSEPLANT FUEL / HOW'S THAT STILL ALIVE?" parody label
- `lifestyle-still-life.png` — tote + hat + ceramic planter + white tumbler flatlay
- `backpack-apron-socks.png` — canvas backpack, apron variant, paired socks, keychains
- `packaging-flatlay.png` — boxes + multiple slogan labels + jute + pruners
- `slogan-labels.png` — slogan sticker catalog on shipping box
- `slogan-ecosystem.png` — styled tags + twine + labels still-life

### Full tagline catalog (by product)

**Apparel front lines:**
- "i said it needed light" → apron, mug front
- "stop touching it" → hat back, black crop tee
- "it was fine yesterday" → hat back alt
- "it was fine this morning" → alt hoodie
- "where the fuck is the sun" → hoodie, green crop tee, matching set crop (alt)
- "you moved it didn't you" → long-sleeve
- "i leave for one day" → sleeveless muscle crop
- "i watered it" → matching set crop (primary)
- "kill me now" → hat variant (distressed black)
- "i need repotting" → ceramic travel tumbler (white)
- "i talk to them" → ceramic planter (white)
- "everything hurts" → canvas backpack
- "nothing works" → apron variant (with pockets)

**Smaller hits:**
- Sleeve hits: "MOVED IT" (where-the-sun hoodie), "KILLED IT" (long-sleeve, alt hoodie)
- Hoodie hem hits: "i know", "laaid it done"
- Leggings waistband: "PLANT BITCH"
- Paired socks: "kill the other one" (one on each sock)
- Mug interior rim: "WATER IT. LEAVE IT. REPEAT." (with a small heart)

**Slogan labels / hangtags / packaging / keychains / doormat:**
- "that was the good one" (packaging boxes)
- "i hate this" (hangtag)
- "who moved it" (keychain, slogan label)
- "it's dying" (keychain)
- "where is it?" (keychain)
- "leave me alone" (doormat + slogan label)
- "leave it alone" (soil bag + slogan label)
- "why is it crispy" (slogan label)
- "i said indirect" (slogan label)
- "i just fixed that" (slogan label)
- "i'm over it" (slogan label)
- "it's fine, everything's fine" (canvas tote)

**Gym Bro Jr. sub-line back text variants:**
- "touch the bar and die"
- "pre hit too hard"
- "count that shit"
- "if i black out count the rep"

**Parody tumbler (stainless black):** "PLANT BITCH HOUSEPLANT FUEL / HOW'S THAT STILL ALIVE? / MAXIMUM STRENGTH / BULLSHIT REEEXIT / MILLDD TOXIC / BOGMIL 8-G-8" — the typos/parody chemistry are part of the joke. Don't clean them up.

### Kelsey's review process for merch

She drops new photos into `C:\Users\codya\Dropbox\plant bitch swag\`. Rejected versions get moved to `wrong font/` subfolder inside that folder. **If a file lives in `wrong font/`, DO NOT PULL IT.** Those are deprecated.

---

## 6. Common tasks — how to

### Add a new blog post

1. Copy `posts/post-template.html` → `posts/your-new-post.html`. Fill in content. (Post pages currently use the legacy `style.css` — they are NOT yet redesigned. See §7.)
2. Open `index.html`, find `<div class="post-grid">` inside `<section class="posts" id="posts">`.
3. Copy one of the existing `<article class="post post--X ...">` blocks as a template. Variants available:
   - `post--b` through `post--e`: plain text card
   - `post--a`, `post--f`: photo + text (has `post--photo` class + `.post__photo` div)
   - `post--c`: cream variant (`post--cream`)
   - `post--e`: neon variant (`post--neon`)
   - `post--g`: sticker + scrawl variant (`post--sticker` adds a pink "NEW" badge)
4. Update: date, title, excerpt, reader time, `href` to `./posts/your-new-post.html`, category tags.
5. Optional: bump the "13 posts total" count in the `posts__head-right` meta.

### Add or update a Drop 01 SKU

1. Drop the product photo in `photos/swag/` with a descriptive name (NOT the UUID from the source).
2. Open `index.html`, find `<section class="drop" id="drop">` → `<div class="drop__grid">`.
3. Copy any `<a class="drop__card reveal" href="./shop/">` block as a template.
4. Update: img `src` + `alt`, SKU text, name (`.drop__card-name`), type subtitle (`.drop__card-type`).
5. Optional: update "9 skus shown" / "20+ pieces" count in `drop__head-right`.

### Change copy anywhere

All copy is inline HTML. Search for a distinctive phrase (`grep -n "phrase" index.html`) to find its location. Keep Kelsey's voice:
- lowercase display type
- declarative sentences with full stops
- no em-dashes unless already there (watch for AI tell)
- casual + profanity-adjacent when it earns a laugh
- emoji as punctuation, sparingly

### Swap a photo

Find the `<img src="...">` line. Swap the src. Respect the photo discipline from §4 — botanical in editorial slots, personal only in `#photos` mosaic, product only in `#drop`.

### Redesign the shop page

`shop/index.html` is the current shop. It hasn't been touched in this pass. Natural extension: take the `.drop__card` pattern from the homepage, tile all 20+ SKUs from `photos/swag/` in a filterable grid. Reuse the tokens. Same 4 colors, 4 fonts, pink CTA, grain overlay.

### Redesign the blog post pages

Individual posts (`posts/*.html`) currently use the legacy `style.css` (35KB) and don't carry the new brand language. To port:
1. Strip the `<link rel="stylesheet" href="../style.css">` (or whatever path they use).
2. Inline the tokens, typography, and body styles from `index.html` head block (you only need a subset — nav, body/ink bg, typography, maybe a simple article wrapper).
3. Add the floating pill nav + grain overlay for continuity.
4. Build a post-reading layout: large title (Syne, lowercase, em in leaf), Inter body 19px/1.6, pull-quotes, inline images, "next post" + "back to orbit" footer.
5. Update `posts/post-template.html` so new posts inherit the new language automatically.

Keep in mind her posts are short-form and voice-heavy — design for reading 2-8 minutes of staccato prose, not a longform essay engine.

---

## 7. Open threads (what's still `#`)

These placeholder links are in the live homepage. Wire them up when the target pages exist:

- **Archive CTA** at bottom of `#posts`: `<a href="#" class="archive-cta">read all 13 posts from the orbit →</a>` — needs an archive/index page of all posts.
- **Mosaic tile `href="#"`** — decide if tiles open the related blog post, a photo detail view, or a lightbox gallery. Currently all 9 tiles go nowhere.
- **Footer "the goods" column** — `plant bitch shop ✦`, `drop 01 merch`, `sticker pack`, `the canvas tote` all point to `#`. Only "plant bitch shop ✦" has a candidate destination (`./shop/`); product-specific pages don't exist yet.
- **Footer "elsewhere" column** — `github ↗`, `linkedin ↗`, `press kit` all `#`. Press kit page doesn't exist yet.
- **Email signup form** — currently a client-side stub (`onsubmit` toggles the button text). No backend integration — pick a provider (Buttondown, ConvertKit, Mailchimp) and wire it up.
- **Drop 01 card links** — every product card links to `./shop/`. When you redesign the shop with individual product pages, route each card to its product URL.

---

## 8. Lessons learned (read before iterating)

### Brand fidelity beats invention
Four fonts only meant no Fraunces for editorial body. First draft added Fraunces for the about letter. Caught immediately — reverted to Inter 300 italic at 19px/1.55 line-height. Reads editorial without breaking the system. **When you're tempted to add a fifth font/color, don't.**

### "Pink is the voice" is load-bearing
Every spot that uses pink is reinforcing brand voice. Don't mute it. Don't recolor. Don't soften. The ticker literally warns: *"never recolor the neon pink. pink is the voice."* That's not decoration — it's a rule.

### Dropcaps can amplify the wrong thing
The about section originally had a decorative drop-cap I. Kelsey said it was too big. I went 5.6em → 3em (classic magazine size). She said *still* too big. I killed it entirely. **Lesson: if she flags it twice, it doesn't belong.** Remove, don't shrink.

### Screen-blend-mode doesn't forgive image content
When the hero backdrops were personal photos (`plant-room.jpg` etc.) at `mix-blend-mode: screen` + `opacity: 0.92`, they read as subtle atmosphere. When we swapped to botanical artwork (which has higher contrast + brighter highlights), the SAME CSS settings suddenly screamed. Had to dial opacity 0.92 → 0.7 and brightness 0.52 → 0.42 to restore the atmospheric feel. **When swapping image type under screen-blend, recalibrate.**

### 4:5 aspect cards feel retail; 1:1 feels editorial
Product cards at 4:5 felt like a shop catalog taking over the page. Squared them to 1:1 and they read as a row of tiles inside an editorial context. **Context-drives-ratio, not convention.**

### Scope discipline
Every commit during this build resisted feature creep: didn't redesign blog posts, didn't touch the shop page, didn't add comments/likes/newsletters/filtering. Narrowest reading of each ask. **When you're tempted to also-do-X, don't; finish the ship.**

### Staged assets get descriptive names, not UUIDs
`photos/swag/mug.png` beats `photos/swag/c5e834b7-13ef-4375-a034-3fc517fa047c.png`. Reviewers can recognize a product. Always rename at copy time.

### `wrong font/` is Kelsey's rejection flow
First batch of swag photos had wrong font. She dropped corrected versions into the same folder and moved the bad ones to `wrong font/`. This is how she signals "those are dead." Check the subfolder before pulling; anything there is deprecated.

### Match her pace
She iterates in 20-minute cycles. First swag batch → second batch → third batch in one evening. Her feedback is direct ("too big," "way better!", "make it live"). Reply in kind: ship fast, deploy, iterate. Don't over-polish intermediate steps — each step is a prototype, the live site is the truth.

### Her voice is the north star
Lowercase, declarative, clipped. "Beans." "No niche. No schedule. No apologies." Self-aware, dry, never precious. When writing new copy, read three posts and an obsession card before drafting. Don't wander toward buzzy marketing voice.

### She runs atmospheric
First size you pick is usually 20% too big. First opacity is usually 20% too visible. She wants images to *feel present*, not *command*. When in doubt, size down.

### Drop 01 language conventions
The brand showcase uses: "drop 01 / 2026 / X skus shown / full range: N pieces." Keep that pattern intact when adding to the drop section. The meta column on the right of each section header is a signature — dates, counts, small tells in JetBrains Mono.

### Commit messages matter here
Kelsey's own history is chaotic ("gsgsd", "dgd"). This redesign introduced proper messages with Co-Authored-By trailers. Her UX/UI team should match: subject in imperative, body explains *why*, trailer for attribution. She's handing work to a team; commits are the shared record.

---

## 9. Rollback

If kelseyverse.com is showing something broken and you need the old homepage back immediately:

```bash
cd /path/to/KelseyVerse
git pull
git mv index.html homepage-redesign.html
git mv index.old.html index.html
git commit -m "Rollback: restore previous homepage"
git push
```

Netlify will redeploy within ~90 seconds. The redesigned homepage is preserved as `homepage-redesign.html` for forward iteration.

---

## 10. Deployment mechanics

- **Netlify** serves `kelseyverse.com` — auto-deploys on any push to `main`. No config file in the repo; deployment is wired through the Netlify dashboard (the owner Kelsey has the login).
- **GitHub Pages** mirror at `https://ksackett88.github.io/KelseyVerse/` — also auto-deploys from `main`, source set to `/` (root).
- **No build step.** The repo is static HTML + CSS + images. What's on `main` is what's served.

---

## 11. Credits

- **Brand system + merch photography:** Kelsey Sackett (ksackett88)
- **Homepage redesign + this handoff:** Cody Smith (cody@codyasmith.com) on her behalf, with Claude Opus 4.7 as pair
- **PR:** https://github.com/ksackett88/KelseyVerse/pull/1 (merged as squash `e3b820b` on 2026-04-17)

Questions or handoff-debt cleanup: ping Cody. The brand showcase source of truth lives at `C:\Users\codya\projects\kelseyverse-logo\for-kelsey\brand-showcase.html` (not in this repo — it's the foundation doc Kelsey's brand team has).
