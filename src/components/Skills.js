import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center bg-dark text-light font-semibold 
    rounded-full p-8 shadow-dark cursor-pointer absolute py-3 px-6"
      whileHover={{ scale: 1.1 }}
      initial={{x:0, y:0}}
      whileInView={{  x: x, y: y  }}
      viewport={{once:true}}
      transition={{ duration: 1.5 }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center text-dark">
        Skills
      </h2>
      <div className="flex items-center w-full h-screen relative justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center bg-dark text-light font-semibold 
        rounded-full px-6 py-12 shadow-dark cursor-pointer "
          whileHover={{ scale: 1.1 }}
        >
          Full Stack
        </motion.div>
        <Skill name="HTML" x="6vw" y="-12vw"/>
        <Skill name="CSS" x="-19vw" y="-5vw"/>
        <Skill name="Javascript" x="-5vw" y="-9vw"/>
        <Skill name="AGREGAR" x="-15vw" y="-14vw"/>
        <Skill name="ReactJS" x="-14vw" y="1vw"/>
        <Skill name="NextJS" x="9vw" y="-6vw"/>
        <Skill name="Tailwind" x="14vw" y="0vw"/>
        <Skill name="BootStrap" x="27vw" y="0vw"/>
        <Skill name="Node" x="1vw" y="9vw"/>
        <Skill name="Express" x="-13vw" y="10vw"/>
        <Skill name="Python" x="13vw" y="10vw"/>
        <Skill name="AGREGAR+" x="-27vw" y="0vw"/>


        

      </div>
    </>
  );
};

export default Skills;
