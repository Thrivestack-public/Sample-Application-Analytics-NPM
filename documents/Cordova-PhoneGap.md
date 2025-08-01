# Cordova/PhoneGap Integration

## ⚠️ Currently Unsupported

**Cordova/PhoneGap is currently not supported by ThriveStack Analytics.**

### Why Cordova/PhoneGap is Unsupported

ThriveStack Analytics is designed for web browsers and relies on browser-specific APIs. Cordova/PhoneGap applications run in a native mobile environment, which means:

- No access to browser APIs (localStorage, cookies, etc.)
- Different JavaScript runtime (WebView vs browser)
- Native UI components instead of DOM elements
- Network requests handled differently
- No web-specific tracking capabilities

### Alternative Solutions

If you're building a Cordova/PhoneGap application, consider these alternatives:

1. **Mobile Analytics Platforms**:
   - Firebase Analytics
   - Mixpanel Mobile SDK
   - Amplitude Mobile SDK
   - Segment Mobile SDK
   - AppsFlyer

2. **Cordova-Specific Analytics**:
   - **Firebase Analytics for Cordova**: Official Google Analytics
   - **Mixpanel Cordova Plugin**: User behavior analytics
   - **Amplitude Cordova Plugin**: Product analytics
   - **Custom Analytics**: Build your own tracking system

3. **WebView Integration**: If your app has web content, you can integrate ThriveStack in WebView components

### Future Support

We're actively working on expanding ThriveStack support to include:
- Cordova/PhoneGap applications
- Mobile-specific tracking
- Native UI interaction monitoring
- Cross-platform analytics

### Stay Updated

To be notified when Cordova/PhoneGap support becomes available:
- Follow our [GitHub repository](https://github.com/Thrivestack-public)
- Subscribe to our newsletter
- Check our documentation regularly

---

**Note**: While Cordova/PhoneGap itself is unsupported, you can still use ThriveStack in Cordova WebView components that display web content. 