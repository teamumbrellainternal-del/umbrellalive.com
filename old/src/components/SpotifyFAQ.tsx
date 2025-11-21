import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What makes Umbrella different from other creator platforms?",
    answer: "Umbrella is specifically designed for live music creators. We focus on direct fan communication, event coordination, and the unique needs of artists, venues, and music communities. Our text blast feature alone has helped thousands of artists sell out shows."
  },
  {
    question: "How does the text blast feature work?",
    answer: "Text blasts allow you to send direct messages to your fan base instantly. Fans opt-in to receive updates from you, and you can send announcements about new shows, releases, or exclusive content. It's like having a direct line to everyone who cares about your music."
  },
  {
    question: "Can I use Umbrella if I'm just starting out?",
    answer: "Absolutely! Our free plan is perfect for emerging artists. You get access to basic portfolio tools, limited text blasts, and community features. As your career grows, you can upgrade to unlock more powerful features."
  },
  {
    question: "How do you handle fan data and privacy?",
    answer: "We take privacy seriously. All fan data is encrypted and stored securely. Fans control their own subscriptions and can opt-out at any time. We never sell data to third parties and comply with all major privacy regulations."
  },
  {
    question: "Is there a mobile app?",
    answer: "Coming soon!!"
  }
];

export function SpotifyFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-[#0A0A0A] py-[120px] px-10 lg:px-16 overflow-hidden">
      {/* Decorative Background Elements */}
      {/* Ultra-subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 49px,
              rgba(139, 75, 255, 0.03) 49px,
              rgba(139, 75, 255, 0.03) 50px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 49px,
              rgba(139, 75, 255, 0.03) 49px,
              rgba(139, 75, 255, 0.03) 50px
            )
          `
        }}
      />
      
      {/* Purple Glow Orbs */}
      <div className="absolute top-[10%] right-[-10%] w-[400px] h-[400px] pointer-events-none opacity-60">
        <div 
          className="w-full h-full blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(139, 75, 255, 0.08) 0%, transparent 70%)'
          }}
        />
      </div>
      <div className="absolute bottom-[20%] left-[-15%] w-[400px] h-[400px] pointer-events-none opacity-60">
        <div 
          className="w-full h-full blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(139, 75, 255, 0.08) 0%, transparent 70%)'
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative max-w-[900px] mx-auto z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-20%' }}
          transition={{ 
            duration: 0.8, 
            ease: [0.4, 0, 0.2, 1] 
          }}
        >
          <h2 
            className="text-white mx-auto max-w-[700px]"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: '-0.02em'
            }}
          >
            Frequently asked questions
          </h2>
          
          {/* Optional Subheadline */}
          <motion.p
            className="text-[#A78BFA] mt-4 opacity-90"
            style={{
              fontSize: '20px',
              lineHeight: 1.5,
              fontWeight: 400
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.9, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Everything you need to know about Umbrella
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`
                relative border-b transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                ${openIndex === index 
                  ? 'border-[rgba(139,75,255,0.3)] bg-[rgba(139,75,255,0.04)] border-l-2 border-l-[#8B4BFF] pl-6 -ml-8' 
                  : 'border-[rgba(167,139,250,0.12)] hover:border-[rgba(167,139,250,0.25)]'
                }
              `}
              style={{
                padding: '32px 0'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.08,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="group w-full flex items-center justify-between text-left py-2 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
                style={{ gap: '24px' }}
              >
                {/* Question Text */}
                <span 
                  className="text-white transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:text-[#C7A3FF] group-hover:tracking-[0.01em]"
                  style={{
                    fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                    fontWeight: 700,
                    lineHeight: 1.4
                  }}
                >
                  {faq.question}
                </span>
                
                {/* Icon Container */}
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-110 group-hover:rotate-90">
                  {openIndex === index ? (
                    <Minus 
                      className="text-[#8B4BFF] group-hover:text-[#9D5FFF] transition-colors duration-300" 
                      style={{ width: '24px', height: '24px', strokeWidth: 2 }}
                    />
                  ) : (
                    <Plus 
                      className="text-[#8B4BFF] group-hover:text-[#9D5FFF] transition-colors duration-300" 
                      style={{ width: '24px', height: '24px', strokeWidth: 2 }}
                    />
                  )}
                </div>
              </button>

              {/* Hover Background Effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(139, 75, 255, 0.03) 50%, transparent 100%)'
                }}
              />
              
              {/* Answer Panel */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ 
                      height: 0, 
                      opacity: 0, 
                      y: -10 
                    }}
                    animate={{ 
                      height: 'auto', 
                      opacity: 1, 
                      y: 0 
                    }}
                    exit={{ 
                      height: 0, 
                      opacity: 0, 
                      y: -10 
                    }}
                    transition={{ 
                      duration: 0.4, 
                      ease: [0.4, 0, 0.2, 1] 
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 pb-8 max-w-[800px]">
                      <p 
                        className="text-[#A78BFA] opacity-95"
                        style={{
                          fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                          lineHeight: 1.7,
                          fontWeight: 400
                        }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </section>
  );
}