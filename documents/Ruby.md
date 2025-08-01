# Ruby Integration with ThriveStack Analytics

## Overview

Ruby is a dynamic, open-source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.

## ThriveStack Analytics Support

**Currently, ThriveStack Analytics does not provide official support for Ruby applications.**

### Why Ruby is Not Supported

Ruby is primarily a server-side programming language, and ThriveStack Analytics is designed for client-side web applications. The analytics SDK requires a browser environment to function properly.

### Alternative Solutions

If you're building a Ruby web application, consider these approaches:

1. **Ruby on Rails with JavaScript Integration**
   - Use the standard JavaScript/HTML integration in your Rails views
   - Add the ThriveStack script tag to your layout files
   - Track events using JavaScript in your Rails templates

2. **API-Based Tracking**
   - Implement server-side event tracking using HTTP requests to ThriveStack's API
   - Send analytics data from your Ruby backend to ThriveStack's endpoints
   - Use Ruby's `Net::HTTP` or gems like `HTTParty` for API calls

3. **Hybrid Approach**
   - Use JavaScript for client-side tracking (page views, user interactions)
   - Use Ruby for server-side tracking (business events, conversions)

### Example: Rails Integration with JavaScript

```erb
<!-- app/views/layouts/application.html.erb -->
<!DOCTYPE html>
<html>
<head>
  <title>Your Rails App</title>
  <!-- ThriveStack Analytics Integration -->
  <script src="https://d3cgzwt0fb6o2k.cloudfront.net/latest/thrivestack.js" 
      api-key="{API_KEY}" 
      source="product">
  </script>
</head>
<body>
  <%= yield %>
  
  <script>
    // Track page views
    document.addEventListener('DOMContentLoaded', function() {
      thrivestack.track("page_view", {
        page: window.location.pathname,
        title: document.title
      });
    });
    
    // Track form submissions
    document.querySelectorAll('form').forEach(form => {
      form.addEventListener('submit', function() {
        thrivestack.track("form_submitted", {
          form_id: this.id,
          form_action: this.action
        });
      });
    });
  </script>
</body>
</html>
```

### Future Support

We are actively working on expanding our platform support. Ruby integration may be available in future releases, including:

- Official Ruby gem for ThriveStack Analytics
- Rails-specific integration helpers
- Server-side tracking capabilities

### Getting Help

If you need assistance with integrating ThriveStack Analytics in your Ruby application:

1. **Documentation**: Check our main documentation for JavaScript integration patterns
2. **Community**: Join our community forums for Ruby-specific discussions
3. **Support**: Contact our support team for custom integration guidance

### Related Resources

- [ThriveStack Analytics Documentation](https://docs.thrivestack.com)
- [Ruby on Rails Official Guide](https://guides.rubyonrails.org/)
- [Ruby Programming Language](https://www.ruby-lang.org/) 