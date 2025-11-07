import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Coins, TrendingDown, BarChart3 } from 'lucide-react';

const problemStats = [
  {
    icon: Coins,
    text: 'Only 13¢ of every streaming dollar reaches the artist.',
    delay: 0.2
  },
  {
    icon: TrendingDown,
    text: '$36.2B in global revenue — but artist income unchanged since 2017.',
    delay: 0.4
  },
  {
    icon: BarChart3,
    text: 'Top 1% of artists capture 60% of all streams.',
    delay: 0.6
  }
];

export function ProblemSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const leftY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const rightY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-gradient-to-b from-black via-[#1a0a2e] to-black overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/4 w-96 h-96 opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(139, 75, 255, 0.4) 0%, transparent 70%)',
            filter: 'blur(120px)'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Visual Collage */}
          <motion.div 
            className="relative"
            style={{ y: leftY }}
          >
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-6">
                Undervalued and{' '}
                <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  Misrepresented
                </span>
              </h2>
              
              <p className="text-lg md:text-xl text-purple-200/80 leading-relaxed max-w-lg">
                The music industry is broken. While revenue soars, artists are left behind—
                underpaid, undervalued, and fighting for scraps in a system designed for gatekeepers.
              </p>
            </motion.div>

            {/* Abstract artist representation */}
            <motion.div 
              className="mt-8 relative h-64 rounded-2xl overflow-hidden border border-purple-500/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-purple-800/40 to-black/90" />
              
              {/* Animated grid pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(139, 75, 255, 0.3)" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
              
              {/* Enhanced soundwave visualization */}
              <div className="absolute inset-0 flex items-center justify-center px-8">
                <div className="w-full h-40 flex items-end justify-around gap-1">
                  {[...Array(60)].map((_, i) => {
                    const isHighlight = i % 8 === 0;
                    return (
                      <motion.div
                        key={i}
                        className={`w-1 rounded-full ${
                          isHighlight 
                            ? 'bg-purple-400/60' 
                            : 'bg-purple-500/30'
                        }`}
                        initial={{ height: '20%' }}
                        animate={{ 
                          height: ['20%', `${Math.random() * 80 + 20}%`, '20%'],
                          opacity: isHighlight ? [0.6, 1, 0.6] : [0.3, 0.5, 0.3]
                        }}
                        transition={{
                          duration: 2 + Math.random() * 2,
                          repeat: Infinity,
                          delay: i * 0.03,
                          ease: "easeInOut"
                        }}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Overlay label */}
              <motion.div 
                className="absolute top-4 left-4 right-4 flex items-center justify-between"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="text-xs text-purple-300/60 uppercase tracking-wider">
                  Artist Revenue Distribution
                </div>
                <div className="text-xs text-purple-400/80">
                  13% ↓
                </div>
              </motion.div>

              {/* Pulsing glow effect */}
              <motion.div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24"
                animate={{ 
                  opacity: [0.1, 0.3, 0.1],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(139, 75, 255, 0.3) 0%, transparent 70%)',
                  filter: 'blur(40px)'
                }}
              />
            </motion.div>
          </motion.div>

          {/* Right Side - Animated Stats */}
          <motion.div 
            className="space-y-6"
            style={{ y: rightY }}
          >
            {problemStats.map((stat, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: stat.delay,
                  ease: [0.23, 1, 0.32, 1]
                }}
              >
                <motion.div
                  className="glass-card backdrop-blur-md bg-purple-950/20 border border-purple-500/20 rounded-2xl p-6 md:p-8"
                  whileHover={{ 
                    scale: 1.02,
                    borderColor: 'rgba(139, 75, 255, 0.4)',
                    transition: { duration: 0.2 }
                  }}
                  animate={{
                    opacity: [1, 0.4, 1]
                  }}
                  transition={{
                    opacity: {
                      duration: 4,
                      delay: index * 1.5,
                      repeat: Infinity,
                      repeatDelay: 6
                    }
                  }}
                >
                  {/* Pulse animation on reveal */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-purple-500/10"
                    initial={{ scale: 1, opacity: 0 }}
                    whileInView={{ 
                      scale: [1, 1.05, 1],
                      opacity: [0, 0.3, 0]
                    }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 1,
                      delay: stat.delay + 0.3
                    }}
                  />
                  
                  <div className="relative flex items-start gap-4">
                    <motion.div 
                      className="text-3xl md:text-4xl"
                      animate={{ 
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{
                        duration: 2,
                        delay: index * 0.5,
                        repeat: Infinity,
                        repeatDelay: 4
                      }}
                    >
                      <stat.icon />
                    </motion.div>
                    <p className="text-base md:text-lg text-white leading-relaxed flex-1">
                      {stat.text}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}

            {/* Closing statement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
              className="pt-4"
            >
              <p className="text-purple-300/60 italic text-sm md:text-base">
                The system isn't broken for everyone. Just for the artists creating the value.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}