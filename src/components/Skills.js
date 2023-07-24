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
    { name: "HTML", x: "-20vw", y: "-15vw" },
    { name: "CSS", x: "-10vw", y: "-20vw" },
    { name: "JavaScript", x: "-25vw", y: "-5vw" },
    { name: "React", x: "-15vw", y: "0vw" },
    { name: "Node", x: "-10vw", y: "-10vw" },
    { name: "SpringBoot", x: "18vw", y: "0vw" },
    { name: "MongoDB", x: "-25vw", y: "5vw" },
    { name: "Git", x: "0vw", y: "-23vw" },
    { name: "MySql", x: "20vw", y: "-15vw" },
    { name: "PostgreSQL", x: "15vw", y: "-20vw" },
    { name: "Python", x: "-10vw", y: "10vw" },
    { name: "Github", x: "11vw", y: "20vw" },
    { name: "TailwindCSS", x: "25vw", y: "-5vw" },
    { name: "Java", x: "10vw", y: "-10vw" },
    { name: "Jenkins", x: "-20vw", y: "15vw" },
    { name: "DevOps", x: "0vw", y: "23vw" },
    { name: "Docker", x: "-11vw", y: "20vw" },
    { name: "Selenium", x: "25vw", y: "15vw" },
    { name: "Django", x: "10vw", y: "10vw" },
    ];



const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div className="w-full h-[100vh] relative bg-circularLight dark:bg-circularDark  flex items-center justify-center  mb-64 lg:mb-32 rounded-full lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd  sm:bg-circularLightSm sm:dark:bg-circularDarkSm xs:bg-circularLightXs xs:dark:bg-circularDarkXs lg:h-[80vh] md:h-[70vh] sm:h-[60vh] xs:h-[50vh]  ">
        <motion.div
          className="cursor-pointer flex rounded-full font-semibold bg-dark text-light p-6  text-lg shadow-dark dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2 "
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        {/* Add key while mapping list to componets */}
        {
            skillsList.map((skill) => (
                <Skill name={skill.name} x={skill.x} y={skill.y} key={skill.name}/>
            ))
        }
        
        
      </div>
    </>
  );
};

export default Skills;
