import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, MessageCircle, Zap } from 'lucide-react';

export function TextBlastHero() {
  const sampleMessages = [
    { 
      text: "Playing at The Fillmore this Friday! Hope to see you there 🎵", 
      delay: 0,
      status: "delivered",
      time: "now"
    },
    { 
      text: "Just finished our new song 'Midnight Dreams' — what do you think?", 
      delay: 2,
      status: "delivered", 
      time: "2m"
    },
    { 
      text: "Quick studio update: Working on something special for you all.", 
      delay: 4,
      status: "sending",
      time: "typing..."
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background with floating message bubbles */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #5B2C98 0%, #8B4BFF 30%, #0C0C0C 100%)'
          }}
          animate={{
            background: [
              'linear-gradient(135deg, #5B2C98 0%, #8B4BFF 30%, #0C0C0C 100%)',
              'linear-gradient(135deg, #8B4BFF 0%, #C7A3FF 30%, #5B2C98 100%)',
              'linear-gradient(135deg, #5B2C98 0%, #8B4BFF 30%, #0C0C0C 100%)'
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating Geometric Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-5"
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${10 + (i * 12)}%`
            }}
            animate={{ 
              y: [0, -30, 0],
              opacity: [0.05, 0.15, 0.05],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 8 + i * 1, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.2
            }}
          >
            <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm" />
          </motion.div>
        ))}
        
        {/* Subtle Message Icons */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`msg-${i}`}
            className="absolute opacity-8"
            style={{
              right: `${10 + (i * 20)}%`,
              top: `${60 + (i * 5)}%`
            }}
            animate={{ 
              y: [0, -15, 0],
              opacity: [0.08, 0.2, 0.08]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2
            }}
          >
            <div className="w-3 h-3 rounded-sm bg-gradient-to-br from-purple-300/30 to-purple-500/30 backdrop-blur-sm" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl mb-8 text-white leading-[0.9] tracking-tight">
              Connect with Your
              <br />
              <span className="text-transparent bg-gradient-to-r from-purple-200 via-white to-purple-100 bg-clip-text">
                Community
              </span>
            </h1>

            <motion.p 
              className="text-xl md:text-2xl text-purple-100 mb-12 leading-relaxed opacity-90 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Share moments, announce shows, and stay connected with your fans through seamless messaging.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button 
                size="lg" 
                className="bg-white text-purple-900 hover:bg-purple-50 px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl border-0"
              >
                Join the Waitlist
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/10 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white hover:text-purple-900 px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Learn More →
              </Button>
            </motion.div>
          </motion.div>

          {/* Right - Phone Mockup with Text Blast Demo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end mt-8 lg:mt-0"
          >
            {/* Phone Container */}
            <div className="relative">
              {/* Phone Frame */}
              <motion.div 
                className="w-64 h-[500px] sm:w-72 sm:h-[560px] md:w-80 md:h-[640px] bg-gradient-to-br from-gray-900 to-black rounded-2xl sm:rounded-3xl p-2 sm:p-3 shadow-2xl max-w-sm mx-auto"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Screen */}
                <div className="w-full h-full bg-white rounded-xl sm:rounded-2xl overflow-hidden relative shadow-inner">
                  {/* Status Bar */}
                  <div className="bg-white px-4 sm:px-6 py-2 sm:py-3 flex justify-between text-xs text-gray-900 border-b border-gray-100">
                    <span className="font-medium">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-3 sm:w-4 h-1.5 sm:h-2 bg-green-500 rounded-sm"></div>
                      <span className="font-medium">100%</span>
                    </div>
                  </div>

                  {/* App Header */}
                  <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-4 sm:px-6 py-3 sm:py-5 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold">Messages</h3>
                        <p className="text-purple-100 text-xs sm:text-sm opacity-90">Your community • 1,247 fans</p>
                      </div>
                      <div className="w-6 sm:w-8 h-6 sm:h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <div className="w-2 sm:w-3 h-2 sm:h-3 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Message List */}
                  <div className="p-3 sm:p-4 md:p-6 space-y-2 sm:space-y-3 flex-1 bg-gray-50/30">
                    {sampleMessages.map((message, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          delay: message.delay, 
                          duration: 0.6,
                          repeat: Infinity,
                          repeatDelay: 8,
                          ease: "easeOut"
                        }}
                        className="bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-sm border border-gray-100/50"
                      >
                        <p className="text-gray-800 text-xs sm:text-sm leading-relaxed">{message.text}</p>
                        <div className="flex justify-between items-center mt-2 sm:mt-3">
                          <span className="text-xs text-gray-400 font-medium">{message.time}</span>
                          <motion.div
                            animate={{ 
                              opacity: message.status === 'sending' ? [0.5, 1, 0.5] : 1,
                              scale: message.status === 'delivered' ? [1, 1.05, 1] : 1
                            }}
                            transition={{ 
                              duration: message.status === 'sending' ? 1.5 : 2,
                              repeat: Infinity,
                              repeatDelay: message.status === 'delivered' ? 6 : 0
                            }}
                            className={`text-xs font-medium flex items-center gap-1 ${
                              message.status === 'delivered' ? 'text-green-500' : 'text-purple-500'
                            }`}
                          >
                            {message.status === 'delivered' ? (
                              <>
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                Delivered
                              </>
                            ) : (
                              <>
                                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                                Sending
                              </>
                            )}
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Send Button */}
                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4">
                    <motion.div className="bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-lg border border-gray-100">
                      <motion.button
                        className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-2.5 sm:py-3.5 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold flex items-center justify-center gap-2"
                        animate={{ 
                          boxShadow: [
                            '0 4px 20px rgba(139, 75, 255, 0.25)',
                            '0 6px 25px rgba(139, 75, 255, 0.4)',
                            '0 4px 20px rgba(139, 75, 255, 0.25)'
                          ]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <div className="w-3 sm:w-4 h-3 sm:h-4 bg-white rounded-full flex items-center justify-center">
                          <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-purple-600 rounded-full"></div>
                        </div>
                        Share with Community
                      </motion.button>
                      <p className="text-xs text-gray-500 text-center mt-1.5 sm:mt-2">Share with your 1,247 fans</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Floating geometric indicators */}
              {[...Array(3)].map((_, index) => (
                <motion.div
                  key={index}
                  className="absolute"
                  className="hidden sm:block"
                  style={{
                    right: `${-15 + index * 15}px`,
                    top: `${250 + index * 50}px`
                  }}
                  animate={{ 
                    y: [0, -20, 0],
                    opacity: [0.6, 1, 0.6],
                    scale: [0.8, 1, 0.8]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    delay: index * 0.8 + 2,
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 shadow-lg" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}