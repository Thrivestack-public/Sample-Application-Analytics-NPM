# React Native Integration

## ⚠️ Currently Unsupported

**React Native is currently not supported by ThriveStack Analytics.**

### Why React Native is Unsupported

ThriveStack Analytics is designed for web browsers and relies on browser-specific APIs. React Native applications run in a native mobile environment, which means:

- No access to browser APIs (localStorage, cookies, etc.)
- Different JavaScript runtime (JavaScriptCore vs V8)
- Native UI components instead of DOM elements
- Network requests handled differently
- No web-specific tracking capabilities

### Alternative Solutions

If you're building a React Native application, consider these alternatives:

1. **Mobile Analytics Platforms**:
   - Firebase Analytics
   - Mixpanel Mobile SDK
   - Amplitude Mobile SDK
   - Segment Mobile SDK

2. **WebView Integration**: If your app has web content, you can integrate ThriveStack in WebView components

3. **Hybrid Approach**: Use ThriveStack for web portions and mobile analytics for native portions

### Future Support

We're actively working on expanding ThriveStack support to include:
- React Native applications
- Mobile-specific tracking
- Native UI interaction monitoring
- Cross-platform analytics

### Stay Updated

To be notified when React Native support becomes available:
- Follow our [GitHub repository](https://github.com/Thrivestack-public)
- Subscribe to our newsletter
- Check our documentation regularly

---

**Note**: While React Native itself is unsupported, you can still use ThriveStack in React Native WebView components that display web content. 