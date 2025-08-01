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