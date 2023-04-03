import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark
    font-medium lg:text-lg'>
        <Layout className='py-8 flex flex-col md:flex-row items-center justify-between'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center underline-offset-2'>
                Build with <span className='text-primary text-2xl px-1'>❤</span>
                by&nbsp; Ravin Teja
            </div>

            <Link href="mailto:ravinteja.chilukamari@gmail.com">Say hello!</Link>
        </Layout>
    </footer>
  )
}

export default Footer