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

1. **Add ThriveStack Script to HTML Head**
   ```html
   <!-- Add this in the <head> section of each HTML file -->
   <script src="https://d3cgzwt0fb6o2k.cloudfront.net/latest/thrivestack.js" 
       api-key="IF/Gp3WO+iIRj/c7YQc7QKCgB188X3FT5gXp0Yp8K1Y=" 
       source="product">
   </script>
   ```

2. **Initialize Analytics in JavaScript**
   ```javascript
   // Add this to script.js or in a <script> tag
   document.addEventListener('DOMContentLoaded', function() {
       // Track page view
       thrivestack.track("page_view", {
           page: window.location.pathname,
           title: document.title
       });
   });
   ```

3. **Track User Interactions**
   ```javascript
   // Example: Track signup form submission
   document.getElementById('signup-form').addEventListener('submit', function(e) {
       thrivestack.track("signup_completed", {
           plan: "premium",
           source: "landing_page"
       });
   });

   // Example: Track button clicks
   document.querySelectorAll('.cta-button').forEach(button => {
       button.addEventListener('click', function() {
           thrivestack.track("cta_clicked", {
               button_text: this.textContent,
               page: window.location.pathname
           });
       });
   });
   ```

4. **Track Form Interactions**
   ```javascript
   // Track form field interactions
   document.querySelectorAll('input, textarea, select').forEach(field => {
       field.addEventListener('focus', function() {
           thrivestack.track("form_field_focused", {
               field_name: this.name,
               field_type: this.type
           });
       });
   });
   ```

5. **Track Page Navigation**
   ```javascript
   // Track internal link clicks
   document.querySelectorAll('a[href="#"], a[href="/"]').forEach(link => {
       link.addEventListener('click', function() {
           thrivestack.track("navigation_clicked", {
               link_text: this.textContent,
               link_href: this.href,
               current_page: window.location.pathname
           });
       });
   });
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
   NEXT_PUBLIC_THRIVESTACK_API_KEY=IF/Gp3WO+iIRj/c7YQc7QKCgB188X3FT5gXp0Yp8K1Y=
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
         "IF/Gp3WO+iIRj/c7YQc7QKCgB188X3FT5gXp0Yp8K1Y=",
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

4. **Track Page Views**
   ```typescript
   // app/dashboard/page.tsx
   "use client";
   
   import { useEffect } from 'react';
   import * as thrivestack from "@thrivestack/analytics-browser";
   
   export default function DashboardPage() {
     useEffect(() => {
       thrivestack.track("page_view", {
         page: "/dashboard",
         title: "Dashboard"
       });
     }, []);
   
     return (
       // Your dashboard component
     );
   }
   ```

5. **Track User Interactions**
   ```typescript
   // Example: Track button clicks
   import { Button } from '@/components/ui/button';
   import * as thrivestack from "@thrivestack/analytics-browser";
   
   export function ActionButton() {
     const handleClick = () => {
       thrivestack.track("button_clicked", {
         button_text: "Create Project",
         page: "/dashboard"
       });
     };
   
     return (
       <Button onClick={handleClick}>
         Create Project
       </Button>
     );
   }
   ```

6. **Track Form Submissions**
   ```typescript
   // Example: Track form submissions
   import { useForm } from 'react-hook-form';
   import * as thrivestack from "@thrivestack/analytics-browser";
   
   export function SignupForm() {
     const { register, handleSubmit } = useForm();
   
     const onSubmit = (data: any) => {
       thrivestack.track("signup_completed", {
         plan: data.plan,
         source: "dashboard"
       });
     };
   
     return (
       <form onSubmit={handleSubmit(onSubmit)}>
         {/* form fields */}
       </form>
     );
   }
   ```

7. **Track Custom Events**
   ```typescript
   // Example: Track custom business events
   import * as thrivestack from "@thrivestack/analytics-browser";
   
   export function trackProjectCreated(projectData: any) {
     thrivestack.track("project_created", {
       project_name: projectData.name,
       project_type: projectData.type,
       team_size: projectData.teamSize
     });
   }
   
   export function trackFeatureUsed(featureName: string) {
     thrivestack.track("feature_used", {
       feature: featureName,
       page: window.location.pathname
     });
   }
   ```

## 🔧 ThriveStack Analytics Integration

Both applications demonstrate different approaches to integrating ThriveStack analytics. The integration uses the API key `IF/Gp3WO+iIRj/c7YQc7QKCgB188X3FT5gXp0Yp8K1Y=` with the source `product`:

### Integration Methods

1. **CDN Script Tag** (HTML/CSS Application): Simple integration using a script tag loaded from CloudFront
2. **NPM Package** (Next.js Application): Modern integration using the official ThriveStack NPM package

Both methods provide the same analytics capabilities but are suited for different development workflows.

### HTML/CSS Application Integration

The vanilla JavaScript application uses the ThriveStack browser SDK via CDN script tag:

```html
<!-- ThriveStack Analytics Integration -->
<script src="https://d3cgzwt0fb6o2k.cloudfront.net/latest/thrivestack.js" 
    api-key={api-key} 
    source={source}>
</script>
```

Once the script is loaded, you can track user events:

```javascript
// Track user events
thrivestack.track("page_view", {
  page: "landing",
  source: "organic"
});

thrivestack.track("signup_completed", {
  plan: "premium",
  source: "landing_page"
});
```

### Next.js Application Integration

The React application uses the ThriveStack NPM package with a provider pattern:

```typescript
// ThriveStackProvider.tsx
import * as thrivestack from "@thrivestack/analytics-browser";

export default function ThriveStackProvider({ children }) {
  useEffect(() => {
    thrivestack.init(
      "IF/Gp3WO+iIRj/c7YQc7QKCgB188X3FT5gXp0Yp8K1Y=",
      "product"
    );
  }, []);

  return <>{children}</>;
}
```

**Note**: The Next.js application uses the NPM package approach, while the HTML/CSS application uses the CDN script tag approach. Both methods achieve the same result but are suited for different development workflows.

## 📊 Analytics Events Tracked

Both applications track the following key events:

### User Journey Events
- `page_view` - When users visit different pages
- `signup_started` - When users begin the signup process
- `signup_completed` - When users successfully complete signup
- `login_attempted` - When users attempt to log in
- `dashboard_accessed` - When users access the dashboard

### Engagement Events
- `feature_clicked` - When users interact with features
- `pricing_viewed` - When users view pricing information
- `contact_form_submitted` - When users submit contact forms
- `chart_interaction` - When users interact with dashboard charts

### Conversion Events
- `plan_selected` - When users select a pricing plan
- `payment_initiated` - When users start the payment process
- `trial_started` - When users begin a free trial

## 🎨 Design Features

### HTML/CSS Application
- **Modern Gradient Backgrounds** with CSS gradients
- **Glass Morphism Effects** with backdrop blur
- **Smooth Animations** and transitions
- **Interactive Charts** using Chart.js
- **Responsive Grid Layouts**
- **Beautiful Typography** using Inter font

### Next.js Application
- **Component-Based Architecture** with reusable UI components
- **Tailwind CSS** for utility-first styling
- **Radix UI** for accessible component primitives
- **Dark/Light Theme Support**
- **Responsive Design** with mobile-first approach
- **Modern Dashboard UI** with cards, tabs, and charts

## 🛠️ Technologies Used

### HTML/CSS Application
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript (ES6+)** - Interactive functionality
- **Chart.js** - Data visualization
- **Font Awesome** - Icons
- **Google Fonts** - Typography

### Next.js Application
- **Next.js 13+** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **Recharts** - Chart components
- **React Hook Form** - Form handling
- **Zod** - Schema validation

## 📱 Browser Support

Both applications support:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Development

### HTML/CSS Application
To modify the HTML/CSS application:
1. Edit HTML files for structure changes
2. Modify `styles.css` for styling updates
3. Update `script.js` for new functionality
4. Test responsiveness on different devices

### Next.js Application
To modify the Next.js application:
1. Edit React components in the `components/` directory
2. Modify pages in the `app/` directory
3. Update styles using Tailwind CSS classes
4. Add new analytics events in the ThriveStackProvider

## 📈 Performance

### HTML/CSS Application
- Optimized CSS and JavaScript
- Efficient animations using CSS transforms
- Minimal external dependencies
- Fast loading times

### Next.js Application
- Server-side rendering for better SEO
- Code splitting and lazy loading
- Optimized bundle size
- Fast refresh during development

## 🤝 Contributing

Feel free to:
- Report bugs or issues
- Suggest new features
- Submit pull requests
- Improve documentation
- Add new analytics events

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎯 Use Cases

These sample applications are perfect for:

1. **Learning ThriveStack Integration**: Understand how to implement analytics in different frameworks
2. **Prototyping**: Use as a starting point for your own analytics-enabled applications
3. **Testing**: Validate analytics implementation before deploying to production
4. **Demo Purposes**: Showcase analytics capabilities to stakeholders
5. **Development Reference**: Use as a reference for best practices

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