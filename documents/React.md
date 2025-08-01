#### Integration Steps

1. **Install ThriveStack NPM Package**
   ```bash
   npm install @thrivestack/analytics-browser
   ```

2. **Create ThriveStack Provider Component**
   ```typescript
   // components/ThriveStackProvider.tsx
   import { useEffect } from "react";
   import * as thrivestack from "@thrivestack/analytics-browser";
   
   export default function ThriveStackProvider({
     children,
   }: {
     children: React.ReactNode;
   }) {
     useEffect(() => {
       thrivestack.init(
         "{API_KEY}",
         "marketing,product"
       );
     }, []);
   
     return <>{children}</>;
   }
   ```

3. **Wrap Your App with the Provider**
   ```typescript
   // App.tsx or index.tsx
   import React from 'react';
   import ThriveStackProvider from './components/ThriveStackProvider';
   
   function App() {
     return (
       <ThriveStackProvider>
         {/* Your app components */}
       </ThriveStackProvider>
     );
   }
   
   export default App;
   ```

4. **Track User Interactions**
   ```typescript
   // Example: Track button clicks
   import React from 'react';
   import * as thrivestack from "@thrivestack/analytics-browser";
   
   export function ActionButton() {
     const handleSignupClick = () => {
       thrivestack.setUser("18f716ac-37a4-464f-adb7-3cc30032308c", "john.doe@acme.xyz");
       thrivestack.setGroup("ac8db7ba-5139-4911-ba6e-523fd9c4704b", "acme.com", "Acme Corporation");
     };
   
     return (
       <button onClick={handleSignupClick}>
         Signup
       </button>
     );
   }
   ```

5. **Track Page Views**
   ```typescript
   // Example: Track page views in React Router
   import { useEffect } from 'react';
   import { useLocation } from 'react-router-dom';
   import * as thrivestack from "@thrivestack/analytics-browser";
   
   export function PageTracker() {
     const location = useLocation();
   
     useEffect(() => {
       thrivestack.track("page_view", {
         page: location.pathname,
         title: document.title
       });
     }, [location]);
   
     return null;
   }
   ```

6. **Track Form Submissions**
   ```typescript
   // Example: Track form submissions
   import React, { useState } from 'react';
   import * as thrivestack from "@thrivestack/analytics-browser";
   
   export function SignupForm() {
     const [formData, setFormData] = useState({});
   
     const handleSubmit = (e: React.FormEvent) => {
       e.preventDefault();
       
       thrivestack.track("signup_completed", {
         plan: formData.plan,
         source: "react_app"
       });
     };
   
     return (
       <form onSubmit={handleSubmit}>
         {/* form fields */}
       </form>
     );
   }
   ```

7. **Track Custom Events**
   ```typescript
   // Example: Track custom business events
   import * as thrivestack from "@thrivestack/analytics-browser";
   
   export function trackFeatureUsage(featureName: string) {
     thrivestack.track("feature_used", {
       feature: featureName,
       page: window.location.pathname
     });
   }
   
   export function trackProductView(productId: string) {
     thrivestack.track("product_viewed", {
       product_id: productId,
       category: "electronics"
     });
   }
   ``` 