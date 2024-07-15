import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { PlaneCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="w-full h-[65rem] flex justify-center items-center relative mx-auto">
      <div className={`${styles.paddingX} flex flex-row items-start gap-5 z-10`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <motion.div
            className="w-5 h-5 rounded-full bg-[#915eff]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="w-1 sm:h-80 h-40 violet-gradient"
            initial={{ height: 0 }}
            animate={{ height: "20rem" }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>
        <div>
          <motion.h1
            className={`${styles.heroHeadText} text-white`}
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Hi, I'm <span className="text-[#d5763c]">Gaurav Naval</span>
          </motion.h1>
          <motion.div
            className={`${styles.heroSubText} mt-2 text-white-100`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <p>
              A Passionate Developer from{" "}
              <span className="relative">
                <span className="bg-gradient-to-r font-bold from-india-orange via-india-white to-india-green bg-clip-text text-transparent">
                  INDIA
                </span>
              </span>
            </p>
            <p className="text-secondary mt-8 max-w-[800px]">
              "Finding innovative solutions to challenging problems is my expertise,<br className='sm:hidden block' /> a skill I utilize in both my professional projects and personal Life."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
