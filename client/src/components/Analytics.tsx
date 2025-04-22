import { useEffect } from 'react';
import { useLocation } from 'wouter';

export function Analytics() {
  const [location] = useLocation();

  useEffect(() => {
    // Track page view
    const trackPageView = () => {
      try {
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('config', 'GA_MEASUREMENT_ID', {
            page_path: location
          });
        }
      } catch (error) {
        console.log('Analytics error:', error);
      }
    };

    trackPageView();
  }, [location]);

  return null;
}

// Add gtag types
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'set',
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}
