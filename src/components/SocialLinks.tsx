import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Instagram,
  Twitter,
  Github,
  AlignJustify as Spotify,
  Youtube,
  Heart,
  Linkedin,
} from "lucide-react";
import { socialLinks } from "../data/socialLinks";

const SocialLinks = () => {
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
    <section id="social" className="section bg-black">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          connect with me
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              className="bg-grey-dark rounded-lg p-6 transition-all duration-300 hover:bg-grey-medium hover:translate-y-[-5px] flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                {link.name === "instagram" && <Instagram size={30} />}
                {link.name === "twitter" && <Twitter size={30} />}
                {link.name === "github" && <Github size={30} />}
                {link.name === "spotify" && <Spotify size={30} />}
                {link.name === "linkedin" && <Linkedin size={30} />}
                {link.name === "support" && <Heart size={30} />}
              </div>
              <h3 className="text-xl font-medium mb-2">{link.title}</h3>
              <p className="text-grey-light text-sm">{link.description}</p>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 p-6 bg-grey-dark rounded-lg text-center"
        >
          <h3 className="text-2xl font-medium mb-4">
            support my creative journey
          </h3>
          <p className="text-grey-light mb-6">
            If you enjoy my content and want to support my creative endeavors,
            consider buying me a coffee!
          </p>
          <a
            href="https://ko-fi.com/chinmayy13"
            className="inline-block px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-grey-light transition-colors duration-300"
          >
            Buy Me a Ko-fi
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SocialLinks;
