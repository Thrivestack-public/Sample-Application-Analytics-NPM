#### Integration Steps

1. **Install ThriveStack NPM Package**
   ```bash
   npm install @thrivestack/analytics-browser
   ```

2. **Add ThriveStack Script to Base Layout**
   ```html
   <!-- _includes/base.njk -->
   <!DOCTYPE html>
   <html>
   <head>
     <title>{{ title }}</title>
     <!-- ThriveStack Analytics Integration -->
     <script src="https://d3cgzwt0fb6o2k.cloudfront.net/latest/thrivestack.js" 
         api-key="{API_KEY}" 
         source="marketing,product">
     </script>
   </head>
   <body>
     {{ content | safe }}
   </body>
   </html>
   ```

3. **Initialize Analytics in JavaScript**
   ```javascript
   <!-- _includes/analytics.njk -->
   <script>
   document.addEventListener('DOMContentLoaded', function() {
       // Track page view
       thrivestack.track("page_view", {
           page: window.location.pathname,
           title: document.title,
           layout: "{{ layout }}",
           tags: {{ tags | json | safe }}
       });
   });
   </script>
   ```

4. **Track User Signup**
   ```javascript
   <!-- _includes/signup-form.njk -->
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
                   platform: "eleventy",
                   source: "contact_form"
               });
           });
       }
   });
   </script>
   ```

5. **Track Blog Post Views**
   ```javascript
   <!-- _includes/post.njk -->
   {% include "analytics.njk" %}
   <script>
   document.addEventListener('DOMContentLoaded', function() {
       thrivestack.track("blog_post_viewed", {
           post_title: "{{ title }}",
           post_date: "{{ date | date: '%Y-%m-%d' }}",
           post_tags: {{ tags | json | safe }},
           post_url: "{{ page.url }}"
       });
   });
   </script>
   ```

6. **Track Navigation Events**
   ```javascript
   <!-- _includes/navigation.njk -->
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

7. **Track Contact Form Submissions**
   ```javascript
   <!-- _includes/contact-form.njk -->
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

8. **Track Custom Events**
   ```javascript
   <!-- _includes/custom-analytics.njk -->
   <script>
   // Track custom Eleventy events
   function trackEleventyEvent(eventName, properties = {}) {
       thrivestack.track(eventName, {
           platform: "eleventy",
           site_url: "{{ site.url }}",
           ...properties
       });
   }
   
   // Example usage
   trackEleventyEvent("newsletter_signup", {
       email: "user@example.com",
       source: "sidebar"
   });
   </script>
   ```

9. **Nunjucks Template Integration for Dynamic Data**
   ```html
   <!-- _includes/base.njk -->
   <script>
   window.EleventyData = {
       site: {{ site | json | safe }},
       page: {{ page | json | safe }},
       layout: "{{ layout }}",
       title: "{{ title }}"
   };
   </script>
   ```

10. **Track Search Functionality**
    ```javascript
    <!-- _includes/search.njk -->
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

11. **Configuration in .eleventy.js**
    ```javascript
    // .eleventy.js
    module.exports = function(eleventyConfig) {
        // Add ThriveStack configuration
        eleventyConfig.addGlobalData("thrivestack", {
            api_key: process.env.THRIVESTACK_API_KEY || "{API_KEY}",
            source: "marketing,product",
            enabled: true
        });
        
        return {
            // Your Eleventy configuration
        };
    };
    ```

12. **Environment Variables**
    ```javascript
    // .env
    THRIVESTACK_API_KEY="{API_KEY}"
    ```

    ```html
    <!-- _includes/analytics.njk -->
    {% if thrivestack.enabled %}
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        thrivestack.track("page_view", {
            page: window.location.pathname,
            title: document.title,
            site_name: "{{ site.name }}"
        });
    });
    </script>
    {% endif %}
    ``` 