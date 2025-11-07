import { motion } from 'motion/react';
import { Umbrella } from 'lucide-react';

export function ConsolidatedHero() {

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark Stormy Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        {/* Storm clouds overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60"></div>
        
        {/* Rain effect */}
        <div className="absolute inset-0 opacity-40">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 bg-gradient-to-b from-transparent via-blue-200/60 to-transparent"
              style={{
                left: `${Math.random() * 100}%`,
                height: `${60 + Math.random() * 40}px`,
                top: `-${60 + Math.random() * 40}px`,
              }}
              animate={{
                y: ['0vh', '110vh'],
              }}
              transition={{
                duration: 1 + Math.random() * 2,
                repeat: Infinity,
                ease: 'linear',
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Lightning flashes */}
        <motion.div
          className="absolute inset-0 bg-purple-400/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.3, 0] }}
          transition={{
            duration: 0.2,
            repeat: Infinity,
            repeatDelay: 8 + Math.random() * 10,
          }}
        />

        {/* Subtle ridge lines - now more like storm patterns */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent"
              style={{
                top: `${30 + i * 20}%`,
                left: '-100%',
                right: '-100%',
              }}
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 15 + i * 3,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Center Content */}
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="glass-primary rounded-3xl p-16 shadow-deep-dimensional relative"
        >
          {/* Ridge border with purple glow */}
          <div className="absolute inset-0 ridge-border rounded-3xl shadow-ridge-glow"></div>
          
          {/* Umbrella Icon with dark theme */}
          <motion.div
            initial={{ scale: 0, rotateZ: -30 }}
            animate={{ scale: 1, rotateZ: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 200 }}
            className="flex justify-center mb-8"
          >
            <motion.div 
              className="relative w-24 h-24 glass-card rounded-full flex items-center justify-center floating-glow border-2 border-purple-400/30"
              whileHover={{
                scale: 1.1,
                boxShadow: '0 0 60px rgba(139, 75, 255, 0.8)',
                borderColor: 'rgba(139, 75, 255, 0.8)',
              }}
            >
              <Umbrella className="w-12 h-12 text-purple-300" />
              
              {/* Rain protection effect */}
              <div className="absolute -top-2 -left-2 -right-2 h-1 bg-gradient-to-r from-transparent via-blue-300/50 to-transparent rounded-full"></div>
              <div className="absolute -top-1 -left-1 -right-1 h-0.5 bg-gradient-to-r from-transparent via-blue-200/30 to-transparent rounded-full"></div>
              
              {/* Protective glow */}
              <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-xl"></div>
            </motion.div>
          </motion.div>

          {/* Main Title with stormy effect */}
          <motion.h1 
            className="text-8xl font-bold text-white tracking-tight relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <span className="relative">
              <span className="optical-text">Umbrella.</span>
              {/* Text shadow for depth */}
              <span className="absolute inset-0 text-purple-400/30 blur-sm">Umbrella.</span>
            </span>
          </motion.h1>

          {/* Stormy tagline */}
          <motion.p 
            className="text-xl text-purple-200/90 mt-4 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            Shelter for your musical journey
          </motion.p>
          
          {/* Protection metaphor subtitle */}
          <motion.p 
            className="text-base text-gray-300/70 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            The operating system for live music
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
}