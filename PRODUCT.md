# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recruiters and hiring managers evaluating Antonio Vinciguerra for a developer role (Tokyo-based or remote). They arrive cold — from a CV link, LinkedIn, or a job application — skim for 30–60 seconds, and need to decide whether to open the CV, open a project, or move on.

## Product Purpose

A single-page personal portfolio that proves Antonio ships real software. Success is a recruiter opening the resume or a live project link, and remembering him as "the one who has two apps on the App Store and runs Rails backends", not "another bootcamp graduate".

## Positioning

Lead with two things at once, equally weighted:

1. **Shipped iOS products with real users** — Soul Bound (Habit RPG, App Store, launched 14 Sep 2026) and Velora (expense tracker, App Store, live, paying subscribers). Native Swift/SwiftUI over Rails JSON backends, StoreKit 2 subscriptions, Sign in with Apple, widgets, Meta/Apple ads attribution.
2. **Full-stack Rails developer** — the full breadth of Rails projects, from production tools (Hotel Finance Tracker, Inventory Manager, Morikoya) to Le Wagon exercises. Breadth stays visible; the exercises are not dropped.

The claim a neighboring bootcamp portfolio could not truthfully copy: 8 years of hotel-operations experience turned into production software he operates himself, and two App Store apps built solo, backend to native front end.

## Operating Context

- Antonio lives in Tokyo. Background: 8 years in hospitality managing hotel operations, then Le Wagon's full-stack web development bootcamp; led a hotel-website project as team lead.
- Stack he actually uses: Ruby on Rails, PostgreSQL, Stimulus/Hotwire, Swift/SwiftUI (native iOS, WidgetKit, StoreKit 2), OpenAI API, Railway/Heroku/Render for deploys.
- The site is a static webpack project: `index.html`, `css/style.css`, `js/app.js`; `npm start` runs the dev server, `npm run build` produces the prod bundle.

## Capabilities and Constraints

- Single page, anchor navigation (About / Projects / Skills); keep it single-page.
- Static HTML/CSS/JS only — no framework migration.
- Fonts via Google Fonts; icons currently via Font Awesome kit (replaceable).
- Contact: anto.vinciguerra@hotmail.com, GitHub https://github.com/Antonio9194, resume at `img/CV.pdf`.
- **Undecided / not supplied:** LinkedIn URL (current HTML has a placeholder `yourprofile`) and Velora's GitHub URL (current HTML has an empty href). Neither may be invented; omit the link until supplied.
- Soul Bound is live on the App Store now: https://apps.apple.com/app/id6805369076. Velora is live: https://apps.apple.com/app/id6771303753.
- MoriKoYa must be presented only as a hotel management web app project (room availability, reservations, bookings); the site does not claim Antonio owns or runs the hotel.

## Brand Commitments

Name: "Antonio Vinciguerra". No logo. Existing favicon reference (`/smoke.png`) is broken/absent — not binding. No binding visual constraints were given; the current look (dark navy, Inter/Poppins, card grid) is evidence and anti-reference for the redesign, not a commitment.

## Evidence on Hand

- `img/avatar.png` — portrait used in the hero.
- `img/CV.pdf` — resume.
- Live URLs: Hotel Finance Tracker (hotelfinance.up.railway.app), Velora (velorapp.up.railway.app + App Store), Soul Bound (App Store), Inventory Manager (inventorymanage.up.railway.app), Morikoya (morikoya-3311853fd76f.herokuapp.com), Watch List, Airbnb-like, Yelp-like, Task Manager (Render), plus GitHub repos for each; Ping Bot and Insurance Manager are repo-only. Ivy was removed from the site at the owner's request on 2026-10-08.
- App Store screenshots and the Soul Bound trailer exist in the other repos (`~/Downloads/appstore` captures for Velora; `SoulBound/public/landing/soul-bound.mp4`), reusable if copied in.
- Facts carried over from the previous site's own copy (owner-authored): birth date 14 Sep 1991 shown under contact; Velora "supports 8 languages".
- Facts from the owner's Soul Bound Field Manual (artifact, 2026-08-31): 11 languages, 3D chests rendered in SceneKit, StoreKit 2 gem bundles verified server-side, Sign in with Apple, Home/Lock Screen widgets.
- Facts from the Velora economy work (2026-09-09): free plan with 5 metered AI entries/month, Plus subscription monthly/yearly with a one-week free trial on yearly, Sign in with Apple and Google.
- No testimonials, no download numbers, no press — none may be fabricated.
- Missing asset: Velora has no App Store screenshots on disk; its station carries only the app icon until the owner supplies captures.

## Product Principles

1. Proof over adjectives: every claim points at a live link, a store listing, or a repo.
2. The two App Store apps are the headline; everything else is depth, not noise — breadth stays visible but ranked.
3. A recruiter must find the CV and a live project within one screen and one scroll.
4. No invented facts: missing links stay missing, no numbers that aren't real.
5. Fast, static, single page — nothing that needs a server.

## Accessibility & Inclusion

No product-specific requirement established beyond ordinary web accessibility (keyboard-reachable links, readable contrast, reduced-motion respect).
