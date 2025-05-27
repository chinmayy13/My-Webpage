import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shuffle } from 'lucide-react';
import { useMood } from '../contexts/MoodContext';

const quotes = [
  { text: "vibing in my own frequency", emoji: "🌌" },
  { text: "lost in the digital cosmos", emoji: "✨" },
  { text: "floating through the void", emoji: "🖤" },
  { text: "existing between pixels", emoji: "👾" },
];

const DigitalAura = () => {
  const { currentMood } = useMood();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [currentQuote, setCurrentQuote] = React.useState(quotes[0]);

  const shuffleQuote = () => {
    const newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setCurrentQuote(newQuote);
  };

  const scrollToRandomSection = () => {
    const sections = ['intro', 'memes', 'social', 'skills', 'volunteer', 'projects', 'vibes'];
    const randomSection = sections[Math.floor(Math.random() * sections.length)];
    const element = document.getElementById(randomSection);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const auraVariants = {
    chill: {
      scale: [1, 1.1, 1],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    },
    sad: {
      scale: [1, 1.05, 1],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
    },
    hype: {
      scale: [1, 1.2, 1],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <section className="section bg-black flex items-center justify-center">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.div 
          variants={auraVariants}
          animate={currentMood}
          className="relative w-64 h-64 mx-auto mb-12"
        >
          <div className="absolute inset-0 bg-grey-dark rounded-full opacity-10"></div>
          <div className="absolute inset-4 bg-grey-dark rounded-full opacity-20"></div>
          <div className="absolute inset-8 bg-grey-dark rounded-full opacity-30"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl">{currentQuote.emoji}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-2xl font-medium mb-4">{currentQuote.text}</p>
          <button
            onClick={shuffleQuote}
            className="px-6 py-3 bg-grey-dark hover:bg-grey-medium rounded-full transition-colors duration-300"
          >
            shuffle quote
          </button>
        </motion.div>

        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          onClick={scrollToRandomSection}
          className="flex items-center gap-2 mx-auto px-6 py-3 bg-grey-dark hover:bg-grey-medium rounded-full transition-colors duration-300"
        >
          <Shuffle size={18} />
          <span>random vibe</span>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default DigitalAura;