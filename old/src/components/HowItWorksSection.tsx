import { motion } from 'motion/react';
import { Users, Edit, Send, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: "Build Your List",
    description: "Import fans and followers directly from Umbrella, or sync with your socials.",
    step: "01"
  },
  {
    icon: Edit,
    title: "Customize Your Message", 
    description: "Add links, ticket promos, or media — your brand, your tone.",
    step: "02"
  },
  {
    icon: Send,
    title: "Blast It Out",
    description: "Send personalized texts to hundreds instantly with one click.",
    step: "03"
  },
  {
    icon: BarChart3,
    title: "Track Results",
    description: "See who engaged, clicked, or shared — all in real time.",
    step: "04"
  }
];

export function HowItWorksSection() {
  return (
    <section className="py-32 bg-white">
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
            Powerful, Simple, and
            <br />
            <span className="text-transparent bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 bg-clip-text">
              Built for Artists
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Send updates, promote events, or share your latest release — all from your Umbrella dashboard.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm group-hover:bg-purple-700 transition-colors duration-300">
                  {feature.step}
                </div>
              </div>

              {/* Icon Container */}
              <motion.div 
                className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center group-hover:from-purple-200 group-hover:to-purple-100 transition-all duration-300"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5 
                }}
              >
                <feature.icon className="w-8 h-8 text-purple-600 group-hover:text-purple-700" />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl mb-4 text-gray-900 text-center group-hover:text-purple-900 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-center text-sm">
                {feature.description}
              </p>

              {/* Hover Indicator */}
              <motion.div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full group-hover:w-16 w-0 transition-all duration-300"
              />

              {/* Subtle Hover Indicator */}
              <motion.div
                className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-all duration-500"
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-3 h-3 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full shadow-lg opacity-80" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { number: '99%', label: 'Delivery Rate', subtext: 'Messages delivered instantly' },
            { number: '45%', label: 'Open Rate', subtext: 'Higher than email marketing' },
            { number: '30s', label: 'Setup Time', subtext: 'From signup to first blast' }
          ].map((stat, index) => (
            <motion.div 
              key={stat.label} 
              className="p-6 bg-gray-50 rounded-2xl"
              whileHover={{ scale: 1.05 }}
            >
              <motion.h3 
                className="text-4xl mb-2 text-purple-600"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.h3>
              <p className="text-gray-900 mb-1">{stat.label}</p>
              <p className="text-gray-600 text-sm">{stat.subtext}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}