import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { createPortal } from 'react-dom';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Google Apps Script URL for waitlist submission
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzZ9KVpz163DCHb1Oo2U-oz8MCLTk2LU8Bt2RizeTSpZpYRg0iwnVNJS9ROgi94eWqd/exec';

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [portalElement] = useState<HTMLElement | null>(() => {
    if (typeof document === 'undefined') {
      return null;
    }

    const element = document.createElement('div');
    element.setAttribute('id', 'waitlist-modal-root');
    element.style.position = 'relative';
    element.style.zIndex = '2147483647';
    element.style.isolation = 'isolate';
    return element;
  });

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  useEffect(() => {
    if (!portalElement || typeof document === 'undefined') {
      return;
    }

    document.body.appendChild(portalElement);

    return () => {
      if (portalElement.parentNode) {
        portalElement.parentNode.removeChild(portalElement);
      }
    };
  }, [portalElement]);

  useEffect(() => {
    if (!isMounted || !isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMounted, isOpen]);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: email.trim(),
          timestamp: new Date().toISOString(),
          source: 'umbrellalive.com'
        })
      });

      let data = {};
      try {
        data = await response.json();
      } catch (err) {
        console.warn('Non-JSON response from server');
      }

      if (!response.ok || ((data as any).status && (data as any).status >= 400)) {
        throw new Error((data as any).message || `Request failed: ${response.status}`);
      }

      setIsSuccess(true);
      setTimeout(() => {
        handleClose();
      }, 3000);
    } catch (error) {
      console.error('Submission error:', error);
      if (error instanceof TypeError) {
        setError('Could not connect to the waitlist service. Please check your connection and try again.');
      } else {
        setError('Something went wrong. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setEmail('');
    setError(null);
    setIsSuccess(false);
    setIsLoading(false);
    onClose();
  };

  if (!isMounted || !portalElement) {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay - SOLID BLACK, NO TRANSPARENCY */}
          <div
            className="fixed inset-0 bg-black z-[2147483646]"
            onClick={handleClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[2147483647] flex items-center justify-center px-4 sm:px-6 py-8">
            <motion.div
              className="relative w-full max-w-[420px] sm:max-w-[480px] md:max-w-[520px] lg:max-w-[560px] xl:max-w-[600px] bg-[#0f0f0f] rounded-3xl border border-purple-500/20 shadow-2xl"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-purple-500/20 transition-all duration-200 group"
                aria-label="Close"
              >
                <svg
                  className="w-5 h-5 text-purple-200 group-hover:text-white transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="p-6 sm:p-8">
                {/* Success State */}
                {isSuccess ? (
                  <motion.div
                    className="text-center py-8"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                    >
                      <svg
                        className="w-10 h-10 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-3">You're on the list!</h3>
                    <p className="text-purple-200/80 text-base">
                      We'll be in touch soon with exclusive early access.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    {/* Header */}
                    <div className="text-center mb-8">
                      <motion.div
                        className="text-5xl mb-4"
                        animate={{
                          rotate: [0, -5, 5, -5, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{
                          duration: 0.6,
                          ease: [0.34, 1.56, 0.64, 1]
                        }}
                      >
                        ☂️
                      </motion.div>
                      <h2 className="text-3xl font-bold text-white mb-3">Join the Waitlist</h2>
                      <p className="text-purple-200/70 text-base">
                        Be the first to know when Umbrella launches. Get early access and exclusive updates.
                      </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm text-purple-200/90 font-medium block">
                          Email address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-black border-purple-500/30 focus:border-purple-400 focus-visible:border-purple-400 text-white placeholder:text-purple-300/60 rounded-xl h-16 px-4"
                          required
                          disabled={isLoading}
                          autoComplete="email"
                          inputMode="email"
                        />
                      </div>

                      {/* Error message */}
                      {error && (
                        <motion.div
                          className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-300 text-sm"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                          <span>{error}</span>
                        </motion.div>
                      )}

                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-white text-black hover:bg-white/90 rounded-xl h-12 text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg
                              className="animate-spin h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                            Submitting...
                          </span>
                        ) : (
                          'Join Waitlist'
                        )}
                      </Button>

                      <p className="text-xs text-purple-300/50 text-center pt-2">
                        We respect your privacy. No spam, ever. Unsubscribe anytime.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    portalElement
  );
}
