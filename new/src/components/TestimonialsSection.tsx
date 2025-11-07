import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Umbrella } from 'lucide-react';

const testimonials = [
  {
    name: "Maya Rodriguez",
    role: "Indie Singer",
    location: "San Francisco, CA",
    quote: "Umbrella helped me land my first paying gig — I finally feel seen as an artist.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "The Groove House",
    role: "Venue Owner",
    location: "Bay Area, CA",
    quote: "Our venue filled seats faster than ever with Umbrella bookings.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Jake Thompson",
    role: "Electronic Producer",
    location: "Brooklyn, NY",
    quote: "The AI-powered marketing tools increased my streams by 300%. Umbrella isn't just a platform, it's my career partner.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Sophia Chen",
    role: "Singer-Songwriter",
    location: "Nashville, TN",
    quote: "From booking to payments to promotion, everything I need is under one umbrella. It's revolutionizing how I run my music business.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Red Door Studios",
    role: "Recording Studio",
    location: "Seattle, WA",
    quote: "Umbrella connected us with artists who perfectly match our vibe. The collaboration network has doubled our bookings.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 to-purple-100">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-6 text-gray-900">
            Loved by 
            <span className="text-purple-600"> Artists & Venues</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from artists, venues, and creators who are thriving under the Umbrella
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
              <Umbrella className="w-full h-full text-purple-600" />
            </div>

            {/* Current Testimonial */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="text-center relative z-10"
            >
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-2xl text-gray-800 mb-8 leading-relaxed italic">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              {/* Avatar and Info */}
              <div className="flex items-center justify-center space-x-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative"
                >
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-purple-200"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                    <Umbrella className="w-3 h-3 text-white" />
                  </div>
                </motion.div>
                <div className="text-left">
                  <h4 className="text-lg text-gray-900">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-purple-600">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-purple-100 hover:bg-purple-200 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-purple-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-purple-100 hover:bg-purple-200 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6 text-purple-600" />
            </button>
          </motion.div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-purple-600 w-8' 
                    : 'bg-purple-300 hover:bg-purple-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center"
        >
          {[
            { stat: "98%", label: "Artist Satisfaction" },
            { stat: "4.9/5", label: "Platform Rating" },
            { stat: "2M+", label: "Gigs Booked" }
          ].map((item, index) => (
            <div key={index} className="bg-white/70 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl text-purple-600 mb-2">{item.stat}</div>
              <div className="text-gray-700">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}