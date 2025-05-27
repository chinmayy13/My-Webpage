import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';
import { volunteerWork } from '../data/volunteerWork';

const VolunteerWork = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="volunteer" className="section bg-black">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">giving back</h2>
        
        <div className="space-y-8">
          {volunteerWork.map((work, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-grey-dark p-6 rounded-lg"
            >
              <div className="flex flex-col md:flex-row md:items-center mb-4 gap-4">
                <div className="text-4xl">{work.emoji}</div>
                <div>
                  <h3 className="text-2xl font-medium">{work.organization}</h3>
                  <p className="text-grey-medium">{work.role}</p>
                </div>
              </div>
              
              <p className="text-grey-light mb-6">{work.description}</p>
              
              {work.link && (
                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white hover:text-grey-light transition-colors"
                >
                  Learn more <ExternalLink size={16} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 p-6 bg-grey-dark rounded-lg text-center"
        >
          <h3 className="text-2xl font-medium mb-4">support causes i care about</h3>
          <p className="text-grey-light mb-6">
            If you'd like to join me in making a difference, consider supporting these organizations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {volunteerWork.map((work, index) => (
              work.donationLink && (
                <a
                  key={index}
                  href={work.donationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-black hover:bg-grey-medium rounded-full transition-colors"
                >
                  {work.organization}
                </a>
              )
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default VolunteerWork;