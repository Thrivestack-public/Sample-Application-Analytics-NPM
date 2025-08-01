# Kotlin Integration

## ⚠️ Currently Unsupported

**Kotlin is currently not supported by ThriveStack Analytics.**

### Why Kotlin is Unsupported

ThriveStack Analytics is designed for web browsers and relies on browser-specific APIs. Kotlin applications run in a native Android environment, which means:

- No access to browser APIs (localStorage, cookies, etc.)
- Different runtime environment (JVM vs browser)
- Native UI components instead of DOM elements
- Network requests handled differently
- No web-specific tracking capabilities

### Alternative Solutions

If you're building a Kotlin application, consider these alternatives:

1. **Mobile Analytics Platforms**:
   - Firebase Analytics
   - Mixpanel Mobile SDK
   - Amplitude Mobile SDK
   - Segment Mobile SDK
   - AppsFlyer

2. **Android-Specific Analytics**:
   - **Firebase Analytics for Android**: Official Google Analytics
   - **Mixpanel Android SDK**: User behavior analytics
   - **Amplitude Android SDK**: Product analytics
   - **Custom Analytics**: Build your own tracking system

3. **WebView Integration**: If your app has web content, you can integrate ThriveStack in WebView components

### Future Support

We're actively working on expanding ThriveStack support to include:
- Kotlin applications
- Android-specific tracking
- Native UI interaction monitoring
- Cross-platform analytics

### Stay Updated

To be notified when Kotlin support becomes available:
- Follow our [GitHub repository](https://github.com/Thrivestack-public)
- Subscribe to our newsletter
- Check our documentation regularly

---

**Note**: While Kotlin itself is unsupported, you can still use ThriveStack in Kotlin WebView components that display web content. 