#### Integration Steps

1. **Add ThriveStack Script to WordPress**
   ```php
   // Add this to your theme's functions.php file
   function add_thrivestack_script() {
       ?>
       <script src="https://d3cgzwt0fb6o2k.cloudfront.net/latest/thrivestack.js" 
           api-key="{API_KEY}" 
           source="marketing,product">
       </script>
       <?php
   }
   add_action('wp_head', 'add_thrivestack_script');
   ```

2. **Initialize Analytics in JavaScript**
   ```javascript
   // Add this to your theme's main JavaScript file
   document.addEventListener('DOMContentLoaded', function() {
       // Track page view
       thrivestack.track("page_view", {
           page: window.location.pathname,
           title: document.title,
           post_type: wp_data.post_type || 'page'
       });
   });
   ```

3. **Track User Signup**
   ```javascript
   // Track WooCommerce registration or custom signup forms
   document.addEventListener('DOMContentLoaded', function() {
       // WooCommerce registration
       const signupForm = document.querySelector('.woocommerce-form-register');
       if (signupForm) {
           signupForm.addEventListener('submit', function(e) {
               thrivestack.setUser("18f716ac-37a4-464f-adb7-3cc30032308c", "john.doe@acme.xyz");
               thrivestack.setGroup("ac8db7ba-5139-4911-ba6e-523fd9c4704b", "acme.com", "Acme Corporation");
               
               thrivestack.track("signup_completed", {
                   platform: "wordpress",
                   source: "woocommerce"
               });
           });
       }
   });
   ```

4. **Track WooCommerce Events**
   ```javascript
   // Track WooCommerce product interactions
   document.addEventListener('DOMContentLoaded', function() {
       // Track add to cart
       document.addEventListener('added_to_cart', function(event) {
           thrivestack.track("product_added_to_cart", {
               product_id: event.detail.product_id,
               product_name: event.detail.product_name
           });
       });
       
       // Track purchase completion
       if (typeof wc_add_to_cart_params !== 'undefined') {
           document.addEventListener('checkout_completed', function() {
               thrivestack.track("purchase_completed", {
                   platform: "woocommerce"
               });
           });
       }
   });
   ```

5. **Track Contact Form Submissions**
   ```javascript
   // Track Contact Form 7 submissions
   document.addEventListener('DOMContentLoaded', function() {
       document.addEventListener('wpcf7mailsent', function(event) {
           thrivestack.track("contact_form_submitted", {
               form_id: event.detail.contactFormId,
               form_title: event.detail.contactFormTitle
           });
       });
   });
   ```

6. **Track Menu and Navigation**
   ```javascript
   // Track menu clicks
   document.addEventListener('DOMContentLoaded', function() {
       document.querySelectorAll('.menu-item a, .nav-menu a').forEach(link => {
           link.addEventListener('click', function() {
               thrivestack.track("navigation_clicked", {
                   link_text: this.textContent,
                   link_href: this.href,
                   menu_location: this.closest('.menu')?.className || 'unknown'
               });
           });
       });
   });
   ```

7. **Track Custom Events**
   ```javascript
   // Track custom WordPress events
   function trackWordPressEvent(eventName, properties = {}) {
       thrivestack.track(eventName, {
           platform: "wordpress",
           site_url: window.location.origin,
           ...properties
       });
   }
   
   // Example usage
   trackWordPressEvent("blog_post_viewed", {
       post_id: wp_data.post_id,
       post_title: wp_data.post_title,
       author: wp_data.post_author
   });
   ```

8. **PHP Integration for Server-Side Events**
   ```php
   // Add this to functions.php for server-side tracking
   function track_wordpress_event($event_name, $properties = array()) {
       $default_properties = array(
           'platform' => 'wordpress',
           'site_url' => get_site_url(),
           'user_id' => get_current_user_id()
       );
       
       $properties = array_merge($default_properties, $properties);
       
       // You can log to database or send to external service
       error_log("ThriveStack Event: $event_name - " . json_encode($properties));
   }
   
   // Example: Track user registration
   add_action('user_register', function($user_id) {
       track_wordpress_event('user_registered', array(
           'user_id' => $user_id,
           'user_email' => get_userdata($user_id)->user_email
       ));
   });
   ``` 