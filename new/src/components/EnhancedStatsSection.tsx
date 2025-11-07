import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

const statData = {
  number: "7M+",
  label: "Independent Artists", 
  subtext: "globally",
  targetValue: 7000000,
  suffix: "M+"
};

function CountingNumber({ 
  targetValue, 
  prefix = "", 
  suffix = "", 
  duration = 2000
}: {
  targetValue: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView && !isVisible) {
      setIsVisible(true);
      const increment = targetValue / (duration / 16);
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= targetValue) {
          setCount(targetValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, targetValue, duration, isVisible]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return Math.floor(num / 1000000);
    }
    return num.toLocaleString();
  };

  // Don't show anything until we have a meaningful count
  const displayValue = count < 1000000 ? "7" : formatNumber(count);

  return (
    <div 
      ref={ref}
      className="font-bold leading-none text-8xl lg:text-9xl text-[#8B4BFF]"
      style={{ lineHeight: 1, marginBottom: '24px' }}
    >
      {prefix}{displayValue}{suffix}
    </div>
  );
}

function SingleStatBlock() {
  return (
    <motion.div
      className="relative text-center max-w-md mx-auto"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        ease: [0.23, 1, 0.32, 1]
      }}
    >
      {/* Large Purple Glow Background */}
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(139, 75, 255, 0.2) 0%, transparent 70%)',
          filter: 'blur(120px)',
          opacity: 0.4,
          animation: 'glowPulse 4s ease-in-out infinite'
        }}
      />
      
      {/* Stat Content */}
      <div className="relative z-10">
        <CountingNumber
          targetValue={statData.targetValue}
          suffix={statData.suffix}
        />
        
        <div 
          className="font-regular text-white text-center mx-auto text-2xl lg:text-3xl max-w-[300px]"
          style={{ lineHeight: 1.3, marginBottom: '12px' }}
        >
          {statData.label}
        </div>
        
        <div 
          className="text-base lg:text-lg text-[#A78BFA] opacity-80"
          style={{ lineHeight: 1.4 }}
        >
          {statData.subtext}
        </div>
      </div>
    </motion.div>
  );
}

export function EnhancedStatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Scroll-based parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);
  
  return (
    <section 
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1A0F2E 0%, #2D1B4E 50%, #1A0F2E 100%)',
        padding: '100px 40px'
      }}
    >
      {/* Background Effects Layer */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        {/* Subtle animated background pattern */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{
            background: 'radial-gradient(circle at 20% 80%, rgba(139, 75, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(199, 163, 255, 0.08) 0%, transparent 50%)',
            scale: glowScale
          }}
        />
        
        {/* Animated glow orbs */}
        <motion.div 
          className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
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
      </motion.div>

      {/* Main Content Container */}
      <div 
        className="relative z-10 mx-auto"
        style={{ maxWidth: '800px' }}
      >
        <SingleStatBlock />
      </div>

      {/* Bottom Fade Effect */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(10, 10, 10, 0.1) 100%)'
        }}
      />
    </section>
  );
}

// Add the keyframe animation to the global styles
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes glowPulse {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.5; }
  }
`;

if (typeof document !== 'undefined') {
  document.head.appendChild(styleSheet);
}