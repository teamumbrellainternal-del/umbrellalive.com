# Umbrella Landing Page - Scroll Animation Guide

## Overview
The Umbrella landing page now features a comprehensive scroll animation system that creates a smooth, fluid, and immersive experience matching Spotify's sophisticated aesthetic while maintaining Umbrella's creative identity.

## Key Animation Features Implemented

### 🎬 Global Scroll Behavior
- **Smooth scroll**: Native CSS `scroll-behavior: smooth` for elegant page navigation
- **Reduced motion support**: Respects user preferences for accessibility
- **Cinematic pacing**: ~1000px breathing room between sections

### 🎨 Hero Section (SlidingCarouselHero)
**Parallax Effects:**
- Background carousel moves at 1.3x speed (0-30% transform)
- Content moves at 1.15x speed (0-15% transform)
- Headline scales up subtly (1-1.05x) as user scrolls

**Animations:**
- **Word-by-word headline reveal**: Each word fades in sequentially with custom delays
- **Rotating umbrella icon**: Gentle 10° rotation loop every 10s
- **Image parallax**: Carousel images have subtle zoom effect (1-1.05x scale loop)
- **Caption cards**: 3px lift animation on hover with smooth transitions
- **CTA buttons**: 
  - Umbrella-shaped ripple effect on hover
  - Text glides upward 1px on hover
  - Shadow bloom effect with purple glow

**Timing:**
- Headline words: 0.2s, 0.4s, 0.6s, 0.8s, 1.0s delays
- Subheadline appears in two parts: 1.4s and 1.6s delays
- CTA buttons: 1.8s delay

### 📦 Features Grid (SpotifyFeaturesGrid)
**Scroll Animations:**
- Background glow orb with parallax (-5% transform)
- Cards stagger in with 0.1s delays between each
- Lift animation on hover: -8px y-transform

**Interactive Elements:**
- **Icon containers**: Scale 1.1x + 5° rotation on hover
- **Icons**: Color shift from purple-400 to purple-300
- **Shadow bloom**: Purple glow appears on hover
- **Learn more links**: 
  - Arrow animates continuously (0-3px loop)
  - Underline expands to 80% width on hover
  - 5px x-transform slide on hover

### 🎨 Artist Toolbox Section
**Parallax System:**
- Background layer: 0-20% y-transform
- Content layer: 0 to -10% y-transform (opposite direction)
- Floating geometric shapes with independent rotation speeds

**3D Card Rotation:**
- Smooth 90° rotateY transitions between tools
- Floating animation: -10px vertical loop
- Auto-rotation every 8 seconds
- Manual selection with smooth transitions

**Motion Phrases:**
- "Create." "Promote." "Connect." cycle every 2 seconds
- Fade in/out with 20px y-transform

**Interactive Cards:**
- Scale 1.02x + 10px x-transform on hover
- Purple glow highlights on active state
- Arrow indicator pulses on active tool
- Sequential reveal with staggered delays (0.1s increments)

**CTA Enhancement:**
- Text lifts -1px on hover
- Shadow intensity increases
- Purple glow shadow animation

### 📱 Text Blasts Section (SpotifyVisualShowcase)
**Phone Animation:**
- **Glides upward**: 100px to 0 transform as section enters view
- **Opacity fade**: 0 to 1 over scroll progress
- **Floating effect**: -10px vertical loop (4s duration)
- **Hover tilt**: 2° rotateY on hover

**Message Bubbles:**
- **Sequential appearance**: Each bubble appears with custom delay
  - Message 1: 0.3s
  - Message 2: 0.6s
  - Message 3: 0.9s
  - Message 4: 1.2s
- **Scale animation**: 0.8 to 1 with bounce
- **Hover effect**: 1.02x scale on individual messages

**Floating Badge:**
- Appears with spring animation at 1.8s delay
- Continuous vertical bob: -5px loop
- Gentle rotation: -5° to 5° loop

**Background:**
- Parallax glow orbs (0-20% y-transform)
- Pulsing opacity animation (6s duration)

### 👥 Testimonials Section (SpotifyTestimonials)
**Scroll Effects:**
- Background glow parallax (0-15% y-transform)
- Quote scale animation: 0.95 to 1 to 0.95
- Horizontal gradient glow (800px width, blurred)

**Transitions:**
- Quote: 30px y-transform with 0.95 scale
- Attribution: 10px y-transform with 0.4s delay
- Smooth 0.6s cubic-bezier easing

**Carousel Dots:**
- Scale 1.2x on hover with -2px lift
- Active dot has pulsing shadow ring
- Ring expands from 0 to 8px with fade

### 📊 Stats Section (EnhancedStatsSection)
**Parallax:**
- Background gradient: 0-30% y-transform
- Glow orbs: Scale 1-1.2 animation
- Purple accent: 1-1.3x scale with opacity pulse

**Number Counter:**
- Animates from 0 to 7M over 2 seconds
- Appears when section is 30% in view
- Scale animation: 0.9 to 1

### 🦶 Footer (SpotifyFooter)
**Gradient Sweep:**
- Left-to-right sweep animation
- 15-second loop duration
- Infinite linear animation
- 20% opacity overlay

**Logo Animation:**
- Fade in with scale: 0.8 to 1
- Rotating umbrella icon: -5° to 5° loop (8s)
- Hover: 1.1x scale + 15° rotation

**Link Interactions:**
- Hover: 5px x-transform slide
- Underline expands from 0 to 100% width
- Social icons: 1.15x scale + -3px lift
- Sequential fade-in with staggered delays

**Tagline:**
- "Everything you create, connected under one Umbrella"
- Fades in at 0.4s delay
- Centered below logo

## Animation Timing Standards

### Duration Guidelines
- **Fast**: 0.2-0.3s (micro-interactions, button hovers)
- **Normal**: 0.5-0.8s (section reveals, card animations)
- **Slow**: 1.0-1.5s (parallax, background effects)

### Easing Functions
- **Primary**: `[0.23, 1, 0.32, 1]` (smooth, elegant cubic-bezier)
- **Standard**: `ease-in-out` (simple transitions)
- **Spring**: Used for button interactions (stiffness: 400, damping: 25)

### Scroll Thresholds
- **Viewport once**: `margin: "-100px"` (triggers 100px before visible)
- **Viewport continuous**: Used for parallax effects
- **Viewport amount**: `0.3` (30% visibility trigger for counters)

## Performance Optimizations

1. **Once-only animations**: Most scroll triggers use `viewport: { once: true }`
2. **Will-change hints**: Automatically applied by Motion
3. **Transform-only animations**: Using `y`, `scale`, `rotate` for GPU acceleration
4. **Reduced motion support**: Respects `prefers-reduced-motion` media query

## Mobile Responsiveness

- Vertical reveal animations only (no complex parallax)
- Simplified transforms for performance
- Touch-friendly tap animations (`whileTap`)
- Fixed CTA on scroll (when past hero)

## Emotion & Experience Goals ✨

**Every animation whispers:**
- ✅ Professional, not playful
- ✅ Simple, not overwhelming
- ✅ Creative, not distracting
- ✅ Alive, not static
- ✅ Confident, not flashy

**Overall feeling:**
"Scrolling through a living brand — elegant, tactile, alive."

## Technical Implementation

### Key Motion Hooks Used
```typescript
import { 
  useScroll,        // Track scroll progress
  useTransform,     // Map scroll to values
  useInView,        // Detect viewport visibility
  motion,           // Animated components
  AnimatePresence   // Exit animations
} from 'motion/react';
```

### Common Patterns

**Section Parallax:**
```typescript
const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: ["start end", "end start"]
});
const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
```

**Staggered Cards:**
```typescript
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: "-100px" }}
transition={{ duration: 0.6, delay: index * 0.1 }}
```

**Smooth Hover:**
```typescript
whileHover={{ scale: 1.05, y: -8 }}
transition={{ type: "spring", stiffness: 400, damping: 25 }}
```

## Browser Support
- Modern browsers with IntersectionObserver support
- Graceful degradation for older browsers
- CSS smooth scroll fallback

---

**Last Updated**: October 23, 2025
**Design System**: Spotify for Creators × Umbrella Brand
**Motion Library**: Motion/React (formerly Framer Motion)
