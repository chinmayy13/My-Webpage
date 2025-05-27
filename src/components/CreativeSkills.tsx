import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { creativeSkills } from "../data/creativeSkills";

const CreativeSkills = () => {
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
    hidden: { x: -20, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };

  return (
    <section id="skills" className="section bg-grey-dark">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          creative skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="bg-black p-6 rounded-lg"
          >
            <h3 className="text-2xl font-medium mb-6">digital vibes</h3>

            <div className="space-y-6">
              {creativeSkills.digital.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={item}
                  className="skill-item"
                >
                  <span className="text-2xl">{skill.emoji}</span>
                  <div>
                    <h4 className="text-lg font-medium">{skill.name}</h4>
                    <p className="text-grey-light">{skill.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="bg-black p-6 rounded-lg"
          >
            <h3 className="text-2xl font-medium mb-6">offline talents</h3>

            <div className="space-y-6">
              {creativeSkills.offline.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={item}
                  className="skill-item"
                >
                  <span className="text-2xl">{skill.emoji}</span>
                  <div>
                    <h4 className="text-lg font-medium">{skill.name}</h4>
                    <p className="text-grey-light">{skill.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-grey-light italic">
            "creativity is intelligence having fun"
          </p>
          <p className="text-grey-medium mt-2">— albert einstein</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CreativeSkills;
