# SixtyPlusUSA Landing Page

A senior-friendly landing page for sixtyplususa.com, designed specifically for Americans over 60 with accessibility and usability in mind.

## Features

- **Senior-Friendly Design**: Large fonts, high contrast, and easy-to-read typography
- **Warm Color Palette**: Soft blues, greens, and beige tones for a trustworthy feel
- **Mobile Responsive**: Optimized for all device sizes
- **Accessibility Focused**: WCAG compliant with proper focus states and keyboard navigation
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **Health Focus Cards**: Grid layout showcasing health topics (starting with Prostate Health)

## Technology Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful, customizable icons

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

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles with accessibility features
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main landing page component
```

## Accessibility Features

- **Large Font Sizes**: 18px base font size for better readability
- **High Contrast**: Dark text on light backgrounds
- **Focus Indicators**: Clear focus states for keyboard navigation
- **Touch-Friendly**: Minimum 44px touch targets
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Alt Text**: Descriptive text for all images and icons

## Health Focus Areas

Currently features:
- **Prostate Health** - Links to https://prostate.sixtyplususa.com

Future health topics can be easily added to the grid layout.

## Deployment

This is a production-ready Next.js application that can be deployed to:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Any Node.js hosting platform

## License

© 2024 SixtyPlusUSA. All rights reserved.