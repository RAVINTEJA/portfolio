import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

const MotionLink = motion(Link)
const Logo = () => {

  const hoverAnimation = {
    backgroundColor: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"],
    transition: { duration: 1, repeat: Infinity }
  };

  

  return (
    <div>
      <MotionLink href="/"
        className="w-16 h-16 bg-dark text-light  dark:border-light border-2 rounded-full flex items-center justify-center text-2xl font-bold"
        // write two whileHover calls for this element one for dark mode and for light mode

        whileHover={hoverAnimation}
      >
        RT
      </MotionLink>
    </div>
  )
}

export default Logo