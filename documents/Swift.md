# Swift Integration

## ⚠️ Currently Unsupported

**Swift is currently not supported by ThriveStack Analytics.**

### Why Swift is Unsupported

ThriveStack Analytics is designed for web browsers and relies on browser-specific APIs. Swift applications run in a native iOS environment, which means:

- No access to browser APIs (localStorage, cookies, etc.)
- Different runtime environment (iOS vs browser)
- Native UI components instead of DOM elements
- Network requests handled differently
- No web-specific tracking capabilities

### Alternative Solutions

If you're building a Swift application, consider these alternatives:

1. **Mobile Analytics Platforms**:
   - Firebase Analytics
   - Mixpanel Mobile SDK
   - Amplitude Mobile SDK
   - Segment Mobile SDK
   - AppsFlyer

2. **iOS-Specific Analytics**:
   - **Firebase Analytics for iOS**: Official Google Analytics
   - **Mixpanel iOS SDK**: User behavior analytics
   - **Amplitude iOS SDK**: Product analytics
   - **Custom Analytics**: Build your own tracking system

3. **WebView Integration**: If your app has web content, you can integrate ThriveStack in WKWebView components

### Future Support

We're actively working on expanding ThriveStack support to include:
- Swift applications
- iOS-specific tracking
- Native UI interaction monitoring
- Cross-platform analytics

### Stay Updated

To be notified when Swift support becomes available:
- Follow our [GitHub repository](https://github.com/Thrivestack-public)
- Subscribe to our newsletter
- Check our documentation regularly

---

**Note**: While Swift itself is unsupported, you can still use ThriveStack in Swift WKWebView components that display web content. 