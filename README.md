# Flutter Craft ✦

A hands-on Flutter learning journey focused on mobile UI/UX engineering, full-stack application development, design systems, and crafting beautiful mobile experiences.

> **The goal:** become a developer who can understand, design, build, test, and ship polished mobile applications — not just reproduce screenshots.

## The journey

Over eight focused weeks, you'll build eight progressively more demanding applications. Each project introduces new Flutter and Dart concepts while reinforcing what came before.

| Week | Project | Main focus |
|---|---|---|
| 01 | [Pocket Finance](apps/01-pocket-finance/README.md) | Dart, widgets, layout, responsive dashboards |
| 02 | [TasteMap](apps/02-tastemap/README.md) | Lists, images, navigation, search and filtering |
| 03 | [HabitFlow](apps/03-habitflow/README.md) | State, forms, validation and persistence |
| 04 | [Roam](apps/04-roam/README.md) | Editorial UI, composition, transitions and motion |
| 05 | [Forma](apps/05-forma/README.md) | E-commerce, architecture and state management |
| 06 | [Connect](apps/06-connect/README.md) | Messaging UI, gestures and realtime patterns |
| 07 | [Pulse](apps/07-pulse/README.md) | Animation, visualisation, CustomPainter and accessibility |
| 08 | [Capstone](apps/08-capstone/README.md) | An original, polished end-to-end mobile product |

See the detailed [roadmap](ROADMAP.md) and [challenge index](challenges/README.md).

## How to use this repository

1. Work through one daily challenge at a time. Start with [Week 1](challenges/week-01/README.md).
2. Build and run the app yourself. Read the errors; use the debugger; consult the Flutter documentation.
3. Commit in small, meaningful steps.
4. Record what you learned, what confused you, and what you want to revisit in [LEARNING_LOG.md](LEARNING_LOG.md).
5. Share screenshots, test output, or a focused code snippet when asking for feedback.

Challenges are deliberately written as tasks, not copy-paste tutorials. Try first; use hints only when you need them.

## Development setup

You need:

- Flutter SDK (stable channel) and the Dart SDK bundled with it
- Android Studio or another configured IDE
- An Android emulator or physical Android device
- Git

Verify your installation:

```bash
flutter --version
dart --version
flutter doctor -v
git --version
```

Run an app from its own directory:

```bash
cd apps/01-pocket-finance
flutter pub get
flutter run
```

Each application will be independently runnable and will contain its own `pubspec.yaml`, source, tests, assets, and project README once that project is scaffolded.

## Learning principles

- **Understand the fundamentals.** Prefer built-in Flutter and Dart capabilities before adding packages.
- **Build complete experiences.** A screen is a component of a product; interactions, empty states, errors and accessibility matter too.
- **Design with intention.** Study references, use Figma for larger projects, and document design decisions.
- **Progress deliberately.** Add architecture and dependencies when the project needs them, not just because a tutorial uses them.
- **Test your work.** Use formatting, static analysis, widget tests and manual device checks.
- **Keep it sustainable.** Consistency matters more than pretending every day will be perfect.

## Suggested technology progression

Flutter + Dart → Material 3 and theming → navigation → local persistence → state management → REST APIs → authentication and user-specific data → animation and advanced rendering → testing and release preparation.

Riverpod, Dio, go_router and other packages may be introduced when their use is justified. The aim is to understand the problem each dependency solves.

## Safety and scope

Pocket Finance is a learning application. Use mock data during development. Do not enter real banking credentials, connect real accounts, or implement real-money transfers or payments.

## Contributing

This is a personal learning repository, but constructive feedback and learning-focused contributions are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT. See [LICENSE](LICENSE).
