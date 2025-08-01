# Xamarin Integration

## ⚠️ Currently Unsupported

**Xamarin is currently not supported by ThriveStack Analytics.**

### Why Xamarin is Unsupported

ThriveStack Analytics is designed for web browsers and relies on browser-specific APIs. Xamarin applications run in a native mobile environment, which means:

- No access to browser APIs (localStorage, cookies, etc.)
- Different runtime environment (.NET vs browser)
- Native UI components instead of DOM elements
- Network requests handled differently
- No web-specific tracking capabilities

### Alternative Solutions

If you're building a Xamarin application, consider these alternatives:

1. **Mobile Analytics Platforms**:
   - Firebase Analytics
   - Mixpanel Mobile SDK
   - Amplitude Mobile SDK
   - Segment Mobile SDK
   - AppsFlyer

2. **Xamarin-Specific Analytics**:
   - **Firebase Analytics for Xamarin**: Official Google Analytics
   - **Mixpanel Xamarin SDK**: User behavior analytics
   - **Amplitude Xamarin SDK**: Product analytics
   - **Custom Analytics**: Build your own tracking system

3. **WebView Integration**: If your app has web content, you can integrate ThriveStack in WebView components

### Future Support

We're actively working on expanding ThriveStack support to include:
- Xamarin applications
- Mobile-specific tracking
- Native UI interaction monitoring
- Cross-platform analytics

### Stay Updated

To be notified when Xamarin support becomes available:
- Follow our [GitHub repository](https://github.com/Thrivestack-public)
- Subscribe to our newsletter
- Check our documentation regularly

---

**Note**: While Xamarin itself is unsupported, you can still use ThriveStack in Xamarin WebView components that display web content. 