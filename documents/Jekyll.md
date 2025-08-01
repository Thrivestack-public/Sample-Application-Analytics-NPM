#### Integration Steps

1. **Add ThriveStack Script to Jekyll Layout**
   ```html
   <!-- _layouts/default.html -->
   <!DOCTYPE html>
   <html>
   <head>
     <title>{% raw %}{{ page.title }}{% endraw %}</title>
     <!-- ThriveStack Analytics Integration -->
     <script src="https://d3cgzwt0fb6o2k.cloudfront.net/latest/thrivestack.js" 
         api-key="{API_KEY}" 
         source="marketing,product">
     </script>
   </head>
   <body>
     {% raw %}{{ content }}{% endraw %}
   </body>
   </html>
   ```

2. **Initialize Analytics in JavaScript**
   ```javascript
   <!-- _includes/analytics.html -->
   <script>
   document.addEventListener('DOMContentLoaded', function() {
       // Track page view
       thrivestack.track("page_view", {
           page: window.location.pathname,
           title: document.title,
           layout: "{% raw %}{{ page.layout }}{% endraw %}",
           category: "{% raw %}{{ page.category }}{% endraw %}"
       });
   });
   </script>
   ```

3. **Track User Signup**
   ```javascript
   <!-- _includes/signup-form.html -->
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
                   platform: "jekyll",
                   source: "contact_form"
               });
           });
       }
   });
   </script>
   ```

4. **Track Blog Post Views**
   ```javascript
   <!-- _layouts/post.html -->
   {% raw %}{% include analytics.html %}
   <script>
   document.addEventListener('DOMContentLoaded', function() {
       thrivestack.track("blog_post_viewed", {
           post_title: "{{ page.title }}",
           post_date: "{{ page.date | date: '%Y-%m-%d' }}",
           post_category: "{{ page.category }}",
           post_tags: {{ page.tags | jsonify }}
       });
   });
   </script>
   {% endraw %}
   ```

5. **Track Navigation Events**
   ```javascript
   <!-- _includes/navigation.html -->
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
   <!-- _includes/contact-form.html -->
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
   <!-- _includes/custom-analytics.html -->
   <script>
   // Track custom Jekyll events
   function trackJekyllEvent(eventName, properties = {}) {
       thrivestack.track(eventName, {
           platform: "jekyll",
           site_url: "{% raw %}{{ site.url }}{% endraw %}",
           ...properties
       });
   }
   
   // Example usage
   trackJekyllEvent("newsletter_signup", {
       email: "user@example.com",
       source: "sidebar"
   });
   </script>
   ```

8. **Liquid Integration for Dynamic Data**
   ```html
   <!-- _layouts/default.html -->
   <script>
   window.JekyllData = {
       site: {% raw %}{{ site | jsonify }}{% endraw %},
       page: {% raw %}{{ page | jsonify }}{% endraw %},
       layout: "{% raw %}{{ page.layout }}{% endraw %}",
       title: "{% raw %}{{ page.title }}{% endraw %}"
   };
   </script>
   ```

9. **Track Search Functionality**
   ```javascript
   <!-- _includes/search.html -->
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

10. **Configuration in _config.yml**
    ```yaml
    # _config.yml
    thrivestack:
      api_key: "{API_KEY}"
      source: "marketing,product"
      enabled: true
    ```

    ```html
    <!-- _includes/analytics.html -->
    {% raw %}{% if site.thrivestack.enabled %}
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        thrivestack.track("page_view", {
            page: window.location.pathname,
            title: document.title,
            site_name: "{{ site.title }}"
        });
    });
    </script>
    {% endif %}{% endraw %}
    ``` 