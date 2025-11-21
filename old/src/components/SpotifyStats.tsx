import { motion } from 'motion/react';

const stats = [
  {
    number: "500K+",
    label: "Active Artists"
  },
  {
    number: "2M+", 
    label: "Monthly Events"
  },
  {
    number: "$50M+",
    label: "Paid to Creators"
  }
];

export function SpotifyStats() {
  return (
    <section className="bg-gray-900 py-32 px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-16 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="space-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="text-6xl font-bold text-purple-400 leading-none">
                {stat.number}
              </div>
              <div className="text-xl text-white font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}