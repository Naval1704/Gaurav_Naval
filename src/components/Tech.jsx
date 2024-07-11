import React from "react";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const TechCard = ({ index, icon, name }) => (
  <Tilt
    options={{
      max: 45,
      scale: 1,
      speed: 500,
    }}
    className="bg-gradient-to-r p-1 rounded-2xl sm:w-[100px] w-full shadow-lg"
  >
    <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)}>
      <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center justify-center w-35 h-35 transform transition-transform hover:scale-105">
        <img src={icon} alt={name} className="w-16 h-16 mb-2 object-contain" />
        <p className="text-gray-700 text-sm font-medium text-center">{name}</p>
      </div>
    </motion.div>
  </Tilt>
);

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology, index) => (
        <TechCard
          key={technology.name}
          icon={technology.icon}
          name={technology.name}
        />
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
