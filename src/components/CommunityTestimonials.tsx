import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Umbrella helped me fill a room, grow a fanbase, and keep every dollar of my art. It's the platform I wish existed when I was starting out.",
    author: "JibTheKidd",
    role: "Artist & Founder",
    location: "San Francisco, CA",
    avatar: "JK",
    rating: 5,
    color: "from-purple-500 to-violet-500"
  },
  {
    quote: "As a venue owner, Umbrella has streamlined our booking process and helped us discover incredible local talent. The text blast feature fills our shows.",
    author: "Maria Rodriguez",
    role: "Venue Owner",
    location: "The Independent",
    avatar: "MR",
    rating: 5,
    color: "from-violet-500 to-purple-500"
  },
  {
    quote: "The collaboration tools are game-changing. I've connected with producers and artists who truly understand my vision. My music career took off after joining.",
    author: "Alex Chen",
    role: "Electronic Producer",
    location: "Los Angeles, CA",
    avatar: "AC",
    rating: 5,
    color: "from-purple-600 to-pink-500"
  },
  {
    quote: "Umbrella's analytics showed me when and how to engage my fans. My show attendance increased by 300% in just three months.",
    author: "Taylor Swift Johnson",
    role: "Indie Artist",
    location: "Austin, TX",
    avatar: "TJ",
    rating: 5,
    color: "from-pink-500 to-purple-600"
  }
];

export function CommunityTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 bg-gradient-to-br from-purple-900 via-black to-purple-800 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139,75,255,0.1) 0%, transparent 70%)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(199,163,255,0.1) 0%, transparent 70%)'
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
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
            className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-purple-100 text-sm mb-6 border border-white/20"
          >
            <Quote className="w-4 h-4 mr-2 text-purple-300" />
            A Movement, Not Just a Platform
          </motion.div>

          <h2 className="text-4xl md:text-6xl mb-6 text-white leading-tight">
            Voices from the
            <br />
            <span className="text-transparent bg-gradient-to-r from-purple-200 to-violet-200 bg-clip-text">
              Umbrella Community
            </span>
          </h2>
        </motion.div>

        {/* Testimonial Display */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center"
            >
              {/* Quote */}
              <div className="relative mb-12">
                <Quote className="absolute -top-4 -left-4 w-16 h-16 text-purple-300/30" />
                <blockquote className="text-2xl md:text-4xl text-white leading-relaxed max-w-4xl mx-auto relative z-10">
                  "{currentTestimonial.quote}"
                </blockquote>
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <Star className="w-6 h-6 text-yellow-400 fill-current mx-1" />
                  </motion.div>
                ))}
              </div>

              {/* Author Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex items-center justify-center space-x-4"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${currentTestimonial.color} rounded-full flex items-center justify-center shadow-lg`}>
                  <span className="text-white text-xl">{currentTestimonial.avatar}</span>
                </div>
                <div className="text-left">
                  <div className="text-xl text-white">{currentTestimonial.author}</div>
                  <div className="text-purple-200">{currentTestimonial.role}</div>
                  <div className="text-purple-300 text-sm">{currentTestimonial.location}</div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-12 space-x-6">
            <motion.button
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Pagination Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-white scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {[
            { number: "2,500+", label: "Active Artists" },
            { number: "150+", label: "Partner Venues" },
            { number: "50k+", label: "Fans Connected" },
            { number: "95%", label: "Success Rate" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl text-white mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-purple-200 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}