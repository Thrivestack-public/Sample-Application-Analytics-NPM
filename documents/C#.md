# C# Integration with ThriveStack Analytics

## Overview

C# is a modern, object-oriented programming language developed by Microsoft as part of the .NET framework. It's widely used for building Windows applications, web services, and enterprise software.

## ThriveStack Analytics Support

**Currently, ThriveStack Analytics does not provide official support for C# applications.**

### Why C# is Not Supported

C# is primarily a server-side programming language used for building backend services, desktop applications, and enterprise software. ThriveStack Analytics is designed for client-side web applications and requires a browser environment to function properly.

### Alternative Solutions

If you're building a C# application, consider these approaches:

1. **ASP.NET Core with JavaScript Integration**
   - Use the standard JavaScript/HTML integration in your ASP.NET Core views
   - Add the ThriveStack script tag to your layout files
   - Track events using JavaScript in your Razor templates

2. **API-Based Tracking**
   - Implement server-side event tracking using HTTP requests to ThriveStack's API
   - Send analytics data from your C# backend using `HttpClient`
   - Use C#'s built-in HTTP capabilities or third-party libraries

3. **Hybrid Approach**
   - Use JavaScript for client-side tracking (page views, user interactions)
   - Use C# for server-side tracking (business events, conversions)

### Example: ASP.NET Core Integration with JavaScript

```html
<!-- Views/Shared/_Layout.cshtml -->
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>@ViewData["Title"] - Your ASP.NET App</title>
    
    <!-- ThriveStack Analytics Integration -->
    <script src="https://d3cgzwt0fb6o2k.cloudfront.net/latest/thrivestack.js" 
        api-key="{API_KEY}" 
        source="product">
    </script>
</head>
<body>
    <header>
        <!-- Your header content -->
    </header>
    
    <main role="main">
        @RenderBody()
    </main>
    
    <footer>
        <!-- Your footer content -->
    </footer>
    
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
        
        // Track button clicks
        document.querySelectorAll('button, .btn').forEach(button => {
            button.addEventListener('click', function() {
                thrivestack.track("button_clicked", {
                    button_text: this.textContent,
                    button_class: this.className
                });
            });
        });
    </script>
    
    @await RenderSectionAsync("Scripts", required: false)
</body>
</html>
```

### Example: C# Server-Side API Tracking

```csharp
// Controllers/AnalyticsController.cs
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

[ApiController]
[Route("api/[controller]")]
public class AnalyticsController : ControllerBase
{
    private readonly HttpClient _httpClient;
    private readonly string _thrivestackApiKey = "{API_KEY}";
    
    public AnalyticsController(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }
    
    [HttpPost("track")]
    public async Task<IActionResult> TrackEvent([FromBody] AnalyticsEvent analyticsEvent)
    {
        try
        {
            var payload = new
            {
                event_name = analyticsEvent.EventName,
                properties = analyticsEvent.Properties,
                user_id = analyticsEvent.UserId,
                timestamp = DateTime.UtcNow
            };
            
            var json = JsonSerializer.Serialize(payload);
            var content = new StringContent(json, System.Text.Encoding.UTF8, "application/json");
            
            // Note: This is a conceptual example - ThriveStack's actual API endpoints may differ
            var response = await _httpClient.PostAsync("https://api.thrivestack.com/events", content);
            
            if (response.IsSuccessStatusCode)
            {
                return Ok(new { success = true });
            }
            
            return BadRequest(new { success = false, message = "Failed to track event" });
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { success = false, message = ex.Message });
        }
    }
}

public class AnalyticsEvent
{
    public string EventName { get; set; }
    public Dictionary<string, object> Properties { get; set; }
    public string UserId { get; set; }
}
```

### Future Support

We are actively working on expanding our platform support. C# integration may be available in future releases, including:

- Official .NET NuGet package for ThriveStack Analytics
- ASP.NET Core-specific integration helpers
- Server-side tracking capabilities
- Blazor WebAssembly support

### Getting Help

If you need assistance with integrating ThriveStack Analytics in your C# application:

1. **Documentation**: Check our main documentation for JavaScript integration patterns
2. **Community**: Join our community forums for C#/.NET-specific discussions
3. **Support**: Contact our support team for custom integration guidance

### Related Resources

- [ThriveStack Analytics Documentation](https://docs.thrivestack.com)
- [ASP.NET Core Documentation](https://docs.microsoft.com/en-us/aspnet/core/)
- [C# Programming Guide](https://docs.microsoft.com/en-us/dotnet/csharp/)
- [.NET Documentation](https://docs.microsoft.com/en-us/dotnet/) 