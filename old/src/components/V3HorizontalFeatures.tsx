import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { BarChart3, MessageSquare, Sparkles } from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: 'Artist Dashboard',
    description: 'Track your shows, audience growth, and revenue in one place.',
    detail: 'Real-time analytics that help you understand your fanbase and make smarter decisions.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: MessageSquare,
    title: 'Text Blasts',
    description: 'Reach your fans instantly with direct text message campaigns.',
    detail: 'No algorithms. No middlemen. Just you and the people who care about your music.',
    gradient: 'from-blue-500 to-purple-500'
  },
  {
    icon: Sparkles,
    title: 'Violet Copilot',
    description: 'AI-powered assistant that helps you promote smarter and faster.',
    detail: 'Get personalized suggestions for show promotion, fan engagement, and marketing strategy.',
    gradient: 'from-purple-600 to-purple-400'
  }
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const Icon = feature.icon;

  return (
    <motion.div
      className="min-w-[90vw] md:min-w-[600px] lg:min-w-[700px] snap-center"
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      <motion.div
        className="glass-card backdrop-blur-xl bg-black/50 border border-purple-500/20 rounded-3xl p-8 md:p-12 h-full group cursor-pointer"
        whileHover={{ 
          scale: 1.02,
          borderColor: 'rgba(139, 75, 255, 0.5)',
          transition: { duration: 0.3 }
        }}
      >
        {/* Icon */}
        <motion.div
          className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6`}
          whileHover={{ rotate: 8 }}
          transition={{ duration: 0.3 }}
        >
          <Icon className="w-10 h-10 text-white" />
        </motion.div>

        {/* Title */}
        <h3 className="text-3xl md:text-4xl text-white mb-4">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-lg md:text-xl text-purple-200/80 leading-relaxed mb-6">
          {feature.description}
        </p>

        {/* Detail */}
        <p className="text-base text-purple-300/60 leading-relaxed mb-8">
          {feature.detail}
        </p>

        {/* CTA with underline effect */}
        <motion.div className="relative inline-flex items-center gap-2 text-purple-400">
          <span className="text-base">Preview in Umbrella</span>
          <svg 
            className="w-5 h-5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
          
          {/* Underline from center out */}
          <motion.div
            className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-purple-400"
            initial={{ width: 0 }}
            whileHover={{ width: '100%' }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          />
        </motion.div>

        {/* Demo overlay hint on hover */}
        <motion.div
          className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600/5 to-transparent pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}

export function V3HorizontalFeatures() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundShift = useTransform(
    scrollYProgress,
    [0, 1],
    ['0deg', '6deg']
  );

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #000000 0%, #1a0a2e 50%, #000000 100%)'
      }}
    >
      {/* Background gradient with subtle rotation */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: `linear-gradient(${backgroundShift}, rgba(139, 75, 255, 0.1) 0%, transparent 100%)`
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-12">
        
        {/* Section Header - Pinned */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            The{' '}
            <span className="bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-lg md:text-xl text-purple-200/70 max-w-2xl mx-auto">
            Everything you need to promote, perform, and profit — built for the way artists actually work.
          </p>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          <div className="flex gap-6 md:gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>

          {/* Scroll hint indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {features.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-purple-400/30"
              />
            ))}
          </div>
        </div>

        {/* Mobile swipe hint */}
        <motion.p
          className="text-center text-sm text-purple-400/50 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ← Swipe to explore →
        </motion.p>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}