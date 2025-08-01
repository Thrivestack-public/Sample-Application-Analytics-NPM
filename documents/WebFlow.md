#### Integration Steps

1. **Add ThriveStack Script to WebFlow Site**
   ```html
   <!-- Add this in the <head> section of your WebFlow site -->
   <script src="https://d3cgzwt0fb6o2k.cloudfront.net/latest/thrivestack.js" 
       api-key="{API_KEY}" 
       source="marketing,product">
   </script>
   ```

2. **Initialize Analytics in JavaScript**
   ```javascript
   // Add this to your WebFlow site's custom code
   document.addEventListener('DOMContentLoaded', function() {
       // Track page view
       thrivestack.track("page_view", {
           page: window.location.pathname,
           title: document.title,
           site_name: "your-webflow-site"
       });
   });
   ```

3. **Track User Signup**
   ```javascript
   // Track WebFlow form submissions
   document.addEventListener('DOMContentLoaded', function() {
       // Track all form submissions
       document.querySelectorAll('form').forEach(form => {
           form.addEventListener('submit', function(e) {
               // Set user information
               thrivestack.setUser("18f716ac-37a4-464f-adb7-3cc30032308c", "john.doe@acme.xyz");
               
               // Set group information
               thrivestack.setGroup("ac8db7ba-5139-4911-ba6e-523fd9c4704b", "acme.com", "Acme Corporation");
               
               // Track signup completion
               thrivestack.track("signup_completed", {
                   platform: "webflow",
                   form_id: this.id || 'webflow-form',
                   source: "contact_form"
               });
           });
       });
   });
   ```

4. **Track Button Interactions**
   ```javascript
   // Track button clicks
   document.addEventListener('DOMContentLoaded', function() {
       // Track CTA button clicks
       document.querySelectorAll('.button, .btn, [data-wf-type="button"]').forEach(button => {
           button.addEventListener('click', function() {
               thrivestack.track("cta_clicked", {
                   button_text: this.textContent,
                   button_class: this.className,
                   page: window.location.pathname
               });
           });
       });
   });
   ```

5. **Track Navigation Events**
   ```javascript
   // Track navigation clicks
   document.addEventListener('DOMContentLoaded', function() {
       // Track menu clicks
       document.querySelectorAll('a[href*="/"], a[href^="#"]').forEach(link => {
           link.addEventListener('click', function() {
               thrivestack.track("navigation_clicked", {
                   link_text: this.textContent,
                   link_href: this.href,
                   current_page: window.location.pathname
               });
           });
       });
   });
   ```

6. **Track Form Field Interactions**
   ```javascript
   // Track form field interactions
   document.addEventListener('DOMContentLoaded', function() {
       // Track form field focus
       document.querySelectorAll('input, textarea, select').forEach(field => {
           field.addEventListener('focus', function() {
               thrivestack.track("form_field_focused", {
                   field_name: this.name,
                   field_type: this.type,
                   form_id: this.closest('form')?.id || 'webflow-form'
               });
           });
       });
   });
   ```

7. **Track Custom Events**
   ```javascript
   // Track custom WebFlow events
   function trackWebFlowEvent(eventName, properties = {}) {
       thrivestack.track(eventName, {
           platform: "webflow",
           site_url: window.location.origin,
           ...properties
       });
   }
   
   // Example usage
   trackWebFlowEvent("newsletter_signup", {
       email: "user@example.com",
       source: "footer"
   });
   ```

8. **Track Page Transitions**
   ```javascript
   // Track WebFlow page transitions
   document.addEventListener('DOMContentLoaded', function() {
       // Track initial page load
       thrivestack.track("page_view", {
           page: window.location.pathname,
           title: document.title,
           referrer: document.referrer
       });
       
       // Track page transitions (if using WebFlow's page transitions)
       if (window.Webflow) {
           window.Webflow.push(() => {
               // Track after WebFlow animations complete
               thrivestack.track("page_transition_completed", {
                   page: window.location.pathname
               });
           });
       }
   });
   ```

9. **Track E-commerce Events (if applicable)**
   ```javascript
   // Track WebFlow e-commerce events
   document.addEventListener('DOMContentLoaded', function() {
       // Track add to cart
       document.querySelectorAll('[data-commerce-add-to-cart]').forEach(button => {
           button.addEventListener('click', function() {
               const productName = this.dataset.productName;
               const productPrice = this.dataset.productPrice;
               
               thrivestack.track("product_added_to_cart", {
                   product_name: productName,
                   product_price: productPrice,
                   platform: "webflow"
               });
           });
       });
       
       // Track checkout
       if (window.location.pathname.includes('/checkout')) {
           thrivestack.track("checkout_started", {
               platform: "webflow"
           });
       }
   });
   ```

10. **Track Scroll Depth**
    ```javascript
    // Track scroll depth
    document.addEventListener('DOMContentLoaded', function() {
        let maxScroll = 0;
        
        window.addEventListener('scroll', function() {
            const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
            
            if (scrollPercent > maxScroll) {
                maxScroll = scrollPercent;
                
                // Track at 25%, 50%, 75%, 100%
                if (maxScroll >= 25 && maxScroll < 50) {
                    thrivestack.track("scroll_depth", { depth: "25%" });
                } else if (maxScroll >= 50 && maxScroll < 75) {
                    thrivestack.track("scroll_depth", { depth: "50%" });
                } else if (maxScroll >= 75 && maxScroll < 100) {
                    thrivestack.track("scroll_depth", { depth: "75%" });
                } else if (maxScroll >= 100) {
                    thrivestack.track("scroll_depth", { depth: "100%" });
                }
            }
        });
    });
    ```

11. **Track Time on Page**
    ```javascript
    // Track time spent on page
    document.addEventListener('DOMContentLoaded', function() {
        const startTime = Date.now();
        
        window.addEventListener('beforeunload', function() {
            const timeSpent = Math.round((Date.now() - startTime) / 1000);
            
            thrivestack.track("time_on_page", {
                time_spent_seconds: timeSpent,
                page: window.location.pathname
            });
        });
    });
    ``` 