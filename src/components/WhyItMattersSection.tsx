import { motion } from 'motion/react';
import { Umbrella, Zap, Users, TrendingUp } from 'lucide-react';

export function WhyItMattersSection() {
  return (
    <section className="py-32 bg-white">
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
            Connection is the
            <br />
            <span className="text-transparent bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 bg-clip-text">
              New Currency
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Umbrella bridges artists and fans through real conversations — not algorithms. Build your community, your way.
          </motion.p>
        </div>

        {/* Central Visual with Radiating Lines */}
        <motion.div 
          className="relative max-w-4xl mx-auto h-96 flex items-center justify-center mb-20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Central Umbrella */}
          <motion.div 
            className="absolute z-20 w-24 h-24 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center shadow-2xl"
            animate={{ 
              scale: [1, 1.1, 1],
              boxShadow: [
                '0 25px 50px -12px rgba(139, 75, 255, 0.3)',
                '0 35px 60px -12px rgba(139, 75, 255, 0.6)',
                '0 25px 50px -12px rgba(139, 75, 255, 0.3)'
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Umbrella className="w-12 h-12 text-white" />
          </motion.div>

          {/* Radiating Soundwave Lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
            {[...Array(8)].map((_, i) => {
              const angle = (i * 45) * (Math.PI / 180);
              const x1 = 200;
              const y1 = 200;
              const length = 120 + (i % 2) * 30;
              const x2 = x1 + Math.cos(angle) * length;
              const y2 = y1 + Math.sin(angle) * length;
              
              return (
                <motion.line
                  key={i}
                  x1={x1} y1={y1}
                  x2={x2} y2={y2}
                  stroke="url(#soundwaveGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: [0, 1, 0.7],
                    opacity: [0, 0.6, 0.4]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                />
              );
            })}

            {/* Elegant ripple circles */}
            {[...Array(3)].map((_, i) => (
              <motion.circle
                key={`ripple-${i}`}
                cx="200" cy="200"
                r={70 + i * 35}
                fill="none"
                stroke="rgba(139, 75, 255, 0.15)"
                strokeWidth="1.5"
                strokeDasharray="8,12"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ 
                  scale: [0.8, 1.1, 1.3],
                  opacity: [0, 0.4, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  delay: i * 2,
                  ease: "easeInOut"
                }}
              />
            ))}

            <defs>
              <linearGradient id="soundwaveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B4BFF" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#5B2C98" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#C7A3FF" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>

          {/* Connection Points */}
          {[
            { icon: Users, position: { top: '10%', left: '20%' }, label: 'Direct to Fans' },
            { icon: Zap, position: { top: '20%', right: '15%' }, label: 'Instant Delivery' },
            { icon: TrendingUp, position: { bottom: '15%', right: '25%' }, label: 'Real Growth' },
            { icon: Users, position: { bottom: '10%', left: '15%' }, label: 'Community Building' }
          ].map((point, index) => (
            <motion.div
              key={index}
              className="absolute w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-purple-100"
              style={point.position}
              animate={{ 
                y: [0, -8, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                delay: index * 0.8,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.2 }}
            >
              <point.icon className="w-8 h-8 text-purple-600" />
              
              {/* Tooltip */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
                  {point.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: 'No Algorithm Interference',
              description: 'Your message reaches your fans directly, without competing for attention in crowded feeds.',
              stat: '100%',
              statLabel: 'Direct Reach'
            },
            {
              title: 'Authentic Conversations',
              description: 'Build real relationships with fans through personal, timely communication that matters.',
              stat: '3x',
              statLabel: 'Higher Engagement'
            },
            {
              title: 'Own Your Audience',
              description: 'Create a direct line to your community that no platform can take away from you.',
              stat: '90%',
              statLabel: 'Fan Retention'
            }
          ].map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="text-center p-8 bg-gray-50 rounded-3xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.div 
                className="text-4xl text-purple-600 mb-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {benefit.stat}
              </motion.div>
              <p className="text-sm text-gray-500 mb-4">{benefit.statLabel}</p>
              <h3 className="text-xl text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-purple-50 to-purple-100 rounded-3xl">
            <blockquote className="text-2xl md:text-3xl text-gray-800 leading-relaxed mb-4">
              "The future of music isn't about going viral — it's about going 
              <span className="text-purple-600"> personal</span>."
            </blockquote>
            <cite className="text-gray-600">— The Umbrella Team</cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
}