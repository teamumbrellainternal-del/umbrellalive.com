import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Umbrella } from 'lucide-react';

export function SimplifiedFinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Elegant gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-600 via-violet-700 to-black"
        animate={{
          background: [
            'linear-gradient(135deg, #5B2C98 0%, #8B4BFF 50%, #0C0C0C 100%)',
            'linear-gradient(135deg, #8B4BFF 0%, #C7A3FF 50%, #5B2C98 100%)',
            'linear-gradient(135deg, #5B2C98 0%, #8B4BFF 50%, #0C0C0C 100%)'
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Soft motion layer - umbrella silhouettes - Reduced for performance */}
      <div className="absolute inset-0 overflow-hidden opacity-15">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + (i % 2) * 30}%`
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              rotate: [0, 8, 0],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 20 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 3
            }}
          >
            <Umbrella className="w-20 h-20 text-white" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Main headline */}
          <motion.h2
            className="text-5xl md:text-7xl text-white leading-tight tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Your Art.
            <br />
            <span className="text-transparent bg-gradient-to-r from-purple-200 via-white to-purple-200 bg-clip-text">
              Your Career.
            </span>
            <br />
            <span className="text-purple-300">
              Your Community.
            </span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            className="text-xl md:text-2xl text-purple-100 leading-relaxed opacity-90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Join Umbrella today — the platform where artists connect, 
            collaborate, and grow.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button 
                size="lg"
                className="relative bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-900 px-12 py-6 text-xl rounded-full transition-all duration-500 overflow-hidden group"
              >
                {/* Glowing outline effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-purple-300 rounded-full opacity-0 group-hover:opacity-100 blur-sm"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Button text */}
                <span className="relative z-10">
                  Join Free
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Supporting elements */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-purple-200 text-sm"
          >
            <span>✨ Free to join</span>
            <span className="hidden sm:block">•</span>
            <span>⚡ Instant access</span>
            <span className="hidden sm:block">•</span>
            <span>🚀 No credit card required</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom ambient glow */}
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-32 bg-gradient-to-t from-purple-500/20 to-transparent blur-xl"
        animate={{
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  );
}