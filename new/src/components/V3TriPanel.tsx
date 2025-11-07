import { useState } from 'react';
import { motion } from 'motion/react';
import { Mic2, Building2, Users } from 'lucide-react';

const personas = [
  {
    icon: Mic2,
    title: 'Artists',
    benefit: 'Promote your next show. Text your fans. Fill the room.',
    detail: 'Schedule text blasts, sell more tickets.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Building2,
    title: 'Venues',
    benefit: 'Discover artists who draw crowds, not just clicks.',
    detail: 'Sort artists by draw, not just streams.',
    color: 'from-pink-500 to-purple-500'
  },
  {
    icon: Users,
    title: 'Fans',
    benefit: 'Get closer to the creators you love.',
    detail: 'Early access to the culture.',
    color: 'from-blue-500 to-purple-500'
  }
];

export function V3TriPanel() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 md:py-32 lg:py-40 bg-gradient-to-b from-black via-purple-950/10 to-black overflow-hidden">
      
      {/* Ambient background glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(139, 75, 255, 0.4) 0%, transparent 70%)',
          filter: 'blur(120px)'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Built for{' '}
            <span className="bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent">
              Everyone
            </span>
          </h2>
          <p className="text-lg md:text-xl text-purple-200/70 max-w-2xl mx-auto">
            Whether you're creating, hosting, or experiencing live music — Umbrella connects you to what matters.
          </p>
        </motion.div>

        {/* Tri-Panel Cards - Desktop: side by side, Mobile: stacked */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-6 relative">
          {personas.map((persona, index) => {
            const Icon = persona.icon;
            const isHovered = hoveredIndex === index;
            const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

            return (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                  duration: 0.65,
                  delay: index * 0.12,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.div
                  className="glass-card backdrop-blur-lg bg-black/40 border border-purple-500/20 rounded-2xl p-8 md:p-10 h-full cursor-pointer overflow-hidden relative"
                  animate={{
                    opacity: isOtherHovered ? 0.7 : 1,
                    scale: isHovered ? 1.04 : 1,
                    y: isHovered ? -4 : 0
                  }}
                  transition={{ 
                    duration: 0.3,
                    ease: [0.45, 0, 0.55, 1]
                  }}
                  whileHover={{
                    boxShadow: '0 0 20px rgba(139, 75, 255, 0.25)',
                    borderColor: 'rgba(139, 75, 255, 0.5)'
                  }}
                >
                  {/* Icon with gradient background */}
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${persona.color} flex items-center justify-center mb-6`}
                    animate={isHovered ? { rotate: 8 } : { rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl text-white mb-4">
                    {persona.title}
                  </h3>

                  {/* Benefit */}
                  <p className="text-base md:text-lg text-purple-200/80 leading-relaxed mb-4">
                    {persona.benefit}
                  </p>

                  {/* Extra detail revealed on hover */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={isHovered ? { 
                      height: 'auto', 
                      opacity: 1 
                    } : { 
                      height: 0, 
                      opacity: 0 
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-purple-500/20">
                      <p className="text-sm md:text-base text-purple-300/70">
                        {persona.detail}
                      </p>
                      
                      {/* CTA */}
                      <motion.div
                        className="mt-4 text-purple-400 flex items-center gap-2 group"
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <span className="text-sm">Learn More</span>
                        <motion.svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          animate={{ x: [0, 4, 0] }}
                          transition={{ 
                            duration: 1.5, 
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M9 5l7 7-7 7" 
                          />
                        </motion.svg>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
