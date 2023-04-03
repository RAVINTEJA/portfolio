import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="cursor-pointer w-max origin-center absolute  font-semibold bg-dark text-light py-3 px-6 rounded-full dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3  xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold "
      whileHover={{ scale: 1.05 }}
      initial={{ x:0, y:0 }}
      animate={{ x: x, y: y }}
      transition={{ duration: 1.5}}
    >
      {name}
    </motion.div>
  );
};


const skillsList = [
    { name: "HTML", x: "-10vw", y: "2vw" },
    { name: "CSS", x: "-5vw", y: "10vw" },
    { name: "JavaScript", x: "20vw", y: "6vw" },
    { name: "React", x: "0vw", y: "12vw" },
    { name: "Node", x: "-20vw", y: "-15vw" },
    { name: "MongoDB", x: "-15vw", y: "5vw" },
    { name: "Git", x: "-20vw", y: "-5vw" },
    { name: "Python", x: "-5vw", y: "5vw" },
    { name: "Github", x: "10vw", y: "10vw" },
    { name: "TailwindCSS", x: "20vw", y: "-10vw" },
    { name: "Java", x: "5vw", y: "-5vw" },
    { name: "SpringBoot", x: "-10vw", y: "-10vw" },
    { name: "Jenkins", x: "-20vw", y: "10vw" },
    { name: "DevOps", x: "-5vw", y: "-5vw" },
    { name: "Docker", x: "10vw", y: "-10vw" },
    { name: "Selenium", x: "25vw", y: "0vw" },
    { name: "Django", x: "5vw", y: "5vw" },
    { name: "GraphQL", x: "-10vw", y: "15vw" },
    ];



const Skills = () => {
  return (
    <>
      <h2 class="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div className="w-full h-[100vh] relative bg-circularLight dark:bg-circularDark  flex items-center justify-center  mb-64 md:mb-32 rounded-full lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd  sm:bg-circularLightSm sm:dark:bg-circularDarkSm lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]  ">
        <motion.div
          className="cursor-pointer flex rounded-full font-semibold bg-dark text-light p-8 shadow-dark dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2 "
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        {
            skillsList.map((skill) => (
                <Skill name={skill.name} x={skill.x} y={skill.y} />
            ))
        }
        
        
      </div>
    </>
  );
};

export default Skills;
