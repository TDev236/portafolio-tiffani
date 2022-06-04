import React from 'react'
import {AiFillGithub, AiOutlineWhatsApp} from 'react-icons/ai'
import {BiMailSend} from 'react-icons/bi'
import Link from 'next/link'

const LinksNav = () => {
  return (
    <div className='fixed  left-[-10%] bottom-[50%] hover:left-0   shadow-2xl z-10'>
        <div className='bg-naranja  p-2 space-y-2 relative rounded-r-xl '>
          <div className='flex flex-col items-center group rounded-r-xl space-y-2'>
            <a target="_blank" rel="noreferrer" href="https://www.github.com/TDev236" className=''>
                <AiFillGithub className='cursor-pointer p-2 hover:bg-background-second rounded-xl hover:text-texto' size={40}/>
            </a>
            <a target="_blank" rel="noreferrer" href="https://wa.me/573175912109">
              <AiOutlineWhatsApp className='cursor-pointer p-2 hover:bg-background-second hover:text-texto rounded-xl' size={40}/>
            </a>
            <a  href="#contact">
              <BiMailSend className='cursor-pointer p-2 hover:bg-background-second hover:text-texto rounded-xl' size={40}/>
            </a>
          </div>
        </div>
    </div>
  )
}

export default LinksNav