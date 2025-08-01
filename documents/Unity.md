# Unity Integration

## ⚠️ Currently Unsupported

**Unity is currently not supported by ThriveStack Analytics.**

### Why Unity is Unsupported

ThriveStack Analytics is designed for web browsers and relies on browser-specific APIs. Unity applications run in a game engine environment, which means:

- Different runtime environment (Unity vs browser)
- Game-specific APIs instead of web APIs
- Different network handling
- No web-specific tracking capabilities
- Game engine limitations

### Alternative Solutions

If you're building a Unity application, consider these alternatives:

1. **Game Analytics Platforms**:
   - Unity Analytics
   - Firebase Analytics
   - Mixpanel Game SDK
   - Amplitude Game SDK
   - GameAnalytics

2. **Unity-Specific Analytics**:
   - **Unity Analytics**: Built-in Unity analytics
   - **Firebase Analytics for Unity**: Official Google Analytics
   - **Mixpanel Unity SDK**: User behavior analytics
   - **Amplitude Unity SDK**: Product analytics
   - **Custom Analytics**: Build your own tracking system

3. **WebView Integration**: If your game has web content, you can integrate ThriveStack in WebView components

### Future Support

We're actively working on expanding ThriveStack support to include:
- Unity applications
- Game-specific tracking
- Native UI interaction monitoring
- Cross-platform analytics

### Stay Updated

To be notified when Unity support becomes available:
- Follow our [GitHub repository](https://github.com/Thrivestack-public)
- Subscribe to our newsletter
- Check our documentation regularly

---

**Note**: While Unity itself is unsupported, you can still use ThriveStack in Unity WebView components that display web content. 