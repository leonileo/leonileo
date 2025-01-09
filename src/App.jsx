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
import { useState } from 'react'

function App() {
  // states
  const [active, setActive] = useState(0);
  const [activeTab, setActiveTab] = useState(false);

  return (
    <div className='bg-bg w-full xl:px-52 p-2 font-Inter z-10'>
      <Navbar active={active} setActive={setActive} activeTab={activeTab} setActiveTab={setActiveTab} />
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
