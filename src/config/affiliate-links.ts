/**
 * Affiliate Links Configuration
 * 
 * Centralized configuration for all affiliate links used across the SixtyPlusUSA platform.
 * This makes it easy to update affiliate links in one place.
 */

export const AFFILIATE_LINKS = {
  /**
   * ProstaVive - Prostate Health Supplement
   * ClickBank Affiliate Link
   */
  PROSTAVIVE: "https://b402bchsci7y2l59xn08267vc1.hop.clickbank.net",
  
  // Add other affiliate links here as needed
  // EXAMPLE: "https://affiliate-link-here.com",
} as const;

/**
 * Get affiliate link by key
 * @param key - The affiliate link key
 * @returns The affiliate URL
 */
export function getAffiliateLink(key: keyof typeof AFFILIATE_LINKS): string {
  return AFFILIATE_LINKS[key];
}

/**
 * Validate that an affiliate link is properly configured
 * @param key - The affiliate link key to validate
 * @returns boolean indicating if the link is valid
 */
export function isValidAffiliateLink(key: keyof typeof AFFILIATE_LINKS): boolean {
  const link = AFFILIATE_LINKS[key];
  return Boolean(link && link.startsWith('https://'));
}
