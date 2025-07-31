#### Integration Steps

1. **Install ThriveStack NPM Package**
   ```bash
   npm install @thrivestack/analytics-browser
   ```

2. **Create ThriveStack Provider Component**
   ```typescript
   // components/ThriveStackProvider.tsx
   "use client";
   
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
   // app/layout.tsx
   import ThriveStackProvider from '@/components/ThriveStackProvider';
   
   export default function RootLayout({
     children,
   }: {
     children: React.ReactNode;
   }) {
     return (
       <html lang="en">
         <body>
           <ThriveStackProvider>
             {children}
           </ThriveStackProvider>
         </body>
       </html>
     );
   }
   ```


4. **Track User Interactions**
   ```typescript
   // Example: Track button clicks
   import { Button } from '@/components/ui/button';
   import * as thrivestack from "@thrivestack/analytics-browser";
   
   export function ActionButton() {
     const handleSingupClick = () => {
       thriveStack.setUser("18f716ac-37a4-464f-adb7-3cc30032308c","john.doe@acme.xyz");
       thriveStack.setGroup("ac8db7ba-5139-4911-ba6e-523fd9c4704b", "acme.com","Acme Corporation")
     };
   
     return (
       <Button onClick={handleSingupClick}>
         Create Project
       </Button>
     );
   }
   ```
