'use client';

import { generateUTMUrl, UTMParameters } from '../lib/utm-tracking';

interface UTMLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  utmParams: UTMParameters;
  onClick?: () => void;
}

export default function UTMLink({ 
  href, 
  children, 
  className, 
  utmParams, 
  onClick 
}: UTMLinkProps) {
  const trackedUrl = generateUTMUrl(href, utmParams);
  
  return (
    <a 
      href={trackedUrl} 
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
    >
      {children}
    </a>
  );
}

// Pre-configured UTM link for ProstaVive
interface ProstaViveLinkProps {
  children: React.ReactNode;
  className?: string;
  source: string;
  medium: string;
  campaign: string;
  content?: string;
  onClick?: () => void;
}

export function ProstaViveLink({ 
  children, 
  className, 
  source, 
  medium, 
  campaign, 
  content,
  onClick 
}: ProstaViveLinkProps) {
  const utmParams: UTMParameters = {
    utm_source: source,
    utm_medium: medium,
    utm_campaign: campaign,
    utm_content: content,
  };
  
  return (
    <UTMLink 
      href="https://prostavive.org/" 
      className={className}
      utmParams={utmParams}
      onClick={onClick}
    >
      {children}
    </UTMLink>
  );
}
