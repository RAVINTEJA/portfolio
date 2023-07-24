import React from "react";

const Card = ({children,className}) => {
  return (
    <div className={`relative h-max rounded-2xl border-2 border-solid border-dark  bg-light p-8 xs:p-6 dark:border-light dark:bg-dark ${className}`}>
      <div className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl  bg-dark dark:bg-light  "></div>
      {children}
    </div>
  );
};

export default Card;
