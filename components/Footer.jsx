import React from 'react'
import Image from 'next/image'
import {BsFillSuitHeartFill} from 'react-icons/bs'
const Footer = () => {
  return (
    <div className=" fixed w-full h-[50px] bg-background-second">
        <div className="flex flex-col justify-center items-center ">
            <div className="flex space-x-4 items-center justify-center pt-4">
                <h1 className="flex items-center text-texto font-bold ">{`Develop with `}</h1>
                <BsFillSuitHeartFill className="text-danger"/>
                <p className="text-texto font-bold"> by {`${" - "}`} <span className="text-naranja font-bold">Tiffani R M</span></p>
            </div>
            <span className="font-bold text-texto ">2022</span>
        </div>
    </div>
  )
}

export default Footer