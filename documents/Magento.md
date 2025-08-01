#### Integration Steps

1. **Add ThriveStack Script to Magento Theme**
   ```xml
   <!-- app/design/frontend/YourTheme/default/layout/default.xml -->
   <referenceContainer name="before.body.end">
       <block class="Magento\Framework\View\Element\Template" name="thrivestack.analytics" template="Magento_Theme::thrivestack.phtml" />
   </referenceContainer>
   ```

   ```php
   <!-- app/design/frontend/YourTheme/default/Magento_Theme/templates/thrivestack.phtml -->
   <script src="https://d3cgzwt0fb6o2k.cloudfront.net/latest/thrivestack.js" 
       api-key="<?= $block->escapeHtml($block->getConfig('thrivestack/general/api_key')) ?>" 
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
           store: window.checkout?.config?.storeCode || 'default'
       });
   });
   ```

3. **Track Customer Registration**
   ```javascript
   // Track customer registration
   document.addEventListener('DOMContentLoaded', function() {
       const signupForm = document.querySelector('#form-validate');
       if (signupForm) {
           signupForm.addEventListener('submit', function(e) {
               thrivestack.setUser("18f716ac-37a4-464f-adb7-3cc30032308c", "john.doe@acme.xyz");
               thrivestack.setGroup("ac8db7ba-5139-4911-ba6e-523fd9c4704b", "acme.com", "Acme Corporation");
               
               thrivestack.track("signup_completed", {
                   platform: "magento",
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
       if (window.productData) {
           thrivestack.track("product_viewed", {
               product_id: window.productData.id,
               product_name: window.productData.name,
               product_price: window.productData.price,
               product_sku: window.productData.sku
           });
       }
       
       // Track add to cart
       document.addEventListener('click', function(e) {
           if (e.target.matches('[data-action="add-to-cart"], .action.tocart')) {
               const productId = e.target.dataset.productId;
               const productName = e.target.dataset.productName;
               
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
   // Track checkout progress
   document.addEventListener('DOMContentLoaded', function() {
       // Track checkout started
       if (window.location.pathname.includes('/checkout')) {
           thrivestack.track("checkout_started", {
               cart_total: window.checkout?.config?.quoteData?.grand_total || 0,
               item_count: window.checkout?.config?.quoteData?.items_count || 0
           });
       }
       
       // Track checkout completed
       if (window.location.pathname.includes('/checkout/onepage/success')) {
           thrivestack.track("purchase_completed", {
               order_id: window.checkout?.config?.orderData?.entity_id,
               order_total: window.checkout?.config?.orderData?.grand_total,
               currency: window.checkout?.config?.quoteData?.quote_currency_code
           });
       }
   });
   ```

6. **Track Category and Search**
   ```javascript
   // Track category views and search
   document.addEventListener('DOMContentLoaded', function() {
       // Track category view
       if (window.location.pathname.includes('/catalog/category/view/')) {
           const categoryName = document.querySelector('.page-title')?.textContent;
           thrivestack.track("category_viewed", {
               category_name: categoryName,
               category_url: window.location.pathname
           });
       }
       
       // Track search
       const searchForm = document.querySelector('form[action*="catalogsearch"]');
       if (searchForm) {
           searchForm.addEventListener('submit', function(e) {
               const searchInput = this.querySelector('input[name="q"]');
               if (searchInput) {
                   thrivestack.track("search_performed", {
                       search_term: searchInput.value,
                       results_count: document.querySelectorAll('.product-item').length
                   });
               }
           });
       }
   });
   ```

7. **Track Custom Events**
   ```javascript
   // Track custom Magento events
   function trackMagentoEvent(eventName, properties = {}) {
       thrivestack.track(eventName, {
           platform: "magento",
           store_code: window.checkout?.config?.storeCode || 'default',
           ...properties
       });
   }
   
   // Example usage
   trackMagentoEvent("newsletter_signup", {
       email: "user@example.com",
       source: "footer"
   });
   ```

8. **PHP Integration for Server-Side Events**
   ```php
   <!-- app/code/YourNamespace/ThriveStack/Model/Analytics.php -->
   <?php
   namespace YourNamespace\ThriveStack\Model;
   
   class Analytics
   {
       public function trackEvent($eventName, $properties = [])
       {
           $defaultProperties = [
               'platform' => 'magento',
               'store_code' => $this->storeManager->getStore()->getCode(),
               'timestamp' => date('Y-m-d H:i:s')
           ];
           
           $properties = array_merge($defaultProperties, $properties);
           
           // Log to database or send to external service
           $this->logger->info("ThriveStack Event: $eventName - " . json_encode($properties));
       }
   }
   ```

9. **Configuration in Admin Panel**
   ```xml
   <!-- app/code/YourNamespace/ThriveStack/etc/adminhtml/system.xml -->
   <config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
       <system>
           <section id="thrivestack">
               <group id="general">
                   <field id="enabled" type="select">
                       <label>Enable ThriveStack Analytics</label>
                       <source_model>Magento\Config\Model\Config\Source\Yesno</source_model>
                   </field>
                   <field id="api_key" type="obscure">
                       <label>API Key</label>
                       <backend_model>Magento\Config\Model\Config\Backend\Encrypted</backend_model>
                   </field>
               </group>
           </section>
       </system>
   </config>
   ``` 