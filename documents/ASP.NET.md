# ASP.NET Integration

## ⚠️ Currently Unsupported

**ASP.NET is currently not supported by ThriveStack Analytics.**

### Why ASP.NET is Unsupported

ThriveStack Analytics is designed for client-side web applications and browser environments. ASP.NET is a server-side web framework, which means:

- No direct access to browser APIs
- Server-side execution environment
- No user interaction tracking capabilities
- Different request/response handling
- No client-side event monitoring

### Alternative Solutions

If you're building an ASP.NET application, consider these alternatives:

1. **Client-Side Integration**: Add ThriveStack to the frontend of your ASP.NET application
2. **Server-Side Analytics**: Use server-side analytics solutions like:
   - Google Analytics 4
   - Mixpanel
   - Amplitude
   - PostHog
   - Custom analytics implementation

3. **ASP.NET-Specific Solutions**:
   - **Application Insights**: Microsoft's built-in analytics
   - **Custom Middleware**: Create custom analytics middleware
   - **ASP.NET Filters**: Use action filters for tracking

### Future Support

We're actively working on expanding ThriveStack support to include:
- Server-side ASP.NET applications
- API endpoint tracking
- Backend event monitoring
- Server-side user tracking

### Stay Updated

To be notified when ASP.NET support becomes available:
- Follow our [GitHub repository](https://github.com/Thrivestack-public)
- Subscribe to our newsletter
- Check our documentation regularly

---

**Note**: While ASP.NET itself is unsupported, you can still integrate ThriveStack in the frontend applications that consume your ASP.NET APIs or are served by ASP.NET. 