import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Quote, Play } from 'lucide-react';

const visualTestimonials = [
  {
    image: "https://images.unsplash.com/photo-1669459881627-06c2a4948e33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwbXVzaWMlMjBjb25jZXJ0JTIwYXJ0aXN0JTIwcGVyZm9ybWluZ3xlbnwxfHx8fDE3NTk1NjE0NzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    quote: "Umbrella helped me sell out my first show.",
    author: "Maya Chen",
    role: "Indie Artist",
    context: "Live performance"
  },
  {
    image: "https://images.unsplash.com/photo-1625320014712-cc333e4e93a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0dWRpbyUyMHJlY29yZGluZyUyMGFydGlzdHxlbnwxfHx8fDE3NTk1NjE0NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    quote: "Finally, a platform that puts artists first.",
    author: "Jordan Rivers",
    role: "Producer",
    context: "Studio session"
  },
  {
    image: "https://images.unsplash.com/photo-1559228462-2c83b13b7b50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGZhbnMlMjBhdWRpZW5jZSUyMGVuZXJneXxlbnwxfHx8fDE3NTk1NjE0Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    quote: "I met my next bandmate through Umbrella.",
    author: "Alex Thompson",
    role: "Drummer",
    context: "Fan connection"
  },
  {
    image: "https://images.unsplash.com/photo-1621407808155-770a27217758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHZlbnVlJTIwY29uY2VydCUyMGNyb3dkfGVufDF8fHx8MTc1OTU2MTQ3NXww&ixlib=rb-4.1.0&q=80&w=1080",
    quote: "My fanbase grew 400% in three months.",
    author: "Luna Vista",
    role: "Singer-Songwriter",
    context: "Venue collaboration"
  },
  {
    image: "https://images.unsplash.com/photo-1549213783-8284d0336c4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZSUyMG11c2ljaWFuJTIwbGl2ZSUyMHNob3d8ZW58MXx8fHwxNzU5NTYxNTc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    quote: "Text blasts filled every show I announced.",
    author: "The Midnight Collective",
    role: "Electronic Duo",
    context: "Acoustic performance"
  }
];

export function VisualTestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [translateX, setTranslateX] = useState(0);
  const [isScrolling, setIsScrolling] = useState(true);

  useEffect(() => {
    if (!isScrolling) return;
    
    const interval = setInterval(() => {
      setTranslateX(prev => {
        const newTranslate = prev - 0.3; // Reduced speed
        // Reset when we've scrolled past all images
        if (Math.abs(newTranslate) >= visualTestimonials.length * 500) {
          return 0;
        }
        return newTranslate;
      });
    }, 80); // Further reduced frequency

    return () => clearInterval(interval);
  }, [isScrolling]);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % visualTestimonials.length);
    }, 6000);

    return () => clearInterval(testimonialInterval);
  }, []);

  return (
    <section id="visual-showcase" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2 
            className="text-4xl md:text-6xl mb-6 text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="text-transparent bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text">
              Real Stories.
            </span>
            <br />
            Real Success.
          </motion.h2>

          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Discover how artists are building careers and communities with Umbrella.
          </motion.p>
        </motion.div>
      </div>

      {/* Parallax Visual Gallery */}
      <div className="relative h-96 mb-16">
        <motion.div 
          className="flex space-x-8 h-full"
          style={{ 
            transform: `translateX(${translateX}px)`,
            width: `${(visualTestimonials.length * 2) * 500}px`
          }}
          transition={{ type: "linear" }}
        >
          {/* Render images twice for seamless scroll */}
          {[...visualTestimonials, ...visualTestimonials].map((item, index) => (
            <motion.div
              key={`${item.author}-${index}`}
              className="relative flex-shrink-0 w-96 h-80 cursor-pointer group"
              onMouseEnter={() => {
                setHoveredIndex(index);
                setIsScrolling(false);
              }}
              onMouseLeave={() => {
                setHoveredIndex(null);
                setIsScrolling(true);
              }}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src={item.image}
                  alt={`${item.author} - ${item.context}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                {/* Dynamic gradient overlay based on hover */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0.7
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Quote overlay on hover */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 30 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex items-center justify-center p-6"
                    >
                      <div className="bg-purple-900/90 backdrop-blur-sm rounded-2xl p-6 text-center max-w-sm">
                        <Quote className="w-8 h-8 text-purple-300 mx-auto mb-3" />
                        <blockquote className="text-white text-lg mb-4 leading-relaxed">
                          "{item.quote}"
                        </blockquote>
                        <div className="text-purple-200">
                          <div>{item.author}</div>
                          <div className="text-sm text-purple-300">{item.role}</div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Play button overlay */}
                <motion.div
                  className="absolute top-4 right-4"
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    scale: hoveredIndex === index ? 1 : 0.8
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </motion.div>

                {/* Bottom info overlay */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6 text-white"
                  animate={{
                    opacity: hoveredIndex === index ? 0 : 1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-lg mb-1">{item.author}</h3>
                  <p className="text-purple-200 text-sm">{item.context}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient fade edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
      </div>

      {/* Featured Testimonial */}
      <div className="max-w-4xl mx-auto px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="text-center bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
          >
            <Quote className="w-12 h-12 text-purple-300 mx-auto mb-6" />
            
            <blockquote className="text-2xl md:text-3xl text-gray-700 italic mb-6 leading-relaxed">
              "{visualTestimonials[currentIndex].quote}"
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center">
                <span className="text-white text-lg">
                  {visualTestimonials[currentIndex].author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="text-left">
                <div className="text-gray-900">{visualTestimonials[currentIndex].author}</div>
                <div className="text-purple-600 text-sm">{visualTestimonials[currentIndex].role}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Testimonial pagination */}
        <div className="flex justify-center mt-8 space-x-2">
          {visualTestimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-purple-600 scale-125' 
                  : 'bg-gray-300 hover:bg-purple-300'
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}