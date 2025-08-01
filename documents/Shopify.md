#### Integration Steps

1. **Add ThriveStack Script to Shopify Theme**
   ```liquid
   <!-- Add this to your theme.liquid file in the <head> section -->
   <script src="https://d3cgzwt0fb6o2k.cloudfront.net/latest/thrivestack.js" 
       api-key="{API_KEY}" 
       source="marketing,product">
   </script>
   ```

2. **Initialize Analytics in JavaScript**
   ```javascript
   // Add this to your theme's main JavaScript file
   document.addEventListener('DOMContentLoaded', function() {
       // Track page view
       thrivestack.track("page_view", {
           page: window.location.pathname,
           title: document.title,
           template: {{ template | json }},
           shop: {{ shop.permanent_domain | json }}
       });
   });
   ```

3. **Track User Signup**
   ```javascript
   // Track customer registration
   document.addEventListener('DOMContentLoaded', function() {
       const signupForm = document.querySelector('#create_customer');
       if (signupForm) {
           signupForm.addEventListener('submit', function(e) {
               thrivestack.setUser("18f716ac-37a4-464f-adb7-3cc30032308c", "john.doe@acme.xyz");
               thrivestack.setGroup("ac8db7ba-5139-4911-ba6e-523fd9c4704b", "acme.com", "Acme Corporation");
               
               thrivestack.track("signup_completed", {
                   platform: "shopify",
                   source: "customer_registration"
               });
           });
       }
   });
   ```

4. **Track Product Interactions**
   ```javascript
   // Track product views and add to cart
   document.addEventListener('DOMContentLoaded', function() {
       // Track product view
       if (window.ShopifyAnalytics) {
           const productData = window.ShopifyAnalytics.meta.page.product;
           if (productData) {
               thrivestack.track("product_viewed", {
                   product_id: productData.id,
                   product_title: productData.title,
                   product_price: productData.price,
                   product_vendor: productData.vendor
               });
           }
       }
       
       // Track add to cart
       document.addEventListener('click', function(e) {
           if (e.target.matches('[data-action="add-to-cart"], .add-to-cart')) {
               const productId = e.target.dataset.productId;
               const productTitle = e.target.dataset.productTitle;
               
               thrivestack.track("product_added_to_cart", {
                   product_id: productId,
                   product_title: productTitle
               });
           }
       });
   });
   ```

5. **Track Checkout Events**
   ```javascript
   // Track checkout progress
   document.addEventListener('DOMContentLoaded', function() {
       // Track checkout started
       if (window.location.pathname.includes('/cart')) {
           thrivestack.track("checkout_started", {
               cart_total: {{ cart.total_price | divided_by: 100.0 }},
               item_count: {{ cart.item_count }}
           });
       }
       
       // Track checkout completed
       if (window.location.pathname.includes('/checkout/thank_you')) {
           thrivestack.track("purchase_completed", {
               order_id: {{ order.id | json }},
               order_total: {{ order.total_price | divided_by: 100.0 }},
               currency: {{ order.currency | json }}
           });
       }
   });
   ```

6. **Track Collection and Search**
   ```javascript
   // Track collection views and search
   document.addEventListener('DOMContentLoaded', function() {
       // Track collection view
       if (window.location.pathname.includes('/collections/')) {
           const collectionHandle = window.location.pathname.split('/collections/')[1];
           thrivestack.track("collection_viewed", {
               collection_handle: collectionHandle,
               collection_title: document.title
           });
       }
       
       // Track search
       const searchForm = document.querySelector('form[action="/search"]');
       if (searchForm) {
           searchForm.addEventListener('submit', function(e) {
               const searchInput = this.querySelector('input[name="q"]');
               if (searchInput) {
                   thrivestack.track("search_performed", {
                       search_term: searchInput.value,
                       results_count: {{ search.results_count | default: 0 }}
                   });
               }
           });
       }
   });
   ```

7. **Track Custom Events**
   ```javascript
   // Track custom Shopify events
   function trackShopifyEvent(eventName, properties = {}) {
       thrivestack.track(eventName, {
           platform: "shopify",
           shop_domain: {{ shop.permanent_domain | json }},
           ...properties
       });
   }
   
   // Example usage
   trackShopifyEvent("newsletter_signup", {
       email: "user@example.com",
       source: "footer"
   });
   ```

8. **Liquid Integration for Server-Side Data**
   ```liquid
   <!-- Add this to your theme files to pass Shopify data to JavaScript -->
   <script>
       window.ShopifyData = {
           shop: {{ shop | json }},
           customer: {{ customer | json }},
           cart: {{ cart | json }},
           template: {{ template | json }}
       };
   </script>
   ``` 