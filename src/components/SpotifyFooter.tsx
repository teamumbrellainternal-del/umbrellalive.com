import { motion } from 'motion/react';
import { Instagram, Twitter, Linkedin, Youtube, Umbrella } from 'lucide-react';

const footerLinks = {
  company: [
    "About",
    "Jobs", 
    "Press",
    "Contact"
  ],
  communities: [
    "Artists",
    "Venues",
    "Fans",
    "Partners"
  ],
  useful: [
    "Support",
    "Plans",
    "Mobile App",
    "Features"
  ],
  resources: [
    "Blog",
    "Guides", 
    "API Docs",
    "Status"
  ]
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" }
];

const legalLinks = [
  "Privacy",
  "Terms", 
  "Cookies"
];

export function SpotifyFooter() {
  return (
    <footer className="relative bg-black border-t border-purple-200/10 py-20 px-10 overflow-hidden">
      {/* Animated gradient sweep background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: `linear-gradient(
            90deg,
            transparent 0%,
            rgba(139, 75, 255, 0.15) 50%,
            transparent 100%
          )`
        }}
        animate={{
          x: ['-100%', '200%']
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Subtle purple glow orbs */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        style={{
          background: 'radial-gradient(circle, rgba(139, 75, 255, 0.3) 0%, transparent 70%)',
          filter: 'blur(120px)'
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Logo and tagline */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Umbrella Logo with Rotation */}
            <motion.div
              className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #8B4BFF 0%, #5B2C98 100%)',
                boxShadow: '0 8px 32px rgba(139, 75, 255, 0.4)'
              }}
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              whileHover={{ 
                scale: 1.1,
                rotate: 15,
                transition: { duration: 0.3 }
              }}
            >
              <Umbrella 
                className="w-10 h-10 text-white" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              />
            </motion.div>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Umbrella
          </motion.h2>
          
          <motion.p
            className="text-body-large text-purple-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Everything you create, connected under one Umbrella.
          </motion.p>
        </motion.div>

        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {/* Social icons - spans 2 columns */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-sm font-bold tracking-widest text-purple-400 uppercase mb-4">
                Connect
              </h3>
              
              {/* Social icons */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-purple-300 hover:text-white hover:bg-purple-500 transition-all duration-300"
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.1 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.15,
                      y: -3,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Company links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-sm font-bold tracking-widest text-purple-400 uppercase mb-4">
              Company
            </h3>
            <div className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <motion.a
                  key={link}
                  href="#"
                  className="block text-body text-purple-200 hover:text-white transition-colors duration-200 relative group"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                  whileHover={{ x: 5 }}
                >
                  {link}
                  <motion.span
                    className="absolute left-0 bottom-0 h-0.5 bg-purple-400"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Communities links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-sm font-bold tracking-widest text-purple-400 uppercase mb-4">
              Communities
            </h3>
            <div className="space-y-3">
              {footerLinks.communities.map((link, index) => (
                <motion.a
                  key={link}
                  href="#"
                  className="block text-body text-purple-200 hover:text-white transition-colors duration-200"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  whileHover={{ x: 5 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Useful links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-sm font-bold tracking-widest text-purple-400 uppercase mb-4">
              Useful Links
            </h3>
            <div className="space-y-3">
              {footerLinks.useful.map((link, index) => (
                <motion.a
                  key={link}
                  href="#"
                  className="block text-body text-purple-200 hover:text-white transition-colors duration-200"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  whileHover={{ x: 5 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Resources links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-sm font-bold tracking-widest text-purple-400 uppercase mb-4">
              Resources
            </h3>
            <div className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <motion.a
                  key={link}
                  href="#"
                  className="block text-body text-purple-200 hover:text-white transition-colors duration-200"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                  whileHover={{ x: 5 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="border-t border-purple-200/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* Legal links */}
          <div className="flex space-x-6">
            {legalLinks.map((link, index) => (
              <motion.a
                key={link}
                href="#"
                className="text-small text-purple-300 hover:text-white transition-colors duration-200"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {link}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.div 
            className="text-small text-purple-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            © 2024 Umbrella. All rights reserved.
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}