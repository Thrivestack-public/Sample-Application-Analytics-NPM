# Ruby on Rails Integration

## ⚠️ Currently Unsupported

**Ruby on Rails is currently not supported by ThriveStack Analytics.**

### Why Ruby on Rails is Unsupported

ThriveStack Analytics is designed for client-side web applications and browser environments. Ruby on Rails is a server-side web framework, which means:

- No direct access to browser APIs
- Server-side execution environment
- No user interaction tracking capabilities
- Different request/response handling
- No client-side event monitoring

### Alternative Solutions

If you're building a Ruby on Rails application, consider these alternatives:

1. **Client-Side Integration**: Add ThriveStack to the frontend of your Rails application
2. **Server-Side Analytics**: Use server-side analytics solutions like:
   - Google Analytics 4
   - Mixpanel
   - Amplitude
   - PostHog
   - Custom analytics implementation

3. **Rails-Specific Solutions**:
   - **Rails Analytics**: Rails Analytics gems
   - **Custom Middleware**: Create custom analytics middleware
   - **Rails Callbacks**: Use Rails callbacks for tracking

### Future Support

We're actively working on expanding ThriveStack support to include:
- Server-side Rails applications
- API endpoint tracking
- Backend event monitoring
- Server-side user tracking

### Stay Updated

To be notified when Ruby on Rails support becomes available:
- Follow our [GitHub repository](https://github.com/Thrivestack-public)
- Subscribe to our newsletter
- Check our documentation regularly

---

**Note**: While Ruby on Rails itself is unsupported, you can still integrate ThriveStack in the frontend applications that consume your Rails APIs or are served by Rails. 