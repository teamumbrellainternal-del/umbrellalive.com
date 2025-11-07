import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, MessageCircle, Users, Zap, Umbrella } from 'lucide-react';

export function TextBlastMissionSection() {
  const textMessages = [
    { message: "New show this Friday 🎤 RSVP now", time: "2:14 PM", sender: "Luna Vista" },
    { message: "Behind the scenes at tonight's session 🎵", time: "3:22 PM", sender: "The Collective" },
    { message: "Last 5 tickets for Saturday! Don't miss out ⚡", time: "4:45 PM", sender: "Maya & Sunrise" }
  ];

  return (
    <section id="text-blast-mission" className="section-padding bg-gradient-to-br from-[#2E1A47] via-[#1A0D2E] to-[#0F0719] relative overflow-hidden">
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute ridge-diagonal-optical h-full w-full"
            style={{
              transform: `rotate(${45 + i * 15}deg)`,
              left: `${-20 + i * 10}%`,
            }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 1.5,
            }}
          />
        ))}
      </div>

      {/* Floating Umbrella Silhouettes with Ridge Halos */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute floating-glow"
            style={{
              left: `${20 + i * 20}%`,
              top: `${10 + (i % 2) * 40}%`
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, 0],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2
            }}
          >
            <div className="relative">
              <Umbrella className="w-16 h-16 text-white" />
              <div className="absolute inset-0 optical-burst rounded-full opacity-20"></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Flowing Ridge Divider */}
      <motion.div 
        className="absolute left-1/2 top-0 bottom-0 w-0.5 ridge-vertical-depth ridge-wave"
        style={{ transform: 'translateX(-50%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Glassmorphic Phone Frame */}
            <div className="relative">
              <motion.div 
                className="w-80 h-[600px] glass-secondary rounded-[3rem] p-2 shadow-deep-dimensional ridge-border"
                initial={{ scale: 0.8, rotateY: -15 }}
                whileInView={{ scale: 1, rotateY: 0 }}
                transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, rotateY: 2 }}
              >
                {/* Screen with Frosted Glass Overlay */}
                <div className="w-full h-full glass-primary rounded-[2.5rem] overflow-hidden relative">
                  {/* Ridge texture overlay */}
                  <div className="absolute inset-0 ridge-diagonal-optical opacity-10 rounded-[2.5rem]"></div>
                  
                  {/* Status Bar */}
                  <div className="h-12 glass-secondary flex items-center justify-between px-6 text-white text-sm">
                    <span>9:41</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-2 border border-white rounded-sm">
                        <div className="w-3 h-1 bg-white rounded-sm"></div>
                      </div>
                    </div>
                  </div>

                  {/* Header with liquid gradient */}
                  <div className="px-4 py-3 liquid-gradient">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white text-sm">Text Blast</h3>
                        <p className="text-purple-100 text-xs">Send to 247 fans</p>
                      </div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 p-4 space-y-4 bg-gradient-to-b from-gray-900 to-gray-800">
                    {textMessages.map((msg, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.3, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <div className="text-xs text-gray-400 text-right">{msg.time}</div>
                        <motion.div 
                          className="glass-primary ridge-border text-white p-4 rounded-2xl rounded-br-md ml-auto max-w-xs shadow-ridge-glow"
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="text-xs text-purple-200 mb-1">{msg.sender}</div>
                          <div className="text-sm">{msg.message}</div>
                        </motion.div>
                      </motion.div>
                    ))}

                    {/* Typing indicator */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 2 }}
                      className="flex items-center space-x-2 text-gray-400 text-sm"
                    >
                      <div className="flex space-x-1">
                        <motion.div
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                        />
                      </div>
                      <span>Fans are responding...</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Optical Light Leak */}
              <div className="absolute inset-0 optical-burst rounded-[3rem] blur-xl -z-10 opacity-60" />
              <div className="absolute -right-20 top-1/2 w-40 h-40 ridge-horizontal-flow rounded-full opacity-30 blur-2xl" />
            </div>
          </motion.div>

          {/* Right: Glassmorphic Mission Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative glass-card rounded-3xl p-8 space-y-8 shadow-deep-dimensional"
          >
            {/* Ridge border with inner glow */}
            <div className="absolute inset-0 ridge-border rounded-3xl shadow-ridge-glow"></div>
            <div>
              <motion.h2 
                className="text-section mb-6 text-white shimmer-effect"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Real Connection.<br />
                <span className="optical-text">
                  Real Fans.
                </span><br />
                <span className="text-white/90">
                  Real Growth.
                </span>
              </motion.h2>

              <motion.p 
                className="text-body-large text-white/90 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Umbrella helps artists communicate directly with fans, venues, and their creative community — instantly and authentically.
              </motion.p>
            </div>

            {/* Feature highlights */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {[
                { icon: Zap, title: "Instant Delivery", desc: "Reach fans in seconds" },
                { icon: Users, title: "Real Engagement", desc: "Track responses & growth" },
                { icon: MessageCircle, title: "Personal Connection", desc: "Direct artist-to-fan" },
                { icon: Umbrella, title: "All-in-One Platform", desc: "Everything you need" }
              ].map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                  >
                    <div className="w-10 h-10 rounded-full glass-card ridge-border flex items-center justify-center flex-shrink-0 floating-glow">
                      <IconComponent className="w-5 h-5 text-purple-200" />
                      <div className="absolute inset-0 optical-burst rounded-full opacity-20"></div>
                    </div>
                    <div>
                      <h4 className="text-white mb-1">{feature.title}</h4>
                      <p className="text-purple-300 text-sm">{feature.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg"
                  className="bg-white text-purple-900 hover:bg-purple-50 px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Get Early Access
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}