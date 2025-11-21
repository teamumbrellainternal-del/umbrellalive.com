import { motion } from 'motion/react';
import { Music, Building, Heart, Umbrella } from 'lucide-react';

export function CollaborationSection() {
  return (
    <section className="py-32 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2 
            className="text-5xl md:text-7xl mb-8 text-gray-900 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Built for the Whole
            <br />
            <span className="text-transparent bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 bg-clip-text">
              Creative Ecosystem
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Umbrella connects artists, venues, and fans in one collaborative space.
          </motion.p>
        </div>

        {/* Interactive Network Visualization */}
        <motion.div 
          className="relative max-w-5xl mx-auto h-[500px] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Central Umbrella Hub */}
          <motion.div 
            className="absolute z-20 w-32 h-32 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center shadow-2xl"
            animate={{ 
              scale: [1, 1.05, 1],
              boxShadow: [
                '0 25px 50px -12px rgba(139, 75, 255, 0.3)',
                '0 35px 60px -12px rgba(139, 75, 255, 0.5)',
                '0 25px 50px -12px rgba(139, 75, 255, 0.3)'
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Umbrella className="w-16 h-16 text-white" />
          </motion.div>

          {/* Artists Circle */}
          <div className="absolute w-80 h-80 border-2 border-purple-200 rounded-full flex items-center justify-center">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`artist-${i}`}
                className="absolute w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg"
                style={{
                  transform: `rotate(${i * 60}deg) translateY(-140px) rotate(-${i * 60}deg)`
                }}
                animate={{ 
                  y: [0, -5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.3 }}
              >
                <Music className="w-8 h-8 text-white" />
              </motion.div>
            ))}
          </div>

          {/* Venues Circle */}
          <div className="absolute w-96 h-96 border-2 border-blue-200 rounded-full flex items-center justify-center">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={`venue-${i}`}
                className="absolute w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg"
                style={{
                  transform: `rotate(${i * 90}deg) translateY(-168px) rotate(-${i * 90}deg)`
                }}
                animate={{ 
                  y: [0, -8, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  delay: i * 0.8,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.3 }}
              >
                <Building className="w-10 h-10 text-white" />
              </motion.div>
            ))}
          </div>

          {/* Fans Circle */}
          <div className="absolute w-[500px] h-[500px] border-2 border-pink-200 rounded-full flex items-center justify-center">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`fan-${i}`}
                className="absolute w-14 h-14 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-lg"
                style={{
                  transform: `rotate(${i * 45}deg) translateY(-220px) rotate(-${i * 45}deg)`
                }}
                animate={{ 
                  y: [0, -6, 0],
                  scale: [1, 1.08, 1]
                }}
                transition={{ 
                  duration: 3.5, 
                  repeat: Infinity, 
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.3 }}
              >
                <Heart className="w-7 h-7 text-white" />
              </motion.div>
            ))}
          </div>

          {/* Animated Connection Lines */}
          <svg className="absolute inset-0 w-full h-full overflow-visible">
            {/* Artists to Center */}
            {[...Array(6)].map((_, i) => {
              const angle = (i * 60) * (Math.PI / 180);
              const x1 = 50 + Math.sin(angle) * 35;
              const y1 = 50 - Math.cos(angle) * 35;
              return (
                <motion.line
                  key={`artist-line-${i}`}
                  x1="50%" y1="50%"
                  x2={`${x1}%`} y2={`${y1}%`}
                  stroke="url(#artistGradient)"
                  strokeWidth="2"
                  strokeDasharray="4,4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                />
              );
            })}

            {/* Venues to Center */}
            {[...Array(4)].map((_, i) => {
              const angle = (i * 90) * (Math.PI / 180);
              const x1 = 50 + Math.sin(angle) * 42;
              const y1 = 50 - Math.cos(angle) * 42;
              return (
                <motion.line
                  key={`venue-line-${i}`}
                  x1="50%" y1="50%"
                  x2={`${x1}%`} y2={`${y1}%`}
                  stroke="url(#venueGradient)"
                  strokeWidth="3"
                  strokeDasharray="6,6"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                />
              );
            })}

            <defs>
              <linearGradient id="artistGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#5B2C98" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="venueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#5B2C98" stopOpacity="0.4" />
              </linearGradient>
            </defs>
          </svg>

          {/* Labels */}
          <motion.div 
            className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <span className="text-green-600 text-sm">Artists</span>
            </div>
          </motion.div>

          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <span className="text-pink-600 text-sm">Fans</span>
            </div>
          </motion.div>

          <motion.div 
            className="absolute top-1/2 right-8 transform -translate-y-1/2 text-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <span className="text-blue-600 text-sm">Venues</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Row */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { number: '10K+', label: 'Active Artists', color: 'text-green-600' },
            { number: '500+', label: 'Partner Venues', color: 'text-blue-600' },
            { number: '50K+', label: 'Monthly Connections', color: 'text-pink-600' }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.h3 
                className={`text-4xl md:text-5xl mb-2 ${stat.color}`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.h3>
              <p className="text-gray-600 text-lg">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}