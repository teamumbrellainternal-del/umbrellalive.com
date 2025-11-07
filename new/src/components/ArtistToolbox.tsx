import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { Sparkles, Megaphone, Palette, MessageSquare, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const tools = [
  {
    id: 1,
    icon: Sparkles,
    title: "Promotion Guidance",
    description: "AI-powered insights that show you where and how to grow your audience.",
    visual: "dashboard",
    color: "from-purple-500 to-purple-600"
  },
  {
    id: 2,
    icon: Megaphone,
    title: "Free Marketing",
    description: "Instant campaigns and collabs designed to amplify your reach — no cost, just creativity.",
    visual: "phone",
    color: "from-purple-600 to-violet-600"
  },
  {
    id: 3,
    icon: Palette,
    title: "Creative Canvas",
    description: "Design, plan, and share your next project in a space made for artists.",
    visual: "moodboard",
    color: "from-violet-600 to-purple-700"
  },
  {
    id: 4,
    icon: MessageSquare,
    title: "Text Blasts",
    description: "Send a text. Fill a room.",
    visual: "phone-notification",
    color: "from-purple-700 to-purple-800",
    tag: "Coming Soon"
  }
];

const motionPhrases = ["Create.", "Promote.", "Connect."];

export function ArtistToolbox() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Scroll-based parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  // Auto-rotate through tools every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % tools.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Rotate motion phrases independently
  useEffect(() => {
    const phraseInterval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % motionPhrases.length);
    }, 2000);
    return () => clearInterval(phraseInterval);
  }, []);

  const activeTool = tools[activeIndex];

  return (
    <section ref={sectionRef} className="relative bg-black py-32 px-6 md:px-10 overflow-hidden">
      {/* Background gradient with purple blobs */}
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        <motion.div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(
                ellipse at 20% 50%,
                rgba(139, 75, 255, 0.15) 0%,
                transparent 50%
              )
            `
          }}
        />
        
        {/* Animated purple glow orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          style={{
            background: 'radial-gradient(circle, rgba(139, 75, 255, 0.3) 0%, transparent 70%)',
            filter: 'blur(100px)'
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.08, 0.15, 0.08],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
          style={{
            background: 'radial-gradient(circle, rgba(199, 163, 255, 0.3) 0%, transparent 70%)',
            filter: 'blur(120px)'
          }}
        />

        {/* Floating geometric shapes - umbrella silhouette hint */}
        <motion.div
          className="absolute top-1/3 right-1/5 w-32 h-32 border-2 border-purple-500/10 rounded-full"
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 left-1/5 w-24 h-24 border-2 border-purple-400/10 rounded-lg"
          animate={{ 
            rotate: -360,
            y: [0, 20, 0]
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
        />
      </motion.div>

      <motion.div className="relative z-10 max-w-7xl mx-auto" style={{ y: contentY }}>
        {/* Section header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <motion.h2 
            className="text-h2 text-white mb-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Artist Toolbox
          </motion.h2>
          <motion.p 
            className="text-body-large text-purple-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Creative simplicity at its finest. Innovation built for artists.
          </motion.p>
        </motion.div>

        {/* Motion phrases */}
        <motion.div 
          className="text-center mb-16 h-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={phraseIndex}
              className="text-h3 text-purple-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {motionPhrases[phraseIndex]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Main content - split screen */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left side - Rotating 3D visual showcase */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          >
            {/* Purple glow behind visual */}
            <motion.div 
              className="absolute inset-0 -z-10"
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.15, 1]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              style={{
                background: `radial-gradient(circle, ${activeTool.color.includes('500') ? 'rgba(139, 75, 255, 0.4)' : 'rgba(167, 139, 250, 0.4)'} 0%, transparent 70%)`,
                filter: 'blur(100px)'
              }}
            />

            {/* Rotating tool cards */}
            <div className="relative h-[500px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTool.id}
                  className={`absolute w-full max-w-md h-[400px] bg-gradient-to-br ${activeTool.color} rounded-3xl p-8 shadow-2xl`}
                  initial={{ 
                    opacity: 0, 
                    rotateY: -90, 
                    scale: 0.8,
                    z: -100
                  }}
                  animate={{ 
                    opacity: 1, 
                    rotateY: 0, 
                    scale: 1,
                    z: 0,
                    y: [0, -10, 0]
                  }}
                  exit={{ 
                    opacity: 0, 
                    rotateY: 90, 
                    scale: 0.8,
                    z: 100
                  }}
                  transition={{ 
                    duration: 1,
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: '1000px'
                  }}
                >
                  {/* Tool visual mockup */}
                  <div className="relative h-full flex flex-col items-center justify-center text-white">
                    {/* Icon */}
                    <motion.div
                      className="mb-8"
                      animate={{ 
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                    >
                      <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <activeTool.icon className="w-12 h-12" />
                      </div>
                    </motion.div>

                    {/* Visual representation */}
                    {activeTool.visual === "dashboard" && (
                      <motion.div 
                        className="w-full space-y-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="flex gap-2">
                          <motion.div 
                            className="h-20 bg-white/30 backdrop-blur-sm rounded-lg flex-1"
                            animate={{ height: [60, 80, 60] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          />
                          <motion.div 
                            className="h-20 bg-white/30 backdrop-blur-sm rounded-lg flex-1"
                            animate={{ height: [80, 100, 80] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                          />
                          <motion.div 
                            className="h-20 bg-white/30 backdrop-blur-sm rounded-lg flex-1"
                            animate={{ height: [70, 90, 70] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                          />
                        </div>
                      </motion.div>
                    )}

                    {activeTool.visual === "phone" && (
                      <motion.div 
                        className="w-48 h-56 bg-white/30 backdrop-blur-sm rounded-3xl p-4 relative"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <motion.div 
                          className="absolute top-8 left-8 right-8 h-16 bg-white/40 rounded-xl"
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div 
                          className="absolute top-28 left-8 right-8 h-12 bg-white/30 rounded-xl"
                          animate={{ opacity: [0.3, 0.8, 0.3] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        />
                      </motion.div>
                    )}

                    {activeTool.visual === "moodboard" && (
                      <motion.div 
                        className="grid grid-cols-3 gap-3 w-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="aspect-square bg-white/30 backdrop-blur-sm rounded-lg"
                            animate={{ 
                              scale: [1, 1.05, 1],
                              rotate: [0, 2, -2, 0]
                            }}
                            transition={{ 
                              duration: 3, 
                              repeat: Infinity, 
                              ease: "easeInOut",
                              delay: i * 0.2
                            }}
                            whileHover={{ scale: 1.1 }}
                          />
                        ))}
                      </motion.div>
                    )}

                    {activeTool.visual === "phone-notification" && (
                      <motion.div 
                        className="w-48 h-56 bg-white/30 backdrop-blur-sm rounded-3xl p-4 relative flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <motion.div
                          animate={{ 
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0]
                          }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <MessageSquare className="w-20 h-20 text-white/80" />
                        </motion.div>
                      </motion.div>
                    )}

                    {/* Tag if present */}
                    {activeTool.tag && (
                      <motion.div
                        className="absolute top-6 right-6 px-3 py-1 bg-white/30 backdrop-blur-sm rounded-full text-xs"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 }}
                      >
                        {activeTool.tag}
                      </motion.div>
                    )}
                  </div>

                  {/* Floating particles around card */}
                  <motion.div 
                    className="absolute -top-6 -right-6 w-12 h-12 bg-white/30 rounded-full"
                    animate={{ 
                      y: [0, -20, 0],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  />
                  <motion.div 
                    className="absolute -bottom-4 -left-4 w-8 h-8 bg-white/20 rounded-full"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right side - Tool descriptions */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
          >
            {/* Tool cards */}
            <div className="space-y-4">
              {tools.map((tool, index) => (
                <motion.button
                  key={tool.id}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-500 ${
                    activeIndex === index
                      ? 'bg-purple-500/20 border-2 border-purple-500/50'
                      : 'bg-gray-900/50 border-2 border-transparent hover:border-purple-500/30'
                  }`}
                  whileHover={{ scale: 1.02, x: 10 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1, ease: [0.23, 1, 0.32, 1] }}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`mt-1 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                      activeIndex === index
                        ? 'bg-purple-500 shadow-lg shadow-purple-500/50'
                        : 'bg-purple-500/20'
                    }`}>
                      <tool.icon className={`w-6 h-6 transition-all duration-500 ${
                        activeIndex === index ? 'text-white' : 'text-purple-400'
                      }`} />
                    </div>

                    {/* Text content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className={`text-h5 transition-all duration-500 ${
                          activeIndex === index ? 'text-white' : 'text-purple-200'
                        }`}>
                          {tool.title}
                        </h3>
                        {tool.tag && (
                          <span className="px-2 py-0.5 bg-purple-500/30 text-purple-300 text-xs rounded-full">
                            {tool.tag}
                          </span>
                        )}
                      </div>
                      <p className={`text-body transition-all duration-500 ${
                        activeIndex === index ? 'text-purple-100' : 'text-purple-300'
                      }`}>
                        {tool.description}
                      </p>
                    </div>

                    {/* Arrow indicator */}
                    <motion.div
                      animate={{ 
                        x: activeIndex === index ? [0, 5, 0] : 0,
                        opacity: activeIndex === index ? 1 : 0.3
                      }}
                      transition={{ 
                        x: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
                        opacity: { duration: 0.3 }
                      }}
                    >
                      <ChevronRight className={`w-6 h-6 transition-all duration-500 ${
                        activeIndex === index ? 'text-purple-400' : 'text-purple-500/30'
                      }`} />
                    </motion.div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Button className="btn-primary text-base px-8 py-6 w-full sm:w-auto shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50">
                  <motion.span
                    whileHover={{ y: -1 }}
                    transition={{ duration: 0.2 }}
                    className="inline-block"
                  >
                    Explore Your Toolbox
                  </motion.span>
                </Button>
              </motion.div>
              <motion.p 
                className="text-small text-purple-300 mt-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                Start building with free tools built for creators.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>

        {/* Progress indicators */}
        <motion.div 
          className="flex justify-center gap-3 mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {tools.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="group"
            >
              <motion.div
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  activeIndex === index
                    ? 'w-12 bg-purple-500'
                    : 'w-1.5 bg-purple-500/30 group-hover:bg-purple-500/50'
                }`}
                whileHover={{ scale: 1.2 }}
              />
            </button>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
