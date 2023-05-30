import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center bg-dark text-light font-semibold 
    rounded-full p-8 shadow-dark cursor-pointer absolute py-3 px-6 dark:bg-light dark:text-dark
    lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark
    xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.1 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center text-dark dark:text-light md:text-6xl md:mt32">
        Skills
      </h2>
      <div
        className="flex items-center w-full h-screen relative justify-center rounded-full 
      bg-circularLight dark:bg-circularDark lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]"
      >
        <motion.div
          className="flex items-center justify-center bg-dark dark:bg-light dark:text-dark text-light font-semibold 
        rounded-full px-6 py-12 shadow-dark cursor-pointer lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.1 }}
        >
          Full Stack
        </motion.div>
        <Skill name="HTML" x="6vw" y="-16vw" />
        <Skill name="CSS" x="-19vw" y="-5vw" />
        <Skill name="Javascript" x="-5vw" y="-9vw" />
        <Skill name="TailwindCSS" x="-15vw" y="-14vw" />
        <Skill name="Figma" x="-14vw" y="5vw" />
        <Skill name="NextJS" x="20vw" y="-6vw" />
        <Skill name="BootStrap" x="27vw" y="0vw" />
        <Skill name="Node" x="1vw" y="9vw" />
        <Skill name="Express" x="-13vw" y="14vw" />
        <Skill name="Python" x="13vw" y="15vw" />
        <Skill name="ReactJS" x="-27vw" y="0vw" />
      </div>
    </>
  );
};

export default Skills;
