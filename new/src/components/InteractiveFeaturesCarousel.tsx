import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { MessageSquare, User, Users, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: "Text Blasts",
    description: "Reach your fans instantly and grow engagement.",
    gradient: "from-[#5B2C98] to-[#8B4BFF]"
  },
  {
    icon: User,
    title: "Artist Portfolio",
    description: "Your digital creative home and professional profile.",
    gradient: "from-[#8B4BFF] to-[#C7A3FF]"
  },
  {
    icon: Users,
    title: "Collaboration Tools",
    description: "Find and work with artists, producers, and venues.",
    gradient: "from-[#5B2C98] to-[#C7A3FF]"
  },
  {
    icon: TrendingUp,
    title: "Growth Tools",
    description: "AI insights that help you plan, post, and get paid.",
    gradient: "from-[#8B4BFF] to-[#5B2C98]"
  }
];

export function InteractiveFeaturesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="core-features" className="section-padding bg-[#F6F6F6] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center component-spacing"
        >
          <motion.h2 
            className="text-section text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Everything You Need to
            <br />
            <span className="bg-gradient-to-r from-[#5B2C98] to-[#8B4BFF] bg-clip-text text-transparent">
              Build Your Career
            </span>
          </motion.h2>

          <motion.p 
            className="text-body-large text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Professional tools designed for the modern music creator.
          </motion.p>
        </motion.div>

        {/* Horizontal Scrolling Cards */}
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              const isActive = index === activeIndex;
              const isHovered = false; // We'll use CSS hover instead for better performance
              
              return (
                <motion.div
                  key={feature.title}
                  className="flex-shrink-0 w-80 h-96 relative bg-white rounded-2xl cursor-pointer group snap-start"
                  onMouseEnter={() => setActiveIndex(index)}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  {/* Gradient border effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 rounded-2xl transition-opacity duration-300 group-hover:opacity-100`} />
                  <div className="absolute inset-[2px] bg-white rounded-2xl" />
                  
                  {/* Card Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-feature text-gray-900 mb-4">
                        {feature.title}
                      </h3>
                      
                      <p className="text-body text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                    
                    {/* Hover indicator */}
                    <div className="mt-auto">
                      <div className={`w-8 h-1 bg-gradient-to-r ${feature.gradient} rounded-full transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                    </div>
                  </div>
                  
                  {/* Subtle shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-100/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              );
            })}
          </div>
          
          {/* Progress dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-[#5B2C98] scale-110' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}