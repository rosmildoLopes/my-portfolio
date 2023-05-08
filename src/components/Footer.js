import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-dark font-medium text-lg'>
      <Layout className='py-8 flex justify-between items-center'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className='flex items-center'>
          Build with <span className='text-primary text-2xl px-1'>&#9825;</span> by&nbsp; <Link 
          href='https://github.com/rosmildoLopes'
          target={'_blank'}
          className='underline underline-offset-2'>Rosmildo-Lopes</Link>
        </div>
        <Link 
        href='https://www.linkedin.com/in/rosmildolopes/'
        target={'_blank'}
        >Say Hello</Link>
      </Layout>
    </footer>
  )
}

export default Footer