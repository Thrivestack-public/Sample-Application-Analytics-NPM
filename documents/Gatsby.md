#### Integration Steps

1. **Install ThriveStack NPM Package**
   ```bash
   npm install @thrivestack/analytics-browser
   ```

2. **Create ThriveStack Plugin**
   ```javascript
   // gatsby-browser.js
   import * as thrivestack from "@thrivestack/analytics-browser";
   
   // Initialize ThriveStack
   thrivestack.init(
     "{API_KEY}",
     "marketing,product"
   );
   
   // Track page views
   export const onRouteUpdate = ({ location }) => {
     thrivestack.track("page_view", {
       page: location.pathname,
       title: document.title
     });
   };
   ```

3. **Track User Interactions**
   ```javascript
   // components/SignupButton.js
   import React from 'react';
   import * as thrivestack from "@thrivestack/analytics-browser";
   
   export default function SignupButton() {
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

4. **Track Form Submissions**
   ```javascript
   // components/SignupForm.js
   import React, { useState } from 'react';
   import * as thrivestack from "@thrivestack/analytics-browser";
   
   export default function SignupForm() {
     const [formData, setFormData] = useState({
       email: '',
       plan: ''
     });
   
     const handleSubmit = (e) => {
       e.preventDefault();
       
       thrivestack.track("signup_completed", {
         plan: formData.plan,
         source: "gatsby_app"
       });
     };
   
     return (
       <form onSubmit={handleSubmit}>
         <input
           type="email"
           value={formData.email}
           onChange={(e) => setFormData({...formData, email: e.target.value})}
           placeholder="Email"
         />
         <input
           type="text"
           value={formData.plan}
           onChange={(e) => setFormData({...formData, plan: e.target.value})}
           placeholder="Plan"
         />
         <button type="submit">Submit</button>
       </form>
     );
   }
   ```

5. **Track Custom Events**
   ```javascript
   // utils/analytics.js
   import * as thrivestack from "@thrivestack/analytics-browser";
   
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

6. **Track Blog Post Views**
   ```javascript
   // templates/blog-post.js
   import React, { useEffect } from 'react';
   import * as thrivestack from "@thrivestack/analytics-browser";
   
   export default function BlogPost({ data }) {
     const { markdownRemark: post } = data;
   
     useEffect(() => {
       thrivestack.track("blog_post_viewed", {
         post_id: post.id,
         post_title: post.frontmatter.title,
         author: post.frontmatter.author
       });
     }, [post]);
   
     return (
       <div>
         <h1>{post.frontmatter.title}</h1>
         <div dangerouslySetInnerHTML={{ __html: post.html }} />
       </div>
     );
   }
   ```

7. **Environment Variables**
   ```javascript
   // .env
   GATSBY_THRIVESTACK_API_KEY="{API_KEY}"
   ```

   ```javascript
   // gatsby-browser.js
   import * as thrivestack from "@thrivestack/analytics-browser";
   
   thrivestack.init(
     process.env.GATSBY_THRIVESTACK_API_KEY,
     "marketing,product"
   );
   
   export const onRouteUpdate = ({ location }) => {
     thrivestack.track("page_view", {
       page: location.pathname,
       title: document.title
     });
   };
   ```

8. **Track Gatsby GraphQL Queries**
   ```javascript
   // pages/index.js
   import React, { useEffect } from 'react';
   import { useStaticQuery, graphql } from 'gatsby';
   import * as thrivestack from "@thrivestack/analytics-browser";
   
   export default function IndexPage() {
     const data = useStaticQuery(graphql`
       query {
         allMarkdownRemark {
           totalCount
         }
       }
     `);
   
     useEffect(() => {
       thrivestack.track("homepage_viewed", {
         total_posts: data.allMarkdownRemark.totalCount
       });
     }, [data]);
   
     return (
       <div>
         <h1>Welcome to my Gatsby site</h1>
         <p>Total posts: {data.allMarkdownRemark.totalCount}</p>
       </div>
     );
   }
   ```

9. **Track Link Clicks**
   ```javascript
   // components/Navigation.js
   import React from 'react';
   import { Link } from 'gatsby';
   import * as thrivestack from "@thrivestack/analytics-browser";
   
   export default function Navigation() {
     const handleLinkClick = (linkText) => {
       thrivestack.track("navigation_clicked", {
         link_text: linkText,
         current_page: window.location.pathname
       });
     };
   
     return (
       <nav>
         <Link to="/" onClick={() => handleLinkClick("Home")}>
           Home
         </Link>
         <Link to="/blog" onClick={() => handleLinkClick("Blog")}>
           Blog
         </Link>
         <Link to="/about" onClick={() => handleLinkClick("About")}>
           About
         </Link>
       </nav>
     );
   }
   ``` 