import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';

const testimonials = [
  {
    quote: "Umbrella helped me sell out my first headlining show and connect with fans who actually care about my music.",
    name: "Sarah Chen",
    role: "Independent Artist",
    location: "Los Angeles"
  },
  {
    quote: "The text blast feature is game-changing. I can reach my entire fanbase instantly and see real engagement.",
    name: "Marcus Rodriguez", 
    role: "Producer",
    location: "Miami"
  },
  {
    quote: "Finally, a platform that understands what artists actually need. It's like having a full team in your pocket.",
    name: "Emma Thompson",
    role: "Singer-Songwriter", 
    location: "Nashville"
  }
];

export function SpotifyTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Scroll-based parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const quoteScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section ref={sectionRef} className="relative bg-black py-32 px-10 overflow-hidden">
      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          style={{
            background: 'radial-gradient(ellipse, rgba(139, 75, 255, 0.3) 0%, transparent 70%)',
            filter: 'blur(120px)'
          }}
        />
      </motion.div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Testimonial content */}
        <motion.div 
          className="relative min-h-[300px] flex items-center justify-center"
          style={{ scale: quoteScale }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="space-y-8"
            >
              {/* Quote */}
              <motion.blockquote 
                className="text-h4 text-white leading-relaxed italic max-w-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                "{testimonials[currentIndex].quote}"
              </motion.blockquote>

              {/* Attribution */}
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-lg font-bold text-purple-400">
                  — {testimonials[currentIndex].name}
                </div>
                <div className="text-body text-purple-200">
                  {testimonials[currentIndex].role}, {testimonials[currentIndex].location}
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Carousel controls - dots */}
        <div className="flex justify-center space-x-3 mt-12">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 h-8 bg-purple-400 shadow-lg shadow-purple-400/50'
                  : 'w-6 h-6 bg-purple-400/40 hover:bg-purple-400/60'
              }`}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              animate={index === currentIndex ? { 
                boxShadow: ['0 0 0 0 rgba(139, 75, 255, 0.4)', '0 0 0 8px rgba(139, 75, 255, 0)']
              } : {}}
              transition={index === currentIndex ? {
                boxShadow: { duration: 1.5, repeat: Infinity }
              } : {}}
            />
          ))}
        </div>
      </div>
    </section>
  );
}