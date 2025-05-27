import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { profileData } from '../data/profileData';

const ProfileVibes = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <section id="vibes" className="section bg-black">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">profile vibes</h2>
        
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-grey-dark p-6 rounded-lg text-center mb-12"
        >
          <h3 className="text-2xl font-medium mb-2">vibe meter</h3>
          <div className="text-4xl mb-4">{profileData.vibeMeter.emoji}</div>
          <div className="text-3xl font-bold mb-2">{profileData.vibeMeter.percentage}</div>
          <p className="text-grey-light">{profileData.vibeMeter.description}</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="bg-grey-dark p-6 rounded-lg"
          >
            <h3 className="text-2xl font-medium mb-6">badges</h3>
            
            <div className="flex flex-wrap gap-3">
              {profileData.badges.map((badge) => (
                <motion.div
                  key={badge.name}
                  variants={item}
                  className="bg-black px-4 py-2 rounded-full flex items-center gap-2"
                >
                  <span>{badge.emoji}</span>
                  <span>{badge.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="bg-grey-dark p-6 rounded-lg"
          >
            <h3 className="text-2xl font-medium mb-6">recommendations</h3>
            
            <div className="space-y-6">
              {profileData.recommendations.map((rec, index) => (
                <motion.div key={index} variants={item}>
                  <h4 className="text-lg font-medium flex items-center gap-2">
                    <span>{rec.emoji}</span>
                    <span>{rec.category}</span>
                  </h4>
                  <ul className="mt-2 space-y-2">
                    {rec.items.map((item, idx) => (
                      <li key={idx} className="text-grey-light">
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 bg-grey-dark p-6 rounded-lg"
        >
          <h3 className="text-2xl font-medium mb-6">current obsessions</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {profileData.currentObsessions.map((obsession, index) => (
              <div 
                key={index} 
                className="bg-black p-4 rounded-lg text-center"
              >
                <div className="text-2xl mb-2">{obsession.emoji}</div>
                <h4 className="text-lg font-medium">{obsession.name}</h4>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProfileVibes;