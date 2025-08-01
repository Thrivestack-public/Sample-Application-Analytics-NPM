# Flask Integration

## ⚠️ Currently Unsupported

**Flask is currently not supported by ThriveStack Analytics.**

### Why Flask is Unsupported

ThriveStack Analytics is designed for client-side web applications and browser environments. Flask is a server-side Python framework, which means:

- No direct access to browser APIs
- Server-side execution environment
- No user interaction tracking capabilities
- Different request/response handling
- No client-side event monitoring

### Alternative Solutions

If you're building a Flask application, consider these alternatives:

1. **Client-Side Integration**: Add ThriveStack to the frontend of your Flask application
2. **Server-Side Analytics**: Use server-side analytics solutions like:
   - Google Analytics 4
   - Mixpanel
   - Amplitude
   - PostHog
   - Custom analytics implementation

3. **Flask-Specific Solutions**:
   - **Flask Analytics**: Flask Analytics packages
   - **Custom Middleware**: Create custom analytics middleware
   - **Flask Extensions**: Use Flask extensions for tracking

### Future Support

We're actively working on expanding ThriveStack support to include:
- Server-side Flask applications
- API endpoint tracking
- Backend event monitoring
- Server-side user tracking

### Stay Updated

To be notified when Flask support becomes available:
- Follow our [GitHub repository](https://github.com/Thrivestack-public)
- Subscribe to our newsletter
- Check our documentation regularly

---

**Note**: While Flask itself is unsupported, you can still integrate ThriveStack in the frontend applications that consume your Flask APIs or are served by Flask. 