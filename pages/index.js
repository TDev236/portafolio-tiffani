import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import LinksNav from '../components/LinksNav'
import Contact from '../components/Contact'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import LinksDesktop from '../components/LinksDesktop'
import { useTheme } from 'next-themes'
import {GoLightBulb} from 'react-icons/go'
import {MdNightlight} from 'react-icons/md'

export default function Home() {
  const {theme, setTheme} = useTheme()
  const changeTheme = () => {
    if(theme === 'light'){
      setTheme('dark')
    }else{
      setTheme('light')
    }
  }
  return (
    <div className='relative mx-auto w-full max-h-screen'>
      <Head>
        <title>Tiffani  Front - Front End - 2022</title>
        <meta name="description" content="Portafolio Build with Next Js and Tailwind Css" />
        <link rel="icon" href="/tr.ico" />
      </Head>
      <button 
        onClick={changeTheme}
        className='dark:bg-naranja-oscuro bg-naranja-oscuro rounded-xl p-2 mx-6 right-2 bottom-10 fixed z-10 text-texto font-bold dark:text-texto'>
        {theme === 'light' ? <GoLightBulb/> : <MdNightlight className='text-texto'/>}
      </button>
      <LinksNav/>
      <LinksDesktop/>
     <Navbar/>
     <Hero/>
     <About/>
     <Projects/>
     <Contact/>
     <Footer/>
    </div>
  )
}
