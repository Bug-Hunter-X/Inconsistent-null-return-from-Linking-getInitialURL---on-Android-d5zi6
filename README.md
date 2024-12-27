# Inconsistent null return from Linking.getInitialURL() on Android in Expo

This repository demonstrates a bug in Expo's `Linking.getInitialURL()` API on Android.  The method sometimes returns `null` even when the app is opened via a deep link, leading to unreliable handling of initial URLs.

## Bug Description

The `Linking.getInitialURL()` method is used to retrieve the URL that launched the application. However, on Android, this method inconsistently returns `null`, even when a deep link is successfully opened. This makes it challenging to build reliable deep linking functionality.

## Reproduction

1. Clone this repository.
2. Run `expo start`.
3. Create a deep link and attempt to open the app with that link on an Android device.
4. Observe the console logs – occasionally, `null` will be logged instead of the expected URL.

## Potential Solutions (See bugSolution.js)

The solution involves implementing a fallback mechanism using other methods such as checking the intent data directly (more complex) or adding error handling and retries. This is not an ideal solution, and a fix within Expo would be preferred.