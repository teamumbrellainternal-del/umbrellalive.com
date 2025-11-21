import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, Umbrella, Sparkles, Music } from 'lucide-react';

export function FinalCTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #5B2C98 0%, #8B4BFF 25%, #C7A3FF 50%, #8B4BFF 75%, #5B2C98 100%)'
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Breathing Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-600/50 to-violet-800/50"
        animate={{
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating Umbrella Silhouettes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + (i % 2) * 70}%`
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 5, -5, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          >
            <Umbrella className="w-16 h-16 text-white/20" />
          </motion.div>
        ))}
      </div>

      {/* Musical Note Particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`note-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              rotate: [0, 360],
              opacity: [0, 0.4, 0]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          >
            <Music className="w-6 h-6 text-white/30" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Sparkles Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mb-8 border border-white/20"
          >
            <motion.div
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 mr-3 text-yellow-300" />
            </motion.div>
            The Next Era of Creativity Starts Here
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl mb-8 text-white leading-[0.9] tracking-tight"
          >
            Your Art Deserves
            <br />
            <span className="text-transparent bg-gradient-to-r from-yellow-200 via-white to-purple-200 bg-clip-text">
              A Platform Built
            </span>
            <br />
            <span className="text-purple-200">
              For You
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-xl md:text-2xl text-purple-100 mb-12 leading-relaxed opacity-90 max-w-3xl mx-auto"
          >
            Join Umbrella today and get access to text blasts, bookings, collaboration tools, 
            and everything you need to grow your creative career.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mb-16"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button 
                size="lg"
                className="bg-white text-purple-900 hover:bg-purple-50 px-12 py-6 text-xl rounded-full shadow-2xl hover:shadow-white/20 transition-all duration-300 relative overflow-hidden group"
              >
                {/* Button Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white via-purple-50 to-white opacity-0 group-hover:opacity-100"
                  animate={{
                    x: ['-100%', '100%']
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <span className="relative z-10 flex items-center">
                  Join the Movement
                  <ArrowRight className="ml-3 w-6 h-6" />
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Supporting Text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { icon: Music, text: "Free to Join" },
              { icon: Umbrella, text: "Instant Access" },
              { icon: Sparkles, text: "No Credit Card Required" }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + index * 0.1, duration: 0.4 }}
                  className="flex items-center justify-center space-x-3 text-purple-100"
                >
                  <IconComponent className="w-5 h-5 text-purple-300" />
                  <span className="text-lg">{item.text}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Wave Effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.1), transparent)'
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  );
}