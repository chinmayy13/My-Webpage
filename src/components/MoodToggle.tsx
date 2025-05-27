import React from 'react';
import { motion } from 'framer-motion';
import { useMood } from '../contexts/MoodContext';

const MoodToggle = () => {
  const { currentMood, setMood } = useMood();

  const moods = [
    { name: 'chill', emoji: '😌', label: 'Chill' },
    { name: 'sad', emoji: '😔', label: 'Sad' },
    { name: 'hype', emoji: '🔥', label: 'Hype' },
  ];

  return (
    <div className="flex justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-grey-dark p-2 rounded-full flex items-center"
      >
        {moods.map((mood) => (
          <button
            key={mood.name}
            onClick={() => setMood(mood.name as any)}
            className={`relative px-4 py-2 rounded-full transition-all duration-300 flex items-center ${
              currentMood === mood.name 
                ? 'bg-grey-medium text-white' 
                : 'text-grey-light hover:text-white'
            }`}
          >
            <span className="mr-2">{mood.emoji}</span>
            <span>{mood.label}</span>
            {currentMood === mood.name && (
              <motion.div
                layoutId="moodIndicator"
                className="absolute inset-0 bg-grey-medium rounded-full z-[-1]"
                initial={false}
                transition={{ type: "spring", duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </motion.div>
    </div>
  );
};

export default MoodToggle;