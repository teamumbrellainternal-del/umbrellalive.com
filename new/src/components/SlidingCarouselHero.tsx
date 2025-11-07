import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Button } from './ui/button';
import { Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Image data for the carousel
const carouselImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1758550445980-4d099c6de8d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwY29uY2VydCUyMGVuZXJneSUyMHN0YWdlJTIwbGlnaHRzJTIwY3Jvd2R8ZW58MXx8fHwxNzU5NjE4MTAzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Live Concert Energy",
    caption: {
      title: "Marcus Blake Live",
      location: "The Roxy, Los Angeles"
    }
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1666102723236-682f868c84bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3RzJTIwY29sbGFib3JhdGlvbiUyMHN0dWRpbyUyMHJlY29yZGluZ3xlbnwxfHx8fDE3NTk2MTgxMDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Artist Collaboration",
    caption: {
      title: "Studio Sessions",
      location: "Nashville, TN"
    }
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1657705887441-789baa183f69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRpbWF0ZSUyMGFjb3VzdGljJTIwcGVyZm9ybWFuY2UlMjBESiUyMHNldHxlbnwxfHx8fDE3NTk2MTgxMDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Intimate Performance",
    caption: {
      title: "Luna's Midnight Set",
      location: "Brooklyn Steel, NYC"
    }
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1605286232233-e448650f5914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGZlc3RpdmFsJTIwb3V0ZG9vciUyMGNvbmNlcnQlMjBjcm93ZHxlbnwxfHx8fDE3NTk2MTgxMDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Festival Concert",
    caption: {
      title: "Electric Dreams Festival",
      location: "Pier 94, Miami"
    }
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1661222871415-a4482781a7b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpY2lhbiUyMGJhY2tzdGFnZSUyMGJlaGluZCUyMHNjZW5lcyUyMGNhbmRpZHxlbnwxfHx8fDE3NTk2MTgxMDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Behind the Scenes",
    caption: {
      title: "Behind the Music",
      location: "Soundcheck & Prep"
    }
  }
];

const headlineWords = [
  { text: "Create.", delay: 0.2 },
  { text: "Connect.", delay: 0.4 },
  { text: "Get Paid.", delay: 0.6 },
  { text: "All Under One", delay: 0.8 },
  { text: "Umbrella", delay: 1.0, isHighlight: true }
];

export function SlidingCarouselHero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Scroll-based parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const headlineScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5400);

    return () => clearInterval(interval);
  }, []);

  const currentImage = carouselImages[currentImageIndex];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[700px] lg:min-h-screen max-h-[1000px] bg-[#0A0A0A] overflow-hidden"
    >
      {/* Main Container - Responsive Layout */}
      <div className="flex flex-col lg:grid lg:grid-cols-2 min-h-[700px] lg:min-h-screen max-h-[1000px]">
        
        {/* LEFT SIDE - Content Area */}
        <motion.div 
          className="flex flex-col justify-center px-6 md:px-16 lg:px-20 xl:px-32 py-16 lg:py-0 order-1 lg:order-none min-h-[50vh] lg:min-h-full"
          style={{ y: contentY }}
        >
          <div className="max-w-[700px] mx-auto lg:mx-0 w-full space-y-8 lg:space-y-12">

          {/* Main Headline - Word by Word Animation with Scroll Scale */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-white max-w-[600px]"
            style={{ 
              scale: headlineScale,
              opacity: headlineOpacity 
            }}
          >
            {headlineWords.map((word, index) => (
              <motion.span
                key={index}
                className={word.isHighlight ? "text-white" : "bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: word.delay,
                  ease: [0.23, 1, 0.32, 1]
                }}
              >
                {word.text}{index < headlineWords.length - 1 ? ' ' : ''}
              </motion.span>
            ))}.
          </motion.h1>

          {/* Subheadline with Scroll-Linked Animation */}
          <motion.p
            className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-[550px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.23, 1, 0.32, 1] }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              Empowering artists, venues, and fans through real connection.
            </motion.span>{' '}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="inline-block"
            >
              Join thousands building their creative careers.
            </motion.span>
          </motion.p>

          {/* CTA Button Group with Enhanced Hover */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {/* Umbrella-shaped ripple on hover */}
              <motion.div
                className="absolute inset-0 rounded-full bg-white/30"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ 
                  scale: 1.2, 
                  opacity: [0, 0.3, 0],
                  transition: { duration: 0.6 }
                }}
              />
              <Button className="relative bg-white text-black hover:bg-gray-100 text-base px-12 py-[18px] font-bold rounded-full w-full sm:w-auto transition-all duration-300 shadow-lg shadow-white/20 hover:shadow-white/40">
                <motion.span
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2 }}
                  className="inline-block"
                >
                  Join Now
                </motion.span>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Button className="btn-secondary text-base px-10 py-4 font-bold rounded-full inline-flex items-center justify-center gap-2 w-full sm:w-auto border-2 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
                <Play className="w-4 h-4" />
                <motion.span
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2 }}
                  className="inline-block"
                >
                  Watch how it works
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll Cue Animation */}
          <motion.div
            className="pt-12"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 4.2 }}
          >
            <motion.div
              className="flex items-center gap-2 text-purple-400/50 text-sm"
              animate={{ y: [0, 8, 0] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <span>See why this industry needs a change</span>
              <motion.svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ y: [0, 4, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </motion.svg>
            </motion.div>
          </motion.div>
          </div>
        </motion.div>

        {/* RIGHT SIDE - Sliding Visual Carousel with Parallax */}
        <motion.div 
          className="relative h-[40vh] md:h-[50vh] lg:h-full bg-[#0A0A0A] overflow-hidden order-2 lg:order-none"
          style={{ y: backgroundY }}
        >
          
          {/* Image Carousel */}
          <div className="relative w-full h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage.id}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ 
                  duration: 1.2,
                  ease: [0.4, 0, 0.2, 1]
                }}
              >
                {/* Main Image with subtle parallax */}
                <motion.div
                  className="w-full h-full"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ 
                    duration: 15, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <ImageWithFallback
                    src={currentImage.src}
                    alt={currentImage.alt}
                    className="w-full h-full object-cover grayscale"
                  />
                </motion.div>

                {/* Gradient Overlay for Seamless Blend */}
                <div 
                  className="absolute inset-0 z-10"
                  style={{
                    background: `linear-gradient(
                      to left,
                      transparent 0%,
                      rgba(10, 10, 10, 0.3) 70%,
                      rgba(10, 10, 10, 0.8) 100%
                    )`
                  }}
                />

                {/* Caption Overlay - Hidden on mobile */}
                <motion.div
                  className="absolute bottom-6 md:bottom-10 right-6 md:right-10 z-20 max-w-[300px] hidden md:block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ 
                    duration: 0.4,
                    delay: 0.4
                  }}
                >
                  <motion.div 
                    className="glass-card backdrop-blur-[20px] bg-black/80 border border-[#8B4BFF]/30 rounded-xl p-4"
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="font-bold text-white text-base mb-1">
                      {currentImage.caption.title}
                    </h4>
                    <p className="text-sm text-[#A78BFA]">
                      {currentImage.caption.location}
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Purple Accent Glow with Pulsing Animation */}
          <motion.div 
            className="absolute bottom-0 right-0 w-[400px] h-[400px] pointer-events-none z-0"
            animate={{ 
              opacity: [0.15, 0.25, 0.15],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            style={{
              background: `radial-gradient(
                circle at center,
                rgba(139, 75, 255, 0.15) 0%,
                transparent 70%
              )`,
              filter: 'blur(80px)'
            }}
          />
        </motion.div>
      </div>

      {/* Background Enhancement with Parallax */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "50%"]) }}
      >
        {/* Subtle top gradient */}
        <div 
          className="absolute top-0 left-0 right-0 h-64 z-0"
          style={{
            background: `radial-gradient(
              ellipse at 50% 0%,
              rgba(139, 75, 255, 0.08) 0%,
              transparent 60%
            )`
          }}
        />
      </motion.div>
    </section>
  );
}