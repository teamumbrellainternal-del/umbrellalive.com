import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { Info } from 'lucide-react';

const statsData = [
  {
    value: '8.2M',
    label: 'Self-releasing artists worldwide',
    source: 'MIDiA Research (2024) — "The State of the Independent Music Economy"',
    hoverText: 'Eight million artists. No label. No middleman. Just belief.',
    hoverSubtext: 'Every voice under its own Umbrella.',
    year: '2024'
  },
  {
    value: '$14.3B',
    label: 'Independent & non-major music revenue',
    source: 'MIDiA Market Share Report (2023)',
    hoverText: '$14 billion in value built outside the majors.',
    hoverSubtext: 'Proof that independence isn\'t a niche — it\'s the movement.',
    year: '2023'
  },
  {
    value: '13%',
    label: 'Average artist revenue share',
    source: 'Citigroup "Music Money Flows" Report (2017, 2024 update)',
    hoverText: 'For every dollar made in music, artists see thirteen cents.',
    hoverSubtext: 'The industry grew. Their cut didn\'t.',
    year: '2024'
  },
  {
    value: '$36.2B',
    label: 'Global music revenue (+6.5% YoY)',
    source: 'IFPI Global Music Report (2024)',
    hoverText: 'The industry keeps growing year after year.',
    hoverSubtext: 'So why does the artist\'s share stay the same?',
    year: '2024'
  },
  {
    value: '47%',
    label: 'Market share owned by independents',
    source: 'Hypebot / MIDiA (2024)',
    hoverText: 'Nearly half the music you hear belongs to independents.',
    hoverSubtext: 'The culture is indie — the infrastructure isn\'t.',
    year: '2024'
  },
  {
    value: '250 = $1',
    label: 'What 250 streams earn an artist',
    source: 'Spotify / Digital Music News (2024 payout analysis)',
    hoverText: 'Two-hundred and fifty plays for a single dollar.',
    hoverSubtext: 'It\'s not about talent — it\'s about the system. Umbrella was built to rebalance it.',
    year: '2024'
  }
];

function StatCard({ 
  stat, 
  index 
}: { 
  stat: typeof statsData[0]; 
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94] // easeInOutCubic
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="glass-card backdrop-blur-md bg-black/40 border border-purple-500/20 rounded-2xl p-6 md:p-8 h-full cursor-pointer relative overflow-visible"
        initial={{ opacity: 0.4 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: index * 0.15 }}
        whileHover={{ 
          boxShadow: '0 0 14px rgba(139, 75, 255, 0.25)',
          borderColor: 'rgba(139, 75, 255, 0.5)',
          transition: { duration: 0.3, ease: [0.45, 0, 0.55, 1] } // easeOutSine
        }}
      >
        <div className="space-y-4">
          {/* Large stat value with pulse animation */}
          <motion.div 
            className="text-5xl md:text-6xl lg:text-7xl bg-gradient-to-br from-white via-purple-100 to-purple-300 bg-clip-text text-transparent relative"
            initial={{ scale: 1 }}
            whileInView={{ 
              scale: [1, 1.03, 1]
            }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.4,
              delay: index * 0.15 + 0.1,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            animate={isHovered ? { opacity: 1 } : { opacity: 0.9 }}
          >
            {stat.value}
            
            {/* Soundwave icon that oscillates on hover */}
            {isHovered && (
              <motion.div
                className="absolute -right-2 top-1/2 -translate-y-1/2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  animate={{ 
                    scaleY: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="flex gap-0.5"
                >
                  {[...Array(3)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-0.5 h-3 bg-purple-400 rounded-full"
                      style={{ 
                        height: `${8 + i * 2}px`,
                        animationDelay: `${i * 0.1}s`
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            )}
          </motion.div>
          
          {/* Label with info icon */}
          <div className="flex items-start justify-between gap-2">
            <p className="text-sm md:text-base text-purple-200/80 leading-snug tracking-wide">
              {stat.label}
            </p>
            
            {/* Tooltip trigger */}
            <div className="relative">
              <motion.div
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                className="flex-shrink-0 cursor-help"
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  animate={showTooltip ? { 
                    opacity: [0.2, 0.6, 0.2]
                  } : {}}
                  transition={{ 
                    duration: 2, 
                    repeat: showTooltip ? Infinity : 0 
                  }}
                >
                  <Info className="w-4 h-4 text-purple-400/60 hover:text-purple-400" />
                </motion.div>
              </motion.div>
              
              {/* Tooltip popup */}
              {showTooltip && (
                <motion.div
                  className="absolute bottom-full right-0 mb-2 w-64 z-50"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ 
                    duration: 0.25, 
                    delay: 0.05,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  <div 
                    className="backdrop-blur-xl rounded-xl p-3 shadow-lg border"
                    style={{
                      background: 'rgba(15, 15, 25, 0.8)',
                      borderColor: 'rgba(255, 255, 255, 0.12)',
                      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    <p className="text-xs text-white/90" style={{ fontWeight: 300 }}>
                      {stat.source}
                    </p>
                  </div>
                  {/* Arrow */}
                  <div 
                    className="absolute top-full right-4 w-0 h-0"
                    style={{
                      borderLeft: '6px solid transparent',
                      borderRight: '6px solid transparent',
                      borderTop: '6px solid rgba(15, 15, 25, 0.8)'
                    }}
                  />
                </motion.div>
              )}
            </div>
          </div>

          {/* Hover text overlay */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={isHovered ? { 
              opacity: 1, 
              height: 'auto'
            } : { 
              opacity: 0, 
              height: 0
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-2 border-t border-purple-500/20 space-y-1">
              <p className="text-xs md:text-sm text-purple-100/90 italic">
                {stat.hoverText}
              </p>
              <p className="text-xs text-purple-300/70">
                {stat.hoverSubtext}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Special effect for 13% card - show "87% missing" line */}
        {stat.value === '13%' && isHovered && (
          <motion.div
            className="absolute inset-0 pointer-events-none flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="text-xs text-red-400/60 absolute bottom-4 left-8"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              87% missing
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

export function ByTheNumbersSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Background moves at 0.6× scroll speed for parallax depth
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]); // 60% of 20%
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.4]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 md:py-40 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #000000 0%, #1a0a2e 20%, #2d1654 50%, #1a0a2e 80%, #000000 100%)'
      }}
    >
      {/* Animated background elements - slow wave drift */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: backgroundY, opacity }}
      >
        {/* Top spotlight */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(139, 75, 255, 0.15) 0%, transparent 70%)',
            filter: 'blur(100px)'
          }}
        />
        
        {/* Bottom spotlight */}
        <div 
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px]"
          style={{
            background: 'radial-gradient(circle, rgba(199, 163, 255, 0.1) 0%, transparent 70%)',
            filter: 'blur(120px)'
          }}
        />

        {/* Subtle ambient soundwave pulse - ultra-slow drift */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center opacity-5"
          animate={{ x: [0, 25, 0] }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: [0.45, 0, 0.55, 1] // easeInOutSine
          }}
        >
          <div className="flex items-end gap-2 h-64">
            {[...Array(60)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 bg-purple-400 rounded-full"
                animate={{ 
                  height: ['30%', `${Math.random() * 70 + 30}%`, '30%']
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.02,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 0.8, 
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            By The{' '}
            <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-purple-400 bg-clip-text text-transparent">
              Numbers
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-purple-200/70 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The data tells the story artists have been living for years.
          </motion.p>
        </motion.div>

        {/* Stats Grid - 3×2 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {statsData.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>

        {/* Closing Statement - fades in after last card */}
        <motion.div
          className="text-center mt-16 md:mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.6, 
            delay: 0.9, // After all 6 cards
            ease: [0.23, 1, 0.32, 1] // easeOutQuint
          }}
        >
          <motion.p 
            className="text-lg md:text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed"
            whileInView={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{
              backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(199,163,255,1) 50%, rgba(255,255,255,0.9) 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Umbrella exists so creators finally get more than 13%.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}