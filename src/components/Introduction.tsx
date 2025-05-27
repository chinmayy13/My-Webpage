import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MusicPlayer from "./MusicPlayer";
import MoodToggle from "./MoodToggle";
import { useMood } from "../contexts/MoodContext";

const Introduction = () => {
  const { getMoodEmoji, getMoodDescription, getMoodSong } = useMood();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const song = getMoodSong();

  return (
    <section id="intro" className="section flex flex-col justify-center">
      <div
        className="absolute inset-0 bg-gradient-to-b from-black to-grey-dark opacity-50 z-0"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(100%) brightness(0.4) contrast(1.2)",
          mixBlendMode: "multiply",
        }}
      />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="z-10 max-w-3xl mx-auto text-center"
      >
        <div className="mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block text-6xl mb-4"
          >
            {getMoodEmoji()}
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold mb-2">
            hey, i'm chinmay
          </h1>
          <p className="text-grey-light text-xl mb-6">{getMoodDescription()}</p>
        </div>

        <MoodToggle />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12"
        >
          <blockquote className="quote mb-8">
            "not everything that is faced can be changed, but nothing can be
            changed until it is faced."
          </blockquote>
          <p className="text-grey-medium mb-12">— james baldwin</p>

          <div className="mx-auto">
            <MusicPlayer title={song.title} artist={song.artist} />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
      >
        <p className="text-grey-medium mb-2"></p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Introduction;
