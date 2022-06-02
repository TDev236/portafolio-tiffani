import React from 'react'
import ReactTypingEffect from 'react-typing-effect'

const Hero = () => {
  return (
    <div className="">
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <span className="text-naranja-oscuro font-bold">Hi</span>
        <h1 className="text-6xl md:text-6xl">{`i'am `}<span className='text-[] font-bold text-6xl sm:text-8xl'>Tiffani</span></h1>
        <ReactTypingEffect
          text={['Ui Developer','Gamer', 'Photography', 'Futbol']}
          eraseSpeed={30}
          eraseDelay={100}
          speed={150}
          className="text-naranja font-bold text-4xl md:text-6xl"
        />
      </div>
    </div>
  )
}

export default Hero