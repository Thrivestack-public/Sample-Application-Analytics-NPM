#### Integration Steps

1. **Add ThriveStack Script to Hugo Layout**
   ```html
   <!-- layouts/_default/baseof.html -->
   <!DOCTYPE html>
   <html>
   <head>
     <title>{{ .Title }}</title>
     <!-- ThriveStack Analytics Integration -->
     <script src="https://d3cgzwt0fb6o2k.cloudfront.net/latest/thrivestack.js" 
         api-key="{API_KEY}" 
         source="marketing,product">
     </script>
   </head>
   <body>
     {{ block "main" . }}{{ end }}
   </body>
   </html>
   ```

2. **Initialize Analytics in JavaScript**
   ```javascript
   <!-- layouts/partials/analytics.html -->
   <script>
   document.addEventListener('DOMContentLoaded', function() {
       // Track page view
       thrivestack.track("page_view", {
           page: window.location.pathname,
           title: document.title,
           section: "{{ .Section }}",
           type: "{{ .Type }}"
       });
   });
   </script>
   ```

3. **Track User Signup**
   ```javascript
   <!-- layouts/partials/signup-form.html -->
   <script>
   document.addEventListener('DOMContentLoaded', function() {
       const signupForm = document.getElementById('signup-form');
       if (signupForm) {
           signupForm.addEventListener('submit', function(e) {
               // Set user information
               thrivestack.setUser("18f716ac-37a4-464f-adb7-3cc30032308c", "john.doe@acme.xyz");
               
               // Set group information
               thrivestack.setGroup("ac8db7ba-5139-4911-ba6e-523fd9c4704b", "acme.com", "Acme Corporation");
               
               // Track signup completion
               thrivestack.track("signup_completed", {
                   platform: "hugo",
                   source: "contact_form"
               });
           });
       }
   });
   </script>
   ```

4. **Track Blog Post Views**
   ```javascript
   <!-- layouts/_default/single.html -->
   {{ partial "analytics.html" . }}
   <script>
   document.addEventListener('DOMContentLoaded', function() {
       thrivestack.track("blog_post_viewed", {
           post_title: "{{ .Title }}",
           post_date: "{{ .Date.Format "2006-01-02" }}",
           post_section: "{{ .Section }}",
           post_tags: {{ .Params.tags | jsonify }}
       });
   });
   </script>
   ```

5. **Track Navigation Events**
   ```javascript
   <!-- layouts/partials/navigation.html -->
   <script>
   document.addEventListener('DOMContentLoaded', function() {
       // Track menu clicks
       document.querySelectorAll('.nav-link').forEach(link => {
           link.addEventListener('click', function() {
               thrivestack.track("navigation_clicked", {
                   link_text: this.textContent,
                   link_href: this.href,
                   current_page: window.location.pathname
               });
           });
       });
   });
   </script>
   ```

6. **Track Contact Form Submissions**
   ```javascript
   <!-- layouts/partials/contact-form.html -->
   <script>
   document.addEventListener('DOMContentLoaded', function() {
       const contactForm = document.getElementById('contact-form');
       if (contactForm) {
           contactForm.addEventListener('submit', function(e) {
               thrivestack.track("contact_form_submitted", {
                   form_id: "contact-form",
                   page: window.location.pathname
               });
           });
       }
   });
   </script>
   ```

7. **Track Custom Events**
   ```javascript
   <!-- layouts/partials/custom-analytics.html -->
   <script>
   // Track custom Hugo events
   function trackHugoEvent(eventName, properties = {}) {
       thrivestack.track(eventName, {
           platform: "hugo",
           site_url: "{{ .Site.BaseURL }}",
           ...properties
       });
   }
   
   // Example usage
   trackHugoEvent("newsletter_signup", {
       email: "user@example.com",
       source: "sidebar"
   });
   </script>
   ```

8. **Go Template Integration for Dynamic Data**
   ```html
   <!-- layouts/_default/baseof.html -->
   <script>
   window.HugoData = {
       site: {{ .Site | jsonify }},
       page: {{ . | jsonify }},
       section: "{{ .Section }}",
       title: "{{ .Title }}"
   };
   </script>
   ```

9. **Track Search Functionality**
   ```javascript
   <!-- layouts/partials/search.html -->
   <script>
   document.addEventListener('DOMContentLoaded', function() {
       const searchForm = document.getElementById('search-form');
       if (searchForm) {
           searchForm.addEventListener('submit', function(e) {
               const searchInput = this.querySelector('input[name="q"]');
               if (searchInput) {
                   thrivestack.track("search_performed", {
                       search_term: searchInput.value,
                       page: window.location.pathname
                   });
               }
           });
       }
   });
   </script>
   ```

10. **Configuration in config.toml**
    ```toml
    # config.toml
    [params.thrivestack]
    api_key = "{API_KEY}"
    source = "marketing,product"
    enabled = true
    ```

    ```html
    <!-- layouts/partials/analytics.html -->
    {{ if .Site.Params.thrivestack.enabled }}
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        thrivestack.track("page_view", {
            page: window.location.pathname,
            title: document.title,
            site_name: "{{ .Site.Title }}"
        });
    });
    </script>
    {{ end }}
    ``` 