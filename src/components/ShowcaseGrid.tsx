import { motion } from 'motion/react';
import { Play, Heart, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const artistStories = [
  {
    name: 'Luna Waves',
    quote: 'I booked my first sold-out show using Umbrella — it\'s more than an app, it\'s my team.',
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBzaW5nZXIlMjBwZXJmb3JtaW5nfGVufDF8fHx8MTc1OTU1NzMzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    genre: 'Indie Pop',
    achievement: '50K streams in first month'
  },
  {
    name: 'Vince Charming',
    quote: 'Umbrella connected me with producers who understood my vision. Game changer.',
    location: 'Los Angeles, CA', 
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwbXVzaWNpYW4lMjBwZXJmb3JtaW5nfGVufDF8fHx8MTc1OTU1NzMzNHww&ixlib=rb-4.1.0&q=80&w=1080',
    genre: 'R&B Soul',
    achievement: 'Sold out venue debut'
  },
  {
    name: 'Electric Bloom',
    quote: 'The collaboration features helped me find my perfect bandmates.',
    location: 'Austin, TX',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljJTIwbXVzaWMlMjBwcm9kdWNlcnxlbnwxfHx8fDE3NTk1NTczMzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    genre: 'Electronic',
    achievement: '3 venue partnerships'
  }
];

export function ShowcaseGrid() {
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
            See What's Possible
            <br />
            <span className="text-transparent bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 bg-clip-text">
              with Umbrella
            </span>
          </motion.h2>
        </div>

        {/* Artist Stories */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {artistStories.map((artist, index) => (
            <motion.div
              key={artist.name}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl hover:shadow-3xl transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-purple-900/20" />
              </div>

              {/* Content */}
              <div className="relative p-8 h-96 flex flex-col justify-end">
                {/* Play Button Overlay */}
                <motion.div 
                  className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Play className="w-6 h-6 text-white ml-1" />
                </motion.div>

                {/* Genre Badge */}
                <div className="absolute top-6 left-6">
                  <span className="px-3 py-1 bg-purple-500/80 backdrop-blur-sm text-white text-sm rounded-full">
                    {artist.genre}
                  </span>
                </div>

                {/* Achievement Badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 bg-green-500/80 backdrop-blur-sm text-white text-sm rounded-full">
                    <Heart className="w-4 h-4 mr-1" />
                    {artist.achievement}
                  </span>
                </div>

                {/* Quote */}
                <blockquote className="text-white text-lg mb-4 leading-relaxed">
                  "{artist.quote}"
                </blockquote>

                {/* Artist Info */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white text-xl mb-1">{artist.name}</h3>
                    <p className="text-purple-200 text-sm">{artist.location}</p>
                  </div>
                  
                  <motion.div
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </motion.div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <motion.div
                className="absolute inset-0 border-2 border-purple-400/0 rounded-3xl group-hover:border-purple-400/50 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 text-lg mb-6">
            Ready to write your success story?
          </p>
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join the Community
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}