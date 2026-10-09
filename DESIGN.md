---
name: Antonio Vinciguerra — Portfolio
description: A single Tokyo transit line on the night in-car display; every shipped product a numbered station on it, and one train that rides to it.
colors:
  ground: "#0b1326"
  board: "#121c36"
  plate: "#05080f"
  ink: "#eef2ff"
  ink-2: "#b7c0dc"
  ink-3: "#8d98b8"
  white: "#ffffff"
  stroke: "rgba(238, 242, 255, 0.35)"
  hair: "rgba(238, 242, 255, 0.12)"
  route: "#ff7b72"
  route-dim: "rgba(255, 123, 114, 0.28)"
  route-deep: "#ff5a4f"
  beam: "rgba(255, 162, 31, 0.45)"
  ginza: "#ffa21f"
  marunouchi: "#ff2d3f"
  tozai: "#16b8e0"
  chiyoda: "#15d99c"
  hanzomon: "#a98cff"
  namboku: "#1fcfbd"
  oedo: "#e0199a"
  mita: "#2d9cf0"
  shinjuku: "#7ed66a"
  yurakucho: "#d9b86a"
typography:
  display:
    fontFamily: "Zen Kaku Gothic New, Hiragino Sans, Noto Sans JP, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(34px, 5.4vw, 64px)"
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Zen Kaku Gothic New, Hiragino Sans, Noto Sans JP, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(28px, 3.6vw, 44px)"
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Zen Kaku Gothic New, Hiragino Sans, Noto Sans JP, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(24px, 3vw, 34px)"
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  board:
    fontFamily: "Zen Kaku Gothic New, Hiragino Sans, Noto Sans JP, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(18px, 2.2vw, 24px)"
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  small-headline:
    fontFamily: "Zen Kaku Gothic New, Hiragino Sans, Noto Sans JP, Helvetica Neue, Arial, sans-serif"
    fontSize: "22px"
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  line-name:
    fontFamily: "Zen Kaku Gothic New, Hiragino Sans, Noto Sans JP, Helvetica Neue, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 900
    lineHeight: 1.25
    letterSpacing: "normal"
  body:
    fontFamily: "Zen Kaku Gothic New, Hiragino Sans, Noto Sans JP, Helvetica Neue, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  name:
    fontFamily: "Zen Kaku Gothic New, Hiragino Sans, Noto Sans JP, Helvetica Neue, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "normal"
  stack:
    fontFamily: "Zen Kaku Gothic New, Hiragino Sans, Noto Sans JP, Helvetica Neue, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: "normal"
  sub:
    fontFamily: "Zen Kaku Gothic New, Hiragino Sans, Noto Sans JP, Helvetica Neue, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.08em"
  meta:
    fontFamily: "Zen Kaku Gothic New, Hiragino Sans, Noto Sans JP, Helvetica Neue, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "normal"
  label:
    fontFamily: "Zen Kaku Gothic New, Hiragino Sans, Noto Sans JP, Helvetica Neue, Arial, sans-serif"
    fontSize: "11px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.16em"
  code:
    fontFamily: "Zen Kaku Gothic New, Hiragino Sans, Noto Sans JP, Helvetica Neue, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "0.02em"
rounded:
  swatch: "4px"
  rail: "5px"
  skip: "6px"
  map-line: "7px"
  sign: "10px"
  app-icon-sm: "11px"
  icon: "12px"
  sign-lg: "14px"
  phone: "18px"
  photo: "20px"
  app-icon: "26px"
  dot: "50%"
spacing:
  xs: "8px"
  sm: "10px"
  stop-gap: "12px"
  md: "14px"
  lg: "16px"
  xl: "28px"
  2xl: "36px"
  col-gap: "56px"
  3xl: "72px"
  run-in: "80px"
  gutter: "clamp(20px, 5vw, 64px)"
  line-w: "10px"
components:
  ticket:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    rounded: "{rounded.sign}"
    padding: "10px 18px 10px 14px"
    height: "48px"
  action:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sign}"
    padding: "10px 16px"
    height: "48px"
  action-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
  exit:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sign}"
    padding: "9px 16px"
    height: "44px"
  exit-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
  exit-primary:
    backgroundColor: "{colors.route}"
    textColor: "{colors.ground}"
    rounded: "{rounded.sign}"
    padding: "9px 16px"
    height: "44px"
  exit-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
  station-code:
    backgroundColor: "{colors.board}"
    textColor: "{colors.ink}"
    typography: "{typography.code}"
    rounded: "{rounded.sign}"
    size: "42px"
  station-code-lg:
    backgroundColor: "{colors.board}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sign-lg}"
    size: "64px"
  indicator:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.white}"
    rounded: "{rounded.sign}"
    padding: "0 14px"
    height: "42px"
  train:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.board}"
    width: "80px"
    height: "24px"
  line-chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "0"
    height: "14px"
---

# Design System: Antonio Vinciguerra — Portfolio

## Overview

**Creative North Star: "The In-Car Route Display"**

The whole portfolio is one Tokyo transit line, read on the LCD above the train door at night. The page is deep navy glass; everything that was ink on enamel is now light on glass: near-white text, a single rose route line that enters at the route map, runs down the left edge of every section and closes the page as the footer's top rule. Every project is a numbered station on that line (A01 to A11); the two App Store apps are the terminals, drawn larger and double-ringed as interchanges. Reading the page is riding the line, and there is one train, seen twice. On the route map a side-view train glyph (80×24, light body, rose roof stripe, lit windows, amber headlamp) sits on the line and docks just short of each station sign; tap a station and it rides there on a critically damped spring while the page scrolls so that station's mark lands under the train on the rail. On the vertical rail the same glyph, nose down, follows the reader to a point 38% down the viewport, lighting the rail behind it and announcing every mark it passes on the in-car display strip. The line is lit only as far as the train has come, on the map and on the rail alike; the display lights up on load (the map line draws itself, the stations light one by one); the passed stations keep their rose ring.

Density is signage density. Nothing is boxed; information sits directly on the glass and is organised by the line, by station codes in ringed rounded squares, and by weight. Headings carry a second, smaller line the way every platform sign does, in the same face, one step down and tracked; all copy is English (the earlier Japanese sub-labels were removed on 2026-10-09 at the owner's request). Icons are pictograms: stroked SVG at 1.8px, round-capped, never glyph fonts. The Tokyo Metro and Toei line colours appear, lightened so they read as lit segments on the display, but strictly to name the skill lines (Rails is Marunouchi red, PostgreSQL is Mita blue, Swift is Ginza orange); the page itself has exactly one colour, Asakusa-Line rose, and light is rationed: the route glows where it is lit, the train's headlamp and halo light up only while it moves, and nothing else glows.

Rejected on the evidence of the build: the category arrangement of hero-name-over-avatar and a grid of equal project cards. There are no cards, no eyebrows or kickers, no decorative dividers, no second display face, and no glow on anything that is not the route or the moving train.

**Key Characteristics:**
- Navy glass ground, near-white light as "ink"; one route colour carries the page; nine lightened Tokyo line colours only ever name a skill line, and Ginza orange alone doubles as the train's headlamp.
- No cards and no boxes; the rose line, the station marks and heavy weight do the structuring.
- A single signage face (Zen Kaku Gothic New) at four weights, heavy for names, light-tracked small caps for labels; English copy only.
- Station codes in rounded squares with a rose ring on a slightly lighter navy fill.
- One train, seen twice: the same 80×24 SVG glyph rides the route map between station signs and, rotated nose-down, rides the rail with the reader.
- The route is the only thing that glows, and only where it is lit: the map's lit segment, the lit rail and the current station mark carry the rose halo; the moving train carries an amber headlight beam and a white halo; everything else is matte.
- Motion is the train: two critically damped springs (rail 0.45s, map 0.55s, no overshoot) plus the opening light-up; every other transition is a 100–220ms state change.

## Colors

A night-display palette: deep navy glass, near-white light for text, one rose route, and a strictly rationed set of lightened Tokyo line colours.

### Primary
- **Asakusa Rose** (`route`): the route line wherever it is lit (the map's lit segment, the lit rail behind the train, the footer's 10px top rule), the train's roof stripe, the ring on every station code, the ring on every station mark the train has reached or passed, the fill of the current station's mark, the dot separators in the station description, the indicator's current code, the fill of every station's primary exit, hover and focus colour of the next-station links, and text selection.
- **Asakusa Rose, dim** (`route-dim`): the route switched off: the 13px map line and the 10px rail ahead of the train, the ring of a station mark the train has not reached, and the scrollbar thumb. Never a second accent, never glowing.
- **Asakusa Rose, deep** (`route-deep`): defined on the root but not painted anywhere in the shipped cascade (the night rendition overrides both of its former hover uses). Do not reach for it without a new role.
- **Headlight Amber** (`beam`): Ginza orange at 45%, the start of the gradient that is the train's headlight beam, fading to transparent 80px ahead of the nose; visible only while the train moves.

### Secondary
Tokyo line colours, lightened from the printed values so they read as lit segments on navy. Each one names exactly one skill line and appears only as the 14px square before a stack chip and the 18×36px band before a skill row.
- **Marunouchi Red** (`marunouchi`): Ruby on Rails / Backend.
- **Mita Blue** (`mita`): PostgreSQL. Also borrowed for the 3px keyboard focus ring, so focus never reads as the route.
- **Ginza Orange** (`ginza`): Swift · SwiftUI / iOS. Also the train's headlamp (the 1.7-unit circle at the nose) and, at 45%, its beam: the one place a line colour is a lamp rather than a label.
- **Hanzomon Purple** (`hanzomon`): StoreKit 2.
- **Chiyoda Green** (`chiyoda`): OpenAI API / AI.
- **Tozai Sky** (`tozai`): Stimulus.
- **Yurakucho Gold** (`yurakucho`): JavaScript / Frontend.
- **Shinjuku Leaf** (`shinjuku`): EJS.
- **Namboku Teal** (`namboku`): Tools.
- **Oedo Magenta** (`oedo`): defined on the root, assigned to no line and painted nowhere.

### Neutral
- **Navy Glass** (`ground`): the page background, the 4px halo that separates every station mark from the rail, the inner ring of a terminal's interchange code, the train's door seams (at 50%), the text on the ticket, on the primary exit and on any inverted button, and the scrollbar track.
- **Board Navy** (`board`): a step lighter than the ground; the fill of every station code, of a station mark at rest, and of the train's windows. The only "surface" colour, used for objects, never for containers.
- **Display Black** (`plate`): the in-car indicator strip, the one thing darker than the ground so it reads as the display's own bezel.
- **Light** (`ink`): headings, body text on the board, button text and strokes on hover, the ticket, the train's body, the hover fill of every outlined button and of the primary exit.
- **Light 2** (`ink-2`): running body copy inside stations, legends, the qualifier under a station title (`Habit RPG · iOS`, `Live · Rails`), skill-row descriptions.
- **Light 3** (`ink-3`): the second line on headings and next-station links, uppercase labels, the map's `App Store` / `Live · Rails` sub-labels, the fallback chip colour.
- **Pure White** (`white`): the indicator's text only, one step above Light so the plate reads brightest; its `Next` text sits at 75% and the key hints at 50%.
- **Stroke** (`stroke`): the 2px stroke of outlined buttons at rest, at 35% light.
- **Hairline** (`hair`): 12% light; the 1px ring around the indicator strip. The phone screenshots carry a near-identical 1px bezel at 14%, the indicator's internal divider before `Next` is 14%, and the `kbd` hints are outlined at 25%.

### Named Rules
**The One Route Rule.** The page has one accent, Asakusa rose, and it is spent only on the line (lit or dim), the train's roof stripe, the rings and marks, the dots, the indicator code, the one primary exit per station, link hover and selection. No heading, background or secondary button is rose; the ticket in the header is light, not rose, so the CV reads as the thing you hold rather than part of the line.

**The Lines Name Lines Rule.** A Tokyo line colour may only identify a skill line, as a 14px square or an 18px band beside its name. It never fills a button, tints a background, colours a heading or decorates anything. The single exception is Ginza orange as the train's headlamp and beam: a lamp on the one object that moves, not a label.

## Typography

**Display Font:** Zen Kaku Gothic New (with Hiragino Sans, Noto Sans JP, Helvetica Neue, Arial, sans-serif)
**Body Font:** Zen Kaku Gothic New (same stack)
**Label/Mono Font:** none; tabular numerals are switched on body-wide (`font-variant-numeric: tabular-nums`) so station codes align. The `kbd` key hints inherit the body font.

**Character:** One Japanese signage grotesque sets all-English copy in one voice, loaded at 400, 500, 700 and 900. Names are set black-weight and tight; the rest is regular at a generous 1.6 leading. Headings balance (`text-wrap: balance`), paragraphs set pretty. Text is antialiased light on navy.

### Hierarchy
The ramp as the build uses it is 11, 12, 13, 14, 15, 16, 17, 18, 20, 22, 24 px plus six clamps. Roles own the following steps; 12, 16, 20 and 24 are responsive or size-scale steps of a role, not roles of their own.
- **Display** (900, clamp(34px, 5.4vw, 64px), 1.1, -0.02em): the station name in the board header, `Antonio Vinciguerra`, only. Drops to clamp(26px, 7.4vw, 40px) under 820px.
- **Headline** (900, clamp(28px, 3.6vw, 44px), 1.1): section heads on the line (`Projects`, `Skills`).
- **Title** (900, clamp(24px, 3vw, 34px), 1.1): station names in each station head and the About head; 24px under 820px. A station's qualifier (`Habit RPG · iOS`, `Live · Rails`) sits beneath as a 14px/500/0.04em block in Light 2.
- **Board** (900, clamp(18px, 2.2vw, 24px), 1.1): the three next-station links under the map.
- **Small Headline** (900, 22px): the route-map title; the same size numbers the header badge code.
- **Line Name** (900, 18px): a skill line's name in the lines-serving list, a terminal's name on the map, and the indicator's current code; also the header badge code under 820px.
- **Body** (400, 17px, 1.6): paragraphs, capped at a 62ch measure; 16px under 820px. Station copy is Light 2, board copy is Light. The station description under the header name is 17px/500.
- **Name** (700, 15px, 1.25): station names under the horizontal map (no wrapping) and the label of every exit button; live stations' map names are 16px. Between 820 and 1100px the map names wrap at 13px (terminals 15px, live stations 14px); under 820px every map name is 16px.
- **Stack** (700, 14px): the stack chips after their coloured square.
- **Sub** (500, 13px, 0.08em, Light 3): the English second line on every section heading (`Station information`, `All stations`, `Connecting lines`), inset 0.6em and raised 0.25em; the second line under the next-station links (same size and weight, untracked); the station name in the indicator (700, white).
- **Meta** (500, 12px): the indicator's base size and its `Next <station>` text at 75% white.
- **Label** (700 or 500, 11px, 0.16–0.18em, uppercase, Light 3 or 50–65% of the plate text): fact keys, the indicator's `NOW AT` and `NEXT`, the map's `App Store` / `Live · Rails` sub-labels (0.06em), and the `← → ride` key hints (untracked, 50%).
- **Code** (900, 15px, 1, 0.02em): station codes; the line letter is 0.72em and raised to the top of the square. The size scales with the square: 16px in the map and on every mobile code, 17px for live stations, 20px for map terminals, 22px for the header badge, 18px for the badge under 820px.

### Named Rules
**The Second Line Rule.** Every section heading and every station title that has a qualifier carries its second line in the same face, smaller, lighter and tracked, in English; it is part of the sign, never a kicker above it.

**The Heavy Names Rule.** Anything that names a station (header, section heads, station titles, map names at terminals, next-station links, line names, the indicator code) is 900 weight. Body, legends and labels never exceed 700.

## Layout

The page is a single column capped at 1400px and padded by a fluid gutter (`clamp(20px, 5vw, 64px)`). Five bands stack in reading order: the station board (header), the route map, the line with its stations, the lines-serving list (skills), and the terminus (footer). Vertical rhythm between bands is fluid: clamp(36px, 6vw, 72px) to the map, clamp(56px, 8vw, 110px) to the line, clamp(48px, 7vw, 96px) to skills and to the terminus.

The route map is an eleven-column grid (`1.5fr 1.5fr 1.15fr 1.15fr 1.15fr` then six `1fr`), terminals widest, with a 12px stop gap and the 13px line drawn at 168px from the top through every marker. The grid is padded 80px on the left: a run-in track where the train rests before A01. The train docks with its nose 8px short of each station code's left edge (its 80px box ends there), and the lit segment of the line is scaled to the nose. Terminal app icons (112px) stand above the line, pulled down to touch it. Map stacking: lit segment (0), station codes (1), app icons (2), train (3).

The line band owns a rail at `gutter + 20px` from the left edge; the dim rail, the lit rail and the rail train all share that x (the train's 24px-wide rotated box is centred on it). Stations indent 72px past the gutter so the station mark (22px) sits centred on the rail. Stacking on the rail is fixed: dim rail, lit rail (1), station marks (2), train (3), indicator (5). The indicator is a sticky strip 10px from the top of the viewport, starting 28px right of the rail and running to the band's right edge; every station and the Projects title carry a 64px scroll margin so a jump lands below it. The train's anchor is 38% of the viewport height: the rail train rides to the point of the rail at that height, and riding to a station scrolls the page so the station's mark lands there (+2px), which is what makes the announced station the one you asked for. Station copy is capped at the 62ch measure. At 1100px and above a standard station lays out as a two-column grid, copy on the left (up to 62ch) and stack + exits on the right (240–360px) with a 56px column gap; terminals use a 1.1fr / 1fr split with a 36px gap and the three phone screenshots stepped (second +36px, third +72px) like cars seen from a platform. The About station is 160px photo + copy with a 28px gap.

Inside a station the rhythm is 14px between body elements, 16px from head to body, 36px of station padding top and bottom (48/56 for terminals, 8px top for About). Inline groups use 8–10px gaps; the board header uses 20px between badge and name and 32px between name and actions; the lines-serving rows use an 18px grid gap and 12px vertical padding; the indicator strip uses 12px gaps and 14px side padding.

Breakpoints: at 1100px and below the map names wrap at 13px (terminals 15px, live 14px), the terminal icons shrink to 84px (20px radius), the terminal grid collapses to one column and the phones cap at 640px; at 820px the body drops to 16px, the header stacks (20px gap, 14px between badge and name), the header badge becomes 52px with a 4px ring, the map turns vertical with the line at 23px from the left, a 76px run-in track above A01 (8px left padding) and the train rotated nose-down docking 8px above each code, the app icons shrink to 44px at the row's far right, every map code becomes 48px and every map name 16px, the rail moves to `gutter + 10px` and stations indent 44px, the indicator strip becomes 38px tall (8px gaps, 10px side padding, 24px from the gutter) and drops its `Next` and key hints, the next-station board stacks, the About grid stacks and the photo becomes 112px, the skill band narrows to 14px with the description wrapping under the name, and the phones go two-up (10px gap) with the video spanning full width at 220px. The key hints are also hidden on any device without hover.

## Elevation & Depth

Dark glass, lit objects. Surfaces and sections never carry shadows, fills or borders; depth belongs only to things that could physically sit in front of the display: the ticket, the indicator, app icons, phone screenshots, the portrait and the train. Every drop shadow is black at 80–90% alpha with negative spread, so on navy it reads as the object lifting off the glass rather than a card edge. Objects that are themselves dark (the indicator, the phones) get a 1px light bezel at 12–14% so their edge survives against the ground. Station marks are separated from the rail by a 4px halo in the ground colour; terminal station codes by a ground 4px + rose 3px double ring.

Light is the second depth axis and it is rationed. The rose halo (`--glow`, a zero-offset 14px blur at 55%) belongs to exactly three things, and only where the route is lit: the map line's lit segment, the lit rail behind the train, and the mark of the station the train is at. The dim line and dim rail ahead of the train have no glow. The train is a light source only while it moves: an amber headlight beam ahead of the nose (an 80px gradient from Headlight Amber to transparent, clipped to a widening wedge) and a soft white halo on the glyph (a 10px drop-shadow at 55%); at rest it is matte. Nothing else glows: buttons, codes, chips, headings, bands and phones are matte.

### Shadow Vocabulary
- **Route glow** (`box-shadow: 0 0 14px rgba(255, 123, 114, 0.55)`): the map's lit segment, the lit rail, and the current station mark (stacked after its 4px ground halo).
- **Ticket lift** (`box-shadow: 0 10px 22px -10px rgba(0, 0, 0, 0.8)`; hover `0 12px 24px -10px rgba(0, 0, 0, 0.8)`): the CV ticket.
- **Indicator lift** (`box-shadow: 0 0 0 1px rgba(238, 242, 255, 0.12), 0 12px 28px -10px rgba(0, 0, 0, 0.8)`): the sticky in-car indicator strip; the 1px ring is its bezel.
- **Object lift** (`box-shadow: 0 18px 36px -14px rgba(0, 0, 0, 0.9)`): the terminal icons on the map, the 48px station icon and the portrait.
- **Phone lift** (`box-shadow: 0 0 0 1px rgba(238, 242, 255, 0.14), 0 18px 36px -14px rgba(0, 0, 0, 0.9)`): screenshots and the trailer video; the ring is the bezel that keeps a black app screen legible on navy.
- **Train halo** (`filter: drop-shadow(0 0 10px rgba(238, 242, 255, 0.55))`): the train glyph while `is-moving` only; off under reduced motion.
- **Headlight** (`linear-gradient(to right, rgba(255, 162, 31, 0.45), rgba(255, 162, 31, 0))`, 80×24 ahead of the nose, `clip-path: polygon(0 40%, 100% 0, 100% 100%, 0 60%)`; `to bottom`, 24×80 and `polygon(40% 0, 60% 0, 100% 100%, 0 100%)` when the train is nose-down): fades in over 160ms while the train moves; hidden under reduced motion.
- **Mark halo** (`box-shadow: 0 0 0 4px #0b1326`): every station mark; the current one adds the route glow.
- **Interchange ring** (`box-shadow: 0 0 0 4px #0b1326, 0 0 0 7px #ff7b72`): the double ring on a terminal's station code, at every width.

### Named Rules
**The Objects Cast Rule.** Only objects cast shadows; text blocks, sections, lists and the page never do. If a new element is not something you could hold in front of the display, it gets no shadow.

**The Light Rule.** The rose glow is applied only to the route, and only where it is lit: the map's lit segment, the lit rail and the active station mark. The dim line ahead of the train never glows. The train lights up only while it moves: amber headlight ahead, white halo on the glyph. Everything else is matte; a glow on a button, a heading, a chip or a card is a violation, not a variant.

**The Line Is The Rule Rule.** Structural rules are the route line itself: the 13px map line, the 10px rail, the 10px terminus top edge. The next-station board carries no rule and nothing stacks with hairlines. The only other 1px lines are on objects, not between content: the bezel rings on the indicator and the phones, the divider inside the indicator strip before `Next`, and the outlines of the `kbd` key hints.

## Shapes

Transit signage geometry: rounded squares, not pills. The radius scale as used is 4, 5, 6, 7, 10, 11, 12, 14, 18, 20, 26 px and 50%. Station codes are 42px rounded squares (10px radius) with a 3px rose ring on a board-navy fill; the header badge is 64px with a 14px radius and a 5px ring (52px and 4px under 820px); map codes 48px, live-station codes 50–54px, terminals 64px. Buttons share the sign radius (10px) with a 2px stroke at 35% light, a light fill or a rose fill; chips are 14px squares with a 4px radius; the rail, the lit rail and skill bands are rounded by half their width (5px), the map line and its lit segment by 7px. Dots and station marks are circles. The train is a side-view silhouette in an 80×24 viewBox: a body with 4-unit corners at the tail and a tapered nose, a 2-unit roof stripe, five 8×7 windows with 1.5-unit corners and a sixth that follows the nose, two 1-unit door seams and a 1.7-unit headlamp; it is never a circle or a dot. Photographic objects round more generously: 12px for a 48px icon, 18px for phones (14px on mobile), 20px for the portrait and for the 84px tablet app icon, 26px for a 112px app icon. Incidental radii: 6px on the skip link, 11px on the 44px mobile app icon, 4px on the `kbd` hints; the 4px radius is also the focus ring's corner. Nothing is clipped except the app-icon frames and the headlight wedge.

## Components

### Buttons
All buttons are flat sign plates: 10px radius, 700 weight, 44–48px minimum height, 8–10px gap to an 18–20px stroked icon. Three fills exist: light (the ticket and every hover), rose (the primary exit) and none (outlined at 35% light).
- **Ticket (primary, header):** solid light plate with ground-navy text, `10px 18px 10px 14px`, a single-line `View CV` label after a dotted stub icon; carries the ticket lift and rises 1px on hover and focus (220ms).
- **Action (header secondary):** transparent with a 2px stroke at 35% light, `10px 16px`; inverts to a solid light plate with navy text on hover and focus (160ms).
- **Exit (station links):** same as Action at 15px / 44px / `9px 16px`.
- **Exit, primary:** rose fill, rose stroke, navy text; hover and focus invert to the light plate. One per station: App Store, Live, or GitHub when it is the only link.
- **Focus:** every focusable element gets a 3px Mita-blue outline offset 3px, 4px radius.

### Chips
Stack lines. A 14px coloured square (4px radius) before a 14px/700 label in Light, laid out as a wrapping row with 8px row and 14px column gaps. No fill, no border; the square carries the line colour via a `--c` custom property set by the line class (`l-rails`, `l-pg`, `l-swift`, `l-storekit`, `l-ai`, `l-stimulus`, `l-js`, `l-ejs`, `l-tools`), falling back to Light 3.

### Cards / Containers
None. Stations are open regions on the glass, structured by the rail, the station mark and the station code. Do not introduce a bordered, filled or glowing container.

### Inputs / Fields
None in the build.

### Navigation
- **Route map:** an ordered list of eleven stop links; each is a vertical stack of code, name and sub-label centred on the line, with a 48px tap target; hover (fine pointers only) and focus scale the code 1.06 (220ms), press scales it 0.96 (100ms). Tapping a stop rides the map train to it with the doors pulse, scrolls the page so the station's mark lands under the rail train, and replaces the hash. On load the line draws itself left to right (1100ms) and the stops light in sequence (520ms each, 70ms apart, from 260ms, rising 6px from transparent with a brightness flash). Under 820px it becomes a vertical diagram with the line on the left drawing top to bottom and each stop a row.
- **Keys:** `→` or `j` rides to the next station, `←` or `k` to the previous one (ignored inside form fields); the page scrolls and the trains do the rest.
- **Next-station board:** three links in a 3-column grid, 900 weight, clamp(18px, 2.2vw, 24px), each with a 13px/500 second line in Light 3 (`Next stop`, `All stations · 11 stops`, `Connecting lines`); no rule above, hover and focus turn rose. Stacks without hairlines under 820px.
- **Skip link:** light plate with navy text, 6px radius, off-canvas until focused.
- **Terminus:** footer with contact text on the left and a primary (rose) exit `View CV` plus an outlined `Back to the start` exit on the right, under the 10px rose line.

### Station Code (signature)
The rounded square with the rose ring, `A` small and raised, number large, in 900 weight. Board-navy fill, light text, 3px rose ring at 42px; scales to 48/50/54/64px with 5px rings for terminals, which add the ground + rose interchange double ring. Appears in the header, on the map and at the head of every station. On the map, the station the train has just docked at pulses once as the doors open (`is-boarding`: scale 1 → 1.14 → 1 over 420ms on the decelerating ease, the class held 450ms).

### Station (signature)
A section on the rail: a 22px board-navy mark with a 5px ring and 4px ground halo, centred on the rail. At rest the ring is dim rose; once the train has reached or passed the station (`is-passed`) the ring is full rose; while the station is the one in view (`is-here`) the mark fills rose, scales 1.25 (500ms) and takes the route glow. A station is "here" when its mark is at or above the rail train's position (within 2px). Head is a row of code, mark, optional 48px app icon and title; body is copy, stack chips, exits; terminals add phone screenshots.

### Train (signature)
One SVG glyph (`.train__glyph`, viewBox 0 0 80 24) seen twice: a side-view car with the body in Light, the roof stripe in rose, the windows in Board Navy, the door seams in Navy Glass at 50% and the headlamp in Ginza orange. It is positioned absolutely, ignores the pointer, and is moved only by `transform`. While `is-moving` it extends an amber headlight beam ahead of the nose and takes the white halo; at rest both are off. On the route map (`.train--map`) it rides the line nose-right, resting in the 80px run-in before A01 and docking with its nose 8px short of each station code; the map's lit segment is scaled to its nose. On the rail (`.train--rail`) the glyph is rotated 90° about its 12px tail corner so it rides nose-down, 24px wide and centred on the rail, with the beam pointing down the rail. Under 820px the map train is also rotated nose-down and docks 8px above each code.

Both copies are driven by the same critically damped spring (`Spring(response, ratio)` with ratio 1, `k = (2π / response)²`, `c = 2 · ratio · √k`, semi-implicit Euler in four substeps per frame, settled when velocity and distance are both under 0.5): the rail train on a 0.45s response toward the rail point 38% down the viewport, re-targeted on every scroll; the map train on a 0.55s response between stop indices, interpolating dock points. A tap, key or scroll mid-ride redirects the spring from where it is, so the train never jumps. Reduced motion: both springs set their value instantly, the beam is hidden, the halo and the doors pulse are off, and ride scrolls use `auto` instead of `smooth`.

### In-Car Indicator and Lit Rail (signature)
The display above the doors as one strip: a sticky display-black plate (10px radius, 42px tall, `0 14px`, 1px light bezel, indicator lift) 10px from the top of the viewport, 28px right of the rail, carrying in a row `NOW AT` (11px tracked uppercase at 65%), the current code (18px/900 in rose), the station name (13px/700, ellipsised) in pure white, then pushed right behind a 1px 14% divider `NEXT <station>` (12px/500 at 75%, `Terminus` after the last station) and the `← → ride` key hints (11px at 50%, keys as 1px-outlined 4px-radius `kbd`). Under 820px it is 38px tall with 8px gaps and 10px side padding, and `Next` and the keys are hidden; the keys are also hidden without hover. The lit rail is a second 10px rose rail with the route glow, scaled from the top of the line band to the rail train's position (`transform: scaleY`, set each frame from the rail spring) over the dim rail, so the line is bright as far as the train has come. The strip's text, the station classes and the lit rail are updated by the script the moment the rail train passes a mark; the opening animation only runs under `prefers-reduced-motion: no-preference`.

### Lines Serving (signature)
Skill rows: an 18×36px line-coloured band (5px radius), a 140px 18px/900 line name, then the stations it reaches in Light 2 at 500; 12px vertical padding, 18px grid gap, no rules between rows. On mobile the band shrinks to 14px and the description wraps under the name.

## Do's and Don'ts

### Do:
- **Do** keep Asakusa rose (`route`) for the line, the train's roof stripe, the rings and marks, the dots, the indicator code, the one primary exit per station, link hover and selection; use dim rose (`route-dim`) only for the route switched off (the unlit map line and rail ahead of the train, the unreached mark ring, the scrollbar).
- **Do** give every new station a code in the ringed rounded square (42px, 10px radius, 3px ring, board-navy fill), a stop on the map the train can dock at, and a mark on the rail that starts dim and lights when the train passes.
- **Do** set every name at 900 weight in Zen Kaku Gothic New and carry a 13px/500 tracked English second line on section headings; keep all copy English.
- **Do** use stroked 24-viewBox SVG pictograms at 1.8px stroke, round caps and joins, sized 18–20px.
- **Do** cap copy at the 62ch measure and keep body at 17px/1.6 (16px under 820px).
- **Do** keep shadows to lifted objects, downward with negative spread, in black at 80–90% alpha, with a 1px 12–14% light bezel on objects that are themselves dark.
- **Do** keep the route glow on exactly the map's lit segment, the lit rail and the active station mark, and the amber headlight and white halo on the moving train alone.
- **Do** keep the train as the one authored moment: the opening light-up, the two critically damped springs (rail 0.45s, map 0.55s, no overshoot) and the doors pulse on docking; gate the opening behind `prefers-reduced-motion: no-preference`, set the springs instantly and switch off beam, halo and pulse under reduced motion; state transitions stay at 100–220ms on the shared eases.
- **Do** keep every interactive target at 44–48px minimum height and the 3px Mita focus ring.

### Don't:
- **Don't** add cards, boxed sections, filled panels or bordered containers; the build has none.
- **Don't** add kickers or eyebrows above headings; the second line lives below or beside the name, never above it.
- **Don't** use a Tokyo line colour for anything other than naming its skill line as a square or band; the train's Ginza headlamp is the one lamp, not a precedent.
- **Don't** introduce a second typeface, a monospace face, or a system display face; one signage grotesque carries everything, key hints included.
- **Don't** draw decorative dividers or hairlines between stations or between links; the rail is the only vertical rule and the route line the only horizontal one.
- **Don't** use icon fonts, glyph icons or filled emoji-style icons; the Apple mark and the train are the only filled paths and both are inline SVG.
- **Don't** put a glow, a neon stroke or a coloured halo on a button, heading, chip, code, card or phone, and never on the dim line ahead of the train; light belongs to the lit route and the moving train only.
- **Don't** fill a secondary button or the ticket with rose, or tint the ground; the rose fill is reserved for the one primary exit per station.
- **Don't** draw a second train, a dot marker or a streak; there is one train glyph, seen twice, and it moves only on its springs.
