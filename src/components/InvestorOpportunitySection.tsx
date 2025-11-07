import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { TrendingUp, DollarSign, Users } from 'lucide-react';

export function InvestorOpportunitySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-gradient-to-b from-black via-purple-950/5 to-black overflow-hidden"
    >
      {/* Background ambient elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 right-1/4 w-96 h-96 opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(139, 75, 255, 0.3) 0%, transparent 70%)',
            filter: 'blur(100px)'
          }}
        />
      </div>

      <motion.div 
        className="relative z-10 max-w-6xl mx-auto px-6 md:px-10"
        style={{ y }}
      >
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl text-white mb-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Why Now?
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-purple-200/70 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The infrastructure hasn't evolved — the opportunity has.
          </motion.p>
        </motion.div>

        {/* Infographics Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Pie Chart - Independent Market Share */}
          <motion.div
            className="glass-card backdrop-blur-md bg-purple-950/20 border border-purple-500/20 rounded-2xl p-8 md:p-10"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            whileHover={{ 
              scale: 1.02,
              borderColor: 'rgba(139, 75, 255, 0.4)',
              transition: { duration: 0.2 }
            }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl text-white mb-2">Independent Market Share</h3>
                <p className="text-sm text-purple-300/60">Music industry ownership distribution</p>
              </div>
            </div>

            {/* Pie Chart Visualization */}
            <div className="relative flex items-center justify-center h-64 my-8">
              <svg className="w-48 h-48" viewBox="0 0 200 200">
                {/* Background circle */}
                <circle cx="100" cy="100" r="80" fill="#1a0a2e" />
                
                {/* Independent share - 46.7% */}
                <motion.circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="transparent"
                  stroke="#8B4BFF"
                  strokeWidth="20"
                  strokeDasharray="329"
                  strokeDashoffset="0"
                  initial={{ strokeDashoffset: 329 }}
                  whileInView={{ strokeDashoffset: 329 - (329 * 0.467) }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  transform="rotate(-90 100 100)"
                />
                
                {/* Major labels share */}
                <motion.circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="transparent"
                  stroke="#5B2C98"
                  strokeWidth="20"
                  strokeDasharray="329"
                  strokeDashoffset="0"
                  initial={{ strokeDashoffset: 0 }}
                  whileInView={{ strokeDashoffset: -(329 * 0.467) }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  transform="rotate(-90 100 100)"
                />
                
                {/* Center percentage */}
                <text x="100" y="95" textAnchor="middle" className="text-3xl fill-white font-bold">
                  46.7%
                </text>
                <text x="100" y="115" textAnchor="middle" className="text-xs fill-purple-300">
                  Independent
                </text>
              </svg>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-500" />
                <span className="text-purple-200">Independent (46.7%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-800" />
                <span className="text-purple-200">Major Labels (53.3%)</span>
              </div>
            </div>
          </motion.div>

          {/* Bar Graph - Revenue vs Artist Share */}
          <motion.div
            className="glass-card backdrop-blur-md bg-purple-950/20 border border-purple-500/20 rounded-2xl p-8 md:p-10"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            whileHover={{ 
              scale: 1.02,
              borderColor: 'rgba(139, 75, 255, 0.4)',
              transition: { duration: 0.2 }
            }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl text-white mb-2">The Gap</h3>
                <p className="text-sm text-purple-300/60">Revenue growth vs artist income</p>
              </div>
            </div>

            {/* Bar Chart Visualization */}
            <div className="space-y-8 my-8">
              {/* Industry Revenue */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-purple-200">Industry Revenue Growth</span>
                  <span className="text-sm text-purple-400">+6.5% YoY</span>
                </div>
                <div className="relative h-12 bg-purple-950/40 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full flex items-center justify-end pr-4"
                    initial={{ width: 0 }}
                    whileInView={{ width: '85%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <motion.div
                      className="flex items-center gap-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1.2 }}
                    >
                      <DollarSign className="w-4 h-4 text-white" />
                      <span className="text-sm text-white">$36.2B</span>
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Artist Income */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-purple-200">Artist Income Growth</span>
                  <span className="text-sm text-red-400">Flat since 2017</span>
                </div>
                <div className="relative h-12 bg-purple-950/40 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-gray-600 to-gray-500 rounded-full flex items-center justify-end pr-4"
                    initial={{ width: 0 }}
                    whileInView={{ width: '35%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <motion.div
                      className="flex items-center gap-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1.4 }}
                    >
                      <span className="text-sm text-white">0%</span>
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Artist Revenue Share */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-purple-200">Artist Revenue Share</span>
                  <span className="text-sm text-purple-400">13%</span>
                </div>
                <div className="relative h-12 bg-purple-950/40 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-400 to-purple-300 rounded-full flex items-center justify-end pr-4"
                    initial={{ width: 0 }}
                    whileInView={{ width: '13%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1.6 }}
                    >
                      <span className="text-xs text-white">13¢</span>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Closing statement */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-base md:text-lg text-purple-300/70 italic">
            The opportunity isn't in the revenue — it's in redistributing it fairly.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
