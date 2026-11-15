# Day 6 — Responsive states and accessibility

**Week 1 · Pocket Finance**

## User story

As a user of this week's app, I want to use the dashboard across screen sizes so that the experience is useful, understandable and reliable.

## Your task

Adapt the dashboard to narrow and wider widths. Add empty transactions and semantics/labels for meaningful controls and information.

Work in this week's existing app. First inspect the current code and run it. Make the smallest coherent implementation that satisfies the requirements; do not replace working code without a reason. Use Flutter/Dart concepts introduced so far, and explain unfamiliar code in your own words.

## Requirements

- Keep the feature focused; do not add unrelated screens or dependencies.
- Use typed, readable Dart and split widgets when doing so improves clarity.
- Handle the normal state and at least one relevant edge case.
- Keep controls accessible with meaningful labels and sensible touch targets.
- Use fictional/mock data unless this brief explicitly calls for local persistence or a safe API boundary.

## Acceptance criteria

- [ ] No horizontal overflow at narrow width
- [ ] Wider layout uses space intentionally
- [ ] Empty state is understandable
- [ ] Interactive elements have accessible labels.
- [ ] The app runs on the configured Android device or emulator without a new runtime exception.
- [ ] Run dart format and flutter analyze; do not introduce new analyzer issues.

## Stretch goal

Enable large system text and inspect clipping.

## Verification

1. Run dart format on the app.
2. Run flutter analyze.
3. Run flutter test; add a focused test for testable logic or interaction.
4. Manually exercise the main path and the edge case.
5. Capture a screenshot or short recording if the result is visual.

## Reflection

- What Flutter/Dart concept did you understand better today?
- What bug or confusing behaviour did you encounter, and how did you isolate it?
- What would you improve if you had another hour?

## Submit for review

Share your implementation (commit/PR or relevant code), a screenshot/recording where useful, analyzer/test output, and any blocker. Do not paste secrets or real personal/financial data.
