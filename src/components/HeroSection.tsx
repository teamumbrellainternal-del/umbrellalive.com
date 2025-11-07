import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Umbrella, Play, ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-90"
          style={{
            background: 'linear-gradient(135deg, #5B2C98 0%, #8B4BFF 50%, #0C0C0C 100%)'
          }}
          animate={{
            background: [
              'linear-gradient(135deg, #5B2C98 0%, #8B4BFF 50%, #0C0C0C 100%)',
              'linear-gradient(135deg, #8B4BFF 0%, #C7A3FF 50%, #5B2C98 100%)',
              'linear-gradient(135deg, #5B2C98 0%, #8B4BFF 50%, #0C0C0C 100%)'
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Subtle grain texture overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Floating Umbrella Animation */}
      <motion.div
        className="absolute top-20 right-20 opacity-10"
        animate={{ 
          rotate: [0, 10, -10, 0],
          y: [0, -20, 0] 
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      >
        <Umbrella className="w-32 h-32 text-white" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-16 opacity-10"
        animate={{ 
          rotate: [0, -15, 15, 0],
          y: [0, 15, 0] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <Umbrella className="w-24 h-24 text-white" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="mb-8"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Umbrella className="w-16 h-16 text-white mx-auto mb-6 opacity-90" />
          </motion.div>

          <h1 className="text-6xl md:text-8xl mb-8 text-white leading-[0.9] tracking-tight">
            Empowering Artists to
            <br />
            <span className="text-transparent bg-gradient-to-r from-purple-200 via-white to-purple-100 bg-clip-text">
              Create, Connect, Thrive
            </span>
          </h1>

          <motion.p 
            className="text-xl md:text-2xl text-purple-100 mb-12 max-w-4xl mx-auto leading-relaxed opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Umbrella gives you the tools, data, and community to grow your creative career — all in one place.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button 
              size="lg" 
              className="bg-white text-purple-900 hover:bg-purple-50 px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl border-0"
              title="Build your artist profile in minutes."
            >
              Join Umbrella Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <Play className="mr-2 w-5 h-5" />
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}