import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const artistImages = [
  {
    url: "https://images.unsplash.com/photo-1669459881627-06c2a4948e33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwbXVzaWMlMjBjb25jZXJ0JTIwYXJ0aXN0JTIwcGVyZm9ybWluZ3xlbnwxfHx8fDE3NTk1NjE0NzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Live at The Independent — sold out"
  },
  {
    url: "https://images.unsplash.com/photo-1625320014712-cc333e4e93a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0dWRpbyUyMHJlY29yZGluZyUyMGFydGlzdHxlbnwxfHx8fDE3NTk1NjE0NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Behind the scenes — creating magic"
  },
  {
    url: "https://images.unsplash.com/photo-1621407808155-770a27217758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHZlbnVlJTIwY29uY2VydCUyMGNyb3dkfGVufDF8fHx8MTc1OTU2MTQ3NXww&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Energy you can feel"
  },
  {
    url: "https://images.unsplash.com/photo-1728767594728-3b30574eb23b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpY2lhbiUyMGd1aXRhciUyMHNpbmdlcnxlbnwxfHx8fDE3NTk1NjE0Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Authentic artist connections"
  },
  {
    url: "https://images.unsplash.com/photo-1559228462-2c83b13b7b50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGZhbnMlMjBhdWRpZW5jZSUyMGVuZXJneXxlbnwxfHx8fDE3NTk1NjE0Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Fans connecting with artists"
  }
];

export function SlidingArtistHero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % artistImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const scrollToExplore = () => {
    const textBlastSection = document.getElementById('text-blast-feature');
    if (textBlastSection) {
      textBlastSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-black to-purple-800">
      {/* Sliding Background Images */}
      <div className="absolute inset-0 w-full h-full">
        <motion.div 
          className="flex h-full"
          animate={{ x: `-${currentImageIndex * 100}%` }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{ width: `${artistImages.length * 100}%` }}
        >
          {artistImages.map((image, index) => (
            <div 
              key={index}
              className="relative h-full flex-shrink-0"
              style={{ width: `${100 / artistImages.length}%` }}
              onMouseEnter={() => setHoveredImage(index)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <ImageWithFallback
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover"
              />
              
              {/* Image overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-black/60 to-purple-800/80" />
              
              {/* Depth blur effect */}
              <div className="absolute inset-0 backdrop-blur-[1px]" />
              
              {/* Hover caption */}
              <AnimatePresence>
                {hoveredImage === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="absolute bottom-8 left-8 text-white/90 text-lg"
                  >
                    {image.caption}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Main Headlines */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-8 text-white leading-[0.9] tracking-tight">
            Create. Connect.
            <br />
            <span className="text-transparent bg-gradient-to-r from-purple-200 via-white to-purple-100 bg-clip-text">
              Get Paid.
            </span>
            <br />
            <span className="text-purple-300">
              All Under One Umbrella.
            </span>
          </h1>

          <motion.p 
            className="text-xl md:text-2xl text-purple-100 mb-12 leading-relaxed opacity-90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            A platform designed to empower artists and venues to grow, 
            collaborate, and build real communities.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
              >
                Join Umbrella Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline"
                size="lg"
                onClick={scrollToExplore}
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 px-8 py-4 text-lg rounded-full transition-all duration-300"
              >
                <Play className="mr-2 w-5 h-5" />
                Explore How It Works
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
}