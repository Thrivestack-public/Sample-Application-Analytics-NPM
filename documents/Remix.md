#### Integration Steps

1. **Install ThriveStack NPM Package**
   ```bash
   npm install @thrivestack/analytics-browser
   ```

2. **Create ThriveStack Client**
   ```javascript
   // app/lib/thrivestack.client.js
   import * as thrivestack from "@thrivestack/analytics-browser";
   
   // Initialize ThriveStack
   thrivestack.init(
     "{API_KEY}",
     "marketing,product"
   );
   
   export { thrivestack };
   ```

3. **Track Page Views with Remix Router**
   ```javascript
   // app/root.jsx
   import { useEffect } from "react";
   import { useLocation } from "@remix-run/react";
   import { thrivestack } from "~/lib/thrivestack.client";
   
   export default function App() {
     const location = useLocation();
   
     useEffect(() => {
       thrivestack.track("page_view", {
         page: location.pathname,
         title: document.title
       });
     }, [location]);
   
     return (
       <html>
         <head>
           <title>My Remix App</title>
         </head>
         <body>
           {/* Your app content */}
         </body>
       </html>
     );
   }
   ```

4. **Track User Interactions**
   ```javascript
   // app/routes/signup.jsx
   import { thrivestack } from "~/lib/thrivestack.client";
   
   export default function SignupPage() {
     const handleSignupClick = () => {
       thrivestack.setUser("18f716ac-37a4-464f-adb7-3cc30032308c", "john.doe@acme.xyz");
       thrivestack.setGroup("ac8db7ba-5139-4911-ba6e-523fd9c4704b", "acme.com", "Acme Corporation");
     };
   
     return (
       <div>
         <button onClick={handleSignupClick}>Signup</button>
       </div>
     );
   }
   ```

5. **Track Form Submissions**
   ```javascript
   // app/routes/signup.jsx
   import { Form } from "@remix-run/react";
   import { thrivestack } from "~/lib/thrivestack.client";
   
   export default function SignupPage() {
     const handleSubmit = (event) => {
       const formData = new FormData(event.target);
       
       thrivestack.track("signup_completed", {
         plan: formData.get("plan"),
         source: "remix_app"
       });
     };
   
     return (
       <Form method="post" onSubmit={handleSubmit}>
         <input name="email" type="email" placeholder="Email" />
         <input name="plan" type="text" placeholder="Plan" />
         <button type="submit">Submit</button>
       </Form>
     );
   }
   ```

6. **Track Custom Events**
   ```javascript
   // app/lib/analytics.js
   import { thrivestack } from "./thrivestack.client";
   
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

7. **Server-Side Tracking (Optional)**
   ```javascript
   // app/entry.server.jsx
   import * as thrivestack from "@thrivestack/analytics-node";
   
   thrivestack.init(
     "{API_KEY}",
     "marketing,product"
   );
   
   export default function handleRequest(
     request,
     responseStatusCode,
     responseHeaders,
     remixContext
   ) {
     // Track server-side events
     thrivestack.track("page_request", {
       url: request.url,
       method: request.method
     });
   
     // Continue with normal Remix handling
     return remixRender(request, responseStatusCode, responseHeaders, remixContext);
   }
   ```

8. **Environment Variables**
   ```javascript
   // .env
   THRIVESTACK_API_KEY="{API_KEY}"
   ```

   ```javascript
   // app/lib/thrivestack.client.js
   import * as thrivestack from "@thrivestack/analytics-browser";
   
   thrivestack.init(
     process.env.THRIVESTACK_API_KEY,
     "marketing,product"
   );
   
   export { thrivestack };
   ```

9. **Loader and Action Tracking**
   ```javascript
   // app/routes/products.$productId.jsx
   import { useLoaderData } from "@remix-run/react";
   import { thrivestack } from "~/lib/thrivestack.client";
   
   export async function loader({ params }) {
     // Your loader logic
     return { product: productData };
   }
   
   export default function ProductPage() {
     const { product } = useLoaderData();
   
     useEffect(() => {
       thrivestack.track("product_viewed", {
         product_id: product.id,
         product_name: product.name
       });
     }, [product]);
   
     return (
       <div>
         <h1>{product.name}</h1>
         {/* Product content */}
       </div>
     );
   }
   ``` 