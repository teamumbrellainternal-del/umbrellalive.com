import { motion } from 'motion/react';
import { Button } from './ui/button';

export function SpotifyHero() {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden pt-20">
      {/* Background gradient - Spotify style */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          style={{
            background: `
              radial-gradient(
                ellipse at 50% 0%,
                rgba(139, 75, 255, 0.15) 0%,
                transparent 60%
              )
            `
          }}
        />
        
        {/* Abstract purple blob - bottom right */}
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 opacity-10"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 2, delay: 0.5 }}
          style={{
            background: 'radial-gradient(circle, rgba(139, 75, 255, 1) 0%, transparent 70%)',
            filter: 'blur(100px)',
            transform: 'translate(50%, 50%)'
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-5rem)]">
        {/* Left side - Text content */}
        <div className="space-y-6 md:space-y-8">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-display text-white leading-tight max-w-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            Everything you create, connected under one{' '}
            <motion.span 
              className="text-purple-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Umbrella
            </motion.span>.
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl lg:text-body-large text-purple-200 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
          >
            Get the tools you need to connect with your fans, grow your audience, and get paid for your art.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 pt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Button className="btn-primary text-base sm:text-lg px-8 py-3">
                Sign up free
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Button className="btn-secondary text-base sm:text-lg px-8 py-3">
                Learn more
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Right side - Visual mockup */}
        <motion.div
          className="relative lg:block hidden"
          initial={{ opacity: 0, x: 60, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 1, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* Purple glow behind visual */}
          <motion.div 
            className="absolute inset-0 -z-10"
            animate={{ 
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            style={{
              background: 'radial-gradient(circle, rgba(139, 75, 255, 0.3) 0%, transparent 70%)',
              filter: 'blur(80px)'
            }}
          />
          
          {/* Floating UI mockup */}
          <div className="relative">
            <motion.div 
              className="bg-gray-900 rounded-xl p-6 shadow-2xl border border-purple-500/20 backdrop-blur-sm"
              animate={{ 
                y: [0, -8, 0],
                rotateY: [0, 2, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              whileHover={{
                y: -12,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="h-4 bg-gradient-to-r from-purple-500 to-purple-400 rounded mb-4"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
              />
              <div className="space-y-3">
                <motion.div 
                  className="h-2 bg-gray-700 rounded w-3/4"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 1.7 }}
                />
                <motion.div 
                  className="h-2 bg-gray-700 rounded w-1/2"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 1.9 }}
                />
                <motion.div 
                  className="h-2 bg-gray-700 rounded w-2/3"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 2.1 }}
                />
              </div>
            </motion.div>
            
            {/* Floating elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
              animate={{ 
                rotate: [0, 360],
                y: [0, -4, 0]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-white text-lg font-bold">♪</span>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full shadow-lg"
              animate={{ 
                scale: [1, 1.3, 1],
                x: [0, 2, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              whileHover={{ scale: 1.2 }}
            />
            
            {/* Additional floating particle */}
            <motion.div 
              className="absolute top-8 -left-8 w-6 h-6 bg-purple-300 rounded-full opacity-60"
              animate={{ 
                y: [0, -20, 0],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1
              }}
            />
          </div>
        </motion.div>

        {/* Mobile visual hint */}
        <motion.div
          className="lg:hidden flex justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="w-32 h-20 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-white text-2xl">♪</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}