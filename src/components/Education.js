import { useScroll, motion } from "framer-motion";
import { useRef } from "react";

import data from "../../public/data/Education.json";
import LiIcon from "./LiIcon";

const SingleEducation = ({ data }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div 
      initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {data.degree}
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {data.period} | {data.university}
        </span>
        <p className="font-medium w-full md:text-sm">{data.description}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[60%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-9 xs:left-20 h-full bg-dark  origin-top  dark:bg-primaryDark dark:shadow-3xl"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {data.EducationList.map((data) => (
            <SingleEducation data={data} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;
