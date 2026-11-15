# Flutter Craft — 8-week roadmap

This roadmap is the programme map. Daily tasks live under `challenges/`; each app has its own implementation and README.

## Week 1 — Pocket Finance
**Focus:** Dart fundamentals, Flutter project structure, widget composition, layout constraints, Material 3, responsive UI and basic navigation.

**Outcome:** a finance dashboard with account summary, transaction list, categories and a coherent visual system. Begin with mock data; do not connect real financial accounts.

## Week 2 — TasteMap
**Focus:** image assets and network images, scrolling, reusable cards, search, filtering, navigation and detail screens.

**Outcome:** a discovery app where users browse places, search and filter results, and open detailed place pages.

## Week 3 — HabitFlow
**Focus:** stateful widgets, state ownership, forms, validation, user input, local persistence and small interaction details.

**Outcome:** a habit tracker that can create, edit, complete and persist habits across app restarts.

## Week 4 — Roam
**Focus:** editorial and travel-inspired layouts, visual hierarchy, complex composition, transitions, Hero animations and map/location UI patterns.

**Outcome:** a polished travel discovery experience with meaningful transitions and thoughtfully composed content.

## Week 5 — Forma
**Focus:** catalogue architecture, product variants, cart state, derived state, reusable components and a consistent design system.

**Outcome:** a functional shopping flow using mock products and a local cart. No real payments.

## Week 6 — Connect
**Focus:** messaging layouts, gestures, keyboard-aware interfaces, conversation state, loading/error/empty states and realtime UI patterns.

**Outcome:** a convincing messaging experience using mock or local data. Do not expose private data or build an unprotected public chat backend.

## Week 7 — Pulse
**Focus:** animation controllers, implicit and explicit animations, charts/data visualisation, CustomPainter, accessibility and performance.

**Outcome:** a data-rich experience with deliberate motion, readable visualisations and accessible controls.

## Week 8 — Capstone
**Focus:** product definition, original design, architecture, persistence, API integration where appropriate, testing, polish and documentation.

**Outcome:** one original mobile product that demonstrates the ability to take an idea from requirements to a tested, documented demo.

## Completion standard for every app

- The core user journey works end to end.
- Layouts are checked on more than one screen size.
- Loading, empty, error and success states are considered where relevant.
- Interactive controls have meaningful behaviour and accessible labels.
- Code is formatted; static analysis and relevant tests pass.
- The app README explains its purpose, features, setup and design decisions.
- Screenshots or a short demo are added when the experience is ready.

## Scope discipline

Do not add a package merely because it is popular. First understand the underlying Flutter/Dart concept, then decide whether a dependency makes the code safer or clearer. Keep projects independently runnable and avoid premature shared abstractions.
