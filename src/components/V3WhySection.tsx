import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const storyMessages = [
  "The music industry grew.",
  "The artist's share didn't.",
  "We're here to change that."
];

const artistImages = [
  "https://images.unsplash.com/photo-1666102723236-682f868c84bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3RzJTIwY29sbGFib3JhdGlvbiUyMHN0dWRpbyUyMHJlY29yZGluZ3xlbnwxfHx8fDE3NTk2MTgxMDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1657705887441-789baa183f69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRpbWF0ZSUyMGFjb3VzdGljJTIwcGVyZm9ybWFuY2UlMjBESiUyMHNldHxlbnwxfHx8fDE3NTk2MTgxMDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1661222871415-a4482781a7b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpY2lhbiUyMGJhY2tzdGFnZSUyMGJlaGluZCUyMHNjZW5lcyUyMGNhbmRpZHxlbnwxfHx8fDE3NTk2MTgxMDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1758550445980-4d099c6de8d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwY29uY2VydCUyMGVuZXJneSUyMHN0YWdlJTIwbGlnaHRzJTIwY3Jvd2R8ZW58MXx8fHwxNzU5NjE4MTAzfDA&ixlib=rb-4.1.0&q=80&w=1080"
];

export function V3WhySection() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const leftY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const rightY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % storyMessages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-b from-black via-purple-950/20 to-black"
    >
      {/* Background fade-in */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT - Looping Artist Collage */}
          <motion.div 
            className="relative"
            style={{ y: leftY }}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="grid grid-cols-2 gap-4">
              {artistImages.map((img, index) => (
                <motion.div
                  key={index}
                  className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
                  onMouseEnter={() => setHoveredImage(index)}
                  onMouseLeave={() => setHoveredImage(null)}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <ImageWithFallback
                    src={img}
                    alt={`Artist ${index + 1}`}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Overlay label on hover */}
                  {hoveredImage === index && (
                    <motion.div
                      className="absolute bottom-4 left-4 text-white text-sm"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      Real artists. Real shows.
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT - Story Copy */}
          <motion.div 
            className="space-y-8"
            style={{ y: rightY }}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl text-white leading-tight"
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              For the Creators Who{' '}
              <span className="bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent">
                Deserve More
              </span>
            </motion.h2>

            {/* Rotating headline messages */}
            <div className="relative h-32 md:h-24">
              {storyMessages.map((message, index) => (
                <motion.p
                  key={index}
                  className="absolute inset-0 text-2xl md:text-3xl lg:text-4xl text-purple-100 italic"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: currentMessageIndex === index ? 1 : 0
                  }}
                  transition={{ 
                    duration: currentMessageIndex === index ? 0.25 : 0.2,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  {message}
                </motion.p>
              ))}
            </div>

            {/* Story paragraph */}
            <motion.div
              className="space-y-4 text-base md:text-lg text-purple-200/80 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p>
                The music industry has grown to $36.2 billion. Streaming revenue is at an all-time high. 
                Yet independent artists — the majority of music creators — still earn just 13% of every dollar made.
              </p>
              <p>
                Umbrella was built to rebalance the equation. We give artists the tools to own their audience, 
                promote their shows, and get paid fairly for their work.
              </p>
              <p className="text-purple-300/70">
                No middlemen. No gatekeepers. Just artists and the fans who support them.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
