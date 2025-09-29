# UTM Campaign Tracking System

This UTM tracking system allows you to track traffic sources, campaigns, and conversions across both the main SixtyPlusUSA site and the prostate-health subsite.

## Features

### ✅ **Automatic UTM Parameter Detection**
- Extracts UTM parameters from URL on page load
- Stores campaign data in localStorage
- Tracks page views with campaign attribution

### ✅ **Conversion Tracking**
- Track CTA clicks with campaign attribution
- Store conversion events locally
- Integrate with Google Analytics and Facebook Pixel

### ✅ **Campaign Analytics Dashboard**
- Real-time campaign data visualization
- Export campaign data as JSON
- Track unique sources, mediums, and campaigns

### ✅ **UTM Link Generation**
- Generate UTM-tracked URLs programmatically
- Pre-configured ProstaVive affiliate links with proper attribution

## Usage

### 1. **UTM Parameters Supported**
```
utm_source    - Traffic source (e.g., "facebook", "google", "email")
utm_medium    - Marketing medium (e.g., "social", "cpc", "email")
utm_campaign  - Campaign name (e.g., "prostavive_launch", "summer_sale")
utm_term      - Paid search keywords
utm_content   - Ad content identifier
utm_id        - Campaign ID
```

### 2. **Example UTM URLs**
```
https://sixtyplususa.com/prostate-health/?utm_source=facebook&utm_medium=social&utm_campaign=prostavive_launch&utm_content=hero_cta

https://sixtyplususa.com/?utm_source=google&utm_medium=cpc&utm_campaign=senior_health&utm_term=prostate+health
```

### 3. **Using UTM Links in Components**

#### ProstaVive Link Component:
```tsx
import { ProstaViveLink } from '../components/UTMLink';

<ProstaViveLink 
  source="facebook"
  medium="social"
  campaign="prostavive_launch"
  content="hero_cta"
  className="btn-primary"
  onClick={() => handleCTAClick('hero')}
>
  Get ProstaVive Now
</ProstaViveLink>
```

#### Generic UTM Link:
```tsx
import UTMLink from '../components/UTMLink';

<UTMLink 
  href="https://example.com"
  utmParams={{
    utm_source: "email",
    utm_medium: "newsletter",
    utm_campaign: "monthly_update"
  }}
  className="btn-secondary"
>
  Visit Example
</UTMLink>
```

### 4. **Tracking Conversions**
```tsx
import { useUTMConversion } from '../components/UTMTracker';

function MyComponent() {
  const { trackConversionEvent } = useUTMConversion();
  
  const handlePurchase = () => {
    trackConversionEvent('purchase', 79.99, 'USD');
  };
  
  const handleSignup = () => {
    trackConversionEvent('signup', undefined, undefined);
  };
}
```

## Campaign Tracking Structure

### **Main Site Campaigns**
- **Source**: `sixtyplususa`, `facebook`, `google`, `email`, etc.
- **Medium**: `website`, `social`, `cpc`, `email`, `referral`
- **Campaign**: `homepage`, `about_page`, `contact_form`, etc.

### **ProstaVive Subsite Campaigns**
- **Source**: `sixtyplususa`, `facebook`, `google`, `email`, etc.
- **Medium**: `bridge_page`, `social`, `cpc`, `email`
- **Campaign**: `prostavive_hero`, `prostavive_benefits`, `prostavive_ingredients`, `prostavive_testimonials`
- **Content**: `primary_cta`, `secondary_cta`, `tertiary_cta`, `final_cta`, `footer_link`

## Analytics Integration

### **Google Analytics**
The system automatically sends events to Google Analytics when available:
```javascript
gtag('event', 'cta_click_hero', {
  event_category: 'conversion',
  event_label: 'prostavive_hero',
  value: undefined,
  currency: undefined,
});
```

### **Facebook Pixel**
Facebook Pixel events are also tracked:
```javascript
fbq('track', 'cta_click_hero', {
  value: undefined,
  currency: undefined,
  content_name: 'prostavive_hero',
});
```

## Data Storage

### **Local Storage Keys**
- `utm_campaigns` - Stores last 10 campaign visits
- `utm_conversions` - Stores last 50 conversion events

### **Data Structure**
```typescript
interface CampaignData {
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
```

## Analytics Dashboard

The UTM Analytics dashboard provides:
- **Campaign Summary**: Total campaigns and latest campaign details
- **Unique Sources**: All traffic sources encountered
- **Unique Mediums**: All marketing mediums used
- **Unique Campaigns**: All campaign names tracked
- **Export Function**: Download campaign data as JSON

## Best Practices

### **1. Consistent Naming**
- Use lowercase with underscores
- Be descriptive but concise
- Maintain consistency across campaigns

### **2. Campaign Organization**
```
Source Examples:
- facebook, instagram, twitter, linkedin
- google, bing, yahoo
- email, newsletter, drip_campaign
- sixtyplususa, partner_site

Medium Examples:
- social, cpc, email, referral
- bridge_page, landing_page, blog_post
- display, video, native

Campaign Examples:
- prostavive_launch, summer_sale, holiday_promo
- senior_health_awareness, prostate_health_month
```

### **3. Content Tracking**
Use utm_content to differentiate between:
- Different CTAs on the same page
- A/B test variations
- Different ad creatives

## Testing

### **Test UTM URLs**
```
https://sixtyplususa.com/prostate-health/?utm_source=test&utm_medium=bridge_page&utm_campaign=prostavive_test&utm_content=test_cta
```

### **Verify Tracking**
1. Open browser dev tools
2. Check localStorage for `utm_campaigns`
3. Check console for tracking logs
4. Use analytics dashboard to view data

## Troubleshooting

### **Common Issues**
1. **UTM parameters not detected**: Check URL format and parameter names
2. **Data not storing**: Check localStorage availability and permissions
3. **Analytics not firing**: Verify Google Analytics/Facebook Pixel setup

### **Debug Mode**
The system logs campaign data to console in development mode. Check browser console for:
```
UTM Campaign Tracked: { source: "facebook", medium: "social", ... }
```

## Future Enhancements

- [ ] Server-side UTM tracking
- [ ] Advanced analytics reporting
- [ ] Campaign performance metrics
- [ ] Automated UTM URL generation
- [ ] Integration with more analytics platforms
