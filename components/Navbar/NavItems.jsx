import React from 'react'
import Link from 'next/link'

const NavItems = () => {
  return (
    <div>
        <div className="hidden md:flex space-x-4 text-naranja font-bold items-center">
                <Link href="#about" className=''>
                    <p className="hover:border-b-2 border-texto cursor-pointer">About Me</p>
                </Link>
                <Link href="#projects" className="py-2">
                    <p className="hover:border-b-2 border-texto cursor-pointer">Projects</p>
                </Link>
                <Link href="#contact">
                    <p className=' bg-naranja-oscuro p-2 text-texto rounded hover:shadow-xl shadow-naranja-oscuro cursor-pointer'>Contact Me</p>
                </Link>
            </div>
    </div>
  )
}

export default NavItems