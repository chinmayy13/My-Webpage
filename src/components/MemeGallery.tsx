import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import MusicPlayer from './MusicPlayer';
import { memeData } from '../data/memeData';

const MemeGallery = () => {
  const [currentMemeIndex, setCurrentMemeIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const handleNextMeme = () => {
    setCurrentMemeIndex((prev) => (prev + 1) % memeData.memes.length);
  };

  const handlePrevMeme = () => {
    setCurrentMemeIndex((prev) => 
      prev === 0 ? memeData.memes.length - 1 : prev - 1
    );
  };

  const currentMeme = memeData.memes[currentMemeIndex];

  return (
    <section id="memes" className="section bg-grey-dark">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">memes & vibes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col">
            <h3 className="text-2xl font-medium mb-6">today's mood</h3>
            
            <motion.div 
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-black p-6 rounded-lg mb-8"
            >
              <div className="relative aspect-square overflow-hidden rounded-lg mb-6">
                <img 
                  src={currentMeme.imageUrl} 
                  alt={currentMeme.caption}
                  className="w-full h-full object-cover filter grayscale"
                />
              </div>
              
              <p className="text-grey-light text-lg italic mb-2">{currentMeme.caption}</p>
              
              <div className="flex justify-between mt-4">
                <button 
                  onClick={handlePrevMeme}
                  className="px-4 py-2 bg-grey-dark hover:bg-grey-medium rounded-full transition-colors"
                >
                  Previous
                </button>
                <button 
                  onClick={handleNextMeme}
                  className="px-4 py-2 bg-grey-dark hover:bg-grey-medium rounded-full transition-colors"
                >
                  Next
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-black p-6 rounded-lg"
            >
              <h3 className="text-2xl font-medium mb-4">quote of the day</h3>
              <blockquote className="text-xl md:text-2xl font-light italic text-grey-light mb-4">
                "{memeData.quoteOfDay.text}"
              </blockquote>
              <p className="text-grey-medium text-right">— {memeData.quoteOfDay.author}</p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="bg-black p-6 rounded-lg"
          >
            <h3 className="text-2xl font-medium mb-6">character vibe</h3>
            
            <div className="mb-6">
              <div className="aspect-square max-w-[300px] mx-auto overflow-hidden rounded-lg mb-6">
                <img 
                  src={memeData.heroCharacter.imageUrl} 
                  alt={memeData.heroCharacter.name}
                  className="w-full h-full object-cover filter grayscale"
                />
              </div>
              
              <h4 className="text-xl font-medium mb-2">{memeData.heroCharacter.name}</h4>
              <blockquote className="text-xl italic text-grey-light mb-6">
                "{memeData.heroCharacter.quote}"
              </blockquote>
            </div>
            
            <MusicPlayer 
              title={memeData.heroCharacter.themeSong.title} 
              artist={memeData.heroCharacter.themeSong.artist} 
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default MemeGallery;