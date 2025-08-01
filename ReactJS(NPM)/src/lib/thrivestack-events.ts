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

export function trackSignupCompleted(plan: string, source: string = "react_app") {
  thrivestack.track("signup_completed", {
    plan,
    source
  });
}

export function trackUserAction(action: string, properties: Record<string, any> = {}) {
  thrivestack.track(action, {
    ...properties,
    page: window.location.pathname,
    timestamp: new Date().toISOString()
  });
}

export function setUser(userId: string, email: string) {
  thrivestack.setUser(userId, email);
}

export function setGroup(groupId: string, domain: string, name: string) {
  thrivestack.setGroup(groupId, domain, name);
} 