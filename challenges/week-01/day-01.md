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
flutter devices
```

Confirm Flutter and Dart are available, read the Android section of `flutter doctor -v`, and make sure an Android device or emulator is detected. If something is broken, record the exact error and investigate it before moving on.

## Part B — Create the app

The app directory already contains this README, so **do not run `flutter create .` here**; that could overwrite project documentation.

1. From `apps/01-pocket-finance`, generate the Flutter starter project in a temporary sibling directory.
2. Move the generated project files into `apps/01-pocket-finance`, keeping this README.
3. Run the app on your Android device or emulator.
4. Inspect `lib/main.dart` and identify the entry point, `runApp()`, the root widget and the first screen widget.
5. Make one small, deliberate change to the starter screen and hot reload.

For example, from the app directory:

```bash
flutter create --project-name pocket_finance ../pocket_finance_scaffold
```

Then move the generated files from `../pocket_finance_scaffold/` into the current directory, **excluding its README.md** so this project brief stays intact. Remove the temporary scaffold directory after checking the files were moved correctly.

Finally:

```bash
flutter pub get
flutter devices
flutter run
```

## Part C — Dart warm-up

Create `tool/day_01_warmup.dart` (create the `tool/` directory if needed). Write a small Dart program that:

- declares a user's display name as a `String`;
- stores a fictional account balance as a `double`;
- stores three fictional transaction amounts in a `List<double>`;
- writes a function that returns the sum of the transaction amounts;
- prints the display name, balance and calculated total.

Use fictional values only. Run it with:

```bash
dart run tool/day_01_warmup.dart
```

Do not copy a complete solution. Use the [Dart language tour](https://dart.dev/language) if you need a reference.

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
