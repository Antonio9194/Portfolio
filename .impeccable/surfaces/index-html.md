---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: ["css/style.css","js/app.js"]
---

# Surface brief — index.html (the whole portfolio, single page)

Scope: the one page. Mode: Experience — the work leads from the first viewport; the interface recedes into wayfinding.
Audience: recruiters/hiring managers, cold, 30–60 seconds. Job: decide to open the CV or a live project. Proof: live App Store listings, live Rails deploys, GitHub repos, real screenshots. Constraints: static HTML/CSS/JS, single page, no invented numbers; LinkedIn and Velora GitHub URLs not supplied → omitted.
Memorable moment: the in-car route display — a line runs down the whole page, each project is a station on it, and the "next station" marker advances as you scroll.
Unresolved: LinkedIn URL, Velora repo URL, Velora App Store screenshots (owner to supply; station A02 shows the icon inline until then).

## Direction contract

THESIS: Antonio's work as one Tokyo transit line — every shipped product a numbered station, the two App Store apps the terminals — so a recruiter reads the whole career the way they read a route map, in seconds. It refuses the category arrangement: no hero-name-over-avatar, no grid of equal project cards.

OWN-WORLD (revised 2026-10-08 at the owner's request — "night in-car display"): the LCD above the train door at night — deep navy glass (#0b1326) ground, light ink (#eef2ff), a rose route line (#ff7b72) that glows and runs the whole height, dim where the train has not yet been and lit behind it, real Tokyo line colours as the skill lines (Ginza orange #f39700, Marunouchi red #e60012, Tozai #009bbf, Chiyoda #00bb85, Hanzomon #8f76d6, Namboku #00ac9b, Oedo #b6007a, Mita #0079c2, Shinjuku #6cbb5a, Yurakucho #c1a470). One signage sans (Zen Kaku Gothic New), English copy only (Japanese sub-labels removed 2026-10-09), heavy weights for station names, tabular numerals for station codes, pictogram-grade SVG icons. Station codes in rounded squares with a coloured ring. No boxes, rules used only as the line itself.

STORY: "This person ships" — visible in the first second from the line map; "the two big stations are real apps on the App Store" within five; the CV is the ticket, one tap away; scrolling is riding the line through everything else he built.

FIRST VIEWPORT: Station-board header top-left: station code badge, ANTONIO VINCIGUERRA as the station name, "iOS apps · Rails backends · Tokyo, Japan" as the station description; top-right the ticket (CV) and GitHub. Below, filling the rest of the viewport: the horizontal route map — the rose line with twelve numbered stations, Soul Bound (A01) and Velora (A02) as large interchange terminals carrying a real screenshot/icon beside the marker, the rest as dots with names; "Next station" board under it. Primary action: the ticket (View CV); secondary: tap any station.

FORM: Tokyo transit wayfinding, night in-car rendition — candidate 1 of my ordered list (my pick, chosen over the roll's candidate 6, the goshuin book); seed key 7321aac9. Signature interaction: one train, seen twice. On the route map a side-view train glyph (`.train--map`, 80×24, roof stripe in the route colour, lit windows, amber headlamp) docks on the line just short of each station sign; tapping a station rides it there on a critically damped spring (response 0.55s, no overshoot) and the page scrolls so that station's mark lands under the rail train; the sign pulses once as the doors open. On the vertical rail the same glyph (`.train--rail`, nose down) follows the reader on a 0.45s spring to a point 38% down the viewport, lighting the rail behind it and announcing each mark it passes on the in-car display strip (`.indicator`, sticky above the content: Now at / code / name / Next / ← → ride). Keys ← → and j k ride to the previous/next station. On load the route line draws itself and stations light in order. Reduced motion: no springs (instant set), no headlight or halo, no door pulse. All copy is English; the earlier Japanese sub-labels were removed on 2026-10-09 at the owner's request (a separate Japanese page is a possible follow-up, not built). Code-led (no image generation available).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
