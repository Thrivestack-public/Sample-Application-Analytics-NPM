#### Integration Steps

1. **Add ThriveStack Script to HTML Head**
   ```html
   <!-- Add this in the <head> section of your HTML file -->
   <script src="https://d3cgzwt0fb6o2k.cloudfront.net/latest/thrivestack.js" 
       api-key="{API_KEY}" 
       source="marketing,product">
   </script>
   ```

2. **Initialize Analytics with jQuery**
   ```javascript
   // Add this to your main JavaScript file
   $(document).ready(function() {
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
   $('#signup-form').on('submit', function(e) {
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
   $('.cta-button').on('click', function() {
       thrivestack.track("cta_clicked", {
           button_text: $(this).text(),
           page: window.location.pathname
       });
   });
   ```

5. **Track Form Field Interactions**
   ```javascript
   // Track form field focus events
   $('input, textarea, select').on('focus', function() {
       thrivestack.track("form_field_focused", {
           field_name: $(this).attr('name'),
           field_type: $(this).attr('type')
       });
   });
   ```

6. **Track Navigation Events**
   ```javascript
   // Track internal link clicks
   $('a[href^="#"], a[href^="/"]').on('click', function() {
       thrivestack.track("navigation_clicked", {
           link_text: $(this).text(),
           link_href: $(this).attr('href'),
           current_page: window.location.pathname
       });
   });
   ```

7. **Track Custom Events**
   ```javascript
   // Example: Track pricing plan selection
   $('.pricing-plan').on('click', function() {
       thrivestack.track("plan_selected", {
           plan_name: $(this).data('plan-name'),
           plan_price: $(this).data('plan-price'),
           page: window.location.pathname
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

8. **Track AJAX Requests**
   ```javascript
   // Track AJAX form submissions
   $('#ajax-form').on('submit', function(e) {
       e.preventDefault();
       
       $.ajax({
           url: '/api/submit',
           method: 'POST',
           data: $(this).serialize(),
           success: function(response) {
               thrivestack.track("ajax_form_submitted", {
                   form_id: 'ajax-form',
                   response_status: 'success'
               });
           },
           error: function(xhr, status, error) {
               thrivestack.track("ajax_form_error", {
                   form_id: 'ajax-form',
                   error_message: error
               });
           }
       });
   });
   ``` 