import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const features = [
  "Portfolio management",
  "Fan communication", 
  "Event coordination",
  "Analytics dashboard"
];

export function SpotifyAppShowcase() {
  return (
    <section 
      className="py-32 px-10"
      style={{
        background: `linear-gradient(180deg, 
          #0A0A0A 0%, 
          #2D1B4E 50%, 
          #0A0A0A 100%
        )`
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left side - Text content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Headline */}
            <h2 className="text-h2 text-white leading-tight">
              Manage everything in one place
            </h2>

            {/* Body copy */}
            <p className="text-body-large text-purple-200 leading-relaxed">
              From creating your portfolio to connecting with fans and coordinating events, 
              Umbrella gives you all the tools you need to succeed as an artist.
            </p>

            {/* Features list */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg text-white">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Device mockups */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Purple glow behind devices */}
            <div 
              className="absolute inset-0 -z-10"
              style={{
                background: 'radial-gradient(circle, rgba(139, 75, 255, 0.3) 0%, transparent 70%)',
                filter: 'blur(100px)'
              }}
            />
            
            {/* Laptop mockup */}
            <motion.div 
              className="relative"
              whileHover={{ rotateY: 2, rotateX: -2 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gray-900 rounded-lg p-6 shadow-2xl border border-purple-500/20">
                {/* Laptop screen */}
                <div className="bg-black rounded-lg p-4 aspect-[16/10]">
                  {/* Dashboard mockup */}
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="h-6 w-24 bg-purple-500 rounded"></div>
                      <div className="h-6 w-16 bg-gray-700 rounded"></div>
                    </div>
                    
                    {/* Content grid */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-20 bg-gray-800 rounded"></div>
                      <div className="h-20 bg-purple-600 rounded"></div>
                      <div className="h-20 bg-gray-800 rounded"></div>
                    </div>
                    
                    {/* Chart area */}
                    <div className="h-16 bg-gradient-to-r from-purple-600 to-purple-400 rounded opacity-80"></div>
                    
                    {/* List items */}
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-700 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-700 rounded w-1/2"></div>
                      <div className="h-3 bg-gray-700 rounded w-2/3"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating phone mockup */}
              <motion.div 
                className="absolute -bottom-8 -right-8 w-24 h-40 bg-gray-900 rounded-2xl border border-purple-500/20 shadow-xl"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="p-2">
                  <div className="bg-black rounded-xl h-full p-2">
                    <div className="h-full bg-gradient-to-b from-purple-600 to-purple-800 rounded-lg"></div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}