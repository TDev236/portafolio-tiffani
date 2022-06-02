import React,{useState} from 'react'
import Link from 'next/link'
import {BiMenuAltRight} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'

const NavResponsive = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  }

  return (
    <div>
      <div className="block md:hidden  text-naranja font-bold rounded" onClick={handleOpen}>
                {!open ? <BiMenuAltRight  size={30}/> : <AiOutlineClose size={30}/>}
            </div>
        <div className={!open ? 'hidden':' absolute right-0 my-4 p-4 w-full sm:hidden text-background-second bg-naranja min-h-[150px] flex flex-col items-center'}>
          <Link className=" " href="#about" >
              <p onClick={() => setOpen(false)} className="py-2 text-texto text-xl hover:shadow-xl hover:transition-transform duration-100 ease-in-out px-4 rounded-xl w-full">About Me</p>
          </Link>
          <Link className="" href="#projects">
              <p onClick={() => setOpen(false)} className='py-2 text-texto text-xl hover:shadow-xl hover:transition-transform duration-100 ease-in-out px-4 rounded-xl w-full'>Projects</p>
          </Link>
          <Link className="" href="#contact">
              <p onClick={() => setOpen(false)} className="py-2 text-texto text-xl hover:shadow-xl hover:transition-transform duration-100 ease-in-out px-4 rounded-xl w-full">Contact Me</p>
          </Link>
        </div>
    </div>
  )
}

export default NavResponsive