# Prostate Health Subdomain - SixtyPlusUSA

A dedicated prostate health information site for men over 60, designed as a subdomain of sixtyplususa.com.

## Overview

This is a specialized Next.js application focused on prostate health information, screening guidelines, and wellness resources specifically tailored for men over 60.

## Features

- **Senior-Friendly Design**: Large fonts, high contrast, and easy-to-read typography
- **Prostate-Specific Content**: Comprehensive information about prostate health, screening, and symptoms
- **Medical Accuracy**: Trusted information with proper disclaimers
- **Mobile Responsive**: Optimized for all device sizes
- **Accessibility Focused**: WCAG compliant with proper focus states
- **Smooth Animations**: Framer Motion animations for engaging user experience

## Technology Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful, customizable icons

## Content Sections

### Key Information Cards
- **Regular Screening**: PSA tests and digital rectal exams
- **Know the Symptoms**: Warning signs to watch for
- **Healthy Lifestyle**: Prevention through healthy habits

### Important Features
- Screening guidelines for men over 60
- Symptom awareness information
- Links to trusted medical resources
- Medical disclaimer and professional advice notice

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

This subdomain site can be deployed independently to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting platform

### Subdomain Configuration

Point your subdomain (e.g., `prostate.sixtyplususa.com`) to this deployed application.

## Project Structure

```
prostate-health/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles with accessibility features
│   │   ├── layout.tsx       # Root layout with prostate-specific metadata
│   │   └── page.tsx         # Main prostate health landing page
├── package.json
└── README.md
```

## Accessibility Features

- **Large Font Sizes**: 18px base font size for better readability
- **High Contrast**: Dark text on light backgrounds
- **Focus Indicators**: Clear focus states for keyboard navigation
- **Touch-Friendly**: Minimum 44px touch targets
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Medical Disclaimers**: Clear notices about professional medical advice

## Content Guidelines

- All medical information is for educational purposes only
- Users are advised to consult healthcare providers
- Links to trusted medical resources (American Cancer Society, Urology Care Foundation)
- Age-appropriate content for men over 60

## Branding

- Maintains SixtyPlusUSA branding with "by SixtyPlusUSA" attribution
- Consistent color scheme with main site
- Links back to main SixtyPlusUSA site
- Professional medical appearance

## License

© 2024 SixtyPlusUSA. All rights reserved.