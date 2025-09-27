// Declare global analytics functions
declare global {
  interface Window {
    gtag?: (command: string, eventName: string, parameters?: Record<string, unknown>) => void;
    fbq?: (command: string, eventName: string, parameters?: Record<string, unknown>) => void;
  }
}

// UTM Tracking Utility Functions
export interface UTMParameters {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  utm_id?: string;
}

export interface CampaignData {
  source: string;
  medium: string;
  campaign: string;
  term?: string;
  content?: string;
  id?: string;
  timestamp: number;
  page: string;
  referrer?: string;
  userAgent?: string;
}

// Extract UTM parameters from URL
export function extractUTMParameters(url?: string): UTMParameters {
  if (typeof window === 'undefined') return {};
  
  const searchParams = new URLSearchParams(url ? new URL(url).search : window.location.search);
  
  return {
    utm_source: searchParams.get('utm_source') || undefined,
    utm_medium: searchParams.get('utm_medium') || undefined,
    utm_campaign: searchParams.get('utm_campaign') || undefined,
    utm_term: searchParams.get('utm_term') || undefined,
    utm_content: searchParams.get('utm_content') || undefined,
    utm_id: searchParams.get('utm_id') || undefined,
  };
}

// Create campaign data object
export function createCampaignData(utmParams: UTMParameters, page: string): CampaignData | null {
  if (!utmParams.utm_source || !utmParams.utm_medium || !utmParams.utm_campaign) {
    return null;
  }

  return {
    source: utmParams.utm_source,
    medium: utmParams.utm_medium,
    campaign: utmParams.utm_campaign,
    term: utmParams.utm_term,
    content: utmParams.utm_content,
    id: utmParams.utm_id,
    timestamp: Date.now(),
    page,
    referrer: typeof window !== 'undefined' ? document.referrer : undefined,
    userAgent: typeof window !== 'undefined' ? navigator.userAgent : undefined,
  };
}

// Store campaign data in localStorage
export function storeCampaignData(campaignData: CampaignData): void {
  if (typeof window === 'undefined') return;
  
  try {
    const existingData = getStoredCampaignData();
    const updatedData = [...existingData, campaignData];
    
    // Keep only last 10 campaigns to prevent localStorage bloat
    const recentData = updatedData.slice(-10);
    
    localStorage.setItem('utm_campaigns', JSON.stringify(recentData));
  } catch (error) {
    console.warn('Failed to store UTM campaign data:', error);
  }
}

// Retrieve stored campaign data
export function getStoredCampaignData(): CampaignData[] {
  if (typeof window === 'undefined') return [];
  
  try {
    const stored = localStorage.getItem('utm_campaigns');
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.warn('Failed to retrieve UTM campaign data:', error);
    return [];
  }
}

// Generate UTM tracking URL
export function generateUTMUrl(baseUrl: string, params: UTMParameters): string {
  const url = new URL(baseUrl);
  
  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      url.searchParams.set(key, value);
    }
  });
  
  return url.toString();
}

// Track conversion event
export function trackConversion(eventName: string, value?: number, currency?: string): void {
  if (typeof window === 'undefined') return;
  
  const campaignData = getStoredCampaignData();
  const latestCampaign = campaignData[campaignData.length - 1];
  
  const conversionData = {
    event: eventName,
    value,
    currency,
    timestamp: Date.now(),
    campaign: latestCampaign,
    page: window.location.pathname,
  };
  
  // Store conversion data
  try {
    const existingConversions = JSON.parse(localStorage.getItem('utm_conversions') || '[]');
    existingConversions.push(conversionData);
    localStorage.setItem('utm_conversions', JSON.stringify(existingConversions.slice(-50))); // Keep last 50
  } catch (error) {
    console.warn('Failed to store conversion data:', error);
  }
  
  // Send to analytics (Google Analytics, Facebook Pixel, etc.)
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'conversion',
      event_label: latestCampaign?.campaign,
      value: value,
      currency: currency,
    });
  }
  
  // Facebook Pixel tracking
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, {
      value: value,
      currency: currency,
      content_name: latestCampaign?.campaign,
    });
  }
}

// Get campaign summary for analytics
export function getCampaignSummary(): {
  totalCampaigns: number;
  uniqueSources: string[];
  uniqueMediums: string[];
  uniqueCampaigns: string[];
  latestCampaign?: CampaignData;
} {
  const campaigns = getStoredCampaignData();
  
  return {
    totalCampaigns: campaigns.length,
    uniqueSources: [...new Set(campaigns.map(c => c.source))],
    uniqueMediums: [...new Set(campaigns.map(c => c.medium))],
    uniqueCampaigns: [...new Set(campaigns.map(c => c.campaign))],
    latestCampaign: campaigns[campaigns.length - 1],
  };
}
