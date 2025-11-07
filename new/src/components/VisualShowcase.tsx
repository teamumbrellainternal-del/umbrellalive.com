import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Play, Users, MapPin } from 'lucide-react';

const showcaseImages = [
  {
    url: "https://images.unsplash.com/photo-1669459881627-06c2a4948e33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGFydGlzdCUyMHBlcmZvcm1pbmclMjBjb25jZXJ0fGVufDF8fHx8MTc1OTU2MTU3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Live at The Independent — sold out",
    artist: "The Midnight Collective",
    venue: "The Independent, SF",
    attendance: "500+"
  },
  {
    url: "https://images.unsplash.com/photo-1549213783-8284d0336c4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZSUyMG11c2ljaWFuJTIwbGl2ZSUyMHNob3d8ZW58MXx8fHwxNzU5NTYxNTc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Intimate acoustic session",
    artist: "Luna Vista",
    venue: "Café Du Nord",
    attendance: "120"
  },
  {
    url: "https://images.unsplash.com/photo-1629276301625-8c74f25c0abd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHZlbnVlJTIwY29uY2VydCUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc1OTU2MTU4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Electronic fusion experience",
    artist: "Neon Synthesis",
    venue: "The Fillmore",
    attendance: "1,200"
  },
  {
    url: "https://images.unsplash.com/photo-1625320014712-cc333e4e93a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0dWRpbyUyMHJlY29yZGluZyUyMGFydGlzdHxlbnwxfHx8fDE3NTk1NjE0NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Studio session vibes",
    artist: "Velvet Underground Collective",
    venue: "Abbey Road Studios",
    attendance: "Recording"
  },
  {
    url: "https://images.unsplash.com/photo-1559228462-2c83b13b7b50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGZhbnMlMjBhdWRpZW5jZSUyMGVuZXJneXxlbnwxfHx8fDE3NTk1NjE0Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Fan energy at its peak",
    artist: "The Sound Rebels",
    venue: "Outside Lands",
    attendance: "15,000+"
  }
];

export function VisualShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateX(prev => {
        const newTranslate = prev - 1;
        // Reset when we've scrolled past all images
        if (Math.abs(newTranslate) >= showcaseImages.length * 400) {
          return 0;
        }
        return newTranslate;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-purple-50 rounded-full text-purple-700 text-sm mb-6 border border-purple-100"
          >
            <Play className="w-4 h-4 mr-2 text-purple-600" />
            See What's Possible
          </motion.div>

          <h2 className="text-4xl md:text-6xl mb-6 text-gray-900 leading-tight">
            <span className="text-transparent bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text">
              Real Artists.
            </span>
            <br />
            Real Success Stories.
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From intimate acoustic sessions to sold-out venues, discover the heartbeat of Umbrella's community.
          </p>
        </motion.div>
      </div>

      {/* Scrolling Gallery */}
      <div className="relative">
        <motion.div 
          className="flex space-x-8"
          style={{ 
            transform: `translateX(${translateX}px)`,
            width: `${(showcaseImages.length * 2) * 400}px` // Double for seamless loop
          }}
          transition={{ type: "linear" }}
        >
          {/* Render images twice for seamless scroll */}
          {[...showcaseImages, ...showcaseImages].map((image, index) => (
            <motion.div
              key={`${image.artist}-${index}`}
              className="relative flex-shrink-0 w-96 h-80 cursor-pointer group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: hoveredIndex === index ? 1 : 1, 
                      y: hoveredIndex === index ? 0 : 10 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl mb-2">{image.artist}</h3>
                    <p className="text-purple-200 text-sm mb-3">{image.caption}</p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-300">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3" />
                        <span>{image.venue}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span>{image.attendance}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Hover Play Button */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0,
                    scale: hoveredIndex === index ? 1 : 0.8
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient Fade Edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
      </div>

      {/* Bottom Quote */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 mt-16 text-center"
      >
        <blockquote className="text-2xl md:text-3xl text-gray-700 italic mb-6 leading-relaxed">
          "Umbrella helped me fill shows and meet collaborators who actually get my sound. 
          It's not just a platform — it's a movement."
        </blockquote>
        <div className="flex items-center justify-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center">
            <span className="text-white text-lg">JK</span>
          </div>
          <div className="text-left">
            <div className="text-gray-900">JibTheKidd</div>
            <div className="text-purple-600 text-sm">SF-based Artist & Producer</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}