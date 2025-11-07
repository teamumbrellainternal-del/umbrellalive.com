import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const messages = [
  {
    id: 1,
    text: "🎵 New show this Friday at The Venue! First 50 people get free merch. Link to tickets in bio!",
    isUser: true,
    delay: 0.3
  },
  {
    id: 2,
    text: "OMG YES! Been waiting for this! 🔥",
    isUser: false,
    delay: 0.6
  },
  {
    id: 3,
    text: "Just got my ticket! Can't wait!",
    isUser: false,
    delay: 0.9
  },
  {
    id: 4,
    text: "See you there! 🎤✨",
    isUser: true,
    delay: 1.2
  }
];

export function SpotifyVisualShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  
  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Phone glides up from bottom as user scrolls into view
  const phoneY = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const phoneOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  
  // Parallax effect on background glow
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-black py-32 px-10 overflow-hidden"
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{ y: glowY }}
      >
        <motion.div 
          className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          style={{
            background: 'radial-gradient(circle, rgba(139, 75, 255, 0.4) 0%, transparent 70%)',
            filter: 'blur(100px)'
          }}
        />
      </motion.div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left side - Text content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            {/* Eyebrow */}
            <motion.div 
              className="text-tiny font-bold tracking-widest text-purple-400 uppercase"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              TEXT BLASTS
            </motion.div>

            {/* Headline */}
            <motion.h2 
              className="text-h1 text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Send a text. Fill a room.
            </motion.h2>

            {/* Body copy */}
            <motion.p 
              className="text-body-large text-purple-200 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Connect directly with your audience through our revolutionary text blast feature. 
              One message can fill your venue, boost your streams, and build lasting relationships with fans.
            </motion.p>

            {/* CTA link with enhanced hover */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.a 
                href="#"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 font-bold text-body transition-colors group relative"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                Learn more
                <motion.span 
                  className="ml-2 inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  →
                </motion.span>
                
                {/* Underline animation */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-purple-400"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side - Phone mockup with gliding animation */}
          <motion.div
            className="relative"
            style={{ y: phoneY, opacity: phoneOpacity }}
          >
            {/* Purple glow behind image */}
            <motion.div 
              className="absolute inset-0 -z-10"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              style={{
                background: 'radial-gradient(circle, rgba(139, 75, 255, 0.4) 0%, transparent 70%)',
                filter: 'blur(100px)'
              }}
            />
            
            {/* Phone mockup */}
            <motion.div 
              className="relative mx-auto max-w-sm"
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 1, 
                delay: 0.4,
                ease: [0.23, 1, 0.32, 1]
              }}
              onViewportEnter={() => setIsInView(true)}
            >
              <motion.div 
                className="bg-gray-900 rounded-3xl p-6 shadow-2xl border border-purple-500/20"
                animate={{ 
                  y: [0, -8, 0],
                  rotateY: [0, 1, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                whileHover={{ 
                  y: -12,
                  rotateY: 2,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Phone header */}
                <motion.div 
                  className="flex items-center justify-between mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-purple-400 text-sm font-semibold">Umbrella</div>
                </motion.div>
                
                {/* Message thread - appears one by one */}
                <div className="space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      className={`p-3 rounded-2xl max-w-xs ${
                        message.isUser 
                          ? 'bg-purple-600 text-white ml-auto rounded-bl-md' 
                          : 'bg-gray-800 text-purple-200 rounded-br-md'
                      }`}
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      whileInView={{ 
                        opacity: isInView ? 1 : 0, 
                        y: isInView ? 0 : 20,
                        scale: isInView ? 1 : 0.8
                      }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: message.delay,
                        ease: [0.23, 1, 0.32, 1]
                      }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <p className="text-sm">{message.text}</p>
                    </motion.div>
                  ))}
                </div>
                
                {/* Input area */}
                <motion.div 
                  className="mt-6 flex items-center space-x-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.5 }}
                >
                  <div className="flex-1 bg-gray-800 rounded-full px-4 py-2">
                    <motion.span 
                      className="text-gray-500 text-sm"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Type a message...
                    </motion.span>
                  </div>
                  <motion.div 
                    className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center cursor-pointer"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <span className="text-white text-sm">→</span>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Floating notification badge */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.8, type: "spring", stiffness: 200 }}
                animate={{ 
                  y: [0, -5, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <span className="text-white font-bold text-sm">4</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
