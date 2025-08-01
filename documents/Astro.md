#### Integration Steps

1. **Install ThriveStack NPM Package**
   ```bash
   npm install @thrivestack/analytics-browser
   ```

2. **Create ThriveStack Client**
   ```javascript
   // src/lib/thrivestack.js
   import * as thrivestack from "@thrivestack/analytics-browser";
   
   // Initialize ThriveStack
   thrivestack.init(
     "{API_KEY}",
     "marketing,product"
   );
   
   export { thrivestack };
   ```

3. **Track Page Views with Astro Router**
   ```javascript
   <!-- src/layouts/Layout.astro -->
   ---
   import { thrivestack } from '../lib/thrivestack.js';
   ---
   
   <html>
     <head>
       <title>{Astro.props.title}</title>
     </head>
     <body>
       <slot />
     </body>
   </html>
   
   <script>
     import { thrivestack } from '../lib/thrivestack.js';
   
     // Track page view
     thrivestack.track("page_view", {
       page: window.location.pathname,
       title: document.title
     });
   </script>
   ```

4. **Track User Interactions**
   ```astro
   <!-- src/components/SignupButton.astro -->
   <button id="signup-btn">Signup</button>
   
   <script>
     import { thrivestack } from '../lib/thrivestack.js';
   
     document.getElementById('signup-btn').addEventListener('click', function() {
       thrivestack.setUser("18f716ac-37a4-464f-adb7-3cc30032308c", "john.doe@acme.xyz");
       thrivestack.setGroup("ac8db7ba-5139-4911-ba6e-523fd9c4704b", "acme.com", "Acme Corporation");
     });
   </script>
   ```

5. **Track Form Submissions**
   ```astro
   <!-- src/components/SignupForm.astro -->
   <form id="signup-form">
     <input type="email" name="email" placeholder="Email" />
     <input type="text" name="plan" placeholder="Plan" />
     <button type="submit">Submit</button>
   </form>
   
   <script>
     import { thrivestack } from '../lib/thrivestack.js';
   
     document.getElementById('signup-form').addEventListener('submit', function(e) {
       e.preventDefault();
       
       const formData = new FormData(this);
       thrivestack.track("signup_completed", {
         plan: formData.get('plan'),
         source: "astro_app"
       });
     });
   </script>
   ```

6. **Track Custom Events**
   ```javascript
   // src/utils/analytics.js
   import { thrivestack } from '../lib/thrivestack.js';
   
   export function trackFeatureUsage(featureName) {
     thrivestack.track("feature_used", {
       feature: featureName,
       page: window.location.pathname
     });
   }
   
   export function trackProductView(productId) {
     thrivestack.track("product_viewed", {
       product_id: productId,
       category: "electronics"
     });
   }
   ```

7. **Environment Variables**
   ```javascript
   // .env
   PUBLIC_THRIVESTACK_API_KEY="{API_KEY}"
   ```

   ```javascript
   // src/lib/thrivestack.js
   import { PUBLIC_THRIVESTACK_API_KEY } from 'astro:env';
   import * as thrivestack from "@thrivestack/analytics-browser";
   
   thrivestack.init(
     PUBLIC_THRIVESTACK_API_KEY,
     "marketing,product"
   );
   
   export { thrivestack };
   ```

8. **Track Blog Post Views**
   ```astro
   <!-- src/pages/blog/[slug].astro -->
   ---
   export async function getStaticPaths() {
     // Your static paths logic
   }
   
   const { slug } = Astro.params;
   const post = await getPost(slug);
   ---
   
   <Layout title={post.title}>
     <article>
       <h1>{post.title}</h1>
       <div set:html={post.content} />
     </article>
   </Layout>
   
   <script define:vars={{ post }}>
     import { thrivestack } from '../../lib/thrivestack.js';
   
     thrivestack.track("blog_post_viewed", {
       post_title: post.title,
       post_slug: post.slug,
       post_date: post.date
     });
   </script>
   ```

9. **Track Link Clicks**
   ```astro
   <!-- src/components/Navigation.astro -->
   <nav>
     <a href="/" class="nav-link">Home</a>
     <a href="/blog" class="nav-link">Blog</a>
     <a href="/about" class="nav-link">About</a>
   </nav>
   
   <script>
     import { thrivestack } from '../lib/thrivestack.js';
   
     document.querySelectorAll('.nav-link').forEach(link => {
       link.addEventListener('click', function() {
         thrivestack.track("navigation_clicked", {
           link_text: this.textContent,
           link_href: this.href,
           current_page: window.location.pathname
         });
       });
     });
   </script>
   ``` 