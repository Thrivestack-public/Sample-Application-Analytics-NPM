#### Integration Steps

1. **Install ThriveStack NPM Package**
   ```bash
   npm install @thrivestack/analytics-browser
   ```

2. **Create ThriveStack Service**
   ```typescript
   // services/thrivestack.service.ts
   import { Injectable } from '@angular/core';
   import * as thrivestack from "@thrivestack/analytics-browser";
   
   @Injectable({
     providedIn: 'root'
   })
   export class ThriveStackService {
     constructor() {
       thrivestack.init(
         "{API_KEY}",
         "marketing,product"
       );
     }
   
     track(event: string, properties?: any) {
       thrivestack.track(event, properties);
     }
   
     setUser(userId: string, email: string) {
       thrivestack.setUser(userId, email);
     }
   
     setGroup(groupId: string, domain: string, name: string) {
       thrivestack.setGroup(groupId, domain, name);
     }
   }
   ```

3. **Track Page Views with Router**
   ```typescript
   // app.component.ts
   import { Component, OnInit } from '@angular/core';
   import { Router, NavigationEnd } from '@angular/router';
   import { filter } from 'rxjs/operators';
   import { ThriveStackService } from './services/thrivestack.service';
   
   @Component({
     selector: 'app-root',
     template: '<router-outlet></router-outlet>'
   })
   export class AppComponent implements OnInit {
     constructor(
       private router: Router,
       private thrivestack: ThriveStackService
     ) {}
   
     ngOnInit() {
       this.router.events.pipe(
         filter(event => event instanceof NavigationEnd)
       ).subscribe((event: NavigationEnd) => {
         this.thrivestack.track("page_view", {
           page: event.urlAfterRedirects,
           title: document.title
         });
       });
     }
   }
   ```

4. **Track User Interactions**
   ```typescript
   // components/signup.component.ts
   import { Component } from '@angular/core';
   import { ThriveStackService } from '../services/thrivestack.service';
   
   @Component({
     selector: 'app-signup',
     template: `
       <button (click)="handleSignupClick()">Signup</button>
     `
   })
   export class SignupComponent {
     constructor(private thrivestack: ThriveStackService) {}
   
     handleSignupClick() {
       this.thrivestack.setUser("18f716ac-37a4-464f-adb7-3cc30032308c", "john.doe@acme.xyz");
       this.thrivestack.setGroup("ac8db7ba-5139-4911-ba6e-523fd9c4704b", "acme.com", "Acme Corporation");
     }
   }
   ```

5. **Track Form Submissions**
   ```typescript
   // components/signup-form.component.ts
   import { Component } from '@angular/core';
   import { FormBuilder, FormGroup, Validators } from '@angular/forms';
   import { ThriveStackService } from '../services/thrivestack.service';
   
   @Component({
     selector: 'app-signup-form',
     template: `
       <form [formGroup]="signupForm" (ngSubmit)="onSubmit()">
         <input formControlName="email" type="email" placeholder="Email">
         <input formControlName="plan" type="text" placeholder="Plan">
         <button type="submit">Submit</button>
       </form>
     `
   })
   export class SignupFormComponent {
     signupForm: FormGroup;
   
     constructor(
       private fb: FormBuilder,
       private thrivestack: ThriveStackService
     ) {
       this.signupForm = this.fb.group({
         email: ['', Validators.required],
         plan: ['', Validators.required]
       });
     }
   
     onSubmit() {
       if (this.signupForm.valid) {
         this.thrivestack.track("signup_completed", {
           plan: this.signupForm.value.plan,
           source: "angular_app"
         });
       }
     }
   }
   ```

6. **Track Custom Events**
   ```typescript
   // services/analytics.service.ts
   import { Injectable } from '@angular/core';
   import { ThriveStackService } from './thrivestack.service';
   
   @Injectable({
     providedIn: 'root'
   })
   export class AnalyticsService {
     constructor(private thrivestack: ThriveStackService) {}
   
     trackFeatureUsage(featureName: string) {
       this.thrivestack.track("feature_used", {
         feature: featureName,
         page: window.location.pathname
       });
     }
   
     trackProductView(productId: string) {
       this.thrivestack.track("product_viewed", {
         product_id: productId,
         category: "electronics"
       });
     }
   }
   ```

7. **Track HTTP Requests (Optional)**
   ```typescript
   // interceptors/analytics.interceptor.ts
   import { Injectable } from '@angular/core';
   import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
   import { Observable } from 'rxjs';
   import { tap } from 'rxjs/operators';
   import { ThriveStackService } from '../services/thrivestack.service';
   
   @Injectable()
   export class AnalyticsInterceptor implements HttpInterceptor {
     constructor(private thrivestack: ThriveStackService) {}
   
     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       return next.handle(req).pipe(
         tap(
           event => {
             this.thrivestack.track("api_request", {
               endpoint: req.url,
               method: req.method
             });
           }
         )
       );
     }
   }
   ``` 