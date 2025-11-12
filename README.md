# AISH Fire Protection Co. - Modern Website Redesign

A modern, professional website redesign for AISH Fire Protection Company featuring comprehensive fire safety services throughout New Jersey.

## Overview

This is a complete redesign of the AISH Fire Protection website with a contemporary look and feel, built using modern web technologies. The site features a clean, responsive design with a fire safety theme using red/orange accent colors.

## Features

- **Modern Hero Section** - Eye-catching hero with compelling imagery and clear call-to-action
- **Services Showcase** - 8 comprehensive fire protection services displayed in an organized card layout
- **About Section** - Company history, values, and trust indicators with professional imagery
- **What's New** - Announcements and updates section for company news
- **Contact Form** - Professional contact form with business information and hours (UI only - not functional)
- **Responsive Design** - Fully responsive layout optimized for all screen sizes
- **Smooth Navigation** - Fixed header with smooth scroll to sections

## Tech Stack

- **React 19** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework with custom fire safety theme
- **Vite** - Fast build tool and dev server
- **shadcn/ui** - High-quality UI components
- **Lucide React** - Beautiful icon library

## Design Features

### Color Palette
- Primary: Red/Orange fire safety theme (`oklch(0.58 0.24 29)`)
- Clean white background with subtle gray accents
- Professional typography with Inter (body) and Playfair Display (headings)

### Typography
- **Headings**: Playfair Display (serif) - Bold, elegant, professional
- **Body**: Inter (sans-serif) - Clean, readable, modern

### Sections
1. **Hero** - Full-screen hero with background image and trust indicators
2. **Services** - 8 service cards with icons and descriptions
3. **About** - Two-column layout with features and image gallery
4. **What's New** - Announcement cards with recent updates
5. **Contact** - Contact form and business information
6. **Footer** - Comprehensive footer with links and contact details

## Getting Started

### Prerequisites
- Node.js 18+ installed
- pnpm package manager

### Installation

1. Install dependencies:
```bash
pnpm install
```

2. Start the development server:
```bash
pnpm dev
```

3. Open your browser to `http://localhost:3000`

### Build for Production

```bash
pnpm build
```

The built files will be in the `dist` directory.

## Project Structure

```
client/
├── public/              # Static assets
│   ├── logo.png        # Company logo
│   ├── hero-fire-protection.jpg
│   ├── sprinkler-system.jpg
│   ├── fire-extinguishers.jpg
│   ├── emergency-lighting.jpg
│   └── technician-service.jpg
├── src/
│   ├── components/     # React components
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── About.tsx
│   │   ├── WhatsNew.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── pages/         # Page components
│   │   └── Home.tsx
│   ├── App.tsx        # Main app component
│   └── index.css      # Global styles and theme
```

## Services Offered

1. **Fire Sprinkler Systems** - Inspections, Service, & Repairs
2. **Backflow Preventer Testing** - Professional testing and certification
3. **Fire Extinguisher Service** - Sales, installation, and maintenance
4. **Kitchen Fire Systems** - Commercial kitchen fire suppression
5. **Kitchen Exhaust Hoods** - Sales, installation, and service
6. **Emergency Lighting** - Installation, testing, and maintenance
7. **Fire & Safety Supplies** - Complete range of fire safety equipment
8. **Fire Extinguisher Cabinets** - Quality cabinets and mounting solutions

## Contact Information

**Shop Location:**
1889 Route 9, Unit 111
Toms River, NJ 08755

**Mailing Address:**
P.O. Box 15
Lakewood, NJ 08701

**Phone:** 732.367.1444
**Fax:** 732.960.2312

## Important Notes

### UI Only - No Backend Functionality

This is a **static website** with UI-only components. The following features are visual only and not functional:

- **Contact Form** - Shows a toast notification on submit but doesn't send emails
- **Navigation Links** - Use smooth scroll to sections on the same page
- **Phone Links** - Will open phone dialer on mobile devices
- **All Buttons** - Trigger UI actions (scroll, show toast) but no backend processing

### To Make Functional

To add backend functionality, you would need to:

1. Set up a backend API for form submissions
2. Configure email service (SendGrid, Mailgun, etc.)
3. Add form validation and error handling
4. Implement analytics tracking
5. Add CMS for content management

## Customization

### Changing Colors

Edit `/client/src/index.css` to modify the color scheme:

```css
:root {
  --primary: oklch(0.58 0.24 29);  /* Main brand color */
  --primary-foreground: oklch(1 0 0);
  /* ... other color variables */
}
```

### Updating Logo

Replace `/client/public/logo.png` with your logo file and update the reference in `/client/src/const.ts`:

```typescript
export const APP_LOGO = "/logo.png";
```

### Modifying Content

All content is in the component files under `/client/src/components/`. Edit these files to update text, images, or structure.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Aish Fire Protection Co. All rights reserved.

## Credits

Built with modern web technologies and best practices for optimal performance and user experience.
