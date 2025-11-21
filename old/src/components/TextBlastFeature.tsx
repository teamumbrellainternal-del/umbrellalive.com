import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, MessageCircle, Zap, Users } from 'lucide-react';

export function TextBlastFeature() {
  const textMessages = [
    { message: "🎤 Show tonight at The Faight — RSVP now!", time: "2:14 PM", sender: "DJ Luna" },
    { message: "🔥 New track just dropped — listen first on Umbrella.", time: "3:22 PM", sender: "The Neon Collective" },
    { message: "Behind the scenes at tonight's recording session 🎵", time: "4:45 PM", sender: "Maya & The Sunrise" },
    { message: "Last 10 tickets for Saturday's show! Don't miss out ⚡", time: "5:18 PM", sender: "Velvet Underground SF" }
  ];

  return (
    <section id="text-blast-feature" className="py-24 bg-gradient-to-br from-purple-900 via-purple-800 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-purple-300 blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-violet-300 blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-purple-200 blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-purple-100 text-sm mb-6 border border-white/20"
            >
              <Zap className="w-4 h-4 mr-2 text-yellow-300" />
              Instant Connection
            </motion.div>

            <h2 className="text-4xl md:text-6xl mb-6 text-white leading-tight">
              Send a Text.
              <br />
              <span className="text-transparent bg-gradient-to-r from-purple-200 to-violet-200 bg-clip-text">
                Fill a Room.
              </span>
            </h2>

            <p className="text-xl text-purple-100 mb-8 leading-relaxed opacity-90 max-w-lg">
              Reach your fans instantly — share show updates, drops, or events with one message. 
              Direct, personal, and powered by Umbrella.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-purple-600/30 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-purple-200" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Instant Delivery</h4>
                  <p className="text-purple-300 text-sm">Direct to your fans</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-purple-600/30 flex items-center justify-center">
                  <Users className="w-5 h-5 text-purple-200" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Real Engagement</h4>
                  <p className="text-purple-300 text-sm">Track responses</p>
                </div>
              </div>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg"
                className="bg-white text-purple-900 hover:bg-purple-50 px-8 py-4 text-lg rounded-full font-medium shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Get Early Access
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Phone Mockup Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            {/* Phone Frame */}
            <div className="relative">
              <motion.div 
                className="w-80 h-[640px] bg-gradient-to-br from-gray-900 to-black rounded-[3rem] p-2 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Screen */}
                <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="h-12 bg-black flex items-center justify-between px-6 text-white text-sm">
                    <span>9:41</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-2 border border-white rounded-sm">
                        <div className="w-3 h-1 bg-white rounded-sm"></div>
                      </div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 p-4 space-y-4 bg-gradient-to-b from-gray-900 to-gray-800">
                    <div className="text-center">
                      <span className="text-gray-400 text-xs">Text Blasts</span>
                    </div>

                    {textMessages.map((msg, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.3 + 0.5, duration: 0.4 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <div className="text-xs text-gray-400 text-center">{msg.time}</div>
                        <div className="bg-purple-600 text-white p-4 rounded-2xl rounded-bl-md max-w-xs">
                          <div className="text-xs text-purple-200 mb-1">{msg.sender}</div>
                          <div className="text-sm">{msg.message}</div>
                        </div>
                      </motion.div>
                    ))}

                    {/* Floating bubbles animation */}
                    <motion.div
                      className="absolute bottom-20 right-4"
                      animate={{ y: [-10, -20, -10] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <div className="w-8 h-8 bg-purple-500/30 rounded-full backdrop-blur-sm" />
                    </motion.div>
                    <motion.div
                      className="absolute bottom-32 left-6"
                      animate={{ y: [-5, -15, -5] }}
                      transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                    >
                      <div className="w-6 h-6 bg-violet-500/20 rounded-full backdrop-blur-sm" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-[3rem] blur-xl -z-10 animate-pulse" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}