# FastAPI Integration

## ⚠️ Currently Unsupported

**FastAPI is currently not supported by ThriveStack Analytics.**

### Why FastAPI is Unsupported

ThriveStack Analytics is designed for client-side web applications and browser environments. FastAPI is a server-side Python framework, which means:

- No direct access to browser APIs
- Server-side execution environment
- No user interaction tracking capabilities
- Different request/response handling
- No client-side event monitoring

### Alternative Solutions

If you're building a FastAPI application, consider these alternatives:

1. **Client-Side Integration**: Add ThriveStack to the frontend of your FastAPI application
2. **Server-Side Analytics**: Use server-side analytics solutions like:
   - Google Analytics 4
   - Mixpanel
   - Amplitude
   - PostHog
   - Custom analytics implementation

3. **FastAPI-Specific Solutions**:
   - **FastAPI Middleware**: Create custom analytics middleware
   - **Dependencies**: Use FastAPI dependencies for tracking
   - **Background Tasks**: Use background tasks for analytics

### Future Support

We're actively working on expanding ThriveStack support to include:
- Server-side FastAPI applications
- API endpoint tracking
- Backend event monitoring
- Server-side user tracking

### Stay Updated

To be notified when FastAPI support becomes available:
- Follow our [GitHub repository](https://github.com/Thrivestack-public)
- Subscribe to our newsletter
- Check our documentation regularly

---

**Note**: While FastAPI itself is unsupported, you can still integrate ThriveStack in the frontend applications that consume your FastAPI APIs or are served by FastAPI. 