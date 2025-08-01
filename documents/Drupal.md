#### Integration Steps

1. **Add ThriveStack Script to Drupal Theme**
   ```php
   // Add this to your theme's .info.yml file
   libraries:
     - your_theme/thrivestack
   ```

   ```yaml
   # your_theme.libraries.yml
   thrivestack:
     js:
       https://d3cgzwt0fb6o2k.cloudfront.net/latest/thrivestack.js: { type: external, minified: true }
     dependencies:
       - core/drupal
   ```

2. **Initialize Analytics in JavaScript**
   ```javascript
   // Add this to your theme's main JavaScript file
   (function ($, Drupal) {
     'use strict';
   
     Drupal.behaviors.thrivestackAnalytics = {
       attach: function (context, settings) {
         // Track page view
         thrivestack.track("page_view", {
           page: window.location.pathname,
           title: document.title,
           node_type: drupalSettings.path.currentPath
         });
       }
     };
   })(jQuery, Drupal);
   ```

3. **Track User Registration**
   ```javascript
   // Track Drupal user registration
   (function ($, Drupal) {
     'use strict';
   
     Drupal.behaviors.thrivestackUserRegistration = {
       attach: function (context, settings) {
         $('#user-register-form', context).once('thrivestack-registration').on('submit', function() {
           thrivestack.setUser("18f716ac-37a4-464f-adb7-3cc30032308c", "john.doe@acme.xyz");
           thrivestack.setGroup("ac8db7ba-5139-4911-ba6e-523fd9c4704b", "acme.com", "Acme Corporation");
           
           thrivestack.track("signup_completed", {
             platform: "drupal",
             source: "user_registration"
           });
         });
       }
     };
   })(jQuery, Drupal);
   ```

4. **Track Form Submissions**
   ```javascript
   // Track Drupal form submissions
   (function ($, Drupal) {
     'use strict';
   
     Drupal.behaviors.thrivestackFormTracking = {
       attach: function (context, settings) {
         $('form', context).once('thrivestack-forms').on('submit', function() {
           const formId = this.id;
           const formAction = this.action;
           
           thrivestack.track("form_submitted", {
             form_id: formId,
             form_action: formAction,
             platform: "drupal"
           });
         });
       }
     };
   })(jQuery, Drupal);
   ```

5. **Track Node Views**
   ```javascript
   // Track Drupal node views
   (function ($, Drupal) {
     'use strict';
   
     Drupal.behaviors.thrivestackNodeTracking = {
       attach: function (context, settings) {
         if (drupalSettings.node && drupalSettings.node.nid) {
           thrivestack.track("node_viewed", {
             node_id: drupalSettings.node.nid,
             node_type: drupalSettings.node.type,
             node_title: drupalSettings.node.title,
             platform: "drupal"
           });
         }
       }
     };
   })(jQuery, Drupal);
   ```

6. **Track Search Events**
   ```javascript
   // Track Drupal search
   (function ($, Drupal) {
     'use strict';
   
     Drupal.behaviors.thrivestackSearchTracking = {
       attach: function (context, settings) {
         $('#search-form', context).once('thrivestack-search').on('submit', function() {
           const searchTerm = $(this).find('input[name="keys"]').val();
           
           thrivestack.track("search_performed", {
             search_term: searchTerm,
             platform: "drupal"
           });
         });
       }
     };
   })(jQuery, Drupal);
   ```

7. **Track Custom Events**
   ```javascript
   // Track custom Drupal events
   function trackDrupalEvent(eventName, properties = {}) {
     thrivestack.track(eventName, {
       platform: "drupal",
       site_url: window.location.origin,
       ...properties
     });
   }
   
   // Example usage
   trackDrupalEvent("newsletter_signup", {
     email: "user@example.com",
     source: "footer"
   });
   ```

8. **PHP Integration for Server-Side Events**
   ```php
   <?php
   // Add this to your custom module
   
   /**
    * Implements hook_user_login().
    */
   function your_module_user_login($account) {
     // Track user login server-side
     $event_data = [
       'user_id' => $account->id(),
       'user_email' => $account->getEmail(),
       'platform' => 'drupal',
       'timestamp' => time()
     ];
     
     // Log to database or send to external service
     \Drupal::logger('thrivestack')->info('User login: @data', ['@data' => json_encode($event_data)]);
   }
   
   /**
    * Implements hook_node_view().
    */
   function your_module_node_view(array &$build, \Drupal\Core\Entity\EntityInterface $entity, \Drupal\Core\Entity\Display\EntityViewDisplayInterface $display, $view_mode) {
     // Track node view server-side
     $event_data = [
       'node_id' => $entity->id(),
       'node_type' => $entity->bundle(),
       'node_title' => $entity->label(),
       'platform' => 'drupal',
       'timestamp' => time()
     ];
     
     \Drupal::logger('thrivestack')->info('Node viewed: @data', ['@data' => json_encode($event_data)]);
   }
   ```

9. **Configuration in settings.php**
   ```php
   // Add to settings.php
   $config['thrivestack.settings'] = [
     'api_key' => 'your_api_key_here',
     'enabled' => TRUE,
     'track_anonymous' => TRUE,
   ];
   ```

10. **Track Commerce Events (if using Drupal Commerce)**
    ```javascript
    // Track Drupal Commerce events
    (function ($, Drupal) {
      'use strict';
    
      Drupal.behaviors.thrivestackCommerceTracking = {
        attach: function (context, settings) {
          // Track add to cart
          $('.commerce-order-item-add-to-cart-form', context).once('thrivestack-commerce').on('submit', function() {
            const productId = $(this).find('input[name="product_id"]').val();
            const productTitle = $(this).closest('.product').find('.product-title').text();
            
            thrivestack.track("product_added_to_cart", {
              product_id: productId,
              product_title: productTitle,
              platform: "drupal_commerce"
            });
          });
          
          // Track checkout
          if (window.location.pathname.includes('/checkout')) {
            thrivestack.track("checkout_started", {
              platform: "drupal_commerce"
            });
          }
        }
      };
    })(jQuery, Drupal);
    ```

11. **Track Menu Clicks**
    ```javascript
    // Track Drupal menu clicks
    (function ($, Drupal) {
      'use strict';
    
      Drupal.behaviors.thrivestackMenuTracking = {
        attach: function (context, settings) {
          $('.menu a, .navigation a', context).once('thrivestack-menu').on('click', function() {
            thrivestack.track("navigation_clicked", {
              link_text: $(this).text(),
              link_href: $(this).attr('href'),
              current_page: window.location.pathname,
              platform: "drupal"
            });
          });
        }
      };
    })(jQuery, Drupal);
    ``` 