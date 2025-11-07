// Umbrella Motion System - Consistent timing and easing
export const motionConfig = {
  // Duration presets matching Spotify's feel
  duration: {
    fast: 0.3,
    normal: 0.5,
    slow: 0.7,
    cinematic: 1.2
  },
  
  // Easing curves for different motion types
  ease: {
    gentle: "easeOut",
    bounce: "easeInOut", 
    spring: { type: "spring", stiffness: 100, damping: 15 },
    smooth: [0.4, 0, 0.2, 1] as [number, number, number, number]
  },
  
  // Common transition presets
  transitions: {
    fadeIn: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, ease: "easeOut" }
    },
    
    slideUp: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, ease: "easeOut" }
    },
    
    scaleIn: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.5, ease: "easeOut" }
    },
    
    parallax: {
      transition: { duration: 2, ease: "easeInOut" }
    }
  }
};

export default motionConfig;