# RC Graphic Design — Design System

Design system for **RC Graphic Designs & Printing**, a graphic design and commercial print shop.
Services: **business cards, flyers, carbonless forms, banners, yard signs and custom stickers.**

## Sources given
| Source | What it is | Notes |
|---|---|---|
| `uploads/Screenshot 2026-08-13 at 3.51.36 PM.png` | The RC logo lockup (screenshot) | Copied to `assets/logo-rc-lockup-dark.png` (top color sliver trimmed). Raster only — no vector artwork was supplied. |
| https://www.nextdayflyers.com/ | Reference site named by the user ("similar to this") | Used **only** as an information-architecture reference: catalog grid, quantity-break pricing, turnaround promises, configurator flow. No visual design, copy or brand element was copied — the visual language here is original and derived from RC's own logo. |

No codebase, Figma file or slide deck was provided, so the component inventory below was authored from scratch
against RC's product and service list.

## Products represented
One product surface exists: the **RC marketing + ordering website** (`ui_kits/website/`). There is no app,
dashboard or docs site. If RC has other surfaces (in-shop order forms, invoices, vehicle graphics), they are not
represented yet.

---

## Content fundamentals

**Voice.** A working print shop, not a marketing department. Plain, concrete, slightly blunt. State what is printed,
on what, by when, for how much. Never hype.

- **Person.** "We" for the shop, "you/your" for the customer. Never "I". *"We print… Upload your file or let us set it up."*
- **Casing.** Sentence case for headlines and body. UPPERCASE (with tracking) only for the condensed type: eyebrows,
  labels, buttons, badges, table headers. Never Title Case Everywhere.
- **Headlines** are short declaratives, ideally with a period: *"Printed right, printed fast."* · *"Six things, done properly."* ·
  *"No artwork? We will draw it up."*
- **Body copy** leads with the spec, then the promise: *"Full-color both sides on heavy stock, trimmed in-house.
  Free digital proof with every order."*
- **Buttons** are verb-first, 2–4 words, uppercase: START YOUR ORDER · GET A QUOTE · UPLOAD ARTWORK · ADD TO CART.
  Avoid "Submit", "Click here", "Learn more" as a primary.
- **Numbers are the copy.** Sizes as `3.5 x 2 in` (space-x-space, no ×), stock as `16pt matte`, prices as `$45.00`,
  quantities with thousands separators (`2,500`), dates as `Thu, Aug 14`. Turnaround as *"Next day"*, *"2 business days"*.
- **Contractions**: sparingly. "we will" reads more like the shop than "we'll" in promises about deadlines.
- **No emoji, ever.** No exclamation marks in product copy. No "!" in buttons.
- **Print jargon is allowed but explained** — bleed, trim, carbonless part, grommet, coroplast. Attach a Tooltip
  rather than dumbing it down.
- **Placeholder honesty.** Where RC has not supplied a photo, the UI says PRODUCT PHOTO in a labelled placeholder
  rather than filling with stock imagery.

---

## Visual foundations

**Origin.** Everything derives from the supplied logo: a charcoal card, a silver high-contrast serif *RC*, a hairline
rule, and condensed uppercase "GRAPHIC DESIGNS & PRINTING". The press adds the second half: a bright green action color with cyan and yellow accents.

**Color.** Charcoal ink neutrals (`--ink-50` … `--ink-950`; `--ink-700 #33333A` is the logo charcoal) carry structure.
**Brand green `--pine-500 #5FC13E`** is the accent color — badges, the brand rule, tints and selected fills. Buttons and links use `--pine-700 #2F6B1D` (6.4:1 with white); the bright 500 never carries white text — CTAs, selected states, turnaround emphasis.
Cyan `#00AEEF` and yellow `#FFC91B` are accents: one per surface, used for the 6px CMYK rule, stars and dark-band
eyebrows — never for body text or buttons. Two backgrounds only: near-white `--surface-page` and charcoal
`--surface-dark`. No gradients anywhere. No purple.

**Type.** Three families. *Playfair Display* (700) for display and h1/h2 only — the serif echo of the mark.
*Saira Condensed* (700, uppercase, `0.08em`) for eyebrows, labels, buttons, badges, table heads and spec keys.
*Figtree* for all body, controls and prices. 16px/1.65 body, `--text-3xs` 11px floor. Headline tracking `-0.02em`.

**Layout.** 1240px max container, 24px gutters, 80px section rhythm. 12-column thinking but grids in practice are
3-up product tiles and 2-up split panes. Sticky elements: the header, the configurator price bar, the cart summary.
Full-bleed is reserved for the charcoal hero and footer bands; content never bleeds.

**Backgrounds.** Flat color. No patterns, no textures, no illustration, no noise. The only decorative element is the
**6px brand rule** (cyan/green/yellow/charcoal quarters) that sits under dark bands — this is the brand's one motif,
alongside the **press-sheet stack** (`--shadow-sheet`, a 2px/4px offset paper edge) used on print-product surfaces.

**Cards.** White, 1px `--ink-200` hairline, **4px radius**, `--shadow-sm`. That is the house card. Radius never exceeds
4px except pills (tags, avatars, step dots) and 2px swatches. No colored left borders. Dark cards drop the border.

**Shadows.** Hairline-first: `--shadow-sm` at rest, `--shadow-lg` on hover lift, `--shadow-xl` for modals only.
Inner shadows are not used. `--shadow-sheet` is a solid offset, not a blur.

**Borders.** 1px is the default and does most of the work; 2px only for the selected ring (`--ring-selected`) and
active tab underline. Dividers are `--ink-200` hairlines, full width of their container.

**Interaction.**
- *Hover*: darken one step (`--pine-700` → `800`) plus a 1–2px lift on cards and buttons. Ghost controls fill with `--ink-100`.
- *Press/active*: darken a second step (`--pine-900`). No scale-down, no shrink.
- *Selected*: green 1px border + 2px ring + `--pine-50` fill. Selection is always visible without color alone (checkmark, filled dot).
- *Focus*: 3px cyan ring (`--ring-focus`) — deliberately a different hue from selection.
- *Disabled*: `--ink-200` fill, `--ink-400` text, no shadow, `not-allowed`.

**Animation.** Short and flat: 140ms for control state, 200ms for elevation/transform, 320ms for panels.
`--ease-out cubic-bezier(.16,1,.3,1)`. Fades and 1–2px translations only — no bounce, no spring, no parallax,
no scroll-triggered reveals. Nothing loops.

**Transparency & blur.** Almost never. Two uses: the modal scrim (`--overlay-scrim` charcoal at 60% + `--blur-panel`)
and the promo bar's inherited charcoal. No frosted cards, no translucent headers.

**Imagery.** Photography should be true-color product shots on neutral seamless backgrounds — cool-neutral, even
light, no filters, no grain, no lifestyle staging. Crop tight on paper edges and stock texture. **RC supplied no
photography**, so every image slot in this system is a labelled placeholder.

**Iconography** — see below. **Protection**: text over imagery uses a solid charcoal band or a solid badge chip
(`solid`), never a gradient scrim.

---

## Iconography

- **System:** [Lucide](https://lucide.dev) **0.469.0**, loaded from the `lucide-static` CDN. RC provided no icon set,
  so this is a **flagged substitution** — Lucide's 2px round-cap outline style matches the system's hairline geometry.
  If RC has its own icons, drop the SVGs into `assets/icons/` and repoint `Icon.jsx`.
- **Delivery:** each glyph is loaded as an SVG URL and painted with a CSS mask, so it inherits `currentColor` and any
  token color. No icon font, no sprite sheet, no inline hand-drawn SVG.
- **Sizes:** 16px inline with text, 20px default in controls, 24px in headers, 30–38px in empty states/placeholders.
  Stroke weight is never overridden.
- **Working set:** printer, credit-card, file-text, files, flag, signpost, sticker, truck, clock, zap, upload, download,
  paperclip, badge-check, circle-check, circle-x, triangle-alert, info, circle-help, ruler, pen-tool, image, map, map-pin,
  phone, mail, search, user, shopping-cart, chevron-right, chevron-down, check, plus, minus, x, star, arrow-right, lock.
- **Semantics:** `zap` = rush/next-day (amber on yellow tint — deliberately not green, so it never reads as "success"). `truck` = turnaround & shipping. `badge-check` = proof approved. `printer` = in-house
  press. `ruler` = size/spec. Product glyphs: credit-card (cards), file-text (flyers), files (carbonless), flag (banners),
  signpost (yard signs), sticker (stickers).
- **Never:** emoji, unicode dingbats as icons, filled icon styles mixed with outline, or a second icon library.

---

## Components

All exported on `window.RCGraphicDesignSystem_084885`. Each directory has one `@dsCard` demo HTML.

**`components/core/`** — `Icon`, `Logo`, `Button`, `IconButton`, `Badge`, `Tag`, `Card`

**`components/forms/`** — `FormField`, `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`,
`QuantityStepper`, `OptionTile`

**`components/navigation/`** — `Breadcrumb`, `Tabs`, `Stepper`

**`components/feedback/`** — `Callout`, `Toast`, `Tooltip`, `Dialog`

**`components/commerce/`** — `ProductCard`, `PriceTable`, `SpecList`, `TurnaroundOption`, `ReviewStars`

Every component has a sibling `.d.ts` (props contract) and `.prompt.md` (what/when + usage).

### Intentional additions
No source defined a component inventory, so a standard set was authored. Two families exist beyond the usual defaults
because RC's business requires them:
- **`Icon`** — a wrapper over the substituted Lucide set, so a future swap to RC's own glyphs is one file.
- **Commerce group** (`ProductCard`, `PriceTable`, `TurnaroundOption`, `SpecList`, `QuantityStepper`, `OptionTile`) —
  print ordering is quantity-break pricing plus spec selection plus a turnaround promise; without these the system
  cannot express RC's core screen.

---

## Index

| Path | What |
|---|---|
| `styles.css` | Global entry — `@import` list only |
| `tokens/fonts.css` | Google Fonts import (Playfair Display, Saira Condensed, Figtree) |
| `tokens/colors.css` | Ink, pine green, accents, semantic pairs, aliases |
| `tokens/typography.css` | Families, size scale, weights, tracking, composed roles |
| `tokens/spacing.css` | 4px space scale, radii, border widths, container/control sizes |
| `tokens/elevation.css` | Shadows, rings, scrim, press-sheet shadow |
| `tokens/motion.css` | Durations, easings, control transition |
| `tokens/base.css` | Element resets, link colors |
| `assets/logo-rc-lockup-dark.png` | The supplied logo (trimmed) |
| `assets/logo-rc-lockup.png` | Untrimmed original screenshot |
| `guidelines/*.card.html` | 19 foundation specimen cards (Colors, Type, Spacing, Brand) |
| `components/<group>/` | 28 components + `.d.ts` + `.prompt.md` + group demo card |
| `ui_kits/website/` | Click-through website recreation — see its `README.md` |
| `thumbnail.html` | Homepage tile |
| `SKILL.md` | Agent Skills entry point |

## Open gaps
- **Fonts are substitutions.** No font files were supplied; Playfair Display / Saira Condensed / Figtree are Google Fonts
  chosen to match the logo's serif and condensed caps. Send RC's real fonts and `tokens/fonts.css` becomes `@font-face` rules.
- **Logo is a screenshot.** Vector (SVG/AI/EPS) artwork is needed for print-quality use and for a light-background knockout.
- **No photography, no real prices, no real address or phone.** All are placeholders in the UI kit.
- **Icons are Lucide**, not RC's own.
