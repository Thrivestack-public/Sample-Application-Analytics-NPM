#### Integration Steps

1.  **Access WebFlow Project Settings**

    Open your WebFlow project dashboard -> Click on the Project Settings (gear icon) in the left sidebar ->Navigate to the Custom Code tab

    ![WebFlow Custom Code Settings](../assets/Webflow-custom-code.png)

2. **Add ThriveStack Script to WebFlow Site for Automatic page views**


   ```html
   <!-- Add this in the <head> section of your WebFlow site -->
   <script src="https://d3cgzwt0fb6o2k.cloudfront.net/latest/thrivestack.js" 
       api-key="{API_KEY}" 
       source="marketing,product">
   </script>
   ```

