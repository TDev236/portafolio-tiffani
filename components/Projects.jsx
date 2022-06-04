import React from 'react'
import Image from 'next/image'
import Card from './Card'
import {cardInfo} from '../utils/data'
{/**IMAGES FROM PROJECTS */}


const Projects = () => {
  return (
    <div id='projects' className="flex flex-col justify-center items-center dark:bg-background-second bg-texo">
      <h1 className="mt-4 dark:bg-background-second font-bold text-center text-4xl">This are some of my Projects</h1>
      <div className='grid sm:grid-cols-2 md:grid-cols-3  gap-4'>
        {cardInfo.map(({name, tecnology, img, id, url}) => (
          <Card name={name} tecnology={tecnology} key={id} img={img} url={url}/>
        ))}
      </div>
      
    </div>
  )
}

export default Projects