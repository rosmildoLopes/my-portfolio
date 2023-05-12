import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className='fixed bottom-4 left-4 flex items-center justify-center overflow-hidden
    '>
      <div className='w-48 h-auto flex items-center justify-center relative'>
        <CircularText className={'fill-dark animate-spin-slow dark:fill-light'}/>
        <Link href='mailto:lopesrosmildo@gmail.com' className='flex items-center justify-center
        absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark rounded-full
        text-light shadow-md border-2 border-solid border-transparent w-20 h-20 font-semibold
        hover:bg-light hover:text-dark dark:bg-light dark:text-dark dark:border-light 
        hover:dark:bg-dark hover:dark:text-light'>
          Hire Me
        </Link>
      </div>
    </div>
  )
}

export default HireMe