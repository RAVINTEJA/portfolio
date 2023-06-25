import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div
    className='fixed bottom-4 left-4
    flex items-center justify-center overflow-hidden'
    >
        <div className='w-48 h-auto flex items-center justify-center relative'>
            <CircularText className={"fill-dark dark:fill-light animate-spin-slow"}/>
            <Link href="mailto:ravinteja.chilukamari@gmail.com"
            target={"_blank"} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-dark dark:bg-light text-light dark:text-dark shadow-md border border-solid border-dark dark:border-light
            w-20 h-20 rounded-full font-semibold hover:bg-light dark:hover:bg-dark hover:text-dark dark:hover:text-light ">
                Hire Me</Link>
        </div>
    </div>
  )
}

export default HireMe