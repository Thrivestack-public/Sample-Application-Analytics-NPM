# Java Integration

## ⚠️ Currently Unsupported

**Java is currently not supported by ThriveStack Analytics.**

### Why Java is Unsupported

ThriveStack Analytics is designed for client-side web applications and browser environments. Java applications run on the server-side, which means:

- No direct access to browser APIs
- Server-side execution environment
- No user interaction tracking capabilities
- Different request/response handling
- No client-side event monitoring

### Alternative Solutions

If you're building a Java application, consider these alternatives:

1. **Client-Side Integration**: Add ThriveStack to the frontend of your Java application
2. **Server-Side Analytics**: Use server-side analytics solutions like:
   - Google Analytics 4
   - Mixpanel
   - Amplitude
   - PostHog
   - Custom analytics implementation

3. **Java-Specific Solutions**:
   - **Java Analytics**: Java Analytics libraries
   - **Custom Middleware**: Create custom analytics middleware
   - **Java Servlets**: Use Java servlets for tracking

### Future Support

We're actively working on expanding ThriveStack support to include:
- Server-side Java applications
- API endpoint tracking
- Backend event monitoring
- Server-side user tracking

### Stay Updated

To be notified when Java support becomes available:
- Follow our [GitHub repository](https://github.com/Thrivestack-public)
- Subscribe to our newsletter
- Check our documentation regularly

---

**Note**: While Java itself is unsupported, you can still integrate ThriveStack in the frontend applications that consume your Java APIs or are served by Java. 