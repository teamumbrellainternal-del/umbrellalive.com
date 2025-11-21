import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, Umbrella, Zap, Clock, Star } from 'lucide-react';

export function WaitlistCTASection() {
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
        
        {/* Subtle Umbrella Background */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center opacity-5"
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Umbrella className="w-80 h-80 text-white" />
        </motion.div>

        {/* Geometric Floating Elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${15 + (i * 12)}%`,
              top: `${20 + (i * 8)}%`
            }}
            animate={{ 
              y: [0, -25, 0],
              opacity: [0.1, 0.25, 0.1],
              scale: [0.8, 1.1, 0.8]
            }}
            transition={{ 
              duration: 10 + i * 1, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5
            }}
          >
            {i % 3 === 0 ? (
              <div className="w-4 h-4 rounded-full bg-white/30 backdrop-blur-sm" />
            ) : i % 3 === 1 ? (
              <div className="w-3 h-3 rounded-sm bg-white/20 backdrop-blur-sm" />
            ) : (
              <div className="w-2 h-2 bg-white/40 rounded-full" />
            )}
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
          {/* Early Access Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-purple-100 text-sm mb-8 border border-white/20"
          >
            <Clock className="w-4 h-4 mr-2 text-yellow-300" />
            Limited Early Access Available
          </motion.div>

          {/* Main Headline */}
          <h2 className="text-5xl md:text-7xl lg:text-8xl mb-8 text-white leading-[0.9] tracking-tight">
            Text Blasts are just
            <br />
            <span className="text-transparent bg-gradient-to-r from-purple-200 via-white to-purple-100 bg-clip-text">
              the beginning
            </span>
          </h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-purple-100 mb-12 max-w-4xl mx-auto leading-relaxed opacity-90"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.9 }}
            transition={{ delay: 0.4, duration: 1 }}
            viewport={{ once: true }}
          >
            Join the waitlist for early access to Umbrella's creator tools — and start connecting directly with your audience.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Button 
              size="lg" 
              className="bg-white text-purple-900 hover:bg-purple-50 px-12 py-6 text-xl rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 border-0 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center">
                Join the Waitlist
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

          {/* Benefits Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              {
                icon: Zap,
                title: 'First Access',
                description: 'Be among the first to use Text Blasts when we launch'
              },
              {
                icon: Star,
                title: 'Exclusive Features',
                description: 'Get early access to advanced creator tools and analytics'
              },
              {
                icon: Umbrella,
                title: 'Community Priority',
                description: 'Join our creator community with priority support'
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <benefit.icon className="w-8 h-8 text-purple-200 mx-auto mb-4" />
                <h3 className="text-white text-lg mb-2">{benefit.title}</h3>
                <p className="text-purple-100 text-sm opacity-80">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Proof */}
          <motion.div 
            className="mt-16 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 text-purple-200">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                ))}
              </div>
              <span className="text-sm">Already 2,500+ artists waiting</span>
            </div>
            <div className="flex items-center space-x-2 text-purple-200">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm">Launching Spring 2025</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" />
    </section>
  );
}