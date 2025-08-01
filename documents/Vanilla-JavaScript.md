#### Integration Steps

1. **Add ThriveStack Script to HTML Head**
   ```html
   <!-- Add this in the <head> section of your HTML file -->
   <script src="https://d3cgzwt0fb6o2k.cloudfront.net/latest/thrivestack.js" 
       api-key="{API_KEY}" 
       source="marketing,product">
   </script>
   ```

2. **Initialize Analytics in JavaScript**
   ```javascript
   // Add this to your main JavaScript file
   document.addEventListener('DOMContentLoaded', function() {
       // Track page view
       thrivestack.track("page_view", {
           page: window.location.pathname,
           title: document.title
       });
   });
   ```

3. **Track User Signup**
   ```javascript
   // Example: Track signup form submission
   document.getElementById('signup-form').addEventListener('submit', function(e) {
       // Set user information
       thrivestack.setUser("18f716ac-37a4-464f-adb7-3cc30032308c", "john.doe@acme.xyz");
       
       // Set group information
       thrivestack.setGroup("ac8db7ba-5139-4911-ba6e-523fd9c4704b", "acme.com", "Acme Corporation");
       
       // Track signup completion
       thrivestack.track("signup_completed", {
           plan: "premium",
           source: "landing_page"
       });
   });
   ```

4. **Track Button Interactions**
   ```javascript
   // Example: Track CTA button clicks
   document.querySelectorAll('.cta-button').forEach(button => {
       button.addEventListener('click', function() {
           thrivestack.track("cta_clicked", {
               button_text: this.textContent,
               page: window.location.pathname
           });
       });
   });
   ```

5. **Track Form Field Interactions**
   ```javascript
   // Track form field focus events
   document.querySelectorAll('input, textarea, select').forEach(field => {
       field.addEventListener('focus', function() {
           thrivestack.track("form_field_focused", {
               field_name: this.name,
               field_type: this.type
           });
       });
   });
   ```

6. **Track Navigation Events**
   ```javascript
   // Track internal link clicks
   document.querySelectorAll('a[href^="#"], a[href^="/"]').forEach(link => {
       link.addEventListener('click', function() {
           thrivestack.track("navigation_clicked", {
               link_text: this.textContent,
               link_href: this.href,
               current_page: window.location.pathname
           });
       });
   });
   ```

7. **Track Custom Events**
   ```javascript
   // Example: Track pricing plan selection
   document.querySelectorAll('.pricing-plan').forEach(plan => {
       plan.addEventListener('click', function() {
           thrivestack.track("plan_selected", {
               plan_name: this.dataset.planName,
               plan_price: this.dataset.planPrice,
               page: window.location.pathname
           });
       });
   });
   
   // Example: Track feature usage
   function trackFeatureUsage(featureName) {
       thrivestack.track("feature_used", {
           feature: featureName,
           page: window.location.pathname
       });
   }
   ``` 