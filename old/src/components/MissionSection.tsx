import { motion } from 'motion/react';
import { Network, Users, Music } from 'lucide-react';

export function MissionSection() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Content */}
        <div className="text-center mb-20">
          <motion.h2 
            className="text-5xl md:text-7xl mb-8 text-gray-900 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Building the Operating System
            <br />
            <span className="text-transparent bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 bg-clip-text">
              for Live Music
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Umbrella was built for artists who deserve more. We help creators get paid, 
            connect with collaborators, and turn their passion into a sustainable career.
          </motion.p>
        </div>

        {/* Network Visualization */}
        <motion.div 
          className="relative max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative h-80 flex items-center justify-center">
            {/* Central Umbrella */}
            <motion.div 
              className="absolute z-10 w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center shadow-2xl"
              animate={{ 
                scale: [1, 1.1, 1],
                boxShadow: [
                  '0 25px 50px -12px rgba(139, 75, 255, 0.25)',
                  '0 25px 50px -12px rgba(139, 75, 255, 0.4)',
                  '0 25px 50px -12px rgba(139, 75, 255, 0.25)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Network className="w-10 h-10 text-white" />
            </motion.div>

            {/* Artist Nodes */}
            <motion.div 
              className="absolute top-8 left-1/4 w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0 }}
            >
              <Music className="w-8 h-8 text-white" />
            </motion.div>

            <motion.div 
              className="absolute top-8 right-1/4 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            >
              <Music className="w-8 h-8 text-white" />
            </motion.div>

            <motion.div 
              className="absolute bottom-8 left-1/3 w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-lg"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            >
              <Users className="w-8 h-8 text-white" />
            </motion.div>

            <motion.div 
              className="absolute bottom-8 right-1/3 w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 3 }}
            >
              <Users className="w-8 h-8 text-white" />
            </motion.div>

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full">
              <motion.line 
                x1="50%" y1="50%" x2="25%" y2="15%" 
                stroke="url(#gradient1)" 
                strokeWidth="2" 
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
              />
              <motion.line 
                x1="50%" y1="50%" x2="75%" y2="15%" 
                stroke="url(#gradient1)" 
                strokeWidth="2" 
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.7 }}
              />
              <motion.line 
                x1="50%" y1="50%" x2="33%" y2="85%" 
                stroke="url(#gradient1)" 
                strokeWidth="2" 
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.9 }}
              />
              <motion.line 
                x1="50%" y1="50%" x2="67%" y2="85%" 
                stroke="url(#gradient1)" 
                strokeWidth="2" 
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1.1 }}
              />
              
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B4BFF" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#5B2C98" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}