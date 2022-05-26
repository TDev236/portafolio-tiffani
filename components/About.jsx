import React from 'react'
import Me from '../utils/imgs/me-dev.png'
import Image from 'next/image'
const About = () => {
  return (
    <div id='about' className='bg-blanco py-4 '>
        <div className='max-w-[80%] h-screen flex flex-col mx-auto sm:flex-row justify-between items-center'>
            <Image
                src={Me}
                alt='Tiffani'
                className=''
            />
            <div className='flex flex-col mx-auto items-center mt-8 justify-center pl-4 md:ml-8 md:w-1/2'>
              <h2 className='mt-2 font-bold text-2xl sm:text-4xl text-naranja'>About Me</h2>
              <p className='p-2 text-xl sm:text-2xl m-4'>I'm a self taught Front End Developer, i'm always looking to improve my coding skills, the UX experience is fundamental in the projects i develop </p>
            </div>
        </div>        
    </div>
  )
}

export default About