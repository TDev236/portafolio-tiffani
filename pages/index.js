import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import LinksNav from '../components/LinksNav'
import Contact from '../components/Contact'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import LinksDesktop from '../components/LinksDesktop'


export default function Home() {
  return (
    <div className='relative'>
      <Head>
        <title>Tiffani  Front - Front End - 2022</title>
        <meta name="description" content="Portafolio Build with Next Js and Tailwind Css" />
        <link rel="icon" href="/tr.ico" />
      </Head>
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
