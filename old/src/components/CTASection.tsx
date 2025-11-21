import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, Umbrella } from 'lucide-react';

export function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
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
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating Umbrella Outlines */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-5"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{ 
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.05, 0.15, 0.05]
            }}
            transition={{ 
              duration: 8 + i * 2, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5
            }}
          >
            <Umbrella className="w-24 h-24 text-white" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Main Headline */}
          <h2 className="text-5xl md:text-7xl lg:text-8xl mb-8 text-white leading-[0.9] tracking-tight">
            Your next opportunity
            <br />
            <span className="text-transparent bg-gradient-to-r from-purple-200 via-white to-purple-100 bg-clip-text">
              starts here
            </span>
          </h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed opacity-90"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.9 }}
            transition={{ delay: 0.3, duration: 1 }}
            viewport={{ once: true }}
          >
            Join the platform that helps artists get paid, get seen, and grow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Button 
              size="lg" 
              className="bg-white text-purple-900 hover:bg-purple-50 px-12 py-6 text-xl rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 border-0 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center">
                Sign Up for Free
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="ml-3"
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </span>
              
              {/* Button glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-purple-600/20 rounded-full"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0, 0.5, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 text-purple-200">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm">Free to join</span>
            </div>
            <div className="flex items-center space-x-2 text-purple-200">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              <span className="text-sm">No hidden fees</span>
            </div>
            <div className="flex items-center space-x-2 text-purple-200">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              <span className="text-sm">Setup in minutes</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" />
    </section>
  );
}