# Node.js Integration

## ⚠️ Currently Unsupported

**Node.js is currently not supported by ThriveStack Analytics.**

### Why Node.js is Unsupported

ThriveStack Analytics is designed primarily for client-side web applications and browser environments. Node.js applications run on the server-side, which means:

- No direct access to browser APIs
- Different execution environment
- Server-side rendering limitations
- No user interaction tracking capabilities

### Alternative Solutions

If you're building a Node.js application, consider these alternatives:

1. **Client-Side Integration**: Add ThriveStack to the frontend of your Node.js application
2. **API Tracking**: Use server-side analytics solutions like:
   - Google Analytics 4
   - Mixpanel
   - Amplitude
   - PostHog

### Future Support

We're actively working on expanding ThriveStack support to include:
- Server-side Node.js applications
- API endpoint tracking
- Backend event monitoring

### Stay Updated

To be notified when Node.js support becomes available:
- Follow our [GitHub repository](https://github.com/Thrivestack-public)
- Subscribe to our newsletter
- Check our documentation regularly

---

**Note**: This limitation applies to pure Node.js applications. If you're using Node.js with a frontend framework (React, Vue, etc.), you can still integrate ThriveStack on the client-side. 