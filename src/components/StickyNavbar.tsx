import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { Menu, X, Umbrella } from 'lucide-react';
import { useWaitlist } from '../context/WaitlistContext';

export function StickyNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openWaitlist } = useWaitlist();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
  };

  const handleCreateClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Scroll to the final CTA section (sign up area)
    const ctaSection = document.querySelector('#final-cta') || document.querySelector('.btn-primary');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
  };

  const handleWaitlistClick = (e?: React.MouseEvent) => {
    e?.preventDefault();
    openWaitlist();
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 spotify-nav transition-all duration-300 ${
        isScrolled ? 'scrolled' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 flex items-center justify-between h-20">
        {/* Logo - Left Aligned */}
        <div className="flex items-center flex-shrink-0">
          <button 
            onClick={scrollToTop}
            className="text-lg lg:text-xl text-white hover:text-purple-400 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded-lg px-3 py-2 hover-scale"
            aria-label="Return to top"
          >
            <Umbrella className="w-6 h-6" />
          </button>
        </div>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex items-center space-x-10 absolute left-1/2 transform -translate-x-1/2">
          <a href="#features" className="text-white hover:text-purple-300 transition-all duration-300">Features</a>
          <a href="#discover" className="text-white hover:text-purple-300 transition-all duration-300">Discover</a>
          <a href="#create" onClick={handleCreateClick} className="text-white hover:text-purple-300 transition-all duration-300 cursor-pointer">Create</a>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            type="button"
            onClick={handleWaitlistClick}
            className="text-white hover:text-purple-300 transition-all duration-300"
          >
            Log in
          </button>
          <Button
            onClick={handleWaitlistClick}
            className="bg-white text-black hover:bg-purple-100 transition-all duration-300 hover:scale-105 py-3 px-8 rounded-full"
          >
            Sign up free
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10 p-6 space-y-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <a href="#features" className="block text-white hover:text-gray-300 transition-colors duration-300">Features</a>
            <a href="#discover" className="block text-white hover:text-gray-300 transition-colors duration-300">Discover</a>
            <a href="#create" onClick={handleCreateClick} className="block text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer">Create</a>
            <div className="pt-4 space-y-3">
              <button
                type="button"
                onClick={handleWaitlistClick}
                className="block w-full text-left text-white hover:text-gray-300 transition-colors duration-300"
              >
                Log in
              </button>
              <Button
                onClick={handleWaitlistClick}
                className="w-full bg-white text-black hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-all duration-300"
              >
                Sign up free
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}