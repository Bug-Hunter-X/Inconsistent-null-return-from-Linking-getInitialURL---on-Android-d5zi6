This bug occurs when using the Expo `Linking` API to handle deep links on Android.  Sometimes, the `getInitialURL` method returns `null` even when a deep link is successfully opened. This inconsistency makes it difficult to reliably handle initial app launch URLs.

```javascript
import * as Linking from 'expo-linking';

Linking.getInitialURL().then(url => {
  if (url) {
    // Handle URL
    console.log('Initial URL:', url);
  } else {
    // Handle null URL - This happens inconsistently
    console.log('Initial URL is null');
  }
});
```