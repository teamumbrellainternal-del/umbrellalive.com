import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { useState, useEffect } from 'react';

const rotatingMessages = [
  "For the 8 million independent voices ready to be heard.",
  "For the 87% of artists still waiting to be paid fairly.",
  "For the next generation of creators taking back control."
];

export function SpotifyFinalCTA() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % rotatingMessages.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="py-32 px-10 text-center"
      style={{
        background: `radial-gradient(
          ellipse at center,
          #2D1B4E 0%,
          #0A0A0A 70%
        )`
      }}
    >
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Headline */}
        <motion.h2 
          className="text-6xl md:text-7xl font-bold text-white leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Ready to create under one umbrella?
        </motion.h2>

        {/* Subheadline */}
        <motion.p 
          className="text-body-large text-purple-200 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Join thousands of artists globally.
        </motion.p>

        {/* Rotating Message */}
        <AnimatePresence mode="wait">
          <motion.p
            key={currentMessageIndex}
            className="text-body-large text-purple-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {rotatingMessages[currentMessageIndex]}
          </motion.p>
        </AnimatePresence>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button 
            className="text-lg px-16 py-5 btn-primary"
            style={{
              boxShadow: '0 12px 32px rgba(139, 75, 255, 0.4)'
            }}
          >
            Get started free
          </Button>
        </motion.div>
      </div>
    </section>
  );
}