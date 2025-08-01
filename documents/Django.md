# Django Integration

## ⚠️ Currently Unsupported

**Django is currently not supported by ThriveStack Analytics.**

### Why Django is Unsupported

ThriveStack Analytics is designed for client-side web applications and browser environments. Django is a server-side Python framework, which means:

- No direct access to browser APIs
- Server-side execution environment
- No user interaction tracking capabilities
- Different request/response handling
- No client-side event monitoring

### Alternative Solutions

If you're building a Django application, consider these alternatives:

1. **Client-Side Integration**: Add ThriveStack to the frontend of your Django application
2. **Server-Side Analytics**: Use server-side analytics solutions like:
   - Google Analytics 4
   - Mixpanel
   - Amplitude
   - PostHog
   - Custom analytics implementation

3. **Django-Specific Solutions**:
   - **Django Analytics**: Django Analytics packages
   - **Custom Middleware**: Create custom analytics middleware
   - **Django Signals**: Use Django's signal system for tracking

### Future Support

We're actively working on expanding ThriveStack support to include:
- Server-side Django applications
- API endpoint tracking
- Backend event monitoring
- Server-side user tracking

### Stay Updated

To be notified when Django support becomes available:
- Follow our [GitHub repository](https://github.com/Thrivestack-public)
- Subscribe to our newsletter
- Check our documentation regularly

---

**Note**: While Django itself is unsupported, you can still integrate ThriveStack in the frontend applications that consume your Django APIs or are served by Django. 