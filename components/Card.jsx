import React from 'react'
import Image from 'next/image'


const Card = ({img, name, tecnology,url}) => {
  return (
    <div className=" max-w-[350px]  m-8 md:transition ease-out delay-150 hover:scale-105">
        <div className="rounded-xl shadow-md shadow-naranja  p-2 hover:shadow-naranja-oscuro  ">
          <Image src={img} className=" rounded-xl"  width="400" height="300"  alt={name}/>
          <div className="flex flex-col items-end my-2 py-2 mx-4">
            <h1 className="text-xl  text-right px-4 text-texto font bold border-b w-[180px]  ">{name}</h1>
            <p className="py-2 text-sm sm:text-xs md:text-lg text-naranja-oscuro">{tecnology}</p>
            <a target='_blank' rel="noreferrer" className="bg-naranja p-2 mt-2 rounded-lg text-texto transition ease-in-out delay-150 hover:translate-x-1" href={url}>Live Demo</a>
          </div>
        </div>
    </div>
  )
}

export default Card