
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import MainPage from './components/MainPage';
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact';

import WaveSimPage from './components/ProjectPages/WaveSimPage';
import RayTracerPage from './components/ProjectPages/RayTracerPage';
import RendererPage from './components/ProjectPages/RendererPage';

import "./css/App.css"

function App (props) {

  const [darkMode, setDarkMode] = React.useState(true)

  function toggleTheme() {
    setDarkMode(darkMode => !darkMode)

  }

  return (
    <div className={`${darkMode ? "dark bg-gradient-to-r from-blue-950" : ""} font-sans w-full min-h-screen overflow-x-hidden`}>

      <NavBar darkMode={darkMode} toggleTheme={toggleTheme}/>
    
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/resume" element={<Resume />}/>
        <Route path="/contact" element={<Contact />}/>

        {/* project pages  */}
        <Route path="/projects/opengl-renderer" element={<RendererPage />}/>
        <Route path="/projects/wave-sim" element={<WaveSimPage />}/>
        <Route path="/projects/ray-tracer" element={<RayTracerPage />}/>

      </Routes>


    </div>
  )

}

export default App;
