# Flutter Integration

## ⚠️ Currently Unsupported

**Flutter is currently not supported by ThriveStack Analytics.**

### Why Flutter is Unsupported

ThriveStack Analytics is designed for web browsers and relies on browser-specific APIs. Flutter applications run in a native mobile environment, which means:

- No access to browser APIs (localStorage, cookies, etc.)
- Different JavaScript runtime (Dart VM vs V8)
- Native UI components instead of DOM elements
- Network requests handled differently
- No web-specific tracking capabilities

### Alternative Solutions

If you're building a Flutter application, consider these alternatives:

1. **Mobile Analytics Platforms**:
   - Firebase Analytics
   - Mixpanel Mobile SDK
   - Amplitude Mobile SDK
   - Segment Mobile SDK
   - AppsFlyer

2. **Flutter-Specific Analytics**:
   - **Firebase Analytics for Flutter**: Official Google Analytics
   - **Mixpanel Flutter SDK**: User behavior analytics
   - **Amplitude Flutter SDK**: Product analytics
   - **Custom Analytics**: Build your own tracking system

3. **WebView Integration**: If your app has web content, you can integrate ThriveStack in WebView components

### Future Support

We're actively working on expanding ThriveStack support to include:
- Flutter applications
- Mobile-specific tracking
- Native UI interaction monitoring
- Cross-platform analytics

### Stay Updated

To be notified when Flutter support becomes available:
- Follow our [GitHub repository](https://github.com/Thrivestack-public)
- Subscribe to our newsletter
- Check our documentation regularly

---

**Note**: While Flutter itself is unsupported, you can still use ThriveStack in Flutter WebView components that display web content. 