import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';

interface MusicPlayerProps {
  title: string;
  artist: string;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ title, artist }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsPlaying(false);
  }, [title, artist]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <motion.div 
          className="vinyl-record"
          animate={{ 
            rotate: isPlaying ? 360 : 0,
            transition: {
              rotate: {
                duration: 6,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop"
              }
            }
          }}
          style={{
            transformOrigin: 'center center'
          }}
        >
          <div className="vinyl-grooves"></div>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 
                     flex items-center justify-center rounded-full bg-grey-dark hover:bg-grey-medium 
                     transition-all duration-300 z-20 shadow-lg hover:scale-105"
            style={{
              backdropFilter: 'blur(5px)'
            }}
          >
            {isPlaying ? (
              <Pause size={24} className="text-white" />
            ) : (
              <Play size={24} className="text-white ml-1" />
            )}
          </button>
        </motion.div>
      </div>
      
      <motion.div 
        className="text-center mt-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-xl font-medium text-white mb-1">{title}</h3>
        <p className="text-grey-medium">{artist}</p>
      </motion.div>
    </div>
  );
};

export default MusicPlayer;