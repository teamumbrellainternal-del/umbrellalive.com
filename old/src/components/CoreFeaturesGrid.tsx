import { motion } from 'motion/react';
import { MessageSquare, User, Users, TrendingUp, Mic, Calendar, DollarSign, Heart } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: "Text Blasts",
    description: "Reach your fans instantly and track engagement in real-time.",
    gradient: "from-purple-500 to-violet-600",
    hoverGradient: "from-purple-600 to-violet-700"
  },
  {
    icon: User,
    title: "Artist Portfolio",
    description: "Your art, your bio, your bookings — in one professional profile.",
    gradient: "from-violet-500 to-purple-600",
    hoverGradient: "from-violet-600 to-purple-700"
  },
  {
    icon: Users,
    title: "Collaboration Tools",
    description: "Find artists, producers, and venues aligned with your style.",
    gradient: "from-purple-600 to-pink-600",
    hoverGradient: "from-purple-700 to-pink-700"
  },
  {
    icon: TrendingUp,
    title: "Analytics & Growth",
    description: "Smart AI insights to help you plan, post, and grow.",
    gradient: "from-pink-500 to-purple-600",
    hoverGradient: "from-pink-600 to-purple-700"
  },
  {
    icon: Calendar,
    title: "Smart Booking",
    description: "Streamlined venue booking and event management.",
    gradient: "from-violet-600 to-indigo-600",
    hoverGradient: "from-violet-700 to-indigo-700"
  },
  {
    icon: DollarSign,
    title: "Revenue Tools",
    description: "Monetize your art with built-in payment and tip systems.",
    gradient: "from-purple-500 to-blue-600",
    hoverGradient: "from-purple-600 to-blue-700"
  }
];

export function CoreFeaturesGrid() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-violet-500 to-purple-500" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-violet-500 to-purple-500" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-purple-50 rounded-full text-purple-700 text-sm mb-6 border border-purple-100"
          >
            <Heart className="w-4 h-4 mr-2 text-purple-600" />
            Built for Artists Who Deserve More
          </motion.div>

          <h2 className="text-4xl md:text-6xl mb-6 text-gray-900 leading-tight">
            Everything You Need to
            <br />
            <span className="text-transparent bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text">
              Build Your Career
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Umbrella connects artists, venues, and fans under one platform — helping creators earn, 
            collaborate, and grow with tools designed for the modern music era.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group cursor-pointer"
              >
                <div className="relative p-8 bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Gradient border on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                  <div className="absolute inset-[2px] bg-white rounded-2xl" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 5 }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl mb-4 text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-4">
            Ready to experience the future of music collaboration?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Mic className="w-5 h-5 mr-2" />
            Start Building Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}