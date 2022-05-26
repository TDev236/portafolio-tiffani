import React, {useState} from 'react'
import Link from 'next/link'
import {BiMenuAltRight} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }
  return (
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-10 sm:px-16">
            <p className="text-3xl text-naranja rounded px-4 font-bold"><span className='text-texto'>{`<`}</span> tiffani <span className='text-texto'>{`/>`}</span></p>
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
            <div className="block md:hidden bg-naranja text-background rounded" onClick={handleOpen}>
                {!open ? <BiMenuAltRight  size={30}/> : <AiOutlineClose size={30}/>}
            </div>

            <div className={open ? 'fixed md:hidden p-8 left-0 top-0 w-[60%] border-r h-full text-white border-r-gray-900 bg-naranja  ease-in-out duration-500 z-1000 group': 'fixed left-[-100%]'}>
                <Link className="py-6  " href="#about" >
                    <p onClick={() => setOpen(false)} className="py-2 m-2 rounded-xl w-content hover:bg-background hover:text-texto px-2 font-bold text-2xl cursor-pointer">About Me</p>
                </Link>
                <Link className="" href="#projects">
                    <p onClick={() => setOpen(false)} className='py-2 m-2 hover:bg-background hover:text-texto w-content px-2 rounded-xl font-bold text-2xl cursor-pointer'>Projects</p>
                </Link>
                <Link className="py-6" href="#contact">
                    <p onClick={() => setOpen(false)} className="py-2 m-2 hover:bg-background hover:text-texto w-content px-2 rounded-xl font-bold text-2xl cursor-pointer">Contact Me</p>
                </Link>
            </div>
        </div>
  )
}

export default Navbar