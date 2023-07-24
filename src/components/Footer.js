import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark dark:border-light
    font-medium text-lg sm:text-base xs:text-sm '>
        <Layout className='py-8 lg:p-8 flex flex-row lg:flex-col items-center justify-between'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center underline-offset-2'>
                Build with <span className='text-primary text-2xl xs:text-xl px-1'>❤</span>
                by&nbsp; <span className="underline">Ravin Teja</span>
            </div>

            <Link href="mailto:ravinteja.chilukamari@gmail.com" className='underline'>Say hello!</Link>
        </Layout>
    </footer>
  )
}

export default Footer