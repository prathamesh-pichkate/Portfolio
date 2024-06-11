import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
// import Blogs from './components/Blogs'
import Footer from './components/Footer'

function App() {
  return (
    < div className='bg-cyan-100'>
      <Navbar/>
      <Home/>
      <Projects/>
      <Experience/>
      <Skills/>
      {/* <Blogs/> */}
      <Footer/>
    </div>
  )
}

export default App
