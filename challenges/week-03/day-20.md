# Day 20 — Persist habits locally

**Week 3 · HabitFlow**

## User story

As a user of this week's app, I want to keep habit data after restarting so that the experience is useful, understandable and reliable.

## Your task

Persist the habit collection using lightweight local storage. Load saved data on startup and handle first-run/empty storage.

Work in this week's existing app. First inspect the current code and run it. Make the smallest coherent implementation that satisfies the requirements; do not replace working code without a reason. Use Flutter/Dart concepts introduced so far, and explain unfamiliar code in your own words.

## Requirements

- Keep the feature focused; do not add unrelated screens or dependencies.
- Use typed, readable Dart and split widgets when doing so improves clarity.
- Handle the normal state and at least one relevant edge case.
- Keep controls accessible with meaningful labels and sensible touch targets.
- Use fictional/mock data unless this brief explicitly calls for local persistence or a safe API boundary.

## Acceptance criteria

- [ ] Data survives app restart
- [ ] First launch has a sensible state
- [ ] Serialization/deserialization is tested
- [ ] Storage errors do not crash the app.
- [ ] The app runs on the configured Android device or emulator without a new runtime exception.
- [ ] Run dart format and flutter analyze; do not introduce new analyzer issues.

## Stretch goal

Add a schema/version field to the stored payload.

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
