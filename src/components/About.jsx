import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[200px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full bg-gradient-to-r from-green-200 via-yellow-200 to-blue-200 p-[2px] rounded-xl shadow-card"
    >
      <div
        className="bg-gradient-to-r from-indigo-900 via-purple-1000 to-pink-900 p-5 rounded-xl py-6 px-8 min-h-[250px] flex flex-col justify-center items-center"
      >
        <img
          src={icon}
          alt={title}
          className="w-20 h-20 mb-4 object-contain"
        />
        <h3 className="text-white-800 text-lg font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mb-12">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.5, 1)}
        className="mt-4 text-gray-300 text-lg max-w-3xl leading-8"
      >
        I am a native of Jodhpur, Rajasthan, currently in the final year of my B.Tech program at the <b>Indian Institute of Technology Jodhpur (IIT Jodhpur)</b>. I have accumulated three years of experience in software development and engineering, including two years of freelance work and one year of professional experience.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
