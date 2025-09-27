'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { 
  extractUTMParameters, 
  createCampaignData, 
  storeCampaignData,
  trackConversion 
} from '../lib/utm-tracking';

interface UTMTrackerProps {
  children: React.ReactNode;
}

export default function UTMTracker({ children }: UTMTrackerProps) {
  const pathname = usePathname();

  useEffect(() => {
    // Extract UTM parameters from current URL
    const utmParams = extractUTMParameters();
    
    // Create campaign data if UTM parameters exist
    const campaignData = createCampaignData(utmParams, pathname);
    
    if (campaignData) {
      // Store campaign data
      storeCampaignData(campaignData);
      
      // Log for debugging (remove in production)
      console.log('UTM Campaign Tracked:', campaignData);
      
      // Track page view with UTM data
      trackConversion('page_view', undefined, undefined);
    }
  }, [pathname]);

  return <>{children}</>;
}

// Hook for tracking conversions
export function useUTMConversion() {
  const trackConversionEvent = (eventName: string, value?: number, currency?: string) => {
    trackConversion(eventName, value, currency);
  };

  return { trackConversionEvent };
}
