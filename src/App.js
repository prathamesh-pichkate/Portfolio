import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
// import Blogs from './components/Blogs';
import Footer from './components/Footer';
import FullStackProjects from './Pages/FullStackProjects';
import AllExperience from './Pages/AllExperience';
import AllProjects from './Pages/AllProjects';
import AllBlogs from './Pages/AllBlogs';
import FrontEndProjects from './Pages/FrontEndProjects';
// import NoPage from './components/NoPage'; // Import the NoPage component

const Layout = ({ children }) => (
  <div>
    <Navbar />
    {children}
    <Footer />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /><Projects /><Experience /><Skills /></Layout>} />
        <Route path="blogs" element={<Layout><AllBlogs/></Layout>}/>
        <Route path="skills" element={<Layout><Skills/></Layout>}/>
        <Route path="/projects" element={<Layout><AllProjects /></Layout>} />
        <Route path="/allExperience" element={<Layout><AllExperience /></Layout>} />
        <Route Path="frontendprojects" element={<Layout><FrontEndProjects/></Layout>}/>
        <Route path="/fullstackprojects" element={<Layout><FullStackProjects /></Layout>} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
