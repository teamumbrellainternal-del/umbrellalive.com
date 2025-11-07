import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useWaitlist } from '../context/WaitlistContext';

const concertImages = [
  "https://images.unsplash.com/photo-1758550445980-4d099c6de8d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwY29uY2VydCUyMGVuZXJneSUyMHN0YWdlJTIwbGlnaHRzJTIwY3Jvd2R8ZW58MXx8fHwxNzU5NjE4MTAzfDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1666102723236-682f868c84bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3RzJTIwY29sbGFib3JhdGlvbiUyMHN0dWRpbyUyMHJlY29yZGluZ3xlbnwxfHx8fDE3NTk2MTgxMDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1605286232233-e448650f5914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGZlc3RpdmFsJTIwb3V0ZG9vciUyMGNvbmNlcnQlMjBjcm93ZHxlbnwxfHx8fDE3NTk2MTgxMDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
];

export function V3Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const { openWaitlist } = useWaitlist();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % concertImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Media - Slow-moving concert scene */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {concertImages.map((img, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentImageIndex === index ? 1 : 0,
              scale: currentImageIndex === index ? [1, 1.1] : 1
            }}
            transition={{ 
              opacity: { duration: 1.5 },
              scale: { duration: 6, ease: "easeInOut" }
            }}
          >
            <ImageWithFallback
              src={img}
              alt="Live concert atmosphere"
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
        
        {/* Dark overlay + blur for depth-of-field */}
        <div 
          className="absolute inset-0 bg-black/70"
          style={{ backdropFilter: 'blur(2px)' }}
        />
        
        {/* Gradient vignette */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.6) 100%)'
          }}
        />
      </motion.div>

      {/* Violet hue glow in corner */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(139, 75, 255, 0.6) 0%, transparent 70%)',
          filter: 'blur(100px)'
        }}
      />

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{ 
          scale: contentScale,
          opacity: contentOpacity 
        }}
      >
        {/* Headline - slides up on load */}
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Create. Connect.{' '}
          <span className="bg-gradient-to-r from-purple-300 via-purple-200 to-white bg-clip-text text-transparent">
            Perform.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-purple-100/90 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          The home base for the independent artist.
        </motion.p>

        {/* Subcopy - fades in 1.2s later */}
        <motion.p
          className="text-base md:text-lg text-purple-200/70 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Umbrella gives artists the tools to promote, perform, and get paid — all in one place.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 1.4 }}
        >
          <motion.div
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              onClick={openWaitlist}
              className="relative bg-white text-black hover:bg-white/90 text-base md:text-lg px-10 py-6 rounded-full overflow-hidden group"
              style={{
                boxShadow: '0 8px 30px rgba(138, 78, 255, 0.28)'
              }}
            >
              <span className="relative z-10">Join Umbrella</span>

              {/* Underline draw effect */}
              <motion.div
                className="absolute bottom-2 left-1/2 -translate-x-1/2 h-0.5 bg-purple-600"
                initial={{ width: 0 }}
                whileHover={{ width: '60%' }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              />
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ 
              scale: 1.03,
              transition: { duration: 0.35 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              variant="outline"
              className="text-white border-2 border-purple-400/50 hover:border-purple-300 hover:bg-purple-500/10 text-base md:text-lg px-10 py-6 rounded-full"
            >
              Explore Tools
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll cue - soft pulse */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ 
            duration: 1.8, 
            repeat: Infinity, 
            ease: [0.45, 0, 0.55, 1] 
          }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-purple-300/60 text-sm"
            animate={{ y: [0, 12, 0] }}
            transition={{ 
              duration: 1.8, 
              repeat: Infinity, 
              ease: [0.45, 0, 0.55, 1]
            }}
          >
            <span>swipe to explore</span>
            <svg 
              className="w-5 h-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
