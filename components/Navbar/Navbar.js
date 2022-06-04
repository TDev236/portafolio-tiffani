import React, {useState} from 'react'
import Link from 'next/link'
import NavItems from './NavItems'
import NavResponsive from './NavResponsive'

const Navbar = () => {
  return (
      <div className='w-full h-[80px]  dark:bg-texto bg-texto sm:mx-auto sm:pl-20'>
          <div className='px-4 flex items-center justify-between'>
            <div className="flex justify-between items-center h-24 w-full px-8 sm:px-8">
                <p className="text-3xl text-naranja rounded px-4 font-bold "><span className='text-naranja'>{`<`}</span> tiffani <span className='text-naranja'>{`/>`}</span></p>
                <NavItems/>
                <NavResponsive/>
            </div>
        </div>
      </div>
      
        
  )
}

export default Navbar