import React from 'react'
import {AiFillGithub, AiOutlineWhatsApp} from 'react-icons/ai'
import {BiMailSend} from 'react-icons/bi'

const LinksDesktop = () => {
  return (
    <div className="fixed bg-naranja">
        <div className="hidden md:fixed bottom-0 right-0 bg-naranja">
          <a target="_blank" rel="noreferrer" href="https://www.github.com/TDev236" className=''>
                <AiFillGithub className='cursor-pointer p-2 hover:bg-texto rounded-xl hover:text-naranja' size={40}/>
            </a>
            <a target="_blank" rel="noreferrer" href="https://wa.me/573175912109">
              <AiOutlineWhatsApp className='cursor-pointer p-2 hover:bg-texto hover:text-naranja rounded-xl' size={40}/>
            </a>
            <a  href="#contact">
              <BiMailSend className='cursor-pointer p-2 hover:bg-texto hover:text-naranja rounded-xl' size={40}/>
            </a>
          </div>
    </div>
  )
}

export default LinksDesktop