# Sample Application Analytics - ThriveStack Integration

This repository contains two sample applications demonstrating how to integrate ThriveStack analytics into different types of web applications. These applications serve as reference implementations for developers looking to add analytics tracking to their projects.

## 📁 Project Structure

```
Sample-Application-Analytics-NPM/
├── HTML-CSS(Script)/          # Vanilla HTML/CSS/JS application
│   ├── index.html             # Landing page
│   ├── signup.html            # Signup page
│   ├── dashboard.html         # Analytics dashboard
│   ├── styles.css             # Main stylesheet
│   ├── script.js              # JavaScript functionality
│   └── README.md              # Detailed documentation
├── NextJS(NPM)/               # Next.js React application
│   ├── app/                   # Next.js app directory
│   ├── components/            # React components
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utility functions
│   ├── package.json           # Dependencies
│   └── ...                    # Next.js configuration files
└── README.md                  # This file
```

## 🚀 Quick Start

### Option 1: HTML/CSS Application (Vanilla JavaScript)

The HTML/CSS application is a complete marketing website with analytics integration that can be run directly in a browser without any build process.

#### Installation & Setup

1. **Navigate to the HTML-CSS directory:**
   ```bash
   cd "HTML-CSS(Script)"
   ```

2. **Open the application:**
   - Simply open `index.html` in your web browser
   - Or serve it using a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

3. **Access the application:**
   - Open your browser and go to `http://localhost:8000`
   - Navigate through the pages: Landing → Signup → Dashboard

#### Features

- **Landing Page** (`index.html`): Modern marketing page with hero section, features, pricing, and contact form
- **Signup Page** (`signup.html`): Professional signup form with validation and analytics tracking
- **Dashboard** (`dashboard.html`): Analytics dashboard with charts and metrics
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **ThriveStack Integration**: Analytics tracking for user interactions and conversions

#### Integration Steps

**Add ThriveStack Script to HTML Head**
   ```html
   <!-- Add this in the <head> section of each HTML file -->
   <script src="https://d3cgzwt0fb6o2k.cloudfront.net/latest/thrivestack.js" 
       api-key="{API_KEY}" 
       source="marketing,product">
   </script>
   ```



### Option 2: Next.js Application (React)

The Next.js application is a modern React-based dashboard with comprehensive analytics integration using the ThriveStack NPM package.

#### Installation & Setup

1. **Navigate to the Next.js directory:**
   ```bash
   cd "NextJS(NPM)"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the NextJS(NPM) directory:
   ```env
   NEXT_PUBLIC_THRIVESTACK_API_KEY={API_KEY}
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Access the application:**
   - Open your browser and go to `http://localhost:3000`
   - The app will automatically redirect to the dashboard

#### Features

- **Modern React Dashboard**: Built with Next.js 13+ and App Router
- **UI Components**: Comprehensive component library using Radix UI and Tailwind CSS
- **Analytics Integration**: ThriveStack analytics with browser and Node.js support
- **TypeScript**: Full type safety throughout the application
- **Responsive Design**: Mobile-first responsive layout
- **Dark Mode Support**: Built-in theme switching capability

#### Integration Steps

1. **Install ThriveStack NPM Package**
   ```bash
   npm install @thrivestack/analytics-browser @thrivestack/analytics-node
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
         "product"
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


4. **Track User Signup**
   ```typescript
   // Example: Track button clicks
   import { Button } from '@/components/ui/button';
   import * as thrivestack from "@thrivestack/analytics-browser";
   
   export function ActionButton() {
     const handleClick = () => {
      thriveStack.setUser("18f716ac-37a4-464f-adb7-3cc30032308c","john.doe@acme.xyz");
      thriveStack.setGroup("ac8db7ba-5139-4911-ba6e-523fd9c4704b", "acme.com","Acme Corporation");
     };
   
     return (
       <Button onClick={handleClick}>
         Signup
       </Button>
     );
   }
   ```



## 🚀 Getting Started with Your Own Project

1. **Choose your framework**: Select either the HTML/CSS or Next.js approach based on your needs
2. **Copy the integration code**: Use the ThriveStack initialization and tracking code as a template
3. **Customize the events**: Modify the analytics events to match your application's needs
4. **Test thoroughly**: Ensure all events are firing correctly in your ThriveStack dashboard
5. **Deploy**: Once satisfied, deploy your application with analytics tracking

## 📞 Support

For questions about ThriveStack analytics integration:
- Check the [ThriveStack Documentation](https://docs.thrivestack.com)
- Review the integration code in both applications
- Contact ThriveStack support for technical assistance

---

**Built with ❤️ for the ThriveStack community**
