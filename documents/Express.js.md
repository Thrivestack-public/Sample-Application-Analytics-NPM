# Express.js Integration

## ⚠️ Currently Unsupported

**Express.js is currently not supported by ThriveStack Analytics.**

### Why Express.js is Unsupported

ThriveStack Analytics is designed for client-side web applications and browser environments. Express.js is a server-side Node.js framework, which means:

- No direct access to browser APIs
- Server-side execution environment
- No user interaction tracking capabilities
- Different request/response handling
- No client-side event monitoring

### Alternative Solutions

If you're building an Express.js application, consider these alternatives:

1. **Client-Side Integration**: Add ThriveStack to the frontend served by your Express.js app
2. **Server-Side Analytics**: Use server-side analytics solutions like:
   - Google Analytics 4
   - Mixpanel
   - Amplitude
   - PostHog
   - Custom analytics implementation

3. **Hybrid Approach**: Use Express.js for API endpoints and integrate ThriveStack in the frontend

### Future Support

We're actively working on expanding ThriveStack support to include:
- Server-side Express.js applications
- API endpoint tracking
- Backend event monitoring
- Server-side user tracking

### Stay Updated

To be notified when Express.js support becomes available:
- Follow our [GitHub repository](https://github.com/Thrivestack-public)
- Subscribe to our newsletter
- Check our documentation regularly

---

**Note**: While Express.js itself is unsupported, you can still integrate ThriveStack in the frontend applications that consume your Express.js APIs. 