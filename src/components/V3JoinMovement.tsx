import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { useWaitlist } from '../context/WaitlistContext';

const rotatingTaglines = [
  "For the 8 million artists ready to be heard.",
  "For the fans who make the movement real.",
  "For the venues that believe in live culture."
];

export function V3JoinMovement() {
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const { openWaitlist } = useWaitlist();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTaglineIndex((prev) => (prev + 1) % rotatingTaglines.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-32 md:py-40 lg:py-48 overflow-hidden">
      
      {/* Background Gradient - rises from bottom */}
      <motion.div
        className="absolute inset-0"
        initial={{ 
          background: 'linear-gradient(to top, transparent 0%, transparent 100%)' 
        }}
        whileInView={{ 
          background: 'linear-gradient(to top, #2d1654 0%, #1a0a2e 50%, #000000 100%)' 
        }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      />

      {/* Floating particles - low opacity ambient motion */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 18,
              delay: i * 0.2,
              repeat: Infinity,
              ease: [0.45, 0, 0.55, 1]
            }}
          />
        ))}
      </div>

      {/* Radial glow */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(139, 75, 255, 0.15) 0%, transparent 70%)'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-12">
        
        {/* Headline */}
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight"
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          The future of live music belongs to the{' '}
          <span className="bg-gradient-to-r from-purple-300 via-purple-200 to-white bg-clip-text text-transparent">
            independent.
          </span>
        </motion.h2>

        {/* Rotating Tagline */}
        <div className="relative h-16 md:h-12">
          {rotatingTaglines.map((tagline, index) => (
            <motion.p
              key={index}
              className="absolute inset-0 flex items-center justify-center text-lg md:text-xl lg:text-2xl text-purple-200/80"
              initial={{ opacity: 0 }}
              animate={{
                opacity: currentTaglineIndex === index ? 1 : 0
              }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              {tagline}
            </motion.p>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          {/* Primary CTA */}
          <motion.div
            whileHover={{
              scale: 1.04,
              transition: { duration: 0.35 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              onClick={openWaitlist}
              className="relative bg-white text-black hover:bg-white/90 text-lg md:text-xl px-12 py-7 rounded-full overflow-hidden group"
              style={{
                boxShadow: '0 8px 30px rgba(138, 78, 255, 0.28)'
              }}
            >
              <motion.span 
                className="relative z-10 flex items-center gap-3"
                whileHover={{ y: -1 }}
                transition={{ duration: 0.2 }}
              >
                Join Umbrella
                
                {/* Umbrella icon that rotates */}
                <motion.svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  animate={{ rotate: 0 }}
                  whileHover={{ rotate: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <path d="M10 2a8 8 0 018 8v1a1 1 0 01-1 1h-3.5a.5.5 0 00-.5.5v4a1.5 1.5 0 11-3 0v-4a.5.5 0 00-.5-.5H6a1 1 0 01-1-1v-1a8 8 0 018-8z" />
                </motion.svg>
              </motion.span>
              
              {/* Inner glow on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.35 }}
              />

              {/* Underline draw effect */}
              <motion.div
                className="absolute bottom-3 left-1/2 -translate-x-1/2 h-0.5 bg-purple-600"
                initial={{ width: 0 }}
                whileHover={{ width: '50%' }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              />
            </Button>
          </motion.div>

          {/* Secondary CTA */}
          <motion.div
            whileHover={{ 
              scale: 1.04,
              transition: { duration: 0.35 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              variant="outline"
              className="!text-white hover:!text-white focus-visible:!text-white border-2 border-purple-400/50 hover:border-purple-300 hover:bg-purple-500/10 text-lg md:text-xl px-12 py-7 rounded-full"
            >
              See How It Works
            </Button>
          </motion.div>
        </motion.div>

        {/* Additional microcopy */}
        <motion.p
          className="text-sm text-purple-300/50 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Join thousands of independent artists building their creative careers on Umbrella
        </motion.p>
      </div>
    </section>
  );
}
