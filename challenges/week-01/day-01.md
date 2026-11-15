# Day 1 — Environment check and your first Flutter app

**Week 1 · Pocket Finance**

## User story

As a developer starting this journey, I want a working Flutter development environment and a tiny app that I understand, so I can confidently build on it throughout the programme.

## Part A — Verify your environment

From a terminal, run:

```bash
flutter --version
dart --version
flutter doctor -v
git --version
```

- Confirm Flutter and Dart are available.
- Read the output of `flutter doctor -v`; identify any issue that would prevent Android development.
- Confirm that an Android device or emulator is visible with `flutter devices`.
- If something is broken, record the exact error and investigate it before moving on. Do not hide warnings by blindly installing packages.

## Part B — Create the app

1. From the repository root, create a Flutter application in `apps/01-pocket-finance`. If the directory currently contains only this README, create the project in a temporary sibling directory and move the generated project files into this directory without losing this README.
2. Give the app a clear name such as `pocket_finance`.
3. Run it on your Android device or emulator.
4. Inspect `lib/main.dart` and identify the entry point, `runApp()`, the root widget and the first screen widget.
5. Make one small, deliberate change to the starter screen and hot reload.

Useful commands:

```bash
flutter create --project-name pocket_finance .
flutter pub get
flutter devices
flutter run
```

Run `flutter create` from inside `apps/01-pocket-finance` only after checking that the directory is ready. If Flutter refuses to generate into a non-empty directory, use a temporary directory and move the generated files carefully.

## Part C — Dart warm-up

Create a separate file named `tool/day_01_warmup.dart` (create the `tool/` directory if needed). Write a small Dart program that:

- declares a user's display name as a `String`;
- stores a fictional account balance as a `double`;
- stores three fictional transaction amounts in a `List<double>`;
- writes a function that returns the sum of the transaction amounts;
- prints the display name, balance and calculated total.

Use fictional values only. Run it with:

```bash
dart run tool/day_01_warmup.dart
```

Do not copy a complete solution. Use the Dart language tour if you need a reference.

## Acceptance criteria

- [ ] Flutter and Dart version commands run successfully.
- [ ] You inspected `flutter doctor -v` and recorded any remaining Android setup issue.
- [ ] An Android device or emulator is detected.
- [ ] The Pocket Finance starter app launches successfully.
- [ ] You can explain what `main()`, `runApp()`, `MaterialApp` and the root screen widget do.
- [ ] Your Dart warm-up runs and prints the expected calculated total.
- [ ] You made at least one change and verified it with hot reload.
- [ ] You committed the work with a meaningful message.

## Stretch goals

- Add a fourth transaction amount and confirm the total updates.
- Change the warm-up function to accept a list parameter rather than relying on a global variable.
- Explain the difference between `int`, `double`, `String` and `bool` in your own words.

## Verification

Run the app on a real device or emulator. Capture a screenshot of the running app and include the terminal output for the Dart warm-up. If Android setup is blocked, share the relevant `flutter doctor -v` section and exact error instead.

## Reflection

1. What happens when Flutter executes `main()`?
2. What is a widget in Flutter?
3. What did `flutter doctor` report that you did not understand at first?
4. What is one thing you can now explain without looking at a tutorial?
