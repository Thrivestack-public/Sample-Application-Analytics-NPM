#### Integration Steps

1. **Add ThriveStack Script to Joomla Template**
   ```php
   <!-- Add this to your template's index.php file in the <head> section -->
   <script src="https://d3cgzwt0fb6o2k.cloudfront.net/latest/thrivestack.js" 
       api-key="{API_KEY}" 
       source="marketing,product">
   </script>
   ```

2. **Initialize Analytics in JavaScript**
   ```javascript
   // Add this to your template's main JavaScript file
   document.addEventListener('DOMContentLoaded', function() {
       // Track page view
       thrivestack.track("page_view", {
           page: window.location.pathname,
           title: document.title,
           option: "<?php echo $this->input->get('option'); ?>",
           view: "<?php echo $this->input->get('view'); ?>"
       });
   });
   ```

3. **Track User Registration**
   ```javascript
   // Track Joomla user registration
   document.addEventListener('DOMContentLoaded', function() {
       const signupForm = document.querySelector('#member-registration');
       if (signupForm) {
           signupForm.addEventListener('submit', function(e) {
               // Set user information
               thrivestack.setUser("18f716ac-37a4-464f-adb7-3cc30032308c", "john.doe@acme.xyz");
               
               // Set group information
               thrivestack.setGroup("ac8db7ba-5139-4911-ba6e-523fd9c4704b", "acme.com", "Acme Corporation");
               
               // Track signup completion
               thrivestack.track("signup_completed", {
                   platform: "joomla",
                   source: "user_registration"
               });
           });
       }
   });
   ```

4. **Track Article Views**
   ```javascript
   // Track Joomla article views
   document.addEventListener('DOMContentLoaded', function() {
       if (document.querySelector('.item-page')) {
           const articleTitle = document.querySelector('.item-title')?.textContent;
           const articleId = document.querySelector('input[name="id"]')?.value;
           
           thrivestack.track("article_viewed", {
               article_id: articleId,
               article_title: articleTitle,
               platform: "joomla"
           });
       }
   });
   ```

5. **Track Form Submissions**
   ```javascript
   // Track Joomla form submissions
   document.addEventListener('DOMContentLoaded', function() {
       document.querySelectorAll('form').forEach(form => {
           form.addEventListener('submit', function(e) {
               const formId = this.id;
               const formAction = this.action;
               
               thrivestack.track("form_submitted", {
                   form_id: formId,
                   form_action: formAction,
                   platform: "joomla"
               });
           });
       });
   });
   ```

6. **Track Search Events**
   ```javascript
   // Track Joomla search
   document.addEventListener('DOMContentLoaded', function() {
       const searchForm = document.querySelector('#mod-search-searchform');
       if (searchForm) {
           searchForm.addEventListener('submit', function(e) {
               const searchTerm = this.querySelector('input[name="searchword"]')?.value;
               
               thrivestack.track("search_performed", {
                   search_term: searchTerm,
                   platform: "joomla"
               });
           });
       }
   });
   ```

7. **Track Custom Events**
   ```javascript
   // Track custom Joomla events
   function trackJoomlaEvent(eventName, properties = {}) {
       thrivestack.track(eventName, {
           platform: "joomla",
           site_url: window.location.origin,
           ...properties
       });
   }
   
   // Example usage
   trackJoomlaEvent("newsletter_signup", {
       email: "user@example.com",
       source: "footer"
   });
   ```

8. **PHP Integration for Server-Side Events**
   ```php
   <?php
   // Add this to your template or plugin
   
   // Track user login
   function trackUserLogin($user) {
       $event_data = array(
           'user_id' => $user->id,
           'user_email' => $user->email,
           'platform' => 'joomla',
           'timestamp' => time()
       );
       
       // Log to database or send to external service
       JFactory::getApplication()->enqueueMessage('User login tracked: ' . json_encode($event_data));
   }
   
   // Track article view
   function trackArticleView($article) {
       $event_data = array(
           'article_id' => $article->id,
           'article_title' => $article->title,
           'platform' => 'joomla',
           'timestamp' => time()
       );
       
       JFactory::getApplication()->enqueueMessage('Article view tracked: ' . json_encode($event_data));
   }
   ?>
   ```

9. **Track Menu Clicks**
   ```javascript
   // Track Joomla menu clicks
   document.addEventListener('DOMContentLoaded', function() {
       document.querySelectorAll('.nav-menu a, .menu a').forEach(link => {
           link.addEventListener('click', function() {
               thrivestack.track("navigation_clicked", {
                   link_text: this.textContent,
                   link_href: this.href,
                   current_page: window.location.pathname,
                   platform: "joomla"
               });
           });
       });
   });
   ```

10. **Track Component Views**
    ```javascript
    // Track Joomla component views
    document.addEventListener('DOMContentLoaded', function() {
        const option = '<?php echo $this->input->get("option"); ?>';
        const view = '<?php echo $this->input->get("view"); ?>';
        
        if (option && view) {
            thrivestack.track("component_viewed", {
                component: option,
                view: view,
                platform: "joomla"
            });
        }
    });
    ```

11. **Configuration in Template**
    ```php
    <!-- Add this to your template's index.php -->
    <?php
    $app = JFactory::getApplication();
    $params = $app->getParams();
    $thrivestack_enabled = $params->get('thrivestack_enabled', 1);
    $thrivestack_api_key = $params->get('thrivestack_api_key', '');
    
    if ($thrivestack_enabled && $thrivestack_api_key): ?>
    <script src="https://d3cgzwt0fb6o2k.cloudfront.net/latest/thrivestack.js" 
        api-key="<?php echo $thrivestack_api_key; ?>" 
        source="marketing,product">
    </script>
    <?php endif; ?>
    ```

12. **Track E-commerce Events (if using VirtueMart)**
    ```javascript
    // Track VirtueMart events
    document.addEventListener('DOMContentLoaded', function() {
        // Track add to cart
        document.querySelectorAll('.addtocart-button').forEach(button => {
            button.addEventListener('click', function() {
                const productId = this.dataset.productId;
                const productName = this.dataset.productName;
                
                thrivestack.track("product_added_to_cart", {
                    product_id: productId,
                    product_name: productName,
                    platform: "joomla_virtuemart"
                });
            });
        });
        
        // Track checkout
        if (window.location.pathname.includes('/cart') || window.location.pathname.includes('/checkout')) {
            thrivestack.track("checkout_started", {
                platform: "joomla_virtuemart"
            });
        }
    });
    ``` 