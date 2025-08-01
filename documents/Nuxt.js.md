#### Integration Steps

1. **Install ThriveStack NPM Package**
   ```bash
   npm install @thrivestack/analytics-browser
   ```

2. **Create ThriveStack Plugin**
   ```javascript
   // plugins/thrivestack.client.js
   import * as thrivestack from "@thrivestack/analytics-browser";
   
   export default defineNuxtPlugin(() => {
     // Initialize ThriveStack
     thrivestack.init(
       "{API_KEY}",
       "marketing,product"
     );
   
     return {
       provide: {
         thrivestack
       }
     };
   });
   ```

3. **Track Page Views**
   ```javascript
   // app.vue or individual pages
   <script setup>
   import { useRoute } from 'vue-router';
   import { onMounted } from 'vue';
   
   const route = useRoute();
   const { $thrivestack } = useNuxtApp();
   
   onMounted(() => {
     $thrivestack.track("page_view", {
       page: route.path,
       title: document.title
     });
   });
   </script>
   ```

4. **Track User Interactions**
   ```vue
   <!-- Example: Track button clicks -->
   <template>
     <button @click="handleSignupClick">Signup</button>
   </template>
   
   <script setup>
   const { $thrivestack } = useNuxtApp();
   
   const handleSignupClick = () => {
     $thrivestack.setUser("18f716ac-37a4-464f-adb7-3cc30032308c", "john.doe@acme.xyz");
     $thrivestack.setGroup("ac8db7ba-5139-4911-ba6e-523fd9c4704b", "acme.com", "Acme Corporation");
   };
   </script>
   ```

5. **Track Form Submissions**
   ```vue
   <!-- Example: Track form submissions -->
   <template>
     <form @submit="handleSubmit">
       <!-- form fields -->
     </form>
   </template>
   
   <script setup>
   import { ref } from 'vue';
   
   const { $thrivestack } = useNuxtApp();
   const formData = ref({});
   
   const handleSubmit = (e) => {
     e.preventDefault();
     
     $thrivestack.track("signup_completed", {
       plan: formData.value.plan,
       source: "nuxt_app"
     });
   };
   </script>
   ```

6. **Track Custom Events**
   ```javascript
   // composables/useAnalytics.js
   export const useAnalytics = () => {
     const { $thrivestack } = useNuxtApp();
   
     const trackFeatureUsage = (featureName) => {
       $thrivestack.track("feature_used", {
         feature: featureName,
         page: window.location.pathname
       });
     };
   
     const trackProductView = (productId) => {
       $thrivestack.track("product_viewed", {
         product_id: productId,
         category: "electronics"
       });
     };
   
     return {
       trackFeatureUsage,
       trackProductView
     };
   };
   ```

7. **Server-Side Tracking (Optional)**
   ```javascript
   // server/api/analytics.js
   import * as thrivestack from "@thrivestack/analytics-node";
   
   export default defineEventHandler(async (event) => {
     thrivestack.init(
       "{API_KEY}",
       "marketing,product"
     );
   
     // Track server-side events
     thrivestack.track("api_request", {
       endpoint: event.path,
       method: event.method
     });
   });
   ``` 