import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Tools from './components/Tools'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
import Education from './components/Education'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <div className='bg-bg w-full xl:px-52 p-5 font-Inter z-10'>
      <Navbar />
      <Hero />
      <div className='mx-5'>
        <About />
        <Tools />
        <Projects />
        <Education />
        <ContactMe />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App
