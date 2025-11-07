import { motion } from 'motion/react';
import { Palette, Users, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Palette,
    title: "Create",
    description: "Build your portfolio, share your music, and let your art speak for itself.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Users,
    title: "Connect", 
    description: "Find artists, venues, and fans aligned with your style — powered by AI matchmaking.",
    gradient: "from-blue-500 to-purple-500"
  },
  {
    icon: TrendingUp,
    title: "Grow",
    description: "Access booking tools, marketing strategies, and AI insights to scale your career.",
    gradient: "from-green-500 to-blue-500"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2 
            className="text-5xl md:text-7xl mb-8 text-gray-900 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Everything You Need,
            <br />
            <span className="text-transparent bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 bg-clip-text">
              Under One Umbrella
            </span>
          </motion.h2>
        </div>

        {/* Three Column Features */}
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Icon Container */}
              <motion.div 
                className={`w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-300`}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5 
                }}
              >
                <feature.icon className="w-12 h-12 text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="text-3xl md:text-4xl mb-6 text-gray-900 tracking-tight">
                {feature.title}
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-sm mx-auto">
                {feature.description}
              </p>

              {/* Hover Indicator */}
              <motion.div
                className="mt-8 h-1 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full mx-auto"
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Visual Element */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-white rounded-full shadow-lg">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
            <span className="text-gray-600 text-sm">Seamlessly integrated</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}