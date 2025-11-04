# Umbrella Landing Page

Official landing page for Umbrella - The home base for the independent artist.

**Live Site:** https://www.umbrellalive.com

## 🎯 Overview

High-fidelity landing page showcasing Umbrella's platform for independent artists, venues, and fans. Built with performance and user experience as top priorities.

## 🚀 Features

- **Single HTML File:** Optimized for fast loading and easy deployment
- **Brand Integration:** Uses Umbrella brand kit via git submodule
- **Dark Theme:** Sleek dark design with signature purple (#9370DB) accents
- **Fully Responsive:** Mobile-first design that works on all devices
- **Smooth Animations:** Scroll-triggered animations and micro-interactions
- **Performance Optimized:** < 2s load time on 3G networks

## 📐 Page Sections

1. **Navigation** - Sticky header with logo and CTAs
2. **Hero** - Full-screen with video background and main headline
3. **The Why** - Story section with image grid + rotating copy
4. **By The Numbers** - 6 statistics cards with tooltips
5. **Built for Everyone** - 3 user type cards (Artists, Venues, Fans)
6. **The Experience** - Horizontal scroll carousel of features
7. **Final CTA** - Large centered call-to-action
8. **Footer** - Links, social icons, and branding

## 🎨 Brand System

The page uses the official Umbrella brand kit (linked as a git submodule):

```bash
# Update brand assets
git submodule update --remote brand
```

**Brand Colors:**
- Primary Purple: `#9370DB`
- Purple Royal: `#5B2C98`
- Purple Neon: `#7A3FFF`
- Background: `#0A0A0F` (dark mode)

**Typography:**
- Font Family: Inter (all weights)
- Scale: 88px (Hero) down to 14px (Small text)

## 🛠️ Development

This is a static site with a single HTML file:

```
umbrellalive.com/
├── index.html              # Main landing page
├── brand/                  # Git submodule (brand assets)
│   ├── dist/
│   │   ├── fonts.css
│   │   ├── tokens.css
│   │   └── fonts/
│   └── assets/
│       └── logos/
├── assets/                 # Landing page specific assets
│   ├── images/
│   └── icons/
└── README.md
```

### Local Development

Simply open `index.html` in your browser:

```bash
open index.html
# or
python -m http.server 8000  # For local server
```

## 🚀 Deployment

This site is deployed to **Cloudflare Pages** and served at www.umbrellalive.com.

### Automatic Deployment

Every push to `main` branch triggers automatic deployment via Cloudflare Pages.

### Manual Deployment

1. Push changes to main branch
2. Cloudflare Pages automatically builds and deploys
3. Site is live at www.umbrellalive.com within 1-2 minutes

## 📱 Responsive Breakpoints

- **Mobile:** 0-767px (single column, stacked layout)
- **Tablet:** 768-1023px (2 columns where appropriate)
- **Desktop:** 1024px+ (full layout)
- **Large Desktop:** 1440px+ (max container width)

## ⚡ Performance

- **Load Time:** < 2 seconds on 3G
- **Lighthouse Score:** > 90 (Performance)
- **CLS:** < 0.1 (Cumulative Layout Shift)
- **FCP:** < 1.5s (First Contentful Paint)

## 🎬 Key Interactions

- **Smooth Scrolling:** Click nav links to smoothly scroll to sections
- **Scroll Animations:** Elements fade in as you scroll
- **Rotating Text:** "The Why" section cycles through 3 messages every 4 seconds
- **Horizontal Carousel:** "The Experience" section scrolls horizontally with snap points
- **Hover Effects:** Cards, buttons, and links have smooth hover transitions
- **Tooltips:** Statistics cards show additional context on hover

## 📝 Content Notes

Some content uses placeholders pending client assets:

- **Hero Background Video:** Currently a gradient background
- **The Why Images:** Using colored gradient placeholders (4 images)
- **Feature Icons:** Using gradient boxes (6 icons needed)

## 📦 Dependencies

- **Brand Kit:** teamumbrellainternal-del/brand (git submodule)
- **Fonts:** Inter (Regular, Medium, Semibold, Bold) - from brand kit
- **No Build Tools:** Pure HTML, CSS, and vanilla JavaScript

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS 15+)
- Chrome Mobile (Android 11+)

## 🔗 Links

- **Live Site:** https://www.umbrellalive.com
- **Brand Kit:** https://github.com/teamumbrellainternal-del/brand
- **Figma Design:** (Internal)

## 📄 License

© 2024 Umbrella. All rights reserved.

---

**"Everything you create, connected under one Umbrella"**
