import { motion } from 'motion/react';
import { Heart, Share, Ticket, Play } from 'lucide-react';

export function VisualDemoSection() {
  const fanReactions = [
    { icon: Heart, label: 'Loved it!', delay: 1 },
    { icon: Share, label: 'Shared', delay: 1.5 },
    { icon: Ticket, label: 'Got tickets', delay: 2 },
    { icon: Play, label: 'Listening now', delay: 2.5 }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-purple-50 via-white to-purple-50">
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
            Artist-to-Fan Connection
            <br />
            <span className="text-transparent bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 bg-clip-text">
              in Real Time
            </span>
          </motion.h2>
        </div>

        {/* Interactive Demo */}
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left - Artist Sending */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm mb-4">
                Artist Dashboard
              </div>
              <h3 className="text-2xl text-gray-900 mb-2">Luna Waves</h3>
              <p className="text-gray-600">Indie Pop • San Francisco</p>
            </div>

            {/* Phone Animation - Artist Side */}
            <motion.div 
              className="relative mx-auto lg:mx-0 w-72"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="w-72 h-[500px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-gray-50 px-4 py-2 flex justify-between text-xs text-gray-600">
                    <span>2:30 PM</span>
                    <span>🔋 100%</span>
                  </div>

                  {/* Compose Screen */}
                  <div className="p-6">
                    <div className="bg-purple-600 p-4 rounded-2xl text-white mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm opacity-90">Text Blast</span>
                        <span className="text-xs bg-white/20 px-2 py-1 rounded-full">1,247 fans</span>
                      </div>
                      <p className="text-sm">🎤 Hey everyone! Our new single "Midnight Waves" drops tomorrow at midnight. You'll be the first to hear it on Umbrella! 🌊✨</p>
                    </div>

                    <motion.button
                      className="w-full bg-purple-600 text-white py-3 rounded-xl text-lg"
                      whileTap={{ scale: 0.95 }}
                      animate={{ 
                        boxShadow: [
                          '0 4px 20px rgba(139, 75, 255, 0.3)',
                          '0 8px 30px rgba(139, 75, 255, 0.5)',
                          '0 4px 20px rgba(139, 75, 255, 0.3)'
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Send to All Fans
                    </motion.button>

                    {/* Analytics Preview */}
                    <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                      <h4 className="text-sm text-gray-700 mb-2">Live Analytics</h4>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <motion.div 
                            className="text-2xl text-purple-600"
                            animate={{ count: [0, 1247] }}
                            transition={{ duration: 2, delay: 0.5 }}
                          >
                            1,247
                          </motion.div>
                          <div className="text-xs text-gray-600">Delivered</div>
                        </div>
                        <div>
                          <motion.div 
                            className="text-2xl text-green-600"
                            animate={{ count: [0, 892] }}
                            transition={{ duration: 2, delay: 1 }}
                          >
                            892
                          </motion.div>
                          <div className="text-xs text-gray-600">Opened</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Fan Receiving */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center lg:text-right"
          >
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm mb-4">
                Fan Experience
              </div>
              <h3 className="text-2xl text-gray-900 mb-2">Sarah M.</h3>
              <p className="text-gray-600">Luna Waves Super Fan</p>
            </div>

            {/* Phone Animation - Fan Side */}
            <motion.div 
              className="relative mx-auto lg:mx-0 w-72 lg:ml-auto"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              <div className="w-72 h-[500px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-gray-50 px-4 py-2 flex justify-between text-xs text-gray-600">
                    <span>2:31 PM</span>
                    <span>🔔 New Message</span>
                  </div>

                  {/* Message Received */}
                  <div className="p-6">
                    <motion.div 
                      className="bg-purple-50 border border-purple-200 p-4 rounded-2xl mb-4"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1, duration: 0.6 }}
                    >
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs mr-2">
                          LW
                        </div>
                        <span className="text-sm text-gray-700">Luna Waves</span>
                      </div>
                      <p className="text-sm text-gray-800">🎤 Hey everyone! Our new single "Midnight Waves" drops tomorrow at midnight. You'll be the first to hear it on Umbrella! 🌊✨</p>
                    </motion.div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <motion.button
                        className="bg-purple-600 text-white py-2 px-4 rounded-xl text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                      >
                        Pre-save Track
                      </motion.button>
                      <motion.button
                        className="border border-purple-300 text-purple-600 py-2 px-4 rounded-xl text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.7 }}
                      >
                        Share with Friends
                      </motion.button>
                    </div>

                    {/* Fan Reactions */}
                    <div className="space-y-2">
                      {fanReactions.map((reaction, index) => (
                        <motion.div
                          key={reaction.label}
                          className="flex items-center space-x-2 text-sm text-gray-600"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: reaction.delay, duration: 0.5 }}
                        >
                          <reaction.icon className="w-4 h-4 text-purple-500" />
                          <span>{reaction.label}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Connection Indicators */}
              {[...Array(3)].map((_, index) => (
                <motion.div
                  key={index}
                  className="absolute"
                  style={{
                    right: `${-8 + index * 12}px`,
                    top: `${220 + index * 40}px`
                  }}
                  animate={{ 
                    y: [0, -15, 0],
                    opacity: [0.4, 0.8, 0.4],
                    scale: [0.8, 1.1, 0.8]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: 2 + index * 0.6,
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-sm" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Quote */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <blockquote className="text-2xl md:text-3xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            "From your phone to theirs — 
            <span className="text-purple-600"> genuine connection at scale.</span>"
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}