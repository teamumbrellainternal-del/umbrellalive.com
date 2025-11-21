import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { MessageCircle, User, Users, BarChart, DollarSign, Heart } from 'lucide-react';

const features = [
  {
    icon: MessageCircle,
    title: "Reach Your Fans Directly",
    description: "Send text blasts and updates directly to your fanbase",
    link: "Learn more"
  },
  {
    icon: User,
    title: "Build Your Portfolio", 
    description: "Create a professional profile that showcases your art",
    link: "Learn more"
  },
  {
    icon: Users,
    title: "Collaboration Hub",
    description: "Find and work with other artists, venues, and producers", 
    link: "Learn more"
  },
  {
    icon: BarChart,
    title: "Smart Analytics",
    description: "Understand your audience with powerful insights",
    link: "Learn more"
  },
  {
    icon: DollarSign,
    title: "Get Paid",
    description: "Monetize your art and keep what you earn",
    link: "Learn more"
  },
  {
    icon: Heart,
    title: "Community Tools",
    description: "Build and engage your community in one place",
    link: "Learn more"
  }
];

export function SpotifyFeaturesGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Scroll-based parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);
  
  return (
    <section ref={sectionRef} className="relative bg-black py-32 px-10 overflow-hidden">
      {/* Subtle background gradient */}
      <motion.div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ y: contentY }}
      >
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139, 75, 255, 0.2) 0%, transparent 70%)',
            filter: 'blur(120px)'
          }}
        />
      </motion.div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
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
            Everything you need to grow
          </motion.h2>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="spotify-card h-full group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              {/* Icon */}
              <motion.div 
                className="mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-colors duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/50">
                  <feature.icon className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                </div>
              </motion.div>

              {/* Title */}
              <h3 className="text-h5 text-white mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-body text-purple-200 mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Learn more link */}
              <motion.a 
                href="#"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold transition-colors group/link relative"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                {feature.link}
                <motion.span 
                  className="ml-2 inline-block"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
                {/* Underline animation */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-purple-400"
                  initial={{ width: 0 }}
                  whileHover={{ width: "80%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}