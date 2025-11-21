import { motion } from 'motion/react';
import { Umbrella, Instagram, Music, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const footerLinks = [
    { label: 'About', href: '#' },
    { label: 'Vision', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'FAQ', href: '#' }
  ];

  const socialLinks = [
    { icon: Music, label: 'TikTok', href: '#' },
    { icon: Music, label: 'Spotify', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white py-16 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-violet-500 to-purple-500"
          animate={{
            background: [
              'linear-gradient(to right, #5B2C98, #8B4BFF, #5B2C98)',
              'linear-gradient(to right, #8B4BFF, #C7A3FF, #8B4BFF)',
              'linear-gradient(to right, #5B2C98, #8B4BFF, #5B2C98)'
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Logo and Tagline */}
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.button 
              onClick={scrollToTop}
              className="flex items-center justify-center md:justify-start mb-4 cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Umbrella className="w-8 h-8 text-white mr-3 group-hover:text-purple-300 transition-colors duration-300" />
              </motion.div>
              <span className="text-2xl text-white group-hover:text-purple-100 transition-colors duration-300">Umbrella</span>
            </motion.button>
            <p className="text-gray-400 text-sm max-w-xs">
              Umbrella — Empowering the next generation of artists.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <nav className="flex flex-wrap justify-center gap-6">
              {footerLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  whileHover={{ y: -2 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center md:justify-end space-x-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="w-10 h-10 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 rounded-full flex items-center justify-center transition-all duration-300 group shadow-lg"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-white" />
                
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-purple-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"
                />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-gray-800 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2025 Umbrella. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}