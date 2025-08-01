#### Integration Steps

1. **Add ThriveStack Script to WordPress Theme**
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

3. **Track WooCommerce Registration**
   ```javascript
   // Track WooCommerce customer registration
   document.addEventListener('DOMContentLoaded', function() {
       const signupForm = document.querySelector('.woocommerce-form-register');
       if (signupForm) {
           signupForm.addEventListener('submit', function(e) {
               // Set user information
               thrivestack.setUser("18f716ac-37a4-464f-adb7-3cc30032308c", "john.doe@acme.xyz");
               
               // Set group information
               thrivestack.setGroup("ac8db7ba-5139-4911-ba6e-523fd9c4704b", "acme.com", "Acme Corporation");
               
               // Track signup completion
               thrivestack.track("signup_completed", {
                   platform: "woocommerce",
                   source: "customer_registration"
               });
           });
       }
   });
   ```

4. **Track Product Interactions**
   ```javascript
   // Track WooCommerce product views and add to cart
   document.addEventListener('DOMContentLoaded', function() {
       // Track product view
       if (typeof wc_add_to_cart_params !== 'undefined') {
           const productId = wc_add_to_cart_params.product_id;
           const productName = document.querySelector('.product_title')?.textContent;
           
           thrivestack.track("product_viewed", {
               product_id: productId,
               product_name: productName,
               product_price: document.querySelector('.price .amount')?.textContent
           });
       }
       
       // Track add to cart
       document.addEventListener('click', function(e) {
           if (e.target.matches('.single_add_to_cart_button, .add_to_cart_button')) {
               const productId = e.target.dataset.product_id;
               const productName = e.target.dataset.product_name;
               
               thrivestack.track("product_added_to_cart", {
                   product_id: productId,
                   product_name: productName
               });
           }
       });
   });
   ```

5. **Track Checkout Events**
   ```javascript
   // Track WooCommerce checkout progress
   document.addEventListener('DOMContentLoaded', function() {
       // Track checkout started
       if (window.location.pathname.includes('/checkout')) {
           thrivestack.track("checkout_started", {
               cart_total: wc_checkout_params?.cart_total || 0,
               item_count: wc_checkout_params?.cart_count || 0
           });
       }
       
       // Track checkout completed
       if (window.location.pathname.includes('/checkout/order-received')) {
           const orderId = new URLSearchParams(window.location.search).get('order');
           thrivestack.track("purchase_completed", {
               order_id: orderId,
               platform: "woocommerce"
           });
       }
   });
   ```

6. **Track Category and Search**
   ```javascript
   // Track WooCommerce category views and search
   document.addEventListener('DOMContentLoaded', function() {
       // Track category view
       if (document.querySelector('.woocommerce-products-header')) {
           const categoryName = document.querySelector('.woocommerce-products-header__title')?.textContent;
           thrivestack.track("category_viewed", {
               category_name: categoryName,
               category_url: window.location.pathname
           });
       }
       
       // Track search
       const searchForm = document.querySelector('form[role="search"]');
       if (searchForm) {
           searchForm.addEventListener('submit', function(e) {
               const searchInput = this.querySelector('input[name="s"]');
               if (searchInput) {
                   thrivestack.track("search_performed", {
                       search_term: searchInput.value,
                       results_count: document.querySelectorAll('.product').length
                   });
               }
           });
       }
   });
   ```

7. **Track Custom Events**
   ```javascript
   // Track custom WooCommerce events
   function trackWooCommerceEvent(eventName, properties = {}) {
       thrivestack.track(eventName, {
           platform: "woocommerce",
           site_url: window.location.origin,
           ...properties
       });
   }
   
   // Example usage
   trackWooCommerceEvent("newsletter_signup", {
       email: "user@example.com",
       source: "footer"
   });
   ```

8. **Track Cart Events**
   ```javascript
   // Track cart interactions
   document.addEventListener('DOMContentLoaded', function() {
       // Track cart view
       if (window.location.pathname.includes('/cart')) {
           thrivestack.track("cart_viewed", {
               cart_total: document.querySelector('.cart-subtotal .amount')?.textContent,
               item_count: document.querySelectorAll('.cart_item').length
           });
       }
       
       // Track cart item removal
       document.addEventListener('click', function(e) {
           if (e.target.matches('.remove')) {
               const productName = e.target.closest('.cart_item')?.querySelector('.product-name')?.textContent;
               thrivestack.track("cart_item_removed", {
                   product_name: productName
               });
           }
       });
   });
   ```

9. **PHP Integration for Server-Side Events**
   ```php
   // Add this to functions.php for server-side tracking
   function track_woocommerce_event($event_name, $properties = array()) {
       $default_properties = array(
           'platform' => 'woocommerce',
           'site_url' => get_site_url(),
           'user_id' => get_current_user_id()
       );
       
       $properties = array_merge($default_properties, $properties);
       
       // Log to database or send to external service
       error_log("ThriveStack Event: $event_name - " . json_encode($properties));
   }
   
   // Track order completion
   add_action('woocommerce_thankyou', function($order_id) {
       $order = wc_get_order($order_id);
       track_woocommerce_event('order_completed', array(
           'order_id' => $order_id,
           'order_total' => $order->get_total(),
           'customer_email' => $order->get_billing_email()
       ));
   });
   ```

10. **Track User Account Events**
    ```javascript
    // Track user account interactions
    document.addEventListener('DOMContentLoaded', function() {
        // Track login
        const loginForm = document.querySelector('.woocommerce-form-login');
        if (loginForm) {
            loginForm.addEventListener('submit', function(e) {
                thrivestack.track("user_login", {
                    platform: "woocommerce"
                });
            });
        }
        
        // Track account page views
        if (window.location.pathname.includes('/my-account')) {
            thrivestack.track("account_page_viewed", {
                account_page: window.location.pathname.split('/my-account/')[1] || 'dashboard'
            });
        }
    });
    ``` 